import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@material-ui/core";

import EquationsPanel from "./EquationsPanel";
import "./App.css";

function App() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={4}>
                    <EquationsPanel />
                </Grid>
            </Grid>
        </Box>
    );
}

function Header() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    MM
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default App;
