"use client";
import React from "react";
import { ListChecks } from "@phosphor-icons/react";
import ProfileDate from "./ProfileDate";

const Profile = () => {
  return (
    <div className="flex justify-content-center items-center gap-2">
      <ListChecks size={64} className="rounded-full bg-customprimary p-2" />
      <div className="w-full p-3">
        <p className="text-3xl">Todo List</p>
        <ProfileDate />
      </div>
    </div>
  );
};

export default Profile;
