import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)

    const salvar = () => {
        console.log("salvou")

    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h3>Cadastre-se</Text>
            <Input
                placeholder="Email"
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                placeholder="Nome"
                onChangeText={value => setNome(value)}
            />
            <Input
                placeholder="CPF"
                onChangeText={value => setCpf(value)}
                keyboardType="number-pad"
                returnKeyType="done"
            />
            <Input
                placeholder="Telefone"
                onChangeText={value => setTelefone(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
            />

            <CheckBox
                title="Eu aceito os termos de uso"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected}
                onPress =  {() => setSelected(!isSelected)}
            />









            <Button
                icon={
                    <Icon
                        name="check"
                        size={15}
                        color="white"
                    />
                }
                title="Salvar"
                buttonStyle={specificStyle.button}
                onPress={() => salvar()}
            />
        </View>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
    },
    button: {
        width: 230,
        marginTop: 15,

    },
});