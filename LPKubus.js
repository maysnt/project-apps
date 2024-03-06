import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const LPKubus = ({ navigation }) => {
    const [lpKubus, ubahLPKubus] = useState(0)
    const [sisiKubus, ubahSisiKubus] = useState(0)
    const hasilKali = () => {
        ubahLPKubus(parseInt(6) * parseInt(sisiKubus) * parseInt(sisiKubus))
    };
    return (
        <View style={styles.container}>
            <View style={styles.Atas}>
            <Image source={require("./assets/Kubus.png")} style={styles.image} />
            <Text style={styles.RumusText}>Luas Permukaan Kubus</Text>
            <Text style={styles.RumusText}>6 x S²</Text>
            </View>
            <View>
                <Text style={styles.Sisi1Text}>Sisi:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiKubus} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Kubus" style={styles.Sisi1}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasilKali}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Permukaan Kubusnya adalah = {lpKubus} cm²</Text>
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
    Atas:{
        left: 12,
    },
    RumusText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 78,
        left: 3,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Sisi1Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Sisi1: {
        width: 241,
        height: 37,
        backgroundColor: "#1A4E55",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 120,
        left: 100,
        textAlign: 'center',
    },
    image: {
        width: 229,
        height: 180,
        top: 103,
    },
    HasilButton: {
        width: 83,
        height: 36,
        top: 143,
        left: 180,
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
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default LPKubus;
