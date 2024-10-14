// context/AuthContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Crea el contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar la app
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (values) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      const { authentication, _id, username, email, fullName, avatarUrl } = data;

      const userData = {
        token: authentication.sessionToken,
        id: _id,
        username,
        email,
        fullName,
        avatar: avatarUrl,
      };

      // Almacena el usuario en AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      // Actualiza el estado de usuario en el contexto
      setUser(userData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
