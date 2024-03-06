import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const LuasLingkaran = ({ navigation }) => {
    const [luasLingkaran, ubahLuasLingkaran] = useState(0);
    const [jariJari, ubahJariJari] = useState(0);
    const hasil = () => {
        ubahLuasLingkaran(3.14 * parseInt(jariJari) * parseInt (jariJari));
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Lingkaran.png")} style={styles.image} />
            <Text style={styles.LingkaranText}>Luas Lingkaran</Text>
            <Text style={styles.LingkaranText}>π x r²</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.JJ1Text}>R 1:</Text>
                <View>
                    <TextInput onChangeText={ubahJariJari} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Jari-Jari 1" style={styles.JJ1}></TextInput>
                </View>
                <Text style={styles.JJ2Text}>R 2:</Text>
                <View>
                    <TextInput onChangeText={ubahJariJari} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Jari-Jari 2" style={styles.JJ2}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Lingkarannya adalah = {luasLingkaran} cm</Text>
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
    subCont: {
        marginTop: 85,
    },
    LingkaranText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 103,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    JJ1Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
        color: "#FFFFFF",
        textAlign: "center",
    },
    JJ1: {
        width: 241,
        height: 37,
        backgroundColor: "#1A4E55",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 120,
        left: 60,
        textAlign: 'center',
    },
    JJ2Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
        color: "#FFFFFF",
        textAlign: "center",
    },
    JJ2: {
        width: 241,
        height: 37,
        backgroundColor: "#1A4E55",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 120,
        left: 60,
        textAlign: 'center',
    },
    image: {
        width: 179,
        height: 180,
        top: 100,
    },
    HasilButton: {
        width: 83,
        height: 36,
        top: 143,
        left: 145,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    Hasil: {
        paddingTop: 3,
        fontSize: 20,
        left: 1,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
    HasilText: {
        fontSize: 18,
        fontWeight: 'bold',
        top: 163,
        right: 5,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default LuasLingkaran;