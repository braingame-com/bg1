import { useState } from 'react';
import { View, Modal, SafeAreaView } from 'react-native';
import { s, t } from '../setup/styles';
import { useTheme, NavigationProp, RouteProp } from '@react-navigation/native';
import { Button, Row, InputField, Divider } from '../design/primitives';
import { Heading, Text, Small } from '../design/typography';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

interface AccountModalProps {
  navigation: NavigationProp<any>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  flow: string;
  setFlow: React.Dispatch<React.SetStateAction<string>>;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  navigation,
  modalVisible,
  setModalVisible,
  flow,
  setFlow,
}) => {
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
          <View style={{ maxWidth: t.m * 30, margin: 'auto' }}>
            <Row
              style={{
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Button
                type="Naked"
                icon="times"
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
            <Text style={{ marginTop: t.xs, marginBottom: t.l }}>
              Let's get you{' '}
              {flow === 'Create account' ? 'signed up!' : 'logged in.'}
            </Text>
            {flow === 'Log in' && (
              <View>
                <Button
                  type="Secondary"
                  text="Continue with Google"
                  icon="google"
                  iconType="fab"
                  style={{ marginVertical: t.xs }}
                  onPress={() => console.log('Google')}
                />
                <Button
                  type="Secondary"
                  text="Continue with Apple"
                  icon="apple"
                  iconType="fab"
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
                <Divider style={{ position: 'relative', top: -t.m }} />
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
              placeholder="Password"
              textContentType={'password'}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            {toast.shown && (
              <Row style={{ marginTop: t.m }}>
                <Button
                  type="Naked"
                  icon="exclamation-circle"
                  contentStyle={{ fontSize: t.m, color: t.negative }}
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
              style={{ marginTop: t.l }}
              onPress={handleAccountFormSubmit}
            />
            {flow === 'Log in' && (
              <Button
                type="Naked"
                text="Forgot password?"
                style={{ marginTop: t.l }}
                contentStyle={{ color: t.primary, fontSize: t.s }}
              />
            )}
            <Small style={{ color: t.grey, marginTop: t.xl * 2 }}>
              By continuing, you agree to our{' '}
              <Small style={{ fontSize: t.s, color: t.primary, padding: 0 }}>
                Terms of Service{' '}
              </Small>
              and acknowledge that you understand our{' '}
              <Small style={{ fontSize: t.s, color: t.primary, padding: 0 }}>
                Privacy Policy
              </Small>
              .
            </Small>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
