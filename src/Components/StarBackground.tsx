import { useEffect, useState, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const animationFrameId = useRef<number | null>(null); 

  useEffect(() => {
    const createStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setStars(newStars);
    };

    createStars();

    const updateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => {
          const newY = star.y + star.speed;
          return { ...star, y: newY > window.innerHeight ? 0 : newY };
        })
      );
      animationFrameId.current = requestAnimationFrame(updateStars);
    };

    animationFrameId.current = requestAnimationFrame(updateStars);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
