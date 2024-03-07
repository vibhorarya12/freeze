import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//screens

import Home from './Home';
import YoloPay from './YoloPay';
import Ginie from './ginie';

//screen names
const homeName = 'Home';
const yoloPayName = 'YoloPay';
const ginieName = 'Ginie';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={yoloPayName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home-city' : 'home-city-outline';
            } else if (rn === yoloPayName) {
              iconName = focused ? 'qrcode-scan' : 'qrcode';
            } else if (rn === ginieName) {
              iconName = focused ? 'sale' : 'sale';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height:70,
            backgroundColor:'#0d0c0c',
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            opacity:0.6
            
            
          },
          
         
          headerShown:false
        })}>
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={yoloPayName} component={YoloPay} />
        <Tab.Screen name={ginieName} component={Ginie} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
/* Frame 140 */


