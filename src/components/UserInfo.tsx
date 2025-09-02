import React from "react";

interface UserInfoProps {
  username: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username }) => {
  return (
    <div className="text-white font-semibold">
      Logged in as: <span className="underline">{username}</span>
    </div>
  );
};

export default UserInfo;