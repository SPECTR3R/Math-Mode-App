// import React from 'react';
// import {
//   Box,
//   Textarea,
//   FormControl,
//   MenuItem,
//   MenuList,
//   Menu,
//   MenuButton,
//   FormLabel,
//   Button,
//   MenuItemOption,
//   FormErrorMessage,
//   MenuOptionGroup,
//   FormHelperText,
// } from '@chakra-ui/core';
// import Markdown from '../components/Markdown';

// const TestQuestion = ({ handleChange, value }) => {
//   return (
//     <>
//       <Box p="50px" m="20px" w="80%" h="100%" boxShadow="lg" rounded="lg">
//         <Menu closeOnSelect={false}>
//           <MenuButton as={Button} variantColor="blue">
//             Tipo
//           </MenuButton>
//           <MenuList minWidth="240px">
//             <MenuOptionGroup title="Seleccione el tipo de pregunta" type="checkbox">
//               <MenuItemOption value="Respuesta corta">Respuesta corta</MenuItemOption>
//               <MenuItemOption value="verdadero/falso">Verdadero/Falso</MenuItemOption>
//               <MenuItemOption value="Opción multiple">Opción multiple</MenuItemOption>
//               <MenuItemOption value="Respuesta multiole">Respuesta multiple</MenuItemOption>
//             </MenuOptionGroup>
//           </MenuList>
//         </Menu>
//         <Textarea value={value} onChange={handleChange} size="sm" resize="vertical"  placeholder="Texto de la pregunta" />

//         <Markdown source={value} />

//       </Box>
//     </>
//   );
// };

// export default TestQuestion;
