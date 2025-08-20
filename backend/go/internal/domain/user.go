package domain

import "time"

type User struct {
	Id             int        `bson:"-" db:"id"`
	Email          string     `bson:"email" binding:"required"`
	Username       string     `bson:"username" binding:"required"`
	Password       string     `bson:"password" binding:"required"`
	RegisteredDate *time.Time `bson:"registeredDate" binding:"required"`
}
