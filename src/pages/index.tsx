import { ColorModeSwitcher } from "@/components/common";
import { Heading, Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
    >
      <Head>
        <title>Chill N' Watch - Watch random highly rated YouTube videos</title>
      </Head>
      <Heading as="h4" size="md" marginRight="1.5rem">
        Toggle Dark/Light modes
      </Heading>
      <ColorModeSwitcher />
    </Box>
  );
}
