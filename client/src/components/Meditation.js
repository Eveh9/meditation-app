import useTimer from "easytimer-react-hook";
import { useState } from "react";
import styled from "styled-components";

const Meditation = ({ user }) => {
  const [timer, isTargetAchieved] = useTimer({
    // updateWhenTargetAchieved: true,
  });
  const [startValues, setStartValues] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  console.log(user);
  return (
    user !== undefined && (
      <Container>
        <TimeContainer>
          <span>
            <h1> hours:{timer.getTimeValues().hours}</h1>
          </span>
          <span>
            <h1> minutes:{timer.getTimeValues().minutes}</h1>
          </span>
          <span>
            <h1> seconds:{timer.getTimeValues().seconds}</h1>
          </span>
        </TimeContainer>
        <ButtonsContainer>
          <CustomBtn
            onClick={() => {
              timer.start({
                startValues,
              });
            }}
          >
            Start
          </CustomBtn>
          <CustomBtn
            onClick={() => {
              timer.pause();
            }}
          >
            Pause
          </CustomBtn>
          <CustomBtn
            onClick={() => {
              timer.reset();
              timer.pause();
            }}
          >
            Reset
          </CustomBtn>
          <CustomBtn
            onClick={async () => {
              timer.pause();
              const body = {
                hours: timer.getTimeValues().hours,
                minutes: timer.getTimeValues().minutes,
                seconds: timer.getTimeValues().seconds,
                userEmail: user.email,
                timestamp: Date.now(),
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
          </CustomBtn>
        </ButtonsContainer>
      </Container>
    )
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 200px;
`;

const TimeContainer = styled.span`
  display: flex;
  gap: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 320px;
`;

const CustomBtn = styled.button`
  padding: 8px;
`;

export default Meditation;
