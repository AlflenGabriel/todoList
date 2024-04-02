"use client";
import React from "react";
import Profile from "./Profile";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { Reorder } from "framer-motion";
import ToggleButton from "./ToggleButton";

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
    if (id > -1) {
      setTodo(todo.slice(0, id).concat(todo.slice(id + 1)));
    }
  };

  return (
    <div className="flex content-center pt-40">
      <div className="max-w-xl w-full shadow-lg bg-customprimary p-8 rounded-md opacity-80 mx-auto">
        <div className="flex content-center cursor-default bg-custommiddle rounded-2xl px-4 py-1  hover:scale-105 transition-all hover:bg-customsecondary duration-300">
          <Profile />
        </div>
        <div className="flex mx-auto items-center justify-center gap-4 mt-10">
          <input
            type="text"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            className="block w-full p-2 border-4 border-custommiddle rounded-full bg-customprimary focus:outline-none text-center hover:border-customsecondary transition-all duration-300 focus:border-customsecondary"
            placeholder="To do..."
          />
          <div className="">
            <button
              className="block p-2 border-4 border-custommiddle rounded-full  focus:outline-none  transition-all duration-300 hover:border-customsecondary"
              onClick={() => handleKeyUp("Enter")}
            >
              <Plus size={16} className="text-custommidle" />
            </button>
          </div>
        </div>

        <ul className="pt-6 overflow-y-hidden">
          <Reorder.Group values={todo} onReorder={setTodo}>
            {todo?.map((item, index) => {
              return (
                <Reorder.Item value={item} key={item.id}>
                  <li
                    key={item.id}
                    className="flex items-center border-2 rounded-xl mt-2 p-4 border-custommiddle hover:border-customsecondary transition-all bg-customprimary relative"
                  >
                    <ToggleButton />
                    <div>
                      <label className="p-3">{item.content}</label>

                      <button
                        id={index}
                        onClick={() => handleDelete(index)}
                        className="w-7 h-7 rounded-xl bg-red-700 text-customprimary shadow-md hover:bg-red-500 hover:scale-105 absolute right-2 transition-all duration-300"
                      >
                        x
                      </button>
                    </div>
                  </li>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </ul>
      </div>
    </div>
  );
}
