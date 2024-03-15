export type JWTPayloadDTO = {
  accountId: string;
  email: string;
};

export type JWTResponseDTO = {
  accessToken: string;
};
