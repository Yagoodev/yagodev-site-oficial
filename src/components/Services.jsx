import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    title: 'Escalabilidade',
    text: 'Tenha um negócio escalável, pronto para suportar sua base de clientes.',
  },
  {
    title: 'Otimização',
    text: 'Seus projetos terão uma construção sólida e bem otimizadas.',
  },
  {
    title: 'Modernidade',
    text: 'Sistemas, sites modernos e responsivos.',
  },
  {
    title: 'Suporte',
    text: 'Um suporte que irá te atender sempre que',
  },
];

export function Services() {
  return (
    <Box p={4} mb={40} mt={20}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Serviços</Heading>
        <Text color={'gray.600'} as={"span"} >
          Veja as principais vantagens que você terá ao contratar os serviços.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}