import { Button, SxProps, Typography } from "@mui/material"
import { FlexBox } from "../flex-box"
import { Link } from "react-router-dom"
import { LINKS } from "./utils/constants"
import { PALETTE_COLORS } from "@/config/theme"

const NAVBAR_SX: SxProps = {
  px: 3,
  py: 2,
  gap: 10,
  left: "8%",
  top: "10px",
  width: "84%",
  position: "fixed",
  justifyContent: "space-between"
}

const LINK_ITEM_SX: SxProps = {
  fontSize: "16px",
  fontWeight: "bold"
}

export const Navbar = () => {
  return (
    <FlexBox component="nav" sx={NAVBAR_SX}>
      <img src="/assets/images/logo-text-white.png" alt="BIRDIA" style={{ height: "35px" }} />
      <FlexBox sx={{ justifyContent: "space-between", borderRadius: "30px", px: 5, py: 1, width: "100%", bgcolor: "white" }}>
        {LINKS.map(({ to, label }) => <Typography component={Link} sx={LINK_ITEM_SX} to={to} key={to}>{label}</Typography>)}

        <Button sx={{ bgcolor: PALETTE_COLORS.forest, color: "white", "&:hover": { bgcolor: PALETTE_COLORS.neon_orange }, px: 2 }}>
          Réservez votre démo
        </Button>
        <Button variant="text" sx={{ bgcolor: "transparent", px: 2, color: PALETTE_COLORS.neon_orange, fontWeight: "bold" }}>
          Se connecter
        </Button>
      </FlexBox>
    </FlexBox>
  )
}
