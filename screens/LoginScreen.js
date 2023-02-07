import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const loginHandler = () => {
    fetch("https://native-backend.onrender.com/login",{
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
             "email":username,
             "password":password
           })
          })
          .then(res=>res.json())
          .then((data)=>{
                 try {
                  if(data.status){
                    navigation.navigate("home",{user:`${data.data.email}`})
                  }
                 } catch (e) {
                   console.log("error",e)
                    Alert(e)
                 }
          })
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10
  }
});

export default LoginScreen;





















// import React,{useState} from 'react';
// import { Button ,TextInput} from 'react-native-paper';
// import {
//   View,
//   Text,
//   StatusBar,
//   KeyboardAvoidingView,
//   Alert
// } from 'react-native';


// const LoginScreen = (props) => {
//   const [email,setEmail] = useState('');
//   const [password,setPassword]=useState('')
  
  
//   const sendCred = async (props)=>{
//     fetch("http://192.168.1.8:3000/login",{
//       method:"POST",
//       headers: {
//        'Content-Type': 'application/json'
//      },
//      body:JSON.stringify({
//        "email":email,
//        "password":password
//      })
//     })
//     .then(res=>res.json())
//     .then(async (data)=>{
//            try {
//             if(data){
//               console.log(data)
//               props.navigation.replace("home")
//             }
//            } catch (e) {
//              console.log("error",e)
//               Alert(e)
//            }
//     })
//  }

//   return (
//    <> 
//    <KeyboardAvoidingView behavior="position">
//      <StatusBar backgroundColor="blue" barStyle="light-content" />
//       <Text 
//       style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>LOGIN or</Text>
//       <Text 
//       style={{fontSize:30,marginLeft:18,color:"blue"}}
//       >SIGNUP bellow</Text>
//       <View
//       style={{
//         borderBottomColor:"blue",
//         borderBottomWidth:4,
//         borderRadius:10,
//         marginLeft:20,
//         marginRight:150,
//         marginTop:4
//       }}
//        />
//       <Text
//       style={{
//         fontSize:20,marginLeft:18,marginTop:20
//       }}
      
//       >Login with email</Text>
//       <TextInput
//         label='Email'
//         mode="outlined"
//         value={email}
//         style={{marginTop:18}}
//         theme={{colors:{primary:"blue"}}}
//         onChangeText={(text)=>setEmail(text)}
     
//       />
//       <TextInput
//         label='password'
//         mode="outlined"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={(text)=>{setPassword(text)}}
//         style={{marginTop:18}}
//         theme={{colors:{primary:"blue"}}}
     
//       />
//       <Button 
//         mode="contained"
//         style={{marginLeft:18,marginRight:18,marginTop:18}}
//        onPress={() => sendCred(props)}>
//         LogIn
//       </Button>
      
//       </KeyboardAvoidingView>
//    </>
//   );
// };



// export default LoginScreen;