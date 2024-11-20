

import {ImageSourcePropType} from 'react-native'



export type HouseProps = {
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



export const Houses: HouseProps[] = [

    
    {
        id: 1,
        subTitle: 'Castelo',
        title: 'Hotel Castelo Nacional',
        Location: 'Rua Roberto Pistrak Nemirovsky, 148',
        location2: 'Campos do Jordão',
        Details: 'As suítes deste hotel boutique dispõem de penteadeira, TV a cabo, frigobar, banheiro privativo com chuveiro de água quente. Você pode saborear um buffet de café da manhã servido diariamente na sala de refeições.',
        avaliação: 'Muito bom',
        like: '2.911 avaliações',
        number: '8,4',
        price2: 'R$ 967',
        price: 'R$ 678',
        titlePrice: 'noite',
        data: '17-25 de mar.',
        image: require('../src/imgs/details/Castle/Castelo.jpg'),
        interiors: [
            require('../src/imgs/details/Castle/Castelo1.jpg'),
            require('../src/imgs/details/Castle/Castelo7.jpg'),
            require('../src/imgs/details/Castle/Castelo5.jpg'),
            require('../src/imgs/details/Castle/Castelo2.jpg'),
            require('../src/imgs/details/Castle/Castelo4.jpg'),
        ],
        index: undefined,
       
    },

    {
        id: 2,
        subTitle: '',
        title: 'Ville de France',
        Location: 'Alameda Dezoito. 147.',
        location2: 'Campos do Jordão',
        Details: 'Todos os quartos incluem uma varanda com vista para o jardim e banheiro privativo, alguns quartos oferecem vista para a montanha. Um buffet de café da manhã é servido diariamente no jardim de inverno.',
        avaliação: 'Excepcional',
        like: '1.077 avaliações',
        number: '9,5',
        price2: 'R$ 788',
        price: 'R$ 578',
        titlePrice: 'noite',
        data: '22-29 de mar.',
        image: require('../src/imgs/details/Ville_de_france/Ville.jpg'),
        interiors: [
            require('../src/imgs/details/Ville_de_france/Ville2.jpg'),
            require('../src/imgs/details/Ville_de_france/Ville3.jpg'),
            require('../src/imgs/details/Ville_de_france/Ville4.jpg'),
            require('../src/imgs/details/Ville_de_france/Ville6.jpg'),
            require('../src/imgs/details/Ville_de_france/Ville5.jpg'),
        ],
        index: undefined,
      
    },
 


    {
        id: 3,
        subTitle: '',
        title: 'Pousada Déjà vu',
        Location: 'Rua Rosa Rosseti, 44.',
        location2: 'Campos do Jordão',
        Details: 'Acomodações com jardim, estacionamento privativo gratuito.Os quartos dispõem de guarda-roupa, TV de tela plana, banheiro privativo, roupa de cama, toalhas e varanda térrea com vista da cidade.',
        avaliação: 'Fabuloso',
        like: '666 avaliações',
        number: '8,7',
        price2: 'R$ 788',
        price: 'R$ 578',
        titlePrice: 'noite',
        data: '22-29 de mar.',
        image: require('../src/imgs/details/Guesthouse/pousada.jpg'),
        interiors: [
            require('../src/imgs/details/Guesthouse/pousada2.jpg'),
            require('../src/imgs/details/Guesthouse/pousada3.jpg'),
            require('../src/imgs/details/Guesthouse/pousada5.jpg'),
            require('../src/imgs/details/Guesthouse/pousada4.jpg'),
            require('../src/imgs/details/Guesthouse/pousada6.jpg')
        ],
        index: undefined,
      
    },



    {
        id: 4,
        subTitle: 'Chalé',
        title: 'Chalé Mon Amour, puro',
        Location: 'Rua do Cedro, 20.',
        location2: 'Campos do Jordão',
        Details: 'Cozinha totalmente equipada e terraço com vista da montanha. A unidade dispõe de isolamento acústico, piso em parquet e lareira. A propriedade dispõe de área para refeições ao ar livre.',
        avaliação: 'Fantástico',
        like: '784 avaliações',
        number: '9,4',
        price2: 'R$ 788',
        price: 'R$ 578',
        titlePrice: 'noite',
        data: '22-29 de mar.',
        image: require('../src/imgs/details/Chalé/Chalé.jpg'),
        interiors: [
            require('../src/imgs/details/Chalé/Chalé2.jpg'),
            require('../src/imgs/details/Chalé/Chalé3.jpg'),
            require('../src/imgs/details/Chalé/Chalé4.jpg'),
            require('../src/imgs/details/Chalé/Chalé5.jpg'),
            require('../src/imgs/details/Chalé/Chalé6.jpg'),
        ],
        index: undefined,
      
    },


    {
        id: 5,
        subTitle: '',
        title: 'Chris Park Hotel',
        Location: 'Alameda Perolas, 182.',
        location2: 'Campos do Jordão',
        Details: 'Você pode contemplar o nascer do sol em sua varanda. Os chalés têm lareira privativa. A acomodação conta com academia e banheira de hidromassagem.',
        avaliação: 'Excepcional',
        like: '33 avaliações',
        number: '9,5',
        price2: 'R$ 788',
        price: 'R$ 578',
        titlePrice: 'noite',
        data: '22-29 de mar.',
        image: require('../src/imgs/details/Park/Chris.jpg'),
        interiors: [
            require('../src/imgs/details/Park/Chris2.jpg'),
            require('../src/imgs/details/Park/Chris3.jpg'),
            require('../src/imgs/details/Park/Chris4.jpg'),
            require('../src/imgs/details/Park/Chris5.jpg'),
            require('../src/imgs/details/Park/Chris6.jpg'),
        ],
        index: undefined,
     
    },

    {
        id: 6,
        subTitle: 'Chateau',
        title: 'Chateau La Villette',
        Location: 'Rua Cantidio Pereira de Castro, 100.',
        location2: 'Campos do Jordão',
        Details: 'A propriedade oferece quartos espaçosos, sauna e banheira de hidromassagem no jardim. Os quartos do Chateau La Villette têm decoração contemporânea. As unidades contam com aquecimento.',
        avaliação: 'Fantástico',
        like: '933 avaliações',
        number: '8,2',
        price2: 'R$1.088',
        price: 'R$ 678',
        titlePrice: 'noite',
        data: '22-29 de jun.',
        image: require('../src/imgs/details/Villette/Chateau.jpg'),
        interiors: [
            require('../src/imgs/details/Villette/Chateau2.jpg'),
            require('../src/imgs/details/Villette/Chateau3.jpg'),
            require('../src/imgs/details/Villette/Chateau4.jpg'),
            require('../src/imgs/details/Villette/Chateau5.jpg'),
            require('../src/imgs/details/Villette/Chateau6.jpg'),
        ],
        index: undefined,
      
    },






]






export default Houses;