import { View, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { s, t } from '../setup/styles';
import { useTheme } from '@react-navigation/native';
import { Button, Row, InputField, Divider } from '../components/primitives';
import { Heading, Text, Small } from '../components/typography';
import { reloadAsync } from 'expo-updates';
import { ColorShader } from '@shopify/react-native-skia';

export function AccountModal({ modalVisible, setModalVisible, flow, setFlow }) {
  const { colors } = useTheme();
  const handleAccountFormSubmit = () => {
    if (flow === 'Create account') {
      // Create account
      console.log('Create account');
    } else {
      // Log in
      console.log('Log in');
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
          <Row
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Button
              type="Naked"
              icon="x"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              type="Naked"
              text={flow === 'Create account' ? 'Log In' : 'Create Account'}
              onPress={() =>
                flow === 'Create account'
                  ? setFlow('Log in')
                  : setFlow('Create account')
              }
              contentStyle={{ color: colors.primary }}
            />
          </Row>
          <Heading style={{ marginTop: t.xl }}>
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
                svg="Google"
                style={{ marginVertical: t.xs }}
                onPress={() => console.log('Google')}
              />
              <Button
                type="Secondary"
                text="Continue with Apple"
                svg="Apple"
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
          <InputField icon="mail" placeholder="Email" />
          <InputField
            icon="unlock"
            placeholder="Password"
            textContentType={'password'}
            secureTextEntry={true}
          />
          <Row style={{ justifyContent: 'space-between' }}>
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
          </Row>
          <Small style={{ color: t.grey, marginTop: t.large }}>
            By continuing, you agree to our{' '}
            <Small style={{ fontSize: t.small, color: t.primary, padding: 0 }}>
              Terms of Service{' '}
            </Small>
            and acknowledge that you understand our{' '}
            <Small style={{ fontSize: t.small, color: t.primary, padding: 0 }}>
              Privacy Policy
            </Small>
            .
          </Small>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
