package domain

import "time"

type Result struct {
	Username      string     `bson:"username" binding:"required"`
	QuestionCount int        `bson:"questionCount" binding:"required"`
	Result        float64    `bson:"result" binding:"required"`
	Date          *time.Time `bson:"date" binding:"required"`
}
