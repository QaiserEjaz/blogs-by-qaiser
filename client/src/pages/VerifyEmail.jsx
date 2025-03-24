import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'flowbite-react';
import { getAuth, applyActionCode, sendEmailVerification } from 'firebase/auth';

export default function VerifyEmail() {
    const [verificationStatus, setVerificationStatus] = useState('verifying');
    const [resendCooldown, setResendCooldown] = useState(0);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const oobCode = urlParams.get('oobCode');

                if (!oobCode) {
                    setVerificationStatus('error');
                    return;
                }

                await applyActionCode(auth, oobCode);
                setVerificationStatus('success');
                
                // Use requestIdleCallback for non-critical UI updates
                const redirectTimeout = requestIdleCallback(() => {
                navigate('/sign-in');
                }, { timeout: 3000 });

                return () => cancelIdleCallback(redirectTimeout);
            } catch (error) {
                setVerificationStatus('error');
            }
        };

        verifyEmail();
    }, [navigate]);

    const handleResendVerification = async () => {
        try {
            if (!auth.currentUser) {
                setVerificationStatus('error');
                return;
            }

            await sendEmailVerification(auth.currentUser, {
                url: window.location.origin + '/verify-email',
                handleCodeInApp: true,
            });

            setResendCooldown(60);
            const timer = setInterval(() => {
                setResendCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

        } catch (error) {
            setVerificationStatus('error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6">
                {verificationStatus === 'verifying' && (
                    <Alert color="info">
                        <div className="flex flex-col items-center">
                            <p className="mb-4">Verifying your email...</p>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                    </Alert>
                )}
                {verificationStatus === 'success' && (
                    <Alert color="success">
                        <div className="text-center">
                            <p className="mb-4">Email verified successfully!</p>
                            <p>Redirecting to login...</p>
                        </div>
                    </Alert>
                )}
                {verificationStatus === 'error' && (
                    <Alert color="failure">
                        <div className="text-center">
                            <p className="mb-4">Failed to verify email.</p>
                            <Button
                                onClick={handleResendVerification}
                                disabled={resendCooldown > 0}
                                className="mt-2"
                            >
                                {resendCooldown > 0
                                    ? `Resend in ${resendCooldown}s`
                                    : 'Resend verification email'}
                            </Button>
                        </div>
                    </Alert>
                )}
            </div>
        </div>
    );
}