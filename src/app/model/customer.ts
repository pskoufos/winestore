import { Address } from "./address";

export interface Customer {
  uid: string ;
  custCode?: string ;
  custName?: string ;
  memberID?: number ;
  status?:  number ;
  phone?: string ;
  addresses?: Address[]  ;
  locked : boolean ;
  discount: number;
}
