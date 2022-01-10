import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    IconProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import IndexDef1 from '/public/svg/IndexDef1.svg';
import IndexDef2 from '/public/svg/IndexDef2.svg';

export default function Index() {
    const router = useRouter();
    return (
        <>
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Description
                    </Heading>
                    <Text color={'gray.500'} maxW={'3xl'}>
                            All calculation management should be done in an application.
                            It is the easiest and quickest way to solve your work issues.
                    </Text>
                    <Flex w={'full'}>
                        <Illustration
                            height={{ sm: '24rem', lg: '28rem' }}
                            mt={{ base: 12, sm: 16 }}
                        />
                    </Flex>
                </Stack>
            </Container>
        </>
    );
}

export const Illustration = (props: IconProps) => {
    return (
        <>
            <IndexDef1/>
            <IndexDef2/>
        </>
    );
};