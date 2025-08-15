import React from "react";
import { AppBar, Toolbar, Button, Typography,Tabs } from "@mui/material";

function App() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
        <Typography>Rento.</Typography>

          <Button sx={{marginleft:"center", textAlign:"center"}}color="inherit">Home</Button>
          <Button sx={{marginleft:"auto", textAlign:"center"}} color="inherit">Contact</Button>
          <Button sx={{marginleft:"auto", textAlign:"center"}} color="inherit">About Us</Button>
          <Button sx={{marginleft:"auto", textAlign:"center"}} color="inherit">Products</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default App;
