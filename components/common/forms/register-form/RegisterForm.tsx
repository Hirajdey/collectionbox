import { Form, Formik, FormikProps } from 'formik'
import { useState } from 'react'

// Initial values
import { initialValuesRegistrForm } from '../formsInitialValues';

// Validation Schema
import { validationSchemaRegisterForm } from '../formsValidationSchema';

// Types
import { registerFormProps } from '../formTypes';

// Styles
import Styles from './RegisterForm.module.scss';

// Services
import authService from '../../../../_services/auth.service';

// Components
import AppInput from '../../app-input/AppInput';
import { AppBtn } from '../../app-btn/AppBtn';

const RegisterForm = () => {
    const [formik, setFormik] = useState<FormikProps<registerFormProps>>();
    
    const onSubmit = (values:any, submitProps: any) => {
        const {name, email, password } = values;
        
        // call register API    
        authService.userRegister({name, email, password});
        submitProps.setSubmitting(false)
        submitProps.resetForm()     
    }

  return (
    <div className={Styles.main}>
        <Formik 
            initialValues={initialValuesRegistrForm}
            validationSchema={validationSchemaRegisterForm}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    setFormik(formik)
                    formik.submitForm()
                }}>
                
                <AppInput
                    name="name"
                    type="text"
                    isRequired={true}
                    labelText="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange("name")}
                    error={formik.errors.name}
                    inputWrapperClassname={Styles.inputContainer}
                    inputClassname={Styles.input}
                    inputBoxClassname={Styles.inputBox}
                    labelClassname={Styles.label}
                />
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
                   Sign Up 
                </AppBtn>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default RegisterForm