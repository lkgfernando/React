import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: "",
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === "") {
      alert("Digite seu nome!");
      return;
    }
    this.setState({ nome: "Bem vindo: " + this.state.input });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome?"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10,
    marginTop: 40,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default App;
