import axios from "axios";

const API_ENDPOINT = 'http://localhost:3000/api/auth';

export const signup = async({formData}) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/signup` , formData , {
            withCredentials : true
        });

        return response;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Signing Up !!!");
    }
}

export const login = async({formData}) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/login` , formData , {
            withCredentials : true
        });
        
        return response.data;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Logging In !!!");
    }
}

export const changePassword = async({formData}) => {
    try {
        const response = await axios.put(`${API_ENDPOINT}/change-password` , formData , {
            withCredentials : true
        });
        
        return response;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Changing Password !!!");
    }
}

export const forgotPassword = async({formData}) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/forgot-password` , formData);   
        return response;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Requesting Reset Link !!!");
    }
}

export const resetPassword = async({token , formData}) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/reset-password?token=${token}` , formData);   
        return response;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Reseting Password !!!");
    }
}

export const logout = async() => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/logout` , {
            withCredentials : true
        });   
        return response;
    }
    catch (error) {
        throw new Error(error.response?.data?.message || "Error Logging Out !!!");
    }
}
