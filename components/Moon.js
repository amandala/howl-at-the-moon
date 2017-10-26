import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Moon extends React.Component {
  componentDidMount() {
    this.props.fetchMoonData();
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.currentMoonData.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012D3C",
    alignItems: "center",
    justifyContent: "center"
  }
});
