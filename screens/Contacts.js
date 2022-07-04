import { StyleSheet, View, Text, Image } from "react-native";

const Contacts = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img}
                    source={require('../img/tree.png')} />
            </View>

            <Text>These are our Contacts!</Text>
        </View>
    );
};

export default Contacts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
    },
});