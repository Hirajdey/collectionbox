import React from 'react'
import {Formik, Form} from 'formik';

// Services
import authService from "../../../../_services/auth.service";

// Component
import AppInput from "../../app-input/AppInput";
import { AppBtn } from "../../app-btn/AppBtn";

// Styles
import Styles from "./ResetPasswordForm.module.scss"
import { initialValuesResetPasswordForm } from '../formsInitialValues';
import { validationSchemaResetPasswordForm } from '../formsValidationSchema';

interface ResetPasswordFormProps{
	token: any;
}

const ResetPasswordForm = ({token}:ResetPasswordFormProps) => {
	
	const onSubmit = (value:any) => {
		const { password } = value;
		authService.userResetPassword({token, password});
	}

  return (
    <div className={Styles.main}>
        <Formik 
            initialValues={initialValuesResetPasswordForm}
            validationSchema={validationSchemaResetPasswordForm}
            onSubmit={onSubmit}
        >
            {(formik) => (
							<Form>
								<AppInput
										name="password"
										type="password"
										isRequired={true}
										labelText="Type Your New Password"
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
									Reset Password
								</AppBtn>
							</Form>
            )}
        </Formik>
    </div>
  )
}

export default ResetPasswordForm