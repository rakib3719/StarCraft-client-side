
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import {  ColorRing } from 'react-loader-spinner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRouteer =({children}) => {
    // const currentLocation = useLocation().pathname

    const {user, loader} = useContext(AuthContext)
  
    if(loader){
        return <div  className='flex justify-center'>

<ColorRing
        
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}

        
      ></ColorRing>
        </div>
    }
    if(user){

        return children
    }


    return <Navigate   to='/login' ></Navigate>
};

PrivateRouteer.propTypes = {
    
    children: PropTypes.node
};

export default PrivateRouteer;