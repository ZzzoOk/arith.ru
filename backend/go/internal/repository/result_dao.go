package repository

import (
	"context"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type ResultDAO struct {
	c *mongo.Collection
}

func NewResultDAO(client *mongo.Client) *ResultDAO {
	return &ResultDAO{
		c: client.Database("arith").Collection("results"),
	}
}

func (dao *ResultDAO) Create(ctx context.Context, result domain.Result) error {
	_, err := dao.c.InsertOne(ctx, result)
	return err
}

func (dao *ResultDAO) GetAll(ctx context.Context, username string, questionCount int) ([]domain.Result, error) {
	filter := bson.M{"username": username, "questionCount": questionCount}

	var results []domain.Result

	if cursor, err := dao.c.Find(ctx, filter); err != nil {
		return nil, err
	} else {
		if err = cursor.All(context.TODO(), &results); err != nil {
			return nil, err
		}
	}

	return results, nil
}

func (dao *ResultDAO) GetLeaders(ctx context.Context, questionCount int) ([]domain.Result, error) {
	pipeline := []bson.M{
		{"$match": bson.M{"questionCount": questionCount}},
		{"$group": bson.M{
			"_id": "$username",
			"result": bson.M{
				"$min": bson.M{
					"result":   "$result",
					"date":     "$date",
					"username": "$username"}}}},
		{"$replaceRoot": bson.M{"newRoot": "$result"}}}

	var results []domain.Result

	if cursor, err := dao.c.Aggregate(ctx, pipeline); err != nil {
		return nil, err
	} else {
		if err = cursor.All(context.TODO(), &results); err != nil {
			return nil, err
		}
	}

	return results, nil
}
