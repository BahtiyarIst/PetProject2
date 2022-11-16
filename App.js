import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 100.0;

const App = () => {
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
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {height: SIZE, width: SIZE, backgroundColor: 'blue'},
          reanimatedStyle,
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
