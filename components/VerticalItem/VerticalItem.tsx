import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/RouteScreen'
import { BlurView } from 'expo-blur';
import { FontAwesome6 } from '@expo/vector-icons';
import Animation, { FadeInDown } from 'react-native-reanimated'
import { styles } from '../VerticalItem/StyleVerticalItem'
import { VerticalProps } from '../../content/DataVertical'

type PropsVertical = {
    item: VerticalProps,
    index: number
}

const VerticalItem = ({ item, index }: PropsVertical) => {

    const Navigation = useNavigation<StackTypes>()

    return (
        <Animation.View entering={FadeInDown.delay(300 * index)}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={0.9} style={styles.subContent}
                    onPress={() => Navigation.navigate('VerticalMenu', { item: item, index: index })}>
                    <ImageBackground source={item.image} style={styles.img} />
                    <BlurView intensity={100} style={styles.content2}>
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


export default VerticalItem;