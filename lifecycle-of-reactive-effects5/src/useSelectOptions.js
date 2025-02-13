import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export function useSelectOptions(url) {
  const [list, setList] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    let ignore = false;
    if (!url) {
      return;
    }
    fetchData(url).then(result => {
      if (!ignore) {
        console.log('Fetched a list of items.');
        setList(result);
        setId(result[0].id); // Select the first item
      }
    });
    return () => {
      ignore = true;
    }
  }, [url]);

  return [list, id, setId];
}
