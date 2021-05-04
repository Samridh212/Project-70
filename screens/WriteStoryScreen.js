import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            Author:'',
            StoryText:'',
        }
    }
    
    render(){
      return(
          <View style={styles.container}>
              
              <TextInput 
                  placeholder="Story Title"
                  onChangeText= {(text)=>{
                      this.setState({
                          title: text
                      })
                  }}
                  value={this.state.title}
                  style={styles.title}
                  placeholderTextColor='black'/>
              <TextInput
                  placeholder="Author"
                  style={styles.title}
                  onChangeText= {(text)=>{
                      this.setState({
                          Author: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.author}
                  style={styles.author} />
              <TextInput 
                  placeholder="Write your story"
                  style={styles.title}
                  onChangeText= {(text)=>{
                      this.setState({
                          StoryText: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.storyText}
                  style={styles.storyText}
                  multiline={true}/>
              
              <TouchableOpacity
                  style={styles.submitButton}
                 // onPress={this.submitStory}
                 >
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
 title: {
             marginTop: 50,
             width: '80%',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
           author: {
            height: 40,
            borderWidth: 2,
            margin: 10,
             padding: 6,
        },
        storyText: {
            height: 250,
            borderWidth: 2,
            margin: 10, 
            padding: 6,
        },
       submitButton:{
         backgroundColor:'red',
         marginRight:'52%',
         marginLeft:'45%',
         height:50,
         alignItems:'center',
         justifyContent:'center'
        
        },
        buttonText:{
          color:'white',
          backgroundColor:'red',
          alignItems:'center'
        }
         
    
})