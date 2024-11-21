import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useCurrentTime } from "../hooks/useCurrentTime";

const TimezoneDetails: React.FC = () => {
  const { countryname, zoneName, gmtOffset, timestamp } = useParams<{
    countryname: string;
    zoneName: string;
    gmtOffset: string;
    timestamp: string;
  }>();

  const currentTime = useCurrentTime(
    parseInt(timestamp || "0"),
    parseInt(gmtOffset || "0")
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 grow">
        <div>
          <h1 className="text-2xl font-bold my-8">
            Timezone: {countryname}/{zoneName}
          </h1>
          <h1 className="text-2xl font-bold">Current Time: {currentTime}</h1>
        </div>
        <div className="flex justify-end mr-16">
          <Link
            to={`/`}
            className="block mt-4 text-blue-600 hover:underline text-lg font-bold"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimezoneDetails;
