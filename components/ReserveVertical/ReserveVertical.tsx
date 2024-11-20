import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import { styles } from '../ReserveVertical/styles'
import { RootStackParamList, } from '../../routes/RouteScreen'
import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import ReserveInput from '../ReserveInput/ReserveInput';
import Card from '../Card/Card';
import { UiContext } from '../Context/ContextApi';
import Animation, { FadeInRight, } from 'react-native-reanimated'

type DetailsRoutesProps = RouteProp<RootStackParamList, 'ReserveVertical'>


const ReserveVertical = () => {
    const route = useRoute<DetailsRoutesProps>()
    const { item } = route.params
    const { days } = useContext(UiContext)
    const [date] = useState("2024-10-20")


    return (
        <SafeAreaView style={styles.container}>

        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerReserve}>
                    <Animation.View style={styles.containerImg} entering={FadeInRight}>
                        <Image source={item.image} style={styles.img} />
                    </Animation.View>

                    <Animation.View style={{ top: 15 }} entering={FadeInRight}>
                        <Text style={styles.title}>{item.title} </Text>
                        <Text style={styles.location2}>{item.location2} </Text>
                    </Animation.View>
                </View>

                <View style={styles.line3} />

                <Animation.View style={styles.contentDay} entering={FadeInRight}>
                    <Text style={styles.titleDatas}>Datas</Text>
                    <Text style={styles.tittleDay}>{days?.dateString ? days?.dateString : date} </Text>
                </Animation.View>

                <View style={styles.line} />

                <ReserveInput />
                <Card item={item} />
            </ScrollView>
        </View>
                </SafeAreaView>

    )
}

export default ReserveVertical