import useTimer from "easytimer-react-hook";
import { useState, useEffect } from "react";

const Meditation = ({ user }) => {
  const [timer, isTargetAchieved] = useTimer({
    // updateWhenTargetAchieved: true,
  });
  const [startValues, setStartValues] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // useEffect();
  console.log(user);
  return user === undefined ? (
    <div></div>
  ) : (
    <div>
      <button
        onClick={() => {
          timer.start({
            startValues,
          });
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          timer.pause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          timer.reset();
          timer.pause();
        }}
      >
        Reset
      </button>
      <button
        onClick={async () => {
          timer.pause();
          const body = {
            hours: timer.getTimeValues().hours,
            minutes: timer.getTimeValues().minutes,
            seconds: timer.getTimeValues().seconds,
            userEmail: user.email,
          };
          const response = await fetch("http://localhost:8000/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const data = await response.json();
        }}
      >
        Conclude session
      </button>
      <p>hours:{timer.getTimeValues().hours}</p>
      <p>minutes:{timer.getTimeValues().minutes}</p>
      <p>seconds:{timer.getTimeValues().seconds}</p>
      {/* {JSON.stringify()} */}
    </div>
  );
};

export default Meditation;
