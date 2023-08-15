import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "70px", marginTop: "10px", marginRight: "10px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/");
          }}
          style={ButtonStyle}
        >
          HOME
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Projects");
          }}
          style={ButtonStyle}
        >
          PROJECTS
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/About");
          }}
          style={ButtonStyle}
        >
          ABOUT
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Contact");
          }}
          style={ButtonStyle}
        >
          CONTACT
        </motion.button>
      </div>
    </motion.div>
  );
};

const ButtonStyle = {
  // color: "white",
  padding: "10px",
  borderRadius: "8px",
  background: "lightpink",
  width: "150px",
  height: "50px",
  margin: "10px",
  border: "0px",
  fontSize: "1em",
  fontWeight: "bold",
};
