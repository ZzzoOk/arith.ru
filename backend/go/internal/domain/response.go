package domain

import (
	"github.com/gin-gonic/gin"
	"log"
)

type GetResultsResponse struct {
	Data []Result `json:"data"`
}

type GetLeadersResponse struct {
	Data []Result `json:"data"`
}

type errorResponse struct {
	Message string `json:"message"`
}

type statusResponse struct {
	Status string `json:"status"`
}

func NewErrorResponse(c *gin.Context, statusCode int, message string) {
	log.Print(message)
	c.AbortWithStatusJSON(statusCode, errorResponse{message})
}
