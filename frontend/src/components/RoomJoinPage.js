import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Изменено на useNavigate

const RoomJoinPage = () => {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Использование useNavigate вместо useHistory

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);
    setError(""); // Сбрасываем ошибку при изменении текста
  };

  const roomButtonPressed = async () => {
    if (!roomCode) {
      setError("Room code cannot be empty.");
      return; // Не продолжать, если код пустой
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: roomCode }),
    };

    try {
      const response = await fetch("/api/join-room", requestOptions);
      if (response.ok) {
        navigate(`/room/${roomCode}`); // Использование navigate вместо history.push
      } else if (response.status === 404) {
        setError("Room not found.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
  <div>
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={Boolean(error)}
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={roomButtonPressed}
          disabled={!roomCode} // Отключаем кнопку, если нет кода
        >
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" component={Link} to="/">
          Back
        </Button>
      </Grid>
    </Grid>
  </div>
  );
};

export default RoomJoinPage;