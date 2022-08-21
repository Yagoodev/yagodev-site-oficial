import { useState } from 'react';

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';

import { IllustrationHero } from "./IllustrationHero";

export function Hero() {

  const [] = useState(["sistemas", "Site", "E-commerce"]);

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
            Desenvolvimento de {' '}
          <Text as={'span'} fontWeight="bold" color={'blue.400'}>
            Sistemas
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Encontre a forma perfeita para solucionar os seus problemas de técnologia.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            px={10}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            Quero contratar
          </Button>
        </Stack>
        <Flex w={'full'}>
          <IllustrationHero
            height='28rem'
            mt={{ base: 6, sm: 6 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}