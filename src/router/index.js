import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../containers/Auth/LoginScreen';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../config';
import {AccountScreen, ProfileScreen, RegisterScreen} from '../containers';

Ionicons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen4() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const TabBottom = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'search' : 'search'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="SettingsScreen2"
        component={SettingsScreen2}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="SettingsScreen3"
        component={SettingsScreen3}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'pricetag' : 'pricetag-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabBottom" component={TabBottom} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Router;
