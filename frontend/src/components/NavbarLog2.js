import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Button, Flex, Box } from '@chakra-ui/core';

const NavbarLog = () => {
  
  return (
    <Flex justify="center" align="center" md={4}>
      <Flex w="80%" bg="blue.500" align="center" justify="space-between">
        <Text m={3} color="white" fontFamily="Varela Round" fontSize="lg" fontWeight="900">
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
            <Link to="/createQuestion">Ingresar ›</Link>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavbarLog;
