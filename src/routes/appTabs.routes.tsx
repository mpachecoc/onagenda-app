import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import AppRoutes from './app.routes';
import ListAppointments from '../pages/ListAppointments';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabsRoutes: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 56,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 24,
        height: 24,
      },
      labelStyle: {
        fontFamily: 'RobotoSlab-Medium',
        fontSize: 13,
        marginLeft: 12,
      },
      inactiveBackgroundColor: '#312e38',
      activeBackgroundColor: '#28262e',
      inactiveTintColor: '#999591',
      activeTintColor: '#ff9000',
    }}
  >
    <Screen
      name="AppRoutes"
      component={AppRoutes}
      options={{
        tabBarLabel: 'Agendar',
        tabBarIcon: ({ color, focused }) => (
          <Icon name="calendar" size={22} color={focused ? '#ff9000' : color} />
        ),
      }}
    />
    <Screen
      name="ListAppointments"
      component={ListAppointments}
      options={{
        tabBarLabel: 'Mis Citas',
        tabBarIcon: ({ color, focused }) => (
          <Icon name="clock" size={22} color={focused ? '#ff9000' : color} />
        ),
      }}
    />
  </Navigator>
);

export default AppTabsRoutes;
