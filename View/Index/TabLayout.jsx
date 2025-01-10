import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IndexScreen from './IndexScreen';
import MarketplaceScreen from './MarketplaceScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';

const Tabs = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#009999',
      }}>
      <Tabs.Screen
        name="Home"
        component={IndexScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order Items',
          tabBarIcon: ({color}) => (
            <Icon name="inbox" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}
