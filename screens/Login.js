import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        })
    }

    const cadastrar = () => {
        navigation.navigate("Cadastro")
    }



    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h3>Entre no TemTudoAki</Text>
            <Input
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <Button
                icon={
                    <Icon
                        name="check"
                        size={15}
                        color="white"
                    />
                }
                title="Entrar"
                buttonStyle={specificStyle.button}
                onPress={() => entrar()}
            />
            <Button
                icon={
                    <Icon
                        name="user"
                        size={18}
                        color="white"
                    />
                }
                title="Criar Conta"
                buttonStyle={specificStyle.button}
                onPress={() => cadastrar()}
            />
        </View>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
    },
    button: {
        width: 240,
        marginTop: 15,
    },
});