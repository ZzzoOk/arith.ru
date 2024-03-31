package repository

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"main/internal/domain"
)

type Auth interface {
	GenerateToken(username, password string) (string, error)
	ParseToken(token string) (int, error)
}

type User interface {
	Create(ctx context.Context, user domain.User) error
	Get(ctx context.Context, usernameOrEmail string) (*domain.User, error)
	GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error)
}

type Result interface {
	Create(ctx context.Context, result domain.Result) error
	GetAll(ctx context.Context, username string, questionCount int) ([]domain.Result, error)
	GetLeaders(ctx context.Context, questionCount int) ([]domain.Result, error)
}

type Repository struct {
	Auth
	User
	Result
}

func NewRepository(c *mongo.Client) *Repository {
	return &Repository{
		User:   NewUserDAO(c),
		Result: NewResultDAO(c),
	}
}
