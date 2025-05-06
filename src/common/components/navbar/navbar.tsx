import { SxProps, Typography, useMediaQuery } from "@mui/material"
import { Button } from "../buttons"
import { FlexBox } from "../flex-box"
import { Link, useLocation } from "react-router-dom"
import { NavbarButtonDrawer } from "./navbar-button-drawer"
import { LINKS } from "./utils/constants"
import { PALETTE_COLORS } from "@/config/theme"

const NAVBAR_SX: SxProps = {
  py: 2,
  gap: {
    md: 3,
    lg: 5,
    xl: 10
  },
  px: {
    xs: "20px",
    md: "0"
  },
  zIndex: 99999,
  position: "fixed",
  top: { xs: 0, md: "10px" },
  left: { xs: 0, md: "5%" },
  width: { xs: "100%", sm: "100%", md: "90%" },
  justifyContent: "space-between",
  bgcolor: { xs: "rgba(0,0,0,.4)", md: "transparent" },
  backdropFilter: "blur(5)"
}

const NAVBAR_CONTAINER_SX: SxProps = {
  px: 5,
  py: {
    sm: "10px",
    xl: "10px"
  },
  width: "100%",
  bgcolor: "white",
  borderRadius: "40px",
  justifyContent: "space-between",
}

const LINK_ITEM_SX: SxProps = {
  fontSize: {
    sm: "0.8rem",
    xl: "1.1rem"
  },
  fontWeight: 600,
  transition: "all linear .3s",
  "&:hover": {
    color: PALETTE_COLORS.neon_orange
  }
}

export const Navbar = () => {
  const isLg = useMediaQuery("(min-width:1500px)")
  const shouldShowDrawer = useMediaQuery("(max-width: 1100px)");

  return (
    <FlexBox component="nav" sx={NAVBAR_SX}>
      <img src="/assets/images/logo-text-white.png" alt="BIRDIA" style={{ height: isLg ? "45px" : '30px' }} />
      {shouldShowDrawer ? <NavbarButtonDrawer /> : <NavbarContent />}
    </FlexBox>
  )
}

const NavbarContent = () => {
  const location = useLocation();
  return (
    <FlexBox sx={NAVBAR_CONTAINER_SX}>
      <FlexBox sx={{ gap: { sm: 2, md: 3, xl: 5 } }} component="ul">
        {LINKS.map(({ to, label }) => (
          <Typography
            to={to}
            key={to}
            component={Link}
            sx={{
              ...LINK_ITEM_SX,
              color: location.pathname === to ? PALETTE_COLORS.neon_orange : undefined
            }}
          >
            {label}
          </Typography>
        ))}
      </FlexBox>
      <FlexBox sx={{ gap: 5 }}>
        <Button color="forest">
          Réservez votre démo
        </Button>
        <Button sx={{ fontWeight: "bold" }} variant="text">
          Se connecter
        </Button>
      </FlexBox>
    </FlexBox>
  )
}
