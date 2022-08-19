package main

import (
	"context"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/utilyre/estate/database"
	"github.com/utilyre/estate/routers"
)

func main() {
	err := database.Connect()
	if err != nil {
		log.Fatalln(err)
	}
	defer database.Client.Disconnect(context.Background())

	app := fiber.New()

	app.Use(cors.New())

	routers.V1(app)

	app.Listen("0.0.0.0:" + os.Getenv("SERVER_PORT"))
}
