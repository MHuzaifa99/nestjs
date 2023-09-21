import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp(data) {
    console.log(data);
    return 'I am signUp';
  }

  signIn(data) {
    console.log(data);
    return 'I am signIn';
  }
}
