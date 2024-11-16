import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Properties
export const getProperties = async (filters: any) => {
  const response = await api.get('/buildings/', { params: filters });
  return response.data;
};

export const getPropertyById = async (id: string) => {
  const response = await api.get(`/buildings/${id}/`);
  return response.data;
};

// Auth
export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/users/login/', credentials);
  return response.data;
};

export const signup = async (userData: {
  username: string;
  email: string;
  password: string;
  is_landlord?: boolean;
}) => {
  const response = await api.post('/users/signup/', userData);
  return response.data;
};

// Rooms
export const getRooms = async (buildingId: string) => {
  const response = await api.get(`/buildings/${buildingId}/rooms/`);
  return response.data;
};