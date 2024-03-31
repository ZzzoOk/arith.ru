package controller

import (
	"github.com/gin-gonic/gin"
	"main/internal/domain"
	"main/internal/service"
	"net/http"
)

type Handler struct {
	services *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	router.POST("/signup", h.signUp)
	router.POST("/login", h.login)

	results := router.Group("/results")
	{
		results.POST("", h.addResult)
		results.GET("", h.getResults)
	}

	router.GET("/leaders", h.getLeaders)

	return router
}

func (h *Handler) signUp(c *gin.Context) {
	var input domain.User
	if err := c.BindJSON(&input); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	if err := h.services.User.Create(c, input); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.Status(http.StatusOK)
}

func (h *Handler) login(c *gin.Context) {

}

func (h *Handler) auth(c *gin.Context) {

}

func (h *Handler) addResult(c *gin.Context) {
	var input domain.Result
	if err := c.BindJSON(&input); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	if err := h.services.Result.Create(c, input); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.Status(http.StatusOK)
}

func (h *Handler) getResults(c *gin.Context) {
	username := c.GetString("username")
	questionCount := c.GetInt("questionCount")
	results, err := h.services.Result.GetAll(c, username, questionCount)
	if err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, domain.GetResultsResponse{Data: results})
}

func (h *Handler) getLeaders(c *gin.Context) {
	questionCount := c.GetInt("questionCount")
	results, err := h.services.Result.GetLeaders(c, questionCount)
	if err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, domain.GetResultsResponse{Data: results})
}
