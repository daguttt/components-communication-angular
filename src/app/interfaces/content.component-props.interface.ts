import { Relatives } from "./relatives.interface";

export interface ContentComponentProps {
  relatives: Relatives;
  btnsFns: BtnsFns;
}

export interface BtnsFns {
  fn1(): void;
  fn2(): void;
}
