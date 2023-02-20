import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { ROUTE } from '../../constants/routeString';
import withAdmin from '../hoc/withAdmin';

const AdminPage: NextPage = ({user, token}:any) => {
    const route = useRouter();

    if(!token){ 
        route.push(ROUTE.home.withParam);
    }  

    return <> <h2>ADMIN PAGE</h2> 
        {token}
    </>
}
  
export default withAdmin(AdminPage);