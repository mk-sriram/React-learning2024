import React, { useState, useRef, useEffect, useCallback } from "react";

export default function DrawOnDiv() {
  const [isDrawing, setIsDrawing] = useState(false);
  const circlesRef = useRef([]); // Ref to store circle positions without re-renders
  const containerRef = useRef(null); // Ref for the drawing container
  const [circles, setCircles] = useState([]); // State to store circles for rendering

  const handleMouseDown = () => {
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    // Only update state when drawing ends to batch update all circles
    setCircles([...circlesRef.current]);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDrawing) return;

      // Get container bounds to calculate relative positions
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Add new circle to the ref (not state) to avoid re-renders
      circlesRef.current.push({ x, y });
    },
    [isDrawing]
  );

  // Use requestAnimationFrame to batch draw operations
  useEffect(() => {
    const drawCircles = () => {
      if (isDrawing) {
        setCircles([...circlesRef.current]); // Update the UI with the latest circles
      }
      requestAnimationFrame(drawCircles); // Keep the animation loop running
    };
    drawCircles(); // Start the animation loop
    return () => cancelAnimationFrame(drawCircles); // Cleanup on unmount
  }, [isDrawing]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* Render all circles */}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${circle.y - 10}px`, // Adjust to center the circle
            left: `${circle.x - 10}px`,
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
}

import React from 'react'

export default function Click() {
  return (
    <div>
      
    </div>
  )
}
