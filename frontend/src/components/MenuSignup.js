import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core';

const MenuSignup = ({ colorMode }) => {


  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        rightIcon="chevron-down"
        _hover={{ bg: 'gray.400' }}

      >
        ¡Registrate ahora! ››
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Image
            size="3rem"
            rounded="full"
            src="/images/teacher.jpg"
            alt="Fluffybuns the destroyer"
            m="10px"
          />
          <Link to="/auth/teacher"> Como educador </Link>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            size="3rem"
            m="10px"
            rounded="full"
            src="/images/student.jpg"
            alt="Simon the pensive"
          />
          <Link to="/auth/student"> Como estudiante </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuSignup;
