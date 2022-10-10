import React from 'react';
import { Image, Text, View } from 'react-native';
import Churransco from './assets/churrasco.png';
import Convidado from './assets/convidado.png';
import Refrigerante from './assets/refrigerante.png';
import Cerveja from './assets/cerveja.png';
import Carne from './assets/carne.png';
import estilos from './estilos';

export default function App() {
  return (
  <View>
  <View>
       
    <View style={estilos.containerImage}> 
      <Image source={Churransco} style={estilos.imag} />
       <View>
         <Text style={estilos.destaqueTitulo}>CHURRASCO EM CASA</Text>
        <Text style={estilos.subtituloTexto}>Calculando a comida e a bebida</Text>
        </View>
    </View>
<View style={estilos.boxTexto}>
      <Text style={estilos.boxTitulo}>Vai fazer un churrasco mas não sabe o que comprar?</Text>
      <Text style={estilos.textoSubtitulo}>Final de semana chegando e vem aquela vontade de fazer um churasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma medida do consumo por pessoa.</Text>
</View>
<View style={estilos.boxImagemIcone}>
    <View style={estilos.boxCard}>
         <Image source={Convidado} style={estilos.img} />
         <Text style={estilos.subtitulo}>Convidados</Text>
         <Text  style={estilos.destaque}>1</Text>
    </View>
    <View style={estilos.boxCard}>
      <Image source={Carne} style={estilos.img} />
      <Text style={estilos.subtitulo}>Carne</Text>
      <Text  style={estilos.destaque}>400 GR</Text>
    </View>

      <View style={estilos.boxCard}>
        <Image source={Refrigerante} style={estilos.img} />
        <Text style={estilos.subtitulo}>Refrigerante</Text>
        <Text  style={estilos.destaque}>700 ML</Text>
      </View>
      <View style={estilos.boxCard}>
         <Image source={Cerveja} style={estilos.img} />
         <Text style={estilos.subtitulo}>Cerveja</Text>
         <Text style={estilos.destaque}>4 Latas</Text>
      </View>
  </View>
</View>
</View>
  );
};

