import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class VideoFrame extends Component {
    render() {
        const video = this.props.video;
        return (
            <View style={styles.container}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height: 200}} />
                <View style={styles.videoFooter}>
                    <Image source={{uri:"https://randomuser.me/api/portraits/men/0.jpg"}} style={{width: 50, height: 50, borderRadius: 25}}/>
                    <View style={styles.videoDetails}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoDescription}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount, 1) +" " + since()} </Text>
                    </View>
                    <TouchableOpacity>
                            <Icon name="more-vert" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function since() {
    const today = Date.now()
    return today
}

function nFormatter(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    videoFooter: {
        flexDirection: "row",
        padding: 10,
    },
    videoDetails: {
        paddingHorizontal: 10,
        flex: 1
    },
    videoTitle: {
        fontSize: 16,
        color: "#3c3c3c"
    },
    videoDescription: {
        fontSize: 14,
        color: "#666"
    }
})