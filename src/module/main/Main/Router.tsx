import { Flex, useColorModeValue, useColorMode, Button } from '@chakra-ui/react';
import React from 'react';
import { BottomNavigation } from 'component/layout/BottonNavigation';
import { Switch, Route } from 'react-router-dom';
import { ObjectUtil } from 'jamyth-web-util';
import { NavigationService } from 'util/NavigationService';

export const Router = React.memo(() => {
    const backgroundColor = useColorModeValue('gray.200', 'gray.800');

    return (
        <Flex backgroundColor={backgroundColor} minH="100vh" flex={1} flexDirection="column" position="relative">
            <Switch>
                {ObjectUtil.toArray(NavigationService, (path, { component }) => (
                    <Route exact path={path} component={component} />
                ))}
            </Switch>
            <BottomNavigation />
        </Flex>
    );
});
