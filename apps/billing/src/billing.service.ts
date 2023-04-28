import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  healtCheck(): string {
    return 'Hello Billing!';
  }

  billing(data: any): string {
    console.log(data);
    return 'billing!';
  }
}
