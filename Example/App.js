import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import AnimatedTextInput from './src/AnimatedTextInput';

import styles from './styles';

export default function App() {
  const animatedInputRef = useRef(null);
  const normalInputRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{color: '#333'}}
            onPress={() => {
              animatedInputRef.current.focus();
            }}>
            FOCUS ANIMATED INPUT
          </Text>
        </TouchableOpacity>
        <AnimatedTextInput
          style={styles.input}
          placeholder="Animated Text Input"
          placeholderTextColor="#62dafb"
          ref={animatedInputRef}
        />
      </View>

      <View style={{width: '100%'}}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{color: '#333'}}
            onPress={() => {
              normalInputRef.current.focus();
            }}>
            FOCUS NORMAL INPUT
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Normal Text Input"
          placeholderTextColor="#62dafb"
          ref={normalInputRef}
        />
      </View>
    </View>
  );
}
