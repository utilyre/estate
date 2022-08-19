package routers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/utilyre/estate/controllers"
)

func V1(app *fiber.App) {
	v1 := app.Group("/api/v1")

	v1.Get("/hello", controllers.Hello)
}
