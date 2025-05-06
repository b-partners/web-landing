import { FlexBox } from "@/common/components";
import { Box, Button, Divider, SxProps, Typography } from "@mui/material"
import { PALETTE_COLORS } from "@/config/theme";

const HOME_SX: SxProps = {
  width: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(/assets/images/background.webp)",
}

const HOME_CONTAINER_SX: SxProps = {
  p: 10,
  width: "100%",
  bgcolor: "red",
  minHeight: "100vh",
  alignItems: "start",
  flexDirection: "column",
  justifyContent: "end",
  background: "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
};

export const Home = () => {
  return (
    <Box component="header" sx={HOME_SX}>
      <FlexBox sx={HOME_CONTAINER_SX}>
        <FlexBox sx={{ flexDirection: "column", alignItems: "start", gap: 4, maxWidth: "1000px" }}>
          <Typography sx={{ color: "white", fontWeight: 600, fontSize: "4rem" }} variant="h2">Valorisez ce que vous <br /> voyez depuis le ciel</Typography>
          <Typography sx={{ fontSize: "1.3rem", color: "white" }}>
            BIRDIA analyse automatiquement les toitures à partir d’images aériennes ultra haute définition (5 cm de précision). Grâce à notre intelligence artificielle, couvreurs, assureurs, collectivité peuvent, en un clic, détecter l’état d’usure, les zones à risque ou les signes de dégradation d’une toiture, sans avoir à se déplacer.
          </Typography>
        </FlexBox>
        <Divider sx={{ mt: 4, height: "1px", width: "100%", bgcolor: "white" }} />
        <FlexBox sx={{ justifyContent: "space-between", width: "100%", mt: 4 }}>
          <Typography sx={{ color: "white", fontSize: "1rem" }}>Notre technologie permet ainsi de gagner un temps précieux, de fiabiliser les <br /> diagnostics et de faciliter la prise de décision.</Typography>
          <FlexBox sx={{ gap: 4 }}>
            <Button sx={{ fontSize: "1rem", bgcolor: PALETTE_COLORS.neon_orange, color: "white", "&:hover": { bgcolor: PALETTE_COLORS.pine }, px: 2 }}>
              Réservez votre démo
            </Button>
            <Button variant="text" sx={{ fontSize: "1rem", bgcolor: "white", px: 2, color: PALETTE_COLORS.black, fontWeight: "bold", "&:hover": { bgcolor: PALETTE_COLORS.pine, color: "white" } }}>
              Se connecter
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box >
  )
}
