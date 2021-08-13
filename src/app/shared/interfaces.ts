import {formBuilderNode} from '../reducers/formElements/form-builder-reducer';

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface IPropertiesObj {
  id: number;
  type: string;
  styles: {
    width?: string;
    height?: string;
    borderWidth?: string;
    color?: string;
    borderStyle?: string;
    borderColor: string;
    borderRadius: string;
    fontSize?: string;
    fontWeight?: string;
    backgroundColor?: string;
  };
}
interface IElements {
  [index: number]: IPropertiesObj;
}
export interface IFormBuilder {
  elements: IPropertiesObj[] | null;
}



