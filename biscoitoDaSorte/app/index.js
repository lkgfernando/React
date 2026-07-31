import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const BEARE_TOKEN = "QWRtaW46OTk=";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "Clique abaixo para abrir seu biscoito!",
      img: require("../assets/images/biscoito.png"),
      loading: false,
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.restart = this.restart.bind(this);
  }

  async quebraBiscoito() {
    this.setState({ loading: true });

    try {
      const response = await fetch(
        "http://192.168.0.11:2200/api/projeto/biscoitoDaSorte",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic QWRtaW46OTk=",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Erro na requisição: Status ${response.status}`);
      }

      const data = await response.json();

      this.setState({
        textoFrase: `"${data.frase}"`,
        img: require("../assets/images/biscoitoAberto.png"),
      });
    } catch (error) {
      console.error("Erro na requisição:", error);
      this.setState({
        textoFrase:
          "Não foi possivel consulta a frase. Verifique a conexão ou o token",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  restart() {
    this.setState({
      textoFrase: '"' + "Receba uma frase para melhorar o seu dia!!!" + '"',
      img: require("../assets/images/biscoito.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.title}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Click e Tente a Sorte!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.restart}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Restart</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#bd7430",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#bd7430",
    borderRadius: 15,
    margin: 10,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 20,
    color: "#bd7430",
  },
});
