import { Container } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Navbar from "./Navbar";

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
      <Navbar paletteMode={paletteMode} setPaletteMode={setPaletteMode} />
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;
