import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Appearance} from 'react-native';

import AnimatedTyping from '../../AnimatedTyping';
import AuthContext from '../context/auth/AuthContext';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const SIZE = 100.0;

const MainScreen = () => {
  const authContext = useContext(AuthContext);

  let [nextPressed, setNextPressed] = useState(false);
  const colorScheme = Appearance.getColorScheme();

  const {signin} = authContext;

  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    console.log('progress.value', progress.value);
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * 2 * Math.PI}rad`},
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(0.5), 3, true);
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: 100,
            backgroundColor: 'blue',
          },
          reanimatedStyle,
        ]}></Animated.View>
      <TouchableOpacity style={{marginTop: 150}}>
        <Text style={{fontWeight: 'bold'}}>Başla</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
