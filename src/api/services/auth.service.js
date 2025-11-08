const API_BASE_URL = 'https://devmerchantapi.clocker.databoard.ai/';



export const emailRegister = async (email) => {
    try {
        const response = await fetch(`${API_BASE_URL}api/auth/check_email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            // const errorMessage = errorData?.message || 'Something went wrong';
            console.log(errorData)
        }

        return await response.json();
    } catch (error) {
        // console.error(`Email Registration Error: ${error.message}`);
        console.log(error)
        throw error;
    }
};

export const otpVerification = async (otp) => {
    try {
        const response = await fetch(`${API_BASE_URL}api/auth/verify_otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ otp }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData?.message || 'Something went wrong';
            console.error(`API Error: ${response.status} - ${errorMessage}`);
            throw new Error(`Error: ${response.status} - ${errorMessage}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Otp Registration Error: ${error.message}`);
        throw error;
    }
};


