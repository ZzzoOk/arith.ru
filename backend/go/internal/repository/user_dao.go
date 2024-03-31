package repository

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"main/internal/domain"
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
	filter := bson.M{"username": user.Name, "email": user.Email}
	if err := dao.c.FindOne(ctx, filter); err == nil {
		return errors.New("user already exists")
	}
	if _, err := dao.c.InsertOne(ctx, user); err != nil {
		return err
	}
	return nil
}

func (dao *UserDAO) Get(ctx context.Context, usernameOrEmail string) (*domain.User, error) {
	filter := bson.M{"username": usernameOrEmail, "email": usernameOrEmail}
	var user domain.User
	if err := dao.c.FindOne(ctx, filter).Decode(&user); err != nil {
		return nil, err
	}
	return &user, nil
}

func (dao *UserDAO) GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error) {
	filter := bson.M{"username": usernameOrEmail, "email": usernameOrEmail, "passwordHash": passwordHash}
	var user domain.User
	if err := dao.c.FindOne(ctx, filter).Decode(&user); err != nil {
		return nil, err
	}
	return &user, nil
}
