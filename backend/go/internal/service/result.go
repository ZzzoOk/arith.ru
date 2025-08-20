package service

import (
	"context"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/repository"
)

type ResultService struct {
	r repository.Result
}

func NewResultService(r repository.Result) *ResultService {
	return &ResultService{r: r}
}

func (s *ResultService) Create(ctx context.Context, result domain.Result) error {
	return s.r.Create(ctx, result)
}

func (s *ResultService) GetAll(ctx context.Context, username string, questionCount int) ([]domain.Result, error) {
	return s.r.GetAll(ctx, username, questionCount)
}

func (s *ResultService) GetLeaders(ctx context.Context, questionCount int) ([]domain.Result, error) {
	return s.r.GetLeaders(ctx, questionCount)
}
