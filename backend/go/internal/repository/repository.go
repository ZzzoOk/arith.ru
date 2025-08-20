package repository

import (
	"context"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type User interface {
	Create(ctx context.Context, user domain.User) error
	GetByEmail(ctx context.Context, email string) (*domain.User, error)
	GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error)
	UpdatePassword(ctx context.Context, user *domain.User) error
}

type Result interface {
	Create(ctx context.Context, result domain.Result) error
	GetAll(ctx context.Context, username string, questionCount int) ([]domain.Result, error)
	GetLeaders(ctx context.Context, questionCount int) ([]domain.Result, error)
}

type Repository struct {
	User
	Result
}

func NewRepository(c *mongo.Client) *Repository {
	return &Repository{
		User:   NewUserDAO(c),
		Result: NewResultDAO(c),
	}
}
