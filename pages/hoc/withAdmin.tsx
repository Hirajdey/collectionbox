import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import { COOKIES } from '../../constants';
import { getCookie } from '../../methods/auth';
import APIS from '../../_services/const';

const withAdmin = (Page:NextPage) => {
    const WithAuthAdmin = (props:any) => <Page {...props}/>
    
    WithAuthAdmin.getInitialProps = async (context:NextPageContext) => {
        const { req, res } = context;
        const token = getCookie(COOKIES.tooken, req);
        let user = null;

        if(token){
            try{
                const response = await axios.get(APIS.ADMIN_VERIFY_SIGNIN, {
                    headers: {
                        authorization: `Bearer ${token}`,
                        contentType: 'application/json'
                    }
                });
                
                if(response.status === 200){
                    user = response.data;
                }else{
                    user = null;    
                }
                
            } catch(error){
                if(error){
                    user = null;
                }
            }
        }

        if(user === null){
            // redirect 
            if(res){
                res.writeHead(301, {
                    Location: '/'
                });
                res.end();    
            }
            return {token : undefined};
        } else {
            return {
                ...(Page.getInitialProps ? await Page.getInitialProps(context): {}),
                user,
                token
            }
        } 
    };

    return WithAuthAdmin;
}

export default withAdmin;
