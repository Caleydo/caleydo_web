/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 05.08.2014.
 */

import {IDataType} from '../data/datatype';
import {Range} from '../range/Range';
/**
 *
 */
export interface ILocateAble {
  /**
   * data represented by this vis
   */
  data: IDataType;

  /**
   * locate method, by convention, when just a single range is given, then return
   * just a promise with this range, else an array
   * the return type should be something convertable using the geom module
   */
  locate(...range: Range[]): Promise<any>;

  locateById(...range: Range[]): Promise<any>;
}
