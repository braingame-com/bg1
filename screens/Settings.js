import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { s, t } from '../setup/styles';
import { ThemeSelector } from '../components/ThemeSelector';
import { Text } from '../setup/typography';
import { Button } from '../setup/primitives';
import { auth } from '../firebaseConfig';
import { useTheme } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
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
          icon={subscriber ? 'smiley' : 'code-of-conduct'}
          onPress={() => console.log(subscriber ? 'view donations' : 'donate')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountSettings = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Text style={{ ...s.heading, color: colors.text, marginBottom: t.small }}>
        Account
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="bell"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Manage notifications</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="person"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Change username or email</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="lock"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Change password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            opacity: 0.5,
          }}
        >
          <Octicons
            name="trash"
            size={t.large}
            style={{ ...s.error_text, ...s.m_right }}
          />
          <Text style={{ ...s.error_text, ...s.task_mini }}>
            Delete account
          </Text>
        </View>
      </TouchableOpacity>
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
      <Text style={{ ...s.heading, color: colors.text, marginBottom: t.small }}>
        Support
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="question"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>How do I use this app?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="comment"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Contact us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="file"
            size={t.large}
            style={{
              color: t.grey,
              ...s.m_right,

              width: t.large,
            }}
          />
          <Text style={{ ...s.task_mini }}>Documentation</Text>
        </View>
      </TouchableOpacity>
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
      <Text style={{ ...s.heading, color: colors.text, marginBottom: t.small }}>
        Links
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="bug"
            size={t.large}
            style={{
              color: t.grey,
              ...s.m_right,
              width: t.large,
            }}
          />
          <Text style={{ ...s.task_mini }}>Report a bug</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="organization"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Legal policies</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Octicons
            name="mark-github"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Github</Text>
          <Octicons
            name="code"
            color={t.grey}
            size={t.large}
            style={{ marginHorizontal: t.small }}
          />
          <Text style={{ color: t.grey }}>v1.1.1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
