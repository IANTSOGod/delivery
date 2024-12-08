import Constants from "expo-constants";

export interface UserLogInterface {
  email: string;
  mdp: string;
}

const API_URL = Constants.expoConfig?.extra?.API_URL;

export async function Authentify({ email, mdp }: UserLogInterface) {
  try {
    const response = await fetch(`${API_URL}/auth/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, mdp: mdp }),
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
