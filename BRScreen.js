import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Ruang = [
    {
        title: "Kubus",
        link: "Kubus"
    },
    {
        title: "Balok",
        link: "Balok"
    },
    {
        title: "Tabung",
        link: "Tabung"
    },
    {
        title: "Kerucut",
        link: "Kerucut"
    },
    {
        title: "Bola",
        link: "Bola"
    },
]

const BangunRuang = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.BRText}>Bangun Ruang</Text>
            <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            <FlatList
                data={Ruang}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
                        <View style={styles.Ruang}>
                            <Text style={styles.RuangTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00101D",
        alignItems: "center",
    },
    image: {
        width: 251,
        height: 234,
        top: 53,
    },
    BRText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 45,
        textAlign: 'center',
        color: 'white',
    },
    Ruang: {
        marginVertical: 5,
        width: 313,
        height: 86,
        marginTop: 30,
        border: "1px solid #000",
        borderRadius: 10,
        backgroundColor: "#1A4E55",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
        borderColor: "black,",
    },
    RuangTitle: {
        paddingTop: 20,
        fontSize: 32,
        left: 4,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default BangunRuang;
