import React from 'react';
import NavbarLog from '../components/NavbarLog';
import Navbar from '../components/Navbar';
import AppDescription from '../components/AppDescription';
import Markdown from '../components/Markdown';

import { Heading, Box,useColorMode } from '@chakra-ui/core';

const Home = () => {

  const value = '$$\n x_{1,2} = \\frac{ -b\\pm\\sqrt{b^2-4ac}}{2a} \n $$';
  return (
    <>
      <Box w="100%" pos="sticky" top="0" zIndex={10}>
        <NavbarLog />
        <Navbar />
      </Box>
      <Heading
        mt={10}
        mb={10}
        as="h1"
        fontSize="60px"
        textAlign="center"
        fontFamily="Varela Round"
        fontWeight="900"
      >
        Math <br /> Mode.com
      </Heading>
      <Box fontSize="25px" mb={10}>
        <Markdown source={value} />
      </Box>
      <AppDescription></AppDescription>
    </>
  );
};
export default Home;
