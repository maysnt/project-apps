import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Balok = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Balok.png")} style={styles.image} />
            <Text style={styles.BalokText}>Balok</Text>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VolumeBalok")}
                    style={styles.VolumeButton}
                >
                    <Text style={styles.Volume}>Volume</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LPBalok")}
                    style={styles.LBButton}
                >
                    <Text style={styles.LB}>Luas Permukaan Balok</Text>
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
    BalokText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 83,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    image: {
        width: 229,
        height: 180,
        top: 103,
    },
    VolumeButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    Volume: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    LBButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    LB: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Balok;
