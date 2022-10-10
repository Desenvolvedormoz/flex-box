import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
containerImage: {
    backgroundColor:'#00a79d',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
},
imag: {
width: 60,
height: 60,
borderRadius: 50,
marginEnd: 5
},
destaqueTitulo: {
    fontWeight: 'bold',
    color:'#fff',
    fontSize: 18
},
boxImagemIcone :{
    marginHorizontal: 30,
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
boxCard: {
    backgroundColor: '#ddf2ed',
    minWidth: 150,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 5
},
img: {
    width: 30,
    height: 30
},
destaque: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00a79d'
},
subtitulo: {
    color: '#00a79d'
},
boxTexto: {
    marginHorizontal: 30,
    marginVertical: 20
},
boxTitulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#313131'
},
textoSubtitulo: {
    textAlign: 'center',
    color: '#313131',
    lineHeight: 20
},
subtituloTexto: {
    color: '#fff'
}

});
export default estilos;