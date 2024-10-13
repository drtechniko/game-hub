import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/react.svg';

const NavBar: React.FC = () => {
    return (
        <HStack>
            <Image src={logo} boxSize={'30px'}/>
            <Text fontSize={'2xl'}>Game Hub</Text>
        </HStack>
    );
};

export default NavBar;