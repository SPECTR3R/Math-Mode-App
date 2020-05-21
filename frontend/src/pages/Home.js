import React from 'react';
import { Heading, Box } from '@chakra-ui/core';

import NavbarLog from '../components/NavbarLog';
import Navbar from '../components/Navbar';
import AppDescription from '../components/AppDescription';
import MathRender from '../components/MathRender';


const Home = () => {
  const ascii = '$$e^(ipi)+1=0$$';

  return (
    <>
      <Box w="100%" pos="sticky" top="0" zIndex={10}>
        <NavbarLog />
        <Navbar />
      </Box>

      <Box>
        <Heading
          my={10}
          as="h1"
          fontSize={['50px', '75px', '105px', '120px']}
          fontFamily="Varela Round"
          fontWeight="900"
        >
          Math <br /> &nbsp;&nbsp; Mode.com
        </Heading>
      </Box>

      <Box fontSize={['40px', '50px', '70px', '100px']} mb={10}>
        <MathRender source={ascii} />
      </Box>
      <AppDescription/>
    </>
  );
};
export default Home;
