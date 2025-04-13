// import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
    <Stack sx={{background: "#81c784" }}>Header</Stack>
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Popular Properties</Box>
        <Box>Top agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
    <Stack sx={{background: "#a1887f" }}>Footer</Stack>
    </>

  );
};

// export default withLayoutMain(Home);
