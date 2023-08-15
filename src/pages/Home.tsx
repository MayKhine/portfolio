import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import imgUrl from "../assets/images/img.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ButtonStyle = {
  // color: "#c4c4bb",
  backgroundColor: "white",
  opacity: "0.3",
  padding: "10px",
  borderRadius: "8px",
  // background: "lightpink",
  width: "150px",
  height: "50px",
  // margin: "10px",
  marginRight: "10px",
  border: "0px",
  fontSize: "1em",
  fontWeight: "bold",
  cursor: "pointer",
};

export const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: "50vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "transparent",
            width: "80%",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            image={imgUrl}
            alt="profile pic"
            sx={{ width: "400px", height: "400px" }}
          ></CardMedia>
          <CardContent
            sx={{
              flex: "1",
              minWidth: "300px",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "#fafaf0" }}>
              Hi, I am May, a Boston-based front-end developer with a knack for
              creative problem solving.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: "#c4c4bb" }}>
              I have 3+ years of experience in database development and custom
              reporting. I am on a mission to pivot my careet into web
              development. Passionate about innovation and design, I am
              constantly refining my skills through personal projects!
            </Typography>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                navigate("/Contact");
              }}
              style={ButtonStyle}
            >
              Get in touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                navigate("/Projects");
              }}
              style={ButtonStyle}
            >
              Check my works
            </motion.button>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};
