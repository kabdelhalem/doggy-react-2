import React, {useState, Component} from "react";
import {Text, SafeAreaView, Button, FlatList, View} from "react-native";

import {Authenticator, useAuthenticator} from "@aws-amplify/ui-react-native";
import Calendar from "../widgets/calendar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedDate: date,
    });
  }
  render() {
    const {selectedDate} = this.state;
    return (
      <SafeAreaView className="flex-1 bg-white align-middle justify-center">
        <Calendar onDateChange={this.onDateChange} />
        <View className="flex-1">
          <FlatList
            data={[
              {key: "Devin"},
              {key: "Dan"},
              {key: "Dominic"},
              {key: "Jackson"},
              {key: "James"},
              {key: "Joel"},
              {key: "John"},
              {key: "Jillian"},
              {key: "Jimmy"},
              {key: "Julie"},
            ]}
            renderItem={({item}) => <Text className="text-xl">{item.key}</Text>}
          />
        </View>
        <Button
          className="absolute h-10 w-10 align-middle justify-center right-10 bottom-32"
          title="+"
        />
        <Text>{selectedDate?.toString()}</Text>
      </SafeAreaView>
    );
  }
}
