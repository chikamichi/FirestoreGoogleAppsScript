export interface JwtHeader {
  alg: Algorithm;
  typ: AlgorithmFormat;
}

export interface JwtClaim {
  iss: string;
  scope: string;
  aud: string;
  exp: number;
  iat: number;
}

export interface TokenResponse {
  access_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
}

export declare type Byte = number;
export type Algorithm = 'RS256';
export type AlgorithmFormat = 'JWT';
