export const formatTimestamp = (timestamp: number, gmtOffset: number) => {
  const adjustedTimestamp = timestamp + gmtOffset; // Adjust by GMT offset in seconds
  const date = new Date(adjustedTimestamp * 1000); // Convert seconds to milliseconds
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
