import { useCallback, useState } from "react";
import { chuckNorrisApi } from "../api/jokeApi";

export const useJokeApi = () => {
  const [joke, setJoke] = useState();
  const [loading, setLoading] = useState(false);

  const getRandomJoke = useCallback(async () => {
    setLoading(true);
    try {
      chuckNorrisApi.get("/random").then((response) => {
        setJoke(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("error caught");
      console.error(error);
      setLoading(false);
      throw error;
    }
  }, []);
  return { loading, getRandomJoke, joke };
};
