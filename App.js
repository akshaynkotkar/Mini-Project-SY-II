import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Send password reset email to the user's email address
    // You can use a library like Firebase Authentication to handle this process

    Alert.alert('Password reset email sent', 'Please check your email to reset your password');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;