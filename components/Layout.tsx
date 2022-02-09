import { Box, Container } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Navbar from "./Navbar";
import CopyrightIcon from "@mui/icons-material/Copyright";

type PaletteMode = "dark" | "light";

interface LayoutProps {
  paletteMode: PaletteMode;
  setPaletteMode: Dispatch<SetStateAction<PaletteMode>>;
}

const Layout: React.FC<LayoutProps> = ({
  paletteMode,
  setPaletteMode,
  children,
}) => {
  return (
    <>
      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <Navbar paletteMode={paletteMode} setPaletteMode={setPaletteMode} />
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          marginTop: "auto",
          padding: "10px 15px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          letterSpacing: "1px",
          backgroundColor: paletteMode === "light" ? "#556cd6" : "#1d1d1d",
          color: "white",
          fontSize: "10px",
        }}
      >
        AWESOME SHOP, 2022 {` `}
        <CopyrightIcon
          sx={{
            margin: "0 3px",
            fontSize: "13px",
          }}
        />
        ALL RIGHT RESERVED.
      </Box>
    </>
  );
};

export default Layout;
