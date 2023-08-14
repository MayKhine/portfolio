import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import projectsData from "../assets/projectsData.json";
import Link from "@mui/material/Link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wrap } from "popmotion";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Card, CardMedia, CardContent, CardAction } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

export const Project = () => {
  const location = useLocation();
  const projectName = location.pathname
    .toString()
    .substring(10)
    .toLocaleLowerCase();
  const curProj: JSON = projectsData[projectName];
  console.log("projectdata: ", curProj);

  const [[img, direction], setImg] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, img);

  const paginate = (newDirection: number) => {
    setImg([img + newDirection, newDirection]);
  };

  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ margin: "20px" }}>
            <Card>
              <CardMedia>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "lightyellow",
                    marginTop: "300px",
                    alignSelf: "center",
                  }}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      style={{ height: "500px", position: "absolute" }}
                      key={img}
                      src={images[imageIndex]}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction > 0 ? "100%" : "-100%",
                      }}
                      animate={{ zIndex: 1, x: 0, opacity: 1 }}
                      exit={{
                        zIndex: 0,
                        opacity: 0,
                        x: direction < 0 ? "100%" : "-100%",
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 1 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                          paginate(1);
                        } else if (swipe > 10000) {
                          paginate(-1);
                        }
                      }}
                    />
                  </AnimatePresence>
                </div>
              </CardMedia>

              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  margin: "10%",
                  marginTop: "250px",
                  //   backgroundColor: "pink",
                }}
              >
                <div
                  style={{ alignSelf: "center", display: "flex", gap: "50px" }}
                >
                  <ArrowBackIosRoundedIcon
                    onClick={() => paginate(1)}
                  ></ArrowBackIosRoundedIcon>

                  <ArrowForwardIosRoundedIcon
                    onClick={() => paginate(-1)}
                  ></ArrowForwardIosRoundedIcon>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Link
                    href={curProj.url}
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

                  <div style={{ display: "flex" }}>
                    {curProj.url && (
                      <>
                        <Link
                          href={curProj.url}
                          underline="none"
                          color="blue"
                          target="_blank"
                          rel="noopener noreferrer "
                        >
                          <Typography variant="subtitle2" gutterBottom>
                            Live Link
                          </Typography>
                        </Link>
                        <Typography
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                        >
                          {" "}
                          |{" "}
                        </Typography>
                      </>
                    )}

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
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
        </motion.div>
      </div>
    </div>
  );
};
