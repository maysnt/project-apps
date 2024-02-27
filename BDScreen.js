import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Datar = [
  {
    title: "Persegi",
    link: "Persegi"
  },
  {
    title: "Persegi Panjang",
    link: "PersegiPanjang"
  },
  {
    title: "Segitiga",
    link: "Segitiga"
  },
  {
    title: "Jajar Genjang",
    link: "JajarGenjang"
  },
  {
    title: "Trapesium",
    link: "Trapesium"
  },
  {
    title: "Lingkaran",
    link: "Lingkaran"
  }
]

const BangunDatar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.BDText}>Bangun Datar</Text>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      <FlatList
        data={Datar}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
            <View style={styles.Datar}>
              <Text style={styles.DatarTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

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
  BDText: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 45,
    textAlign: 'center',
    color: 'white',
  },
  Datar: {
    marginVertical: 5,
    width: 313,
    height: 86,
    marginTop: 30,
    border: "1px solid #000",
    borderRadius: 10,
    backgroundColor: "#1A4E55",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    borderColor: "black,",
  },
  DatarTitle: {
    paddingTop: 20,
    fontSize: 32,
    left: 4,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default BangunDatar;
