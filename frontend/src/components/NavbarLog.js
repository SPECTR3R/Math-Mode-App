import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Button, Flex, useColorMode } from '@chakra-ui/core';

const NavbarLog = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="full" bg={colorMode === 'light' ? 'white' : 'gray.800'} height="70px" justify="center">
      <Flex w={['90%', '90%', '80%', '70%']} align="center" justify="space-between">
        <Text fontFamily="Varela Round" fontSize="lg" fontWeight="900">
          Math <br /> &nbsp;&nbsp; Mode.com
        </Text>
        <Button
          variantColor="blue"
          color={colorMode === 'light' ? 'white' : 'gray.800'}
          size="sm"
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          <Link to="/auth/login">Ingresar ›</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavbarLog;
