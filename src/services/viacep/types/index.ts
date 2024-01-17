import { AppResponse } from "../../Api/types";

interface IRequestGetAddress {
  cep: string;
}

interface IResponseGetAddress extends AppResponse {
  data?: {
    address: {
      cep: string;
      logradouro: string;
      complemento: string;
      bairro: string;
      localidade: string;
      uf: string;
      ibge: string;
      gia: string;
      ddd: string;
      siafi: string;
    };
  };
}

export type { IRequestGetAddress, IResponseGetAddress };
