
export enum Filter_Operator {
  UNKNOWN = 0,
  EQUALS = 1,
  NOT_EQUALS = 2,
  IN = 3,
  NOT_IN = 4,
  GREATHER_THAN = 5,
  GREATHER_THAN_OR_EQUALS = 6,
  LESS_THAN = 7,
  LESS_THAN_OR_EQUALS = 8,
  IS_NULL = 9,
  IS_NOT_NULL = 10,
  CONTAINS_ANY = 11,
  CONTAINS_ALL = 12,
  CONTAINS_NONE = 13,
  NOT_EMPTY = 14,
}

export interface BoolList {
  bool_values: boolean[];
}

export interface StringList {
  string_values: string[];
}

export interface Int64List {
  int64_values: string[];
}

export interface Uint64Values {
  uint64_values: string[];
}

export interface FloatList {
  float_values: number[];
}

export interface DoubleList {
  double_values: number[];
}

export interface BytesList {
  bytes_values: Uint8Array[];
}

export interface Value {
  bool_value?: boolean;
  string_value?: string;
  int64_value?: string;
  uint64_value?: string;
  float_value?: number;
  double_value?: number;
  bytes_value?: Uint8Array;
  bool_list?: BoolList;
  string_list?: StringList;
  int64_list?: Int64List;
  uint64_list?: Uint64Values;
  float_list?: FloatList;
  double_list?: DoubleList;
  bytes_list?: BytesList;
}

export interface Filter {
  operator: Filter_Operator;
  value?: Value;
}
