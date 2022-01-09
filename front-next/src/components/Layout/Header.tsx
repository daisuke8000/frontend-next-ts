import { useRouter } from 'next/router';
import {ReactNode, VFC} from 'react';
import {Box, Flex, Link, Stack, useColorModeValue} from '@chakra-ui/react';
import { Navbar } from "../NavLayout/Navbar";

export const Header: VFC = () => {
    return (
        <>
            <Flex
                as="nav"
                bg="purple.400"
                color="pink.100"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex
                    align="center"
                    fontSize="md"
                    flexGrow={3}
                    display={{ base: "none", md: "flex"}}
                >
                {Navbar.map((link) => (
                    <Box pr={5}>
                        <Link
                            key={link.id}
                            href={link.path}
                        >{link.name}</Link>
                    </Box>
                ))}
                </Flex>
            </Flex>
        </>
    );
}