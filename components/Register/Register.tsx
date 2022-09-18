// Styles
import Styles from './Register.module.scss'

// Components
import Container from '../common/Container/Container'
import RegisterForm from '../common/forms/register-form/RegisterForm'


const Register = () => {
  return (
    <main className={Styles.main}>
        <section>
          <Container>
            <h2>Register Form</h2>
            <RegisterForm/>
          </Container>
        </section>
    </main>
  )
}

export default Register