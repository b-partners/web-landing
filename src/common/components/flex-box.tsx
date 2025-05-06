import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export const FlexBox: FC<BoxProps> = ({ sx = {}, children, ...props }) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ...sx }} {...props}>
    {children}
  </Box>
)
