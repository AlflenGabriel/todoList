"use client";
import React, { useState, useEffect } from "react";

function ProfileDate() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const dataFormatada = horaAtual.toLocaleDateString("en-US", options);

  return (
    <div>
      <p className="text-white drop-shadow-lg">{dataFormatada}</p>
    </div>
  );
}

export default ProfileDate;
