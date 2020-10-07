// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
//import SignIn from "./components/SignIn";
import SignupForm from "./components/SignupForm";
import ForgotPass from "./components/ForgotPass";
import Position from "./components/Position";
// import CardPosition from "./components/CardPosition";
// import MenuOperation from "./components/MenuOperation";
// import Transaction from "./components/Transaction";
import TakePhoto from "./components/TakePhoto";
import Photo from "./components/Photo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={LogIn} />
          <Stack.Screen name="sign" component={SignupForm} />
          <Stack.Screen name="forgotPass" component={ForgotPass} />
          <Stack.Screen name="position" component={Position} />
          {/* <Stack.Screen name="cardPosition" component={CardPosition} />
          <Stack.Screen name="menuOp" component={MenuOperation} />
          <Stack.Screen name="transaction" component={Transaction} />           */}
          <Stack.Screen name="takePhoto" component={TakePhoto} />
          <Stack.Screen name="photo" component={Photo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
