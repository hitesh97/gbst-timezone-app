import { useState, useEffect } from "react";

export const useCurrentTime = (initialTimestamp: number, gmtOffset: number) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const formatTimestamp = (timestamp: number, gmtOffset: number) => {
    const adjustedTimestamp = timestamp + gmtOffset; // Adjust by GMT offset in seconds
    const date = new Date(adjustedTimestamp * 1000); // Convert seconds to milliseconds
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const updateTime = () => {
      const currentUnixTime = Math.floor(Date.now() / 1000); // Current time in seconds
      const adjustedTime =
        initialTimestamp + (currentUnixTime - initialTimestamp); // Adjust with elapsed seconds
      setCurrentTime(formatTimestamp(adjustedTime, gmtOffset));
    };

    // Initial update and interval
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [initialTimestamp, gmtOffset]);

  return currentTime;
};
