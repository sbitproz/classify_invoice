export type Dictionary = DictionaryGeneric<any>;

export interface DictionaryGeneric<T> {
  [id: string]: T;
}
