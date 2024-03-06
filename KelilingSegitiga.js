import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const KelilingSegitiga = ({ navigation }) => {
    const [kelilingSegitiga, ubahKelilingSegitiga] = useState(0)
    const [sisi1, ubahSisi1] = useState(0)
    const [sisi2, ubahSisi2] = useState(0)
    const [sisi3, ubahSisi3] = useState(0)
    const hasil = () => {
        ubahKelilingSegitiga(parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Segitiga.png")} style={styles.image} />
            <Text style={styles.SegitigaText}>Keliling Segitiga</Text>
            <Text style={styles.SegitigaText}>S + S + S</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.Sisi1Text}>Sisi 1:</Text>
                <View>
                    <TextInput onChangeText={ubahSisi1} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Segitiga 1" style={styles.Sisi1}></TextInput>
                </View>
                <Text style={styles.Sisi2Text}>Sisi 2:</Text>
                <View>
                    <TextInput onChangeText={ubahSisi2} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Segitiga 2" style={styles.Sisi2}></TextInput>
                </View>
                <Text style={styles.Sisi3Text}>Sisi 3:</Text>
                <View>
                    <TextInput onChangeText={ubahSisi3} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Segitiga 3" style={styles.Sisi3}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Keliling Segitiganya adalah = {kelilingSegitiga} cm</Text>
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

export default KelilingSegitiga;
