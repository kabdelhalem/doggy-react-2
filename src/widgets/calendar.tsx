import React, {Component, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    currentDate.setHours(12, 0, 0, 0);
    this.state = {
      selectedStartDate: currentDate,
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
        <CalendarPicker
          selectedDayColor="#3443eb"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  }
}
