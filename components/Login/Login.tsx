import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { auth } from '../../firebase/firebaseAuth'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { styles } from '../Login/StyleLogin'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { StackTypes } from '../../routes/RouteScreen'
import Home from '../Home/Home'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { UiContext } from '../Context/ContextApi'
import Animation, { FadeIn, FadeInRight } from 'react-native-reanimated';



const Login = () => {

    const Navigation = useNavigation<StackTypes>()
    const { loading, setLoading } = useContext(UiContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<string | null>(null)
    const [eyes, setEyes] = useState<boolean>(true)
    const isFocus = useIsFocused()
    const Focus = useRef<any>()
    const [onblur, setOnblur] = useState(false)
    const [onblur2, setOnblur2] = useState(false)


    useEffect(() => {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                setUser: (value: React.SetStateAction<string | null>) => void ({
                    email: users.email,
                    uid: users.uid
                })
                Navigation.navigate('Home')
                console.log("Usuário logado")
            } else {
                setLoading(false)
                console.log("Saiu com sucesso")
            }
            setUser(null)
        })
    }, [isFocus])




    function HandleLogin() {
        Focus.current.focus()
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user, "Logado com sucesso")
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


    if (user) {
        <View style={{ flex: 1 }}>
            <Home />
        </View>
    }



    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Animation.View style={styles.contentimg}
                    entering={FadeIn.duration(600)}>
                    <View style={styles.containerImg}>
                        <Image
                            source={require('../../src/imgs/details/Chalé/Chalé5.jpg')}
                            style={styles.img} />
                    </View>
                </Animation.View>

                <View style={styles.contentInput}>
                    <Animation.View
                        style={[styles.containerInput,
                        onblur && { borderBottomWidth: 1.5, borderColor: email.length > 5 ? "blue" : "red" }]}
                        entering={FadeInRight.duration(400)}>
                        {onblur !== true ? (
                            <MaterialCommunityIcons name="email-fast" size={24} color="green" />
                        ) : (
                            <MaterialCommunityIcons name="email-fast" size={24} color={email.length > 5 ? "blue" : "red"} />
                        )}
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor={onblur ? "red" : "black"}
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            ref={Focus}
                            onBlur={() => setOnblur(false)}
                            onFocus={() => setOnblur(true)}
                        />
                    </Animation.View>

                    <Animation.View style={[styles.containerInput,
                    onblur2 && { borderBottomWidth: 1.5, borderColor: password.length > 4 ? "blue" : "red" }]}
                        entering={FadeInRight.duration(400)}>
                        {onblur2 !== true ? (
                            <FontAwesome name="lock" size={24} color="green" />
                        ) : (
                            <FontAwesome name="lock" size={24} color={password.length > 4 ? "blue" : "red"} />
                        )}
                        <TextInput
                            placeholder='Senha'
                            placeholderTextColor={onblur2 ? "red" : "black"}
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={eyes}
                            onBlur={() => setOnblur2(false)}
                            onFocus={() => setOnblur2(true)}
                        />


                        <TouchableOpacity onPress={() => setEyes(!eyes)} style={{ right: 66 }}>
                            {eyes ? (
                                <Entypo name="eye-with-line" size={24} color="#000000" />
                            ) : (
                                <Entypo name="eye" size={24} color="blue" />
                            )}
                        </TouchableOpacity>
                    </Animation.View>

                    {email.length > 5 && password.length > 4 ? (
                        <TouchableOpacity activeOpacity={0.8}
                            style={[styles.containerButton, { backgroundColor: '#6A5ACD' }]}
                            onPress={HandleLogin}>
                            <Text style={[styles.TextButton, { color: '#ffff' }]}>Login</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.containerButton,]}
                            onPress={HandleLogin} >
                            <Text style={[styles.TextButton, { color: '#ffff' }]}>Login</Text>
                        </TouchableOpacity>
                    )}

                    <Animation.View style={styles.containerContent} entering={FadeInRight.duration(400)}>
                        <View>
                            <Text style={styles.title}>Não tem uma conta? </Text>
                        </View>
                        <TouchableOpacity onPress={() => Navigation.navigate('SingUp')}>
                            <Text style={styles.textNavigation}>Inscreva-se</Text>
                        </TouchableOpacity>
                    </Animation.View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login