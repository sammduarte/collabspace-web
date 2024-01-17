import { AppResponse } from "../../Api/types";

interface IAddress {
  id: string | null;
  userId: string | null;
  country: string | null;
  cep: string | null;
  province: string | null;
  city: string | null;
  street: string | null;
}

interface ICreateAddressRequest {
  country?: string;
  cep?: string;
  province?: string;
  city?: string;
  street?: string;
}

interface ICreateAddressResponse extends AppResponse {
  data: IAddress;
}

interface IUpdateAddressRequest {
  id: string;
  country?: string;
  cep?: string;
  province?: string;
  city?: string;
  street?: string;
}

type IUpdateAddressResponse = AppResponse;

export type {
  IAddress,
  ICreateAddressRequest,
  ICreateAddressResponse,
  IUpdateAddressRequest,
  IUpdateAddressResponse,
};
