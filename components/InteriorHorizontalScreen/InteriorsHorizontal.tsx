import { View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Animated, {
    useAnimatedStyle,
    withRepeat,
    withTiming,
    useSharedValue,
} from 'react-native-reanimated';
import { StackTypes, RootStackParamList } from '../../routes/RouteScreen'
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { styles } from './Horizontal'



type DetailsRoutesProps = RouteProp<RootStackParamList, 'InteriorsHorizontal'>

export default function InteriorsHorizontal() {

    const Navigation = useNavigation<StackTypes>()
    const route = useRoute<DetailsRoutesProps>()
    const { item } = route.params
    const offset = useSharedValue(10);
    const presseb = useSharedValue(false)
    const time = useSharedValue(1000)

    const pinch = Gesture.Pinch().onBegin(() => {
        presseb.value = true
    })
        .onFinalize(() => {
            presseb.value = false;
        })

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value },
        { scale: withTiming(-presseb.value ? 1.4 : 1.1) }],
    }));


    useEffect(() => {
        offset.value = withRepeat(
            withTiming(-offset.value, { duration: time.value - 100, }),
            -1,
            true
        );
    }, []);


    return (
        <GestureHandlerRootView style={styles.GestureHandlercontainer}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.containerButton}
                        onPress={() => Navigation.goBack()} >
                        <AntDesign name="closesquare" size={27} color="#fff" />
                    </TouchableOpacity>
                    <GestureDetector gesture={pinch}>
                        <View style={styles.containerImg}>
                            <Animated.Image source={item}
                                style={[styles.img, animatedStyles]} />
                        </View>
                    </GestureDetector>
                    <StatusBar backgroundColor={'#000000'} />
                </View>
            </SafeAreaView>

        </GestureHandlerRootView>
    );


}