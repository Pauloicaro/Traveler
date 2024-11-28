import React, { useState, useRef, useContext, } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, SafeAreaView } from 'react-native'
import { auth } from '../../firebase/firebaseAuth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { styles } from '../SingUp/StylesSingUp'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/RouteScreen'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { UiContext } from '../Context/ContextApi'
import Animation, { FadeIn, FadeInRight } from 'react-native-reanimated';


const SingUp = () => {

    const { loading, setLoading } = useContext(UiContext)
    const Navigation = useNavigation<StackTypes>()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyes, setEyes] = useState<boolean>(true)
    const Focus = useRef<any>()
    const [onblur, setOnblur] = useState(false)
    const [onblur2, setOnblur2] = useState(false)
    const [onblur3, setOnblur3] = useState(false)


    function HandleSingUp() {
        Focus.current.focus()
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user, "Criado com sucesso")
                setName("")
                setEmail("")
                setPassword("")
                setLoading(true)

                Navigation.navigate('Home')
            }).catch((err) => {
                if (err.code === "auth/invalid-email") {
                    console.log("E-mail inválido")
                }
                console.log(err)
            })
    }


    if (loading) {
        return (<View style={styles.containerLogin}>
            <ActivityIndicator size={45} color={"#A9A9A9"} />
        </View>)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Animation.View style={styles.contentimg} entering={FadeIn.duration(600)}>
                    <View style={styles.containerImg}>
                        <Image
                            source={require('../../src/imgs/detailsVertical/dream/dream2.jpg')}
                            style={styles.img} />
                    </View>
                </Animation.View>
                <View style={styles.contentInput}>
                    <Animation.View
                        style={[styles.containerInput,
                        onblur && { borderBottomWidth: 1.5, borderColor: name.length > 4 ? "blue" : "red" }]}
                        entering={FadeInRight.duration(400)}>
                        {onblur !== true ? (
                            <FontAwesome6 name="user-large" size={20} color="green" />
                        ) : (
                            <FontAwesome6 name="user-large" size={20} color={name.length > 4 ? "blue" : "red"} />
                        )}
                        <TextInput
                            placeholder='Nome'
                            placeholderTextColor={onblur ? "red" : "black"}
                            style={styles.input}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            ref={Focus}
                            onBlur={() => setOnblur(false)}
                            onFocus={() => setOnblur(true)}
                        />
                    </Animation.View>
                    <Animation.View style={[styles.containerInput,
                    onblur2 && { borderBottomWidth: 1.5, borderColor: email.length > 5 ? "blue" : "red" }]}
                        entering={FadeInRight.duration(400)}>

                        {onblur2 !== true ? (
                            <MaterialCommunityIcons name="email-fast" size={24} color="green" />
                        ) : (
                            <MaterialCommunityIcons name="email-fast" size={24} color={email.length > 5 ? "blue" : "red"} />
                        )}
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor={onblur2 ? "red" : "#000000"}
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            onBlur={() => setOnblur2(false)}
                            onFocus={() => setOnblur2(true)}
                        />
                    </Animation.View>
                    <Animation.View
                        style={[styles.containerInput,
                        onblur3 && { borderBottomWidth: 1.5, borderColor: password.length > 4 ? "blue" : "red" }]}
                        entering={FadeInRight.duration(400)}>
                        {onblur3 !== true ? (
                            <FontAwesome name="lock" size={24} color="green" />
                        ) : (
                            <FontAwesome name="lock" size={24} color={password.length > 4 ? "blue" : "red"} />
                        )}
                        <TextInput
                            placeholder='Senha'
                            placeholderTextColor={onblur3 ? "red" : "#000000"}
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={eyes}
                            onBlur={() => setOnblur3(false)}
                            onFocus={() => setOnblur3(true)}
                        />

                        <TouchableOpacity onPress={() => setEyes(!eyes)}>
                            {eyes ? (
                                <Entypo name="eye-with-line" size={24} color="#000000" />
                            ) : (
                                <Entypo name="eye" size={24} color="blue" />
                            )}
                        </TouchableOpacity>
                    </Animation.View>

                    {email.length < 5 || password.length < 4 ? (
                        <TouchableOpacity activeOpacity={0.8}
                            style={[styles.containerButton, { backgroundColor: 'red' }]}
                            onPress={HandleSingUp}>
                            <Text style={[styles.TextButton, { color: '#ffff' }]}>Cadastrar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.containerButton} onPress={HandleSingUp}>
                            <Text style={[styles.TextButton, { color: '#ffff' }]}>Cadastrar</Text>
                        </TouchableOpacity>
                    )}

                    <View style={styles.containerContent}>
                        <View>
                            <Text style={styles.title}>Já tem uma conta? </Text>
                        </View>
                        <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
                            <Text style={styles.textNavigation}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default SingUp