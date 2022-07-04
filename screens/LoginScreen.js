import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cta}>Join Us Now!</Text>
            <TextInput
                placeholder="E-mail"
                style={styles.input}
                onChangeText={text => setEmail(text)} />
            <TextInput
                placeholder="Password"
                style={styles.input2}
                onChangeText={text => setPassword(text)}
                secureTextEntry />

            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn} onPress={registerNewUser}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.btnGroup}>
                <TouchableOpacity
                    style={styles.btn2}
                    title="About Us"
                    onPress={() => navigation.navigate("About")}>

                    <Text style={styles.btnText2}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn2}
                    title="Contacts"
                    onPress={() => navigation.navigate("Contacts")}>

                    <Text style={styles.btnText2}>Contacts</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cta: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 40,
    },
    input: {
        backgroundColor: "#FFB3D2",
        width: 300,
        height: 50,
        borderRadius: 25,
        padding: 15,
        marginBottom: 20,
    },
    input2: {
        backgroundColor: "#FFB3D2",
        width: 300,
        height: 50,
        borderRadius: 25,
        padding: 15,
        marginBottom: 20,
    },
    btnGroup: {
        width: "30%",
    },
    btn: {
        backgroundColor: "#F50057",
        width: "100%",
        padding: 20,
        marginBottom: 10,
        borderRadius: 15,
        alignItems: "center",
    },
    btn2: {
        width: "100%",
        padding: 10,
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    btnText2: {
        color: "blue",
        fontSize: 15,
        fontWeight: "bold",
    },
});