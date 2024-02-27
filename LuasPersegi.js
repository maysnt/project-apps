import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const LuasPersegi = ({ navigation }) => {
    const [luasPersegi, setluaspersegi] = useState(0)
    const [sisipersegi, setsisipersegi] = useState(0)
    const hasilKali = () => {
        setluaspersegi(parseInt(sisipersegi) * parseInt(sisipersegi))
    };
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Persegi.png")} style={styles.image} />
            <Text style={styles.PersegiText}>Luas Persegi</Text>
            <View>
                <Text style={styles.Sisi1Text}>Sisi 1:</Text>
                <View>
                    <TextInput onChangeText={setsisipersegi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan sisi 1" style={styles.Sisi1}></TextInput>
                </View>
                <Text style={styles.Sisi2Text}>Sisi 2:</Text>
                <View>
                    <TextInput onChangeText={setsisipersegi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan sisi 2" style={styles.Sisi2}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasilKali}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Perseginya adalah = {luasPersegi}</Text>
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
    PersegiText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 83,
        left: 4,
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
        left: 60,
        textAlign: 'center',
    },
    Sisi2Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Sisi2: {
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
        top: 103,
    },
    HasilButton: {
        width: 83,
        height: 36,
        top: 143,
        left: 130,
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
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default LuasPersegi;
