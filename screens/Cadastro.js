import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { TextInputMask } from 'react-native-masked-text';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEMail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)

    let cpfField = null
    let telefoneField = null

    const validar = () => {
        let error = false

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setErrorEMail("Preencha seu e-mail corretamente")
            error = true
        }
        if (email == null) {
            setErrorEMail("Preencha seu e-mail")
            error = true
        }
        if (!cpfField.isValid()) {
            setErrorCpf("Preencha seu CPF corretamente")
            error = true
        }
        
        if (cpf == null) {
            setErrorCpf("Preencha seu CPF")
            error = true
        }
        if (!telefoneField.isValid()) {
            setErrorTelefone("Preencha seu Telefone corretamente")
            error = true
        }
        if (telefone == null) {
            setErrorTelefone("Preencha seu Telefone")
            error = true
        }
        if (nome == null) {
            setErrorNome("Preencha seu Nome")
            error = true
        }
        return !error
    }

    const salvar = () => {
        if (validar()) {
            console.log("Salvou")
        }
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h3>Cadastre-se</Text>

            <Input
                placeholder="Email"
                onChangeText={value => {
                    setEmail(value)
                    setErrorEMail(null)
                }}

                keyboardType="email-address"
                errorMessage={errorEmail}
            />

            <Input
                placeholder="Nome"
                onChangeText={value => {
                    setNome(value)
                    setErrorNome(null)
                }}

                errorMessage={errorNome}
            />

            <View style={styles.containerMask}>
                <TextInputMask
                    placeholder="CPF"
                    type={'cpf'}
                    value={cpf}
                    onChangeText={value => {
                        setCpf(value)
                        setErrorCpf(null)
                    }}

                    keyboardType="number-pad"
                    returnKeyType="done"
                    style={styles.maskedInput}
                    ref={(ref) => cpfField = ref}
                />
            </View>

            <Text style={styles.errorMessage}>{errorCpf}</Text>

            <View style={styles.containerMask}>
                <TextInputMask
                    placeholder="Telefone"
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}

                    value={telefone}
                    onChangeText={value => {
                        setTelefone(value)
                        setErrorTelefone(null)
                    }}

                    keyboardType="phone-pad"
                    returnKeyType="done"
                    style={styles.maskedInput}
                    ref={(ref) => telefoneField = ref}
                />
            </View>
            <Text style={styles.errorMessage}>{errorTelefone}</Text>

            <CheckBox
                title="Eu aceito os termos de uso"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
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