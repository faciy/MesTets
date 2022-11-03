import {useEffect, useState} from 'react';

const useFecth = (url: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(response => setData(response));
  }, [url]);

  return [data];
};

export default useFecth;
