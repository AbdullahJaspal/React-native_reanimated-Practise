import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Practise = () => {
  const rotate = useSharedValue(0);
  const rotate1 = useSharedValue(0);
  const rotate2 = useSharedValue(0);
  const rotate3 = useSharedValue(0);
  const rotate4 = useSharedValue(0);
  const rotate5 = useSharedValue(0);
  const rotate6 = useSharedValue(0);
  const rotate7 = useSharedValue(0);
  const rotate8 = useSharedValue(0);
  const handlePress = () => {
    rotate.value = withTiming(40, {
      duration: 500,
    });
    rotate1.value = withTiming(80, {
      duration: 500,
    });
    rotate2.value = withTiming(120, {
      duration: 500,
    });
    rotate3.value = withTiming(160, {
      duration: 500,
    });
    rotate4.value = withTiming(200, {
      duration: 500,
    });
    rotate5.value = withTiming(240, {
      duration: 500,
    });
    rotate6.value = withTiming(280, {
      duration: 500,
    });
    rotate7.value = withTiming(320, {
      duration: 500,
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate1.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate2.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate3.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles4 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate4.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles5 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate5.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles6 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate6.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);

  const animatedStyles7 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate7.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles8 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `0deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={[animatedStyles, styles.palette('yellow')]} />
      <Animated.View style={[animatedStyles1, styles.palette('orange')]} />
      <Animated.View style={[animatedStyles2, styles.palette('pink')]} />
      <Animated.View style={[animatedStyles3, styles.palette('blue')]} />
      <Animated.View style={[animatedStyles4, styles.palette('purple')]} />
      <Animated.View style={[animatedStyles5, styles.palette('brown')]} />
      <Animated.View style={[animatedStyles6, styles.palette('black')]} />
      <Animated.View style={[animatedStyles7, styles.palette('indigo')]} />
      <Animated.View style={[animatedStyles8, styles.palette('leveder')]} />

      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '#E8AA87',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
        }}>
        <Text>"Click me"</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  palette: color => {
    return {
      width: 40,
      height: 100,
      borderRadius: 40,
      backgroundColor: color,
      position: 'absolute',
      transform: [{translateY: -(100 - 40) / 2}],
    };
  },
});

export default Practise;

// import React from 'react';
// import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Animated, {
//   Easing,
//   ReduceMotion,
//   useAnimatedStyle,
//   useSharedValue,
//   withRepeat,
//   withSequence,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';

// const Practise = () => {
//   const plaette1 = useSharedValue(0);
//   const plaette2 = useSharedValue(0);
//   const plaette3 = useSharedValue(0);
//   const plaette4 = useSharedValue(0);
//   const plaette5 = useSharedValue(0);
//   const plaette6 = useSharedValue(0);
//   const plaette7 = useSharedValue(0);
//   const plaette8 = useSharedValue(0);
//   const plaette9 = useSharedValue(0);

//   const handlePress = () => {
//     plaette1.value = withSpring(40);
//     plaette2.value = withSpring(80);
//     plaette3.value = withSpring(120);
//     plaette4.value = withTiming(160);
//     plaette5.value = withTiming(200);
//     plaette6.value = withTiming(240);
//     plaette7.value = withTiming(280);
//     plaette8.value = withTiming(320);
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Animated.View
//         style={[
//           styles.palette('red'),
//           {transform: [{rotate: `${plaette1}deg`}]},
//         ]}
//       />
//       <Animated.View style={styles.palette('green')} />
//       <Animated.View style={styles.palette('yellow')} />
//       <Animated.View style={styles.palette('orange')} />
//       <Animated.View style={styles.palette('pink')} />
//       <Animated.View style={styles.palette('blue')} />
//       <Animated.View style={styles.palette('purple')} />
//       <Animated.View style={styles.palette('violet')} />
//       <Animated.View style={styles.palette('brown')} />
//       <TouchableOpacity
//         onPress={() => {
//           handlePress();
//         }}
//         style={{
//           position: 'absolute',
//           height: 40,
//           width: 80,
//           backgroundColor: '#ACA4FF',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 10,
//           bottom: 20,
//         }}>
//         <Text style={{color: 'white'}}>Animate</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   palette: (color, deg) => {
//     return {
//       width: 60,
//       height: 130,
//       borderRadius: 50,
//       position: 'absolute',
//       backgroundColor: color,
//       zIndex: deg,
//       transform: [{translateY: (130 - 40) / 2}, {translateY: -(130 - 45) / 2}],
//     };
//   },
// });

// export default Practise;
