import api from "../Api/api";

import {
  ICreateUserRequest,
  ICreateUserResponse,
  IListUserByIdRequest,
  IListUserByIdResponse,
  IUpdateAvatarRequest,
  IUpdateAvatarResponse,
  IUpdateCoverRequest,
  IUpdateCoverResponse,
  IUpdatePasswordRequest,
  IUpdatePasswordResponse,
  IUpdateUserRequest,
  IUpdateUserResponse,
} from "./types";

const createUser = async ({
  name,
  email,
  confirmEmail,
  password,
  confirmPassword,
  telephone,
  birthDate,
}: ICreateUserRequest): Promise<ICreateUserResponse> => {
  const response = await api
    .post("/users", {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birthDate,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listUserById = async ({
  id,
}: IListUserByIdRequest): Promise<IListUserByIdResponse> => {
  const response = await api
    .get(`/users/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updateUser = async ({
  name,
  telephone,
  birthDate,
  bio,
}: IUpdateUserRequest): Promise<IUpdateUserResponse> => {
  const response = await api
    .put("/users", {
      name,
      telephone,
      birthDate,
      bio,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updateAvatar = async ({
  avatarUrl,
}: IUpdateAvatarRequest): Promise<IUpdateAvatarResponse> => {
  const response = await api
    .patch("/users/updateAvatar", { avatarUrl })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updateCover = async ({
  coverUrl,
}: IUpdateCoverRequest): Promise<IUpdateCoverResponse> => {
  const response = await api
    .patch("/users/updateCover", { coverUrl })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updatePassword = async ({
  currentPassword,
  newPassword,
}: IUpdatePasswordRequest): Promise<IUpdatePasswordResponse> => {
  const response = await api
    .patch("/users/updatePassword", { currentPassword, newPassword })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export {
  createUser,
  listUserById,
  updateUser,
  updateAvatar,
  updateCover,
  updatePassword,
};
