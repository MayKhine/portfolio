import { useLocation } from "react-router-dom";
import projectsData from "../assets/projectsData.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Project = () => {
  const location = useLocation();
  const projectName = location.pathname
    .toString()
    .substring(10)
    .toLocaleLowerCase();
  const curProj: JSON = projectsData[projectName];
  console.log("projectdata: ", curProj);
  const navigate = useNavigate();

  const liveLink = () => {
    console.log("live link is clicked");
    window.location.href = curProj.git;

    // navigate(curProj.url);
  };
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          onClick={() => {
            liveLink();
          }}
        >
          {curProj.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {curProj.desc}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {curProj.technology}
        </Typography>
      </Box>
    </>
  );
};
