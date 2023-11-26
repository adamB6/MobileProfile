import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { ProfileProvider } from './contexts/ProfileContext'


export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ProfileProvider>
  );
}