import { useState } from 'react'

export const useHttp = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  fetch("https://swapi.co/api/people/" + props.selectedChar)
    .then(response => {
      if (!response.ok) {
        throw new Error("Could not fetch person!");
      }
      return response.json();
    })
    .then(charData => {
      const loadedCharacter = {
        id: props.selectedChar,
        name: charData.name,
        height: charData.height,
        colors: {
          hair: charData.hair_color,
          skin: charData.skin_color
        },
        gender: charData.gender,
        movieCount: charData.films.length
      };
      setIsLoading(false);
      setLoadedCharacter(loadedCharacter);
    })
    .catch(err => {
      console.log(err);
    });
};
