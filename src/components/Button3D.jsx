import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Config from '../config';
import * as Routes from '../Routes';

/**
 * 
 * @param {Object} props 
 * @param {String} props.color color context
 * @param {Number} props.height height of the button container
 * @param {Number} props.width width of the button container
 * @param {Function} props.onPress onPress handler
 * @param {String} props.type "FA" for <FontAwesomeIcon>, default is <Text>
 * @param {String} props.label button label, if type is "FA" the label is the name of the icon
 * 
 * @return {<Pressable>} An animated button with a 3D effect
 */
const Button3D = (props) => {

    useEffect(() => {
        const unsubscribe = Routes.mainNavRef.current?.addListener('state', () => {
            (Routes.getRouteState(Routes.mainNavRef) !== undefined && Routes.getRouteState(Routes.mainNavRef).name !== props.route) && handleButtonUp();
        });
    
        return unsubscribe;
    });
    
    const animation = new Animated.Value(0);

    const heightStyle = {
        marginTop: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-4, 0],
        }),
        paddingBottom: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [4, 0],
        }),
    };

    const baseStyle = {
        backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#031721', '#89AFC1']
        })
    };

    const handleButtonDown = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 250,
        }).start();
    };

    const handleButtonUp = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
        }).start();
    };

    return (
        <Pressable onPressIn={handleButtonDown} onPress={() => (props.route !== undefined) ? Routes.mainNavigate(props.route, { name: 'Test' }) : props.onPress}>
            <View style={[styles.container, {height: props.height}, {width: props.width}]}>
                <Animated.View style={[styles.base, baseStyle]}>
                    <Animated.View style={[styles.height, heightStyle]}>
                        <Animated.View style={styles.top}>
                            {(props.type === 'FA') 
                            ? <FontAwesomeIcon style={[Config.styles.iconFA, {color: Config.getColor(props.color, 7)}]} icon={props.label} size={24} />
                            : <Text style={styles.text} selectable={false}>{props.label}</Text>
                            }
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </View>
        </Pressable>
    )
}

export { Button3D };

// , {top: (props.align === 'top' ? 4 : undefined)}, {bottom: (props.align === 'top' ? undefined : 10)}

const styles = StyleSheet.create({
    container: {
        // position: "relative",
        height: 40,
        width: 80,
        padding: 3,
        backgroundColor: '#031721',
        borderRadius: 11,
        // padding: 2,
    },
    base: {
        flex: 1,
        padding: 2,
        backgroundColor: '#89AFC1',
        borderRadius: 11,
    },
    height: {
        flex: 1,
        backgroundColor: '#0B2E3F',
        borderRadius: 10,
    },
    top: {
        height: "100%",
        backgroundColor: '#3B6A82',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F2F7F9',
    },
});