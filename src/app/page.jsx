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
      <div className="max-w-xl w-full shadow-lg bg-zinc-300 p-8 rounded-md bg-opacity-20 backdrop-blur-lg mx-auto">
        <div className="flex content-center cursor-default bg-white rounded-2xl px-4 py-1 hover:scale-105 transition-all hover:bg-white/40 duration-300 bg-opacity-20 backdrop-blur-lg">
          <Profile />
        </div>
        <div className="flex mx-auto items-center justify-center gap-4 mt-10">
          <input
            type="text"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            maxLength={40}
            className="block text-white w-full p-2 border-4 border-white/20 rounded-full bg-transparent focus:outline-none text-center hover:border-white/60 transition-all duration-300 focus:border-white/60 placeholder-white/60"
            placeholder="To do..."
          />
          <div className="">
            <button
              className="block p-2 border-4 text-white border-white/20 rounded-full  focus:outline-none  transition-all duration-300 hover:border-white/60"
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
                    className="flex text-white items-center border-4 rounded-xl mt-2 p-4 border-white/20 hover:border-white/60 transition-all bg-transparent relative hover:scale-95 duration-300"
                  >
                    <ToggleButton />
                    <div>
                      <label className="p-3">{item.content}</label>

                      <button
                        id={index}
                        onClick={() => handleDelete(index)}
                        className="w-7 h-7 rounded-xl bg-red-700 text-white shadow-md hover:bg-red-500 hover:scale-105 absolute right-2 transition-all duration-300"
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
