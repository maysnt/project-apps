import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const VolumeBalok= ({ navigation }) => {
    const [volume, ubahVolume] = useState(0);
    const [lebar, ubahLebar] = useState(0);
    const [panjang, ubahPanjang] = useState(0);
    const [tinggi, ubahTinggi] = useState(0);
    const hasil = () => {
        ubahVolume(parseInt(panjang) * parseInt(lebar) * parseInt(tinggi));
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Balok.png")} style={styles.image} />
            <Text style={styles.VolumeText}>Volume Balok</Text>
            <Text style={styles.VolumeText}>P x L x T</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.Text}>Panjang:</Text>
                <View>
                    <TextInput onChangeText={ubahPanjang} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Panjang Balok" style={styles.panjang}></TextInput>
                </View>
                <Text style={styles.Text}>Lebar:</Text>
                <View>
                    <TextInput onChangeText={ubahLebar} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Lebar Balok" style={styles.panjang}></TextInput>
                </View>
                <Text style={styles.Text}>Tinggi:</Text>
                <View>
                    <TextInput onChangeText={ubahTinggi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Tinggi Balok" style={styles.panjang}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Volume Baloknya adalah = {volume} cm³</Text>
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
    VolumeText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 65,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 139,
        color: "#FFFFFF",
        textAlign: "center",
    },
    panjang: {
        width: 241,
        height: 37,
        backgroundColor: "#1A4E55",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 120,
        left: 80,
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
        fontSize: 20,
        fontWeight: 'bold',
        top: 163,
        right: 5,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default VolumeBalok;
