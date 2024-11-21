import React, { useState } from "react";

import { useCurrentTime } from "../hooks/useCurrentTime";
import { Link } from "react-router-dom";
import { Timezone } from "../types/timezoneType";

interface Props {
  timezone: Timezone;
  onClick: () => void;
}

const TimezoneCard: React.FC<Props> = ({ timezone, onClick }) => {
  const [showTime, setShowTime] = useState<boolean>(false);
  const currentTime = useCurrentTime(timezone.timestamp, timezone.gmtOffset);

  return (
    <div className="p-4 bg-white shadow-lg hover:shadow-xl rounded cursor-pointer">
      <h2 className="text-xl font-bold">
        Country: {timezone.countryName}-({timezone.countryCode})
      </h2>
      <h3 className="text-md font-bold">Zone: {timezone.zoneName}</h3>
      <p className="text-sm">Offset: {timezone.gmtOffset}</p>
      <p className="text-sm text-gray-600">Current Time: {currentTime}</p>
      <div className="flex justify-between items-center">
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          onClick={() => setShowTime(!showTime)}
        >
          Show Time in a Dialog
        </button>

        <Link
          onClick={onClick}
          to={`/${timezone.zoneName}/${timezone.gmtOffset}/${timezone.timestamp}`}
          className="block mt-4 text-blue-600 hover:underline text-sm"
        >
          Show Zone details
        </Link>
      </div>
      {showTime && (
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 text-xl font-bold p-6 rounded-lg shadow-lg w-96 h-64 flex items-center justify-center">
          <button
            className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-blue-600"
            onClick={() => setShowTime(false)}
          >
            ✕
          </button>
          <div className="relative text-center">
            <h2 className="text-4xl font-bold my-8">{timezone.zoneName}</h2>
            <p>Current Time: {currentTime}</p>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-100"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimezoneCard;
