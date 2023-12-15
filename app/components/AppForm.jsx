import { Formik } from "formik";
import { View, StyleSheet } from "react-native";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <View style={styles.form}>{children}</View>}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 10,
  },
});

export default AppForm;
