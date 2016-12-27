/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */

import {RangeLike, CompositeRange1D} from '../range';
import {IDType, IDTypeLike} from '../idtype';
import {IHistAbleDataType, IValueTypeDesc, IValueType, IDataDescription} from '../datatype';
import {IStratification} from '../stratification/IStratification';
import {IStatistics, IHistogram} from '../math';

export interface IVectorDataDescription extends IDataDescription {
  readonly value: IValueTypeDesc;
  readonly idtype: IDTypeLike;
  readonly size: number;
}

export interface IVector extends IHistAbleDataType {
  readonly desc: IVectorDataDescription;
  /**
   * id type
   */
  readonly idtype: IDType;

  /**
   * return the associated ids of this vector
   * @param range optional subset
   */
  names(range?: RangeLike): Promise<string[]>;
  /**
   * creates a new view on this matrix specified by the given range
   * @param range optional subset
   */
  view(range?: RangeLike): IVector;
  /**
   * returns a promise for getting one cell
   * @param i at a specific position
   */
  at(i: number): Promise<IValueType>;
  /**
   * returns a promise for getting the data as two dimensional array
   * @param range optional subset
   */
  data(range?: RangeLike): Promise<IValueType[]>;

  /**
   * returns this vector statistics
   * TODO should also support range?
   */
  stats(): Promise<IStatistics>;

  /**
   * computes a histogram of this vector
   * @param bins number of bins by default guessed
   * @param range optional subset
   */
  hist(bins?: number, range?: RangeLike): Promise<IHistogram>;


  /**
   * Sorts an array.
   * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  sort(compareFn?: (a: IValueType, b: IValueType) => number, thisArg?: any): Promise<IVector>;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: IValueType, index: number) => boolean, thisArg?: any): Promise<boolean>;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: IValueType, index: number) => boolean, thisArg?: any): Promise<boolean>;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: IValueType, index: number) => void, thisArg?: any): void;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: IValueType, index: number) => boolean, thisArg?: any): Promise<IVector>;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  reduce<T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T, initialValue?: T, thisArg?: any): Promise<T>;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  reduce<T,U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U, thisArg?: any): Promise<U>;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  reduceRight<T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T, initialValue?: T, thisArg?: any): Promise<T>;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  reduceRight<T,U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U, thisArg?: any): Promise<U>;


  /**
   * return the range of this vector as a grouped range, depending on the type this might be a single group or multiple ones
   */
  groups(): Promise<CompositeRange1D>;

  /**
   * similar to groups() but returns a stratification
   * @deprecated use asStratification instead
   */
  stratification(): Promise<IStratification>;

  /**
   * similar to groups() but returns a stratification
   */
  asStratification(): Promise<IStratification>;
}

export default IVector;