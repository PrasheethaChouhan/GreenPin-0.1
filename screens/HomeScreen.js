import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';

import db from '../config'

export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      allRequests : []
    }
  this.requestRef= null
  }

  getAllRequests =()=>{
    this.requestRef = db.collection("Planting_requests")
    .onSnapshot((snapshot)=>{
      var allRequests = []
      snapshot.forEach((doc) => {
          allRequests.push(doc.data())
      })
      this.setState({allRequests:allRequests})
    })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    console.log(item.item_name);
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>Donate</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  componentDidMount(){
    this.getAllRequests()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Plantathon"/>
        <View style={{flex:1, backgroundColor:'black'}}>
          {
            this.state.allRequests.length === 0
            ?(
              <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20, color:'white'}}>Your progress</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"black",
    shadowColor: "green",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
