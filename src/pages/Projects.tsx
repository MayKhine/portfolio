import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import projectsData from "../assets/projectsData.json";
import AspectRatio from "@mui/joy/AspectRatio";
import { cardStyle, imgStyle, projectCardTextColor } from "../styles";
export const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <Grid
            container
            rowSpacing={4}
            columnSpacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.5 }}
              >
                <Card
                  sx={cardStyle}
                  onClick={() => {
                    navigate(`/Projects/${"CapeHouse"}`);
                  }}
                >
                  <AspectRatio objectFit="contain" ratio="4/3">
                    <img
                      style={imgStyle}
                      src={projectsData.capehouse.img[0]}
                      alt="Cape Cod Sharing Project"
                    />
                  </AspectRatio>
                  <CardContent sx={{ padding: "10px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Cape House Sharing
                    </Typography>
                    <Typography variant="body2" color={projectCardTextColor}>
                      A web app to visualize availabilty, to make easy booking
                      and to share the Cape Cod House among family members
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
              >
                <Card
                  sx={cardStyle}
                  onClick={() => {
                    navigate(`/Projects/${"todoApp"}`);
                  }}
                >
                  <AspectRatio objectFit="contain" ratio="4/3">
                    <img
                      style={imgStyle}
                      src={projectsData.todoapp.img[0]}
                      alt="Todo App Project"
                    />
                  </AspectRatio>
                  <CardContent sx={{ padding: "10px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Todo App
                    </Typography>
                    <Typography variant="body2" color={projectCardTextColor}>
                      A task management app to organize, prioritize and conquer
                      to-do list effortlessly. Say 'Hello' to productivity!
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
              >
                <Card
                  sx={cardStyle}
                  onClick={() => {
                    navigate(`/Projects/${"restaurantPage"}`);
                  }}
                >
                  <AspectRatio
                    objectFit="contain"
                    ratio="4/3"
                    // sx={{ height: "150px" }}
                  >
                    <img
                      style={imgStyle}
                      src={projectsData.restaurantpage.img[0]}
                      alt="Restaurant Page"
                    />
                  </AspectRatio>
                  <CardContent sx={{ padding: "10px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Bagan Restaurant
                    </Typography>
                    <Typography variant="body2" color={projectCardTextColor}>
                      A simple restaurant page
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};
