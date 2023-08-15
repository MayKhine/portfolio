import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import imgUrl from "../assets/images/img.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ButtonStyle = {
  color: "black",
  padding: "10px",
  borderRadius: "8px",
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
      <Box sx={{ backgroundColor: "pink", margin: "20px" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            // height="100"
            // width="100"
            image={imgUrl}
            alt="profile pic"
            sx={{ backgroundColor: "pink", width: "400px", height: "400px" }}
          ></CardMedia>
          <CardContent
            sx={{
              backgroundColor: "lightyellow",
              flex: "1",
              minWidth: "300px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Hi, I am May, a Boston-based front-end developer with a knack for
              creative problem solving.
            </Typography>
            <Typography variant="h5" gutterBottom>
              I have 3+ years of experience in database development and custom
              reporting. I am on a mission to pivot my careet into web
              development. Passionate about innovation and design, I am
              constantly refining my skills through personal projects!
            </Typography>
            <Button
              sx={ButtonStyle}
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Get in touch
            </Button>
            <Button
              sx={ButtonStyle}
              onClick={() => {
                navigate("/Projects");
              }}
            >
              Check my work
            </Button>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};
