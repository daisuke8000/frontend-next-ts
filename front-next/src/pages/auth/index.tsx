import { Container, Stack } from '@chakra-ui/react';
import { SigninPage } from "../../components/Layout/Signin";

export default function Index() {
    return (
        <Container maxW={'5xl'}>
            <Stack>
                <SigninPage />
            </Stack>
        </Container>
    );
}