import React, { useState, useEffect } from "react";
import "./ChangeText.css";

const ChangeText = () => {
  const [text, setText] = useState("Movie marathon?");
  const [i, seti] = useState(0);
  const arr = [
    "Movie marathon?",
    "Hungry?",
    "Unexpected guests?",
    "Late Night at Office?",
    "Cooking gone wrong?",
    "Game Night?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      seti((i + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval1 = setInterval(() => {
      setText(arr[i]);
    }, 1500);
    return () => clearInterval(interval1);
  });

  useEffect(() => {
    const interval2 = setInterval(() => {
      document.getElementById("animate").classList.add("animate-bottom");
    }, 0);
    document.getElementById("animate").classList.remove("animate-bottom");
    return () => clearInterval(interval2);
  }, [text]);

  return (
    <div >
      <h1 id="animate" className="animate-bottom heading1">
        {text}
      </h1>
    </div>
  );
};

export default ChangeText;
