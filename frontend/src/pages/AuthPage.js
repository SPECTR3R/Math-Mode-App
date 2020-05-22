import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
  Flex,
  IconButton,
} from '@chakra-ui/core';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';

import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

const AuthPage = () => {
  const { colorMode } = useColorMode();
  const { mode } = useParams();
  console.log(mode);
  return (
    <>
      <Navbar />
      <Flex justify="center" align="center" mt={8} mb={16} pos="relative" height="full">
        <Box
          bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          w="350px"
          p={3}
          boxShadow="sm"
          rounded="lg"
        >
         {mode=== 'student'&& <Flex my={4} justify="center">
            <IconButton
              mx={10}
              as="a"
              target="_blank"
              href="https://dry-meadow-59109.herokuapp.com/facebook"
              variant="outline"
              variantColor="blue"
              aria-label="Call Sage"
              fontSize="20px"
              icon={FaFacebookF}
            />
            <IconButton
              mx={10}
              as="a"
              target="_blank"
              href="https://dry-meadow-59109.herokuapp.com/google"
              variant="outline"
              variantColor="blue"
              aria-label="Call Sage"
              fontSize="20px"
              icon={AiOutlineGoogle}
            />
          </Flex>}
          <Tabs variant="enclosed-colored" isFitted m={4}>
            <TabList>
              <Tab>{mode === 'login' ? 'Ingresa' : 'Regístrate'}</Tab>
              <Tab>{mode !== 'login' ? 'Ingresa' : 'Regístrate'}</Tab>
            </TabList>
            <TabPanels mt={3}>
              <TabPanel>
                {mode === 'login' && <LoginForm />}
                {(mode === 'student' || mode === 'teacher') && <SignupForm mode={mode} />}
              </TabPanel>
              <TabPanel>
                {mode === 'login' && <SignupForm mode={mode} />}
                {(mode === 'student' || mode === 'teacher') && <LoginForm />}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default AuthPage;
