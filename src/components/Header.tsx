import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, hoverMotion } from "../styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        height: "60px",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <motion.button
          whileHover={hoverMotion}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Portfolio/Home");
          }}
          style={ButtonStyle}
        >
          HOME
        </motion.button>
        <motion.button
          whileHover={hoverMotion}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Portfolio/Projects");
          }}
          style={ButtonStyle}
        >
          PROJECTS
        </motion.button>
        <motion.button
          whileHover={hoverMotion}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Portfolio/About");
          }}
          style={ButtonStyle}
        >
          ABOUT
        </motion.button>
        <motion.button
          whileHover={hoverMotion}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            navigate("/Portfolio/Contact");
          }}
          style={ButtonStyle}
        >
          CONTACT
        </motion.button>
      </div>
    </motion.div>
  );
};

// const ButtonStyle = {
//   padding: "10px",
//   borderRadius: "8px",
//   background: "white",
//   opacity: "0.3",
//   width: "150px",
//   height: "50px",
//   // margin: "10px",
//   marginLeft: "10px",
//   border: "0px",
//   fontSize: "1em",
//   fontWeight: "bold",
//   cursor: "pointer",
// };

// const hoverMotion = {
//   scale: 1.1,
//   backgroundColor: "#f27348",
//   opacity: "1",
// };
