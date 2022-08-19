package main

import (
	"context"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/utilyre/estate/database"
)

func main() {
	err := database.Connect()
	if err != nil {
		log.Fatalln(err)
	}
	defer database.Client.Disconnect(context.Background())

	app := fiber.New()

	app.Use(cors.New())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello world!")
	})

	app.Listen("0.0.0.0:" + os.Getenv("SERVER_PORT"))
}
