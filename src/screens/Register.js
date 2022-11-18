import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth, db } from '../firebase/config'

class Register extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            nombreusuario: "",
            description: "",
            foto: "",
            error:''
        }
    }

    registrar(email, password, nombreusuario, description, foto){
        auth.createUserWithEmailAndPassword(email, password)
        .then( resp => {
            db.collection("users").add({
                owner: email,
                username: nombreusuario,
                bio: description,
                foto: foto,
                createdAt: Date.now()
            })
            .then(()=>{
                this.setState({
                    email: "",
                    password: "",
                    nombreusuario: "",
                    description: "",
                    foto: "",
                })
                this.props.navigation.navigate("login")
            }).catch(error =>console.log(error))

        }).catch( error => this.setState({error:error.message}))
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
                <Text>{this.state.error}</Text>
                <Text>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Escribi tu email'
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Escribi tu password'
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Escribi un nombre de usuario'
                    onChangeText={text => this.setState({nombreusuario: text})}
                    value={this.state.nombreusuario}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Escribi tu descripcion '
                    onChangeText={text => this.setState({description: text})}
                    value={this.state.description}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Subi una foto'
                    onChangeText={text => this.setState({foto: text})}
                    value={this.state.foto}
                />

            { this.state.email =="" || this.state.nombreusuario =="" || this.state.password == "" ? 
            <View>
                <TouchableOpacity>
                    <Text>REGISTRATE</Text>
                </TouchableOpacity>
            </View>
            :
                <View>
                    <TouchableOpacity onPress={()=> this.registrar(this.state.email, this.state.password, this.state.nombreusuario, this.state.description, this.state.foto)}>
                        <Text>REGISTRATE</Text>
                    </TouchableOpacity>
                </View>
            }
                <View>
                    <Text>Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text>Logueate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:32
    },
    input:{
        borderWidth:1
    }
})

export default Register