"use client";
import React from "react";
import { ListChecks } from "@phosphor-icons/react";
import ProfileDate from "./ProfileDate";

const Profile = () => {
  return (
    <div className="flex justify-content-center items-center gap-2">
      <ListChecks
        size={64}
        className="rounded-2xl bg-custom-gradiant text-white p-2 drop-shadow-lg"
      />
      <div className="w-full p-3">
        <p className="text-3xl text-white drop-shadow-lg">Todo List</p>
        <ProfileDate />
      </div>
    </div>
  );
};

export default Profile;
