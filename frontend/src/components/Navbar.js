import React from 'react';

import { Flex, useColorMode, IconButton, Box } from '@chakra-ui/core';
import MenuSignup from '../components/MenuSignup';
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  return (
    <Flex
      w="full"
      bg={colorMode === 'light' ? 'blue.500' : '#90cdf4'}
      height="70px"
      align="center"
      justify="center"
    >
      <Flex w={['90%', '90%', '80%', '70%']} align="center" justify="space-between">
        <Box>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            color={colorMode === 'light' ? 'black' : 'white'}
            _hover={{ bg: 'gray.400' }}
          />
          {location.pathname !== '/' && (
            <Link to="/">
              <IconButton
                rounded="full"
                ml={4}
                icon="arrow-left"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                color={colorMode === 'light' ? 'black' : 'white'}
                _hover={{ bg: 'gray.400' }}
              />
            </Link>
          )}
        </Box>
        <MenuSignup colorMode={colorMode} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
