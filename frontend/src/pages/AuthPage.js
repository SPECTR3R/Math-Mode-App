import React from 'react';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
  Flex,
} from '@chakra-ui/core';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import NavbarLog2 from '../components/NavbarLog2';

const AuthPage = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <NavbarLog2 />
      <Flex justify="center" align="center" mt= {4}>
        <Box
          bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          w="350px"
          p={3}
          boxShadow="sm"
          rounded="lg"
        >
          <Tabs variant="enclosed-colored" isFitted m={4}>
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanels mt={3}>
              <TabPanel>
                <SignupForm />
              </TabPanel>
              <TabPanel>
                <LoginForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default AuthPage;
