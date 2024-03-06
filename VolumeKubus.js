import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const VolumeKubus = ({ navigation }) => {
    const [volume, ubahVolume] = useState(0);
    const [sisi, ubahSisi] = useState(0);
    const hasil = () => {
        ubahVolume(parseInt(sisi) * parseInt(sisi) * parseInt(sisi));
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Kubus.png")} style={styles.image} />
            <Text style={styles.VolumeText}>Volume Kubus</Text>
            <Text style={styles.VolumeText}>S³</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.SisiText}>Sisi:</Text>
                <View>
                    <TextInput onChangeText={ubahSisi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Sisi Kubus" style={styles.Sisi}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Volume Kubusnya adalah = {volume} cm³</Text>
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
    VolumeText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 85,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    SisiText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 139,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Sisi: {
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

export default VolumeKubus;
