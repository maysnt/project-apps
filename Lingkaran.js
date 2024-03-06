import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Lingkaran = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Lingkaran.png")} style={styles.image} />
            <Text style={styles.LingkaranText}>Lingkaran</Text>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasLingkaran")}
                    style={styles.LLButton}
                >
                    <Text style={styles.LL}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingLingkaran")}
                    style={styles.KLButton}
                >
                    <Text style={styles.KL}>Keliling</Text>
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
    LingkaranText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 103,
        left: 15,
        color: "#FFFFFF",
        textAlign: "center",
    },
    image: {
        width: 179,
        height: 180,
        top: 103,
        left: 10,
    },
    LLButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LL: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KLButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KL: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Lingkaran;
