import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const LPBalok = ({ navigation }) => {
    const [lpBalok, ubahLPBalok] = useState(0);
    const [panjang, ubahPanjang] = useState(0);
    const [lebar, ubahLebar] = useState(0);
    const [tinggi,ubahTinggi] = useState(0);
    const hasilKali = () => {
        const p = parseInt(panjang);
        const l = parseInt(lebar);
        const t = parseInt(tinggi);
        if (!isNaN(p) && !isNaN(l) && !isNaN(t)) {
            const ubahRumusLuas = 2 * ((p * l) + (l * t) + (p * t));
            ubahLPBalok(ubahRumusLuas.toFixed(2));
        }
        // ubahLPBalok(parseInt(2) * (parseFloat(panjang * lebar) + parseFLoat(lebar + tinggi) * parseFLoat(panjang * tinggi)));
    };
    return (
        <View style={styles.container}>
            <View style={styles.Atas}>
            <Image source={require("./assets/Balok.png")} style={styles.image} />
            <Text style={styles.RumusText}>Luas Permukaan Balok</Text>
            <Text style={styles.RumusText}>2 x (PL + LT + PT)</Text>
            </View>
            <View>
                <Text style={styles.PanjangText}>Panjang:</Text>
                <View>
                    <TextInput onChangeText={ubahPanjang} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Panjang Balok" style={styles.Panjang}></TextInput>
                </View>
                <Text style={styles.LebarText}>Lebar:</Text>
                <View>
                    <TextInput onChangeText={ubahLebar} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Lebar Balok" style={styles.Lebar}></TextInput>
                </View>
                <Text style={styles.TinggiText}>Tinggi:</Text>
                <View>
                    <TextInput onChangeText={ubahTinggi} placeholderTextColor='#CCD5CB' keyboardType="number-pad" placeholder="Masukkan Tinggi Balok" style={styles.Tinggi}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={hasilKali}
                    style={styles.HasilButton}
                >
                    <Text style={styles.Hasil}>Hasil</Text>
                </TouchableOpacity>
                <Text style={styles.HasilText}>Luas Permukaan Baloknya adalah = {lpBalok} cm²</Text>
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
    PanjangText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 142,
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
        right: 132,
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
    TinggiText: {
        fontSize: 25,
        fontWeight: 'bold',
        top: 153,
        right: 132,
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

export default LPBalok;
