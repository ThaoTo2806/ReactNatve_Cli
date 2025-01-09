import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStore = create(set => ({
  user: null,
  setUser: async userData => {
    await AsyncStorage.setItem('user', JSON.stringify(userData)); // Lưu dữ liệu vào AsyncStorage
    set({user: userData});
  },
  loadUser: async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      set({user: JSON.parse(storedUser)}); // Tải dữ liệu từ AsyncStorage
    }
  },
  clearUser: async () => {
    await AsyncStorage.removeItem('user'); // Xóa thông tin khi đăng xuất
    set({user: null});
  },
}));

export default useAuthStore;
