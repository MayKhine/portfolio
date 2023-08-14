import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "50vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
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
          <CardContent
            sx={{
              backgroundColor: "lightyellow",
              flex: "1",
              minWidth: "300px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Let's Chat!
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Email: maykhine.mmk@gmail.com
            </Typography>
            <div>
              <Link
                href="https://github.com/MayKhine"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer "
              >
                <GitHubIcon></GitHubIcon>
              </Link>
              <Link
                href="https://www.linkedin.com/in/maykhine/"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer "
              >
                <LinkedInIcon></LinkedInIcon>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

const ButtonStyle = {
  color: "black",
  padding: "10px",
  borderRadius: "8px",
};
