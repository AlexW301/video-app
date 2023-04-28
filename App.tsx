import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import GettingCall from './components/GettingCall';
import Video from './components/Video';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button iconName='video' backgroundColor='grey' /> */}
      {/* <GettingCall /> */}
      <Video />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
