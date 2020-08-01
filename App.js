
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,


} from 'react-native';
import Lista from './src/Lista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0,
          curtidas: 'andrelopes e outras ',
          youliked: false,
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0,
          curtidas: 'souzaana e outras ',
          youliked: false,
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3,
          curtidas: 'claranunes e outras ',
          youliked: false,
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 2,
          curtidas: 'sofiareis e outras ',
          youliked: false,
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32,
          curtidas: 'leiladias e outras ',
          youliked: false,
        }
      ],
     };

     
  }



  render() { 
    return ( 

      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity> 
            <Image 
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
            source={require('./src/img/send.png')}
            style={styles.send}
          />
          </TouchableOpacity>
        </View>  

        <FlatList 
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        renderItem={ ({item}) => <Lista data={item} /> }
        />   

      </View>
      

     );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
   header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,

  },
  send:{
    width: 23,
    height: 23,

  },
  
});

export default App;
