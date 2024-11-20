import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },



    contenTtitle: {
        marginHorizontal: 12,
        marginTop: 15,
        marginBottom: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },



    payContent: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly'
    },


    FrontcontentCard: {
        width: 330,
        height: 210,
        marginHorizontal: 32,
        marginBottom: 22,
        marginTop: 55,
        borderRadius: 12,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1.7,
        backgroundColor: 'blue',
        backfaceVisibility: 'hidden'
    },


    BackcontentCard: {
        position: 'absolute',
        width: 330,
        height: 210,
        marginHorizontal: 32,
        marginBottom: 21,
        marginTop: 176,
        borderRadius: 12,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1.7,
        backgroundColor: 'blue',
        backfaceVisibility: 'hidden'

    },

    containerInput: {
        width: 350,
        height: 46,
        marginBottom: 10,
        marginHorizontal: 21,
        borderRadius: 6,
        borderWidth: 0.9,
        marginTop: 2,
        backgroundColor: '#D3D3D3'
    },


    input: {
        width: '100%',
        height: '100%',
        left: 10,
        fontSize: 17,
        fontWeight: 'bold'
    },

    contentSubInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 21,
        gap: 5
    },


    subInput: {
        width: 172,
        height: 46,
        marginBottom: 10,
        borderRadius: 6,
        borderWidth: 0.9,
        marginTop: 2,
        backgroundColor: '#D3D3D3'
    },


    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        marginBottom: 10


    },

    titleButton: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#4F4F4F'
    },



    contentFront: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    validity: {
        marginHorizontal: 16,
        flexDirection: 'row',
        gap: 5
    },


    titleValidity: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff'
    },

    SubtitleValidity: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },


    containerImgCard: {
        'width': 90,
        height: 90,
        alignSelf: 'flex-end',
        marginHorizontal: 5
    },

    ImgCard: {
        width: '100%',
        height: '100%',
    },



    containerImgChip: {
        width: 55,
        height: 40,
        marginHorizontal: 10,
        bottom: 20
    },


    ImgChip: {
        width: '100%',
        height: '100%',
    },



    contentNumber: {
        marginHorizontal: 15,
        alignSelf: 'center',
        bottom: 10,
    },


    TitleNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },


    contentTitle: {
        marginHorizontal: 15
    },


    TitleName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },


    ContainerImgMastercard: {
        position: 'absolute',
        width: 70,
        height: 40,
        right: 10,
        bottom: 20
    },


    ImgMastercard: {
        width: '100%',
        height: '100%',
    },


    cvc: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        marginTop: 10
    },


    ContentCode: {
        marginHorizontal: 15,
        alignSelf: 'center',
        top: 10
    },


    TitleCode: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    TarjaMagnética: {
        position: 'absolute',
        width: '100%',
        height: 48,
        backgroundColor: 'black',
        bottom: 42
    },


    ContainerSalve: {
        width: 350,
        height: 48,
        backgroundColor: 'blue',
        marginTop: 10,
        marginBottom: 22,
        marginHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },

    containerPay: {
        width: 90,
        height: 60,
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        marginHorizontal: -52

    },
    payTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    contentPix: {
        marginTop: 26,
        marginHorizontal: 15,
        marginBottom: 25
    },


    titlePix: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff"
    },

    buttonPrice: {
        width: 150,
        height: 43,
        right: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 20
    },

    titlePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textDecorationLine: 'underline'
    },

    containerPix: {
        width: 350,
        height: 46,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    InputPix: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        height: '100%'

    },

    line: {
        width: '95%',
        borderWidth: 0.7,
        marginTop: 27,
        marginHorizontal: 10,
        marginBottom: 10
    },


    titlePay: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff'
    },



    containerCard: {
        width: 350,
        height: 46,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

})