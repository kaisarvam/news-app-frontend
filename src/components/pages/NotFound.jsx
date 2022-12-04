import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFireBase from '../../Hooks/useFireBase'
import notFoundImage from '../../asset/notFound.gif' 
import { Container } from '@mui/material';

function NotFound() {
    const navigate = useNavigate();
    const {user} = useFireBase();
    useEffect(() => {
        if (!user.email) {
          navigate("/login");
        }
      }, [user,navigate]);
  return (
    <div style={{marginTop:"30px",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <Link to="/">
        <img src={notFoundImage} alt="Not Found" />
        </Link>
    </div>
  )
}

export default NotFound