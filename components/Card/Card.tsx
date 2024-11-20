import { View, Text, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { styles } from '../Card/CardStyle'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HouseProps } from '../../content/Data';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Animation, { FadeInRight } from 'react-native-reanimated'


type CardType = {
    item: HouseProps
}


const Card = ({ item }: CardType) => {


    type Users = {
        name: string,
        UpdateDate: string,
        UpdateNumber: string,
        code: string,
    }

    const refFocus = useRef<any>()
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [random, setRandom] = useState(false)
    const [focus, setFocus] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const [focus3, setFocus3] = useState(false)

    const [user, setUser] = useState<Users>()
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [code, setCode] = useState("")
    let UpdateDate = date.replace(/(\d{2})(?=\d)/g, "$1 /")
    let UpdateNumber = number.replace(/(\d{4})(?=\d)/g, "$1 ")


    const HandleSave = async () => {
        refFocus.current.focus()
        const data = {
            UpdateDate,
            UpdateNumber,
            name,
            code
        }
        await AsyncStorage.setItem("@Card", JSON.stringify(data))
        HandleFetch()
    }


    const HandleFetch = async () => {
        try {
            const response = await AsyncStorage.getItem("@Card")
            let date = response ? JSON.parse(response) : {}
            if (date) {
                setUser(date)
                console.log("Sucess")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    useEffect(() => {
        HandleFetch()
    }, [])




    const count = [0, 1]
    const Cards = useSharedValue(count[0])

    const Front = useAnimatedStyle(() => {
        const rotateValue = interpolate(Cards.value, [count[0], count[1]], [0, 180])
        return { transform: [{ rotateY: withTiming(`${rotateValue}deg`) }] }
    })


    const Back = useAnimatedStyle(() => {
        const rotateValue = interpolate(Cards.value, [count[0], count[1]], [180, 360])
        return { transform: [{ rotateY: withTiming(`${rotateValue}deg`) }] }
    })


    const HandleFlip = () => {

        if (Cards.value === count[0]) {
            Cards.value = count[1]
        } else {
            Cards.value = count[0]
        }
    }


    const HandleFocusBack = () => {
        if (count[1]) {
            Cards.value = count[1]
        } else {
            Cards.value = count[0]
        }
    }

    const HandleFocusFront = () => {
        Cards.value = count[0]
    }



    return (
        <>
            <Animation.View style={styles.container} entering={FadeInRight}>
                <View style={styles.contenTtitle}>
                    <Text style={styles.title}>Forma de pagamento</Text>
                </View>

                <View style={styles.payContent}>
                    <TouchableOpacity onPress={() => setRandom(false)}
                        style={[styles.containerPay, { backgroundColor: random ? "#fff" : "#6A5ACD" }]}>
                        <Text style={[styles.payTitle, { color: random ? "#000000" : "#fff" }]}>Cartão</Text>
                        <FontAwesome name="credit-card" size={25} color={random ? "#4682B4" : "#fff"} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setRandom(!false)}
                        style={[styles.containerPay, { backgroundColor: random ? "#6A5ACD" : "#fff" }]}>
                        <Text style={[styles.payTitle, { color: random ? "#fff" : "#000000" }]}>Pix</Text>
                        <FontAwesome6 name="pix" size={25} color={random ? "#fff" : "#4682B4"} />
                    </TouchableOpacity>
                </View>

                {!random ? (
                    <>
                        <Animated.View style={[styles.FrontcontentCard, Front]} >
                            <View style={styles.contentFront}>
                                <View style={styles.validity}>
                                    <Text style={styles.titleValidity}>Validade</Text>
                                    <Text style={styles.SubtitleValidity}> {user?.UpdateDate} </Text>
                                </View>
                                <View style={styles.containerImgCard}>
                                    <Image source={require('../../src/imgs/Logo/card.png')} style={styles.ImgCard} />
                                </View>
                            </View>

                            <View style={styles.containerImgChip}>
                                <Image source={require('../../src/imgs/Logo/chip.png')} style={styles.ImgChip} />
                            </View>
                            <View style={styles.contentNumber}>
                                <Text style={styles.TitleNumber}> {user?.UpdateNumber} </Text>
                            </View>

                            <View>
                                <View style={styles.contentTitle}>
                                    <Text style={styles.TitleName}> {user?.name}</Text>
                                </View>
                            </View>

                            <View style={styles.ContainerImgMastercard}>
                                <Image style={styles.ImgMastercard}
                                    source={require('../../src/imgs/Logo/Mastercard-Logo.png')} />
                            </View>
                        </Animated.View>


                        <Animated.View style={[styles.BackcontentCard, Back]}>
                            <View>
                                <Text style={styles.cvc}>cvc</Text>
                            </View>

                            <View style={styles.ContentCode}>
                                <Text style={styles.TitleCode}> {user?.code} </Text>
                            </View>
                            <View style={styles.TarjaMagnética} />
                        </Animated.View>

                        <View style={styles.containerButton}>
                            <Pressable onPress={HandleFlip}>
                                <Text style={styles.titleButton}>Inverter </Text>
                            </Pressable>
                            <Pressable onPress={HandleFlip}>
                                <AntDesign name="retweet" size={24} color="green" />
                            </Pressable>
                        </View>
                        <View style={styles.containerInput}>
                            <TextInput
                                ref={refFocus}
                                placeholder='Nome completo'
                                placeholderTextColor={'#000000'}
                                onChangeText={(text) => setName(text)}
                                maxLength={25}
                                value={name}
                                onFocus={HandleFocusFront}
                                style={styles.input} />
                        </View>

                        <View style={styles.containerInput}>
                            <TextInput
                                placeholder='Numero do cartão'
                                placeholderTextColor={'#000000'}
                                onChangeText={(text) => setNumber(text)}
                                maxLength={19}
                                keyboardType='numeric'
                                onFocus={HandleFocusFront}
                                value={UpdateNumber}
                                style={styles.input} />
                        </View>

                        <View style={styles.contentSubInput}>
                            <View style={[styles.subInput,]}>
                                <TextInput
                                    placeholder='Data do cartão'
                                    placeholderTextColor={'#000000'}
                                    onChangeText={(text) => setDate(text)}
                                    maxLength={6}
                                    keyboardType='numeric'
                                    value={UpdateDate}
                                    onFocus={HandleFocusFront}
                                    style={styles.input} />
                            </View>

                            <View style={styles.subInput}>
                                <TextInput
                                    placeholder='Codigo do cartão'
                                    placeholderTextColor={'#000000'}
                                    onChangeText={(text) => setCode(text)}
                                    maxLength={3}
                                    value={code}
                                    style={styles.input}
                                    onFocus={HandleFocusBack}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        {name.length < 5 || UpdateNumber.length < 19 || UpdateDate.length < 6 || code.length < 3 ? (
                            <TouchableOpacity style={[styles.containerCard,
                            { backgroundColor: '#808080' }]} onPress={HandleSave}>
                                <Text style={styles.titlePix}>Preço {item.price} </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.containerCard,
                            { backgroundColor: '#0000CD' }]} onPress={HandleSave}>
                                <Text style={styles.titlePix}>Preço {item.price} </Text>
                            </TouchableOpacity>
                        )}
                    </>
                ) : (
                    <View>
                        <View style={styles.contentPix}>
                            <Text style={styles.titlePix}>Informações do Pix</Text>
                        </View>

                        <View style={[styles.containerPix, focus &&
                            { borderColor: nome.length < 5 ? '#FF0000' : '#0000FF', borderWidth: 1.7, }]}>
                            <TextInput
                                value={nome}
                                onChangeText={(text) => setNome(text)}
                                placeholder='Nome'
                                placeholderTextColor={"#000000"}
                                style={styles.InputPix}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                                ref={refFocus}
                            />
                        </View>


                        <View style={[styles.containerPix, focus2 &&
                            { borderColor: sobrenome.length < 6 ? '#FF0000' : '#0000FF', borderWidth: 1.7 }]}>
                            <TextInput
                                value={sobrenome}
                                onChangeText={(text) => setSobrenome(text)}
                                placeholder='Sobrenome'
                                placeholderTextColor={"#000000"}
                                style={styles.InputPix}
                                onFocus={() => setFocus2(true)}
                                onBlur={() => setFocus2(false)}

                            />
                        </View>


                        <View style={[styles.containerPix, focus3 &&
                            { borderColor: cpf.length < 10 ? '#FF0000' : '#0000FF', borderWidth: 1.7 }]}>
                            <TextInput
                                value={cpf}
                                onChangeText={(text) => setCpf(text)}
                                placeholder='CPF/CNPJ'
                                placeholderTextColor={"#000000"}
                                style={styles.InputPix}
                                onFocus={() => setFocus3(true)}
                                onBlur={() => setFocus3(false)}
                                keyboardType='numeric'

                            />
                        </View>

                        <View style={styles.line} />
                        {nome.length < 5 || sobrenome.length < 6 || cpf.length < 12 ? (
                            <TouchableOpacity style={[styles.containerPix,
                            { backgroundColor: '#808080' }]} onPress={() => refFocus.current.focus()}>
                                <Text style={styles.titlePix}>Preço {item.price} </Text>
                            </TouchableOpacity>

                        ) : (
                            <TouchableOpacity style={[styles.containerPix, { backgroundColor: '#0000CD' }]} >
                                <Text style={styles.titlePix}>Preço {item.price} </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </Animation.View>
        </>
    )
}

export default Card
