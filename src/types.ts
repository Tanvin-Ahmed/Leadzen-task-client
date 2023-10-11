interface GeoType {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
}

interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: CompanyType;
}

export interface UsersAPIResponse {
  users: UserType[];
  contentCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}
