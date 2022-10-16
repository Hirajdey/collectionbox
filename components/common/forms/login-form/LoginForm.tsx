import { useContext, useEffect, useState } from "react";
import { Form, Formik, FormikProps } from "formik";

// Styles
import Styles from "./LoginForm.module.scss";

//Types
import { loginFormProps } from "../formTypes";

// Services
import authService from "../../../../_services/auth.service";

// Components
import AppInput from "../../app-input/AppInput";
import { AppBtn } from "../../app-btn/AppBtn";
import { initialValuesLoginForm } from "../formsInitialValues";
import { validationSchemaLoginForm } from "../formsValidationSchema";
import { AppContext } from "../../../../app-context/AppContext";
import { authenticate } from "../../../../methods/auth";
import { useRouter } from "next/router";
import { roleBasedRoute } from "../../../../methods/routeControl";

const LoginForm = () => {
  const [formik, setFormik] = useState<FormikProps<loginFormProps>>();
  const { setUserName, setUserEmail, setUserId, setUserRole } = useContext(AppContext);
  
  const route = useRouter();

	const onSubmit = (values: any, submitProps: any) => {
		const { email, password } = values;
		// call login API
	  const userData = authService.userLogin({email, password});
		userData.then((data) => {
      if(data){
        setUserName?.(data?.user.name);
        setUserEmail?.(data?.user.email);
        setUserId?.(data?.user._id);
        setUserRole?.(data?.user.role);
        authenticate(data?.token, () => {
          roleBasedRoute(data?.user.role, route);
        })
      }    
		})
		
		submitProps.setSubmitting(false)
		submitProps.resetForm()     
	}
  
  return (
    <div className={Styles.main}>
      <Formik
        initialValues={initialValuesLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setFormik(formik);
              formik.submitForm();
            }}
          >
            <AppInput
              name="email"
              type="email"
              isRequired={true}
              labelText="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              error={formik.errors.email}
              inputWrapperClassname={Styles.inputContainer}
              inputClassname={Styles.input}
              inputBoxClassname={Styles.inputBox}
              labelClassname={Styles.label}
            />
            <AppInput
              name="password"
              type="password"
              isRequired={true}
              labelText="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              error={formik.errors.password}
              inputWrapperClassname={Styles.inputContainer}
              inputClassname={Styles.input}
              inputBoxClassname={Styles.inputBox}
              labelClassname={Styles.label}
            />

            <AppBtn
              type="submit"
              btnStyleType="outline"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Sign In
            </AppBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
