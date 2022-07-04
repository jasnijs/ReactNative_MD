import { StyleSheet, View, Text, Image } from "react-native";

const About = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img}
                    source={require('../img/planet.png')} />
            </View>

            <Text>This is About Us!</Text>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 120,
        width: 120,
    },
});