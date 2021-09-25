export interface Address {
  address : string ;
  region : string  ;
  city : string  ;
  zipcode : string ;
  country : string ;
  floor : string ;
  type : number ;   //1= main address 2=job address
  active : boolean ;
  notes: string ;
}
