export type UniformType =
  | 'uniform1f'
  | 'uniform3f'
  | 'uniform1fv'
  | 'uniform3fv'
  | 'uniform2f';

export interface UniformData {
  value: number | number[] | number[][];
  type: UniformType;
}

export interface Uniforms {
  [key: string]: UniformData;
}
