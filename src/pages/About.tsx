import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "50vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          backgroundColor: "pink",
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "20px",
        }}
      >
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
              Hello!
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              I am May, a passionate and creative developer based in Boston. I
              am dec{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};
