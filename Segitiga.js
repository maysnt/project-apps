import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Segitiga = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Segitiga.png")} style={styles.image} />
            <Text style={styles.SegitigaText}>Segitiga</Text>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasSegitiga")}
                    style={styles.LSButton}
                >
                    <Text style={styles.LS}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingSegitiga")}
                    style={styles.KSButton}
                >
                    <Text style={styles.KS}>Keliling</Text>
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
    SegitigaText: {
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
        top: 100,
    },
    LSButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LS: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KSButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KS: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Segitiga;
