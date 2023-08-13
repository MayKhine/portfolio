import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import pj1ImgUrl from "../assets/images/test.png";
import Grid from "@mui/material/Grid";
export const Projects = () => (
  <motion.div
    initial={{ opacity: 0, x: "50vw" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <Box sx={{ margin: "20px" }}>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
          >
            <Card
              sx={{ width: "500px" }}
              onClick={() => {
                console.log("card is clicked");
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={pj1ImgUrl}
                  alt="Project test image"
                  sx={{ width: "400px", height: "400px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cape House Sharing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A web app to visualize availabilty, to make easy booking and
                    to share the Cape Cod House among family members
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>
        <Grid item>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
          >
            <Card sx={{ width: "500px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={pj1ImgUrl}
                  alt="Project test image"
                  sx={{ width: "400px", height: "400px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Project subtitle
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>
        <Grid item>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
          >
            <Card sx={{ width: "500px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={pj1ImgUrl}
                  alt="Project test image"
                  sx={{ width: "400px", height: "400px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Project subtitle
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  </motion.div>
);
