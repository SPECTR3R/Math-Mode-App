import React from 'react';
import { Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const GrayLink = ({ src, label }) => {
  return (
    <Link to={src}>
      <Button
        m={2}
        type="button"
        boxShadow="sm"
        _hover={{ boxShadow: 'md' }}
        _active={{ boxShadow: 'lg' }}
      >
        {label}
      </Button>
    </Link>
  );
};
export default GrayLink;
