import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import BDScreen from "./BDScreen";
import BRScreen from "./BRScreen";
import Persegi from "./Persegi";
import LuasPersegi from "./LuasPersegi";
import KelilingPersegi from "./KelilingPersegi";
import PersegiPanjang from "./PersegiPanjang";
import LuasPP from "./LuasPP";
import KelilingPP from "./KelilingPP";
import Segitiga from "./Segitiga";
import LuasSegitiga from "./LuasSegitiga";
import KelilingSegitiga from "./KelilingSegitiga";
import JajarGenjang from "./JajarGenjang";
import LuasJG from "./LuasJG"
import KelilingJG from "./KelilingJG"
import Trapesium from "./Trapesium";
import Lingkaran from "./Lingkaran";
import Kubus from "./Kubus";
import Balok from "./Balok";
import Tabung from "./Tabung";
import Kerucut from "./Kerucut";
import Bola from "./Bola";

const App = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BDScreen"
          component={BDScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BRScreen"
          component={BRScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Persegi"
          component={Persegi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LuasPersegi"
          component={LuasPersegi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KelilingPersegi"
          component={KelilingPersegi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersegiPanjang"
          component={PersegiPanjang}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LuasPP"
          component={LuasPP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KelilingPP"
          component={KelilingPP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Segitiga"
          component={Segitiga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LuasSegitiga"
          component={LuasSegitiga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KelilingSegitiga"
          component={KelilingSegitiga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JajarGenjang"
          component={JajarGenjang}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LuasJG"
          component={LuasJG}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KelilingJG"
          component={KelilingJG}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
