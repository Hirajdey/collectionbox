import Container from '../common/Container/Container'
import ForgotPasswordForm from '../common/forms/forgot-password-form/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <main>
      <section>
        <Container>
            <h2>Forgot Password</h2>
            <ForgotPasswordForm/>
        </Container>
      </section>
    </main>
  )
}

export default ForgotPassword