export interface UserLocal {
  uid: string;
  email: string| null;
  displayName: string| null;
  photoURL: string | null;
  emailVerified: boolean;
}
