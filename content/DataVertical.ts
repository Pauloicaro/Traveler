import {ImageSourcePropType} from 'react-native'

export type VerticalProps = {
    id: number,
    image: ImageSourcePropType,
    subTitle: string,
    index: any,
    title: string,
    Location: string,
    location2: string,
    Details: string,
    avaliação: string,
    like: string,
    number: string,
    price2: string,
    price: string,
    titlePrice: string,
    data: string,
    interiors: ImageSourcePropType[]
  }

export const data:VerticalProps[]  = [


    {
        id: 1,
        title: 'Suites no Chalé',
        Location: 'Rua Vereador Clóvis Soares de Azevedo.',
        location2: 'Campos do Jordão',
        Details: 'Todas as unidades do complexo de chalés incluem guarda-roupa e TV de tela plana. Com banheiro privativo com chuveiro e secador de cabelo, enquanto alguns quartos incluem um terraço.',
        avaliação: 'Excepcional',
        like: '1.315 avaliações',
        number: '9,7',
        price2: 'R$ 1.167',
        price: 'R$ 748',
        titlePrice: 'noite',
        data: '10-22 de set.',
        image: require('../src/imgs/detailsVertical/suites/Suites no Chalé.jpg'),
        interiors: [
            require('../src/imgs/detailsVertical/suites/suites1.jpg'),
            require('../src/imgs/detailsVertical/suites/suites2.jpg'),
            require('../src/imgs/detailsVertical/suites/suites3.jpg'),
            require('../src/imgs/detailsVertical/suites/suites4.jpg'),
            require('../src/imgs/detailsVertical/suites/suites5.jpg'),
        ],
        index: undefined,
        subTitle: ""
    },

    {
        id: 2,
        title: 'Hotel JB',
        Location: 'Av. Emílio Ribas, 946.',
        location2: 'Campos do Jordão',
        Details: 'Uma piscina ao ar livre e um restaurante. Para a sua comodidade, Os quartos do hotel dispõem de TV, e os banheiros privativos contam com um chuveiro. No Hotel JB, você encontrará uma recepção 24 horas.',
        avaliação: 'Muito bom',
        like: '2.031 avaliações',
        number: '8,4',
        price2: 'R$ 947',
        price: 'R$ 578',
        titlePrice: 'noite',
        data: '14-23 de nov.',
        image: require('../src/imgs/detailsVertical/hotel-jb/Hotel-B.jpg'),
        interiors: [
            require('../src/imgs/detailsVertical/hotel-jb/jb1.jpg'),
            require('../src/imgs/detailsVertical/hotel-jb/jb2.jpg'),
            require('../src/imgs/detailsVertical/hotel-jb/jb3.jpg'),
            require('../src/imgs/detailsVertical/hotel-jb/jb4.jpg'),
            require('../src/imgs/detailsVertical/hotel-jb/jb5.jpg'),
        ],
        index: undefined,
        subTitle: ""
    },




    {
        id: 3,
        title: 'Chalé Villa Nature',
        Location: '405 Rua Dudu Delamare Capivari.',
        location2: 'Campos do Jordão',
        Details: 'A acomodação dispõe de banheira de hidromassagem. Quartos com ar-condicionado, estacionamento privativo. O chalé dispõe de varanda, área de estar, TV de tela plana, cozinha totalmente equipada.',
        avaliação: 'Incrivel',
        like: '1.551 avaliações',
        number: '8,7',
        price2: 'R$ 1.167',
        price: 'R$ 828',
        titlePrice: 'noite',
        data: '11-19 de jun.',
        image: require('../src/imgs/detailsVertical/nature/nature6.jpg'),
        interiors: [
            require('../src/imgs/detailsVertical/nature/nature1.jpg'),
            require('../src/imgs/detailsVertical/nature/nature2.jpg'),
            require('../src/imgs/detailsVertical/nature/nature.jpg'),
            require('../src/imgs/detailsVertical/nature/nature4.jpg'),
            require('../src/imgs/detailsVertical/nature/nature5.jpg'),
        ],
        index: undefined,
        subTitle: ""
    },


    {
        id: 4,
        title: 'Pousada Dreams',
        Location: 'Alameda Peridoto, 10.',
        location2: 'Campos do Jordão',
        Details: ' a Pousada Dreams oferece acomodações com Wi-Fi gratuito. Nesta hospedagem domiciliar, você pode desfrutar de um café da manhã continental. Oferece um terraço ao ar livre. Você também pode relaxar no jardim.',
        avaliação: 'Excepcional',
        like: '364 avaliações',
        number: '9,9',
        price2: 'R$ 967',
        price: 'R$ 518',
        titlePrice: 'noite',
        data: '12-21 de mar.',
        image: require('../src/imgs/detailsVertical/dream/Pousada-Dreams.jpg'),
        interiors: [
            require('../src/imgs/detailsVertical/dream/dream1.jpg'),
            require('../src/imgs/detailsVertical/dream/dream2.jpg'),
            require('../src/imgs/detailsVertical/dream/dream3.jpg'),
            require('../src/imgs/detailsVertical/dream/dream4.jpg'),
            require('../src/imgs/detailsVertical/dream/dream5.jpg'),
        ],
        index: undefined,
        subTitle: ""
    },









]






export default data;