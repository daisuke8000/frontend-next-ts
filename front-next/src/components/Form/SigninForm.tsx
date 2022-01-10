import {ChangeEvent, useState, VFC} from "react";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading, Input,
    Link,
    Stack, Text,
    useColorModeValue
} from "@chakra-ui/react";
import {useRouter} from "next/router";

export const SigninForm: VFC = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password_confirm, setPasswordConfirm] = useState<string>('');
    const [changeMode, setChangeMode] = useState<boolean>(true);

    const onChangeUsername = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onChangePasswordConfirm = (e:ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value)
    }

    const onClickSiginin = () => {
        const setUser = {
            "email": email,
            'password': password,
        }
        fetch("http://localhost:8080/api/admin/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(setUser),
            credentials: 'include',
        }).then((r) => {
            console.log(r)
            router.push("/");
        }).catch(() => {
            alert("unknown error")
        });
    }


    const onClickSiginup = () => {
        if (password != password_confirm) return;
        const newUser = {
            "name": name,
            "email": email,
            'password': password,
            'password_confirm': password_confirm,
        }
        fetch("http://localhost:8080/api/admin/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }).then(() => {
            router.push("/");
        }).catch(() => {
            alert("unknown posted error")
        });
    }



    return (
        <Flex
            align={'center'}
            justify={'center'}
            boxShadow={'lg'}
            rounded={'lg'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12} px={6}>
                { changeMode ?
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text color={'gray.500'} maxW={'3xl'}>
                            If you do not have an account, please click here to register.
                        </Text>
                        <Text testAlign="center"
                              justify="center"
                              color="blue.500"
                              onClick={() => setChangeMode(!changeMode)}
                              _hover={{cursor: "pointer"}}
                        >Signup?</Text>
                    </Stack>
                    :
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign up to your account</Heading>
                        <Text testAlign="center"
                              justify="center"
                              color="blue.500"
                              onClick={() => setChangeMode(!changeMode)}
                              _hover={{cursor: "pointer"}}
                        >Signin?</Text>
                    </Stack>
                }
                <Box>
                    <Stack spacing={4}>
                        {changeMode ?
                            <>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email"
                                           placeholder="Email"
                                           value={email}
                                           onChange={onChangeEmail}/>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password"
                                           placeholder="Password"
                                           value={password}
                                           onChange={onChangePassword}/>
                                </FormControl>
                            </>
                            :
                            <>
                                <FormControl id="username">
                                    <FormLabel>Username</FormLabel>
                                    <Input type="name"
                                           placeholder="Username"
                                           value={name}
                                           onChange={onChangeUsername}/>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email"
                                           placeholder="Email"
                                           value={email}
                                           onChange={onChangeEmail}/>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password"
                                           placeholder="Password"
                                           value={password}
                                           onChange={onChangePassword}/>
                                </FormControl>
                                <FormControl id="confirm">
                                    <FormLabel>PasswordConfirm</FormLabel>
                                    <Input type="password"
                                           placeholder="confirm"
                                           value={password_confirm}
                                           onChange={onChangePasswordConfirm}/>
                                </FormControl>
                            </>
                        }
                    </Stack>
                    <Stack spacing={10}>
                        {changeMode ?
                            <>
                            <Stack
                                direction={{base: 'column', sm: 'row'}}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Stack spacing={6} direction={'row'}>
                                <Button
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'purple'}
                                    bg={'purple.400'}
                                    _hover={{ bg: 'purple.500' }}
                                    onClick={onClickSiginin}>
                                    Submit
                                </Button>
                                <Button rounded={'full'}
                                        px={6}
                                        onClick={() => router.push('/')}>
                                    Back
                                </Button>
                            </Stack>
                            </>
                            :
                            <>
                            <Box/>
                                <Stack spacing={6} direction={'row'}>
                                <Button
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'purple'}
                                    bg={'purple.400'}
                                    _hover={{ bg: 'purple.500' }}
                                    onClick={onClickSiginup}>
                                Submit
                                </Button>
                                <Button rounded={'full'}
                                px={6}
                                onClick={() => router.push('/')}>
                                Back
                                </Button>
                                </Stack>
                            </>
                        }
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}