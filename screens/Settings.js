import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { useThemeUpdate } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { useTheme } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { SettingsHeader } from '../components/SettingsHeader';
import { ThemeSelector } from '../components/ThemeSelector';
import { AccountSettings } from '../components/AccountSettings';
import { Support } from '../components/Support';
import { Links } from '../components/Links';
import { Text } from '../components/typography';
import { Button } from '../components/primitives';
import { isMobile } from '../utilities/helpers';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

let userIsLoggedIn = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed out');
    const uid = user.uid;
    console.log(user.email);
    userIsLoggedIn = true;
  } else {
    console.log('User is signed out');
    userIsLoggedIn = false;
  }
});

let subscriber = false;

export function Settings({ route, navigation }) {
  const { colors } = useTheme();
  const handleSignOut = () => {
    auth.signOut();
    userIsLoggedIn = false;
    navigation.navigate('Account Flow');
  };
  return (
    <SafeAreaView style={{ ...s.container, flex: 1, ...s.m_top }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userIsLoggedIn && (
          <View>
            <Text>Signed in as: {auth.currentUser?.email}</Text>
            <Button
              type="Secondary"
              text="Sign out"
              style={{ marginTop: t.xs }}
              onPress={handleSignOut}
            />
          </View>
        )}
        <ThemeSelector />
        <AccountSettings />
        <Support />
        <Links />
        <Button
          type="Primary"
          text={subscriber ? 'View donations' : 'Donate'}
          icon={subscriber ? 'smiley' : 'code-of-conduct'}
          onPress={() => console.log(subscriber ? 'view donations' : 'donate')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
