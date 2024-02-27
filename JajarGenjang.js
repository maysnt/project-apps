import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const JajarGenjang = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/Jajargenjang.png")} style={styles.image} />
            <Text style={styles.JGText}>Jajar Genjang</Text>
            <View style={styles.JGButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LuasJG")}
                >
                    <Text style={styles.LJG}>Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("KelilingJG")}
                    style={styles.KJGButton}
                >
                    <Text style={styles.KJG}>Keliling</Text>
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
    JGText: {
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
    JGButton: {
        width: 313,
        height: 86,
        marginTop: 255,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    LJG: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
    KJGButton: {
        width: 313,
        height: 86,
        marginTop: 83,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    },
    KJG: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        // fontFamily: 'Squada One',
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default JajarGenjang;
