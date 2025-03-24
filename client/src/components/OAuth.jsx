import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  getAuth,
  sendEmailVerification 
} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const sendCustomVerificationEmail = async (user) => {
        const actionCodeSettings = {
            url: 'http://localhost:5173/verify-email', // Your verification redirect URL
            handleCodeInApp: true,
        };
        
        await sendEmailVerification(user, actionCodeSettings);
    };

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ 
            prompt: 'select_account',
            auth_type: 'popup',
            cross_origin_opener_policy: { value: 'same-origin-allow-popups' }
        });
        
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            
            if (!resultsFromGoogle.user.emailVerified) {
                await sendCustomVerificationEmail(resultsFromGoogle.user);
                dispatch(signInFailure('Please check your email for verification link'));
                return;
            }

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })
            const data = await res.json()
            if (res.ok) {
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    }

    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
            Continue with Google
        </Button>
    )
}