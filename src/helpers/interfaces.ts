import React, { SetStateAction } from "react";

interface IUser {
  isAuthenticated: boolean;
  type: string;
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
}

export interface IAuth {
  auth: IUser;
  setAuth: SetStateAction<any>;
}

export interface IFilter {
  filtroId: number;
  municipioOrigemId: number | null;
  estadoOrigemId: number | null;
  municipioDestinoId: number | null;
  estadoDestinoId: number | null;
  veiculosId: number[];
  carroceriasId: number[];
  licencasId: number[];
  servicosId: number[];
  nomeMunicipioOrigem: string;
  nomeMunicipioDestino: string;
  siglaEstadoOrigem: string;
  siglaEstadoDestino: string;
  veiculos: string[];
  carrocerias: string[];
  servicos: string[];
  volumes: number[];
}

export interface IUserData {
  name: string;
  email: string;
  telefone: string;
  cargo: string;
}

export interface IButtonProps {
  onClick?: (e: any) => (void | Promise<void>) | null;
  disabled?: boolean;
  type: string;
  role?: string;
  submit?: boolean;
  children: JSX.Element | string;
  name?: string;
}

export interface IInputProps {
  type: string;
  value?: any;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  disabled?: boolean;
  placeholder: string;
  width?: string;
  required?: boolean;
  label?: string;
  height?: string;
  name: string;
  maxLength?: number;
  mask?: string;
  defaultValue?: string;
  id?: string;
}
