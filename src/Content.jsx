import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
// import { Link, useLocation } from "react-router-dom";
// import './header.css';

const Content = () => {
    
    return (
        <View style={styles.content}>
            <ScrollView>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mollis est, iaculis euismod tortor molestie id. Quisque vel est volutpat, ullamcorper quam sed, tempus urna. Praesent placerat nec ligula id fermentum. Sed sit amet facilisis ante, ac euismod mauris. Cras ullamcorper risus sed magna tincidunt, vel commodo turpis convallis. Ut finibus nisi ipsum, quis consectetur diam facilisis nec. Donec volutpat pulvinar sollicitudin. Ut dignissim augue nisl, id pretium augue pharetra in. Ut augue libero, gravida at sem vitae, bibendum rhoncus tellus. Vivamus faucibus sapien a erat aliquam porta. Curabitur consectetur magna lorem, non semper quam eleifend quis. Vivamus metus dui, faucibus eget neque ac, accumsan luctus libero. Nullam rutrum orci at quam convallis rutrum et vitae ligula.

    Pellentesque ante felis, bibendum nec mi id, ornare mollis mauris. Suspendisse in nisl pulvinar, cursus enim sit amet, vulputate sapien. Donec condimentum molestie nisl, eu posuere ante sollicitudin a. Mauris elementum iaculis quam, nec pellentesque arcu porta id. Maecenas et arcu enim. Maecenas commodo ultrices elementum. Morbi quis finibus lectus.

    Maecenas pretium velit velit, nec dignissim metus iaculis sit amet. Pellentesque aliquam elit elementum purus consequat ultricies. Curabitur neque odio, ultricies ut molestie quis, euismod sed eros. In faucibus interdum felis at aliquet. Cras bibendum est sed ligula molestie tincidunt. Nam eleifend feugiat dolor. Pellentesque porta velit in aliquam accumsan.

    Fusce faucibus turpis eu aliquet lobortis. Nulla pretium pulvinar efficitur. Phasellus vitae euismod erat, elementum dignissim nunc. Integer libero diam, posuere id risus in, ultrices hendrerit libero. Donec libero lacus, convallis ut leo id, gravida tincidunt enim. Ut at nisi vitae leo pulvinar viverra sit amet eu lorem. Sed orci metus, mollis eget tellus vel, blandit suscipit felis.

    Fusce tincidunt vehicula odio, in ullamcorper dui rhoncus vel. Pellentesque placerat tortor sit amet odio rhoncus tristique. Ut viverra ante quis tempor gravida. Suspendisse potenti. Nulla ac turpis eros. Etiam eros est, aliquet eu tincidunt et, laoreet non massa. Vestibulum in dolor libero. Pellentesque id rutrum lectus. Nunc ligula est, eleifend et bibendum non, mollis id purus. Donec et dignissim neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec egestas nulla mi, in tristique eros molestie mollis. Morbi porttitor tempus pellentesque. Quisque urna ex, accumsan quis commodo vitae, fermentum sed augue. Nunc vestibulum enim velit, at dignissim ligula interdum id. Cras id rhoncus dolor, sit amet ultrices lectus.
                </Text>
            </ScrollView>
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({
    content: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {
        flex: 1,
    }
  });