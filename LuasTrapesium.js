import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const LuasTrapesium = ({ navigation }) => {
    const [LuasTrapesium, ubahLuasTrapesium] = useState(0);
    const [sisitrapesiumA, ubahSisiA] = useState(0)
    const [sisitrapesiumB, ubahSisiB] = useState(0);
    const [tinggitrapesium, ubahTinggiTrapesium] = useState(0);
    const hasilKali = () => {
        ubahLuasTrapesium(1/2 * (parseInt(sisitrapesiumA) + parseInt(sisitrapesiumB)) * parseInt(tinggitrapesium))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Trapesium.png")} style={styles.image} />
            <Text style={styles.TrapesiumText}>Luas Trapesium</Text>
            <Text style={styles.TrapesiumText}>1/2 x T x (A + B)</Text>
            </View>
            <View style={styles.subCont}>
            <Text style={styles.TinggiText}>Tinggi:</Text>
                <View>
                    <TextInput onChangeText={ubahTinggiTrapesium} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Tinggi Trapesium" style={styles.Tinggi}></TextInput>
                </View>
                <Text style={styles.SisiAText}>Sisi A:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiA} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi A Trapesium" style={styles.SisiA}></TextInput>
                </View>
                <Text style={styles.SisiBText}>Sisi B:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiB} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi B Trapesium" style={styles.SisiB}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasilKali}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Trapesiumnya adalah = {LuasTrapesium} cm</Text>
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
        marginTop: 45,
    },
    TrapesiumText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 53,
        left: 2,
        color: "#FFFFFF",
        textAlign: "center",
    },
    TinggiText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
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
    SisiAText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
        color: "#FFFFFF",
        textAlign: "center",
    },
    SisiA: {
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
    SisiBText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 146,
        color: "#FFFFFF",
        textAlign: "center",
    },
    SisiB: {
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

export default LuasTrapesium;