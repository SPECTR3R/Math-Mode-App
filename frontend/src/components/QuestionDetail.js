import React from 'react';
import { Flex, Checkbox, Text } from '@chakra-ui/core';
import MathRender from './MathRender';
const QuestionDetail = ({ colorMode, question, answer, register, selOrder }) => {
  console.log(selOrder);
  return (
    <Flex
      p={3}
      boxShadow="sm"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.500'}
      rounded="lg"
      my={5}
      justify="space-around"
      align="center"
    >
      <Text as="h4" textAlign="center" w="300px" fontWeight="ligth" mb={2} fontSize="lg">
        <MathRender source={question} />
      </Text>
      <Text as="h4" textAlign="center" w="300px" fontWeight="ligth" mb={2} fontSize="lg">
        <MathRender source={answer} />
      </Text>
      <Text as="h4" textAlign="center" w="300px" fontWeight="ligth" mb={2} fontSize="lg">
        <Checkbox ref={register()} name={`q${selOrder}`} >
          seleccionar
        </Checkbox>
      </Text>
    </Flex>
  );
};

export default QuestionDetail;
