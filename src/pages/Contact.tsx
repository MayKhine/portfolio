import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "50vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "transparent",
            width: "800px",
            boxShadow: "none",
            color: "#f2f2dc",
            opacity: ".9",
          }}
        >
          <CardContent
            sx={{
              flex: "1",
              minWidth: "300px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Let's Chat!
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Thanks for visiting{" "}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Email: maykhine.mmk@gmail.com
            </Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="https://github.com/MayKhine"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer "
              >
                <GitHubIcon sx={{ width: "30px", height: "30px" }}></GitHubIcon>
              </Link>
              <Link
                href="https://www.linkedin.com/in/maykhine/"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer "
              >
                <LinkedInIcon
                  sx={{ width: "30px", height: "30px" }}
                ></LinkedInIcon>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};
