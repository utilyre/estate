package database

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var Client *mongo.Client

func Connect() error {
	host := os.Getenv("DATABASE_HOST")
	port := os.Getenv("DATABASE_PORT")
	user := os.Getenv("DATABASE_USER")
	pass := os.Getenv("DATABASE_PASS")

	uri := fmt.Sprintf("mongodb://%s:%s@%s:%s", user, pass, host, port)
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	last := time.Now()
	err = client.Connect(ctx)
	if err != nil {
		return err
	}
	log.Printf("Took %f seconds to connect to mongodb\n", time.Since(last).Seconds())

	last = time.Now()
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		return err
	}
	log.Printf("Took %f seconds to ping mongodb\n", time.Since(last).Seconds())

	Client = client
	return nil
}
