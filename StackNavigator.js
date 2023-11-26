import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EditProfile from "./screens/EditProfile";
import EditImage from "./screens/EditImage";
import EditPhone from "./screens/EditPhone";
import EditEmail from "./screens/EditEmail";
import EditAbout from "./screens/EditAbout";
import EditName from "./screens/EditName";



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: false,
      animation: 'slide_from_right',
      presentation: 'card',
      }}>
        <Stack.Group>
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditImage" component={EditImage} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="EditPhone" component={EditPhone} />
            <Stack.Screen name="EditEmail" component={EditEmail} />
            <Stack.Screen name="EditAbout" component={EditAbout} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator