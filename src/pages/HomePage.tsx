import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { visitTimezone } from "../store/timezoneSlice";
import { setCurrentUser } from "../store/siteSlice";
import Sidebar from "../components/Sidebar";
import TimezoneCard from "../components/TimezoneCard";
import { useNavigate } from "react-router-dom";
import { Timezone } from "../types/timezoneType";
import { AppHeader } from "../components/AppHeader";
import TopMenu from "../components/TopMenu";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const dispatch = useDispatch();

  const currentUser = { id: "123", name: "John Doe" };
  useEffect(() => {
    dispatch(setCurrentUser(currentUser));
  }, [dispatch]);

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
    dispatch(visitTimezone({ userId: currentUser.id, timezone: zoneName }));
    navigate(`/${zoneName}/${gmtOffset}/${timestamp}`);
  };

  return (
    <div>
      <TopMenu />
      <div className="flex">
        <Sidebar />
        <div className="max-h-screen overflow-y-auto">
          <AppHeader />
          <div className="min-w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
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
    </div>
  );
};

export default HomePage;
