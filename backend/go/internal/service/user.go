package service

import (
	"context"
	"main/internal/domain"
	"main/internal/repository"
)

type UserService struct {
	r repository.User
}

func NewUserService(r repository.User) *UserService {
	return &UserService{r: r}
}

func (s *UserService) Create(ctx context.Context, user domain.User) error {
	user.PasswordHash = generatePasswordHash(user.PasswordHash)
	return s.r.Create(ctx, user)
}

func (s *UserService) Get(ctx context.Context, usernameOrEmail string) (*domain.User, error) {
	return s.r.Get(ctx, usernameOrEmail)
}

func (s *UserService) GetByPasswordHash(ctx context.Context, usernameOrEmail, passwordHash string) (*domain.User, error) {
	return s.r.GetByPasswordHash(ctx, usernameOrEmail, passwordHash)
}
