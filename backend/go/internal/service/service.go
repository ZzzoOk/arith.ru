package service

import (
	"context"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/repository"
)

type Auth interface {
	GenerateToken(ctx context.Context, username, password string) (string, error)
	ParseToken(token string) (int, error)
}

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
