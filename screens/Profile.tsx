import { View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { s, t } from '../setup/styles';
import { ThemeSelector } from '../components/ThemeSelector';
import { Heading, Small, Text, Title } from '../design/typography';
import { Icon, Button, Divider } from '../design/primitives';
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

export const Profile = ({ navigation }: any) => {
  const { colors } = useTheme();
  const handleSignOut = () => {
    auth.signOut();
    userIsLoggedIn = false;
    navigation.navigate('Account Flow');
  };

  return (
    <SafeAreaView style={{ padding: t.l }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Profile</Title>
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
          icon={subscriber ? 'face-smile-relaxed' : 'box-heart'}
          onPress={() => console.log(subscriber ? 'view donations' : 'donate')}
          style={{ marginTop: t.l, marginLeft: t.m }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountSettings = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, marginHorizontal: t.s }}>
      <Heading
        style={{
          color: colors.text,
          marginTop: t.l,
          marginBottom: t.s,
        }}
      >
        Account
      </Heading>

      <SettingsLink>
        <Icon name="bell" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Manage notifications</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="user" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Change username or email</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="lock" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Change password</Text>
      </SettingsLink>

      <SettingsLink style={{ opacity: 0.5 }}>
        <Icon name="trash" color={t.negative} size="secondary" />
        <Text style={{ ...s.error_text, marginLeft: t.s }}>Delete account</Text>
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
        marginHorizontal: t.s,
        marginTop: -t.s,
      }}
    >
      <Heading
        style={{
          color: colors.text,
          marginTop: t.l,
          marginBottom: t.s,
        }}
      >
        Support
      </Heading>

      <SettingsLink>
        <Icon name="question-circle" size="secondary" />
        <Text style={{ marginLeft: t.s }}>How do I use this app?</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="message" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Contact us</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="file" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Documentation</Text>
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
        marginHorizontal: t.s,
        marginTop: -t.s,
      }}
    >
      <Heading
        style={{
          color: colors.text,
          marginTop: t.l,
          marginBottom: t.s,
        }}
      >
        Links
      </Heading>

      <SettingsLink>
        <Icon name="bug" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Report a bug</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="gavel" size="secondary" />
        <Text style={{ marginLeft: t.s }}>Legal policies</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="github-alt" size="secondary" type="fab" />
        <Text style={{ marginLeft: t.s }}>Github</Text>
        <Icon
          name="code"
          size={t.ms}
          style={{ marginLeft: t.s, marginRight: t.xs }}
        />
        <Small>v1.1.1</Small>
      </SettingsLink>
    </View>
  );
};

const SettingsLink = ({ children, style }: { children: any; style?: any }) => (
  <Pressable>
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
  </Pressable>
);
