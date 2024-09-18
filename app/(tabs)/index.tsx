import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { urlSignProgram, urlSignReset } from "@beechatnetwork/elerium-lib";
import { Buffer } from "buffer";

const { height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
  const [password, setPassword] = useState("bonkadvi");
  const [url, setUrl] = useState("streetmint.xyz/mint/3947857711");
  const [pubKey, setPubKey] = useState(null);

  const doProgram = async () => {
    const pubKey = await urlSignProgram(password, url);
    setPubKey(Buffer.from(pubKey).toString("hex"));
  };
  const doReset = async () => {
    urlSignReset(password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <TextInput
        style={styles.textInput}
        value={url}
        onChangeText={setUrl}
        placeholder="Url"
      />

      <TextInput
        style={styles.textInput}
        value={pubKey}
        placeholder="Public Key"
      />

      <TouchableOpacity
        onPress={async () => await doProgram()}
        style={{
          justifyContent: "center",
          padding: 40,
          marginBottom: 40,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>Program</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => await doReset()}
        style={{
          justifyContent: "center",
          padding: 40,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top", // Ensures the text starts at the top of the input
  },
});
