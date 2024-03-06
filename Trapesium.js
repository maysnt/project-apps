import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Trapesium = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Trapesium.png")} style={styles.image} />
            <Text style={styles.TrapesiumText}>Trapesium</Text>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasTrapesium")}
                    style={styles.LTButton}
                >
                    <Text style={styles.LT}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingTrapesium")}
                    style={styles.KTButton}
                >
                    <Text style={styles.KT}>Keliling</Text>
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
    TrapesiumText: {
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
    LTButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LT: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KTButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KT: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Trapesium;
