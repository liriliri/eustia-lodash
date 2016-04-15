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

    /* ------------------------------ has ------------------------------ */

    var has;

    _.has = (function ()
    {
        /* Checks if key is a direct property.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |object|object|The object to query|
         * |key|string|The path to check|
         * |return|boolean|True if key is a direct property, else false|
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        has = function (obj, key)
        {
            return hasOwnProp.call(obj, key);
        };

        return has;
    })();

    /* ------------------------------ keys ------------------------------ */

    var keys;

    _.keys = (function ()
    {
        /* Creates an array of the own enumerable property names of object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |object|object|The object to query|
         * |return|array|The array of property names|
         */

        keys = Object.keys || function (obj)
        {
            var ret = [], key;

            for (key in obj)
            {
                if (has(obj, key)) ret.push(key);
            }

            return ret;
        };

        return keys;
    })();

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr;

    _.objToStr = (function ()
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The source value|
         * |return|string|String representation of the given value|
         */

        var ObjToStr = Object.prototype.toString;

        objToStr = function (val)
        {
            return ObjToStr.call(val);
        };

        return objToStr;
    })();

    /* ------------------------------ isNum ------------------------------ */

    var isNum;

    _.isNum = (function ()
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|True if value is correctly classified, else false|
         */

        isNum = function (val)
        {
            return objToStr(val) === '[object Number]';
        };

        return isNum;
    })();

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike;

    _.isArrLike = (function ()
    {
        // TODO

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        isArrLike = function (val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX;
        };

        return isArrLike;
    })();

    /* ------------------------------ each ------------------------------ */

    var each;

    _.each = (function ()
    {
        // TODO

        each = function (obj, iteratee, ctx)
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

        return each;
    })();

    return _;
}));