// auth.ts
import UserService from "./services/restAPI";
export interface User {
  email: string;
  token: string;
}

type user = {
  email: string;
  password: string;
};
type usersArray = user[]

const users = { user:<usersArray>[] };

//The userService function is the restAPI.
//Haven't used the API as I needed to study more on how it works, created a local user login method which will store the users locally until the page is refreshed or the server is restarted

export async function login(email: string, password: string): Promise<User> {
 const userService = new UserService();

  // const result = await userService.login(email,password)

  const results: user = users.user.filter((user: user) => user.email === email)[0];
  // console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === results.email && password === results.password) {
        const token = "dummy-token"; 
        resolve({ email, token });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
}
export async function signup(email: string, password: string): Promise<User> {
  
  // Check if the user already exists
  const existingUser: user = users.user.filter((user: user) => user.email === email)[0];
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser: user = { email, password };
  users.user.push(newUser);

  

  const token = "dummy-token";
  return { email, token };
}



export function logout(): void {
  // Remove user from localstorage
  localStorage.removeItem("user");
}

export function getUser(): User | null {
  // Get user from local storage
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
}

export function setUser(user: User): void {
  // Set user to local storage
  localStorage.setItem("user", JSON.stringify(user));
}
