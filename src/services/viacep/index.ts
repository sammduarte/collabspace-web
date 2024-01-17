import api from "../Api/api";

import { IRequestGetAddress, IResponseGetAddress } from "./types";

const getAddress = async ({
  cep,
}: IRequestGetAddress): Promise<IResponseGetAddress> => {
  const response = await api
    .get(`/viacep/${cep}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { getAddress };
