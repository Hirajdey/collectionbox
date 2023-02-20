import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import React, { useEffect, useState } from 'react'
import Container from '../common/Container/Container'
import ResetPasswordForm from '../common/forms/reset-password-form/ResetPasswordForm'

const ResetPassword = () => {
	const route = useRouter();
	const [token, setToken] = useState<any>(); 
	const [name, setName] = useState<string>();

	useEffect(() => {
		setToken(route.query.id);
	},[route])

	useEffect(() => {
		const dctoken = jwt.decode(token);
		setName(dctoken?.name)	
	},[token])
	
  return (
    <main>
      <section>
        <Container>
          <h2>Hi {name}, Ready to Reset Password</h2>
					<ResetPasswordForm token={token}/>
        </Container>
      </section>
    </main>
    
  )
}

export default ResetPassword