import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BottomNavigation } from 'component/layout/BottonNavigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ObjectUtil } from 'jamyth-web-util';
import { NavigationService } from 'util/NavigationService';

export const Router = React.memo(() => {
    const backgroundColor = useColorModeValue('gray.200', 'gray.800');

    return (
        <Flex backgroundColor={backgroundColor} minH="100vh" pb="90px" flexDirection="column">
            <Switch>
                {ObjectUtil.toArray(NavigationService, (path, { component }) => (
                    <Route exact path={path} component={component} key={path} />
                ))}
                <Redirect to="/" />
            </Switch>
            <BottomNavigation />
        </Flex>
    );
});
