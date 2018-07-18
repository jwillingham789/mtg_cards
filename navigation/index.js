import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Hamburger from "./hamburger";
import Drawer from "./drawerMenu";

const defaultHeader = {
  navigationOptions: ({ navigation }) => ({
    headerTintColor: "#fff",
    gesturesEnabled: false,
    headerRight: <Hamburger open={() => navigation.navigate("DrawerOpen")} />
  })
};

const defaultTransitionConfig = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
    }
  })
};

import Welcome from "../views/welcome";
import Home from "../views/home";

const WelcomeStack = StackNavigator(
  {
    Welcome: {
      navigationOptions: {
        header: null
      },
      screen: Welcome
    }
  },
  {
    initialRouteName: "Welcome",
    ...defaultTransitionConfig
  }
);

const MainStack = StackNavigator(
  {
    Home: {
      ...defaultHeader,
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    ...defaultTransitionConfig
  }
);

const AppNavigator = DrawerNavigator(
  {
    WelcomeStack: {
      screen: WelcomeStack
    },
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: "Home"
      }
    }
  },
  {
    initialRouteName: "WelcomeStack",
    drawerPosition: "right",
    contentComponent: props => <Drawer {...props} />,
    ...defaultTransitionConfig
  }
);

export default AppNavigator;
