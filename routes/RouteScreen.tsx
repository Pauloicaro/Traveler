import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import { HorizontalDetails } from '../components/HorizontalDetails/HorizontalDetails';
import { VerticalMenu } from '../components/VerticalDetails/VerticalMenu';
import Input from '../components/Input/InputSearch';
import InteriorsHorizontal from '../components/InteriorHorizontalScreen/InteriorsHorizontal';
import InteriorsVertical from '../components/InteriorVerticalScreen/InteriorVertical';
import Login from '../components/Login/Login';
import SingUp from '../components/SingUp/SingUp';
import Reserve from '../components/Reserve/Reserve';
import ReserveVertical from '../components/ReserveVertical/ReserveVertical';
import { HouseProps } from '../content/Data'
import { ImageSourcePropType } from 'react-native'
import { VerticalProps } from '../content/DataVertical';


export type RootStackParamList = {
    Reserve: {
        item: HouseProps,
    },

    ReserveVertical: {
        item: VerticalProps
    },

    Home: undefined,
    HorizontalDetails: {
        item: HouseProps,
        index: number
    },
    Input: undefined,
    VerticalMenu: {
        item: VerticalProps,
        index: number
    },
    InteriorsVertical: {
        item: ImageSourcePropType,
        index: number
    },
    SingUp: undefined,
    Login: undefined,
    InteriorsHorizontal: {
        item: ImageSourcePropType,
        index: number
    },

}

export type StackTypes = NativeStackNavigationProp<RootStackParamList>

export default function Route() {
    const Stack = createNativeStackNavigator()
    return (<Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Reserve' component={Reserve} options={{ headerTitle: "Reservar" }} />
        <Stack.Screen name='ReserveVertical' component={ReserveVertical} options={{ headerTitle: "Reservar" }} />
        <Stack.Screen name='Input' component={Input} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SingUp' component={SingUp} options={{ headerShown: false }} />
        <Stack.Screen name='HorizontalDetails' component={HorizontalDetails} options={{ headerShown: false }} />
        <Stack.Screen name='VerticalMenu' component={VerticalMenu} options={{ headerShown: false }} />
        <Stack.Screen name='InteriorsHorizontal' component={InteriorsHorizontal} options={{ headerShown: false }} />
        <Stack.Screen name='InteriorsVertical' component={InteriorsVertical} options={{ headerShown: false }} />
    </Stack.Navigator>
    );
}