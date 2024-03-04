import axios, { AxiosInstance } from 'axios';

interface User {
  email: string;
  token: string;
}

class UserService {
  private reqresApi: AxiosInstance;

  constructor() {
    this.reqresApi = axios.create({
      baseURL: 'https://reqres.in/api',
    });
  }

  public async login(email: string, password: string): Promise<User> {
    try {
      const response = await this.reqresApi.post<User>('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public async signup(email: string, password: string): Promise<User> {
    try {
      const response = await this.reqresApi.post<User>('/signup', { email, password });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  
}

export default UserService;
