import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({


container: {
    flex: 1
},


    subContent: {
        flex: 1,
        width: 235,
        height: 280,
        marginHorizontal: 10,
        borderRadius: 22,
        overflow: 'hidden',
        elevation: 7,
        marginBottom: 22,
    },

    content: {
        zIndex: 33,
        position: 'absolute',
        backgroundColor: '#20212471',
        left: 10,
        width: '80%',
        padding: 10,
        borderRadius: 22,
        bottom: 22,
        overflow: 'hidden'
    },


    titleContent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },


    locationContent: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },


    TextlocationContent: {
        fontSize: 14,
        fontWeight: '800'
    },


    Img: {
        width: '100%',
        height: '100%',
    },

    heart: {
        zIndex: 20,
        height: 50,
        width: 50,
        borderRadius: 40,
        position: 'absolute',
        right: 22,
        top: 19,
        backgroundColor: '#20212491',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
})