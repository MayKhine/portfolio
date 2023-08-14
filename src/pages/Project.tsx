import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import projectsData from "../assets/projectsData.json";
// import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
// import Button from "@mui/material/Button";
// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
export const Project = () => {
  const location = useLocation();
  const projectName = location.pathname
    .toString()
    .substring(10)
    .toLocaleLowerCase();
  const curProj: JSON = projectsData[projectName];
  console.log("projectdata: ", curProj);

  //   const navigate = useNavigate();
  //   const liveLink = () => {
  //     console.log("live link is clicked");
  //     window.location.href = curProj.git;
  //   };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ margin: "20px" }}>
          <Link
            href={curProj.git}
            underline="none"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer "
          >
            <Typography variant="h4" gutterBottom>
              {curProj.name}
            </Typography>
          </Link>
          <Typography variant="h6" gutterBottom>
            {curProj.desc}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {curProj.technology}
          </Typography>
          <Link
            href={curProj.git}
            underline="none"
            color="blue"
            target="_blank"
            rel="noopener noreferrer "
          >
            <Typography variant="subtitle2" gutterBottom>
              Source Code
            </Typography>
          </Link>
        </Box>
      </motion.div>
    </div>
  );
};
