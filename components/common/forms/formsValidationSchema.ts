import * as Yup from 'yup'

const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const validationSchemaRegisterForm = Yup.object({
    name: Yup.string().required('Required name'),
    email: Yup.string().required('Required email').email('Invalid email format'),
    password: Yup.string().required('Required password').min(8, 'Should be 8 chars minimum.').matches(passwordRegx, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character.')
})



