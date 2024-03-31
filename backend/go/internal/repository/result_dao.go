package repository

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"main/internal/domain"
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

	cursor, err := dao.c.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var results []domain.Result
	if err = cursor.All(context.TODO(), &results); err != nil {
		return nil, err
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

	cursor, err := dao.c.Aggregate(ctx, pipeline)
	if err != nil {
		return nil, err
	}

	var results []domain.Result
	if err = cursor.All(context.TODO(), &results); err != nil {
		return nil, err
	}

	return results, nil
}
