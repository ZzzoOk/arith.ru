package repository

import (
	"context"
	"errors"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type UserDAO struct {
	c *mongo.Collection
}

func NewUserDAO(client *mongo.Client) *UserDAO {
	return &UserDAO{
		c: client.Database("arith").Collection("users"),
	}
}

func (dao *UserDAO) Create(ctx context.Context, user domain.User) error {
	filter := bson.M{"username": user.Username, "email": user.Email}
	if err := dao.c.FindOne(ctx, filter); err == nil {
		return errors.New("user already exists")
	}

	if _, err := dao.c.InsertOne(ctx, user); err != nil {
		return err
	}

	return nil
}

func (dao *UserDAO) GetByEmail(ctx context.Context, email string) (*domain.User, error) {
	var user domain.User

	filter := bson.M{"email": email}
	if err := dao.c.FindOne(ctx, filter).Decode(&user); err != nil {
		return nil, err
	}

	return &user, nil
}

func (dao *UserDAO) GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error) {
	var user domain.User

	filter := bson.M{"username": usernameOrEmail, "email": usernameOrEmail, "passwordHash": passwordHash}
	if err := dao.c.FindOne(ctx, filter).Decode(&user); err != nil {
		return nil, err
	}

	return &user, nil
}

func (dao *UserDAO) UpdatePassword(ctx context.Context, user *domain.User) error {
	filter := bson.M{"username": user.Id}
	update := bson.M{"passwordHash": user.Password}
	if err := dao.c.FindOneAndUpdate(ctx, filter, update); err != nil {
		return err.Err()
	}

	return nil
}
