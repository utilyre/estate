package models

type User struct {
	ID       any    `json:"id" bson:"_id,omitempty"`
	Name     string `json:"name" bson:"name"`
	Email    string `json:"email" bson:"email"`
	Password []byte `json:"password" bson:"password"`
}
