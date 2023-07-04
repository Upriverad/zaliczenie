from functools import lru_cache

from .schema import Customer, Product, Order

CustomerStorageType = dict[int, Customer]
ProductStorageType = dict[int, Product]
OrderStorageType = dict[int, Order]

CUSTOMERS: CustomerStorageType = {}
PRODUCTS: ProductStorageType = {
    0: Product(name="Taczka", color="Biala", description="taczka", price="10zl", id=0),
    1: Product(name="Bielizna", color="Czarna", description="przedmiot", price="2zl", id=1),
    2: Product(name="Rower", color="Bialy", description="przedmiot", price="20zl", id=2),
    3: Product(name="Basen", color="Czarny", description="przedmiot", price="15zl", id=3),
    4: Product(name="Kaczka", color="Czerwona", description="przedmiot", price="10zl", id=4),
    5: Product(name="Łyżwy", color="Biale", description="przedmiot", price="10zl", id=5),
    6: Product(name="Lody", color="Czerwone", description="przedmiot", price="13zl", id=6),
    7: Product(name="Parasol", color="Czarny", description="przedmiot", price="18zl", id=7),
    8: Product(name="Węgiel", color="Bialy", description="przedmiot", price="30zl", id=8),
    9: Product(name="Szalik", color="Bialy", description="przedmiot", price="40zl", id=9),
    10: Product(name="Telewizor", color="Czerwony", description="przedmiot", price="1zl", id=10),
    11: Product(name="Teczka", color="Czarna", description="przedmiot", price="10zl", id=11),
}

ORDERS: OrderStorageType = {
     0: Order(
        customer_id=0,
        order_items=[1,2,3,4,5],
        order_id=0,
    ),
    1: Order(
        customer_id=1,
        order_items=[5,4,3,2,1],
        order_id=1,
    ),
    2: Order(
        customer_id=2,
        order_items=[10,9,8],
        order_id=2,
    ),
    3: Order(
        customer_id=3,
        order_items=[5,7,9],
        order_id=3,
    ),
    4: Order(
        customer_id=4,
        order_items=[2,6,9],
        order_id=4,
    ),
    5: Order(
        customer_id=5,
        order_items=[5,2,3,6,7],
        order_id=5,
    ),
}

@lru_cache(maxsize=1)
def get_customers_storage() -> CustomerStorageType:
    return CUSTOMERS


@lru_cache(maxsize=1)
def get_products_storage() -> ProductStorageType:
    return PRODUCTS

@lru_cache(maxsize=1)
def get_orders_storage() -> OrderStorageType:
    return ORDERS



