/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by sam on 10.02.2015.
 */

/**
 * Use a local variable as context.
 * @type {Storage}
 */
const context : any = {};

/**
 * Store any value for a given key and returns the previous stored value.
 * Returns `null` if no previous value was found.
 * @param key
 * @param value
 * @returns {any}
 */
export function store(key: string, value: any) {
  var bak = context[key];
  context[key] = value;
  return bak;
}

/**
 * Removes the key-value pair from the session
 * @param key
 */
export function remove(key: string) {
  delete context[key];
}

/**
 * Returns true if the key exists in the session. Otherwise returns false.
 * @param key
 * @returns {boolean}
 */
export function has(key: string) {
  return key in context;
}

/**
 * Returns the value for the given key if it exists in the session.
 * Otherwise returns the `default_` parameter, which is by default `null`.
 * @param key
 * @param default_
 * @returns {T}
 */
export function retrieve<T>(key: string, default_ : T = null) : T {
  return has(key) ? context[key] : default_;
}
