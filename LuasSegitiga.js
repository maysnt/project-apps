import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const LuasSegitiga = ({ navigation }) => {
    const [luasSegitiga, ubahLuasSegitiga] = useState(0);
    const [alas, ubahAlas] = useState(0);
    const [tinggi, ubahTinggi] = useState(0);
    const hasil = () => {
        ubahLuasSegitiga(1/2 * (parseInt(alas) * parseInt(tinggi)));
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Segitiga.png")} style={styles.image} />
            <Text style={styles.SegitigaText}>Luas Segitiga</Text>
            <Text style={styles.SegitigaText}>1/2 x A x T</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.AlasText}>Alas:</Text>
                <View>
                    <TextInput onChangeText={ubahAlas} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Alas Segitiga" style={styles.Alas}></TextInput>
                </View>
                <Text style={styles.TinggiText}>Tinggi:</Text>
                <View>
                    <TextInput onChangeText={ubahTinggi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Tinggi Segitiga" style={styles.Tinggi}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Segitiganya adalah = {luasSegitiga} cm</Text>
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
    SegitigaText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 83,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    AlasText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Alas: {
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
    TinggiText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 139,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Tinggi: {
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
        fontSize: 20,
        fontWeight: 'bold',
        top: 163,
        right: 5,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default LuasSegitiga;