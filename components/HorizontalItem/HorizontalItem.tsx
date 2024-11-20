import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur';
import { FontAwesome6 } from '@expo/vector-icons';
import Animation, { FadeInDown } from 'react-native-reanimated'
import React from 'react';
import { styles } from './StyleHorizontalItem'
import { HouseProps } from '../../content/Data'
import { StackTypes } from '../../routes/RouteScreen'


type Props = {
    item: HouseProps,
    index: number,

}


export default function HorizontalItem({ item, index }: Props) {

    const Navigation = useNavigation<StackTypes>()

    return (
        <Animation.View entering={FadeInDown.delay(300 * index)}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={0.9} style={styles.subContent}
                    onPress={() => Navigation.navigate('HorizontalDetails', { item: item, index: index })} >
                    <ImageBackground source={item.image} style={styles.Img} />
                    <BlurView intensity={100} style={styles.content}>
                        <Text style={styles.titleContent}>{item.title} </Text>
                        <View style={styles.locationContent}>
                            <Text style={styles.TextlocationContent}>{item.location2} </Text>
                            <FontAwesome6 name="map-location" size={27} color="#FF0000" />
                        </View>
                    </BlurView>
                </TouchableOpacity>
            </SafeAreaView>
        </Animation.View>

    );
}





