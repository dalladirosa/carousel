class Auth {
  static async checkEmail({
    email,
  }: {
    email: string;
  }): Promise<{ exists: boolean }> {
    return fetch(`https://app.carouseltech.io/auth/exists?email=${email}`, {
      method: 'GET',
    }).then((res) => res.json());
  }

  static async signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<{ exists: boolean }> {
    return fetch(`https://app.carouseltech.io/auth/sign-in/`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());
  }
}

export default Auth;
