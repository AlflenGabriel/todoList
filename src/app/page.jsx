"use client";
import React from "react";
import Profile from "./Profile";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

export default function page() {
  const [todo, setTodo] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9999);
  };

  const handleKeyUp = (key) => {
    if (key === "Enter" && newTodo !== "") {
      const randomNumber = getRandomNumber();

      const newItem = {
        id: `item-${randomNumber}`,
        content: newTodo,
      };

      setTodo(todo.concat(newItem));

      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    if (id > -1) setTodo(todo.slice(0, id).concat(todo.slice(id + 1)));
  };

  return (
    <div className="flex justify-content-center pt-40">
      <div className="max-w-sm w-full shadow-lg bg-customprimary p-8 rounded-md opacity-70 mx-auto">
        <div className="flex justify-content-center  cursor-default bg-custommiddle rounded-2xl px-4 py-1  hover:scale-110 transition-all">
          <Profile />
        </div>
        <div className="relative mt-10">
          <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
            <Plus size={16} className="text-custommidle" />
          </div>
          <input
            type="text"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            className="block w-full pl-10 p-2 border-4 border-custommiddle rounded-full bg-customprimary focus:outline-none"
            placeholder="To do... (Press Enter to Confirm)"
          />
        </div>

        <ul className="block w-full pt-6">
          {todo?.map((item, index) => {
            return (
              <li
                key={item.id}
                className="w-full border-2 rounded-xl mt-2 border-custommiddle hover:border-customsecondary transition-all"
              >
                <input
                  id={index}
                  type="checkbox"
                  className="float-left block w-6 h-6 m-3"
                />
                <button
                  id={index}
                  onClick={() => handleDelete(index)}
                  className="float-right w-7 h-7 m-2.5 rounded-2xl bg-red-700 text-customprimary shadow-md hover:bg-red-500 hover:scale-105 "
                >
                  x
                </button>
                <label htmlFor={index} className="block w-full p-3">
                  {item.content}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
