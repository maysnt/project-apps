import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const KelilingJG= ({ navigation }) => {
    const [kelilingJG, ubahKelilingJG] = useState(0)
    const [sisiA, ubahSisiA] = useState(0)
    const [sisiB, ubahSisiB] = useState(0)
    const hasil = () => {
        ubahKelilingJG(parseInt(2) * (parseInt(sisiA) + parseInt(sisiB)))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
                <Image source={require("./assets/Jajargenjang.png")} style={styles.image} />
                <Text style={styles.JGText}>Keliling Jajar Genjang</Text>
                <Text style={styles.JGText}>2 x (A + B)</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.SisiAText}>Sisi A:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiA} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Jajar Genjang A" style={styles.SisiA}></TextInput>
                </View>
                <Text style={styles.SisiBText}>Sisi B:</Text>
                <View>
                    <TextInput onChangeText={ubahSisiB} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Jajar Genjang B" style={styles.SisiB}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Keliling Jajar Genjangnya adalah = {kelilingJG} cm</Text>
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
        left: 10,
    },
    JGText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 50,
        left: 1.5,
        color: "#FFFFFF",
        textAlign: "center",
    },
    SisiAText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
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
        left: 90,
        textAlign: 'center',
    },
    SisiBText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
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
        left: 90,
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
        right: 10,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default KelilingJG;
