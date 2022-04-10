import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BorderInput from '../compoenets/BorderInput';
import CustomButton from '../compoenets/CustomButton';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <Text style={styles.text}>PublicGallery</Text>
      <View style={styles.form}>
        <BorderInput hasMarginBottom />
        <BorderInput />
        <View style={styles.buttons}>
          <CustomButton title="로그인" hasMarginBottom />
          <CustomButton title="회원가입" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

export default SignInScreen;
