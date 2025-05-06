import { Drawer, IconButton, SxProps } from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { Button } from "../buttons"
import { FlexBox } from "../flex-box";
import { useState } from "react"
import { LINKS } from "./utils/constants";

const DRAWER_CONTENT_SX: SxProps = {
  flexDirection: "column",
  justifyContent: "start",
  minWidth: "350px",
  height: "100%",
  width: "100%",
  p: 3,
  backdropFilter: 'blur(10px)',
  bgcolor: 'rgba(0, 0, 0, 0.2)',
  maxWidth: "100%"
};

export const NavbarButtonDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (to: string) => {
    setIsOpen(false);
    navigate(to);
  }
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} sx={{ fontSize: "1rem" }}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        open={isOpen}
        anchor="left"
        sx={{ zIndex: 99999999, "& .MuiPaper-root": { backgroundColor: "transparent" } }}
        onClose={() => setIsOpen(false)}
      >
        <FlexBox sx={DRAWER_CONTENT_SX}>
          <FlexBox sx={{ justifyContent: "space-between", width: "calc(100vw - 50px)", alignItems: "center" }}>
            <img src="/assets/images/logo-text-white.png" alt="BIRDIA" style={{ height: "30px" }} />
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </FlexBox>
          <FlexBox sx={{ mt: 3, flexDirection: "column", gap: 2 }}>
            {LINKS.map(({ to, label }) => (
              <Button variant="text" sx={{fontSize: "1rem",fontWeight: "bold", color: location.pathname === to ? "neon_orange" : "white" }} onClick={() => navigateTo(to)}>{label}</Button>
            ))}
            <Button sx={{ mt: 2, width: "100%" }} color="neon_orange">
              Réservez votre démo
            </Button>
            <Button variant="outlined" sx={{ width: "100%", fontWeight: "bold" }}>
              Se connecter
            </Button>
          </FlexBox>
        </FlexBox>
      </Drawer>
    </>
  )
}
