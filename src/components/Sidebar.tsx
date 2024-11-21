import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Sidebar: React.FC = () => {
  const selectedTimezones = useSelector(
    (state: RootState) => state.timezones.selectedTimezones
  );

  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen">
      <h2 className="text-xl font-bold">Selected Timezones</h2>
      <hr className="my-6 h-0.5 border-t-2 bg-black-300" />
      <ul className="list-disc pl-6 my-6">
        {selectedTimezones.map((timezone, index) => (
          <li key={index}>{timezone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
