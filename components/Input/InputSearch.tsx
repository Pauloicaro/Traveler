import {
    View, Text, TextInput, ScrollView,
    Image, Pressable, Keyboard, StatusBar,
    SafeAreaView
} from 'react-native';
import { useState } from 'react';
import Houses from '../../content/Data';
import data from '../../content/DataVertical';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animation, { BounceInRight, } from 'react-native-reanimated'
import { StackTypes } from '../../routes/RouteScreen'
import { styles } from '../Input/style'
import { HouseProps } from '../../content/Data'
import { VerticalProps } from '../../content/DataVertical'

export default function Input() {



    const Navigation = useNavigation<StackTypes>()
    const [search, setSearch] = useState('')
    const HandleInput = () => {
        setSearch('')
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerInput}>
                    <View style={styles.contentBuscar}>
                        <Text style={styles.textBuscar}>Para onde?</Text>
                    </View>
                    <Pressable style={styles.doubleleft} onPress={() => Navigation.navigate('Home')}>
                        <MaterialCommunityIcons name="close-box-multiple" size={32} color="#fff" />
                    </Pressable>
                    <View style={styles.Input}>
                        <MaterialCommunityIcons name="map-search-outline" size={33} color="red" />
                        <TextInput
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            style={styles.search}
                            placeholder='Buscar destinos'
                            placeholderTextColor={'#000000'}
                            cursorColor={'red'}
                        />

                        <Pressable onPress={HandleInput}>
                            {search !== '' ? <MaterialCommunityIcons
                                name="close-outline"
                                size={27} color="#000000"
                                style={{ right: 14 }} /> :
                                <Text />}
                        </Pressable>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 36 }} showsVerticalScrollIndicator={false}>
                    {Houses.filter((val, _) => {
                        if (search === '') {
                            return val
                        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((item: HouseProps, index) => {
                        return <View key={index}>
                            <Pressable onPress={() => Navigation.navigate("HorizontalDetails", { item: item, index: index })}>
                                <Animation.View key={index} entering={BounceInRight.delay(300 * index).duration(1000).damping(3)}
                                    style={styles.contentImg}>
                                    <Image source={item.image} style={styles.img} />
                                    <BlurView style={styles.BlurView} intensity={100}>
                                        <Text style={styles.title}>{item.title} </Text>
                                        <View style={styles.contentlocation}>
                                            <Text style={styles.titleLocation}>{item.location2} </Text>
                                            <FontAwesome6 name="map-location" size={27} color="#FF0000" />
                                        </View>
                                    </BlurView>
                                </Animation.View>
                            </Pressable>
                        </View>
                    })}

                    {data.filter((e, _) => {
                        if (search === '') {
                            return e
                        } else if (e.title.toLowerCase().includes(search.toLowerCase())
                            || e.Location.toLowerCase().includes(search.toLowerCase())) {
                            return e
                        }
                    }).map((item: VerticalProps, index) => {
                        return <View key={index}>
                            <Pressable onPress={() => Navigation.navigate('VerticalMenu', { item: item, index: index })}>
                                <Animation.View key={index} entering={BounceInRight.delay(300 * index).duration(1000).damping(3)}
                                    style={styles.contentImg}>
                                    <Image source={item?.image} style={styles.img} />
                                    <BlurView style={styles.BlurView} intensity={100}>
                                        <Text style={styles.title}>{item?.title} </Text>
                                        <View style={styles.contentlocation}>
                                            <Text style={styles.titleLocation}>{item?.location2} </Text>
                                            <FontAwesome6 name="map-location" size={27} color="#FF0000" />
                                        </View>
                                    </BlurView>
                                </Animation.View>
                            </Pressable>
                        </View>
                    })}
                </ScrollView>
                <StatusBar backgroundColor={'#363636'} />
            </View>
        </SafeAreaView>

    );
}








