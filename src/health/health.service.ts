import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth() {
    return {
      name: 'Nestjs Server Example',
      status: 'Up',
    };
  }
}
