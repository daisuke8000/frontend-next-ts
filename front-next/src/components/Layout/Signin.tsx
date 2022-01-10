import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { SigninForm } from '../Form/SigninForm';
import {VFC} from "react";

export const SigninPage: VFC = () => {
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
                >Welcome!
                </Heading>
                <Stack>
                    <SigninForm />
                </Stack>
            </Stack>
        </Container>
    );
}