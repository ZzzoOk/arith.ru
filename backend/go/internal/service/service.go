package service

import (
	"context"
	"main/internal/domain"
	"main/internal/repository"
)

type Auth interface {
	GenerateToken(ctx context.Context, username, password string) (string, error)
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

type Service struct {
	Auth
	User
	Result
}

func NewService(r *repository.Repository) *Service {
	return &Service{
		Auth:   NewAuthService(r.User),
		User:   NewUserService(r.User),
		Result: NewResultService(r.Result),
	}
}
