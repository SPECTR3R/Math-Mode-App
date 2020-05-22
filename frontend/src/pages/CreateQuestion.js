import React from 'react';

import {
  Flex,
  Box,
  Tabs,
  Stack,
  TabList,
  Divider,
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
        aling="center"
        justify="space-between"
      >
        <Box ml="6" my={4} w="89%" spacing={10}>
          <Text ml="5" as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Instrucciones para crear pregunta:
          </Text>
          <Text as="h3" ml="5" fontWeight="light" mb={2} fontSize="lg">
            • Selecciona el tipo de pregunta y utiliza la forma de abajo para crearla.
            <br />• Si deseas introducir ecuaciones puedes usar código&nbsp;
            <a
              style={{ textDecoration: 'underline' }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://es.wikipedia.org/wiki/AsciiMath"
            >
              AsciiMath
            </a>
            .
            <br />
            • Encierra las ecuaciónes, sin espacios, entre dos signos de pesos ($). <br />• Por
            ejemplo: $<span></span>$x=-b +- sqrt(b^2 – 4ac)$$ <br />
            {<MathRender source={'• Resulta: $$x=-b +- sqrt(b^2 – 4ac)$$'} />}{' '}
          </Text>
          <Divider borderColor="gray.500" />
        </Box>
        <Tabs variant="enclosed-colored" w="90%" m={4}>
          <TabList style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Tab w="180px">Una respuesta</Tab>
            <Tab w="180px">Verdadero o falso</Tab>
            <Tab w="180px">Opción múltiple</Tab>
            <Tab w="180px">Respuesta múltiple </Tab>
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
