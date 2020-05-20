import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import NavbarSig from '../components/NavbarSig';
import { Heading, Stack, PseudoBox, useColorMode, IconButton, Box, Image } from '@chakra-ui/core';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarLog></NavbarLog>
        <NavbarSig></NavbarSig>

        <Heading mt= {10} as="h1" fontSize="50px" textAlign="center" fontFamily="Varela Round" fontWeight="900">
          Math <br /> Mode.com
        </Heading>

        
      </div>
    );
  }
}
