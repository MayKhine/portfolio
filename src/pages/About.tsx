import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import imgUrl from "../assets/images/img.jpg";
import { textColor } from "../styles";
export const About = () => {
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
            width: "1300px",
            boxShadow: "none",
            opacity: ".9",
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
              minWidth: "50%",
              color: textColor,
            }}
          >
            <Typography variant="h4" sx={txtParagraphStyle}>
              Hello!
            </Typography>
            <Typography variant="body1" sx={txtParagraphStyle}>
              I am May, a passionate front-end developer on a journey of
              advancing my career. Currently, I am mastering JavaScript,
              TypeScript and React.js through hands-on projects.
            </Typography>

            <Typography variant="body1" sx={txtParagraphStyle}>
              My ability to rise up to the situation drives me to embrace
              challenges and turn them into opportunities for growth. I thrive
              on the thrill of creation and problem solving. A storng work ethic
              is the foundation of my approach.
            </Typography>

            <Typography variant="body1" sx={txtParagraphStyle}>
              I am an alumnus of Northern Illinois University, where I graduated
              Summa Cum Laude with a Bachelor of Sciene in Computer Science and
              a minor in Art. During my college years, I worked as a research
              assistant and a teaching assistant at Computer Science department.
              After the graduation, I joined Palmer Consulting Group as a
              developer. I have 3+ years of experience in database development
              and custom Jasper reports.
            </Typography>

            <Typography variant="body1" sx={txtParagraphStyle}>
              Beyond the world of coding, my heart belongs to art. Trying out
              different art materials and techniques is a hobby that keeps my
              mind creative and fresh. Lately, I have been into hiking and
              paddle boarding.
            </Typography>
            <Typography variant="body1">
              I'm excited to embark on new coding adventures. Whether you're
              curious about my projects, seeking collaboration, or simply want
              to share insights, let's connect and explore the endless
              possibilities together.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

const txtParagraphStyle = { marginBottom: "15px" };
