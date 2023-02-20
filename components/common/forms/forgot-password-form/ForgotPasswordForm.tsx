import { useContext, useEffect, useState } from "react";
import { Form, Formik, FormikProps } from "formik";

import Styles from './ForgotPasswordForm.module.scss';
import AppInput from "../../app-input/AppInput";
import { AppBtn } from "../../app-btn/AppBtn";
import { initialValuesForgotPasswordForm } from "../formsInitialValues";
import { validationSchemaForgotPasswordForm } from "../formsValidationSchema";
import authService from "../../../../_services/auth.service";

const ForgotPasswordForm = () => {

	const onSubmit = (value:any, submitProps:any) => {
		const { email } = value;
		authService.userForgotPasswordRequest({email});
	}

	return (
		<div className={Styles.main}>
			<Formik 
				initialValues={initialValuesForgotPasswordForm}
				validationSchema={validationSchemaForgotPasswordForm}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
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
						<AppBtn
							type="submit"
							btnStyleType="outline"
							disabled={!(formik.isValid && formik.dirty)}
							>
							Forgot Password
						</AppBtn>
					</Form>
				)}
			</Formik>
		</div>
  )
}

export default ForgotPasswordForm