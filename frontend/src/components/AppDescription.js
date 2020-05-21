import React from 'react';
import { Box, Image, Text, Flex, useColorMode } from '@chakra-ui/core';

const AppDescription = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };

  return (
    <Flex
      maxW="1000px"
      w={['90vw', '90vw', '90vw', '70vw']}
      direction="column"
      justify="space-around"
      bg={bgColor[colorMode]}
      boxShadow="md"
      rounded="lg"
      p="4"
    >
      <Flex align="center" mx="2">
        <Image src="/images/icon1.svg" size="50px" />
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            MathMode es para educadores
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Esta es la plataforma más sencilla para diseñar y aplicar examenes de matemáticas a tus
            estudiantes. Al mismo tiempo estarías contribuyendo al cuidado del planeta, disminuyendo
            tu consumo de papel{' '}
          </Text>
        </Box>
      </Flex>

      <Flex align="center" mx="2">
        <Image src="/images/icon2.svg" size="50px" />
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            MathMode es Simple
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Calificar decenas de examenes a mano es una tarea tediosa. MathMode te ayuda con las
            tareas repetivias, para que te puedas concentrar en impartir tu conomiento.
          </Text>
        </Box>
      </Flex>
      <Flex align="center" mx="2">
        <Image src="/images/icon3.svg" size="50px" />
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            MathMode es para todos
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Gracias a su diseño responsivo y su potente generador grafico, puedes estar seguro de
            que tus alumnos podran visuliazar a la perfeccion incluso en sus disposistvios moviles
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppDescription;
