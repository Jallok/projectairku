import { useEffect, useState } from "react";

type VerificationModalProps = {
    isOpen: boolean;
    onClose: () => void;
  }
export default function Verified({ isOpen, onClose }: VerificationModalProps) {
    const [verificationCode, setVerificationCode] = useState('');

    useEffect(() => {
      // Reset verificationCode when the modal opens
      setVerificationCode('');
    }, [isOpen]);
  
    const handleVerification = () => {
      // Handle verification logic here, e.g., send the code to the server
      console.log('Verifying:', verificationCode);
      // Close the modal after handling verification
      onClose();
    };
  
    return (
      // Modal backdrop
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Modal content */}
        <div className="bg-white p-4 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-4">Verification</h2>
          <p>Check your email for the verification code.</p>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full border p-2 mt-2"
          />
          <button onClick={handleVerification} className="w-full bg-teal-500 text-white p-2 mt-4">
            Verify
          </button>
          <button onClick={onClose} className="w-full bg-gray-300 text-gray-700 p-2 mt-2">
            Cancel
          </button>
        </div>
      </div>
    );
}
