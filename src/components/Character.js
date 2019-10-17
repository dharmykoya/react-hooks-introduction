import React, { useState, useEffect } from "react";

import Summary from "./Summary";

const Character = props => {
  const [loadedCharacter, setLoadedCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   return (
  //     nextProps.selectedChar !== this.props.selectedChar ||
  //     nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
  //     nextState.isLoading !== this.state.isLoading
  //   );
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('Component did update');
  //   if (prevProps.selectedChar !== this.props.selectedChar) {
  //     this.fetchData();
  //   }
  // }

  const fetchData = () => {
    console.log(
      "Sending Http request for new character with id " + props.selectedChar
    );
    setIsLoading(true);
    
  };

  // useEffect(() => {
  //   fetchData();
  // }, [])

  useEffect(() => {
    console.log(12, "fetching data here");
    fetchData();
    return () => {
      console.log('Cleaning up')
    };
  }, [props.selectedChar]);

  useEffect(() => {
    return () => {
      console.log('component did unmount');
      
    }
  }, [])

  // componentWillUnmount() {
  //   console.log('Too soon...');
  // }

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter.id) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

export default React.memo(Character);
  