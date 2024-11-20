import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyAfk_j-KJ6IEcHC8XJ9TymS0Bbr1CaizOE",
    authDomain: "travelauth-d7521.firebaseapp.com",
    projectId: "travelauth-d7521",
    storageBucket: "travelauth-d7521.appspot.com",
    messagingSenderId: "889505136971",
    appId: "1:889505136971:web:9a8d1fca6d1643c8e728ce"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});


export { auth }