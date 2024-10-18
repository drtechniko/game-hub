import { CanceledError } from "axios";
import React from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [error, setError] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;