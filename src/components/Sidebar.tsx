import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Sidebar: React.FC = () => {
  const currentUserId = useSelector(
    (state: RootState) => state.site.currentUser?.id
  );
  const visitedTimezones = useSelector((state: RootState) => {
    return currentUserId
      ? state.timezones.visitedTimezones[currentUserId] || []
      : [];
  });

  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen">
      <h2 className="text-xl font-bold">Selected Timezones</h2>
      <hr className="my-6 h-0.5 border-t-2 bg-black-300" />
      <ul className="list-disc pl-6 my-6">
        {visitedTimezones.map((timezone, index) => (
          <li key={index}>{timezone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
