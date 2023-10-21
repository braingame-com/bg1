import { useState } from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t } from '../setup/styles';
import { Button, Row } from '../design/primitives';
import { Title, Text } from '../design/typography';
import { AccountModal } from '../components/AccountModal';

export const AccountFlow = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [flow, setFlow] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Title>Start your journey</Title>
      <Image
        source={require('../assets/illustrations/google-robot.png')}
        style={{
          width: t.m ** 2,
          height: t.m ** 2,
          marginVertical: t.l,
          borderRadius: t.m ** 3,
        }}
      />
      <Button
        type="Secondary"
        text="Continue with Google"
        icon="google"
        iconType="fab"
        onPress={() => console.log('Google')}
        style={{ marginVertical: t.xs }}
      />
      <Button
        type="Secondary"
        text="Continue with Apple"
        icon="apple"
        iconType="fab"
        onPress={() => console.log('Apple')}
        style={{ marginVertical: t.xs }}
      />
      <Button
        type="Secondary"
        text="Continue with email"
        icon="envelope"
        style={{ marginVertical: t.xs }}
        onPress={() => {
          setFlow('Create account');
          setModalVisible(true);
        }}
      />
      <Row style={{ marginTop: t.l }}>
        <Text>Already a user?</Text>
        <Button
          type="Naked"
          text="Sign in"
          onPress={() => {
            setFlow('Log in');
            setModalVisible(true);
          }}
          style={{ marginLeft: t.xs }}
          contentStyle={{ color: colors.primary }}
        />
      </Row>
      <AccountModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        flow={flow}
        setFlow={setFlow}
        navigation={navigation}
      />
    </View>
  );
};
