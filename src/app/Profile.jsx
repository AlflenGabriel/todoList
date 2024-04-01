"use client";
import React from "react";
import { ListChecks } from "@phosphor-icons/react";
import ProfileDate from "./ProfileDate";

const Profile = () => {
  return (
    <div className="flex justify-content-center items-center gap-2">
      <ListChecks
        size={64}
        className="rounded-full bg-zinc-600 text-zinc-200 p-2"
      />
      <div className="w-full p-3">
        <p className="text-3xl">Todo List 1</p>
        <ProfileDate />
      </div>
    </div>
  );
};

export default Profile;
