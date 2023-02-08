import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Start = ({setIsLoading}) => {

    const navigate = useNavigate();

    const timeout = () => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    useEffect(() => {
        timeout();
        setIsLoading(true);
        return () => {
            // clear 해줌
            clearTimeout(timeout);
        };
    });

    return (
        <div>
            <img src='image/wave.png' className='wave' alt='wave' />
            <div>갓생일지</div>
        </div>
    )
}

export default Start