import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image } from "react-native";

const DATA = [
  {
    title: "Luffy",
    image: "luffy.jpg",
  },
  {
    title: "Zoro",
    image: "Zoro.jpg",
  },
  {
    title: "Sanji",
    image: "Sanji.jpg",
  },
];

// Layar Detail
const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        // onPress adalah komponen yang merespon tindakan ketika elemen tersebut ditekan (klik atau sentuh).
        // navigation.navigate adalah kode yang digunakan untuk memicu perpindahan ke layar (screen) lain dalam aplikasi menggunakan React Navigation.
        // Home adalah nama route yang akan dikunjungi
        onPress={() => navigation.navigate("Home")}
        style={{ backgroundColor: "green", padding: 10, marginTop: 10 }}
      >
        <Text style={{ color: "white" }}>Go to Home</Text>
      </TouchableOpacity>
      {/* <FlatList> adalah komponen utama yang digunakan untuk membuat daftar bergulir di React Native. */}
      <FlatList
        // Properti data mengambil daftar data yang akan ditampilkan dalam FlatList.
        // DATA adalah variabel atau konstanta yang berisi daftar aray yang ingin di tampilkan dalam daftar.
        data={DATA}
        // Properti renderItem adalah fungsi yang akan digunakan untuk merender setiap array dalam daftar.
        // argumen item mewakili data pada array untuk dirender.
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f9c2ff",
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 32 }}>{item.title}</Text>
            <Image
              style={{ width: 66, height: 58 }}
              source={require(`./assets/${item.image}`)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
