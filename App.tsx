import {StatusBar} from "expo-status-bar";
import {Text, View, Button} from "react-native";
import {Amplify} from "aws-amplify";
import {Authenticator, useAuthenticator} from "@aws-amplify/ui-react-native";

import awsExports from "./src/aws-exports.js";

Amplify.configure(awsExports);

function SignOutButton() {
  const {signOut} = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View className="flex-1, bg-#fff1 align-middle justify-center">
          <SignOutButton />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}
