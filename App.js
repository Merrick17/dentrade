import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {default as theme} from './assets/theme.json'
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
