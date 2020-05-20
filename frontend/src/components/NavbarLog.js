import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Button, Flex, Box } from '@chakra-ui/core';

const NavbarLog = () => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text ml={4} fontFamily="Varela Round" fontSize="md" fontWeight="900">
        Math <br /> <span> &nbsp;&nbsp; Mode.com</span>
      </Text>
      <Box>
        <Button
          variantColor="blue"
          size="sm"
          mr={4}
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          <Link to="/teacherLog">Ingresar ›</Link>
        </Button>

      </Box>
    </Flex>
  );
};

export default NavbarLog;
