import {useAuthenticator} from "@aws-amplify/ui-react-native";
import React from "react";
import {Button, SafeAreaView, Text} from "react-native";

function SignOutButton() {
  const {signOut} = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-white align-middle justify-center">
      <SignOutButton />
    </SafeAreaView>
  );
};

export default Settings;
