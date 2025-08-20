package api

import (
	"net/http"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/gin-gonic/gin"
)

func (h *Handler) getLeaders(c *gin.Context) {
	questionCount := c.GetInt("questionCount")

	if results, err := h.services.Result.GetLeaders(c, questionCount); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	} else {
		c.JSON(http.StatusOK, domain.GetResultsResponse{Data: results})
	}
}
