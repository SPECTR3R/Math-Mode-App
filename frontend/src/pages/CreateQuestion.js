import React from 'react';

import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorMode } from '@chakra-ui/core';
import Navbar from '../components/Navbar';

// import TestQuestion from '../components/TestQuestion';
import ShortAnsForm from '../components/ShortAnsForm';

const CreateQuestion = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />

      <Box
        bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        w="95vw"
        p={3}
        boxShadow="sm"
        rounded="lg"
        s
      >
        <Tabs variant="enclosed-colored" isFitted m={4}>
          <TabList>
            <Tab>Una respuesta</Tab>
            <Tab>Verdadero o falso</Tab>
            <Tab>Opción multiple</Tab>
            <Tab>Varias Respuesta </Tab>
          </TabList>
          <TabPanels mt={3}>
            <TabPanel>
              <ShortAnsForm />
            </TabPanel>
            <TabPanel>
              <ShortAnsForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default CreateQuestion;
