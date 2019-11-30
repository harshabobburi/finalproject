import { vendor } from './vendorsignup/vendor';
import { user } from './signup/user';

export interface bill
{
    bill_id:number;
    consumer_id:string;
    amount:number;
    vendor:vendor;
    user:user;
}