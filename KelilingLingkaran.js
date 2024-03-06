import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const KelilingLingkaran= ({ navigation }) => {
    const [kelilingLingkaran, ubahKelilingLingkaran] = useState(0)
    const [jariJari, ubahJariJari] = useState(0)
    const hasil = () => {
        ubahKelilingLingkaran(3.14 * 2 * parseInt(jariJari))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Lingkaran.png")} style={styles.image} />
            <Text style={styles.LingkaranText}>Keliling Lingkaran</Text>
            <Text style={styles.LingkaranText}>2 x π x r</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.JJText}>Jari-Jari:</Text>
                <View>
                    <TextInput onChangeText={ubahJariJari} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Jari-Jari" style={styles.JJ}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Keliling Lingkarannya adalah = {kelilingLingkaran} cm</Text>
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
        marginTop: 65,
    },
    LingkaranText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 103,
        left: 1.5,
        color: "#FFFFFF",
        textAlign: "center",
    },
    JJText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 132,
        color: "#FFFFFF",
        textAlign: "center",
    },
    JJ: {
        width: 241,
        height: 37,
        backgroundColor: "#1A4E55",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 120,
        left: 97,
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

export default KelilingLingkaran;
