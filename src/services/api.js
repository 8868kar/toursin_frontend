import axios from 'axios';

// Create an Axios instance with base configuration
// Currently pointing to localhost, replace with production URL when ready
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach token to requests
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('toursin-token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Interceptor to handle global errors (e.g., 401 Unauthorized)
apiClient.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
        // Handle unauthorized access (e.g., redirect to login)
        console.warn('Unauthorized access, redirecting to login...');
        localStorage.removeItem('toursin-token');
        // window.location.href = '/login'; // Adjust based on your routing
    }
    return Promise.reject(error);
});

/**
 * ----------------------------------------
 * AUTHENTICATION API
 * ----------------------------------------
 */
export const AuthAPI = {
    // Dummy login endpoint
    login: async (credentials) => {
        // Replace with real backend call: return apiClient.post('/auth/login', credentials);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: { token: 'mock-token', user: { name: 'Kartik Sharma', email: credentials.email || 'kartik@example.com' } } });
            }, 800);
        });
    },
    // Dummy signup endpoint
    register: async (userData) => {
        // Return real backend call
        return new Promise((resolve) => setTimeout(() => resolve({ data: { success: true } }), 800));
    },
    // Verify phone OTP
    verifyOtp: async (phone, otp) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (otp === '123456') resolve({ data: { token: 'mock-token', user: { name: 'Phone User' } } });
                else reject(new Error('Invalid OTP'));
            }, 800);
        });
    }
};

/**
 * ----------------------------------------
 * TOURS API
 * ----------------------------------------
 */
export const ToursAPI = {
    getAll: async () => {
        // return apiClient.get('/tours');
        // MOCK data fetching is currently handled in the components via data.js
        return Promise.resolve({ data: [] });
    },
    getById: async (id) => {
        // return apiClient.get(`/tours/${id}`);
        return Promise.resolve({ data: { id } });
    },
    bookTour: async (tourId, bookingData) => {
        // return apiClient.post(`/tours/${tourId}/book`, bookingData);
        return new Promise((resolve) => setTimeout(() => resolve({ data: { id: `TIN-${Date.now().toString().slice(-6)}` } }), 1000));
    }
};

/**
 * ----------------------------------------
 * USER API
 * ----------------------------------------
 */
export const UserAPI = {
    getProfile: async () => {
        // return apiClient.get('/users/profile');
        return Promise.resolve({ data: { name: 'Kartik Sharma', wishlist: [] } });
    },
    updateWishlist: async (tourIds) => {
        // Sync wishlist array to backend
        // return apiClient.put('/users/wishlist', { tourIds });
        return Promise.resolve({ data: { success: true } });
    },
    submitContact: async (formData) => {
        // Return real backend call
        return new Promise((resolve) => setTimeout(() => resolve({ data: { success: true } }), 800));
    }
};

export default apiClient;
