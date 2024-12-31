import React, { Component } from "react";
import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null,
        };
    }

    async componentDidMount() {
        const response = await fetch("/api/user-in-room");
        const data = await response.json();
        this.setState({
          roomCode: data.code
        });
    }

    renderHomePage() {
        if (this.state.roomCode) {
            return (
                // Перенаправление можно оставить, но это следует сделать в App.js
                // Например: <Navigate to={`/room/${this.state.roomCode}`} replace={true} />
                <p>Redirecting to room...</p>
            );
        } else {
            return (
                <Grid container spacing={3}>
                    <Grid item xs={12} align="center">
                        <Typography variant="h3" component="h3">
                            House Party
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <ButtonGroup disableElevation variant="contained" color="primary">
                            {/* Удаляем компонент `Link`, замените на теги <Button> */}
                            <Button color="primary" onClick={() => this.props.onJoinRoom()}>
                                Join a Room
                            </Button>
                            <Button color="secondary" onClick={() => this.props.onCreateRoom()}>
                                Create a Room
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderHomePage()}
            </div>
        );
    }
}