import Container from "../common/Container/Container"
import LoginForm from "../common/forms/login-form/LoginForm"

const Login = () => {
  return (
    <main>
      <section>
        <Container>
          <h2>Login Form</h2>
          <LoginForm/>
        </Container>
      </section>
  </main>
  )
}

export default Login