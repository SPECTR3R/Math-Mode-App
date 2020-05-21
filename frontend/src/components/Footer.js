import React from 'react';

import { Flex, useColorMode } from '@chakra-ui/core';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      pos="fixed"
      left="0"
      bottom="0"
      w="full"
      bg={colorMode === 'light' ? 'blue.500' : '#90cdf4'}
      height="30px"
      justify="center"
    ></Flex>
  );
};

export default Footer;
