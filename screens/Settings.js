import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { s, t } from '../setup/styles';
import { ThemeSelector } from '../components/ThemeSelector';
import { Heading, Text } from '../setup/typography';
import { Icon, Button } from '../setup/primitives';
import { auth } from '../firebaseConfig';
import { useTheme } from '@react-navigation/native';

// import { onAuthStateChanged } from 'firebase/auth';

let userIsLoggedIn = false;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log('User is signed out');
//     const uid = user.uid;
//     console.log(user.email);
//     userIsLoggedIn = true;
//   } else {
//     console.log('User is signed out');
//     userIsLoggedIn = false;
//   }
// });

let subscriber = false;

export const Settings = ({ navigation }) => {
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
          icon={subscriber ? 'smile' : 'heart'}
          onPress={() => console.log(subscriber ? 'view donations' : 'donate')}
          style={{ marginTop: t.large, marginLeft: t.medium }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountSettings = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Heading
        style={{
          color: colors.text,
          marginTop: t.large,
          marginBottom: t.small,
        }}
      >
        Account
      </Heading>

      <SettingsLink>
        <Icon name="bell" size="secondary" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>
          Manage notifications
        </Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="user" size="secondary" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>
          Change username or email
        </Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="lock" size="secondary" type="fas" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Change password</Text>
      </SettingsLink>

      <SettingsLink style={{ opacity: 0.5 }}>
        <Icon name="trash" color={t.negative} size="secondary" type="fas" />
        <Text style={{ ...s.error_text, ...s.task_mini, ...s.m_left }}>
          Delete account
        </Text>
      </SettingsLink>
    </View>
  );
};

const Support = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.container,
        ...s.m_horizontal,
        marginTop: -t.small,
      }}
    >
      <Heading
        style={{
          color: colors.text,
          marginTop: t.large,
          marginBottom: t.small,
        }}
      >
        Support
      </Heading>

      <SettingsLink>
        <Icon name="question-circle" size="secondary" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>
          How do I use this app?
        </Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="message" size="secondary" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Contact us</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="file" size="secondary" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Documentation</Text>
      </SettingsLink>
    </View>
  );
};

const Links = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.container,
        ...s.m_horizontal,
        marginTop: -t.small,
      }}
    >
      <Heading
        style={{
          color: colors.text,
          marginTop: t.large,
          marginBottom: t.small,
        }}
      >
        Links
      </Heading>

      <SettingsLink>
        <Icon name="bug" size="secondary" type="fas" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Report a bug</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="gavel" size="secondary" type="fas" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Legal policies</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="github-alt" size="secondary" type="fab" />
        <Text style={{ ...s.task_mini, ...s.m_left }}>Github</Text>
        <Icon name="code" type="fas" style={{ ...s.m_horizontal }} />
        <Text style={{ color: t.grey }}>v1.1.1</Text>
      </SettingsLink>
    </View>
  );
};

const SettingsLink = ({ children, style }) => (
  <TouchableOpacity>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: t.xs,
        ...style,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
