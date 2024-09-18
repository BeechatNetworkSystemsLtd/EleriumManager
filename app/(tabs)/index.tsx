import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const { height, width } = Dimensions.get("window");
// import { urlSignProgram, urlSignReset } from "@beechatnetwork/elerium-lib";
import { Buffer } from "buffer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const logoImage = require("../../assets/images/activeChipICon.png");
const eyeIcon = require("../../assets/images/eyeIcon.png");
const eyeSlashIcon = require("../../assets/images/eyeSlash.png");

const { height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
  const [password, setPassword] = useState("");
  // bonkadvi
  const [url, setUrl] = useState("");
  // 3947857711
  const [pubKey, setPubKey] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const doProgram = async () => {
    const pubKey = await urlSignProgram(password, "streetmint.xyz/mint/" + url);
    setPubKey(Buffer.from(pubKey).toString("hex"));
  };
  const doReset = async () => {
    urlSignReset(password);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={logoImage} style={styles.logo} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password (max. 8 characters)"
              maxLength={8}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? eyeSlashIcon : eyeIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={url}
              onChangeText={setUrl}
              placeholder="Mint ID"
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={pubKey}
              placeholder="Public Key"
            />
          </View>

          <View style={styles.divider} />
          <TouchableOpacity
            onPress={async () => await doProgram()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Program</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={async () => await doReset()}
            style={[
              styles.button,
              {
                backgroundColor: "transparent",
                borderColor: "#000000",
                borderWidth: 1,
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,

    width: "95%",
    padding: "8%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top", // Ensures the text starts at the top of the input
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#777777",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  divider: {
    height: 20,
  },

  button: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
