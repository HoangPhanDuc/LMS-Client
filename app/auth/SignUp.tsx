import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    if (!isChecked) {
      Alert.alert("Error", "You must agree to the terms & conditions.");
      return;
    }
    Alert.alert("Account Created", `Email: ${email}`);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Enter your details below & free sign up
      </Text>

      <Text style={styles.label}>Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? <Entypo name="check" size={18} color="#fff" /> : null}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          By creating an account you have to agree with our terms & conditions.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Link href="/auth/Login" style={styles.linkText}>
            Log in
          </Link>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17102D",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#A8A6BA",
    textAlign: "center",
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#2C294B",
    color: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A5CF8",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17102D",
  },
  checkboxText: {
    color: "#A8A6BA",
    fontSize: 12,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#A8A6BA",
    fontSize: 14,
  },
  linkText: {
    color: "#4A5CF8",
    fontWeight: "bold",
  },
});

export default SignUp;
