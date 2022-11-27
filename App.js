import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  Easing,
  Button,
  TextInput,
} from 'react-native';
import {Appearance} from 'react-native';

import AnimatedTyping from './AnimatedTyping';
import Mindfully from './src/assets/mindfully';
/*
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
*/
const SIZE = 100.0;

const App = () => {
  let [greetingCompleted, setGreetingCompleted] = useState(false);
  let [nextPressed, setNextPressed] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  console.log('colorScheme: ', colorScheme);

  /*
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0.5, {duration: 500});
    scale.value = withTiming(2);
  }, []);*/

  const leftValue = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(0))[0];
  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 50,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutBall = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const translation = useRef(new Animated.Value(300)).current;
  const translation2 = useRef(new Animated.Value(300)).current;
  const translation3 = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    /*
    Animated.timing(translation, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
*/
    Animated.sequence([
      Animated.timing(translation, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(translation2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(translation3, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      console.log('finished: ', finished);
      if (finished) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }).start();
        setNextPressed(true);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 50,
          flex: 1,
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            height: 100,

            opacity: translation.interpolate({
              inputRange: [0, 300],
              outputRange: [1, 1],
            }),
            transform: [{translateY: translation}],
          }}>
          <Mindfully />
        </Animated.View>
        <Animated.Text
          style={{
            height: 100,
            opacity: translation2.interpolate({
              inputRange: [0, 50, 300],
              outputRange: [0, 1, 0],
            }),
            fontSize: 24,
            fontWeight: '400',
            lineHeight: 31,
            color: '#666666',
            transform: [{translateY: translation2}],
          }}>
          Welcome
        </Animated.Text>
        <Animated.View
          style={{
            height: 100,
            position: 'absolute',
            marginTop: 80,
            opacity: translation3.interpolate({
              inputRange: [0, 150, 300],
              outputRange: [1, 1, 0],
            }),
            transform: [{translateY: translation3}],
            /* transform: [
              {translateY: translation},
              {
                rotate: translation.interpolate({
                  inputRange: [0, 400],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],*/
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 31,
              color: '#666666',
            }}>
            {'We’re Mindfully.\nWhat’s your name?'}
          </Text>
        </Animated.View>
        <Animated.View style={[{width: '90%'}, {opacity: fadeAnim}]}>
          {nextPressed && <AnimatedTyping text={['Hello my name is...']} />}
          <TextInput placeholder="Tap here to type your name" />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#7253CC',
              padding: 9,
            }}>
            <Text>I already have a login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
