import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState, useEffect } from "react";

export const OrdersPage = () => {
  const [InfoOrders, setInfoOrders] = useState([]);
  const [InfoProducts, setInfoProducts] = useState([]);

  const fetchInfoOrders = () => {
    fetch("http://127.0.0.1:8000/orders")
      .then((response) => response.json())
      .then((info) => {
        setInfoOrders(info);
      });
  };

  const fetchInfoProducts = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((info) => {
        setInfoProducts(info);
      });
  };

  useEffect(() => {
    fetchInfoOrders();
    fetchInfoProducts();
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">


          <ul>
            {InfoOrders.map((i) => (
              <li key={i.id}>
                <p>
                  <b>CUSTOMER:</b>
                  {i.customer_id}
                </p>
                <p>
                  <b>PRODUCT BASKET: </b>
                  {InfoProducts
                    .filter((product) => i.order_items.includes(product.id))
                    .map((object) => object.name)
                    .join(", ")}
                </p>
                <p>
                  <b>ITEMS:</b>
                  {i.order_items.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};