import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken'; 
import Container from '../../../components/common/Container/Container';
import { AppBtn } from '../../../components/common/app-btn/AppBtn';
import AuthService from '../../../_services/auth.service';

const ActivateAccount = () => {
    const router = useRouter();

    const [name, setName] = useState();
    const [token, setToken] = useState<any>();

    useEffect(() => {
        setToken(router.query.id);
        if(token){
            const tokenName = jwt.decode(token)
            setName(tokenName?.name) 
        }
    }, [router, token]);

    const onClickHandleActivation = () => {
        AuthService.userActivation({token})
    }    

    return (
        <main>
            <Container>
                <div>
                    <h1>G'day {name}, Ready to activate your account?</h1>
                    <AppBtn btnStyleType="full" onClickBtn={onClickHandleActivation}> 
                        Activate Account
                    </AppBtn>
                </div>
            </Container>
        </main>
    )
}

export default ActivateAccount;

