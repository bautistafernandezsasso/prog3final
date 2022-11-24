import React, {Component} from "react";
import {auth, db} from '../firebase/config'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import Camara from '../components/Camara/Camara'

class CreatePost extends Component {
    constructor(){
        super()
        this.state = {
            descripcion:'',
            foto:'',
            mostrarCamara: true,
            url:'',
            likes: [],
            comentarios:[]
        }
        
    };
    createPost(descripcion, foto){
        db.collection('posts').add({
                owner: auth.currentUser.email, //deberia ser el usuario registrado. auth.currentUser
                description: text,
                photo: this.state.url,
                likes: [],
                comentarios: [],
                createdAt: Date.now()
            })
            .then(() => {
                this.setState({
                    description:'',
                    foto: "",
                    likes: [],
                    comentarios: []
                })
                this.props.navigation.navigate('Home')
            })
            .catch( e => console.log(e))
    }
    onImageUpload(url){
      this.setState({
          url:url,
          mostrarCamara:false
      })
  }


    render() {
      return (
        <View style={styles.container}>
        {
            this.state.mostrarCamara ?
            <Camara
            subirPosteo={(url)=> this.props.onImageUpload(url)}
            /> :
            <>
                <TextInput
                placeholder='Descripcion'
                onChangeText={text => this.setState({descripcionDelPosteo: text})}
                value={this.state.descripcionDelPosteo}
                keyboardType='default'
                style={styles.input}
                />
                <TouchableOpacity onPress={()=> this.createPost(this.state.descripcion, this.state.foto )}>
                    <Text>Enviar post</Text>
                </TouchableOpacity>
            </>
        }
    </View>

      )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1
  }})

export default CreatePost
