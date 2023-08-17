declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGlobal: string;
  }
}

declare const global: typeof globalThis & {
  MYGLOBAL: string;
};
