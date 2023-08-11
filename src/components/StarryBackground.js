import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StarWrapper = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    opacity: props.disappear ? 0 : (props.dim ? 0.5 : 1),
  },
}))`
  position: fixed;
  background-color: white;
  border-radius: 50%;
  animation: ${(props) => (props.disappear ? fadeOutAnimation : '')} 1s;
`;

function StarryBackground() {
  const [stars, setStars] = useState([]);

  const generateStar = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 7 + 2;
    const dim = Math.random() < 0.3; // 30% chance of dim star
    const id = uuidv4();
    return { id, x, y, size, dim, disappear: false };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => [...prevStars, generateStar()]);
    }, 500); // Adjust interval time for faster appearance

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    stars.forEach((star) => {
      const timer = setTimeout(() => {
        setStars((prevStars) => prevStars.filter((prevStar) => prevStar.id !== star.id));
      }, 20000); // Remove after 20 seconds

      return () => clearTimeout(timer);
    });
  }, [stars]);

  return (
    <>
      {stars.map((star) => (
        <StarWrapper
          key={star.id}
          size={star.size}
          dim={star.dim}
          disappear={star.disappear}
          style={{
            top: star.y,
            left: star.x,
          }}
        />
      ))}
    </>
  );
}

export default StarryBackground;
