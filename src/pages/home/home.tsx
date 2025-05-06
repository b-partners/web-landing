import { Box, SxProps } from "@mui/material"

const HOME_SX: SxProps = {
  width: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(/assets/images/background.webp)",
}

const HOME_CONTAINER_SX: SxProps = {
  width: "100%", minHeight: "100vh", display: "block", bgcolor: "red", background: "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))"
};

export const Home = () => {
  return (
    <Box component="header" sx={HOME_SX}>
      <Box sx={HOME_CONTAINER_SX}>
      </Box>
    </Box >
  )
}
