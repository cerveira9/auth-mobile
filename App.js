import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Header } from "./src/component/common";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App! </Text>
      </View>
    );
  }
}
