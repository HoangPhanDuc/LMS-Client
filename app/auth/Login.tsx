import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { useLoginMutation } from "@/redux/user/apiUser";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, {error, isSuccess}] = useLoginMutation();
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  useEffect(()=> {
    if(isSuccess) {
      Alert.alert("Login Successfully");
    }
    if(error) {
      Alert.alert( "Something went wrong");
    }
  }, [isSuccess, error])

  const handleLogin = async () => {
    try {
      // const res = await login({ email, password }).unwrap();
      // if (res.status === 200) {
      //   router.push("/Home");
      // }
      await login({email, password});
      router.push("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("email not valid")
      .required("email must be required!"),
    password: Yup.string().required("password must be required!"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>

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
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={handlePasswordToggle}
          >
            {showPassword ? (
              <Entypo name="eye-with-line" size={24} color="#6A6A8B" />
            ) : (
              <Entypo name="eye" size={24} color="#6A6A8B" />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Don’t have an account?
          <Link href="/auth/SignUp" style={styles.signUpText}>
            {" "}
            Sign up
          </Link>
        </Text>
      </View>
    </Formik>
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
    marginBottom: 30,
    textAlign: "center",
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
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 18,
  },
  forgotPassword: {
    color: "#A8A6BA",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4A5CF8",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    color: "#A8A6BA",
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
  },
  signUpText: {
    color: "#4A5CF8",
    fontWeight: "bold",
  },
});

export default Login;
