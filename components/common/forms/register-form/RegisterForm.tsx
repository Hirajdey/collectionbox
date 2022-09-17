import { Form, Formik, FormikProps } from 'formik'
import { useState } from 'react'

// Initial values
import { initialValuesRegistrForm } from '../formsInitialValues';

// Validation Schema
import { validationSchemaRegisterForm } from '../formsValidationSchema';

// Types
import { registerFormProps } from '../formTypes';

// Styles
import Styles from './RegisterForm.module.scss'

// Components
import AppInput from '../../app-input/AppInput';

const RegisterForm = () => {
    const [formik, setFormik] = useState<FormikProps<registerFormProps>>();
    
    const onSubmit = () => {
        // call register API    
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
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default RegisterForm