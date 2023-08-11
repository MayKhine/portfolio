import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const ButtonStyle = {
  color: "white",
  padding: "10px",
  borderRadius: "8px",
};
export const Header = () => {
  const navigation = useNavigate();

  return (
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
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigation("/");
          }}
        >
          Home
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigation("/Projects");
          }}
        >
          Projects
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigation("/About");
          }}
        >
          About
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigation("/Contact");
          }}
        >
          Contact
        </Button>
      </div>
    </motion.div>
  );
};
