package main

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"main/internal/controller"
	"main/internal/repository"
	"main/internal/server"
	"main/internal/service"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	ctx := context.Background()
	mongoURI := os.Getenv("mongoURI")
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		panic(err)
	}

	repos := repository.NewRepository(client)
	services := service.NewService(repos)
	handlers := controller.NewHandler(services)

	srv := new(server.Server)
	if err = srv.Run("8000", handlers.InitRoutes()); err != nil {
		panic(err)
	}

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)
	<-quit

	if err := srv.Shutdown(ctx); err != nil {
		panic(err)
	}
	if err := client.Disconnect(ctx); err != nil {
		panic(err)
	}
}
