import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "Grandes jornadas começam com um simples passo.",
      img: require("../assets/images/biscoito.png"),
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.restart = this.restart.bind(this);

    this.frases = [
      "A sorte favorece os audaciosos.",
      "Grandes jornadas começam com um simples passo.",
      "Sua criatividade abrirá portas onde você menos espera.",
      "Um amigo antigo trará uma boa notícia em breve.",
      "O segredo do sucesso é a constância no objetivo.",
      "Acredite no seu potencial e o resto virá naturalmente.",
      "A paciência é a chave que abre a porta do aprendizado.",
      "A vida trará uma surpresa agradável no momento certo.",
      "Sua energia positiva atrai coisas incríveis para você.",
      "Confie nos seus instintos; eles sabem o caminho.",
      "A maior virtude é a capacidade de recomeçar.",
      "Uma pequena atitude hoje trará um grande resultado amanhã.",
      "Sorria! A felicidade é contagiosa.",
      "Não conte os dias, faça os dias contarem.",
      "Um desafio inesperado revelará a sua verdadeira força.",
      "A boa sorte acompanha quem compartilha coisas boas.",
      "Quem semeia gentileza, colhe grandes amizades.",
      "O momento ideal para começar algo novo é agora.",
      "Suas escolhas de hoje constroem o seu futuro.",
      "A resposta que você procura virá em um momento de silêncio.",
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require("../assets/images/biscoitoAberto.png"),
    });
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
