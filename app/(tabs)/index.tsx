import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { dqxPerformNFC } from '@beechatnetwork/elerium-lib';

export default function HomeScreen() {
  const doSomething = async () => {
    console.log(`[DEBUG]: aaa`)
    await dqxPerformNFC('1', '2', '3');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={doSomething} style={{justifyContent: 'center', padding: 40, borderColor: 'black', borderWidth: 1}}>
        <Text>GO!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
