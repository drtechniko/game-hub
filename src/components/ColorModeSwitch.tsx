import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ColorModeSwitch: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <div>
        <HStack>
            <Switch id={'darkswitch'} colorScheme={'green'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text>Dark Mode</Text>
        </HStack>
    </div>
    );
};

export default ColorModeSwitch;
