import { useState, useEffect } from "react";
import axios from "axios";
//import { RAPID_API_KEY } from "@env";

const fetch = async (endpoint, query) => {
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "6be2573e71mshe698243822f5b12p114ba9jsn6f25aa118092",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const response = await axios.request(options);

  return response.data;
};

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //const rapidApiKey = RAPID_API_KEY;

  const fetchData = async () => {
    setIsLoading(true);
    fetch(endpoint, query)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFetch };
};

export default useFetch;
