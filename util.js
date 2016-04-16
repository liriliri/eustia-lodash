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

    /* ------------------------------ eq ------------------------------ */

    var eq = _.eq = (function (exports)
    {
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }

        exports = eq;

        return exports;
    })({});

    /* ------------------------------ _assocIndexOf ------------------------------ */

    var _assocIndexOf = _._assocIndexOf = (function (exports)
    {
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
        var arrayProto = Array.prototype;

        var splice = arrayProto.splice;

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

    /* ------------------------------ _assocGet ------------------------------ */

    var _assocGet = _._assocGet = (function (exports)
    {
        function assocGet(array, key) {
          var index = _assocIndexOf(array, key);
          return index < 0 ? undefined : array[index][1];
        }

        exports = assocGet;

        return exports;
    })({});

    /* ------------------------------ _assocHas ------------------------------ */

    var _assocHas = _._assocHas = (function (exports)
    {
        function assocHas(array, key) {
          return _assocIndexOf(array, key) > -1;
        }

        exports = assocHas;

        return exports;
    })({});

    /* ------------------------------ _assocSet ------------------------------ */

    var _assocSet = _._assocSet = (function (exports)
    {
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

    /* ------------------------------ _getPrototype ------------------------------ */

    var _getPrototype = _._getPrototype = (function (exports)
    {
        var nativeGetPrototype = Object.getPrototypeOf;

        function getPrototype(value) {
          return nativeGetPrototype(Object(value));
        }

        exports = getPrototype;

        return exports;
    })({});

    /* ------------------------------ _baseHas ------------------------------ */

    var _baseHas = _._baseHas = (function (exports)
    {
        var objectProto = Object.prototype;

        var hasOwnProperty = objectProto.hasOwnProperty;

        function baseHas(object, key) {

          return hasOwnProperty.call(object, key) ||
            (typeof object == 'object' && key in object && _getPrototype(object) === null);
        }

        exports = baseHas;

        return exports;
    })({});

    /* ------------------------------ _indexOfNaN ------------------------------ */

    var _indexOfNaN = _._indexOfNaN = (function (exports)
    {
        function indexOfNaN(array, fromIndex, fromRight) {
          var length = array.length,
              index = fromIndex + (fromRight ? 0 : -1);

          while ((fromRight ? index-- : ++index < length)) {
            var other = array[index];
            if (other !== other) {
              return index;
            }
          }
          return -1;
        }

        exports = indexOfNaN;

        return exports;
    })({});

    /* ------------------------------ _baseIndexOf ------------------------------ */

    var _baseIndexOf = _._baseIndexOf = (function (exports)
    {
        function baseIndexOf(array, value, fromIndex) {
          if (value !== value) {
            return _indexOfNaN(array, fromIndex);
          }
          var index = fromIndex - 1,
              length = array.length;

          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }

        exports = baseIndexOf;

        return exports;
    })({});

    /* ------------------------------ _baseKeys ------------------------------ */

    var _baseKeys = _._baseKeys = (function (exports)
    {
        var nativeKeys = Object.keys;

        function baseKeys(object) {
          return nativeKeys(Object(object));
        }

        exports = baseKeys;

        return exports;
    })({});

    /* ------------------------------ _baseProperty ------------------------------ */

    var _baseProperty = _._baseProperty = (function (exports)
    {
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }

        exports = baseProperty;

        return exports;
    })({});

    /* ------------------------------ _baseSlice ------------------------------ */

    var _baseSlice = _._baseSlice = (function (exports)
    {
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;

          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : ((end - start) >>> 0);
          start >>>= 0;

          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }

        exports = baseSlice;

        return exports;
    })({});

    /* ------------------------------ _baseTimes ------------------------------ */

    var _baseTimes = _._baseTimes = (function (exports)
    {
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

    /* ------------------------------ isArray ------------------------------ */

    var isArray = _.isArray = (function (exports)
    {
        var isArray = Array.isArray;

        exports = isArray;

        return exports;
    })({});

    /* ------------------------------ _castSlice ------------------------------ */

    var _castSlice = _._castSlice = (function (exports)
    {
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return (!start && end >= length) ? array : _baseSlice(array, start, end);
        }

        exports = castSlice;

        return exports;
    })({});

    /* ------------------------------ _charsEndIndex ------------------------------ */

    var _charsEndIndex = _._charsEndIndex = (function (exports)
    {
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;

          while (index-- && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
          return index;
        }

        exports = charsEndIndex;

        return exports;
    })({});

    /* ------------------------------ _charsStartIndex ------------------------------ */

    var _charsStartIndex = _._charsStartIndex = (function (exports)
    {
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1,
              length = strSymbols.length;

          while (++index < length && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
          return index;
        }

        exports = charsStartIndex;

        return exports;
    })({});

    /* ------------------------------ _checkGlobal ------------------------------ */

    var _checkGlobal = _._checkGlobal = (function (exports)
    {
        function checkGlobal(value) {
          return (value && value.Object === Object) ? value : null;
        }

        exports = checkGlobal;

        return exports;
    })({});

    /* ------------------------------ _root ------------------------------ */

    var _root = _._root = (function (exports)
    {
        var objectTypes = {
          'function': true,
          'object': true
        };

        var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
          ? exports
          : undefined;

        var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
          ? module
          : undefined;

        var freeGlobal = _checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

        var freeSelf = _checkGlobal(objectTypes[typeof self] && self);

        var freeWindow = _checkGlobal(objectTypes[typeof window] && window);

        var thisGlobal = _checkGlobal(objectTypes[typeof this] && this);

        var root = freeGlobal ||
          ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
            freeSelf || thisGlobal || Function('return this')();

        exports = root;

        return exports;
    })({});

    /* ------------------------------ _Symbol ------------------------------ */

    var _Symbol = _._Symbol = (function (exports)
    {
        var Symbol = _root.Symbol;

        exports = Symbol;

        return exports;
    })({});

    /* ------------------------------ _getLength ------------------------------ */

    var _getLength = _._getLength = (function (exports)
    {
        var getLength = _baseProperty('length');

        exports = getLength;

        return exports;
    })({});

    /* ------------------------------ _isIndex ------------------------------ */

    var _isIndex = _._isIndex = (function (exports)
    {
        var MAX_SAFE_INTEGER = 9007199254740991;

        var reIsUint = /^(?:0|[1-9]\d*)$/;

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
        var MAX_SAFE_INTEGER = 9007199254740991;

        function isLength(value) {
          return typeof value == 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        exports = isLength;

        return exports;
    })({});

    /* ------------------------------ _isHostObject ------------------------------ */

    var _isHostObject = _._isHostObject = (function (exports)
    {
        function isHostObject(value) {

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

    /* ------------------------------ _isKeyable ------------------------------ */

    var _isKeyable = _._isKeyable = (function (exports)
    {
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
        var objectProto = Object.prototype;

        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

          return value === proto;
        }

        exports = isPrototype;

        return exports;
    })({});

    /* ------------------------------ _stringToArray ------------------------------ */

    var _stringToArray = _._stringToArray = (function (exports)
    {
        var rsAstralRange = '\\ud800-\\udfff',
            rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
            rsComboSymbolsRange = '\\u20d0-\\u20f0',
            rsVarRange = '\\ufe0e\\ufe0f';

        var rsAstral = '[' + rsAstralRange + ']',
            rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
            rsFitz = '\\ud83c[\\udffb-\\udfff]',
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
            rsNonAstral = '[^' + rsAstralRange + ']',
            rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            rsZWJ = '\\u200d';

        var reOptMod = rsModifier + '?',
            rsOptVar = '[' + rsVarRange + ']?',
            rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
            rsSeq = rsOptVar + reOptMod + rsOptJoin,
            rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

        var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

        function stringToArray(string) {
          return string.match(reComplexSymbol);
        }

        exports = stringToArray;

        return exports;
    })({});

    /* ------------------------------ _toSource ------------------------------ */

    var _toSource = _._toSource = (function (exports)
    {
        var funcToString = Function.prototype.toString;

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

    /* ------------------------------ isObjectLike ------------------------------ */

    var isObjectLike = _.isObjectLike = (function (exports)
    {
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }

        exports = isObjectLike;

        return exports;
    })({});

    /* ------------------------------ isString ------------------------------ */

    var isString = _.isString = (function (exports)
    {
        var stringTag = '[object String]';

        var objectProto = Object.prototype;

        var objectToString = objectProto.toString;

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
        var symbolTag = '[object Symbol]';

        var objectProto = Object.prototype;

        var objectToString = objectProto.toString;

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
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/;

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

    /* ------------------------------ toString ------------------------------ */

    var toString = _.toString = (function (exports)
    {
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
         * 
         *
         * _.toString(-0);
         * 
         *
         * _.toString([1, 2, 3]);
         * 
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

    /* ------------------------------ isObject ------------------------------ */

    var isObject = _.isObject = (function (exports)
    {
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }

        exports = isObject;

        return exports;
    })({});

    /* ------------------------------ isFunction ------------------------------ */

    var isFunction = _.isFunction = (function (exports)
    {
        var funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]';

        var objectProto = Object.prototype;

        var objectToString = objectProto.toString;

        function isFunction(value) {

          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        exports = isFunction;

        return exports;
    })({});

    /* ------------------------------ isArrayLike ------------------------------ */

    var isArrayLike = _.isArrayLike = (function (exports)
    {
        function isArrayLike(value) {
          return value != null && isLength(_getLength(value)) && !isFunction(value);
        }

        exports = isArrayLike;

        return exports;
    })({});

    /* ------------------------------ isArrayLikeObject ------------------------------ */

    var isArrayLikeObject = _.isArrayLikeObject = (function (exports)
    {
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        exports = isArrayLikeObject;

        return exports;
    })({});

    /* ------------------------------ isArguments ------------------------------ */

    var isArguments = _.isArguments = (function (exports)
    {
        var argsTag = '[object Arguments]';

        var objectProto = Object.prototype;

        var hasOwnProperty = objectProto.hasOwnProperty;

        var objectToString = objectProto.toString;

        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        function isArguments(value) {

          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
            (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }

        exports = isArguments;

        return exports;
    })({});

    /* ------------------------------ _indexKeys ------------------------------ */

    var _indexKeys = _._indexKeys = (function (exports)
    {
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

    /* ------------------------------ isNative ------------------------------ */

    var isNative = _.isNative = (function (exports)
    {
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        var objectProto = Object.prototype;

        var funcToString = Function.prototype.toString;

        var hasOwnProperty = objectProto.hasOwnProperty;

        var reIsNative = RegExp('^' +
          funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
        );

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
        function getNative(object, key) {
          var value = object[key];
          return isNative(value) ? value : undefined;
        }

        exports = getNative;

        return exports;
    })({});

    /* ------------------------------ _Map ------------------------------ */

    var _Map = _._Map = (function (exports)
    {
        var Map = _getNative(_root, 'Map');

        exports = Map;

        return exports;
    })({});

    /* ------------------------------ _nativeCreate ------------------------------ */

    var _nativeCreate = _._nativeCreate = (function (exports)
    {
        var nativeCreate = _getNative(Object, 'create');

        exports = nativeCreate;

        return exports;
    })({});

    /* ------------------------------ _Hash ------------------------------ */

    var _Hash = _._Hash = (function (exports)
    {
        var objectProto = Object.prototype;

        function Hash() {}

        Hash.prototype = _nativeCreate ? _nativeCreate(null) : objectProto;

        exports = Hash;

        return exports;
    })({});

    /* ------------------------------ _mapClear ------------------------------ */

    var _mapClear = _._mapClear = (function (exports)
    {
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
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        var objectProto = Object.prototype;

        var hasOwnProperty = objectProto.hasOwnProperty;

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
        var objectProto = Object.prototype;

        var hasOwnProperty = objectProto.hasOwnProperty;

        function hashHas(hash, key) {
          return _nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
        }

        exports = hashHas;

        return exports;
    })({});

    /* ------------------------------ _hashDelete ------------------------------ */

    var _hashDelete = _._hashDelete = (function (exports)
    {
        function hashDelete(hash, key) {
          return _hashHas(hash, key) && delete hash[key];
        }

        exports = hashDelete;

        return exports;
    })({});

    /* ------------------------------ _mapDelete ------------------------------ */

    var _mapDelete = _._mapDelete = (function (exports)
    {
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
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        function hashSet(hash, key, value) {
          hash[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        }

        exports = hashSet;

        return exports;
    })({});

    /* ------------------------------ _mapSet ------------------------------ */

    var _mapSet = _._mapSet = (function (exports)
    {
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
        function MapCache(values) {
          var index = -1,
              length = values ? values.length : 0;

          this.clear();
          while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
          }
        }

        MapCache.prototype.clear = _mapClear;
        MapCache.prototype['delete'] = _mapDelete;
        MapCache.prototype.get = _mapGet;
        MapCache.prototype.has = _mapHas;
        MapCache.prototype.set = _mapSet;

        exports = MapCache;

        return exports;
    })({});

    /* ------------------------------ memoize ------------------------------ */

    var memoize = _.memoize = (function (exports)
    {
        var FUNC_ERROR_TEXT = 'Expected a function';

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

        memoize.Cache = _MapCache;

        exports = memoize;

        return exports;
    })({});

    /* ------------------------------ _stringToPath ------------------------------ */

    var _stringToPath = _._stringToPath = (function (exports)
    {
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

        var reEscapeChar = /\\(\\)?/g;

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
        function castPath(value) {
          return isArray(value) ? value : _stringToPath(value);
        }

        exports = castPath;

        return exports;
    })({});

    /* ------------------------------ _hasPath ------------------------------ */

    var _hasPath = _._hasPath = (function (exports)
    {
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

    /* ------------------------------ has ------------------------------ */

    var has = _.has = (function (exports)
    {
        function has(object, path) {
          return object != null && _hasPath(object, path, _baseHas);
        }

        exports = has;

        return exports;
    })({});

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr = _.objToStr = (function (exports)
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The source value|
         * |return|string|String representation of the given value|
         */

        var ObjToStr = Object.prototype.toString;

        exports = function (val)
        {
            return ObjToStr.call(val);
        };

        return exports;
    })({});

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function (exports)
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|True if value is correctly classified, else false|
         */

        exports = function (val)
        {
            return objToStr(val) === '[object Number]';
        };

        return exports;
    })({});

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike = _.isArrLike = (function (exports)
    {
        // TODO

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        exports = function (val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX;
        };

        return exports;
    })({});

    /* ------------------------------ each ------------------------------ */

    var each = _.each = (function (exports)
    {
        // TODO

        exports = function (obj, iteratee, ctx)
        {
            var i, len;

            if (isArrLike(obj))
            {
                for (i = 0, len = obj.length; i < len; i++) iteratee.call(ctx, obj[i], i, obj);
            } else
            {
                var _keys = keys(obj);
                for (i = 0, len = _keys.length; i < len; i++)
                {
                    iteratee.call(ctx, obj[_keys[i]], _keys[i], obj);
                }
            }

            return obj;
        };

        return exports;
    })({});

    /* ------------------------------ stripCmts ------------------------------ */

    var stripCmts = _.stripCmts = (function (exports)
    {
        /* Strip comments from source code.
         */

        exports = function (str)
        {
            str = ('__' + str + '__').split('');
            var mode = {
                singleQuote: false,
                doubleQuote: false,
                regex: false,
                blockComment: false,
                lineComment: false,
                condComp: false
            };
            for (var i = 0, l = str.length; i < l; i++)
            {
                if (mode.regex)
                {
                    if (str[i] === '/' && str[i-1] !== '\\') mode.regex = false;
                    continue;
                }
                if (mode.singleQuote)
                {
                    if (str[i] === "'" && str[i-1] !== '\\') mode.singleQuote = false;
                    continue;
                }

                if (mode.doubleQuote)
                {
                    if (str[i] === '"' && str[i-1] !== '\\') mode.doubleQuote = false;
                    continue;
                }

                if (mode.blockComment)
                {
                    if (str[i] === '*' && str[i+1] === '/')
                    {
                        str[i+1] = '';
                        mode.blockComment = false;
                    }
                    str[i] = '';
                    continue;
                }

                if (mode.lineComment)
                {
                    if (str[i+1] === '\n') mode.lineComment = false;
                    str[i] = '';
                    continue;
                }

                mode.doubleQuote = str[i] === '"';
                mode.singleQuote = str[i] === "'";

                if (str[i] === '/')
                {
                    if (str[i+1] === '*')
                    {
                        str[i] = '';
                        mode.blockComment = true;
                        continue;
                    }
                    if (str[i+1] === '/')
                    {
                        str[i] = '';
                        mode.lineComment = true;
                        continue;
                    }
                    mode.regex = true;
                }
            }

            return str.join('').slice(2, -2);
        };

        return exports;
    })({});

    /* ------------------------------ trim ------------------------------ */

    var trim = _.trim = (function (exports)
    {
        var reTrim = /^\s+|\s+$/g;

        function trim(string, chars, guard) {
          string = toString(string);
          if (!string) {
            return string;
          }
          if (guard || chars === undefined) {
            return string.replace(reTrim, '');
          }
          if (!(chars += '')) {
            return string;
          }
          var strSymbols = _stringToArray(string),
              chrSymbols = _stringToArray(chars),
              start = _charsStartIndex(strSymbols, chrSymbols),
              end = _charsEndIndex(strSymbols, chrSymbols) + 1;

          return _castSlice(strSymbols, start, end).join('');
        }

        exports = trim;

        return exports;
    })({});

    return _;
}));