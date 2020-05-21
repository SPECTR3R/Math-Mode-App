import React from 'react';
import { useAuth } from '../services/AuthService';
import Navbar from '../components/Navbar';
import { Flex, useColorMode } from '@chakra-ui/core';

const Profile = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();

  console.log(user);

  return (
    <>
      <Navbar></Navbar>

      <Flex
        w={['90%', '90%', '80%', '70%']}
        p={3}
        boxShadow="sm"
        bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        rounded="lg"
        my={10}
      ></Flex>
    </>
  );
};

export default Profile;
