import Head from "next/head";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../utils/apolloClient";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type PaletteMode = "dark" | "light";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#031625",
    },
  },
});

export default function MyApp(props: MyAppProps) {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>("light");

  useEffect(() => {
    if (localStorage.getItem("paletteMode")) {
      setPaletteMode(localStorage.getItem("paletteMode") as "dark" | "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paletteMode", paletteMode);
  }, [paletteMode]);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={paletteMode === "dark" ? darkTheme : theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout paletteMode={paletteMode} setPaletteMode={setPaletteMode}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
