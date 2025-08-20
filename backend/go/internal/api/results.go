package api

import (
	"net/http"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/gin-gonic/gin"
)

func (h *Handler) addResult(c *gin.Context) {
	var result domain.Result

	if err := c.BindJSON(&result); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	if err := h.services.Result.Create(c, result); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.Status(http.StatusOK)
}

func (h *Handler) getResults(c *gin.Context) {
	username := c.GetString("username")
	questionCount := c.GetInt("questionCount")

	if results, err := h.services.Result.GetAll(c, username, questionCount); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	} else {
		c.JSON(http.StatusOK, domain.GetResultsResponse{Data: results})
	}
}
