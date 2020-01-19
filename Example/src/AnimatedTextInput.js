import React from 'react';
import {Animated, TextInput} from 'react-native';

// import { Container } from './styles';

export default React.forwardRef((props, ref) => {
  const Component = Animated.createAnimatedComponent(TextInput);

  return <Component {...props} ref={ref} />;
});
