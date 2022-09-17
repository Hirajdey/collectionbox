import * as Yup from 'yup'

export const validationSchemaRegisterForm = Yup.object({
    name: Yup.string().required('Required name'),
    email: Yup.string().email('Invalid email format').required('Required email')
})



