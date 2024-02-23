import { Link, Head } from '@inertiajs/react';
import LandingPage from './landingPage';
export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Welcome" />
           
                
                
                    <LandingPage auth={auth} />
             

           
           
        </>
    );
}
