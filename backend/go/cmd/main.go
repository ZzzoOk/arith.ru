package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/ZzzoOk/arith.ru/backend/go/internal/api"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/repository"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/server"
	"github.com/ZzzoOk/arith.ru/backend/go/internal/service"

	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	"go.mongodb.org/mongo-driver/v2/mongo/readpref"
)

func main() {
	ctx := context.Background()
	mongoURI := os.Getenv("mongoURI")
	client, err := mongo.Connect(options.Client().ApplyURI(mongoURI))
	if err != nil {
		panic(err)
	}
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}

	repos := repository.NewRepository(client)
	services := service.NewService(repos)
	handlers := api.NewHandler(services)

	srv := new(server.Server)
	go func() {
		if err = srv.Run("8000", handlers.InitRoutes()); err != nil {
			panic(err)
		}
	}()

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
