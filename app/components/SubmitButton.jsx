import { useFormikContext } from "formik";

import AppButton from "./AppButton";

const SubmitButton = ({ label }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton label={label} onPress={handleSubmit} />;
};

export default SubmitButton;
