import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SignupButton() {

    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup');
    }

    return (
        <Button onClick={navigateToSignup}>Signup</Button>
    )
}

export default SignupButton;