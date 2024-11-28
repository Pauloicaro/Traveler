import {
    View, Text, ImageBackground, FlatList, Pressable,
    Image, TouchableOpacity, StatusBar, Modal, ImageSourcePropType, SafeAreaView
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animation, { FadeInDown, } from 'react-native-reanimated'
import { RootStackParamList, StackTypes } from '../../routes/RouteScreen'
import { styles } from '../HorizontalDetails/StylesHorizontalDetails'
import React, { useState, useContext } from 'react';
import ModalHook from '../../hooks/ModalHook';
import ModalCalendar from '../CalendarModal/ModalCalendar';
import { Svg, Circle, Line } from 'react-native-svg';
import { UiContext } from '../Context/ContextApi'

type DetailsRoutesProps = RouteProp<RootStackParamList, 'HorizontalDetails'>

export const HorizontalDetails = () => {

    const { days, setDays } = useContext(UiContext)
    const route = useRoute<DetailsRoutesProps>()
    const { item } = route.params
    const Navigation = useNavigation<StackTypes>()
    const [modalVisible, setModalVisible] = useState<boolean>(false);


    const InteriorImageVertical = ({ item, index }: { item: ImageSourcePropType, index: number }) => {

        return <View>
            <Animation.View style={styles.interiosContainer} exiting={FadeInDown.delay(index * 100)}>
                <TouchableOpacity
                    onPress={() => Navigation.navigate('InteriorsHorizontal', { item: item, index: index })}>
                    <Image source={item} style={styles.interiors} />
                </TouchableOpacity>
            </Animation.View>
        </View>
    }


    return (
        <LinearGradient
            colors={['#fff',
                '#fff',
                '#fff',
                '#fff',
                '#1C1C1C',
                '#1C1C1C']}
            style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Animation.View style={styles.containerBackground}
                        entering={FadeInDown.delay(100)
                            .damping(10)
                            .springify()
                            .mass(1)
                            .restDisplacementThreshold(0.001)
                            .stiffness(70)
                            .restSpeedThreshold(2)}>
                        <ImageBackground source={item.image} style={styles.imageBackground} />
                        <BlurView intensity={100} style={styles.bluecontainerDescription}>
                            <View>
                                <Text style={styles.titleText}>{item.title} </Text>
                                <View style={styles.ContainerMap}>
                                    <Text style={styles.locationText}>{item.location2} </Text>
                                    <FontAwesome6 name="map-location" size={25} color="red" />
                                </View>
                            </View>
                        </BlurView>
                        <Pressable style={styles.doubleleft} onPress={() => Navigation.navigate('Home')}>
                            <FontAwesome5 name="angle-double-left" size={40} color="#fff" />
                        </Pressable>
                        <View style={styles.containerLocation}>
                            <Text style={styles.textLocation}>{item.Location} </Text>
                            <MaterialIcons name="share-location" size={26} color="red" />
                        </View>
                    </Animation.View>
                    <View style={styles.DescriptionContainer}>
                        <Text style={styles.textInfo}>{item.Details} </Text>
                    </View>
                    <View>
                        <Svg height={20} width={'100%'} >
                            <Line x1={"0%"}
                                y1={"50%"}
                                x2={"100%"}
                                y2={"50%"}
                                stroke={"black"}
                                strokeDasharray={"35.77"}
                                strokeWidth={1} />
                            <Circle r={8} cy={"50%"} cx={"0%"} fill={'#000000'} />
                            <Circle r={8} cy={"50%"} cx={"100%"} fill={'#000000'} />
                        </Svg>
                    </View>

                    <LinearGradient style={styles.containerIcons}
                        colors={['#fff', '#fff', '#1C1C1C']} start={{ x: 0.6, y: 0.9 }}>
                        <View style={styles.contentIcons}>
                            <Fontisto name="wifi-logo" size={22} color="#FF0000" />
                            <Text style={styles.textIcon}>Internet</Text>
                        </View>

                        <View style={styles.contentIcons}>
                            <MaterialIcons name="coffee" size={26} color="#FF0000" />
                            <Text style={styles.textIcon}>Café</Text>
                        </View>

                        <View style={styles.contentIcons}>
                            <Ionicons name="bed" size={26} color="#FF0000" />
                            <Text style={styles.textIcon}>Quartos</Text>
                        </View>

                        <View style={styles.container2}>
                            <View style={styles.containerNumber}>
                                <Text style={styles.number}>{item.number} </Text>
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.validation2}>{item.avaliação} </Text>
                                <Text style={styles.validation}>{item.like} </Text>
                            </View>
                        </View>
                    </LinearGradient>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={item.interiors}
                        horizontal
                        renderItem={({ item, index }: { item: ImageSourcePropType, index: number }) => {
                            return <InteriorImageVertical item={item} index={index} />
                        }}
                    />

                    <View style={styles.ContainerReservar}>
                        <View>
                            <View style={styles.ContainerPrice}>
                                <Text style={styles.priceTitle2}>{item.price2} </Text>
                                <Text style={styles.priceTitle}>{item.price} </Text>
                                <Text style={styles.price}>{item.titlePrice} </Text>
                            </View>

                            <ModalHook Visible={() => setModalVisible(true)} day={days} />
                            <Modal visible={modalVisible} animationType='slide' transparent={true}>
                                <ModalCalendar Visible={() => setModalVisible(false)} day={days} setDay={setDays} />
                            </Modal>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.ContainerReserver}
                                activeOpacity={0.5}
                                onPress={() => Navigation.navigate('Reserve', { item: item })}>
                                <Text style={styles.textReservar}>Reservar</Text>
                                <AntDesign name="swap" size={24} color="#fff" style={{ top: 3 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    < StatusBar backgroundColor={'#20212411'} />
                </View>
            </SafeAreaView>

        </LinearGradient>

    );
}




