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

import AnimatedTyping from '../../../AnimatedTyping';
import AuthContext from '../../context/auth/AuthContext';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import styles from './styles';

const SIZE = 100.0;

const LoginScreen = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const authContext = useContext(AuthContext);

  let [nextPressed, setNextPressed] = useState(false);
  const colorScheme = Appearance.getColorScheme();

  const {signin} = authContext;

  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
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
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

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

      <Text style={styles.legend}>Имя пользователя</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => setUser({...user, username: val})}
        value={user.username}
        placeholderTextColor={'#000000'}
        placeholder=""
      />

      <Text style={styles.legend}>Пароль</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => setUser({...user, password: val})}
        value={user.password}
        placeholderTextColor={'#000000'}
        placeholder=""
      />

      <TouchableOpacity onPress={signin} style={styles.loginWrapper}>
        <Text style={styles.login}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
