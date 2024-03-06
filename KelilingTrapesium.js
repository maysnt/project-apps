import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const KelilingTrapesium = ({ navigation }) => {
    const [kelilingTrapesium, ubahKelilingTrapesium] = useState(0)
    const [sisiA, ubahSisiA] = useState(0)
    const [sisiB, ubahSisiB] = useState(0)
    const [sisiC, ubahSisiC] = useState(0)
    const [sisiD, ubahSisiD] = useState(0)
    const hasil = () => {
        ubahKelilingTrapesium(parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC) + parseInt(sisiD))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Trapesium.png")} style={styles.image} />
            <Text style={styles.TrapesiumText}>Keliling Trapesium</Text>
            <Text style={styles.TrapesiumText}>S + S + S + S</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.Sisi1Text}>Sisi A:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiA} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Trapesium A" style={styles.Sisi1}></TextInput>
                </View>
                <Text style={styles.Sisi2Text}>Sisi B:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiB} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Trapesium B" style={styles.Sisi2}></TextInput>
                </View>
                <Text style={styles.Sisi3Text}>Sisi C:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiC} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Trapesium C" style={styles.Sisi3}></TextInput>
                </View>
                <Text style={styles.Sisi3Text}>Sisi D:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiD} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Trapesium D" style={styles.Sisi3}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Keliling Trapesiumnya adalah = {kelilingTrapesium} cm</Text>
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
        marginTop: 25,
    },
    TrapesiumText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 53,
        left: 1.5,
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
    Sisi3Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Sisi3: {
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

export default KelilingTrapesium;
