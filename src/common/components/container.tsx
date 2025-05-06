import { Box, BoxProps, SxProps } from "@mui/material";
import { FC } from "react";

const CONTAINER_SX: SxProps = {
  maxWidth: "1700px",
  ml: {
    sm: "0px",
    md: "5%",
    lg: "10%"
  },
  width: {
    sm: "100%",
    md: "90%",
  },
}

export const Container: FC<BoxProps> = ({ sx = {}, children, ...props }) => {
  return (
    <Box sx={{ ...CONTAINER_SX, ...sx }} {...props}>
      {children}
    </Box>
  )
}
