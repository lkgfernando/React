import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class App extends Component {
  render() {
    let nome = "Fernando rodrigues";
    let img = "https://sujeitoprogramador.com/steve.png";

    return (
      <View>
        <Text>Helo Worde!</Text>
        <Text>Meu primeiro App!</Text>
        <Text style={{ color: "#ff0000", fontSize: 25, margin: 15 }}>
          Sujeito Programador!
        </Text>
        <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />

        <Text style={{ fontSize: 30 }}> {nome} </Text>
      </View>
    );
  }
}

export default App;
