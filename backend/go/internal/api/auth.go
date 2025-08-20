package api

import (
	"net/http"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/domain"
	"github.com/gin-gonic/gin"
)

func (h *Handler) signUp(c *gin.Context) {
	var user domain.User

	if err := c.BindJSON(&user); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	if err := h.services.User.Create(c, user); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.Status(http.StatusOK)
}

func (h *Handler) signIn(c *gin.Context) {
	type signInInput struct {
		Username string `json:"username" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	var input signInInput

	if err := c.BindJSON(&input); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	if token, err := h.services.Auth.GenerateToken(c, input.Username, input.Password); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	} else {
		c.JSON(http.StatusOK, map[string]interface{}{
			"token": token,
		})
	}
}

func (h *Handler) reset(c *gin.Context) {
	type resetInput struct {
		Email string `json:"email" binding:"required"`
	}

	var input resetInput

	if err := c.BindJSON(&input); err != nil {
		domain.NewErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	if user, err := h.services.User.GetByEmail(c, input.Email); err != nil {
		domain.NewErrorResponse(c, http.StatusNotFound, err.Error())
		return
	} else if err := h.services.User.UpdatePassword(c, user); err != nil {
		domain.NewErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.Status(http.StatusOK)
}
