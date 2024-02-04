import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Practise = () => {
  const [bg, setBg] = useState('white');
  const rotate = useSharedValue(0);
  const height = useSharedValue(50);
  const rotate1 = useSharedValue(0);
  const rotate2 = useSharedValue(0);
  const rotate3 = useSharedValue(0);
  const rotate4 = useSharedValue(0);
  const rotate5 = useSharedValue(0);
  const rotate6 = useSharedValue(0);
  const rotate7 = useSharedValue(0);
  const bgHeight = useSharedValue(70);
  const bgwidth = useSharedValue(70);
  const bgLeft = useSharedValue('42.5%');
  const handlePress = color => {
    setBg(color);
    rotate.value = withTiming(0, {
      duration: 500,
    });
    rotate1.value = withTiming(rotate1.value === 0 ? 45 : 0, {
      duration: 500,
    });
    rotate2.value = withTiming(rotate2.value === 0 ? 90 : 0, {
      duration: 500,
    });
    rotate3.value = withTiming(rotate3.value === 0 ? 135 : 0, {
      duration: 500,
    });
    rotate4.value = withTiming(rotate4.value === 0 ? 180 : 0, {
      duration: 500,
    });
    rotate5.value = withTiming(rotate5.value === 0 ? 225 : 0, {
      duration: 500,
    });
    rotate6.value = withTiming(rotate6.value === 0 ? 270 : 0, {
      duration: 500,
    });
    rotate7.value = withTiming(rotate7.value === 0 ? 315 : 0, {
      duration: 500,
    });
    height.value = withTiming(height.value === 50 ? 100 : 50, {
      duration: 500,
    });
    bgHeight.value = withTiming(bgHeight.value === 70 ? 180 : 70, {
      duration: 500,
    });
    bgwidth.value = withTiming(bgwidth.value === 70 ? 180 : 70, {
      duration: 500,
    });
    bgLeft.value = withTiming(bgLeft.value === '42.5%' ? '28.5%' : '42.5%', {
      duration: 500,
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate1.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate2.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate3.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles4 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate4.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles5 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate5.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles6 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate6.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles7 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate7.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles8 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `0deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);

  const bgAnimated = useAnimatedStyle(() => {
    return {
      width: bgwidth.value,
      height: bgHeight.value,
      left: bgLeft.value,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg,
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: '#969696',
            borderRadius: 100,
            position: 'absolute',
            top: 260,
            zIndex: 0,
          },
          bgAnimated,
        ]}></Animated.View>
      <View
        style={{
          position: 'absolute',
          top: 250,
          left: '45%',
          backgroundColor: 'red',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#FFC0C0');
          }}>
          <Animated.View style={[animatedStyles8, styles.palette('#FFC0C0')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#E3B4FF');
          }}>
          <Animated.View style={[animatedStyles, styles.palette('#E3B4FF')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#BAB4FF');
          }}>
          <Animated.View style={[animatedStyles1, styles.palette('#BAB4FF')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#CCFFF0');
          }}>
          <Animated.View style={[animatedStyles2, styles.palette('#CCFFF0')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#D9FFCC');
          }}>
          <Animated.View style={[animatedStyles3, styles.palette('#D9FFCC')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#FBFFCC');
          }}>
          <Animated.View style={[animatedStyles4, styles.palette('#FBFFCC')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#FFEBCC');
          }}>
          <Animated.View style={[animatedStyles5, styles.palette('#FFEBCC')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#B4D7FF');
          }}>
          <Animated.View style={[animatedStyles6, styles.palette('#B4D7FF')]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress('#F1D9D9');
          }}>
          <Animated.View style={[animatedStyles7, styles.palette('#F1D9D9')]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  palette: color => {
    return {
      width: 50,
      backgroundColor: color,
      borderRadius: 40,
      position: 'absolute',
      transform: [{translateY: -(100 - 40) / 2}],
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      top: 20,
    };
  },
});

export default Practise;
