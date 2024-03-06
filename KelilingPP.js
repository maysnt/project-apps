import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, } from "react-native";
import React, { useState } from "react";

const KelilingPP = ({ navigation }) => {
    const [kelilingPersegiPanjang, ubahKelilingPersegiPanjang] = useState(0)
    const [panjangPersegiPanjang, ubahPanjang] = useState(0)
    const [lebarPersegiPanjang, ubahLebar] = useState(0)
    const hasil = () => {
        ubahKelilingPersegiPanjang(parseInt(2) * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang)))
    };
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/PersegiPanjang.png")} style={styles.image} />
            <Text style={styles.PPText}>Keliling Persegi Panjang</Text>
            <Text style={styles.RumusText}>2 x (P + L)</Text>
            </View>
            <View style={styles.subCont}>
                <Text style={styles.PanjangText}>Panjang:</Text>
                <View>
                    <TextInput onChangeText={ubahPanjang} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan (P) Persegi Panjang" style={styles.Panjang}></TextInput>
                </View>
                <Text style={styles.LebarText}>Lebar:</Text>
                <View>
                    <TextInput onChangeText={ubahLebar} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan (L) Persegi Panjang" style={styles.Lebar}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasil}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Keliling Persegi Panjangnya adalah = {kelilingPersegiPanjang} cm</Text>
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
    PPText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 100,
        left: 1.5,
        color: "#FFFFFF",
        textAlign: "center",
    },
    RumusText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 100,
        left: 1.5,
        color: "#FFFFFF",
        textAlign: "center",
    },
    PanjangText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 139,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Panjang: {
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
    LebarText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 152,
        color: "#FFFFFF",
        textAlign: "center",
    },
    Lebar: {
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
        height: 99,
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
        right: 5,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default KelilingPP;
