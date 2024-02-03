import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const size = 100;
const Loading = () => {
  const progress = useSharedValue(0);
  const scale = useSharedValue(0);
  const radius = useSharedValue(0);
  const rotate = useSharedValue('360deg');

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}],
      borderRadius: radius.value,
    };
  }, []);
  const animatedX = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scaleX: scale.value}],
    };
  }, []);
  const animatedY = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{translateX: radius.value}],
    };
  }, []);
  const rotateleft = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {rotate: rotate.value},
        // {translateX: radius.value},
        {scale: scale.value},
      ],
      borderRadius: radius.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(1);
    scale.value = withRepeat(withSpring(1), -1, true);
    radius.value = withRepeat(withTiming(100), -1, true);
    rotate.value = withRepeat(withSpring('0deg'), -1, true);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: size,
            width: size,
            marginBottom: 10,
          },
          animatedStyles,
        ]}></Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: size,
            width: size,
            marginBottom: 10,
          },
          animatedX,
        ]}></Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: size,
            marginBottom: 10,
            width: size,
          },
          animatedX,
        ]}></Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: size,
            marginBottom: 10,
            width: size,
          },
          rotateleft,
        ]}></Animated.View>
    </View>
  );
};

export default Loading;
