import React from 'react';

import {
  Flex,
  Tabs,
  Box,
  TabList,
  Tab,
  Text,
  TabPanels,
  TabPanel,
  useColorMode,
} from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import MathRender from '../components/MathRender';

import ShortAnsForm from '../components/ShortAnsForm';
const CreateQuestion = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />

      <Flex
        w={['90%', '90%', '80%', '70%']}
        p={3}
        boxShadow="sm"
        bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        rounded="lg"
        my={10}
        direction="column"
      >
        <Box ml="5" w="90%">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Instrucciones para crear pregunta:
          </Text>

          <Text as="h3" fontWeight="light" mb={2} fontSize="lg">
            Selecciona el tipo de pregunta y utiliza la forma de abajo para crearla. <br /> Si
            deseas introducir ecuaciones puedes usar código&nbsp;
            <a
              style={{ textDecoration: 'underline' }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://es.wikipedia.org/wiki/AsciiMath"
            >
              AsciiMath
            </a>
            . <br />
            Para ello, debes de encerrar la ecuación entre dos signos de pesos ($). <br /> por
            ejemplo: $$x=(-b +- sqrt(b^2 – 4ac))/(2a)$$ <br /> resulta:
            <MathRender source={'$$x=(-b +- sqrt(b^2 – 4ac))/(2a)$$'} />
          </Text>
        </Box>

        <Tabs variant="enclosed-colored" w="90%" m={4}>
          <TabList>
            <Tab>Una respuesta</Tab>
            <Tab>Verdadero o falso</Tab>
            <Tab>Opción múltiple</Tab>
            <Tab>Respuesta múltiple </Tab>
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
      </Flex>
    </>
  );
};

export default CreateQuestion;
