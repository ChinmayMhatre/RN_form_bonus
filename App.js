
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState("")
  // Something needs to be added here
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Name: {name}</Text>
        <Text>Age : {age}</Text>
        <Text>Email : {email}</Text>
        <Text>Password : {password}</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
        style = {styles.input}
        placeholder="Name" 
        value={name}
        onChangeText={(text)=>setName(text)}
        />
        // Something needs to be added here. Look out for the TextInputs for hints. 
        <TextInput 
        style = {styles.input}
        placeholder="Age"
        value={age}  
        keyboardType="number-pad"
        onChangeText={(text)=>setAge(text)}
        />
        <TextInput 
        style = {styles.input}
        placeholder="Email"
        value={email}  
        keyboardType="email-address"
        onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
        style = {styles.input}
        placeholder="Password"
        value={password}  
        secureTextEntry={true}
        textContentType="newPassword"
        onChangeText={(text)=>setPassword(text)}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  input: {
    height: 40,
    width:"80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
