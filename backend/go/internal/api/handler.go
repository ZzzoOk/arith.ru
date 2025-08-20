package api

import (
	"github.com/ZzzoOk/arith.ru/backend/go/internal/service"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	services *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	auth := router.Group("/auth")
	{
		auth.POST("/signup", h.signUp)
		auth.POST("/signin", h.signIn)
		auth.POST("/reset", h.reset)
	}

	results := router.Group("/results")
	{
		results.POST("", h.addResult)
		results.GET("", h.getResults)
	}

	router.GET("/leaders", h.getLeaders)

	return router
}
