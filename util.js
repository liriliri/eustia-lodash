// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory() }
}(this, function ()
{
    var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ _stackClear ------------------------------ */

    var _stackClear = _._stackClear = (function (exports)
    {
        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        function stackClear() {
          this.__data__ = { 'array': [], 'map': null };
        }

        exports = stackClear;

        return exports;
    })({});

    /* ------------------------------ _arrayEach ------------------------------ */

    var _arrayEach = _._arrayEach = (function (exports)
    {
        /**
         * A specialized version of `_.forEach` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns `array`.
         */
        function arrayEach(array, iteratee) {
          var index = -1,
              length = array.length;

          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }

        exports = arrayEach;

        return exports;
    })({});

    /* ------------------------------ _arrayMap ------------------------------ */

    var _arrayMap = _._arrayMap = (function (exports)
    {
        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
          var index = -1,
              length = array.length,
              result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }

        exports = arrayMap;

        return exports;
    })({});

    /* ------------------------------ _arraySome ------------------------------ */

    var _arraySome = _._arraySome = (function (exports)
    {
        /**
         * A specialized version of `_.some` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */
        function arraySome(array, predicate) {
          var index = -1,
              length = array.length;

          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }

        exports = arraySome;

        return exports;
    })({});

    /* ------------------------------ eq ------------------------------ */

    var eq = _.eq = (function (exports)
    {
        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }

        exports = eq;

        return exports;
    })({});

    /* ------------------------------ _assocIndexOf ------------------------------ */

    var _assocIndexOf = _._assocIndexOf = (function (exports)
    {
        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to search.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        exports = assocIndexOf;

        return exports;
    })({});

    /* ------------------------------ _assocDelete ------------------------------ */

    var _assocDelete = _._assocDelete = (function (exports)
    {
        /** Used for built-in method references. */
        var arrayProto = Array.prototype;

        /** Built-in value references. */
        var splice = arrayProto.splice;

        /**
         * Removes `key` and its value from the associative array.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function assocDelete(array, key) {
          var index = _assocIndexOf(array, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = array.length - 1;
          if (index == lastIndex) {
            array.pop();
          } else {
            splice.call(array, index, 1);
          }
          return true;
        }

        exports = assocDelete;

        return exports;
    })({});

    /* ------------------------------ _stackDelete ------------------------------ */

    var _stackDelete = _._stackDelete = (function (exports)
    {
        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function stackDelete(key) {
          var data = this.__data__,
              array = data.array;

          return array ? _assocDelete(array, key) : data.map['delete'](key);
        }

        exports = stackDelete;

        return exports;
    })({});

    /* ------------------------------ _assocGet ------------------------------ */

    var _assocGet = _._assocGet = (function (exports)
    {
        /**
         * Gets the associative array value for `key`.
         *
         * @private
         * @param {Array} array The array to query.
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function assocGet(array, key) {
          var index = _assocIndexOf(array, key);
          return index < 0 ? undefined : array[index][1];
        }

        exports = assocGet;

        return exports;
    })({});

    /* ------------------------------ _stackGet ------------------------------ */

    var _stackGet = _._stackGet = (function (exports)
    {
        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function stackGet(key) {
          var data = this.__data__,
              array = data.array;

          return array ? _assocGet(array, key) : data.map.get(key);
        }

        exports = stackGet;

        return exports;
    })({});

    /* ------------------------------ _assocHas ------------------------------ */

    var _assocHas = _._assocHas = (function (exports)
    {
        /**
         * Checks if an associative array value for `key` exists.
         *
         * @private
         * @param {Array} array The array to query.
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function assocHas(array, key) {
          return _assocIndexOf(array, key) > -1;
        }

        exports = assocHas;

        return exports;
    })({});

    /* ------------------------------ _stackHas ------------------------------ */

    var _stackHas = _._stackHas = (function (exports)
    {
        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function stackHas(key) {
          var data = this.__data__,
              array = data.array;

          return array ? _assocHas(array, key) : data.map.has(key);
        }

        exports = stackHas;

        return exports;
    })({});

    /* ------------------------------ _assocSet ------------------------------ */

    var _assocSet = _._assocSet = (function (exports)
    {
        /**
         * Sets the associative array `key` to `value`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         */
        function assocSet(array, key, value) {
          var index = _assocIndexOf(array, key);
          if (index < 0) {
            array.push([key, value]);
          } else {
            array[index][1] = value;
          }
        }

        exports = assocSet;

        return exports;
    })({});

    /* ------------------------------ _createBaseFor ------------------------------ */

    var _createBaseFor = _._createBaseFor = (function (exports)
    {
        /**
         * Creates a base function for methods like `_.forIn` and `_.forOwn`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }

        exports = createBaseFor;

        return exports;
    })({});

    /* ------------------------------ _baseFor ------------------------------ */

    var _baseFor = _._baseFor = (function (exports)
    {
        /**
         * The base implementation of `baseForOwn` which iterates over `object`
         * properties returned by `keysFunc` and invokes `iteratee` for each property.
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseFor = _createBaseFor();

        exports = baseFor;

        return exports;
    })({});

    /* ------------------------------ _getPrototype ------------------------------ */

    var _getPrototype = _._getPrototype = (function (exports)
    {
        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeGetPrototype = Object.getPrototypeOf;

        /**
         * Gets the `[[Prototype]]` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {null|Object} Returns the `[[Prototype]]`.
         */
        function getPrototype(value) {
          return nativeGetPrototype(Object(value));
        }

        exports = getPrototype;

        return exports;
    })({});

    /* ------------------------------ _baseHas ------------------------------ */

    var _baseHas = _._baseHas = (function (exports)
    {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * The base implementation of `_.has` without support for deep paths.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */
        function baseHas(object, key) {
          // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
          // that are composed entirely of index properties, return `false` for
          // `hasOwnProperty` checks of them.
          return hasOwnProperty.call(object, key) ||
            (typeof object == 'object' && key in object && _getPrototype(object) === null);
        }

        exports = baseHas;

        return exports;
    })({});

    /* ------------------------------ _baseHasIn ------------------------------ */

    var _baseHasIn = _._baseHasIn = (function (exports)
    {
        /**
         * The base implementation of `_.hasIn` without support for deep paths.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */
        function baseHasIn(object, key) {
          return key in Object(object);
        }

        exports = baseHasIn;

        return exports;
    })({});

    /* ------------------------------ isObject ------------------------------ */

    var isObject = _.isObject = (function (exports)
    {
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }

        exports = isObject;

        return exports;
    })({});

    /* ------------------------------ isObjectLike ------------------------------ */

    var isObjectLike = _.isObjectLike = (function (exports)
    {
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }

        exports = isObjectLike;

        return exports;
    })({});

    /* ------------------------------ _equalArrays ------------------------------ */

    var _equalArrays = _._equalArrays = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var UNORDERED_COMPARE_FLAG = 1,
            PARTIAL_COMPARE_FLAG = 2;

        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `array` and `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */
        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
          var index = -1,
              isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
              arrLength = array.length,
              othLength = other.length;

          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(array);
          if (stacked) {
            return stacked == other;
          }
          var result = true;
          stack.set(array, other);

          // Ignore non-index properties.
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            if (customizer) {
              var compared = isPartial
                ? customizer(othValue, arrValue, index, other, array, stack)
                : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            // Recursively compare arrays (susceptible to call stack limits).
            if (isUnordered) {
              if (!_arraySome(other, function(othValue) {
                    return arrValue === othValue ||
                      equalFunc(arrValue, othValue, customizer, bitmask, stack);
                  })) {
                result = false;
                break;
              }
            } else if (!(
                  arrValue === othValue ||
                    equalFunc(arrValue, othValue, customizer, bitmask, stack)
                )) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          return result;
        }

        exports = equalArrays;

        return exports;
    })({});

    /* ------------------------------ isArray ------------------------------ */

    var isArray = _.isArray = (function (exports)
    {
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @type {Function}
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        exports = isArray;

        return exports;
    })({});

    /* ------------------------------ _isHostObject ------------------------------ */

    var _isHostObject = _._isHostObject = (function (exports)
    {
        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;
          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }
          return result;
        }

        exports = isHostObject;

        return exports;
    })({});

    /* ------------------------------ identity ------------------------------ */

    var identity = _.identity = (function (exports)
    {
        /**
         * This method returns the first argument given to it.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'user': 'fred' };
         *
         * _.identity(object) === object;
         * // => true
         */
        function identity(value) {
          return value;
        }

        exports = identity;

        return exports;
    })({});

    /* ------------------------------ _baseKeys ------------------------------ */

    var _baseKeys = _._baseKeys = (function (exports)
    {
        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeKeys = Object.keys;

        /**
         * The base implementation of `_.keys` which doesn't skip the constructor
         * property of prototypes or treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
          return nativeKeys(Object(object));
        }

        exports = baseKeys;

        return exports;
    })({});

    /* ------------------------------ _matchesStrictComparable ------------------------------ */

    var _matchesStrictComparable = _._matchesStrictComparable = (function (exports)
    {
        /**
         * A specialized version of `matchesProperty` for source values suitable
         * for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new function.
         */
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue &&
              (srcValue !== undefined || (key in Object(object)));
          };
        }

        exports = matchesStrictComparable;

        return exports;
    })({});

    /* ------------------------------ _isStrictComparable ------------------------------ */

    var _isStrictComparable = _._isStrictComparable = (function (exports)
    {
        /**
         * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` if suitable for strict
         *  equality comparisons, else `false`.
         */
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }

        exports = isStrictComparable;

        return exports;
    })({});

    /* ------------------------------ _baseProperty ------------------------------ */

    var _baseProperty = _._baseProperty = (function (exports)
    {
        /**
         * The base implementation of `_.property` without support for deep paths.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @returns {Function} Returns the new function.
         */
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }

        exports = baseProperty;

        return exports;
    })({});

    /* ------------------------------ _baseTimes ------------------------------ */

    var _baseTimes = _._baseTimes = (function (exports)
    {
        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
              result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        exports = baseTimes;

        return exports;
    })({});

    /* ------------------------------ _baseToPairs ------------------------------ */

    var _baseToPairs = _._baseToPairs = (function (exports)
    {
        /**
         * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
         * of key-value pairs for `object` corresponding to the property names of `props`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} props The property names to get values for.
         * @returns {Object} Returns the new array of key-value pairs.
         */
        function baseToPairs(object, props) {
          return _arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }

        exports = baseToPairs;

        return exports;
    })({});

    /* ------------------------------ _checkGlobal ------------------------------ */

    var _checkGlobal = _._checkGlobal = (function (exports)
    {
        /**
         * Checks if `value` is a global object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {null|Object} Returns `value` if it's a global object, else `null`.
         */
        function checkGlobal(value) {
          return (value && value.Object === Object) ? value : null;
        }

        exports = checkGlobal;

        return exports;
    })({});

    /* ------------------------------ _root ------------------------------ */

    var _root = _._root = (function (exports)
    {
        /** Used to determine if values are of the language type `Object`. */
        var objectTypes = {
          'function': true,
          'object': true
        };

        /** Detect free variable `exports`. */
        var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
          ? exports
          : undefined;

        /** Detect free variable `module`. */
        var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
          ? module
          : undefined;

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = _checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

        /** Detect free variable `self`. */
        var freeSelf = _checkGlobal(objectTypes[typeof self] && self);

        /** Detect free variable `window`. */
        var freeWindow = _checkGlobal(objectTypes[typeof window] && window);

        /** Detect `this` as the global object. */
        var thisGlobal = _checkGlobal(objectTypes[typeof this] && this);

        /**
         * Used as a reference to the global object.
         *
         * The `this` value is used if it's the global object to avoid Greasemonkey's
         * restricted `window` object, otherwise the `window` object is used.
         */
        var root = freeGlobal ||
          ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
            freeSelf || thisGlobal || Function('return this')();

        exports = root;

        return exports;
    })({});

    /* ------------------------------ _Symbol ------------------------------ */

    var _Symbol = _._Symbol = (function (exports)
    {
        /** Built-in value references. */
        var Symbol = _root.Symbol;

        exports = Symbol;

        return exports;
    })({});

    /* ------------------------------ _Uint8Array ------------------------------ */

    var _Uint8Array = _._Uint8Array = (function (exports)
    {
        /** Built-in value references. */
        var Uint8Array = _root.Uint8Array;

        exports = Uint8Array;

        return exports;
    })({});

    /* ------------------------------ _mapToArray ------------------------------ */

    var _mapToArray = _._mapToArray = (function (exports)
    {
        /**
         * Converts `map` to an array.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the converted array.
         */
        function mapToArray(map) {
          var index = -1,
              result = Array(map.size);

          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }

        exports = mapToArray;

        return exports;
    })({});

    /* ------------------------------ _setToArray ------------------------------ */

    var _setToArray = _._setToArray = (function (exports)
    {
        /**
         * Converts `set` to an array.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the converted array.
         */
        function setToArray(set) {
          var index = -1,
              result = Array(set.size);

          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }

        exports = setToArray;

        return exports;
    })({});

    /* ------------------------------ _equalByTag ------------------------------ */

    var _equalByTag = _._equalByTag = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var UNORDERED_COMPARE_FLAG = 1,
            PARTIAL_COMPARE_FLAG = 2;

        /** `Object#toString` result references. */
        var boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            symbolTag = '[object _Symbol]';

        var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]';

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

        /**
         * A specialized version of `baseIsEqualDeep` for comparing objects of
         * the same `toStringTag`.
         *
         * **Note:** This function only supports comparing values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {string} tag The `toStringTag` of the objects to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
          switch (tag) {
            case dataViewTag:
              if ((object.byteLength != other.byteLength) ||
                  (object.byteOffset != other.byteOffset)) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;

            case arrayBufferTag:
              if ((object.byteLength != other.byteLength) ||
                  !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
                return false;
              }
              return true;

            case boolTag:
            case dateTag:
              // Coerce dates and booleans to numbers, dates to milliseconds and
              // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
              // not equal.
              return +object == +other;

            case errorTag:
              return object.name == other.name && object.message == other.message;

            case numberTag:
              // Treat `NaN` vs. `NaN` as equal.
              return (object != +object) ? other != +other : object == +other;

            case regexpTag:
            case stringTag:
              // Coerce regexes to strings and treat strings, primitives and objects,
              // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
              // for more details.
              return object == (other + '');

            case mapTag:
              var convert = _mapToArray;

            case setTag:
              var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
              convert || (convert = _setToArray);

              if (object.size != other.size && !isPartial) {
                return false;
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= UNORDERED_COMPARE_FLAG;
              stack.set(object, other);

              // Recursively compare objects (susceptible to call stack limits).
              return _equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }

        exports = equalByTag;

        return exports;
    })({});

    /* ------------------------------ _getLength ------------------------------ */

    var _getLength = _._getLength = (function (exports)
    {
        /**
         * Gets the "length" property value of `object`.
         *
         * **Note:** This function is used to avoid a
         * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
         * Safari on at least iOS 8.1-8.3 ARM64.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {*} Returns the "length" value.
         */
        var getLength = _baseProperty('length');

        exports = getLength;

        return exports;
    })({});

    /* ------------------------------ _toSource ------------------------------ */

    var _toSource = _._toSource = (function (exports)
    {
        /** Used to resolve the decompiled source of functions. */
        var funcToString = Function.prototype.toString;

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return (func + '');
            } catch (e) {}
          }
          return '';
        }

        exports = toSource;

        return exports;
    })({});

    /* ------------------------------ _isIndex ------------------------------ */

    var _isIndex = _._isIndex = (function (exports)
    {
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return value > -1 && value % 1 == 0 && value < length;
        }

        exports = isIndex;

        return exports;
    })({});

    /* ------------------------------ isLength ------------------------------ */

    var isLength = _.isLength = (function (exports)
    {
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This function is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length,
         *  else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return typeof value == 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        exports = isLength;

        return exports;
    })({});

    /* ------------------------------ isTypedArray ------------------------------ */

    var isTypedArray = _.isTypedArray = (function (exports)
    {
        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            objectTag = '[object Object]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            weakMapTag = '[object WeakMap]';

        var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
        typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
        typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
        typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
        typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
        typedArrayTags[errorTag] = typedArrayTags[funcTag] =
        typedArrayTags[mapTag] = typedArrayTags[numberTag] =
        typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
        typedArrayTags[setTag] = typedArrayTags[stringTag] =
        typedArrayTags[weakMapTag] = false;

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        function isTypedArray(value) {
          return isObjectLike(value) &&
            isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }

        exports = isTypedArray;

        return exports;
    })({});

    /* ------------------------------ isString ------------------------------ */

    var isString = _.isString = (function (exports)
    {
        /** `Object#toString` result references. */
        var stringTag = '[object String]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        function isString(value) {
          return typeof value == 'string' ||
            (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
        }

        exports = isString;

        return exports;
    })({});

    /* ------------------------------ isSymbol ------------------------------ */

    var isSymbol = _.isSymbol = (function (exports)
    {
        /** `Object#toString` result references. */
        var symbolTag = '[object Symbol]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return typeof value == 'symbol' ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag);
        }

        exports = isSymbol;

        return exports;
    })({});

    /* ------------------------------ _isKey ------------------------------ */

    var _isKey = _._isKey = (function (exports)
    {
        /** Used to match property names within property paths. */
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/;

        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */
        function isKey(value, object) {
          var type = typeof value;
          if (type == 'number' || type == 'symbol') {
            return true;
          }
          return !isArray(value) &&
            (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
              (object != null && value in Object(object)));
        }

        exports = isKey;

        return exports;
    })({});

    /* ------------------------------ _isKeyable ------------------------------ */

    var _isKeyable = _._isKeyable = (function (exports)
    {
        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value;
          return type == 'number' || type == 'boolean' ||
            (type == 'string' && value != '__proto__') || value == null;
        }

        exports = isKeyable;

        return exports;
    })({});

    /* ------------------------------ _isPrototype ------------------------------ */

    var _isPrototype = _._isPrototype = (function (exports)
    {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

          return value === proto;
        }

        exports = isPrototype;

        return exports;
    })({});

    /* ------------------------------ toString ------------------------------ */

    var toString = _.toString = (function (exports)
    {
        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        function toString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == 'string') {
            return value;
          }
          if (value == null) {
            return '';
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = (value + '');
          return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }

        exports = toString;

        return exports;
    })({});

    /* ------------------------------ isFunction ------------------------------ */

    var isFunction = _.isFunction = (function (exports)
    {
        /** `Object#toString` result references. */
        var funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8 which returns 'object' for typed array and weak map constructors,
          // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        exports = isFunction;

        return exports;
    })({});

    /* ------------------------------ isArrayLike ------------------------------ */

    var isArrayLike = _.isArrayLike = (function (exports)
    {
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(_getLength(value)) && !isFunction(value);
        }

        exports = isArrayLike;

        return exports;
    })({});

    /* ------------------------------ _createBaseEach ------------------------------ */

    var _createBaseEach = _._createBaseEach = (function (exports)
    {
        /**
         * Creates a `baseEach` or `baseEachRight` function.
         *
         * @private
         * @param {Function} eachFunc The function to iterate over a collection.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);

            while ((fromRight ? index-- : ++index < length)) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }

        exports = createBaseEach;

        return exports;
    })({});

    /* ------------------------------ isArrayLikeObject ------------------------------ */

    var isArrayLikeObject = _.isArrayLikeObject = (function (exports)
    {
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        exports = isArrayLikeObject;

        return exports;
    })({});

    /* ------------------------------ isArguments ------------------------------ */

    var isArguments = _.isArguments = (function (exports)
    {
        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
          // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
            (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }

        exports = isArguments;

        return exports;
    })({});

    /* ------------------------------ _indexKeys ------------------------------ */

    var _indexKeys = _._indexKeys = (function (exports)
    {
        /**
         * Creates an array of index keys for `object` values of arrays,
         * `arguments` objects, and strings, otherwise `null` is returned.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array|null} Returns index keys, else `null`.
         */
        function indexKeys(object) {
          var length = object ? object.length : undefined;
          if (isLength(length) &&
              (isArray(object) || isString(object) || isArguments(object))) {
            return _baseTimes(length, String);
          }
          return null;
        }

        exports = indexKeys;

        return exports;
    })({});

    /* ------------------------------ keys ------------------------------ */

    var keys = _.keys = (function (exports)
    {
        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
          var isProto = _isPrototype(object);
          if (!(isProto || isArrayLike(object))) {
            return _baseKeys(object);
          }
          var indexes = _indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;

          for (var key in object) {
            if (_baseHas(object, key) &&
                !(skipIndexes && (key == 'length' || _isIndex(key, length))) &&
                !(isProto && key == 'constructor')) {
              result.push(key);
            }
          }
          return result;
        }

        exports = keys;

        return exports;
    })({});

    /* ------------------------------ _baseForOwn ------------------------------ */

    var _baseForOwn = _._baseForOwn = (function (exports)
    {
        /**
         * The base implementation of `_.forOwn` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function _baseForOwn(object, iteratee) {
          return object && _baseFor(object, iteratee, keys);
        }

        exports = _baseForOwn;

        return exports;
    })({});

    /* ------------------------------ _baseEach ------------------------------ */

    var _baseEach = _._baseEach = (function (exports)
    {
        /**
         * The base implementation of `_.forEach` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         */
        var baseEach = _createBaseEach(_baseForOwn);

        exports = baseEach;

        return exports;
    })({});

    /* ------------------------------ _equalObjects ------------------------------ */

    var _equalObjects = _._equalObjects = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var PARTIAL_COMPARE_FLAG = 2;

        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;

          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : _baseHas(other, key))) {
              return false;
            }
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);

          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            if (customizer) {
              var compared = isPartial
                ? customizer(othValue, objValue, key, other, object, stack)
                : customizer(objValue, othValue, key, object, other, stack);
            }
            // Recursively compare objects (susceptible to call stack limits).
            if (!(compared === undefined
                  ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
                  : compared
                )) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;

            // Non `Object` object instances with different constructors are not equal.
            if (objCtor != othCtor &&
                ('constructor' in object && 'constructor' in other) &&
                !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                  typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          return result;
        }

        exports = equalObjects;

        return exports;
    })({});

    /* ------------------------------ toPairs ------------------------------ */

    var toPairs = _.toPairs = (function (exports)
    {
        /**
         * Creates an array of own enumerable string keyed-value pairs for `object`
         * which can be consumed by `_.fromPairs`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @alias entries
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the new array of key-value pairs.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.toPairs(new Foo);
         * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
         */
        function toPairs(object) {
          return _baseToPairs(object, keys(object));
        }

        exports = toPairs;

        return exports;
    })({});

    /* ------------------------------ _getMatchData ------------------------------ */

    var _getMatchData = _._getMatchData = (function (exports)
    {
        /**
         * Gets the property names, values, and compare flags of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the match data of `object`.
         */
        function getMatchData(object) {
          var result = toPairs(object),
              length = result.length;

          while (length--) {
            result[length][2] = _isStrictComparable(result[length][1]);
          }
          return result;
        }

        exports = getMatchData;

        return exports;
    })({});

    /* ------------------------------ isNative ------------------------------ */

    var isNative = _.isNative = (function (exports)
    {
        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = Function.prototype.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' +
          funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
        );

        /**
         * Checks if `value` is a native function.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         * @example
         *
         * _.isNative(Array.prototype.push);
         * // => true
         *
         * _.isNative(_);
         * // => false
         */
        function isNative(value) {
          if (!isObject(value)) {
            return false;
          }
          var pattern = (isFunction(value) || _isHostObject(value)) ? reIsNative : reIsHostCtor;
          return pattern.test(_toSource(value));
        }

        exports = isNative;

        return exports;
    })({});

    /* ------------------------------ _getNative ------------------------------ */

    var _getNative = _._getNative = (function (exports)
    {
        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = object[key];
          return isNative(value) ? value : undefined;
        }

        exports = getNative;

        return exports;
    })({});

    /* ------------------------------ _DataView ------------------------------ */

    var _DataView = _._DataView = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var DataView = _getNative(_root, 'DataView');

        exports = DataView;

        return exports;
    })({});

    /* ------------------------------ _Map ------------------------------ */

    var _Map = _._Map = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var Map = _getNative(_root, 'Map');

        exports = Map;

        return exports;
    })({});

    /* ------------------------------ _Promise ------------------------------ */

    var _Promise = _._Promise = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var Promise = _getNative(_root, 'Promise');

        exports = Promise;

        return exports;
    })({});

    /* ------------------------------ _Set ------------------------------ */

    var _Set = _._Set = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var Set = _getNative(_root, 'Set');

        exports = Set;

        return exports;
    })({});

    /* ------------------------------ _WeakMap ------------------------------ */

    var _WeakMap = _._WeakMap = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var WeakMap = _getNative(_root, 'WeakMap');

        exports = WeakMap;

        return exports;
    })({});

    /* ------------------------------ _getTag ------------------------------ */

    var _getTag = _._getTag = (function (exports)
    {
        /** `Object#toString` result references. */
        var mapTag = '[object _Map]',
            objectTag = '[object Object]',
            promiseTag = '[object _Promise]',
            setTag = '[object _Set]',
            weakMapTag = '[object _WeakMap]';

        var dataViewTag = '[object _DataView]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Used to detect maps, sets, and weakmaps. */
        var dataViewCtorString = _toSource(_DataView),
            mapCtorString = _toSource(_Map),
            promiseCtorString = _toSource(_Promise),
            setCtorString = _toSource(_Set),
            weakMapCtorString = _toSource(_WeakMap);

        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function getTag(value) {
          return objectToString.call(value);
        }

        // Fallback for data views, maps, sets, and weak maps in IE 11,
        // for data views in Edge, and promises in Node.js.
        if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
            (_Map && getTag(new _Map) != mapTag) ||
            (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
            (_Set && getTag(new _Set) != setTag) ||
            (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
          getTag = function(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? _toSource(Ctor) : undefined;

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString: return dataViewTag;
                case mapCtorString: return mapTag;
                case promiseCtorString: return promiseTag;
                case setCtorString: return setTag;
                case weakMapCtorString: return weakMapTag;
              }
            }
            return result;
          };
        }

        exports = getTag;

        return exports;
    })({});

    /* ------------------------------ _nativeCreate ------------------------------ */

    var _nativeCreate = _._nativeCreate = (function (exports)
    {
        /* Built-in method references that are verified to be native. */
        var nativeCreate = _getNative(Object, 'create');

        exports = nativeCreate;

        return exports;
    })({});

    /* ------------------------------ _Hash ------------------------------ */

    var _Hash = _._Hash = (function (exports)
    {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @returns {Object} Returns the new hash object.
         */
        function Hash() {}

        // Avoid inheriting from `Object.prototype` when possible.
        Hash.prototype = _nativeCreate ? _nativeCreate(null) : objectProto;

        exports = Hash;

        return exports;
    })({});

    /* ------------------------------ _mapClear ------------------------------ */

    var _mapClear = _._mapClear = (function (exports)
    {
        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf _MapCache
         */
        function mapClear() {
          this.__data__ = {
            'hash': new _Hash,
            'map': _Map ? new _Map : [],
            'string': new _Hash
          };
        }

        exports = mapClear;

        return exports;
    })({});

    /* ------------------------------ _hashGet ------------------------------ */

    var _hashGet = _._hashGet = (function (exports)
    {
        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @param {Object} hash The hash to query.
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(hash, key) {
          if (_nativeCreate) {
            var result = hash[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
        }

        exports = hashGet;

        return exports;
    })({});

    /* ------------------------------ _mapGet ------------------------------ */

    var _mapGet = _._mapGet = (function (exports)
    {
        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf _MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapGet(key) {
          var data = this.__data__;
          if (_isKeyable(key)) {
            return _hashGet(typeof key == 'string' ? data.string : data.hash, key);
          }
          return _Map ? data.map.get(key) : _assocGet(data.map, key);
        }

        exports = mapGet;

        return exports;
    })({});

    /* ------------------------------ _hashHas ------------------------------ */

    var _hashHas = _._hashHas = (function (exports)
    {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @param {Object} hash The hash to query.
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(hash, key) {
          return _nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
        }

        exports = hashHas;

        return exports;
    })({});

    /* ------------------------------ _hashDelete ------------------------------ */

    var _hashDelete = _._hashDelete = (function (exports)
    {
        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(hash, key) {
          return _hashHas(hash, key) && delete hash[key];
        }

        exports = hashDelete;

        return exports;
    })({});

    /* ------------------------------ _mapDelete ------------------------------ */

    var _mapDelete = _._mapDelete = (function (exports)
    {
        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf _MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapDelete(key) {
          var data = this.__data__;
          if (_isKeyable(key)) {
            return _hashDelete(typeof key == 'string' ? data.string : data.hash, key);
          }
          return _Map ? data.map['delete'](key) : _assocDelete(data.map, key);
        }

        exports = mapDelete;

        return exports;
    })({});

    /* ------------------------------ _mapHas ------------------------------ */

    var _mapHas = _._mapHas = (function (exports)
    {
        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf _MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapHas(key) {
          var data = this.__data__;
          if (_isKeyable(key)) {
            return _hashHas(typeof key == 'string' ? data.string : data.hash, key);
          }
          return _Map ? data.map.has(key) : _assocHas(data.map, key);
        }

        exports = mapHas;

        return exports;
    })({});

    /* ------------------------------ _hashSet ------------------------------ */

    var _hashSet = _._hashSet = (function (exports)
    {
        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         */
        function hashSet(hash, key, value) {
          hash[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        }

        exports = hashSet;

        return exports;
    })({});

    /* ------------------------------ _mapSet ------------------------------ */

    var _mapSet = _._mapSet = (function (exports)
    {
        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf _MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapSet(key, value) {
          var data = this.__data__;
          if (_isKeyable(key)) {
            _hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
          } else if (_Map) {
            data.map.set(key, value);
          } else {
            _assocSet(data.map, key, value);
          }
          return this;
        }

        exports = mapSet;

        return exports;
    })({});

    /* ------------------------------ _MapCache ------------------------------ */

    var _MapCache = _._MapCache = (function (exports)
    {
        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */
        function MapCache(values) {
          var index = -1,
              length = values ? values.length : 0;

          this.clear();
          while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = _mapClear;
        MapCache.prototype['delete'] = _mapDelete;
        MapCache.prototype.get = _mapGet;
        MapCache.prototype.has = _mapHas;
        MapCache.prototype.set = _mapSet;

        exports = MapCache;

        return exports;
    })({});

    /* ------------------------------ _stackSet ------------------------------ */

    var _stackSet = _._stackSet = (function (exports)
    {
        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200;

        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */
        function stackSet(key, value) {
          var data = this.__data__,
              array = data.array;

          if (array) {
            if (array.length < (LARGE_ARRAY_SIZE - 1)) {
              _assocSet(array, key, value);
            } else {
              data.array = null;
              data.map = new _MapCache(array);
            }
          }
          var map = data.map;
          if (map) {
            map.set(key, value);
          }
          return this;
        }

        exports = stackSet;

        return exports;
    })({});

    /* ------------------------------ _Stack ------------------------------ */

    var _Stack = _._Stack = (function (exports)
    {
        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */
        function Stack(values) {
          var index = -1,
              length = values ? values.length : 0;

          this.clear();
          while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `Stack`.
        Stack.prototype.clear = _stackClear;
        Stack.prototype['delete'] = _stackDelete;
        Stack.prototype.get = _stackGet;
        Stack.prototype.has = _stackHas;
        Stack.prototype.set = _stackSet;

        exports = Stack;

        return exports;
    })({});

    /* ------------------------------ _baseIsEqualDeep ------------------------------ */

    var _baseIsEqualDeep = _._baseIsEqualDeep = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var PARTIAL_COMPARE_FLAG = 2;

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            objectTag = '[object Object]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * A specialized version of `baseIsEqual` for arrays and objects which performs
         * deep comparisons and tracks traversed objects enabling objects with circular
         * references to be compared.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} [stack] Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;

          if (!objIsArr) {
            objTag = _getTag(object);
            objTag = objTag == argsTag ? objectTag : objTag;
          }
          if (!othIsArr) {
            othTag = _getTag(other);
            othTag = othTag == argsTag ? objectTag : othTag;
          }
          var objIsObj = objTag == objectTag && !_isHostObject(object),
              othIsObj = othTag == objectTag && !_isHostObject(other),
              isSameTag = objTag == othTag;

          if (isSameTag && !objIsObj) {
            stack || (stack = new _Stack);
            return (objIsArr || isTypedArray(object))
              ? _equalArrays(object, other, equalFunc, customizer, bitmask, stack)
              : _equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
          }
          if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;

              stack || (stack = new _Stack);
              return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new _Stack);
          return _equalObjects(object, other, equalFunc, customizer, bitmask, stack);
        }

        exports = baseIsEqualDeep;

        return exports;
    })({});

    /* ------------------------------ _baseIsEqual ------------------------------ */

    var _baseIsEqual = _._baseIsEqual = (function (exports)
    {
        /**
         * The base implementation of `_.isEqual` which supports partial comparisons
         * and tracks traversed objects.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {boolean} [bitmask] The bitmask of comparison flags.
         *  The bitmask may be composed of the following flags:
         *     1 - Unordered comparison
         *     2 - Partial comparison
         * @param {Object} [stack] Tracks traversed `value` and `other` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */
        function baseIsEqual(value, other, customizer, bitmask, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
            return value !== value && other !== other;
          }
          return _baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }

        exports = baseIsEqual;

        return exports;
    })({});

    /* ------------------------------ _baseIsMatch ------------------------------ */

    var _baseIsMatch = _._baseIsMatch = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var UNORDERED_COMPARE_FLAG = 1,
            PARTIAL_COMPARE_FLAG = 2;

        /**
         * The base implementation of `_.isMatch` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Array} matchData The property names, values, and compare flags to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         */
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;

          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if ((noCustomizer && data[2])
                  ? data[1] !== object[data[0]]
                  : !(data[0] in object)
                ) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];

            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new _Stack;
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === undefined
                    ? _baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
                    : result
                  )) {
                return false;
              }
            }
          }
          return true;
        }

        exports = baseIsMatch;

        return exports;
    })({});

    /* ------------------------------ _baseMatches ------------------------------ */

    var _baseMatches = _._baseMatches = (function (exports)
    {
        /**
         * The base implementation of `_.matches` which doesn't clone `source`.
         *
         * @private
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new function.
         */
        function baseMatches(source) {
          var matchData = _getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || _baseIsMatch(object, source, matchData);
          };
        }

        exports = baseMatches;

        return exports;
    })({});

    /* ------------------------------ memoize ------------------------------ */

    var memoize = _.memoize = (function (exports)
    {
        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoizing function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
          if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || _MapCache);
          return memoized;
        }

        // Assign cache to `_.memoize`.
        memoize.Cache = _MapCache;

        exports = memoize;

        return exports;
    })({});

    /* ------------------------------ _stringToPath ------------------------------ */

    var _stringToPath = _._stringToPath = (function (exports)
    {
        /** Used to match property names within property paths. */
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

        /** Used to match backslashes in property paths. */
        var reEscapeChar = /\\(\\)?/g;

        /**
         * Converts `string` to a property path array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the property path array.
         */
        var stringToPath = memoize(function(string) {
          var result = [];
          toString(string).replace(rePropName, function(match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
          });
          return result;
        });

        exports = stringToPath;

        return exports;
    })({});

    /* ------------------------------ _castPath ------------------------------ */

    var _castPath = _._castPath = (function (exports)
    {
        /**
         * Casts `value` to a path array if it's not one.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {Array} Returns the cast property path array.
         */
        function castPath(value) {
          return isArray(value) ? value : _stringToPath(value);
        }

        exports = castPath;

        return exports;
    })({});

    /* ------------------------------ _baseGet ------------------------------ */

    var _baseGet = _._baseGet = (function (exports)
    {
        /**
         * The base implementation of `_.get` without support for default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @returns {*} Returns the resolved value.
         */
        function baseGet(object, path) {
          path = _isKey(path, object) ? [path] : _castPath(path);

          var index = 0,
              length = path.length;

          while (object != null && index < length) {
            object = object[path[index++]];
          }
          return (index && index == length) ? object : undefined;
        }

        exports = baseGet;

        return exports;
    })({});

    /* ------------------------------ _basePropertyDeep ------------------------------ */

    var _basePropertyDeep = _._basePropertyDeep = (function (exports)
    {
        /**
         * A specialized version of `baseProperty` which supports deep paths.
         *
         * @private
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new function.
         */
        function basePropertyDeep(path) {
          return function(object) {
            return _baseGet(object, path);
          };
        }

        exports = basePropertyDeep;

        return exports;
    })({});

    /* ------------------------------ property ------------------------------ */

    var property = _.property = (function (exports)
    {
        /**
         * Creates a function that returns the value at `path` of a given object.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': 2 } },
         *   { 'a': { 'b': 1 } }
         * ];
         *
         * _.map(objects, _.property('a.b'));
         * // => [2, 1]
         *
         * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
         * // => [1, 2]
         */
        function property(path) {
          return _isKey(path) ? _baseProperty(path) : _basePropertyDeep(path);
        }

        exports = property;

        return exports;
    })({});

    /* ------------------------------ get ------------------------------ */

    var get = _.get = (function (exports)
    {
        /**
         * Gets the value at `path` of `object`. If the resolved value is
         * `undefined`, the `defaultValue` is used in its place.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : _baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }

        exports = get;

        return exports;
    })({});

    /* ------------------------------ _hasPath ------------------------------ */

    var _hasPath = _._hasPath = (function (exports)
    {
        /**
         * Checks if `path` exists on `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @param {Function} hasFunc The function to check properties.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         */
        function hasPath(object, path, hasFunc) {
          path = _isKey(path, object) ? [path] : _castPath(path);

          var result,
              index = -1,
              length = path.length;

          while (++index < length) {
            var key = path[index];
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result) {
            return result;
          }
          var length = object ? object.length : 0;
          return !!length && isLength(length) && _isIndex(key, length) &&
            (isArray(object) || isString(object) || isArguments(object));
        }

        exports = hasPath;

        return exports;
    })({});

    /* ------------------------------ hasIn ------------------------------ */

    var hasIn = _.hasIn = (function (exports)
    {
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': 2 }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b');
         * // => true
         *
         * _.hasIn(object, ['a', 'b']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        function hasIn(object, path) {
          return object != null && _hasPath(object, path, _baseHasIn);
        }

        exports = hasIn;

        return exports;
    })({});

    /* ------------------------------ _baseMatchesProperty ------------------------------ */

    var _baseMatchesProperty = _._baseMatchesProperty = (function (exports)
    {
        /** Used to compose bitmasks for comparison styles. */
        var UNORDERED_COMPARE_FLAG = 1,
            PARTIAL_COMPARE_FLAG = 2;

        /**
         * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
         *
         * @private
         * @param {string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new function.
         */
        function baseMatchesProperty(path, srcValue) {
          if (_isKey(path) && _isStrictComparable(srcValue)) {
            return _matchesStrictComparable(path, srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return (objValue === undefined && objValue === srcValue)
              ? hasIn(object, path)
              : _baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
          };
        }

        exports = baseMatchesProperty;

        return exports;
    })({});

    /* ------------------------------ _baseIteratee ------------------------------ */

    var _baseIteratee = _._baseIteratee = (function (exports)
    {
        /**
         * The base implementation of `_.iteratee`.
         *
         * @private
         * @param {*} [value=_.identity] The value to convert to an iteratee.
         * @returns {Function} Returns the iteratee.
         */
        function baseIteratee(value) {
          // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
          // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
          if (typeof value == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == 'object') {
            return isArray(value)
              ? _baseMatchesProperty(value[0], value[1])
              : _baseMatches(value);
          }
          return property(value);
        }

        exports = baseIteratee;

        return exports;
    })({});

    /* ------------------------------ forEach ------------------------------ */

    var forEach = _.forEach = (function (exports)
    {
        /**
         * Iterates over elements of `collection` and invokes `iteratee` for each element.
         * The iteratee is invoked with three arguments: (value, index|key, collection).
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * **Note:** As with other "Collections" methods, objects with a "length"
         * property are iterated like arrays. To avoid this behavior use `_.forIn`
         * or `_.forOwn` for object iteration.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @alias each
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         * @example
         *
         * _([1, 2]).forEach(function(value) {
         *   console.log(value);
         * });
         * // => Logs `1` then `2`.
         *
         * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'a' then 'b' (iteration order is not guaranteed).
         */
        function forEach(collection, iteratee) {
          return (typeof iteratee == 'function' && isArray(collection))
            ? _arrayEach(collection, iteratee)
            : _baseEach(collection, _baseIteratee(iteratee));
        }

        exports = forEach;

        return exports;
    })({});

    /* ------------------------------ each ------------------------------ */

    (function ()
    {

    })();

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim = _.ltrim = (function (exports)
    {
        // TODO

        var regSpace = /^\s+/;

        exports = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var start   = 0,
                len     = str.length,
                charLen = chars.length,
                found   = true,
                i, c;

            while (found && start < len)
            {
                found = false;
                i = -1;
                c = str.charAt(start);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        start++;
                        break;
                    }
                }
            }

            return (start >= len) ? '' : str.substr(start, len);
        };

        return exports;
    })({});

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim = _.rtrim = (function (exports)
    {
        // TODO

        var regSpace = /\s+$/;

        exports = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var end     = str.length - 1,
                charLen = chars.length,
                found   = true,
                i, c;

            while (found && end >= 0)
            {
                found = false;
                i = -1;
                c = str.charAt(end);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        end--;
                        break;
                    }
                }
            }

            return (end >= 0) ? str.substring(0, end + 1) : '';
        };

        return exports;
    })({});

    /* ------------------------------ trim ------------------------------ */

    var trim = _.trim = (function (exports)
    {
        // TODO

        var regSpace = /^\s+|\s+$/g;

        exports = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            return ltrim(rtrim(str, chars), chars);
        };

        return exports;
    })({});

    return _;
}));