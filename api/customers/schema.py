from enum import Enum

from pydantic import BaseModel

class CustomerCreateSchema(BaseModel):
    name: str
    surname: str
    mail: str
    number: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Simon",
                "surname": "Miller",
                "mail": "jan.kowalski@example.com",
                "number": "000-000-000",
            }
        }


class CustomerUpdateSchema(BaseModel):
    name: str | None
    surname: str | None
    mail: str | None
    number: str | None

    class Config:
        schema_extra = {
            "example": {
                "name": "Simon",
                "surname": "Miller"
            }
        }


class Customer(CustomerCreateSchema):
    id: int

    
class ProductCreateSchema(BaseModel):
    name: str
    color: str
    description: str
    price: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Product",
                "color": "Color of product",
                "description": "Product description",
                "price": 0.0,
            }
        }

class Product(ProductCreateSchema):
    id: int

class OrderCreateSchema(BaseModel):
    customer_id: int
    order_items: list[int]

    class Config:
        schema_extra = {
            "example": {
                "customer_id": 0,
                "order_items": [1, 2, 3, 4, 5],
            }
        }

class Order(OrderCreateSchema):
    order_id: int



