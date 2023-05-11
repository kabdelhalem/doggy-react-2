import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    this.props.onDateChange(date);
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View className="flex-1 bg-#FFFFFF mt-5">
        <CalendarPicker onDateChange={this.onDateChange} />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  }
}
