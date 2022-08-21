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
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}>
          Desenvolvimento de
          <Text as={'span'} fontWeight="bold" ml={4} color={'blue.400'}>
            Sistemas
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Encontre a forma perfeita para solucionar os seus <br />
          problemas de técnologia.
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
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}