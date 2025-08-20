package service

import (
	"context"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/repository"
)

type UserService struct {
	r repository.User
}

func NewUserService(r repository.User) *UserService {
	return &UserService{r: r}
}

func (s *UserService) Create(ctx context.Context, user domain.User) error {
	user.Password = generatePasswordHash(user.Password)
	return s.r.Create(ctx, user)
}

func (s *UserService) GetByEmail(ctx context.Context, email string) (*domain.User, error) {
	return s.r.GetByEmail(ctx, email)
}

func (s *UserService) GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error) {
	return s.r.GetByPasswordHash(ctx, usernameOrEmail, passwordHash)
}

func (s *UserService) UpdatePassword(ctx context.Context, user *domain.User) error {
	user.Password = generatePasswordHash(user.Password)
	return s.r.UpdatePassword(ctx, user)
}
