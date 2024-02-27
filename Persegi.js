import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Persegi = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Persegi.png")} style={styles.image} />
            <Text style={styles.PersegiText}>Persegi</Text>
            <View style={styles.LPButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasPersegi")}
                    style={styles.BRText}
                >
                    <Text style={styles.LP}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingPersegi")}
                    style={styles.KPButton}
                >
                    <Text style={styles.KP}>Keliling</Text>
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
    PersegiText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 83,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    image: {
        width: 179,
        height: 180,
        top: 103,
    },
    LPButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LP: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KPButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KP: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Persegi;
