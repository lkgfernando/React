import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Start",
      finishTime: "",
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "Start" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ botao: "Pause" });
    }
  }

  stop() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      finishTime: this.state.numero,
      numero: 0,
      botao: "Start",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/cronometro.png")}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.stop}>
            <Text style={styles.btnText}>Stop</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.finishTime}>
            {this.state.finishTime > 0
              ? "Finish Time: " + this.state.finishTime.toFixed(1) + "s"
              : ""}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  cronometro: {
    width: 350,
    height: 350,
    marginTop: 50,
    resizeMode: "contain",
  },
  timer: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -170,
    color: "#FFF",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 150,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    height: 40,
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 9,
    alignItems: "center",
  },
  btnText: {
    color: "#00aeef",
    fontSize: 18,
    fontWeight: "bold",
  },
  finishTime: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    color: "#FFF",
    fontStyle: "italic",
  },
});
