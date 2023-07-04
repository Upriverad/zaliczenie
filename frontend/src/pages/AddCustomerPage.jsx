import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };

  const getSurname = (e) => {
    setSurname(e.target.value);
  };
  const getMail = (e) => {
    setMail(e.target.value);
  };
  const getNumber = (e) => {
    setNumber(e.target.value);
  };

  //odpala sie bo submit
  const SubmitForm = async (e) => {
    e.preventDefault(); //nie odswiezaj
    //walidacja
    if (Name === "") return;
    if (Surname === "") return;
    if (Mail === "" || !Mail.includes("@")) return;
    if (Number === "" || Number.length !== 9) return;

    const cstmrData = {
      name: Name,
      surname: Surname,
      mail: Mail,
      number: Number,
    };

    //wysylamy dane na backend
    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(cstmrData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setName("");
    setSurname("");
    setMail("");
    setNumber("");
  };

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
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
      </div>


      <form onSubmit={SubmitForm} className="Customer">
        <label><b>NAME</b></label>
        <input
          placeholder="Simon"
          onChange={getName}
          value={Name}
          >
        </input>
        <label><b>SURNAME</b></label>
        <input
          placeholder="Miller"
          onChange={getSurname}
          value={Surname}
          >
        </input>
        <label><b>MAIL</b></label>
        <input
          placeholder="generalmail@gmail.com"
          onChange={getMail}
          value={Mail}
          >
        </input>
        <label><b>NUMBER</b></label>
        <input
          placeholder="311211011"
          onChange={getNumber}
          value={Number}
          >
        </input>
        <button type="submit">
        <strong>SUBMIT</strong>
        </button>
      </form>
    </div>
  );
};