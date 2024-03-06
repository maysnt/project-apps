import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const PersegiPanjang = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/PersegiPanjang.png")} style={styles.image} />
            <Text style={styles.PPText}>Persegi Panjang</Text>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasPP")}
                    style={styles.LPPButton}
                >
                    <Text style={styles.LPP}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingPP")}
                    style={styles.KPPButton}
                >
                    <Text style={styles.KPP}>Keliling</Text>
                </TouchableOpacity>
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
    PPText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 100,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    image: {
        width: 229,
        height: 99,
        top: 103,
    },
    LPPButton: {
        width: 313,
        height: 86,
        marginTop: 345,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LPP: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KPPButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KPP: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default PersegiPanjang;
