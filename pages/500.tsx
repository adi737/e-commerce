import { Container, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import NextLink from "next/link";

const Custom500: NextPage = () => {
  return (
    <Container
      component="main"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">500 - Server-side error occurred</Typography>
      <NextLink passHref href="/">
        <Link>Go back home</Link>
      </NextLink>
    </Container>
  );
};

export default Custom500;
