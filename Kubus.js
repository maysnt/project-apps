import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Kubus = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{left: 10,}}>
            <Image source={require("./assets/Kubus.png")} style={styles.image} />
            <Text style={styles.KubusText}>Kubus</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VolumeKubus")}
                    style={styles.VolumeButton}
                >
                    <Text style={styles.Volume}>Volume</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LPKubus")}
                    style={styles.LPKubusButton}
                >
                    <Text style={styles.LP}>Luas Permukaan</Text>
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
    KubusText: {
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
    LPKubusButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    LPKubus: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Kubus;
