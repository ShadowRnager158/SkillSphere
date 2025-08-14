export interface User {
  id: string;
  name: string;
  email: string;
  isSkiller: boolean;
  createdAt: string;
  avatar?: string;
  headline?: string;
  dob?: string;
  education?: string;
  gender?: string;
  skills?: string[];
  bio?: string;
  location?: string;
  phone?: string;
  authProvider?: 'local' | 'google';
}
