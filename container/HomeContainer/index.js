import React from "react";
import { Text, View } from "react-native";

class HomeContainer extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "red", margin: 100 }}>
          Hello {firstName} {lastName}
        </Text>
      </View>
    );
  }
}

export default HomeContainer;
