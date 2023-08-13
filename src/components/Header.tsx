import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const ButtonStyle = {
  color: "white",
  padding: "10px",
  borderRadius: "8px",
};
export const Header = () => {
  const navigate = useNavigate();

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
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigate("/Projects");
          }}
        >
          Projects
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigate("/About");
          }}
        >
          About
        </Button>
        <Button
          sx={ButtonStyle}
          onClick={() => {
            navigate("/Contact");
          }}
        >
          Contact
        </Button>
      </div>
    </motion.div>
  );
};
