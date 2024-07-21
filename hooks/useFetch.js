import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3004/api/products");
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  //load data once this hook has been mounted
  return { data, isLoading, error, refetch };
};

export default useFetch;
