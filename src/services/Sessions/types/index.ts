import { AppResponse } from "../../Api/types";

import { IAddress } from "../../address/types";

interface User {
  id: string;
  name: string;
  email: string;
  telephone: string | null;
  birthDate: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  bio: string | null;
  address: IAddress[];
  createdAt: string;
}

interface ISession {
  token: string;
  user: User;
}

interface ISessionRequest {
  email: string;
  password: string;
}

interface ISessionResponse extends AppResponse {
  data?: ISession;
}

export type { User, ISessionRequest, ISessionResponse };
