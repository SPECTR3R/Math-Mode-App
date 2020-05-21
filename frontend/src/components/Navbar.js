import React from 'react';

import { Flex, useColorMode, IconButton, Button, Box } from '@chakra-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { useAuth } from '../services/AuthService';
import MenuSignup from '../components/MenuSignup';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const { user, logout } = useAuth();
  const history = useHistory();

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
        {!user && <MenuSignup colorMode={colorMode} />}

        {user && (
          <Button
            size="sm"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            boxShadow="sm"
            _hover={{ bg: 'gray.400' }}
            _active={{ boxShadow: 'lg' }}
            onClick={() => {
              logout();
              history.push('/');
            }}
          >
            ‹‹ Cerrar sesión
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
