import { ObjectType } from '../../../common/type';
import { RuleFunc } from '../../../utils/type';

export interface FormContextValueType {
  errors?: ObjectType<Error>;
  value?: ObjectType;
  formFunc?: {
    setValue: (n: string, v: any) => void;
    unbind: (n: string, reserveAble?: boolean) => void;
    bind: (n: string, df: any, validate: () => void) => void;
    setError: (n: string, e: Error | undefined) => void;
    clearErrors: () => void;
  };
}

export interface BaseFormControlProps<T> {
  name: string;
  defaultValue: T | undefined;
  onChange: ((value: T, ...other: any[]) => void) | undefined;
  reservable: boolean | undefined;
  rules: RuleFunc<T>[] | undefined;
  onError: ((error: Error | undefined) => void) | undefined;
}
