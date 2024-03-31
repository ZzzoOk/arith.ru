package domain

import "time"

type User struct {
	Id             int        `bson:"-" db:"id"`
	Name           string     `bson:"username" binding:"required"`
	Email          string     `bson:"email" binding:"required"`
	PasswordHash   string     `bson:"passwordHash" binding:"required"`
	RegisteredDate *time.Time `bson:"registeredDate" binding:"required"`
}
