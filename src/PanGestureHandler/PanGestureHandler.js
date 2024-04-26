import react from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const SIZE = 80.0;

const Basics = () => {
  const start = useSharedValue({x: 0, y: 0});
  //   const offset = useSharedValue({x: 0, y: 0});
  const offsetx = useSharedValue(0);
  const offsety = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = event => {
    width.value = event.nativeEvent.layout.width;
  };
  //   const pan = Gesture.Pan()
  //     .onBegin(event => {})
  //     .onChange(event => {
  //       offset.value = {
  //         x: event.translationX + start.value.x,
  //         y: event.translationY + start.value.y,
  //       };
  //     })
  //     .onEnd(() => {
  //       start.value = {
  //         x: offset.value.x,
  //         y: offset.value.y,
  //       };
  //     })
  //     .onFinalize(() => {});

  const decay = Gesture.Pan()
    .onBegin(() => {})
    .onChange(event => {
      offsetx.value += event.changeX;
      offsety.value += event.changeY;
    })
    .onFinalize(event => {
      offsetx.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
      offsety.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
    });
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offsetx.value}, {translateY: offsety.value}],
  }));
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GestureDetector gesture={decay}>
        <Animated.View style={[styles.square, animatedStyles]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: '#B58DF1',
    borderRadius: 10,
  },
});
export default Basics;
