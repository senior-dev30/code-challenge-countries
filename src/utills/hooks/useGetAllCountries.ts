import { useEffect, useState } from "react";

export const useGetAllCountries = () => {
  const [countries, setCountries] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const rawData: any = await response.json();
        setCountries(rawData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return countries;
};
