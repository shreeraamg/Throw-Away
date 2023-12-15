import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/icon.jpeg")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <View style={styles.form}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton label="Login" />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 6 },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  form: {
    gap: 10,
  },
});

export default LoginScreen;
