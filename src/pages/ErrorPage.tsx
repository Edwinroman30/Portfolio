import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className='text-center'>
        <h3 className='title is-3'>🔥🔥🔥🏃‍♂️ We are getting bad times right now!</h3>
        <small>Please come back a moment late...</small>
        <br></br>

        <button className='button my-3' onClick={goBack}>
           Volver
        </button>
    </div>
  )
}

export default ErrorPage;