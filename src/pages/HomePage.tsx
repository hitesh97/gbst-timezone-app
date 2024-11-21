import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTimezone } from "../store/timezoneSlice";
import Sidebar from "../components/Sidebar";
import TimezoneCard from "../components/TimezoneCard";
import { useNavigate } from "react-router-dom";
import { Timezone } from "../types/timezoneType";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await axios.get(
          "https://api.timezonedb.com/v2.1/list-time-zone",
          {
            params: {
              key: "GDLLXIZWSOA4",
              format: "json",
            },
          }
        );
        setTimezones(response.data.zones);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimezones();
  }, []);

  const handleCardClick = (
    zoneName: string,
    gmtOffset: number,
    timestamp: number
  ) => {
    dispatch(addTimezone(zoneName));
    navigate(`/${zoneName}/${gmtOffset}/${timestamp}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="max-h-screen overflow-y-auto">
        <div className="rounded-lg bg-white p-6 text-surface">
          <h2 className="mb-5 text-3xl font-semibold">Timezone Application</h2>
          <p className="mb-4">
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
          {timezones.map((timezone) => (
            <TimezoneCard
              key={timezone.zoneName}
              timezone={timezone}
              onClick={() =>
                handleCardClick(
                  timezone.zoneName,
                  timezone.gmtOffset,
                  timezone.timestamp
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
