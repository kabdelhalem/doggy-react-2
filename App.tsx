import Home from "./src/pages/home";
import {NavigationContainer} from "@react-navigation/native";
import {MyTabs} from "./src/navigation/navbar";
import {createStackNavigator} from "@react-navigation/stack";
import Auth from "./src/auth/auth";
import OnboardingPage from "./src/pages/onboarding";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = createStackNavigator();

export default function App() {
  const {isFirstLaunched, setIsFirstLaunched} = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    });
  }, []);

  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    return (
      <NavigationContainer independent={true}>
        <AppStack.Navigator>
          <AppStack.Screen name="Onboarding" component={OnboardingPage} />
          <AppStack.Screen name="Auth" component={Auth} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Auth />;
  }
}
