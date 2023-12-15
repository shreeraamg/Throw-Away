import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Form";
import AppFormPicker from "../components/Form/AppFormPicker";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().nullable().label("Description"),
  category: Yup.string().required().label("Category"),
});

const categories = ["furniture", "electronics", "clothing"];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.heading}>Post a new Product</AppText>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
        />
        <AppFormPicker
          placeholder="Category"
          name="category"
          items={categories}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton label="Add Item" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  screen: {
    paddingHorizontal: 6,
  },
});

export default ListingEditScreen;
