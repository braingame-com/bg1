import { useState } from 'react';
import { View, Modal, SafeAreaView } from 'react-native';
import { s, t } from '../setup/styles';
import { useTheme } from '@react-navigation/native';
import { Button, Row, InputField, Divider } from '../setup/primitives';
import { Heading, Text, Small } from '../setup/typography';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export function AccountModal({
  navigation,
  modalVisible,
  setModalVisible,
  flow,
  setFlow,
}) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ shown: false, message: '' });
  const handleAccountFormSubmit = () => {
    if (flow === 'Create account') {
      // Create account
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setToast({ shown: false, message: '' });
          const user = userCredential.user;
          console.log(user);
          setModalVisible(false);
          navigation.navigate('Dashboard');
        })
        .catch((error) => {
          if (error.message.includes('invalid-email')) {
            setToast({ shown: true, message: 'Invalid email' });
          }
          if (error.message.includes('internal-error')) {
            setToast({
              shown: true,
              message: 'Internal error. Check password?',
            });
          }
          if (error.message.includes('email-already-in-use')) {
            setToast({ shown: true, message: 'Email already in use' });
          }
        });
    } else {
      // Log in
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setToast({ shown: false, message: '' });
          const user = userCredential.user;
          console.log(user);
          setModalVisible(false);
          navigation.navigate('Dashboard');
        })
        .catch((error) => {
          if (error.message.includes('invalid-email')) {
            setToast({ shown: true, message: 'Invalid email' });
          }
          if (error.message.includes('internal-error')) {
            setToast({
              shown: true,
              message: 'Internal error. Check password?',
            });
          }
          if (error.message.includes('wrong-password')) {
            setToast({ shown: true, message: 'Wrong password' });
          }
          if (error.message.includes('email-already-in-use')) {
            setToast({ shown: true, message: 'Email already in use' });
          }
          if (error.message.includes('user')) {
            setToast({ shown: true, message: 'User not found' });
          }
          console.log(error.message);
        });
    }
  };
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            ...s.flex,
            paddingHorizontal: t.xl,
            paddingVertical: t.xl * 2,
            backgroundColor: colors.background,
          }}
        >
          <View style={{ maxWidth: t.medium * 30, margin: 'auto' }}>
            <Row
              style={{
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Button
                type="Naked"
                icon="times"
                iconType="fas"
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Button
                type="Naked"
                text={flow === 'Create account' ? 'Log In' : 'Create Account'}
                onPress={() => {
                  setToast({ shown: false, message: '' });
                  flow === 'Create account'
                    ? setFlow('Log in')
                    : setFlow('Create account');
                }}
                contentStyle={{ color: colors.primary }}
              />
            </Row>
            <Heading style={{ marginTop: t.xl * 2 }}>
              Welcome{flow === 'Create account' ? ', friend.' : ' back!'}
            </Heading>
            <Text style={{ marginTop: t.xs, marginBottom: t.large }}>
              Let's get you{' '}
              {flow === 'Create account' ? 'signed up!' : 'logged in.'}
            </Text>
            {flow === 'Log in' && (
              <View>
                <Button
                  type="Secondary"
                  text="Continue with Google"
                  icon="google"
                  style={{ marginVertical: t.xs }}
                  onPress={() => console.log('Google')}
                />
                <Button
                  type="Secondary"
                  text="Continue with Apple"
                  icon="apple"
                  style={{ marginVertical: t.xs }}
                  onPress={() => console.log('Apple')}
                />
                <Small
                  style={{
                    marginVertical: t.xs,
                    backgroundColor: colors.background,
                    alignSelf: 'center',
                    color: t.grey,
                    paddingHorizontal: t.xs,
                    zIndex: 999,
                  }}
                >
                  OR
                </Small>
                <Divider style={{ position: 'relative', top: -t.medium }} />
              </View>
            )}
            <InputField
              icon="envelope"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <InputField
              icon="unlock"
              iconType="fas"
              placeholder="Password"
              textContentType={'password'}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            {toast.shown && (
              <Row style={{ marginTop: t.medium }}>
                <Button
                  type="Naked"
                  icon="exclamation-circle"
                  iconType={'fas'}
                  contentStyle={{ fontSize: t.medium, color: t.negative }}
                />
                <Text
                  style={{
                    color: t.negative,
                    marginLeft: t.xs,
                  }}
                >
                  {toast.message}
                </Text>
              </Row>
            )}
            <Button
              type="Primary"
              text={flow}
              style={{ marginTop: t.large }}
              onPress={handleAccountFormSubmit}
            />
            {flow === 'Log in' && (
              <Button
                type="Naked"
                text="Forgot password?"
                style={{ marginTop: t.large }}
                contentStyle={{ color: t.primary, fontSize: t.small }}
              />
            )}
            <Small style={{ color: t.grey, marginTop: t.xl * 2 }}>
              By continuing, you agree to our{' '}
              <Small
                style={{ fontSize: t.small, color: t.primary, padding: 0 }}
              >
                Terms of Service{' '}
              </Small>
              and acknowledge that you understand our{' '}
              <Small
                style={{ fontSize: t.small, color: t.primary, padding: 0 }}
              >
                Privacy Policy
              </Small>
              .
            </Small>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
