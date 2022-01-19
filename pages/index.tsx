import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import client from "../utils/apolloClient";
import { GetUsersDocument, User } from "../generated/graphql";
import { GetStaticProps, NextPage } from "next";

interface HomeProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({
    query: GetUsersDocument,
  });

  try {
    if (res.error || (!res.loading && !res.data)) {
      return { notFound: true };
    }

    return {
      props: {
        users: res.data.users,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

const Home: NextPage<HomeProps> = ({ users }) => {
  console.log(users);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        Go to the about page
      </Box>
    </Container>
  );
};

export default Home;
