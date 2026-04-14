import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  "Ты любишь Хазрета? ❤️",
  "Точно? 🥺",
  "Точно-Точно? 💞",
  "Точно-точно при Точно? 😘",
  "Хочешь Хазрета? 💖",
  "В любом плане тоже? 🔥",
  "Хочешь сказать ДА? 😏"
];

export default function App() {
  const [step, setStep] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [finished, setFinished] = useState(false);

  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
    audio.play();
  };

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setFinished(true);
  };

  const moveNo = () => {
    playSound();
    setNoPos({
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150
    });
  };

  if (finished) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#ff4d6d,#ff99ac)",
        color: "white"
      }}>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Я так и знал ❤️
        </motion.h1>
        <p>Ты нажал ДА 😏</p>
      </div>
    );
  }

  const isLast = step === questions.length - 1;

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#1a1a1a,#ff4d6d)",
      color: "white"
    }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Мини игра 💕
      </motion.h1>

      <motion.h2 key={step} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        {questions[step]}
      </motion.h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button onClick={next} style={{
          padding: "10px 20px",
          borderRadius: "10px",
          background: "white"
        }}>
          Да 💖
        </button>

        <motion.button
          animate={isLast ? noPos : { x: 0, y: 0 }}
          onMouseEnter={isLast ? moveNo : undefined}
          onClick={!isLast ? next : moveNo}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "red",
            color: "white",
            position: "relative"
          }}
        >
          Нет 💔
        </motion.button>
      </div>
    </div>
  );
}
