import {Authenticator} from "@aws-amplify/ui-react-native";
import {NavigationContainer} from "@react-navigation/native";
import {Amplify} from "aws-amplify";
import React from "react";
import {MyTabs} from "../navigation/navbar";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);
const Auth = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <NavigationContainer independent={true}>
          <MyTabs />
        </NavigationContainer>
      </Authenticator>
    </Authenticator.Provider>
  );
};

export default Auth;
