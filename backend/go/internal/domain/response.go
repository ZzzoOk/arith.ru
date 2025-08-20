package domain

import (
	"log"

	"github.com/gin-gonic/gin"
)

type GetResultsResponse struct {
	Data []Result `json:"data"`
}

type errorResponse struct {
	Message string `json:"message"`
}

func NewErrorResponse(c *gin.Context, statusCode int, message string) {
	log.Print(message)
	c.AbortWithStatusJSON(statusCode, errorResponse{message})
}
