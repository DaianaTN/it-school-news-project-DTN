import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(dataFromServer => {
        setData(dataFromServer);
      });
  }, [url]);

  return data;
}
