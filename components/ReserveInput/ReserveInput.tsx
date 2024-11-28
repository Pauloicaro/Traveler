import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './Input'
import Animation, { FadeInRight } from 'react-native-reanimated'



const ReserveInput = () => {


    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [onfocus, setOnfocus] = useState(false)
    const [onfocus2, setOnfocus2] = useState(false)
    const [onfocus3, setOnfocus3] = useState(false)


    return (
        <Animation.View style={styles.container} entering={FadeInRight}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.content}>
                    <Text style={styles.title}>Informação pessoal </Text>
                    <View style={styles.line} />
                    <View>
                        <Text style={[styles.subTitle, onfocus && { color: '#00008B' }]}>Nome</Text>
                    </View>

                    <View style={styles.contentInput}>
                        <View style={[styles.containerInput, onfocus && styles.inputFocus]}>
                            <TextInput
                                style={[styles.input, onfocus && { color: '#00008B' }]}
                                placeholder='Nome'
                                placeholderTextColor={onfocus ? "#00008B" : "black"}
                                value={nome}
                                onChangeText={(text) => setNome(text)}
                                onBlur={() => setOnfocus(false)}
                                onFocus={() => setOnfocus(true)}
                                maxLength={18}
                            />
                        </View>
                        {nome.length > 4 && (
                            <AntDesign name="check" size={27} color="green" />
                        )}
                    </View>
                    <View>
                        <Text style={[styles.subTitle, onfocus2 && { color: '#00008B' }]}>Sobrenome</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <View style={[styles.containerInput, onfocus2 && styles.inputFocus]}>
                            <TextInput
                                style={[styles.input, onfocus2 && { color: '#00008B' }]}
                                placeholder='Sobrenome'
                                placeholderTextColor={onfocus2 ? "#00008B" : "black"}
                                value={sobrenome}
                                onChangeText={(text) => setSobrenome(text)}
                                onBlur={() => setOnfocus2(false)}
                                onFocus={() => setOnfocus2(true)}
                                maxLength={10}
                            />
                        </View>

                        {sobrenome.length > 4 && (
                            <AntDesign name="check" size={27} color="green" />
                        )}
                    </View>

                    <View>
                        <Text style={[styles.subTitle, onfocus3 && { color: '#00008B' }]}>Endereço de e-mail</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <View style={[styles.containerInput, onfocus3 && styles.inputFocus]}>
                            <TextInput
                                style={[styles.input, onfocus3 && { color: '#00008B' }]}
                                placeholder='Email'
                                placeholderTextColor={onfocus3 ? "#00008B" : "black"}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                onBlur={() => setOnfocus3(false)}
                                onFocus={() => setOnfocus3(true)}
                            />
                        </View>
                        {email.length > 4 && (
                            <AntDesign name="check" size={27} color="green" />
                        )}
                    </View>
                </View>
                <View style={styles.line2} />
            </SafeAreaView>
        </Animation.View>

    )
}

export default ReserveInput