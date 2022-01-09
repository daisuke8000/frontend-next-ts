import Router from 'next/router';
import {Button, Container, Heading, Stack, Text} from '@chakra-ui/react';

export default function Auth() {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    color={'purple.400'}>
                    Please{" "}SignIn
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    All calculation management should be done in an application.
                    It is the easiest and quickest way to solve your work issues.
                </Text>
            <Stack spacing={6} direction={'row'}>
                <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'purple'}
                    bg={'purple.400'}
                    _hover={{ bg: 'purple.500' }}>
                    Submit
                </Button>
                <Button rounded={'full'}
                        px={6}
                        onClick={() => Router.back()}>
                    Back
                </Button>
            </Stack>
            </Stack>
        </Container>
    );
}