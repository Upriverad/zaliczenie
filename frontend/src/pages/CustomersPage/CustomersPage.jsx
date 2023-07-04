import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState, useEffect } from "react";

export const CustomersPage = () => {
  const [InfoCustomers, setInfoCustomers] = useState([]);

  const fetchInfoCustomers = () => {
    fetch("http://127.0.0.1:8000/customers")
      .then((response) => response.json())
      .then((info) => {
        setInfoCustomers(info);
      });
  };

  useEffect(() => {
    fetchInfoCustomers();
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
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">

          
        <ul>
            {InfoCustomers.map((i) => (
              <li key={i.id}>
                <p>
                  <b>NAME: </b>
                  {i.name}
                </p>
                <p>
                  <b>SURNAME: </b>
                  {i.surname}
                </p>
                <p>
                  <b>NUMBER: </b>
                  {i.number}
                </p>
                <p>
                  <b>MAIL: </b>
                  {i.mail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

