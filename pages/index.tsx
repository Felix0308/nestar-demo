import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack>Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack>Top agents</Stack>
        </Stack>
        <Stack>
          <Stack>Top Properties</Stack>
        </Stack>
        <Stack>
          <Stack>Events</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
