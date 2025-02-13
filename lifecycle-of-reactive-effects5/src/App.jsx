// import { useState, useEffect } from 'react';
import { useSelectOptions } from './useSelectOptions';
// import { fetchData } from './api.js';

export default function Page() {
  // const [planetList, setPlanetList] = useState([])
  // const [planetId, setPlanetId] = useState('');

  const [planetList, planetId, setPlanetId] = useSelectOptions('/planets');
  const [placeList, placeId, setPlaceId] = useSelectOptions(planetId ? `/planets/${planetId}/places` : null);

  // const [placeList, setPlaceList] = useState([]);
  // const [placeId, setPlaceId] = useState('');

  /*
  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    if (!planetId) {
      return;
    }
    fetchData(`/planets/${planetId}/places`).then(result => {
      if (!ignore) {
        console.log('Fetched a list of places for planet ' + planetId + '.');
        setPlaceList(result);
        setPlaceId(result[0].id); // Select the first place
      }
    });
    return () => {
      ignore = true;
    }
  }, [planetId]);
  */

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}

