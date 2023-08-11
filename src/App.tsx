// import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import "./App.css";

const ButtonStyle = {
  color: "white",
  padding: "10px",
  borderRadius: "8px",
};
function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button sx={ButtonStyle}>Home</Button>
          <Button sx={ButtonStyle}>Projects</Button>
          <Button sx={ButtonStyle}>About</Button>
          <Button sx={ButtonStyle}>Contact</Button>
        </div>
      </motion.div>
    </>
  );
}

export default App;
