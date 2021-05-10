import React, { Component } from 'react';
import { ScrollView,TouchableOpacity, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import logo from "./images/youtube-logo.png";

import Icon from "react-native-vector-icons/MaterialIcons";

import VideoFrame from "./components/VideoFrame";

import data from "./data/data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image style={{alignItems: "center", width: 103,height: 22}} source={logo}/>
          <View style={styles.rightNavbar}>
            <TouchableOpacity>
              <Icon style={styles.navIcon} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navIcon} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.body}>
          <FlatList 
            data={data.items}
            renderItem={(video) => <VideoFrame video={video.item}/>}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: "#e3e3e3"}}></View>}
          />
        </ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon  name="home" size={25} />
            <Text style={styles.tabTitle} >Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon  name="whatshot" size={25} />
            <Text style={styles.tabTitle} >Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon  name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon  name="folder" size={25} />
            <Text style={styles.tabTitle} >Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height:64,
    backgroundColor: "white",
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  rightNavbar: {
    flexDirection: "row"
  },
  navIcon: {
    marginLeft: 20
  },
  body: {
    backgroundColor: "white",
    flex: 1
  },
  tabBar: {
    height: 65,
    backgroundColor: "white",
    borderColor: "#e5e5e5",
    borderTopWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center"
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    padding: 3
  }
})