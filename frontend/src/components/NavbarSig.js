import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Flex,
  useColorMode,
  IconButton,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/core';

const NavbarSig = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100%" bg="blue.500" align="center" justify="space-between">
      <Box>
        <IconButton
          m={4}
          rounded="full"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          color={colorMode === 'light' ? 'black' : 'white'}
        />
      </Box>

      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          m={4}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          rightIcon="chevron-down"
        >
          ¡Registrate ahora! ››
        </MenuButton>

        <MenuList>
          <MenuItem minH="48px">
            <Image
              size="2.5rem"
              rounded="full"
              src="/images/teacher.jpg"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <Link to="/teacher.jpg"> ...Como profesor </Link>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              size="2.5rem"
              rounded="full"
              src="/images/student.jpg"
              alt="Simon the pensive"
              mr="12px"
            />
            <Link to="/studentSig"> ...Como estudiante </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarSig;
