import React, {useRef} from 'react';
import BorderInput from './BorderInput';

const SignInForm = ({isSignUp, onSubmit, form, createChangeTextHandler}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <>
      <BorderInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <BorderInput
        hasMarginBottom={isSignUp}
        placeholder="비밀번호"
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        secureTextEntry
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderInput
          placeholder="비밀번호 확인"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}
          ref={confirmPasswordRef}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
};

export default SignInForm;
