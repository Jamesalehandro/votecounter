import React, { useState } from 'react';
import { useEffect } from 'react';

const VotePage = () => {
  const [catVotes, setCatVotes] = useState(0);
  const [dogVotes, setDogVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [dogWidth, setDogWidth] = useState(0);
  const [catWidth, setCatWidth] = useState(0);

  useEffect(() => {
    setTotalVotes(catVotes + dogVotes);
    const catDivWidth = parseFloat(((catVotes / totalVotes) * 100).toFixed(2));
    const dogDivWidth = parseFloat(((dogVotes / totalVotes) * 100).toFixed(2));
    setDogWidth(dogDivWidth);
    setCatWidth(catDivWidth);
  }, [dogVotes, catVotes, totalVotes]);

  return (
    <div className={'container'}>
      <div className={'buttons'}>
        <div className={'cat'} onClick={() => setCatVotes(catVotes + 1)}>
          <h3>Cats</h3>
          <p>{catWidth ? catWidth : 0}%</p>
        </div>

        <div className={'divider'}></div>

        <div className={'dog'} onClick={() => setDogVotes(dogVotes + 1)}>
          <h3>Dogs</h3>
          <p>{dogWidth ? dogWidth : 0}%</p>
        </div>
      </div>

      <section
        className={'cat-side'}
        style={{
          width: catWidth + '%',
          backgroundColor: '#4EA1ED',
        }}
      ></section>

      <section
        className={'dog-side'}
        style={{
          width: dogWidth + '%',
          backgroundColor: '#65CFCF',
        }}
      ></section>

      <div className="number-votes">
        <h3>{totalVotes} votes</h3>
      </div>
    </div>
  );
};

export default VotePage;
