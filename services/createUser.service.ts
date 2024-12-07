import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;

export async function CreateUser({
  email,
  mdp,
  username,
}: {
  email: string;
  mdp: string;
  username: string;
}) {
  try {
    const response = await fetch(`${API_URL}/auth/SignUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, mdp: mdp, username: username }),
    });
    if (response.ok) {
      const res = await response.json();
      return res;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
