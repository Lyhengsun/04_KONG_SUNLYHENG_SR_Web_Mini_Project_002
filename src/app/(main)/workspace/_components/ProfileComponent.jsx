import React from "react";

const ProfileComponent = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full w-10 h-10 bg-gray-400"></div>
      <div className="flex flex-col items-start justify-evenly">
        <p>Username</p>
        <p className="text-sm text-gray-400">Email</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
