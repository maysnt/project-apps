import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.image} />
      <View style={styles.BDButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BDScreen")}
          style={styles.BRText}
        >
          <Text style={styles.BD}>Bangun Datar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BRScreen")}
          style={styles.BRButton}
        >
          <Text style={styles.BR}>Bangun Ruang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00101D",
    alignItems: "center",
  },
  image: {
    width: 251,
    height: 234,
    top: 53,
  },
  BRText: {
    // width: 313,
    // height: 86,
    // borderRadius: 10,
    // border: '1px solid #000',
    // backgroundColor: '#007BFF',
    // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.60)',
  },
  BDButton: {
    // paddingTop: 20,
    // // justifyContent: 'center',
    // // textAlign: 'center',
    // // alignItems: 'center',
    width: 313,
    height: 86,
    marginTop: 255,
    border: "1px solid #000",
    borderRadius: 10,
    backgroundColor: "#F72798",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    borderColor: "black,",
  },
  BD: {
    // fontSize: 32,
    // fontFamily: 'Squada One',
    // color: '#FFFFFF',
    // textAlign: 'center',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    paddingTop: 20,
    fontSize: 32,
    left: 4,
    // fontFamily: 'Squada One',
    color: "#FFFFFF",
    textAlign: "center",
  },
  BRButton: {
    width: 313,
    height: 86,
    marginTop: 83,
    border: "1px solid #000",
    borderRadius: 10,
    backgroundColor: "#F72798",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
  },
  BR: {
    paddingTop: 20,
    fontSize: 32,
    left: 4,
    // fontFamily: 'Squada One',
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Home;
