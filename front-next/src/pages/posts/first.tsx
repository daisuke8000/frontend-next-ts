import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';
import IndexDef1 from '/public/svg/IndexDef1.svg';
import IndexDef2 from '/public/svg/IndexDef2.svg';

export default function CallToActionWithAnnotation() {
    // @ts-ignore
    return (
        <>
            <IndexDef1/>
            <IndexDef2/>
        </>
    );
}