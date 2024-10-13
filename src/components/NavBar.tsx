import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar: React.FC = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize={'30px'}/>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;