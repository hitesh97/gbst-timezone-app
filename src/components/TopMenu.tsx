import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TopMenu: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.site.currentUser);
  const visitedCount = useSelector((state: RootState) => {
    const userId = currentUser?.id;
    return userId ? state.timezones.visitedTimezones[userId]?.length || 0 : 0;
  });

  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
      <div className="font-bold text-xl">TimeZone Tracker</div>
      {currentUser && (
        <div className="flex items-center">
          <span className="mr-4">Welcome, {currentUser.name}!</span>
          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
            Timezones Visited: {visitedCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
