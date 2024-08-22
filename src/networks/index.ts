import http from '@/lib/http';

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

  static async signIn(data: FormData): Promise<{
    access_token: string;
    token_type: string;
    refresh_token: string;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      userID: string;
      firm: string;
    };
  }> {
    return http(`https://app.carouseltech.io/auth/sign-in/`, {
      method: 'POST',
      body: data,
      headers: {},
    });
  }

  static async signUp({
    email,
    firstName,
    lastName,
    password,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }): Promise<{ id: string }> {
    return fetch(`https://app.carouseltech.io/auth/sign-up/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        password,
      }),
    }).then((res) => res.json());
  }

  static async getUserInformation(): Promise<{
    data: any;
    status: number;
  }> {
    try {
      const response = await fetch(`https://app.carouseltech.io/auth/user`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!response.ok) throw response;

      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      throw error;
    }
  }

  static async refreshToken(): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    return fetch(`https://app.carouseltech.io/auth/refresh-token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `refresh_token=${encodeURIComponent(localStorage.getItem('refreshToken') || '') as string}`,
    }).then((res) => res.json());
  }

  static async forgotPassword({ email }: { email: string }): Promise<any> {
    return fetch(`https://app.carouseltech.io/auth/forgot-password/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then((res) => res.json());
  }
}

export default Auth;

// {
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZGlyb2Rhc0BnbWFpbC5jb20iLCJleHAiOjE3MjQyNzcwNzl9.uFlLub1xXcEUSvzURVYVIMBUwvG4foSqLjinDkCcoaE",
//   "token_type": "bearer",
//   "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZGlyb2Rhc0BnbWFpbC5jb20iLCJleHAiOjE3MjQ4NjgzNzl9.ES_W_OmTZYhS-y0FERmeUm3sjECDdL1a9aLa0wilRQg",
//   "user": {
//   "email": "ddirodas@gmail.com",
//     "firstName": "Dalla",
//     "lastName": "Dirosa",
//     "userID": "66c6225a61ee12ce725a74ff",
//     "firm": "Personal"
// }
