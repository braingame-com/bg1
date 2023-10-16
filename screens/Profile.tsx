import { View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { s, t } from '../setup/styles';
import { ThemeSelector } from '../components/ThemeSelector';
import { Heading, Text, Title } from '../design/typography';
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
  const handleSignOut = () => {
    auth.signOut();
    userIsLoggedIn = false;
    navigation.navigate('Account Flow');
  };
  return (
    <SafeAreaView style={{ padding: t.large }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Divider
          style={{ marginRight: -t.large, marginTop: 0 }}
          height={4}
          color={t.tabYellow}
        />
        <Title
          mono={true}
          style={{
            ...s.bigChip,
            color: t.tabYellow,
            backgroundColor: t.tabYellowFaded,
            marginBottom: t.xs,
          }}
        >
          Profile
        </Title>
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
          style={{ marginTop: t.large, marginLeft: t.medium }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountSettings = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, marginHorizontal: t.small }}>
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
        <Icon name="bell" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Manage notifications</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="user" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Change username or email</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="lock" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Change password</Text>
      </SettingsLink>

      <SettingsLink style={{ opacity: 0.5 }}>
        <Icon
          name="trash"
          color={t.negative}
          size="secondary"
          style={{ opacity: 0.5 }}
        />
        <Text style={{ ...s.error_text, marginLeft: t.small }}>
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
        marginHorizontal: t.small,
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
        <Icon
          name="question-circle"
          size="secondary"
          style={{ opacity: 0.5 }}
        />
        <Text style={{ marginLeft: t.small }}>How do I use this app?</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="message" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Contact us</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="file" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Documentation</Text>
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
        marginHorizontal: t.small,
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
        <Icon name="bug" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Report a bug</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon name="gavel" size="secondary" style={{ opacity: 0.5 }} />
        <Text style={{ marginLeft: t.small }}>Legal policies</Text>
      </SettingsLink>

      <SettingsLink>
        <Icon
          name="github-alt"
          size="secondary"
          type="fab"
          style={{ opacity: 0.5 }}
        />
        <Text style={{ marginLeft: t.small }}>Github</Text>
        <Icon name="code" style={{ marginHorizontal: t.small }} />
        <Text style={{ color: t.grey }}>v1.1.1</Text>
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
