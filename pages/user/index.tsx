import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ROUTE } from '../../constants/routeString';
import withUser from '../hoc/withUser';

const UserPage: NextPage = ({user, token}:any) => {
    const route = useRouter();

    if(!token){
        route.push(ROUTE.home.withParam);
    }

    return (
        <> 
            <h2>USER PAGE </h2> 
            
            {JSON.stringify(token)}
        </>
    )
}
  
export default withUser(UserPage);

