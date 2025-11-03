import { useState, useEffect } from "react";

function CountDown() {
  const [targetDate, setTargetDate] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-indigo-400 ">
      <h1 className="text-2xl font-bold mb-4">CountDown Timer</h1>

      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        className="mb-6 px-4 py-2 rounded border border-gray-300"
      />

      {targetDate && timeLeft ? (
        <div className="text-center bg-blue-400 p-4 rounded shadow">
          <p className="text-lg font-semibold mb-2 text-accent">Time remaining :</p>
          <p className="text-xl">
            {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      ) : targetDate ? (
        <p className="text-red-600 font-semibold">The time is up !</p>
      ) : null}
    </div>
  );
}

export default CountDown;
