import React from "react";
import {Button, Image, SafeAreaView, Text} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingPage = ({navigation}) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img1.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img2.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img3.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingPage;
