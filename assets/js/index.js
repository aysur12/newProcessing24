(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.1", jQuery3 = function(selector, context) {
          return new jQuery3.fn.init(selector, context);
        };
        jQuery3.fn = jQuery3.prototype = {
          jquery: version,
          constructor: jQuery3,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery3.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery3.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery3.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery3.extend = jQuery3.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery3.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery3.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery3.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery3.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery3.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery3.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery3.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + "*([*^$|!~]?=)" + whitespace2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rcombinators = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i2 = 0;
                while (target[j++] = els[i2++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery3.find = Sizzle;
        jQuery3.expr = Sizzle.selectors;
        jQuery3.expr[":"] = jQuery3.expr.pseudos;
        jQuery3.uniqueSort = jQuery3.unique = Sizzle.uniqueSort;
        jQuery3.text = Sizzle.getText;
        jQuery3.isXMLDoc = Sizzle.isXML;
        jQuery3.contains = Sizzle.contains;
        jQuery3.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery3(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery3.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery3.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery3.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery3.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery3.filter(qualifier, elements, not);
        }
        jQuery3.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery3.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery3.find.matches(expr, jQuery3.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery3.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery3(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery3.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery3.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery3.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery3(selector) : selector || [], false).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery3.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery3 ? context[0] : context;
                jQuery3.merge(this, jQuery3.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
                if (rsingleTag.test(match[1]) && jQuery3.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery3);
          }
          return jQuery3.makeArray(selector, this);
        };
        init.prototype = jQuery3.fn;
        rootjQuery = jQuery3(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery3.fn.extend({
          has: function(target) {
            var targets = jQuery3(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery3.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery3(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery3.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery3.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery3(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
          },
          add: function(selector, context) {
            return this.pushStack(jQuery3.uniqueSort(jQuery3.merge(this.get(), jQuery3(selector, context))));
          },
          addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery3.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery3.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery3.fn[name] = function(until, selector) {
            var matched = jQuery3.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery3.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery3.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery3.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery3.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery3.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery3.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery3.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery3.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery3.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery3.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery3.Callbacks("memory"),
                jQuery3.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery3.Deferred(function(newDefer) {
                  jQuery3.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                        } else {
                          maxDepth++;
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery3.Deferred.exceptionHook) {
                          jQuery3.Deferred.exceptionHook(e, process.stackTrace);
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery3.Deferred.getStackHook) {
                        process.stackTrace = jQuery3.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery3.Deferred(function(newDefer) {
                  tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                  tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                  tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery3.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery3.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery3.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery3.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery3.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery3.Deferred();
        jQuery3.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery3.readyException(error);
          });
          return this;
        };
        jQuery3.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery3.readyWait : jQuery3.isReady) {
              return;
            }
            jQuery3.isReady = true;
            if (wait !== true && --jQuery3.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery3]);
          }
        });
        jQuery3.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery3.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery3.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery3(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery3.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery3.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery3.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery3.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery3.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery3.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery3.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery3.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery3._queueHooks(elem, type), next = function() {
              jQuery3.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery3.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery3.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery3.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery3.queue(this, type, data);
              jQuery3._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery3.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery3.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery3.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery3.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery3.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery3.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery3.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery3.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery3.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery3.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery3.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery3.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery3.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery3.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery3(this).show();
              } else {
                jQuery3(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery3.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery3.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery3.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery3.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery3.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery3().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery3.guid++);
          }
          return elem.each(function() {
            jQuery3.event.add(this, types, fn, data, selector);
          });
        }
        jQuery3.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery3.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery3.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery3 !== "undefined" && jQuery3.event.triggered !== e.type ? jQuery3.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery3.event.special[type] || {};
              handleObj = jQuery3.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery3.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery3.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery3.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery3.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery3.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery3.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery3.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery3.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery3.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery3(sel, this).index(cur) > -1 : jQuery3.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery3.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery3.expando] ? originalEvent : new jQuery3.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery3.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery3.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery3.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery3.event.trigger(jQuery3.extend(saved[0], jQuery3.Event.prototype), saved.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery3.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery3.Event = function(src, props) {
          if (!(this instanceof jQuery3.Event)) {
            return new jQuery3.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery3.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery3.expando] = true;
        };
        jQuery3.Event.prototype = {
          constructor: jQuery3.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery3.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery3.event.addProp);
        jQuery3.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery3.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
        });
        jQuery3.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery3.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery3.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery3.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery3(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery3.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery3(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery3.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery3.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery3.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery3.clone(node, true, true);
                  if (hasScripts) {
                    jQuery3.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery3.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery3.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery3._evalUrl && !node.noModule) {
                        jQuery3._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery3.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery3.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery3.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery3.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery3.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery3.event.remove(elem, type);
                      } else {
                        jQuery3.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery3.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery3.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery3.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery3.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery3.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery3.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery3.inArray(this, ignored) < 0) {
                jQuery3.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery3.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery3.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery3(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery3(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery3.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp) {
              ret = ret.replace(rtrimCSS, "$1");
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery3.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery3.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery3.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery3.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery3.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
        }
        jQuery3.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery3.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery3.each(["height", "width"], function(_i, dimension) {
          jQuery3.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery3.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery3.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery3.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        });
        jQuery3.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery3.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery3.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery3.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery3.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery3.style(elem, name2, value2) : jQuery3.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery3.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery3.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery3.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery3.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery3.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery3.fx.step[tween.prop]) {
                jQuery3.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery3.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery3.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery3.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery3.fx = Tween.prototype.init;
        jQuery3.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery3.fx.interval);
            }
            jQuery3.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery3._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery3.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery3.style(elem, prop);
            }
          }
          propTween = !jQuery3.isEmptyObject(props);
          if (!propTween && jQuery3.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery3.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery3.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery3.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery3.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery3.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery3.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery3.extend({}, properties),
            opts: jQuery3.extend(true, {
              specialEasing: {},
              easing: jQuery3.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery3.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery3._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery3.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery3.fx.timer(jQuery3.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          }));
          return animation;
        }
        jQuery3.Animation = jQuery3.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery3.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery3.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery3.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery3.fx.speeds) {
                opt.duration = jQuery3.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery3.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery3.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery3.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery3.isEmptyObject(prop), optall = jQuery3.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery3.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery3.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery3.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery3.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery3.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery3.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery3.fn[name];
          jQuery3.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery3.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery3.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery3.timers = [];
        jQuery3.fx.tick = function() {
          var timer, i = 0, timers = jQuery3.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery3.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery3.fx.timer = function(timer) {
          jQuery3.timers.push(timer);
          jQuery3.fx.start();
        };
        jQuery3.fx.interval = 13;
        jQuery3.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery3.fx.stop = function() {
          inProgress = null;
        };
        jQuery3.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery3.fn.delay = function(time, type) {
          time = jQuery3.fx ? jQuery3.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery3.expr.attrHandle;
        jQuery3.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery3.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery3.removeAttr(this, name);
            });
          }
        });
        jQuery3.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery3.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              hooks = jQuery3.attrHooks[name.toLowerCase()] || (jQuery3.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery3.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery3.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery3.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery3.each(jQuery3.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery3.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery3.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery3.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery3.propFix[name] || name];
            });
          }
        });
        jQuery3.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              name = jQuery3.propFix[name] || name;
              hooks = jQuery3.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery3.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery3.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery3.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery3.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery3.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery3(this).toggleClass(value.call(this, i2, getClass(this), stateVal), stateVal);
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery3(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery3.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery3.valHooks[elem.type] || jQuery3.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery3(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery3.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery3.valHooks[this.type] || jQuery3.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery3.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery3.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery3.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery3(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery3.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery3.inArray(jQuery3.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery3.each(["radio", "checkbox"], function() {
          jQuery3.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery3.inArray(jQuery3(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery3.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery3.extend(jQuery3.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery3.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery3.expando] ? event : new jQuery3.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery3.makeArray(data, [event]);
            special = jQuery3.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery3.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery3.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery3.extend(new jQuery3.Event(), event, {
              type,
              isSimulated: true
            });
            jQuery3.event.trigger(e, null, elem);
          }
        });
        jQuery3.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery3.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery3.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery3.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery3.event.simulate(fix, event.target, jQuery3.event.fix(event));
            };
            jQuery3.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery3.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery3.error("Invalid XML: " + (parserErrorElem ? jQuery3.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery3.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery3.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery3.isPlainObject(a)) {
            jQuery3.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery3.fn.extend({
          serialize: function() {
            return jQuery3.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery3.prop(this, "elements");
              return elements ? jQuery3.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery3(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery3(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery3.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery3.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery3.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery3.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery3.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery3.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery3.ajaxSettings), settings) : ajaxExtend(jQuery3.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery3.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery3(callbackContext) : jQuery3.event, deferred = jQuery3.Deferred(), completeDeferred = jQuery3.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery3.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery3.event && s.global;
            if (fireGlobals && jQuery3.active++ === 0) {
              jQuery3.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery3.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery3.lastModified[cacheURL]);
              }
              if (jQuery3.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery3.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery3.inArray("script", s.dataTypes) > -1 && jQuery3.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery3.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery3.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery3.active) {
                  jQuery3.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery3.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery3.get(url, void 0, callback, "script");
          }
        });
        jQuery3.each(["get", "post"], function(_i, method) {
          jQuery3[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery3.ajax(jQuery3.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery3.isPlainObject(url) && url));
          };
        });
        jQuery3.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery3._evalUrl = function(url, options, doc) {
          return jQuery3.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery3.globalEval(response, options, doc);
            }
          });
        };
        jQuery3.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery3(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery3(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery3(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery3(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery3(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery3.expr.pseudos.hidden = function(elem) {
          return !jQuery3.expr.pseudos.visible(elem);
        };
        jQuery3.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery3.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery3.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery3.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery3.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery3.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery3.globalEval(text);
              return text;
            }
          }
        });
        jQuery3.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery3.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery3("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery3.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery3.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery3.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery3.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery3(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery3.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery3(scripts).remove();
          }
          return jQuery3.merge([], parsed.childNodes);
        };
        jQuery3.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery3.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery3("<div>").append(jQuery3.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery3.expr.pseudos.animated = function(elem) {
          return jQuery3.grep(jQuery3.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery3.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position3 = jQuery3.css(elem, "position"), curElem = jQuery3(elem), props = {};
            if (position3 === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery3.css(elem, "top");
            curCSSLeft = jQuery3.css(elem, "left");
            calculatePosition = (position3 === "absolute" || position3 === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery3.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery3.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery3.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery3.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery3(offsetParent).offset();
                parentOffset.top += jQuery3.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery3.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery3.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery3.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery3.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = prop === "pageYOffset";
          jQuery3.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery3.each(["top", "left"], function(_i, prop) {
          jQuery3.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery3(elem).position()[prop] + "px" : computed;
            }
          });
        });
        jQuery3.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery3.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery3.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                }
                return value2 === void 0 ? jQuery3.css(elem, type2, extra) : jQuery3.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery3.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery3.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery3.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery3.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
          jQuery3.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        });
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery3.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery3.guid++;
          return proxy;
        };
        jQuery3.holdReady = function(hold) {
          if (hold) {
            jQuery3.readyWait++;
          } else {
            jQuery3.ready(true);
          }
        };
        jQuery3.isArray = Array.isArray;
        jQuery3.parseJSON = JSON.parse;
        jQuery3.nodeName = nodeName;
        jQuery3.isFunction = isFunction;
        jQuery3.isWindow = isWindow;
        jQuery3.camelCase = camelCase;
        jQuery3.type = toType;
        jQuery3.now = Date.now;
        jQuery3.isNumeric = function(obj) {
          var type = jQuery3.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery3.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery3;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery3.noConflict = function(deep) {
          if (window2.$ === jQuery3) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery3) {
            window2.jQuery = _jQuery;
          }
          return jQuery3;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery3;
        }
        return jQuery3;
      });
    }
  });

  // node_modules/jquery.maskedinput/src/jquery.maskedinput.js
  var require_jquery_maskedinput = __commonJS({
    "node_modules/jquery.maskedinput/src/jquery.maskedinput.js"(exports) {
      (function(factory) {
        if (typeof define === "function" && define.amd) {
          define(["jquery"], factory);
        } else if (typeof exports === "object") {
          factory(require_jquery());
        } else {
          factory(jQuery);
        }
      })(function($) {
        var ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua), caretTimeoutId;
        $.mask = {
          definitions: {
            "9": "[0-9]",
            "a": "[A-Za-z]",
            "*": "[A-Za-z0-9]"
          },
          autoclear: true,
          dataName: "rawMaskFn",
          placeholder: "_"
        };
        $.fn.extend({
          caret: function(begin, end) {
            var range;
            if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
              return;
            }
            if (typeof begin == "number") {
              end = typeof end === "number" ? end : begin;
              return this.each(function() {
                if (this.setSelectionRange) {
                  this.setSelectionRange(begin, end);
                } else if (this.createTextRange) {
                  range = this.createTextRange();
                  range.collapse(true);
                  range.moveEnd("character", end);
                  range.moveStart("character", begin);
                  range.select();
                }
              });
            } else {
              if (this[0].setSelectionRange) {
                begin = this[0].selectionStart;
                end = this[0].selectionEnd;
              } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                begin = 0 - range.duplicate().moveStart("character", -1e5);
                end = begin + range.text.length;
              }
              return { begin, end };
            }
          },
          unmask: function() {
            return this.trigger("unmask");
          },
          mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
              input = $(this[0]);
              var fn = input.data($.mask.dataName);
              return fn ? fn() : void 0;
            }
            settings = $.extend({
              autoclear: $.mask.autoclear,
              placeholder: $.mask.placeholder,
              completed: null
            }, settings);
            defs = $.mask.definitions;
            tests = [];
            partialPosition = len = mask.length;
            firstNonMaskPos = null;
            mask = String(mask);
            $.each(mask.split(""), function(i, c) {
              if (c == "?") {
                len--;
                partialPosition = i;
              } else if (defs[c]) {
                tests.push(new RegExp(defs[c]));
                if (firstNonMaskPos === null) {
                  firstNonMaskPos = tests.length - 1;
                }
                if (i < partialPosition) {
                  lastRequiredNonMaskPos = tests.length - 1;
                }
              } else {
                tests.push(null);
              }
            });
            return this.trigger("unmask").each(function() {
              var input2 = $(this), buffer = $.map(mask.split(""), function(c, i) {
                if (c != "?") {
                  return defs[c] ? getPlaceholder(i) : c;
                }
              }), defaultBuffer = buffer.join(""), focusText = input2.val();
              function tryFireCompleted() {
                if (!settings.completed) {
                  return;
                }
                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                  if (tests[i] && buffer[i] === getPlaceholder(i)) {
                    return;
                  }
                }
                settings.completed.call(input2);
              }
              function getPlaceholder(i) {
                if (i < settings.placeholder.length)
                  return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
              }
              function seekNext(pos) {
                while (++pos < len && !tests[pos])
                  ;
                return pos;
              }
              function seekPrev(pos) {
                while (--pos >= 0 && !tests[pos])
                  ;
                return pos;
              }
              function shiftL(begin, end) {
                var i, j;
                if (begin < 0) {
                  return;
                }
                for (i = begin, j = seekNext(end); i < len; i++) {
                  if (tests[i]) {
                    if (j < len && tests[i].test(buffer[j])) {
                      buffer[i] = buffer[j];
                      buffer[j] = getPlaceholder(j);
                    } else {
                      break;
                    }
                    j = seekNext(j);
                  }
                }
                writeBuffer();
                input2.caret(Math.max(firstNonMaskPos, begin));
              }
              function shiftR(pos) {
                var i, c, j, t;
                for (i = pos, c = getPlaceholder(pos); i < len; i++) {
                  if (tests[i]) {
                    j = seekNext(i);
                    t = buffer[i];
                    buffer[i] = c;
                    if (j < len && tests[j].test(t)) {
                      c = t;
                    } else {
                      break;
                    }
                  }
                }
              }
              function androidInputEvent(e) {
                var curVal = input2.val();
                var pos = input2.caret();
                if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                  checkVal(true);
                  while (pos.begin > 0 && !tests[pos.begin - 1])
                    pos.begin--;
                  if (pos.begin === 0) {
                    while (pos.begin < firstNonMaskPos && !tests[pos.begin])
                      pos.begin++;
                  }
                  input2.caret(pos.begin, pos.begin);
                } else {
                  var pos2 = checkVal(true);
                  var lastEnteredValue = curVal.charAt(pos.begin);
                  if (pos.begin < len) {
                    if (!tests[pos.begin]) {
                      pos.begin++;
                      if (tests[pos.begin].test(lastEnteredValue)) {
                        pos.begin++;
                      }
                    } else {
                      if (tests[pos.begin].test(lastEnteredValue)) {
                        pos.begin++;
                      }
                    }
                  }
                  input2.caret(pos.begin, pos.begin);
                }
                tryFireCompleted();
              }
              function blurEvent(e) {
                checkVal();
                if (input2.val() != focusText)
                  input2.change();
              }
              function keydownEvent(e) {
                if (input2.prop("readonly")) {
                  return;
                }
                var k = e.which || e.keyCode, pos, begin, end;
                oldVal = input2.val();
                if (k === 8 || k === 46 || iPhone && k === 127) {
                  pos = input2.caret();
                  begin = pos.begin;
                  end = pos.end;
                  if (end - begin === 0) {
                    begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);
                    end = k === 46 ? seekNext(end) : end;
                  }
                  clearBuffer(begin, end);
                  shiftL(begin, end - 1);
                  e.preventDefault();
                } else if (k === 13) {
                  blurEvent.call(this, e);
                } else if (k === 27) {
                  input2.val(focusText);
                  input2.caret(0, checkVal());
                  e.preventDefault();
                }
              }
              function keypressEvent(e) {
                if (input2.prop("readonly")) {
                  return;
                }
                var k = e.which || e.keyCode, pos = input2.caret(), p, c, next;
                if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
                  return;
                } else if (k && k !== 13) {
                  if (pos.end - pos.begin !== 0) {
                    clearBuffer(pos.begin, pos.end);
                    shiftL(pos.begin, pos.end - 1);
                  }
                  p = seekNext(pos.begin - 1);
                  if (p < len) {
                    c = String.fromCharCode(k);
                    if (tests[p].test(c)) {
                      shiftR(p);
                      buffer[p] = c;
                      writeBuffer();
                      next = seekNext(p);
                      if (android) {
                        var proxy = function() {
                          $.proxy($.fn.caret, input2, next)();
                        };
                        setTimeout(proxy, 0);
                      } else {
                        input2.caret(next);
                      }
                      if (pos.begin <= lastRequiredNonMaskPos) {
                        tryFireCompleted();
                      }
                    }
                  }
                  e.preventDefault();
                }
              }
              function clearBuffer(start, end) {
                var i;
                for (i = start; i < end && i < len; i++) {
                  if (tests[i]) {
                    buffer[i] = getPlaceholder(i);
                  }
                }
              }
              function writeBuffer() {
                input2.val(buffer.join(""));
              }
              function checkVal(allow) {
                var test = input2.val(), lastMatch = -1, i, c, pos;
                for (i = 0, pos = 0; i < len; i++) {
                  if (tests[i]) {
                    buffer[i] = getPlaceholder(i);
                    while (pos++ < test.length) {
                      c = test.charAt(pos - 1);
                      if (tests[i].test(c)) {
                        buffer[i] = c;
                        lastMatch = i;
                        break;
                      }
                    }
                    if (pos > test.length) {
                      clearBuffer(i + 1, len);
                      break;
                    }
                  } else {
                    if (buffer[i] === test.charAt(pos)) {
                      pos++;
                    }
                    if (i < partialPosition) {
                      lastMatch = i;
                    }
                  }
                }
                if (allow) {
                  writeBuffer();
                } else if (lastMatch + 1 < partialPosition) {
                  if (settings.autoclear || buffer.join("") === defaultBuffer) {
                    if (input2.val())
                      input2.val("");
                    clearBuffer(0, len);
                  } else {
                    writeBuffer();
                  }
                } else {
                  writeBuffer();
                  input2.val(input2.val().substring(0, lastMatch + 1));
                }
                return partialPosition ? i : firstNonMaskPos;
              }
              input2.data($.mask.dataName, function() {
                return $.map(buffer, function(c, i) {
                  return tests[i] && c != getPlaceholder(i) ? c : null;
                }).join("");
              });
              input2.one("unmask", function() {
                input2.off(".mask").removeData($.mask.dataName);
              }).on("focus.mask", function() {
                if (input2.prop("readonly")) {
                  return;
                }
                clearTimeout(caretTimeoutId);
                var pos;
                focusText = input2.val();
                pos = checkVal();
                caretTimeoutId = setTimeout(function() {
                  if (input2.get(0) !== document.activeElement) {
                    return;
                  }
                  writeBuffer();
                  if (pos == mask.replace("?", "").length) {
                    input2.caret(0, pos);
                  } else {
                    input2.caret(pos);
                  }
                }, 10);
              }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                if (input2.prop("readonly")) {
                  return;
                }
                setTimeout(function() {
                  var pos = checkVal(true);
                  input2.caret(pos);
                  tryFireCompleted();
                }, 0);
              });
              if (chrome && android) {
                input2.off("input.mask").on("input.mask", androidInputEvent);
              }
              checkVal();
            });
          }
        });
      });
    }
  });

  // node_modules/swiper/swiper-bundle.min.js
  var require_swiper_bundle_min = __commonJS({
    "node_modules/swiper/swiper-bundle.min.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).Swiper = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2) {
          for (var a2 = 0; a2 < t2.length; a2++) {
            var i2 = t2[a2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
          }
        }
        function t() {
          return (t = Object.assign || function(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var a2 = arguments[t2];
              for (var i2 in a2)
                Object.prototype.hasOwnProperty.call(a2, i2) && (e2[i2] = a2[i2]);
            }
            return e2;
          }).apply(this, arguments);
        }
        function a(e2) {
          return e2 !== null && typeof e2 == "object" && "constructor" in e2 && e2.constructor === Object;
        }
        function i(e2, t2) {
          e2 === void 0 && (e2 = {}), t2 === void 0 && (t2 = {}), Object.keys(t2).forEach(function(s2) {
            e2[s2] === void 0 ? e2[s2] = t2[s2] : a(t2[s2]) && a(e2[s2]) && Object.keys(t2[s2]).length > 0 && i(e2[s2], t2[s2]);
          });
        }
        var s = { body: {}, addEventListener: function() {
        }, removeEventListener: function() {
        }, activeElement: { blur: function() {
        }, nodeName: "" }, querySelector: function() {
          return null;
        }, querySelectorAll: function() {
          return [];
        }, getElementById: function() {
          return null;
        }, createEvent: function() {
          return { initEvent: function() {
          } };
        }, createElement: function() {
          return { children: [], childNodes: [], style: {}, setAttribute: function() {
          }, getElementsByTagName: function() {
            return [];
          } };
        }, createElementNS: function() {
          return {};
        }, importNode: function() {
          return null;
        }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
        function r() {
          var e2 = typeof document != "undefined" ? document : {};
          return i(e2, s), e2;
        }
        var n = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState: function() {
        }, pushState: function() {
        }, go: function() {
        }, back: function() {
        } }, CustomEvent: function() {
          return this;
        }, addEventListener: function() {
        }, removeEventListener: function() {
        }, getComputedStyle: function() {
          return { getPropertyValue: function() {
            return "";
          } };
        }, Image: function() {
        }, Date: function() {
        }, screen: {}, setTimeout: function() {
        }, clearTimeout: function() {
        }, matchMedia: function() {
          return {};
        }, requestAnimationFrame: function(e2) {
          return typeof setTimeout == "undefined" ? (e2(), null) : setTimeout(e2, 0);
        }, cancelAnimationFrame: function(e2) {
          typeof setTimeout != "undefined" && clearTimeout(e2);
        } };
        function l() {
          var e2 = typeof window != "undefined" ? window : {};
          return i(e2, n), e2;
        }
        function o(e2) {
          return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
            return e3.__proto__ || Object.getPrototypeOf(e3);
          })(e2);
        }
        function d(e2, t2) {
          return (d = Object.setPrototypeOf || function(e3, t3) {
            return e3.__proto__ = t3, e3;
          })(e2, t2);
        }
        function p() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (e2) {
            return false;
          }
        }
        function u(e2, t2, a2) {
          return (u = p() ? Reflect.construct : function(e3, t3, a3) {
            var i2 = [null];
            i2.push.apply(i2, t3);
            var s2 = new (Function.bind.apply(e3, i2))();
            return a3 && d(s2, a3.prototype), s2;
          }).apply(null, arguments);
        }
        function c(e2) {
          var t2 = typeof Map == "function" ? new Map() : void 0;
          return (c = function(e3) {
            if (e3 === null || (a2 = e3, Function.toString.call(a2).indexOf("[native code]") === -1))
              return e3;
            var a2;
            if (typeof e3 != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (t2 !== void 0) {
              if (t2.has(e3))
                return t2.get(e3);
              t2.set(e3, i2);
            }
            function i2() {
              return u(e3, arguments, o(this).constructor);
            }
            return i2.prototype = Object.create(e3.prototype, { constructor: { value: i2, enumerable: false, writable: true, configurable: true } }), d(i2, e3);
          })(e2);
        }
        var h = function(e2) {
          var t2, a2;
          function i2(t3) {
            var a3, i3, s2;
            return a3 = e2.call.apply(e2, [this].concat(t3)) || this, i3 = function(e3) {
              if (e3 === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e3;
            }(a3), s2 = i3.__proto__, Object.defineProperty(i3, "__proto__", { get: function() {
              return s2;
            }, set: function(e3) {
              s2.__proto__ = e3;
            } }), a3;
          }
          return a2 = e2, (t2 = i2).prototype = Object.create(a2.prototype), t2.prototype.constructor = t2, t2.__proto__ = a2, i2;
        }(c(Array));
        function v(e2) {
          e2 === void 0 && (e2 = []);
          var t2 = [];
          return e2.forEach(function(e3) {
            Array.isArray(e3) ? t2.push.apply(t2, v(e3)) : t2.push(e3);
          }), t2;
        }
        function f(e2, t2) {
          return Array.prototype.filter.call(e2, t2);
        }
        function m(e2, t2) {
          var a2 = l(), i2 = r(), s2 = [];
          if (!t2 && e2 instanceof h)
            return e2;
          if (!e2)
            return new h(s2);
          if (typeof e2 == "string") {
            var n2 = e2.trim();
            if (n2.indexOf("<") >= 0 && n2.indexOf(">") >= 0) {
              var o2 = "div";
              n2.indexOf("<li") === 0 && (o2 = "ul"), n2.indexOf("<tr") === 0 && (o2 = "tbody"), n2.indexOf("<td") !== 0 && n2.indexOf("<th") !== 0 || (o2 = "tr"), n2.indexOf("<tbody") === 0 && (o2 = "table"), n2.indexOf("<option") === 0 && (o2 = "select");
              var d2 = i2.createElement(o2);
              d2.innerHTML = n2;
              for (var p2 = 0; p2 < d2.childNodes.length; p2 += 1)
                s2.push(d2.childNodes[p2]);
            } else
              s2 = function(e3, t3) {
                if (typeof e3 != "string")
                  return [e3];
                for (var a3 = [], i3 = t3.querySelectorAll(e3), s3 = 0; s3 < i3.length; s3 += 1)
                  a3.push(i3[s3]);
                return a3;
              }(e2.trim(), t2 || i2);
          } else if (e2.nodeType || e2 === a2 || e2 === i2)
            s2.push(e2);
          else if (Array.isArray(e2)) {
            if (e2 instanceof h)
              return e2;
            s2 = e2;
          }
          return new h(function(e3) {
            for (var t3 = [], a3 = 0; a3 < e3.length; a3 += 1)
              t3.indexOf(e3[a3]) === -1 && t3.push(e3[a3]);
            return t3;
          }(s2));
        }
        m.fn = h.prototype;
        var g, b, w, y = { addClass: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = v(t2.map(function(e3) {
            return e3.split(" ");
          }));
          return this.forEach(function(e3) {
            var t3;
            (t3 = e3.classList).add.apply(t3, i2);
          }), this;
        }, removeClass: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = v(t2.map(function(e3) {
            return e3.split(" ");
          }));
          return this.forEach(function(e3) {
            var t3;
            (t3 = e3.classList).remove.apply(t3, i2);
          }), this;
        }, hasClass: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = v(t2.map(function(e3) {
            return e3.split(" ");
          }));
          return f(this, function(e3) {
            return i2.filter(function(t3) {
              return e3.classList.contains(t3);
            }).length > 0;
          }).length > 0;
        }, toggleClass: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = v(t2.map(function(e3) {
            return e3.split(" ");
          }));
          this.forEach(function(e3) {
            i2.forEach(function(t3) {
              e3.classList.toggle(t3);
            });
          });
        }, attr: function(e2, t2) {
          if (arguments.length === 1 && typeof e2 == "string")
            return this[0] ? this[0].getAttribute(e2) : void 0;
          for (var a2 = 0; a2 < this.length; a2 += 1)
            if (arguments.length === 2)
              this[a2].setAttribute(e2, t2);
            else
              for (var i2 in e2)
                this[a2][i2] = e2[i2], this[a2].setAttribute(i2, e2[i2]);
          return this;
        }, removeAttr: function(e2) {
          for (var t2 = 0; t2 < this.length; t2 += 1)
            this[t2].removeAttribute(e2);
          return this;
        }, transform: function(e2) {
          for (var t2 = 0; t2 < this.length; t2 += 1)
            this[t2].style.transform = e2;
          return this;
        }, transition: function(e2) {
          for (var t2 = 0; t2 < this.length; t2 += 1)
            this[t2].style.transitionDuration = typeof e2 != "string" ? e2 + "ms" : e2;
          return this;
        }, on: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = t2[0], s2 = t2[1], r2 = t2[2], n2 = t2[3];
          function l2(e3) {
            var t3 = e3.target;
            if (t3) {
              var a3 = e3.target.dom7EventData || [];
              if (a3.indexOf(e3) < 0 && a3.unshift(e3), m(t3).is(s2))
                r2.apply(t3, a3);
              else
                for (var i3 = m(t3).parents(), n3 = 0; n3 < i3.length; n3 += 1)
                  m(i3[n3]).is(s2) && r2.apply(i3[n3], a3);
            }
          }
          function o2(e3) {
            var t3 = e3 && e3.target && e3.target.dom7EventData || [];
            t3.indexOf(e3) < 0 && t3.unshift(e3), r2.apply(this, t3);
          }
          typeof t2[1] == "function" && (i2 = t2[0], r2 = t2[1], n2 = t2[2], s2 = void 0), n2 || (n2 = false);
          for (var d2, p2 = i2.split(" "), u2 = 0; u2 < this.length; u2 += 1) {
            var c2 = this[u2];
            if (s2)
              for (d2 = 0; d2 < p2.length; d2 += 1) {
                var h2 = p2[d2];
                c2.dom7LiveListeners || (c2.dom7LiveListeners = {}), c2.dom7LiveListeners[h2] || (c2.dom7LiveListeners[h2] = []), c2.dom7LiveListeners[h2].push({ listener: r2, proxyListener: l2 }), c2.addEventListener(h2, l2, n2);
              }
            else
              for (d2 = 0; d2 < p2.length; d2 += 1) {
                var v2 = p2[d2];
                c2.dom7Listeners || (c2.dom7Listeners = {}), c2.dom7Listeners[v2] || (c2.dom7Listeners[v2] = []), c2.dom7Listeners[v2].push({ listener: r2, proxyListener: o2 }), c2.addEventListener(v2, o2, n2);
              }
          }
          return this;
        }, off: function() {
          for (var e2 = arguments.length, t2 = new Array(e2), a2 = 0; a2 < e2; a2++)
            t2[a2] = arguments[a2];
          var i2 = t2[0], s2 = t2[1], r2 = t2[2], n2 = t2[3];
          typeof t2[1] == "function" && (i2 = t2[0], r2 = t2[1], n2 = t2[2], s2 = void 0), n2 || (n2 = false);
          for (var l2 = i2.split(" "), o2 = 0; o2 < l2.length; o2 += 1)
            for (var d2 = l2[o2], p2 = 0; p2 < this.length; p2 += 1) {
              var u2 = this[p2], c2 = void 0;
              if (!s2 && u2.dom7Listeners ? c2 = u2.dom7Listeners[d2] : s2 && u2.dom7LiveListeners && (c2 = u2.dom7LiveListeners[d2]), c2 && c2.length)
                for (var h2 = c2.length - 1; h2 >= 0; h2 -= 1) {
                  var v2 = c2[h2];
                  r2 && v2.listener === r2 || r2 && v2.listener && v2.listener.dom7proxy && v2.listener.dom7proxy === r2 ? (u2.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1)) : r2 || (u2.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1));
                }
            }
          return this;
        }, trigger: function() {
          for (var e2 = l(), t2 = arguments.length, a2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            a2[i2] = arguments[i2];
          for (var s2 = a2[0].split(" "), r2 = a2[1], n2 = 0; n2 < s2.length; n2 += 1)
            for (var o2 = s2[n2], d2 = 0; d2 < this.length; d2 += 1) {
              var p2 = this[d2];
              if (e2.CustomEvent) {
                var u2 = new e2.CustomEvent(o2, { detail: r2, bubbles: true, cancelable: true });
                p2.dom7EventData = a2.filter(function(e3, t3) {
                  return t3 > 0;
                }), p2.dispatchEvent(u2), p2.dom7EventData = [], delete p2.dom7EventData;
              }
            }
          return this;
        }, transitionEnd: function(e2) {
          var t2 = this;
          return e2 && t2.on("transitionend", function a2(i2) {
            i2.target === this && (e2.call(this, i2), t2.off("transitionend", a2));
          }), this;
        }, outerWidth: function(e2) {
          if (this.length > 0) {
            if (e2) {
              var t2 = this.styles();
              return this[0].offsetWidth + parseFloat(t2.getPropertyValue("margin-right")) + parseFloat(t2.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
          }
          return null;
        }, outerHeight: function(e2) {
          if (this.length > 0) {
            if (e2) {
              var t2 = this.styles();
              return this[0].offsetHeight + parseFloat(t2.getPropertyValue("margin-top")) + parseFloat(t2.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
          }
          return null;
        }, styles: function() {
          var e2 = l();
          return this[0] ? e2.getComputedStyle(this[0], null) : {};
        }, offset: function() {
          if (this.length > 0) {
            var e2 = l(), t2 = r(), a2 = this[0], i2 = a2.getBoundingClientRect(), s2 = t2.body, n2 = a2.clientTop || s2.clientTop || 0, o2 = a2.clientLeft || s2.clientLeft || 0, d2 = a2 === e2 ? e2.scrollY : a2.scrollTop, p2 = a2 === e2 ? e2.scrollX : a2.scrollLeft;
            return { top: i2.top + d2 - n2, left: i2.left + p2 - o2 };
          }
          return null;
        }, css: function(e2, t2) {
          var a2, i2 = l();
          if (arguments.length === 1) {
            if (typeof e2 != "string") {
              for (a2 = 0; a2 < this.length; a2 += 1)
                for (var s2 in e2)
                  this[a2].style[s2] = e2[s2];
              return this;
            }
            if (this[0])
              return i2.getComputedStyle(this[0], null).getPropertyValue(e2);
          }
          if (arguments.length === 2 && typeof e2 == "string") {
            for (a2 = 0; a2 < this.length; a2 += 1)
              this[a2].style[e2] = t2;
            return this;
          }
          return this;
        }, each: function(e2) {
          return e2 ? (this.forEach(function(t2, a2) {
            e2.apply(t2, [t2, a2]);
          }), this) : this;
        }, html: function(e2) {
          if (e2 === void 0)
            return this[0] ? this[0].innerHTML : null;
          for (var t2 = 0; t2 < this.length; t2 += 1)
            this[t2].innerHTML = e2;
          return this;
        }, text: function(e2) {
          if (e2 === void 0)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t2 = 0; t2 < this.length; t2 += 1)
            this[t2].textContent = e2;
          return this;
        }, is: function(e2) {
          var t2, a2, i2 = l(), s2 = r(), n2 = this[0];
          if (!n2 || e2 === void 0)
            return false;
          if (typeof e2 == "string") {
            if (n2.matches)
              return n2.matches(e2);
            if (n2.webkitMatchesSelector)
              return n2.webkitMatchesSelector(e2);
            if (n2.msMatchesSelector)
              return n2.msMatchesSelector(e2);
            for (t2 = m(e2), a2 = 0; a2 < t2.length; a2 += 1)
              if (t2[a2] === n2)
                return true;
            return false;
          }
          if (e2 === s2)
            return n2 === s2;
          if (e2 === i2)
            return n2 === i2;
          if (e2.nodeType || e2 instanceof h) {
            for (t2 = e2.nodeType ? [e2] : e2, a2 = 0; a2 < t2.length; a2 += 1)
              if (t2[a2] === n2)
                return true;
            return false;
          }
          return false;
        }, index: function() {
          var e2, t2 = this[0];
          if (t2) {
            for (e2 = 0; (t2 = t2.previousSibling) !== null; )
              t2.nodeType === 1 && (e2 += 1);
            return e2;
          }
        }, eq: function(e2) {
          if (e2 === void 0)
            return this;
          var t2 = this.length;
          if (e2 > t2 - 1)
            return m([]);
          if (e2 < 0) {
            var a2 = t2 + e2;
            return m(a2 < 0 ? [] : [this[a2]]);
          }
          return m([this[e2]]);
        }, append: function() {
          for (var e2, t2 = r(), a2 = 0; a2 < arguments.length; a2 += 1) {
            e2 = a2 < 0 || arguments.length <= a2 ? void 0 : arguments[a2];
            for (var i2 = 0; i2 < this.length; i2 += 1)
              if (typeof e2 == "string") {
                var s2 = t2.createElement("div");
                for (s2.innerHTML = e2; s2.firstChild; )
                  this[i2].appendChild(s2.firstChild);
              } else if (e2 instanceof h)
                for (var n2 = 0; n2 < e2.length; n2 += 1)
                  this[i2].appendChild(e2[n2]);
              else
                this[i2].appendChild(e2);
          }
          return this;
        }, prepend: function(e2) {
          var t2, a2, i2 = r();
          for (t2 = 0; t2 < this.length; t2 += 1)
            if (typeof e2 == "string") {
              var s2 = i2.createElement("div");
              for (s2.innerHTML = e2, a2 = s2.childNodes.length - 1; a2 >= 0; a2 -= 1)
                this[t2].insertBefore(s2.childNodes[a2], this[t2].childNodes[0]);
            } else if (e2 instanceof h)
              for (a2 = 0; a2 < e2.length; a2 += 1)
                this[t2].insertBefore(e2[a2], this[t2].childNodes[0]);
            else
              this[t2].insertBefore(e2, this[t2].childNodes[0]);
          return this;
        }, next: function(e2) {
          return this.length > 0 ? e2 ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e2) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
        }, nextAll: function(e2) {
          var t2 = [], a2 = this[0];
          if (!a2)
            return m([]);
          for (; a2.nextElementSibling; ) {
            var i2 = a2.nextElementSibling;
            e2 ? m(i2).is(e2) && t2.push(i2) : t2.push(i2), a2 = i2;
          }
          return m(t2);
        }, prev: function(e2) {
          if (this.length > 0) {
            var t2 = this[0];
            return e2 ? t2.previousElementSibling && m(t2.previousElementSibling).is(e2) ? m([t2.previousElementSibling]) : m([]) : t2.previousElementSibling ? m([t2.previousElementSibling]) : m([]);
          }
          return m([]);
        }, prevAll: function(e2) {
          var t2 = [], a2 = this[0];
          if (!a2)
            return m([]);
          for (; a2.previousElementSibling; ) {
            var i2 = a2.previousElementSibling;
            e2 ? m(i2).is(e2) && t2.push(i2) : t2.push(i2), a2 = i2;
          }
          return m(t2);
        }, parent: function(e2) {
          for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
            this[a2].parentNode !== null && (e2 ? m(this[a2].parentNode).is(e2) && t2.push(this[a2].parentNode) : t2.push(this[a2].parentNode));
          return m(t2);
        }, parents: function(e2) {
          for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
            for (var i2 = this[a2].parentNode; i2; )
              e2 ? m(i2).is(e2) && t2.push(i2) : t2.push(i2), i2 = i2.parentNode;
          return m(t2);
        }, closest: function(e2) {
          var t2 = this;
          return e2 === void 0 ? m([]) : (t2.is(e2) || (t2 = t2.parents(e2).eq(0)), t2);
        }, find: function(e2) {
          for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
            for (var i2 = this[a2].querySelectorAll(e2), s2 = 0; s2 < i2.length; s2 += 1)
              t2.push(i2[s2]);
          return m(t2);
        }, children: function(e2) {
          for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
            for (var i2 = this[a2].children, s2 = 0; s2 < i2.length; s2 += 1)
              e2 && !m(i2[s2]).is(e2) || t2.push(i2[s2]);
          return m(t2);
        }, filter: function(e2) {
          return m(f(this, e2));
        }, remove: function() {
          for (var e2 = 0; e2 < this.length; e2 += 1)
            this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
          return this;
        } };
        function E(e2, t2) {
          return t2 === void 0 && (t2 = 0), setTimeout(e2, t2);
        }
        function x() {
          return Date.now();
        }
        function T(e2, t2) {
          t2 === void 0 && (t2 = "x");
          var a2, i2, s2, r2 = l(), n2 = function(e3) {
            var t3, a3 = l();
            return a3.getComputedStyle && (t3 = a3.getComputedStyle(e3, null)), !t3 && e3.currentStyle && (t3 = e3.currentStyle), t3 || (t3 = e3.style), t3;
          }(e2);
          return r2.WebKitCSSMatrix ? ((i2 = n2.transform || n2.webkitTransform).split(",").length > 6 && (i2 = i2.split(", ").map(function(e3) {
            return e3.replace(",", ".");
          }).join(", ")), s2 = new r2.WebKitCSSMatrix(i2 === "none" ? "" : i2)) : a2 = (s2 = n2.MozTransform || n2.OTransform || n2.MsTransform || n2.msTransform || n2.transform || n2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), t2 === "x" && (i2 = r2.WebKitCSSMatrix ? s2.m41 : a2.length === 16 ? parseFloat(a2[12]) : parseFloat(a2[4])), t2 === "y" && (i2 = r2.WebKitCSSMatrix ? s2.m42 : a2.length === 16 ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
        }
        function C(e2) {
          return typeof e2 == "object" && e2 !== null && e2.constructor && Object.prototype.toString.call(e2).slice(8, -1) === "Object";
        }
        function S(e2) {
          return typeof window != "undefined" && window.HTMLElement !== void 0 ? e2 instanceof HTMLElement : e2 && (e2.nodeType === 1 || e2.nodeType === 11);
        }
        function M() {
          for (var e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t2 = ["__proto__", "constructor", "prototype"], a2 = 1; a2 < arguments.length; a2 += 1) {
            var i2 = a2 < 0 || arguments.length <= a2 ? void 0 : arguments[a2];
            if (i2 != null && !S(i2))
              for (var s2 = Object.keys(Object(i2)).filter(function(e3) {
                return t2.indexOf(e3) < 0;
              }), r2 = 0, n2 = s2.length; r2 < n2; r2 += 1) {
                var l2 = s2[r2], o2 = Object.getOwnPropertyDescriptor(i2, l2);
                o2 !== void 0 && o2.enumerable && (C(e2[l2]) && C(i2[l2]) ? i2[l2].__swiper__ ? e2[l2] = i2[l2] : M(e2[l2], i2[l2]) : !C(e2[l2]) && C(i2[l2]) ? (e2[l2] = {}, i2[l2].__swiper__ ? e2[l2] = i2[l2] : M(e2[l2], i2[l2])) : e2[l2] = i2[l2]);
              }
          }
          return e2;
        }
        function z(e2, t2) {
          Object.keys(t2).forEach(function(a2) {
            C(t2[a2]) && Object.keys(t2[a2]).forEach(function(i2) {
              typeof t2[a2][i2] == "function" && (t2[a2][i2] = t2[a2][i2].bind(e2));
            }), e2[a2] = t2[a2];
          });
        }
        function P(e2) {
          return e2 === void 0 && (e2 = ""), "." + e2.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".");
        }
        function k(e2, t2, a2, i2) {
          var s2 = r();
          return a2 && Object.keys(i2).forEach(function(a3) {
            if (!t2[a3] && t2.auto === true) {
              var r2 = s2.createElement("div");
              r2.className = i2[a3], e2.append(r2), t2[a3] = r2;
            }
          }), t2;
        }
        function $() {
          return g || (g = function() {
            var e2 = l(), t2 = r();
            return { touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch), pointerEvents: !!e2.PointerEvent && "maxTouchPoints" in e2.navigator && e2.navigator.maxTouchPoints >= 0, observer: "MutationObserver" in e2 || "WebkitMutationObserver" in e2, passiveListener: function() {
              var t3 = false;
              try {
                var a2 = Object.defineProperty({}, "passive", { get: function() {
                  t3 = true;
                } });
                e2.addEventListener("testPassiveListener", null, a2);
              } catch (e3) {
              }
              return t3;
            }(), gestures: "ongesturestart" in e2 };
          }()), g;
        }
        function L(e2) {
          return e2 === void 0 && (e2 = {}), b || (b = function(e3) {
            var t2 = (e3 === void 0 ? {} : e3).userAgent, a2 = $(), i2 = l(), s2 = i2.navigator.platform, r2 = t2 || i2.navigator.userAgent, n2 = { ios: false, android: false }, o2 = i2.screen.width, d2 = i2.screen.height, p2 = r2.match(/(Android);?[\s\/]+([\d.]+)?/), u2 = r2.match(/(iPad).*OS\s([\d_]+)/), c2 = r2.match(/(iPod)(.*OS\s([\d_]+))?/), h2 = !u2 && r2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), v2 = s2 === "Win32", f2 = s2 === "MacIntel";
            return !u2 && f2 && a2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o2 + "x" + d2) >= 0 && ((u2 = r2.match(/(Version)\/([\d.]+)/)) || (u2 = [0, 1, "13_0_0"]), f2 = false), p2 && !v2 && (n2.os = "android", n2.android = true), (u2 || h2 || c2) && (n2.os = "ios", n2.ios = true), n2;
          }(e2)), b;
        }
        function I() {
          return w || (w = function() {
            var e2, t2 = l();
            return { isEdge: !!t2.navigator.userAgent.match(/Edge/g), isSafari: (e2 = t2.navigator.userAgent.toLowerCase(), e2.indexOf("safari") >= 0 && e2.indexOf("chrome") < 0 && e2.indexOf("android") < 0), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t2.navigator.userAgent) };
          }()), w;
        }
        Object.keys(y).forEach(function(e2) {
          Object.defineProperty(m.fn, e2, { value: y[e2], writable: true });
        });
        var O = { name: "resize", create: function() {
          var e2 = this;
          M(e2, { resize: { observer: null, createObserver: function() {
            e2 && !e2.destroyed && e2.initialized && (e2.resize.observer = new ResizeObserver(function(t2) {
              var a2 = e2.width, i2 = e2.height, s2 = a2, r2 = i2;
              t2.forEach(function(t3) {
                var a3 = t3.contentBoxSize, i3 = t3.contentRect, n2 = t3.target;
                n2 && n2 !== e2.el || (s2 = i3 ? i3.width : (a3[0] || a3).inlineSize, r2 = i3 ? i3.height : (a3[0] || a3).blockSize);
              }), s2 === a2 && r2 === i2 || e2.resize.resizeHandler();
            }), e2.resize.observer.observe(e2.el));
          }, removeObserver: function() {
            e2.resize.observer && e2.resize.observer.unobserve && e2.el && (e2.resize.observer.unobserve(e2.el), e2.resize.observer = null);
          }, resizeHandler: function() {
            e2 && !e2.destroyed && e2.initialized && (e2.emit("beforeResize"), e2.emit("resize"));
          }, orientationChangeHandler: function() {
            e2 && !e2.destroyed && e2.initialized && e2.emit("orientationchange");
          } } });
        }, on: { init: function(e2) {
          var t2 = l();
          e2.params.resizeObserver && l().ResizeObserver !== void 0 ? e2.resize.createObserver() : (t2.addEventListener("resize", e2.resize.resizeHandler), t2.addEventListener("orientationchange", e2.resize.orientationChangeHandler));
        }, destroy: function(e2) {
          var t2 = l();
          e2.resize.removeObserver(), t2.removeEventListener("resize", e2.resize.resizeHandler), t2.removeEventListener("orientationchange", e2.resize.orientationChangeHandler);
        } } }, A = { attach: function(e2, t2) {
          t2 === void 0 && (t2 = {});
          var a2 = l(), i2 = this, s2 = new (a2.MutationObserver || a2.WebkitMutationObserver)(function(e3) {
            if (e3.length !== 1) {
              var t3 = function() {
                i2.emit("observerUpdate", e3[0]);
              };
              a2.requestAnimationFrame ? a2.requestAnimationFrame(t3) : a2.setTimeout(t3, 0);
            } else
              i2.emit("observerUpdate", e3[0]);
          });
          s2.observe(e2, { attributes: t2.attributes === void 0 || t2.attributes, childList: t2.childList === void 0 || t2.childList, characterData: t2.characterData === void 0 || t2.characterData }), i2.observer.observers.push(s2);
        }, init: function() {
          var e2 = this;
          if (e2.support.observer && e2.params.observer) {
            if (e2.params.observeParents)
              for (var t2 = e2.$el.parents(), a2 = 0; a2 < t2.length; a2 += 1)
                e2.observer.attach(t2[a2]);
            e2.observer.attach(e2.$el[0], { childList: e2.params.observeSlideChildren }), e2.observer.attach(e2.$wrapperEl[0], { attributes: false });
          }
        }, destroy: function() {
          this.observer.observers.forEach(function(e2) {
            e2.disconnect();
          }), this.observer.observers = [];
        } }, D = { name: "observer", params: { observer: false, observeParents: false, observeSlideChildren: false }, create: function() {
          z(this, { observer: t({}, A, { observers: [] }) });
        }, on: { init: function(e2) {
          e2.observer.init();
        }, destroy: function(e2) {
          e2.observer.destroy();
        } } };
        function N(e2) {
          var t2 = this, a2 = r(), i2 = l(), s2 = t2.touchEventsData, n2 = t2.params, o2 = t2.touches;
          if (t2.enabled && (!t2.animating || !n2.preventInteractionOnTransition)) {
            var d2 = e2;
            d2.originalEvent && (d2 = d2.originalEvent);
            var p2 = m(d2.target);
            if ((n2.touchEventsTarget !== "wrapper" || p2.closest(t2.wrapperEl).length) && (s2.isTouchEvent = d2.type === "touchstart", (s2.isTouchEvent || !("which" in d2) || d2.which !== 3) && !(!s2.isTouchEvent && "button" in d2 && d2.button > 0 || s2.isTouched && s2.isMoved))) {
              !!n2.noSwipingClass && n2.noSwipingClass !== "" && d2.target && d2.target.shadowRoot && e2.path && e2.path[0] && (p2 = m(e2.path[0]));
              var u2 = n2.noSwipingSelector ? n2.noSwipingSelector : "." + n2.noSwipingClass, c2 = !(!d2.target || !d2.target.shadowRoot);
              if (n2.noSwiping && (c2 ? function(e3, t3) {
                return t3 === void 0 && (t3 = this), function t4(a3) {
                  return a3 && a3 !== r() && a3 !== l() ? (a3.assignedSlot && (a3 = a3.assignedSlot), a3.closest(e3) || t4(a3.getRootNode().host)) : null;
                }(t3);
              }(u2, d2.target) : p2.closest(u2)[0]))
                t2.allowClick = true;
              else if (!n2.swipeHandler || p2.closest(n2.swipeHandler)[0]) {
                o2.currentX = d2.type === "touchstart" ? d2.targetTouches[0].pageX : d2.pageX, o2.currentY = d2.type === "touchstart" ? d2.targetTouches[0].pageY : d2.pageY;
                var h2 = o2.currentX, v2 = o2.currentY, f2 = n2.edgeSwipeDetection || n2.iOSEdgeSwipeDetection, g2 = n2.edgeSwipeThreshold || n2.iOSEdgeSwipeThreshold;
                if (f2 && (h2 <= g2 || h2 >= i2.innerWidth - g2)) {
                  if (f2 !== "prevent")
                    return;
                  e2.preventDefault();
                }
                if (M(s2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), o2.startX = h2, o2.startY = v2, s2.touchStartTime = x(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, n2.threshold > 0 && (s2.allowThresholdMove = false), d2.type !== "touchstart") {
                  var b2 = true;
                  p2.is(s2.focusableElements) && (b2 = false), a2.activeElement && m(a2.activeElement).is(s2.focusableElements) && a2.activeElement !== p2[0] && a2.activeElement.blur();
                  var w2 = b2 && t2.allowTouchMove && n2.touchStartPreventDefault;
                  !n2.touchStartForcePreventDefault && !w2 || p2[0].isContentEditable || d2.preventDefault();
                }
                t2.emit("touchStart", d2);
              }
            }
          }
        }
        function G(e2) {
          var t2 = r(), a2 = this, i2 = a2.touchEventsData, s2 = a2.params, n2 = a2.touches, l2 = a2.rtlTranslate;
          if (a2.enabled) {
            var o2 = e2;
            if (o2.originalEvent && (o2 = o2.originalEvent), i2.isTouched) {
              if (!i2.isTouchEvent || o2.type === "touchmove") {
                var d2 = o2.type === "touchmove" && o2.targetTouches && (o2.targetTouches[0] || o2.changedTouches[0]), p2 = o2.type === "touchmove" ? d2.pageX : o2.pageX, u2 = o2.type === "touchmove" ? d2.pageY : o2.pageY;
                if (o2.preventedByNestedSwiper)
                  return n2.startX = p2, void (n2.startY = u2);
                if (!a2.allowTouchMove)
                  return a2.allowClick = false, void (i2.isTouched && (M(n2, { startX: p2, startY: u2, currentX: p2, currentY: u2 }), i2.touchStartTime = x()));
                if (i2.isTouchEvent && s2.touchReleaseOnEdges && !s2.loop) {
                  if (a2.isVertical()) {
                    if (u2 < n2.startY && a2.translate <= a2.maxTranslate() || u2 > n2.startY && a2.translate >= a2.minTranslate())
                      return i2.isTouched = false, void (i2.isMoved = false);
                  } else if (p2 < n2.startX && a2.translate <= a2.maxTranslate() || p2 > n2.startX && a2.translate >= a2.minTranslate())
                    return;
                }
                if (i2.isTouchEvent && t2.activeElement && o2.target === t2.activeElement && m(o2.target).is(i2.focusableElements))
                  return i2.isMoved = true, void (a2.allowClick = false);
                if (i2.allowTouchCallbacks && a2.emit("touchMove", o2), !(o2.targetTouches && o2.targetTouches.length > 1)) {
                  n2.currentX = p2, n2.currentY = u2;
                  var c2 = n2.currentX - n2.startX, h2 = n2.currentY - n2.startY;
                  if (!(a2.params.threshold && Math.sqrt(Math.pow(c2, 2) + Math.pow(h2, 2)) < a2.params.threshold)) {
                    var v2;
                    if (i2.isScrolling === void 0)
                      a2.isHorizontal() && n2.currentY === n2.startY || a2.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : c2 * c2 + h2 * h2 >= 25 && (v2 = 180 * Math.atan2(Math.abs(h2), Math.abs(c2)) / Math.PI, i2.isScrolling = a2.isHorizontal() ? v2 > s2.touchAngle : 90 - v2 > s2.touchAngle);
                    if (i2.isScrolling && a2.emit("touchMoveOpposite", o2), i2.startMoving === void 0 && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling)
                      i2.isTouched = false;
                    else if (i2.startMoving) {
                      a2.allowClick = false, !s2.cssMode && o2.cancelable && o2.preventDefault(), s2.touchMoveStopPropagation && !s2.nested && o2.stopPropagation(), i2.isMoved || (s2.loop && a2.loopFix(), i2.startTranslate = a2.getTranslate(), a2.setTransition(0), a2.animating && a2.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i2.allowMomentumBounce = false, !s2.grabCursor || a2.allowSlideNext !== true && a2.allowSlidePrev !== true || a2.setGrabCursor(true), a2.emit("sliderFirstMove", o2)), a2.emit("sliderMove", o2), i2.isMoved = true;
                      var f2 = a2.isHorizontal() ? c2 : h2;
                      n2.diff = f2, f2 *= s2.touchRatio, l2 && (f2 = -f2), a2.swipeDirection = f2 > 0 ? "prev" : "next", i2.currentTranslate = f2 + i2.startTranslate;
                      var g2 = true, b2 = s2.resistanceRatio;
                      if (s2.touchReleaseOnEdges && (b2 = 0), f2 > 0 && i2.currentTranslate > a2.minTranslate() ? (g2 = false, s2.resistance && (i2.currentTranslate = a2.minTranslate() - 1 + Math.pow(-a2.minTranslate() + i2.startTranslate + f2, b2))) : f2 < 0 && i2.currentTranslate < a2.maxTranslate() && (g2 = false, s2.resistance && (i2.currentTranslate = a2.maxTranslate() + 1 - Math.pow(a2.maxTranslate() - i2.startTranslate - f2, b2))), g2 && (o2.preventedByNestedSwiper = true), !a2.allowSlideNext && a2.swipeDirection === "next" && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !a2.allowSlidePrev && a2.swipeDirection === "prev" && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), a2.allowSlidePrev || a2.allowSlideNext || (i2.currentTranslate = i2.startTranslate), s2.threshold > 0) {
                        if (!(Math.abs(f2) > s2.threshold || i2.allowThresholdMove))
                          return void (i2.currentTranslate = i2.startTranslate);
                        if (!i2.allowThresholdMove)
                          return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = a2.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
                      }
                      s2.followFinger && !s2.cssMode && ((s2.freeMode || s2.watchSlidesProgress || s2.watchSlidesVisibility) && (a2.updateActiveIndex(), a2.updateSlidesClasses()), s2.freeMode && (i2.velocities.length === 0 && i2.velocities.push({ position: n2[a2.isHorizontal() ? "startX" : "startY"], time: i2.touchStartTime }), i2.velocities.push({ position: n2[a2.isHorizontal() ? "currentX" : "currentY"], time: x() })), a2.updateProgress(i2.currentTranslate), a2.setTranslate(i2.currentTranslate));
                    }
                  }
                }
              }
            } else
              i2.startMoving && i2.isScrolling && a2.emit("touchMoveOpposite", o2);
          }
        }
        function B(e2) {
          var t2 = this, a2 = t2.touchEventsData, i2 = t2.params, s2 = t2.touches, r2 = t2.rtlTranslate, n2 = t2.$wrapperEl, l2 = t2.slidesGrid, o2 = t2.snapGrid;
          if (t2.enabled) {
            var d2 = e2;
            if (d2.originalEvent && (d2 = d2.originalEvent), a2.allowTouchCallbacks && t2.emit("touchEnd", d2), a2.allowTouchCallbacks = false, !a2.isTouched)
              return a2.isMoved && i2.grabCursor && t2.setGrabCursor(false), a2.isMoved = false, void (a2.startMoving = false);
            i2.grabCursor && a2.isMoved && a2.isTouched && (t2.allowSlideNext === true || t2.allowSlidePrev === true) && t2.setGrabCursor(false);
            var p2, u2 = x(), c2 = u2 - a2.touchStartTime;
            if (t2.allowClick && (t2.updateClickedSlide(d2), t2.emit("tap click", d2), c2 < 300 && u2 - a2.lastClickTime < 300 && t2.emit("doubleTap doubleClick", d2)), a2.lastClickTime = x(), E(function() {
              t2.destroyed || (t2.allowClick = true);
            }), !a2.isTouched || !a2.isMoved || !t2.swipeDirection || s2.diff === 0 || a2.currentTranslate === a2.startTranslate)
              return a2.isTouched = false, a2.isMoved = false, void (a2.startMoving = false);
            if (a2.isTouched = false, a2.isMoved = false, a2.startMoving = false, p2 = i2.followFinger ? r2 ? t2.translate : -t2.translate : -a2.currentTranslate, !i2.cssMode)
              if (i2.freeMode) {
                if (p2 < -t2.minTranslate())
                  return void t2.slideTo(t2.activeIndex);
                if (p2 > -t2.maxTranslate())
                  return void (t2.slides.length < o2.length ? t2.slideTo(o2.length - 1) : t2.slideTo(t2.slides.length - 1));
                if (i2.freeModeMomentum) {
                  if (a2.velocities.length > 1) {
                    var h2 = a2.velocities.pop(), v2 = a2.velocities.pop(), f2 = h2.position - v2.position, m2 = h2.time - v2.time;
                    t2.velocity = f2 / m2, t2.velocity /= 2, Math.abs(t2.velocity) < i2.freeModeMinimumVelocity && (t2.velocity = 0), (m2 > 150 || x() - h2.time > 300) && (t2.velocity = 0);
                  } else
                    t2.velocity = 0;
                  t2.velocity *= i2.freeModeMomentumVelocityRatio, a2.velocities.length = 0;
                  var g2 = 1e3 * i2.freeModeMomentumRatio, b2 = t2.velocity * g2, w2 = t2.translate + b2;
                  r2 && (w2 = -w2);
                  var y2, T2, C2 = false, S2 = 20 * Math.abs(t2.velocity) * i2.freeModeMomentumBounceRatio;
                  if (w2 < t2.maxTranslate())
                    i2.freeModeMomentumBounce ? (w2 + t2.maxTranslate() < -S2 && (w2 = t2.maxTranslate() - S2), y2 = t2.maxTranslate(), C2 = true, a2.allowMomentumBounce = true) : w2 = t2.maxTranslate(), i2.loop && i2.centeredSlides && (T2 = true);
                  else if (w2 > t2.minTranslate())
                    i2.freeModeMomentumBounce ? (w2 - t2.minTranslate() > S2 && (w2 = t2.minTranslate() + S2), y2 = t2.minTranslate(), C2 = true, a2.allowMomentumBounce = true) : w2 = t2.minTranslate(), i2.loop && i2.centeredSlides && (T2 = true);
                  else if (i2.freeModeSticky) {
                    for (var M2, z2 = 0; z2 < o2.length; z2 += 1)
                      if (o2[z2] > -w2) {
                        M2 = z2;
                        break;
                      }
                    w2 = -(w2 = Math.abs(o2[M2] - w2) < Math.abs(o2[M2 - 1] - w2) || t2.swipeDirection === "next" ? o2[M2] : o2[M2 - 1]);
                  }
                  if (T2 && t2.once("transitionEnd", function() {
                    t2.loopFix();
                  }), t2.velocity !== 0) {
                    if (g2 = r2 ? Math.abs((-w2 - t2.translate) / t2.velocity) : Math.abs((w2 - t2.translate) / t2.velocity), i2.freeModeSticky) {
                      var P2 = Math.abs((r2 ? -w2 : w2) - t2.translate), k2 = t2.slidesSizesGrid[t2.activeIndex];
                      g2 = P2 < k2 ? i2.speed : P2 < 2 * k2 ? 1.5 * i2.speed : 2.5 * i2.speed;
                    }
                  } else if (i2.freeModeSticky)
                    return void t2.slideToClosest();
                  i2.freeModeMomentumBounce && C2 ? (t2.updateProgress(y2), t2.setTransition(g2), t2.setTranslate(w2), t2.transitionStart(true, t2.swipeDirection), t2.animating = true, n2.transitionEnd(function() {
                    t2 && !t2.destroyed && a2.allowMomentumBounce && (t2.emit("momentumBounce"), t2.setTransition(i2.speed), setTimeout(function() {
                      t2.setTranslate(y2), n2.transitionEnd(function() {
                        t2 && !t2.destroyed && t2.transitionEnd();
                      });
                    }, 0));
                  })) : t2.velocity ? (t2.updateProgress(w2), t2.setTransition(g2), t2.setTranslate(w2), t2.transitionStart(true, t2.swipeDirection), t2.animating || (t2.animating = true, n2.transitionEnd(function() {
                    t2 && !t2.destroyed && t2.transitionEnd();
                  }))) : (t2.emit("_freeModeNoMomentumRelease"), t2.updateProgress(w2)), t2.updateActiveIndex(), t2.updateSlidesClasses();
                } else {
                  if (i2.freeModeSticky)
                    return void t2.slideToClosest();
                  i2.freeMode && t2.emit("_freeModeNoMomentumRelease");
                }
                (!i2.freeModeMomentum || c2 >= i2.longSwipesMs) && (t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses());
              } else {
                for (var $2 = 0, L2 = t2.slidesSizesGrid[0], I2 = 0; I2 < l2.length; I2 += I2 < i2.slidesPerGroupSkip ? 1 : i2.slidesPerGroup) {
                  var O2 = I2 < i2.slidesPerGroupSkip - 1 ? 1 : i2.slidesPerGroup;
                  l2[I2 + O2] !== void 0 ? p2 >= l2[I2] && p2 < l2[I2 + O2] && ($2 = I2, L2 = l2[I2 + O2] - l2[I2]) : p2 >= l2[I2] && ($2 = I2, L2 = l2[l2.length - 1] - l2[l2.length - 2]);
                }
                var A2 = (p2 - l2[$2]) / L2, D2 = $2 < i2.slidesPerGroupSkip - 1 ? 1 : i2.slidesPerGroup;
                if (c2 > i2.longSwipesMs) {
                  if (!i2.longSwipes)
                    return void t2.slideTo(t2.activeIndex);
                  t2.swipeDirection === "next" && (A2 >= i2.longSwipesRatio ? t2.slideTo($2 + D2) : t2.slideTo($2)), t2.swipeDirection === "prev" && (A2 > 1 - i2.longSwipesRatio ? t2.slideTo($2 + D2) : t2.slideTo($2));
                } else {
                  if (!i2.shortSwipes)
                    return void t2.slideTo(t2.activeIndex);
                  t2.navigation && (d2.target === t2.navigation.nextEl || d2.target === t2.navigation.prevEl) ? d2.target === t2.navigation.nextEl ? t2.slideTo($2 + D2) : t2.slideTo($2) : (t2.swipeDirection === "next" && t2.slideTo($2 + D2), t2.swipeDirection === "prev" && t2.slideTo($2));
                }
              }
          }
        }
        function H() {
          var e2 = this, t2 = e2.params, a2 = e2.el;
          if (!a2 || a2.offsetWidth !== 0) {
            t2.breakpoints && e2.setBreakpoint();
            var i2 = e2.allowSlideNext, s2 = e2.allowSlidePrev, r2 = e2.snapGrid;
            e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), (t2.slidesPerView === "auto" || t2.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = s2, e2.allowSlideNext = i2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
          }
        }
        function R(e2) {
          var t2 = this;
          t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
        }
        function X() {
          var e2 = this, t2 = e2.wrapperEl, a2 = e2.rtlTranslate;
          if (e2.enabled) {
            e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = a2 ? t2.scrollWidth - t2.offsetWidth - t2.scrollLeft : -t2.scrollLeft : e2.translate = -t2.scrollTop, e2.translate === -0 && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
            var i2 = e2.maxTranslate() - e2.minTranslate();
            (i2 === 0 ? 0 : (e2.translate - e2.minTranslate()) / i2) !== e2.progress && e2.updateProgress(a2 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
          }
        }
        var Y = false;
        function V() {
        }
        var W = { init: true, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: false, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, slidesPerGroupSkip: 0, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: false, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: false, loopPreventsSlide: true, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true, _emitClasses: false }, F = { modular: { useParams: function(e2) {
          var t2 = this;
          t2.modules && Object.keys(t2.modules).forEach(function(a2) {
            var i2 = t2.modules[a2];
            i2.params && M(e2, i2.params);
          });
        }, useModules: function(e2) {
          e2 === void 0 && (e2 = {});
          var t2 = this;
          t2.modules && Object.keys(t2.modules).forEach(function(a2) {
            var i2 = t2.modules[a2], s2 = e2[a2] || {};
            i2.on && t2.on && Object.keys(i2.on).forEach(function(e3) {
              t2.on(e3, i2.on[e3]);
            }), i2.create && i2.create.bind(t2)(s2);
          });
        } }, eventsEmitter: { on: function(e2, t2, a2) {
          var i2 = this;
          if (typeof t2 != "function")
            return i2;
          var s2 = a2 ? "unshift" : "push";
          return e2.split(" ").forEach(function(e3) {
            i2.eventsListeners[e3] || (i2.eventsListeners[e3] = []), i2.eventsListeners[e3][s2](t2);
          }), i2;
        }, once: function(e2, t2, a2) {
          var i2 = this;
          if (typeof t2 != "function")
            return i2;
          function s2() {
            i2.off(e2, s2), s2.__emitterProxy && delete s2.__emitterProxy;
            for (var a3 = arguments.length, r2 = new Array(a3), n2 = 0; n2 < a3; n2++)
              r2[n2] = arguments[n2];
            t2.apply(i2, r2);
          }
          return s2.__emitterProxy = t2, i2.on(e2, s2, a2);
        }, onAny: function(e2, t2) {
          var a2 = this;
          if (typeof e2 != "function")
            return a2;
          var i2 = t2 ? "unshift" : "push";
          return a2.eventsAnyListeners.indexOf(e2) < 0 && a2.eventsAnyListeners[i2](e2), a2;
        }, offAny: function(e2) {
          var t2 = this;
          if (!t2.eventsAnyListeners)
            return t2;
          var a2 = t2.eventsAnyListeners.indexOf(e2);
          return a2 >= 0 && t2.eventsAnyListeners.splice(a2, 1), t2;
        }, off: function(e2, t2) {
          var a2 = this;
          return a2.eventsListeners ? (e2.split(" ").forEach(function(e3) {
            t2 === void 0 ? a2.eventsListeners[e3] = [] : a2.eventsListeners[e3] && a2.eventsListeners[e3].forEach(function(i2, s2) {
              (i2 === t2 || i2.__emitterProxy && i2.__emitterProxy === t2) && a2.eventsListeners[e3].splice(s2, 1);
            });
          }), a2) : a2;
        }, emit: function() {
          var e2, t2, a2, i2 = this;
          if (!i2.eventsListeners)
            return i2;
          for (var s2 = arguments.length, r2 = new Array(s2), n2 = 0; n2 < s2; n2++)
            r2[n2] = arguments[n2];
          typeof r2[0] == "string" || Array.isArray(r2[0]) ? (e2 = r2[0], t2 = r2.slice(1, r2.length), a2 = i2) : (e2 = r2[0].events, t2 = r2[0].data, a2 = r2[0].context || i2), t2.unshift(a2);
          var l2 = Array.isArray(e2) ? e2 : e2.split(" ");
          return l2.forEach(function(e3) {
            i2.eventsAnyListeners && i2.eventsAnyListeners.length && i2.eventsAnyListeners.forEach(function(i3) {
              i3.apply(a2, [e3].concat(t2));
            }), i2.eventsListeners && i2.eventsListeners[e3] && i2.eventsListeners[e3].forEach(function(e4) {
              e4.apply(a2, t2);
            });
          }), i2;
        } }, update: { updateSize: function() {
          var e2, t2, a2 = this, i2 = a2.$el;
          e2 = a2.params.width !== void 0 && a2.params.width !== null ? a2.params.width : i2[0].clientWidth, t2 = a2.params.height !== void 0 && a2.params.height !== null ? a2.params.height : i2[0].clientHeight, e2 === 0 && a2.isHorizontal() || t2 === 0 && a2.isVertical() || (e2 = e2 - parseInt(i2.css("padding-left") || 0, 10) - parseInt(i2.css("padding-right") || 0, 10), t2 = t2 - parseInt(i2.css("padding-top") || 0, 10) - parseInt(i2.css("padding-bottom") || 0, 10), Number.isNaN(e2) && (e2 = 0), Number.isNaN(t2) && (t2 = 0), M(a2, { width: e2, height: t2, size: a2.isHorizontal() ? e2 : t2 }));
        }, updateSlides: function() {
          var e2 = this;
          function t2(t3) {
            return e2.isHorizontal() ? t3 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t3];
          }
          function a2(e3, a3) {
            return parseFloat(e3.getPropertyValue(t2(a3)) || 0);
          }
          var i2 = e2.params, s2 = e2.$wrapperEl, r2 = e2.size, n2 = e2.rtlTranslate, l2 = e2.wrongRTL, o2 = e2.virtual && i2.virtual.enabled, d2 = o2 ? e2.virtual.slides.length : e2.slides.length, p2 = s2.children("." + e2.params.slideClass), u2 = o2 ? e2.virtual.slides.length : p2.length, c2 = [], h2 = [], v2 = [], f2 = i2.slidesOffsetBefore;
          typeof f2 == "function" && (f2 = i2.slidesOffsetBefore.call(e2));
          var m2 = i2.slidesOffsetAfter;
          typeof m2 == "function" && (m2 = i2.slidesOffsetAfter.call(e2));
          var g2 = e2.snapGrid.length, b2 = e2.slidesGrid.length, w2 = i2.spaceBetween, y2 = -f2, E2 = 0, x2 = 0;
          if (r2 !== void 0) {
            var T2, C2;
            typeof w2 == "string" && w2.indexOf("%") >= 0 && (w2 = parseFloat(w2.replace("%", "")) / 100 * r2), e2.virtualSize = -w2, n2 ? p2.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p2.css({ marginRight: "", marginBottom: "", marginTop: "" }), i2.slidesPerColumn > 1 && (T2 = Math.floor(u2 / i2.slidesPerColumn) === u2 / e2.params.slidesPerColumn ? u2 : Math.ceil(u2 / i2.slidesPerColumn) * i2.slidesPerColumn, i2.slidesPerView !== "auto" && i2.slidesPerColumnFill === "row" && (T2 = Math.max(T2, i2.slidesPerView * i2.slidesPerColumn)));
            for (var S2, z2, P2, k2 = i2.slidesPerColumn, $2 = T2 / k2, L2 = Math.floor(u2 / i2.slidesPerColumn), I2 = 0; I2 < u2; I2 += 1) {
              C2 = 0;
              var O2 = p2.eq(I2);
              if (i2.slidesPerColumn > 1) {
                var A2 = void 0, D2 = void 0, N2 = void 0;
                if (i2.slidesPerColumnFill === "row" && i2.slidesPerGroup > 1) {
                  var G2 = Math.floor(I2 / (i2.slidesPerGroup * i2.slidesPerColumn)), B2 = I2 - i2.slidesPerColumn * i2.slidesPerGroup * G2, H2 = G2 === 0 ? i2.slidesPerGroup : Math.min(Math.ceil((u2 - G2 * k2 * i2.slidesPerGroup) / k2), i2.slidesPerGroup);
                  A2 = (D2 = B2 - (N2 = Math.floor(B2 / H2)) * H2 + G2 * i2.slidesPerGroup) + N2 * T2 / k2, O2.css({ "-webkit-box-ordinal-group": A2, "-moz-box-ordinal-group": A2, "-ms-flex-order": A2, "-webkit-order": A2, order: A2 });
                } else
                  i2.slidesPerColumnFill === "column" ? (N2 = I2 - (D2 = Math.floor(I2 / k2)) * k2, (D2 > L2 || D2 === L2 && N2 === k2 - 1) && (N2 += 1) >= k2 && (N2 = 0, D2 += 1)) : D2 = I2 - (N2 = Math.floor(I2 / $2)) * $2;
                O2.css(t2("margin-top"), N2 !== 0 ? i2.spaceBetween && i2.spaceBetween + "px" : "");
              }
              if (O2.css("display") !== "none") {
                if (i2.slidesPerView === "auto") {
                  var R2 = getComputedStyle(O2[0]), X2 = O2[0].style.transform, Y2 = O2[0].style.webkitTransform;
                  if (X2 && (O2[0].style.transform = "none"), Y2 && (O2[0].style.webkitTransform = "none"), i2.roundLengths)
                    C2 = e2.isHorizontal() ? O2.outerWidth(true) : O2.outerHeight(true);
                  else {
                    var V2 = a2(R2, "width"), W2 = a2(R2, "padding-left"), F2 = a2(R2, "padding-right"), _2 = a2(R2, "margin-left"), q2 = a2(R2, "margin-right"), j2 = R2.getPropertyValue("box-sizing");
                    if (j2 && j2 === "border-box")
                      C2 = V2 + _2 + q2;
                    else {
                      var U2 = O2[0], K2 = U2.clientWidth;
                      C2 = V2 + W2 + F2 + _2 + q2 + (U2.offsetWidth - K2);
                    }
                  }
                  X2 && (O2[0].style.transform = X2), Y2 && (O2[0].style.webkitTransform = Y2), i2.roundLengths && (C2 = Math.floor(C2));
                } else
                  C2 = (r2 - (i2.slidesPerView - 1) * w2) / i2.slidesPerView, i2.roundLengths && (C2 = Math.floor(C2)), p2[I2] && (p2[I2].style[t2("width")] = C2 + "px");
                p2[I2] && (p2[I2].swiperSlideSize = C2), v2.push(C2), i2.centeredSlides ? (y2 = y2 + C2 / 2 + E2 / 2 + w2, E2 === 0 && I2 !== 0 && (y2 = y2 - r2 / 2 - w2), I2 === 0 && (y2 = y2 - r2 / 2 - w2), Math.abs(y2) < 1e-3 && (y2 = 0), i2.roundLengths && (y2 = Math.floor(y2)), x2 % i2.slidesPerGroup == 0 && c2.push(y2), h2.push(y2)) : (i2.roundLengths && (y2 = Math.floor(y2)), (x2 - Math.min(e2.params.slidesPerGroupSkip, x2)) % e2.params.slidesPerGroup == 0 && c2.push(y2), h2.push(y2), y2 = y2 + C2 + w2), e2.virtualSize += C2 + w2, E2 = C2, x2 += 1;
              }
            }
            if (e2.virtualSize = Math.max(e2.virtualSize, r2) + m2, n2 && l2 && (i2.effect === "slide" || i2.effect === "coverflow") && s2.css({ width: e2.virtualSize + i2.spaceBetween + "px" }), i2.setWrapperSize)
              s2.css(((z2 = {})[t2("width")] = e2.virtualSize + i2.spaceBetween + "px", z2));
            if (i2.slidesPerColumn > 1) {
              if (e2.virtualSize = (C2 + i2.spaceBetween) * T2, e2.virtualSize = Math.ceil(e2.virtualSize / i2.slidesPerColumn) - i2.spaceBetween, s2.css(((P2 = {})[t2("width")] = e2.virtualSize + i2.spaceBetween + "px", P2)), i2.centeredSlides) {
                S2 = [];
                for (var Z2 = 0; Z2 < c2.length; Z2 += 1) {
                  var J2 = c2[Z2];
                  i2.roundLengths && (J2 = Math.floor(J2)), c2[Z2] < e2.virtualSize + c2[0] && S2.push(J2);
                }
                c2 = S2;
              }
            }
            if (!i2.centeredSlides) {
              S2 = [];
              for (var Q2 = 0; Q2 < c2.length; Q2 += 1) {
                var ee2 = c2[Q2];
                i2.roundLengths && (ee2 = Math.floor(ee2)), c2[Q2] <= e2.virtualSize - r2 && S2.push(ee2);
              }
              c2 = S2, Math.floor(e2.virtualSize - r2) - Math.floor(c2[c2.length - 1]) > 1 && c2.push(e2.virtualSize - r2);
            }
            if (c2.length === 0 && (c2 = [0]), i2.spaceBetween !== 0) {
              var te2, ae2 = e2.isHorizontal() && n2 ? "marginLeft" : t2("marginRight");
              p2.filter(function(e3, t3) {
                return !i2.cssMode || t3 !== p2.length - 1;
              }).css(((te2 = {})[ae2] = w2 + "px", te2));
            }
            if (i2.centeredSlides && i2.centeredSlidesBounds) {
              var ie2 = 0;
              v2.forEach(function(e3) {
                ie2 += e3 + (i2.spaceBetween ? i2.spaceBetween : 0);
              });
              var se2 = (ie2 -= i2.spaceBetween) - r2;
              c2 = c2.map(function(e3) {
                return e3 < 0 ? -f2 : e3 > se2 ? se2 + m2 : e3;
              });
            }
            if (i2.centerInsufficientSlides) {
              var re2 = 0;
              if (v2.forEach(function(e3) {
                re2 += e3 + (i2.spaceBetween ? i2.spaceBetween : 0);
              }), (re2 -= i2.spaceBetween) < r2) {
                var ne2 = (r2 - re2) / 2;
                c2.forEach(function(e3, t3) {
                  c2[t3] = e3 - ne2;
                }), h2.forEach(function(e3, t3) {
                  h2[t3] = e3 + ne2;
                });
              }
            }
            M(e2, { slides: p2, snapGrid: c2, slidesGrid: h2, slidesSizesGrid: v2 }), u2 !== d2 && e2.emit("slidesLengthChange"), c2.length !== g2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h2.length !== b2 && e2.emit("slidesGridLengthChange"), (i2.watchSlidesProgress || i2.watchSlidesVisibility) && e2.updateSlidesOffset();
          }
        }, updateAutoHeight: function(e2) {
          var t2, a2 = this, i2 = [], s2 = a2.virtual && a2.params.virtual.enabled, r2 = 0;
          typeof e2 == "number" ? a2.setTransition(e2) : e2 === true && a2.setTransition(a2.params.speed);
          var n2 = function(e3) {
            return s2 ? a2.slides.filter(function(t3) {
              return parseInt(t3.getAttribute("data-swiper-slide-index"), 10) === e3;
            })[0] : a2.slides.eq(e3)[0];
          };
          if (a2.params.slidesPerView !== "auto" && a2.params.slidesPerView > 1)
            if (a2.params.centeredSlides)
              a2.visibleSlides.each(function(e3) {
                i2.push(e3);
              });
            else
              for (t2 = 0; t2 < Math.ceil(a2.params.slidesPerView); t2 += 1) {
                var l2 = a2.activeIndex + t2;
                if (l2 > a2.slides.length && !s2)
                  break;
                i2.push(n2(l2));
              }
          else
            i2.push(n2(a2.activeIndex));
          for (t2 = 0; t2 < i2.length; t2 += 1)
            if (i2[t2] !== void 0) {
              var o2 = i2[t2].offsetHeight;
              r2 = o2 > r2 ? o2 : r2;
            }
          r2 && a2.$wrapperEl.css("height", r2 + "px");
        }, updateSlidesOffset: function() {
          for (var e2 = this.slides, t2 = 0; t2 < e2.length; t2 += 1)
            e2[t2].swiperSlideOffset = this.isHorizontal() ? e2[t2].offsetLeft : e2[t2].offsetTop;
        }, updateSlidesProgress: function(e2) {
          e2 === void 0 && (e2 = this && this.translate || 0);
          var t2 = this, a2 = t2.params, i2 = t2.slides, s2 = t2.rtlTranslate;
          if (i2.length !== 0) {
            i2[0].swiperSlideOffset === void 0 && t2.updateSlidesOffset();
            var r2 = -e2;
            s2 && (r2 = e2), i2.removeClass(a2.slideVisibleClass), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
            for (var n2 = 0; n2 < i2.length; n2 += 1) {
              var l2 = i2[n2], o2 = (r2 + (a2.centeredSlides ? t2.minTranslate() : 0) - l2.swiperSlideOffset) / (l2.swiperSlideSize + a2.spaceBetween);
              if (a2.watchSlidesVisibility || a2.centeredSlides && a2.autoHeight) {
                var d2 = -(r2 - l2.swiperSlideOffset), p2 = d2 + t2.slidesSizesGrid[n2];
                (d2 >= 0 && d2 < t2.size - 1 || p2 > 1 && p2 <= t2.size || d2 <= 0 && p2 >= t2.size) && (t2.visibleSlides.push(l2), t2.visibleSlidesIndexes.push(n2), i2.eq(n2).addClass(a2.slideVisibleClass));
              }
              l2.progress = s2 ? -o2 : o2;
            }
            t2.visibleSlides = m(t2.visibleSlides);
          }
        }, updateProgress: function(e2) {
          var t2 = this;
          if (e2 === void 0) {
            var a2 = t2.rtlTranslate ? -1 : 1;
            e2 = t2 && t2.translate && t2.translate * a2 || 0;
          }
          var i2 = t2.params, s2 = t2.maxTranslate() - t2.minTranslate(), r2 = t2.progress, n2 = t2.isBeginning, l2 = t2.isEnd, o2 = n2, d2 = l2;
          s2 === 0 ? (r2 = 0, n2 = true, l2 = true) : (n2 = (r2 = (e2 - t2.minTranslate()) / s2) <= 0, l2 = r2 >= 1), M(t2, { progress: r2, isBeginning: n2, isEnd: l2 }), (i2.watchSlidesProgress || i2.watchSlidesVisibility || i2.centeredSlides && i2.autoHeight) && t2.updateSlidesProgress(e2), n2 && !o2 && t2.emit("reachBeginning toEdge"), l2 && !d2 && t2.emit("reachEnd toEdge"), (o2 && !n2 || d2 && !l2) && t2.emit("fromEdge"), t2.emit("progress", r2);
        }, updateSlidesClasses: function() {
          var e2, t2 = this, a2 = t2.slides, i2 = t2.params, s2 = t2.$wrapperEl, r2 = t2.activeIndex, n2 = t2.realIndex, l2 = t2.virtual && i2.virtual.enabled;
          a2.removeClass(i2.slideActiveClass + " " + i2.slideNextClass + " " + i2.slidePrevClass + " " + i2.slideDuplicateActiveClass + " " + i2.slideDuplicateNextClass + " " + i2.slideDuplicatePrevClass), (e2 = l2 ? t2.$wrapperEl.find("." + i2.slideClass + '[data-swiper-slide-index="' + r2 + '"]') : a2.eq(r2)).addClass(i2.slideActiveClass), i2.loop && (e2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + n2 + '"]').addClass(i2.slideDuplicateActiveClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + n2 + '"]').addClass(i2.slideDuplicateActiveClass));
          var o2 = e2.nextAll("." + i2.slideClass).eq(0).addClass(i2.slideNextClass);
          i2.loop && o2.length === 0 && (o2 = a2.eq(0)).addClass(i2.slideNextClass);
          var d2 = e2.prevAll("." + i2.slideClass).eq(0).addClass(i2.slidePrevClass);
          i2.loop && d2.length === 0 && (d2 = a2.eq(-1)).addClass(i2.slidePrevClass), i2.loop && (o2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + o2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicateNextClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + o2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicateNextClass), d2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + d2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicatePrevClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + d2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicatePrevClass)), t2.emitSlidesClasses();
        }, updateActiveIndex: function(e2) {
          var t2, a2 = this, i2 = a2.rtlTranslate ? a2.translate : -a2.translate, s2 = a2.slidesGrid, r2 = a2.snapGrid, n2 = a2.params, l2 = a2.activeIndex, o2 = a2.realIndex, d2 = a2.snapIndex, p2 = e2;
          if (p2 === void 0) {
            for (var u2 = 0; u2 < s2.length; u2 += 1)
              s2[u2 + 1] !== void 0 ? i2 >= s2[u2] && i2 < s2[u2 + 1] - (s2[u2 + 1] - s2[u2]) / 2 ? p2 = u2 : i2 >= s2[u2] && i2 < s2[u2 + 1] && (p2 = u2 + 1) : i2 >= s2[u2] && (p2 = u2);
            n2.normalizeSlideIndex && (p2 < 0 || p2 === void 0) && (p2 = 0);
          }
          if (r2.indexOf(i2) >= 0)
            t2 = r2.indexOf(i2);
          else {
            var c2 = Math.min(n2.slidesPerGroupSkip, p2);
            t2 = c2 + Math.floor((p2 - c2) / n2.slidesPerGroup);
          }
          if (t2 >= r2.length && (t2 = r2.length - 1), p2 !== l2) {
            var h2 = parseInt(a2.slides.eq(p2).attr("data-swiper-slide-index") || p2, 10);
            M(a2, { snapIndex: t2, realIndex: h2, previousIndex: l2, activeIndex: p2 }), a2.emit("activeIndexChange"), a2.emit("snapIndexChange"), o2 !== h2 && a2.emit("realIndexChange"), (a2.initialized || a2.params.runCallbacksOnInit) && a2.emit("slideChange");
          } else
            t2 !== d2 && (a2.snapIndex = t2, a2.emit("snapIndexChange"));
        }, updateClickedSlide: function(e2) {
          var t2, a2 = this, i2 = a2.params, s2 = m(e2.target).closest("." + i2.slideClass)[0], r2 = false;
          if (s2) {
            for (var n2 = 0; n2 < a2.slides.length; n2 += 1)
              if (a2.slides[n2] === s2) {
                r2 = true, t2 = n2;
                break;
              }
          }
          if (!s2 || !r2)
            return a2.clickedSlide = void 0, void (a2.clickedIndex = void 0);
          a2.clickedSlide = s2, a2.virtual && a2.params.virtual.enabled ? a2.clickedIndex = parseInt(m(s2).attr("data-swiper-slide-index"), 10) : a2.clickedIndex = t2, i2.slideToClickedSlide && a2.clickedIndex !== void 0 && a2.clickedIndex !== a2.activeIndex && a2.slideToClickedSlide();
        } }, translate: { getTranslate: function(e2) {
          e2 === void 0 && (e2 = this.isHorizontal() ? "x" : "y");
          var t2 = this, a2 = t2.params, i2 = t2.rtlTranslate, s2 = t2.translate, r2 = t2.$wrapperEl;
          if (a2.virtualTranslate)
            return i2 ? -s2 : s2;
          if (a2.cssMode)
            return s2;
          var n2 = T(r2[0], e2);
          return i2 && (n2 = -n2), n2 || 0;
        }, setTranslate: function(e2, t2) {
          var a2 = this, i2 = a2.rtlTranslate, s2 = a2.params, r2 = a2.$wrapperEl, n2 = a2.wrapperEl, l2 = a2.progress, o2 = 0, d2 = 0;
          a2.isHorizontal() ? o2 = i2 ? -e2 : e2 : d2 = e2, s2.roundLengths && (o2 = Math.floor(o2), d2 = Math.floor(d2)), s2.cssMode ? n2[a2.isHorizontal() ? "scrollLeft" : "scrollTop"] = a2.isHorizontal() ? -o2 : -d2 : s2.virtualTranslate || r2.transform("translate3d(" + o2 + "px, " + d2 + "px, 0px)"), a2.previousTranslate = a2.translate, a2.translate = a2.isHorizontal() ? o2 : d2;
          var p2 = a2.maxTranslate() - a2.minTranslate();
          (p2 === 0 ? 0 : (e2 - a2.minTranslate()) / p2) !== l2 && a2.updateProgress(e2), a2.emit("setTranslate", a2.translate, t2);
        }, minTranslate: function() {
          return -this.snapGrid[0];
        }, maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1];
        }, translateTo: function(e2, t2, a2, i2, s2) {
          e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = this.params.speed), a2 === void 0 && (a2 = true), i2 === void 0 && (i2 = true);
          var r2 = this, n2 = r2.params, l2 = r2.wrapperEl;
          if (r2.animating && n2.preventInteractionOnTransition)
            return false;
          var o2, d2 = r2.minTranslate(), p2 = r2.maxTranslate();
          if (o2 = i2 && e2 > d2 ? d2 : i2 && e2 < p2 ? p2 : e2, r2.updateProgress(o2), n2.cssMode) {
            var u2, c2 = r2.isHorizontal();
            if (t2 === 0)
              l2[c2 ? "scrollLeft" : "scrollTop"] = -o2;
            else if (l2.scrollTo)
              l2.scrollTo(((u2 = {})[c2 ? "left" : "top"] = -o2, u2.behavior = "smooth", u2));
            else
              l2[c2 ? "scrollLeft" : "scrollTop"] = -o2;
            return true;
          }
          return t2 === 0 ? (r2.setTransition(0), r2.setTranslate(o2), a2 && (r2.emit("beforeTransitionStart", t2, s2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(o2), a2 && (r2.emit("beforeTransitionStart", t2, s2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
            r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, a2 && r2.emit("transitionEnd"));
          }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd))), true;
        } }, transition: { setTransition: function(e2, t2) {
          var a2 = this;
          a2.params.cssMode || a2.$wrapperEl.transition(e2), a2.emit("setTransition", e2, t2);
        }, transitionStart: function(e2, t2) {
          e2 === void 0 && (e2 = true);
          var a2 = this, i2 = a2.activeIndex, s2 = a2.params, r2 = a2.previousIndex;
          if (!s2.cssMode) {
            s2.autoHeight && a2.updateAutoHeight();
            var n2 = t2;
            if (n2 || (n2 = i2 > r2 ? "next" : i2 < r2 ? "prev" : "reset"), a2.emit("transitionStart"), e2 && i2 !== r2) {
              if (n2 === "reset")
                return void a2.emit("slideResetTransitionStart");
              a2.emit("slideChangeTransitionStart"), n2 === "next" ? a2.emit("slideNextTransitionStart") : a2.emit("slidePrevTransitionStart");
            }
          }
        }, transitionEnd: function(e2, t2) {
          e2 === void 0 && (e2 = true);
          var a2 = this, i2 = a2.activeIndex, s2 = a2.previousIndex, r2 = a2.params;
          if (a2.animating = false, !r2.cssMode) {
            a2.setTransition(0);
            var n2 = t2;
            if (n2 || (n2 = i2 > s2 ? "next" : i2 < s2 ? "prev" : "reset"), a2.emit("transitionEnd"), e2 && i2 !== s2) {
              if (n2 === "reset")
                return void a2.emit("slideResetTransitionEnd");
              a2.emit("slideChangeTransitionEnd"), n2 === "next" ? a2.emit("slideNextTransitionEnd") : a2.emit("slidePrevTransitionEnd");
            }
          }
        } }, slide: { slideTo: function(e2, t2, a2, i2, s2) {
          if (e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = this.params.speed), a2 === void 0 && (a2 = true), typeof e2 != "number" && typeof e2 != "string")
            throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e2 + "] given.");
          if (typeof e2 == "string") {
            var r2 = parseInt(e2, 10);
            if (!isFinite(r2))
              throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e2 + "] given.");
            e2 = r2;
          }
          var n2 = this, l2 = e2;
          l2 < 0 && (l2 = 0);
          var o2 = n2.params, d2 = n2.snapGrid, p2 = n2.slidesGrid, u2 = n2.previousIndex, c2 = n2.activeIndex, h2 = n2.rtlTranslate, v2 = n2.wrapperEl, f2 = n2.enabled;
          if (n2.animating && o2.preventInteractionOnTransition || !f2 && !i2 && !s2)
            return false;
          var m2 = Math.min(n2.params.slidesPerGroupSkip, l2), g2 = m2 + Math.floor((l2 - m2) / n2.params.slidesPerGroup);
          g2 >= d2.length && (g2 = d2.length - 1), (c2 || o2.initialSlide || 0) === (u2 || 0) && a2 && n2.emit("beforeSlideChangeStart");
          var b2, w2 = -d2[g2];
          if (n2.updateProgress(w2), o2.normalizeSlideIndex)
            for (var y2 = 0; y2 < p2.length; y2 += 1) {
              var E2 = -Math.floor(100 * w2), x2 = Math.floor(100 * p2[y2]), T2 = Math.floor(100 * p2[y2 + 1]);
              p2[y2 + 1] !== void 0 ? E2 >= x2 && E2 < T2 - (T2 - x2) / 2 ? l2 = y2 : E2 >= x2 && E2 < T2 && (l2 = y2 + 1) : E2 >= x2 && (l2 = y2);
            }
          if (n2.initialized && l2 !== c2) {
            if (!n2.allowSlideNext && w2 < n2.translate && w2 < n2.minTranslate())
              return false;
            if (!n2.allowSlidePrev && w2 > n2.translate && w2 > n2.maxTranslate() && (c2 || 0) !== l2)
              return false;
          }
          if (b2 = l2 > c2 ? "next" : l2 < c2 ? "prev" : "reset", h2 && -w2 === n2.translate || !h2 && w2 === n2.translate)
            return n2.updateActiveIndex(l2), o2.autoHeight && n2.updateAutoHeight(), n2.updateSlidesClasses(), o2.effect !== "slide" && n2.setTranslate(w2), b2 !== "reset" && (n2.transitionStart(a2, b2), n2.transitionEnd(a2, b2)), false;
          if (o2.cssMode) {
            var C2, S2 = n2.isHorizontal(), M2 = -w2;
            if (h2 && (M2 = v2.scrollWidth - v2.offsetWidth - M2), t2 === 0)
              v2[S2 ? "scrollLeft" : "scrollTop"] = M2;
            else if (v2.scrollTo)
              v2.scrollTo(((C2 = {})[S2 ? "left" : "top"] = M2, C2.behavior = "smooth", C2));
            else
              v2[S2 ? "scrollLeft" : "scrollTop"] = M2;
            return true;
          }
          return t2 === 0 ? (n2.setTransition(0), n2.setTranslate(w2), n2.updateActiveIndex(l2), n2.updateSlidesClasses(), n2.emit("beforeTransitionStart", t2, i2), n2.transitionStart(a2, b2), n2.transitionEnd(a2, b2)) : (n2.setTransition(t2), n2.setTranslate(w2), n2.updateActiveIndex(l2), n2.updateSlidesClasses(), n2.emit("beforeTransitionStart", t2, i2), n2.transitionStart(a2, b2), n2.animating || (n2.animating = true, n2.onSlideToWrapperTransitionEnd || (n2.onSlideToWrapperTransitionEnd = function(e3) {
            n2 && !n2.destroyed && e3.target === this && (n2.$wrapperEl[0].removeEventListener("transitionend", n2.onSlideToWrapperTransitionEnd), n2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n2.onSlideToWrapperTransitionEnd), n2.onSlideToWrapperTransitionEnd = null, delete n2.onSlideToWrapperTransitionEnd, n2.transitionEnd(a2, b2));
          }), n2.$wrapperEl[0].addEventListener("transitionend", n2.onSlideToWrapperTransitionEnd), n2.$wrapperEl[0].addEventListener("webkitTransitionEnd", n2.onSlideToWrapperTransitionEnd))), true;
        }, slideToLoop: function(e2, t2, a2, i2) {
          e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = this.params.speed), a2 === void 0 && (a2 = true);
          var s2 = this, r2 = e2;
          return s2.params.loop && (r2 += s2.loopedSlides), s2.slideTo(r2, t2, a2, i2);
        }, slideNext: function(e2, t2, a2) {
          e2 === void 0 && (e2 = this.params.speed), t2 === void 0 && (t2 = true);
          var i2 = this, s2 = i2.params, r2 = i2.animating;
          if (!i2.enabled)
            return i2;
          var n2 = i2.activeIndex < s2.slidesPerGroupSkip ? 1 : s2.slidesPerGroup;
          if (s2.loop) {
            if (r2 && s2.loopPreventsSlide)
              return false;
            i2.loopFix(), i2._clientLeft = i2.$wrapperEl[0].clientLeft;
          }
          return i2.slideTo(i2.activeIndex + n2, e2, t2, a2);
        }, slidePrev: function(e2, t2, a2) {
          e2 === void 0 && (e2 = this.params.speed), t2 === void 0 && (t2 = true);
          var i2 = this, s2 = i2.params, r2 = i2.animating, n2 = i2.snapGrid, l2 = i2.slidesGrid, o2 = i2.rtlTranslate;
          if (!i2.enabled)
            return i2;
          if (s2.loop) {
            if (r2 && s2.loopPreventsSlide)
              return false;
            i2.loopFix(), i2._clientLeft = i2.$wrapperEl[0].clientLeft;
          }
          function d2(e3) {
            return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
          }
          var p2, u2 = d2(o2 ? i2.translate : -i2.translate), c2 = n2.map(function(e3) {
            return d2(e3);
          }), h2 = n2[c2.indexOf(u2) - 1];
          return h2 === void 0 && s2.cssMode && n2.forEach(function(e3) {
            !h2 && u2 >= e3 && (h2 = e3);
          }), h2 !== void 0 && (p2 = l2.indexOf(h2)) < 0 && (p2 = i2.activeIndex - 1), i2.slideTo(p2, e2, t2, a2);
        }, slideReset: function(e2, t2, a2) {
          return e2 === void 0 && (e2 = this.params.speed), t2 === void 0 && (t2 = true), this.slideTo(this.activeIndex, e2, t2, a2);
        }, slideToClosest: function(e2, t2, a2, i2) {
          e2 === void 0 && (e2 = this.params.speed), t2 === void 0 && (t2 = true), i2 === void 0 && (i2 = 0.5);
          var s2 = this, r2 = s2.activeIndex, n2 = Math.min(s2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / s2.params.slidesPerGroup), o2 = s2.rtlTranslate ? s2.translate : -s2.translate;
          if (o2 >= s2.snapGrid[l2]) {
            var d2 = s2.snapGrid[l2];
            o2 - d2 > (s2.snapGrid[l2 + 1] - d2) * i2 && (r2 += s2.params.slidesPerGroup);
          } else {
            var p2 = s2.snapGrid[l2 - 1];
            o2 - p2 <= (s2.snapGrid[l2] - p2) * i2 && (r2 -= s2.params.slidesPerGroup);
          }
          return r2 = Math.max(r2, 0), r2 = Math.min(r2, s2.slidesGrid.length - 1), s2.slideTo(r2, e2, t2, a2);
        }, slideToClickedSlide: function() {
          var e2, t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = a2.slidesPerView === "auto" ? t2.slidesPerViewDynamic() : a2.slidesPerView, r2 = t2.clickedIndex;
          if (a2.loop) {
            if (t2.animating)
              return;
            e2 = parseInt(m(t2.clickedSlide).attr("data-swiper-slide-index"), 10), a2.centeredSlides ? r2 < t2.loopedSlides - s2 / 2 || r2 > t2.slides.length - t2.loopedSlides + s2 / 2 ? (t2.loopFix(), r2 = i2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a2.slideDuplicateClass + ")").eq(0).index(), E(function() {
              t2.slideTo(r2);
            })) : t2.slideTo(r2) : r2 > t2.slides.length - s2 ? (t2.loopFix(), r2 = i2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a2.slideDuplicateClass + ")").eq(0).index(), E(function() {
              t2.slideTo(r2);
            })) : t2.slideTo(r2);
          } else
            t2.slideTo(r2);
        } }, loop: { loopCreate: function() {
          var e2 = this, t2 = r(), a2 = e2.params, i2 = e2.$wrapperEl;
          i2.children("." + a2.slideClass + "." + a2.slideDuplicateClass).remove();
          var s2 = i2.children("." + a2.slideClass);
          if (a2.loopFillGroupWithBlank) {
            var n2 = a2.slidesPerGroup - s2.length % a2.slidesPerGroup;
            if (n2 !== a2.slidesPerGroup) {
              for (var l2 = 0; l2 < n2; l2 += 1) {
                var o2 = m(t2.createElement("div")).addClass(a2.slideClass + " " + a2.slideBlankClass);
                i2.append(o2);
              }
              s2 = i2.children("." + a2.slideClass);
            }
          }
          a2.slidesPerView !== "auto" || a2.loopedSlides || (a2.loopedSlides = s2.length), e2.loopedSlides = Math.ceil(parseFloat(a2.loopedSlides || a2.slidesPerView, 10)), e2.loopedSlides += a2.loopAdditionalSlides, e2.loopedSlides > s2.length && (e2.loopedSlides = s2.length);
          var d2 = [], p2 = [];
          s2.each(function(t3, a3) {
            var i3 = m(t3);
            a3 < e2.loopedSlides && p2.push(t3), a3 < s2.length && a3 >= s2.length - e2.loopedSlides && d2.push(t3), i3.attr("data-swiper-slide-index", a3);
          });
          for (var u2 = 0; u2 < p2.length; u2 += 1)
            i2.append(m(p2[u2].cloneNode(true)).addClass(a2.slideDuplicateClass));
          for (var c2 = d2.length - 1; c2 >= 0; c2 -= 1)
            i2.prepend(m(d2[c2].cloneNode(true)).addClass(a2.slideDuplicateClass));
        }, loopFix: function() {
          var e2 = this;
          e2.emit("beforeLoopFix");
          var t2, a2 = e2.activeIndex, i2 = e2.slides, s2 = e2.loopedSlides, r2 = e2.allowSlidePrev, n2 = e2.allowSlideNext, l2 = e2.snapGrid, o2 = e2.rtlTranslate;
          e2.allowSlidePrev = true, e2.allowSlideNext = true;
          var d2 = -l2[a2] - e2.getTranslate();
          if (a2 < s2)
            t2 = i2.length - 3 * s2 + a2, t2 += s2, e2.slideTo(t2, 0, false, true) && d2 !== 0 && e2.setTranslate((o2 ? -e2.translate : e2.translate) - d2);
          else if (a2 >= i2.length - s2) {
            t2 = -i2.length + a2 + s2, t2 += s2, e2.slideTo(t2, 0, false, true) && d2 !== 0 && e2.setTranslate((o2 ? -e2.translate : e2.translate) - d2);
          }
          e2.allowSlidePrev = r2, e2.allowSlideNext = n2, e2.emit("loopFix");
        }, loopDestroy: function() {
          var e2 = this, t2 = e2.$wrapperEl, a2 = e2.params, i2 = e2.slides;
          t2.children("." + a2.slideClass + "." + a2.slideDuplicateClass + ",." + a2.slideClass + "." + a2.slideBlankClass).remove(), i2.removeAttr("data-swiper-slide-index");
        } }, grabCursor: { setGrabCursor: function(e2) {
          var t2 = this;
          if (!(t2.support.touch || !t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode)) {
            var a2 = t2.el;
            a2.style.cursor = "move", a2.style.cursor = e2 ? "-webkit-grabbing" : "-webkit-grab", a2.style.cursor = e2 ? "-moz-grabbin" : "-moz-grab", a2.style.cursor = e2 ? "grabbing" : "grab";
          }
        }, unsetGrabCursor: function() {
          var e2 = this;
          e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2.el.style.cursor = "");
        } }, manipulation: { appendSlide: function(e2) {
          var t2 = this, a2 = t2.$wrapperEl, i2 = t2.params;
          if (i2.loop && t2.loopDestroy(), typeof e2 == "object" && "length" in e2)
            for (var s2 = 0; s2 < e2.length; s2 += 1)
              e2[s2] && a2.append(e2[s2]);
          else
            a2.append(e2);
          i2.loop && t2.loopCreate(), i2.observer && t2.support.observer || t2.update();
        }, prependSlide: function(e2) {
          var t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = t2.activeIndex;
          a2.loop && t2.loopDestroy();
          var r2 = s2 + 1;
          if (typeof e2 == "object" && "length" in e2) {
            for (var n2 = 0; n2 < e2.length; n2 += 1)
              e2[n2] && i2.prepend(e2[n2]);
            r2 = s2 + e2.length;
          } else
            i2.prepend(e2);
          a2.loop && t2.loopCreate(), a2.observer && t2.support.observer || t2.update(), t2.slideTo(r2, 0, false);
        }, addSlide: function(e2, t2) {
          var a2 = this, i2 = a2.$wrapperEl, s2 = a2.params, r2 = a2.activeIndex;
          s2.loop && (r2 -= a2.loopedSlides, a2.loopDestroy(), a2.slides = i2.children("." + s2.slideClass));
          var n2 = a2.slides.length;
          if (e2 <= 0)
            a2.prependSlide(t2);
          else if (e2 >= n2)
            a2.appendSlide(t2);
          else {
            for (var l2 = r2 > e2 ? r2 + 1 : r2, o2 = [], d2 = n2 - 1; d2 >= e2; d2 -= 1) {
              var p2 = a2.slides.eq(d2);
              p2.remove(), o2.unshift(p2);
            }
            if (typeof t2 == "object" && "length" in t2) {
              for (var u2 = 0; u2 < t2.length; u2 += 1)
                t2[u2] && i2.append(t2[u2]);
              l2 = r2 > e2 ? r2 + t2.length : r2;
            } else
              i2.append(t2);
            for (var c2 = 0; c2 < o2.length; c2 += 1)
              i2.append(o2[c2]);
            s2.loop && a2.loopCreate(), s2.observer && a2.support.observer || a2.update(), s2.loop ? a2.slideTo(l2 + a2.loopedSlides, 0, false) : a2.slideTo(l2, 0, false);
          }
        }, removeSlide: function(e2) {
          var t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = t2.activeIndex;
          a2.loop && (s2 -= t2.loopedSlides, t2.loopDestroy(), t2.slides = i2.children("." + a2.slideClass));
          var r2, n2 = s2;
          if (typeof e2 == "object" && "length" in e2) {
            for (var l2 = 0; l2 < e2.length; l2 += 1)
              r2 = e2[l2], t2.slides[r2] && t2.slides.eq(r2).remove(), r2 < n2 && (n2 -= 1);
            n2 = Math.max(n2, 0);
          } else
            r2 = e2, t2.slides[r2] && t2.slides.eq(r2).remove(), r2 < n2 && (n2 -= 1), n2 = Math.max(n2, 0);
          a2.loop && t2.loopCreate(), a2.observer && t2.support.observer || t2.update(), a2.loop ? t2.slideTo(n2 + t2.loopedSlides, 0, false) : t2.slideTo(n2, 0, false);
        }, removeAllSlides: function() {
          for (var e2 = [], t2 = 0; t2 < this.slides.length; t2 += 1)
            e2.push(t2);
          this.removeSlide(e2);
        } }, events: { attachEvents: function() {
          var e2 = this, t2 = r(), a2 = e2.params, i2 = e2.touchEvents, s2 = e2.el, n2 = e2.wrapperEl, l2 = e2.device, o2 = e2.support;
          e2.onTouchStart = N.bind(e2), e2.onTouchMove = G.bind(e2), e2.onTouchEnd = B.bind(e2), a2.cssMode && (e2.onScroll = X.bind(e2)), e2.onClick = R.bind(e2);
          var d2 = !!a2.nested;
          if (!o2.touch && o2.pointerEvents)
            s2.addEventListener(i2.start, e2.onTouchStart, false), t2.addEventListener(i2.move, e2.onTouchMove, d2), t2.addEventListener(i2.end, e2.onTouchEnd, false);
          else {
            if (o2.touch) {
              var p2 = !(i2.start !== "touchstart" || !o2.passiveListener || !a2.passiveListeners) && { passive: true, capture: false };
              s2.addEventListener(i2.start, e2.onTouchStart, p2), s2.addEventListener(i2.move, e2.onTouchMove, o2.passiveListener ? { passive: false, capture: d2 } : d2), s2.addEventListener(i2.end, e2.onTouchEnd, p2), i2.cancel && s2.addEventListener(i2.cancel, e2.onTouchEnd, p2), Y || (t2.addEventListener("touchstart", V), Y = true);
            }
            (a2.simulateTouch && !l2.ios && !l2.android || a2.simulateTouch && !o2.touch && l2.ios) && (s2.addEventListener("mousedown", e2.onTouchStart, false), t2.addEventListener("mousemove", e2.onTouchMove, d2), t2.addEventListener("mouseup", e2.onTouchEnd, false));
          }
          (a2.preventClicks || a2.preventClicksPropagation) && s2.addEventListener("click", e2.onClick, true), a2.cssMode && n2.addEventListener("scroll", e2.onScroll), a2.updateOnWindowResize ? e2.on(l2.ios || l2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, true) : e2.on("observerUpdate", H, true);
        }, detachEvents: function() {
          var e2 = this, t2 = r(), a2 = e2.params, i2 = e2.touchEvents, s2 = e2.el, n2 = e2.wrapperEl, l2 = e2.device, o2 = e2.support, d2 = !!a2.nested;
          if (!o2.touch && o2.pointerEvents)
            s2.removeEventListener(i2.start, e2.onTouchStart, false), t2.removeEventListener(i2.move, e2.onTouchMove, d2), t2.removeEventListener(i2.end, e2.onTouchEnd, false);
          else {
            if (o2.touch) {
              var p2 = !(i2.start !== "onTouchStart" || !o2.passiveListener || !a2.passiveListeners) && { passive: true, capture: false };
              s2.removeEventListener(i2.start, e2.onTouchStart, p2), s2.removeEventListener(i2.move, e2.onTouchMove, d2), s2.removeEventListener(i2.end, e2.onTouchEnd, p2), i2.cancel && s2.removeEventListener(i2.cancel, e2.onTouchEnd, p2);
            }
            (a2.simulateTouch && !l2.ios && !l2.android || a2.simulateTouch && !o2.touch && l2.ios) && (s2.removeEventListener("mousedown", e2.onTouchStart, false), t2.removeEventListener("mousemove", e2.onTouchMove, d2), t2.removeEventListener("mouseup", e2.onTouchEnd, false));
          }
          (a2.preventClicks || a2.preventClicksPropagation) && s2.removeEventListener("click", e2.onClick, true), a2.cssMode && n2.removeEventListener("scroll", e2.onScroll), e2.off(l2.ios || l2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H);
        } }, breakpoints: { setBreakpoint: function() {
          var e2 = this, t2 = e2.activeIndex, a2 = e2.initialized, i2 = e2.loopedSlides, s2 = i2 === void 0 ? 0 : i2, r2 = e2.params, n2 = e2.$el, l2 = r2.breakpoints;
          if (l2 && (!l2 || Object.keys(l2).length !== 0)) {
            var o2 = e2.getBreakpoint(l2, e2.params.breakpointsBase, e2.el);
            if (o2 && e2.currentBreakpoint !== o2) {
              var d2 = o2 in l2 ? l2[o2] : void 0;
              d2 && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e3) {
                var t3 = d2[e3];
                t3 !== void 0 && (d2[e3] = e3 !== "slidesPerView" || t3 !== "AUTO" && t3 !== "auto" ? e3 === "slidesPerView" ? parseFloat(t3) : parseInt(t3, 10) : "auto");
              });
              var p2 = d2 || e2.originalParams, u2 = r2.slidesPerColumn > 1, c2 = p2.slidesPerColumn > 1, h2 = r2.enabled;
              u2 && !c2 ? (n2.removeClass(r2.containerModifierClass + "multirow " + r2.containerModifierClass + "multirow-column"), e2.emitContainerClasses()) : !u2 && c2 && (n2.addClass(r2.containerModifierClass + "multirow"), (p2.slidesPerColumnFill && p2.slidesPerColumnFill === "column" || !p2.slidesPerColumnFill && r2.slidesPerColumnFill === "column") && n2.addClass(r2.containerModifierClass + "multirow-column"), e2.emitContainerClasses());
              var v2 = p2.direction && p2.direction !== r2.direction, f2 = r2.loop && (p2.slidesPerView !== r2.slidesPerView || v2);
              v2 && a2 && e2.changeDirection(), M(e2.params, p2);
              var m2 = e2.params.enabled;
              M(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), h2 && !m2 ? e2.disable() : !h2 && m2 && e2.enable(), e2.currentBreakpoint = o2, e2.emit("_beforeBreakpoint", p2), f2 && a2 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t2 - s2 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", p2);
            }
          }
        }, getBreakpoint: function(e2, t2, a2) {
          if (t2 === void 0 && (t2 = "window"), e2 && (t2 !== "container" || a2)) {
            var i2 = false, s2 = l(), r2 = t2 === "window" ? s2.innerHeight : a2.clientHeight, n2 = Object.keys(e2).map(function(e3) {
              if (typeof e3 == "string" && e3.indexOf("@") === 0) {
                var t3 = parseFloat(e3.substr(1));
                return { value: r2 * t3, point: e3 };
              }
              return { value: e3, point: e3 };
            });
            n2.sort(function(e3, t3) {
              return parseInt(e3.value, 10) - parseInt(t3.value, 10);
            });
            for (var o2 = 0; o2 < n2.length; o2 += 1) {
              var d2 = n2[o2], p2 = d2.point, u2 = d2.value;
              t2 === "window" ? s2.matchMedia("(min-width: " + u2 + "px)").matches && (i2 = p2) : u2 <= a2.clientWidth && (i2 = p2);
            }
            return i2 || "max";
          }
        } }, checkOverflow: { checkOverflow: function() {
          var e2 = this, t2 = e2.params, a2 = e2.isLocked, i2 = e2.slides.length > 0 && t2.slidesOffsetBefore + t2.spaceBetween * (e2.slides.length - 1) + e2.slides[0].offsetWidth * e2.slides.length;
          t2.slidesOffsetBefore && t2.slidesOffsetAfter && i2 ? e2.isLocked = i2 <= e2.size : e2.isLocked = e2.snapGrid.length === 1, e2.allowSlideNext = !e2.isLocked, e2.allowSlidePrev = !e2.isLocked, a2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock"), a2 && a2 !== e2.isLocked && (e2.isEnd = false, e2.navigation && e2.navigation.update());
        } }, classes: { addClasses: function() {
          var e2, t2, a2, i2 = this, s2 = i2.classNames, r2 = i2.params, n2 = i2.rtl, l2 = i2.$el, o2 = i2.device, d2 = i2.support, p2 = (e2 = ["initialized", r2.direction, { "pointer-events": d2.pointerEvents && !d2.touch }, { "free-mode": r2.freeMode }, { autoheight: r2.autoHeight }, { rtl: n2 }, { multirow: r2.slidesPerColumn > 1 }, { "multirow-column": r2.slidesPerColumn > 1 && r2.slidesPerColumnFill === "column" }, { android: o2.android }, { ios: o2.ios }, { "css-mode": r2.cssMode }], t2 = r2.containerModifierClass, a2 = [], e2.forEach(function(e3) {
            typeof e3 == "object" ? Object.keys(e3).forEach(function(i3) {
              e3[i3] && a2.push(t2 + i3);
            }) : typeof e3 == "string" && a2.push(t2 + e3);
          }), a2);
          s2.push.apply(s2, p2), l2.addClass([].concat(s2).join(" ")), i2.emitContainerClasses();
        }, removeClasses: function() {
          var e2 = this, t2 = e2.$el, a2 = e2.classNames;
          t2.removeClass(a2.join(" ")), e2.emitContainerClasses();
        } }, images: { loadImage: function(e2, t2, a2, i2, s2, r2) {
          var n2, o2 = l();
          function d2() {
            r2 && r2();
          }
          m(e2).parent("picture")[0] || e2.complete && s2 ? d2() : t2 ? ((n2 = new o2.Image()).onload = d2, n2.onerror = d2, i2 && (n2.sizes = i2), a2 && (n2.srcset = a2), t2 && (n2.src = t2)) : d2();
        }, preloadImages: function() {
          var e2 = this;
          function t2() {
            e2 != null && e2 && !e2.destroyed && (e2.imagesLoaded !== void 0 && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
          }
          e2.imagesToLoad = e2.$el.find("img");
          for (var a2 = 0; a2 < e2.imagesToLoad.length; a2 += 1) {
            var i2 = e2.imagesToLoad[a2];
            e2.loadImage(i2, i2.currentSrc || i2.getAttribute("src"), i2.srcset || i2.getAttribute("srcset"), i2.sizes || i2.getAttribute("sizes"), true, t2);
          }
        } } }, _ = {}, q = function() {
          function t2() {
            for (var e2, a3, i3 = arguments.length, s3 = new Array(i3), r2 = 0; r2 < i3; r2++)
              s3[r2] = arguments[r2];
            if (s3.length === 1 && s3[0].constructor && Object.prototype.toString.call(s3[0]).slice(8, -1) === "Object" ? a3 = s3[0] : (e2 = s3[0], a3 = s3[1]), a3 || (a3 = {}), a3 = M({}, a3), e2 && !a3.el && (a3.el = e2), a3.el && m(a3.el).length > 1) {
              var n3 = [];
              return m(a3.el).each(function(e3) {
                var i4 = M({}, a3, { el: e3 });
                n3.push(new t2(i4));
              }), n3;
            }
            var l2 = this;
            l2.__swiper__ = true, l2.support = $(), l2.device = L({ userAgent: a3.userAgent }), l2.browser = I(), l2.eventsListeners = {}, l2.eventsAnyListeners = [], l2.modules === void 0 && (l2.modules = {}), Object.keys(l2.modules).forEach(function(e3) {
              var t3 = l2.modules[e3];
              if (t3.params) {
                var i4 = Object.keys(t3.params)[0], s4 = t3.params[i4];
                if (typeof s4 != "object" || s4 === null)
                  return;
                if (["navigation", "pagination", "scrollbar"].indexOf(i4) >= 0 && a3[i4] === true && (a3[i4] = { auto: true }), !(i4 in a3) || !("enabled" in s4))
                  return;
                a3[i4] === true && (a3[i4] = { enabled: true }), typeof a3[i4] != "object" || "enabled" in a3[i4] || (a3[i4].enabled = true), a3[i4] || (a3[i4] = { enabled: false });
              }
            });
            var o2, d2, p2 = M({}, W);
            return l2.useParams(p2), l2.params = M({}, p2, _, a3), l2.originalParams = M({}, l2.params), l2.passedParams = M({}, a3), l2.params && l2.params.on && Object.keys(l2.params.on).forEach(function(e3) {
              l2.on(e3, l2.params.on[e3]);
            }), l2.params && l2.params.onAny && l2.onAny(l2.params.onAny), l2.$ = m, M(l2, { enabled: l2.params.enabled, el: e2, classNames: [], slides: m(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() {
              return l2.params.direction === "horizontal";
            }, isVertical: function() {
              return l2.params.direction === "vertical";
            }, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: l2.params.allowSlideNext, allowSlidePrev: l2.params.allowSlidePrev, touchEvents: (o2 = ["touchstart", "touchmove", "touchend", "touchcancel"], d2 = ["mousedown", "mousemove", "mouseup"], l2.support.pointerEvents && (d2 = ["pointerdown", "pointermove", "pointerup"]), l2.touchEventsTouch = { start: o2[0], move: o2[1], end: o2[2], cancel: o2[3] }, l2.touchEventsDesktop = { start: d2[0], move: d2[1], end: d2[2] }, l2.support.touch || !l2.params.simulateTouch ? l2.touchEventsTouch : l2.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: l2.params.focusableElements, lastClickTime: x(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: true, allowTouchMove: l2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l2.useModules(), l2.emit("_swiper"), l2.params.init && l2.init(), l2;
          }
          var a2, i2, s2, n2 = t2.prototype;
          return n2.enable = function() {
            var e2 = this;
            e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
          }, n2.disable = function() {
            var e2 = this;
            e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
          }, n2.setProgress = function(e2, t3) {
            var a3 = this;
            e2 = Math.min(Math.max(e2, 0), 1);
            var i3 = a3.minTranslate(), s3 = (a3.maxTranslate() - i3) * e2 + i3;
            a3.translateTo(s3, t3 === void 0 ? 0 : t3), a3.updateActiveIndex(), a3.updateSlidesClasses();
          }, n2.emitContainerClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
              var t3 = e2.el.className.split(" ").filter(function(t4) {
                return t4.indexOf("swiper-container") === 0 || t4.indexOf(e2.params.containerModifierClass) === 0;
              });
              e2.emit("_containerClasses", t3.join(" "));
            }
          }, n2.getSlideClasses = function(e2) {
            var t3 = this;
            return e2.className.split(" ").filter(function(e3) {
              return e3.indexOf("swiper-slide") === 0 || e3.indexOf(t3.params.slideClass) === 0;
            }).join(" ");
          }, n2.emitSlidesClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
              var t3 = [];
              e2.slides.each(function(a3) {
                var i3 = e2.getSlideClasses(a3);
                t3.push({ slideEl: a3, classNames: i3 }), e2.emit("_slideClass", a3, i3);
              }), e2.emit("_slideClasses", t3);
            }
          }, n2.slidesPerViewDynamic = function() {
            var e2 = this, t3 = e2.params, a3 = e2.slides, i3 = e2.slidesGrid, s3 = e2.size, r2 = e2.activeIndex, n3 = 1;
            if (t3.centeredSlides) {
              for (var l2, o2 = a3[r2].swiperSlideSize, d2 = r2 + 1; d2 < a3.length; d2 += 1)
                a3[d2] && !l2 && (n3 += 1, (o2 += a3[d2].swiperSlideSize) > s3 && (l2 = true));
              for (var p2 = r2 - 1; p2 >= 0; p2 -= 1)
                a3[p2] && !l2 && (n3 += 1, (o2 += a3[p2].swiperSlideSize) > s3 && (l2 = true));
            } else
              for (var u2 = r2 + 1; u2 < a3.length; u2 += 1)
                i3[u2] - i3[r2] < s3 && (n3 += 1);
            return n3;
          }, n2.update = function() {
            var e2 = this;
            if (e2 && !e2.destroyed) {
              var t3 = e2.snapGrid, a3 = e2.params;
              a3.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode ? (i3(), e2.params.autoHeight && e2.updateAutoHeight()) : ((e2.params.slidesPerView === "auto" || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true)) || i3(), a3.watchOverflow && t3 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
            }
            function i3() {
              var t4 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, a4 = Math.min(Math.max(t4, e2.maxTranslate()), e2.minTranslate());
              e2.setTranslate(a4), e2.updateActiveIndex(), e2.updateSlidesClasses();
            }
          }, n2.changeDirection = function(e2, t3) {
            t3 === void 0 && (t3 = true);
            var a3 = this, i3 = a3.params.direction;
            return e2 || (e2 = i3 === "horizontal" ? "vertical" : "horizontal"), e2 === i3 || e2 !== "horizontal" && e2 !== "vertical" || (a3.$el.removeClass("" + a3.params.containerModifierClass + i3).addClass("" + a3.params.containerModifierClass + e2), a3.emitContainerClasses(), a3.params.direction = e2, a3.slides.each(function(t4) {
              e2 === "vertical" ? t4.style.width = "" : t4.style.height = "";
            }), a3.emit("changeDirection"), t3 && a3.update()), a3;
          }, n2.mount = function(e2) {
            var t3 = this;
            if (t3.mounted)
              return true;
            var a3 = m(e2 || t3.params.el);
            if (!(e2 = a3[0]))
              return false;
            e2.swiper = t3;
            var i3 = function() {
              return "." + (t3.params.wrapperClass || "").trim().split(" ").join(".");
            }, s3 = function() {
              if (e2 && e2.shadowRoot && e2.shadowRoot.querySelector) {
                var t4 = m(e2.shadowRoot.querySelector(i3()));
                return t4.children = function(e3) {
                  return a3.children(e3);
                }, t4;
              }
              return a3.children(i3());
            }();
            if (s3.length === 0 && t3.params.createElements) {
              var n3 = r().createElement("div");
              s3 = m(n3), n3.className = t3.params.wrapperClass, a3.append(n3), a3.children("." + t3.params.slideClass).each(function(e3) {
                s3.append(e3);
              });
            }
            return M(t3, { $el: a3, el: e2, $wrapperEl: s3, wrapperEl: s3[0], mounted: true, rtl: e2.dir.toLowerCase() === "rtl" || a3.css("direction") === "rtl", rtlTranslate: t3.params.direction === "horizontal" && (e2.dir.toLowerCase() === "rtl" || a3.css("direction") === "rtl"), wrongRTL: s3.css("display") === "-webkit-box" }), true;
          }, n2.init = function(e2) {
            var t3 = this;
            return t3.initialized || t3.mount(e2) === false || (t3.emit("beforeInit"), t3.params.breakpoints && t3.setBreakpoint(), t3.addClasses(), t3.params.loop && t3.loopCreate(), t3.updateSize(), t3.updateSlides(), t3.params.watchOverflow && t3.checkOverflow(), t3.params.grabCursor && t3.enabled && t3.setGrabCursor(), t3.params.preloadImages && t3.preloadImages(), t3.params.loop ? t3.slideTo(t3.params.initialSlide + t3.loopedSlides, 0, t3.params.runCallbacksOnInit, false, true) : t3.slideTo(t3.params.initialSlide, 0, t3.params.runCallbacksOnInit, false, true), t3.attachEvents(), t3.initialized = true, t3.emit("init"), t3.emit("afterInit")), t3;
          }, n2.destroy = function(e2, t3) {
            e2 === void 0 && (e2 = true), t3 === void 0 && (t3 = true);
            var a3, i3 = this, s3 = i3.params, r2 = i3.$el, n3 = i3.$wrapperEl, l2 = i3.slides;
            return i3.params === void 0 || i3.destroyed || (i3.emit("beforeDestroy"), i3.initialized = false, i3.detachEvents(), s3.loop && i3.loopDestroy(), t3 && (i3.removeClasses(), r2.removeAttr("style"), n3.removeAttr("style"), l2 && l2.length && l2.removeClass([s3.slideVisibleClass, s3.slideActiveClass, s3.slideNextClass, s3.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i3.emit("destroy"), Object.keys(i3.eventsListeners).forEach(function(e3) {
              i3.off(e3);
            }), e2 !== false && (i3.$el[0].swiper = null, a3 = i3, Object.keys(a3).forEach(function(e3) {
              try {
                a3[e3] = null;
              } catch (e4) {
              }
              try {
                delete a3[e3];
              } catch (e4) {
              }
            })), i3.destroyed = true), null;
          }, t2.extendDefaults = function(e2) {
            M(_, e2);
          }, t2.installModule = function(e2) {
            t2.prototype.modules || (t2.prototype.modules = {});
            var a3 = e2.name || Object.keys(t2.prototype.modules).length + "_" + x();
            t2.prototype.modules[a3] = e2;
          }, t2.use = function(e2) {
            return Array.isArray(e2) ? (e2.forEach(function(e3) {
              return t2.installModule(e3);
            }), t2) : (t2.installModule(e2), t2);
          }, a2 = t2, s2 = [{ key: "extendedDefaults", get: function() {
            return _;
          } }, { key: "defaults", get: function() {
            return W;
          } }], (i2 = null) && e(a2.prototype, i2), s2 && e(a2, s2), t2;
        }();
        Object.keys(F).forEach(function(e2) {
          Object.keys(F[e2]).forEach(function(t2) {
            q.prototype[t2] = F[e2][t2];
          });
        }), q.use([O, D]);
        var j = { update: function(e2) {
          var t2 = this, a2 = t2.params, i2 = a2.slidesPerView, s2 = a2.slidesPerGroup, r2 = a2.centeredSlides, n2 = t2.params.virtual, l2 = n2.addSlidesBefore, o2 = n2.addSlidesAfter, d2 = t2.virtual, p2 = d2.from, u2 = d2.to, c2 = d2.slides, h2 = d2.slidesGrid, v2 = d2.renderSlide, f2 = d2.offset;
          t2.updateActiveIndex();
          var m2, g2, b2, w2 = t2.activeIndex || 0;
          m2 = t2.rtlTranslate ? "right" : t2.isHorizontal() ? "left" : "top", r2 ? (g2 = Math.floor(i2 / 2) + s2 + o2, b2 = Math.floor(i2 / 2) + s2 + l2) : (g2 = i2 + (s2 - 1) + o2, b2 = s2 + l2);
          var y2 = Math.max((w2 || 0) - b2, 0), E2 = Math.min((w2 || 0) + g2, c2.length - 1), x2 = (t2.slidesGrid[y2] || 0) - (t2.slidesGrid[0] || 0);
          function T2() {
            t2.updateSlides(), t2.updateProgress(), t2.updateSlidesClasses(), t2.lazy && t2.params.lazy.enabled && t2.lazy.load();
          }
          if (M(t2.virtual, { from: y2, to: E2, offset: x2, slidesGrid: t2.slidesGrid }), p2 === y2 && u2 === E2 && !e2)
            return t2.slidesGrid !== h2 && x2 !== f2 && t2.slides.css(m2, x2 + "px"), void t2.updateProgress();
          if (t2.params.virtual.renderExternal)
            return t2.params.virtual.renderExternal.call(t2, { offset: x2, from: y2, to: E2, slides: function() {
              for (var e3 = [], t3 = y2; t3 <= E2; t3 += 1)
                e3.push(c2[t3]);
              return e3;
            }() }), void (t2.params.virtual.renderExternalUpdate && T2());
          var C2 = [], S2 = [];
          if (e2)
            t2.$wrapperEl.find("." + t2.params.slideClass).remove();
          else
            for (var z2 = p2; z2 <= u2; z2 += 1)
              (z2 < y2 || z2 > E2) && t2.$wrapperEl.find("." + t2.params.slideClass + '[data-swiper-slide-index="' + z2 + '"]').remove();
          for (var P2 = 0; P2 < c2.length; P2 += 1)
            P2 >= y2 && P2 <= E2 && (u2 === void 0 || e2 ? S2.push(P2) : (P2 > u2 && S2.push(P2), P2 < p2 && C2.push(P2)));
          S2.forEach(function(e3) {
            t2.$wrapperEl.append(v2(c2[e3], e3));
          }), C2.sort(function(e3, t3) {
            return t3 - e3;
          }).forEach(function(e3) {
            t2.$wrapperEl.prepend(v2(c2[e3], e3));
          }), t2.$wrapperEl.children(".swiper-slide").css(m2, x2 + "px"), T2();
        }, renderSlide: function(e2, t2) {
          var a2 = this, i2 = a2.params.virtual;
          if (i2.cache && a2.virtual.cache[t2])
            return a2.virtual.cache[t2];
          var s2 = i2.renderSlide ? m(i2.renderSlide.call(a2, e2, t2)) : m('<div class="' + a2.params.slideClass + '" data-swiper-slide-index="' + t2 + '">' + e2 + "</div>");
          return s2.attr("data-swiper-slide-index") || s2.attr("data-swiper-slide-index", t2), i2.cache && (a2.virtual.cache[t2] = s2), s2;
        }, appendSlide: function(e2) {
          var t2 = this;
          if (typeof e2 == "object" && "length" in e2)
            for (var a2 = 0; a2 < e2.length; a2 += 1)
              e2[a2] && t2.virtual.slides.push(e2[a2]);
          else
            t2.virtual.slides.push(e2);
          t2.virtual.update(true);
        }, prependSlide: function(e2) {
          var t2 = this, a2 = t2.activeIndex, i2 = a2 + 1, s2 = 1;
          if (Array.isArray(e2)) {
            for (var r2 = 0; r2 < e2.length; r2 += 1)
              e2[r2] && t2.virtual.slides.unshift(e2[r2]);
            i2 = a2 + e2.length, s2 = e2.length;
          } else
            t2.virtual.slides.unshift(e2);
          if (t2.params.virtual.cache) {
            var n2 = t2.virtual.cache, l2 = {};
            Object.keys(n2).forEach(function(e3) {
              var t3 = n2[e3], a3 = t3.attr("data-swiper-slide-index");
              a3 && t3.attr("data-swiper-slide-index", parseInt(a3, 10) + 1), l2[parseInt(e3, 10) + s2] = t3;
            }), t2.virtual.cache = l2;
          }
          t2.virtual.update(true), t2.slideTo(i2, 0);
        }, removeSlide: function(e2) {
          var t2 = this;
          if (e2 != null) {
            var a2 = t2.activeIndex;
            if (Array.isArray(e2))
              for (var i2 = e2.length - 1; i2 >= 0; i2 -= 1)
                t2.virtual.slides.splice(e2[i2], 1), t2.params.virtual.cache && delete t2.virtual.cache[e2[i2]], e2[i2] < a2 && (a2 -= 1), a2 = Math.max(a2, 0);
            else
              t2.virtual.slides.splice(e2, 1), t2.params.virtual.cache && delete t2.virtual.cache[e2], e2 < a2 && (a2 -= 1), a2 = Math.max(a2, 0);
            t2.virtual.update(true), t2.slideTo(a2, 0);
          }
        }, removeAllSlides: function() {
          var e2 = this;
          e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {}), e2.virtual.update(true), e2.slideTo(0, 0);
        } }, U = { name: "virtual", params: { virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function() {
          z(this, { virtual: t({}, j, { slides: this.params.virtual.slides, cache: {} }) });
        }, on: { beforeInit: function(e2) {
          if (e2.params.virtual.enabled) {
            e2.classNames.push(e2.params.containerModifierClass + "virtual");
            var t2 = { watchSlidesProgress: true };
            M(e2.params, t2), M(e2.originalParams, t2), e2.params.initialSlide || e2.virtual.update();
          }
        }, setTranslate: function(e2) {
          e2.params.virtual.enabled && e2.virtual.update();
        } } }, K = { handle: function(e2) {
          var t2 = this;
          if (t2.enabled) {
            var a2 = l(), i2 = r(), s2 = t2.rtlTranslate, n2 = e2;
            n2.originalEvent && (n2 = n2.originalEvent);
            var o2 = n2.keyCode || n2.charCode, d2 = t2.params.keyboard.pageUpDown, p2 = d2 && o2 === 33, u2 = d2 && o2 === 34, c2 = o2 === 37, h2 = o2 === 39, v2 = o2 === 38, f2 = o2 === 40;
            if (!t2.allowSlideNext && (t2.isHorizontal() && h2 || t2.isVertical() && f2 || u2))
              return false;
            if (!t2.allowSlidePrev && (t2.isHorizontal() && c2 || t2.isVertical() && v2 || p2))
              return false;
            if (!(n2.shiftKey || n2.altKey || n2.ctrlKey || n2.metaKey || i2.activeElement && i2.activeElement.nodeName && (i2.activeElement.nodeName.toLowerCase() === "input" || i2.activeElement.nodeName.toLowerCase() === "textarea"))) {
              if (t2.params.keyboard.onlyInViewport && (p2 || u2 || c2 || h2 || v2 || f2)) {
                var m2 = false;
                if (t2.$el.parents("." + t2.params.slideClass).length > 0 && t2.$el.parents("." + t2.params.slideActiveClass).length === 0)
                  return;
                var g2 = t2.$el, b2 = g2[0].clientWidth, w2 = g2[0].clientHeight, y2 = a2.innerWidth, E2 = a2.innerHeight, x2 = t2.$el.offset();
                s2 && (x2.left -= t2.$el[0].scrollLeft);
                for (var T2 = [[x2.left, x2.top], [x2.left + b2, x2.top], [x2.left, x2.top + w2], [x2.left + b2, x2.top + w2]], C2 = 0; C2 < T2.length; C2 += 1) {
                  var S2 = T2[C2];
                  if (S2[0] >= 0 && S2[0] <= y2 && S2[1] >= 0 && S2[1] <= E2) {
                    if (S2[0] === 0 && S2[1] === 0)
                      continue;
                    m2 = true;
                  }
                }
                if (!m2)
                  return;
              }
              t2.isHorizontal() ? ((p2 || u2 || c2 || h2) && (n2.preventDefault ? n2.preventDefault() : n2.returnValue = false), ((u2 || h2) && !s2 || (p2 || c2) && s2) && t2.slideNext(), ((p2 || c2) && !s2 || (u2 || h2) && s2) && t2.slidePrev()) : ((p2 || u2 || v2 || f2) && (n2.preventDefault ? n2.preventDefault() : n2.returnValue = false), (u2 || f2) && t2.slideNext(), (p2 || v2) && t2.slidePrev()), t2.emit("keyPress", o2);
            }
          }
        }, enable: function() {
          var e2 = this, t2 = r();
          e2.keyboard.enabled || (m(t2).on("keydown", e2.keyboard.handle), e2.keyboard.enabled = true);
        }, disable: function() {
          var e2 = this, t2 = r();
          e2.keyboard.enabled && (m(t2).off("keydown", e2.keyboard.handle), e2.keyboard.enabled = false);
        } }, Z = { name: "keyboard", params: { keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }, create: function() {
          z(this, { keyboard: t({ enabled: false }, K) });
        }, on: { init: function(e2) {
          e2.params.keyboard.enabled && e2.keyboard.enable();
        }, destroy: function(e2) {
          e2.keyboard.enabled && e2.keyboard.disable();
        } } };
        var J = { lastScrollTime: x(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function() {
          return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var e2 = r(), t2 = "onwheel", a2 = t2 in e2;
            if (!a2) {
              var i2 = e2.createElement("div");
              i2.setAttribute(t2, "return;"), a2 = typeof i2.onwheel == "function";
            }
            return !a2 && e2.implementation && e2.implementation.hasFeature && e2.implementation.hasFeature("", "") !== true && (a2 = e2.implementation.hasFeature("Events.wheel", "3.0")), a2;
          }() ? "wheel" : "mousewheel";
        }, normalize: function(e2) {
          var t2 = 0, a2 = 0, i2 = 0, s2 = 0;
          return "detail" in e2 && (a2 = e2.detail), "wheelDelta" in e2 && (a2 = -e2.wheelDelta / 120), "wheelDeltaY" in e2 && (a2 = -e2.wheelDeltaY / 120), "wheelDeltaX" in e2 && (t2 = -e2.wheelDeltaX / 120), "axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS && (t2 = a2, a2 = 0), i2 = 10 * t2, s2 = 10 * a2, "deltaY" in e2 && (s2 = e2.deltaY), "deltaX" in e2 && (i2 = e2.deltaX), e2.shiftKey && !i2 && (i2 = s2, s2 = 0), (i2 || s2) && e2.deltaMode && (e2.deltaMode === 1 ? (i2 *= 40, s2 *= 40) : (i2 *= 800, s2 *= 800)), i2 && !t2 && (t2 = i2 < 1 ? -1 : 1), s2 && !a2 && (a2 = s2 < 1 ? -1 : 1), { spinX: t2, spinY: a2, pixelX: i2, pixelY: s2 };
        }, handleMouseEnter: function() {
          this.enabled && (this.mouseEntered = true);
        }, handleMouseLeave: function() {
          this.enabled && (this.mouseEntered = false);
        }, handle: function(e2) {
          var t2 = e2, a2 = this;
          if (a2.enabled) {
            var i2 = a2.params.mousewheel;
            a2.params.cssMode && t2.preventDefault();
            var s2 = a2.$el;
            if (a2.params.mousewheel.eventsTarget !== "container" && (s2 = m(a2.params.mousewheel.eventsTarget)), !a2.mouseEntered && !s2[0].contains(t2.target) && !i2.releaseOnEdges)
              return true;
            t2.originalEvent && (t2 = t2.originalEvent);
            var r2 = 0, n2 = a2.rtlTranslate ? -1 : 1, l2 = J.normalize(t2);
            if (i2.forceToAxis)
              if (a2.isHorizontal()) {
                if (!(Math.abs(l2.pixelX) > Math.abs(l2.pixelY)))
                  return true;
                r2 = -l2.pixelX * n2;
              } else {
                if (!(Math.abs(l2.pixelY) > Math.abs(l2.pixelX)))
                  return true;
                r2 = -l2.pixelY;
              }
            else
              r2 = Math.abs(l2.pixelX) > Math.abs(l2.pixelY) ? -l2.pixelX * n2 : -l2.pixelY;
            if (r2 === 0)
              return true;
            i2.invert && (r2 = -r2);
            var o2 = a2.getTranslate() + r2 * i2.sensitivity;
            if (o2 >= a2.minTranslate() && (o2 = a2.minTranslate()), o2 <= a2.maxTranslate() && (o2 = a2.maxTranslate()), (!!a2.params.loop || !(o2 === a2.minTranslate() || o2 === a2.maxTranslate())) && a2.params.nested && t2.stopPropagation(), a2.params.freeMode) {
              var d2 = { time: x(), delta: Math.abs(r2), direction: Math.sign(r2) }, p2 = a2.mousewheel.lastEventBeforeSnap, u2 = p2 && d2.time < p2.time + 500 && d2.delta <= p2.delta && d2.direction === p2.direction;
              if (!u2) {
                a2.mousewheel.lastEventBeforeSnap = void 0, a2.params.loop && a2.loopFix();
                var c2 = a2.getTranslate() + r2 * i2.sensitivity, h2 = a2.isBeginning, v2 = a2.isEnd;
                if (c2 >= a2.minTranslate() && (c2 = a2.minTranslate()), c2 <= a2.maxTranslate() && (c2 = a2.maxTranslate()), a2.setTransition(0), a2.setTranslate(c2), a2.updateProgress(), a2.updateActiveIndex(), a2.updateSlidesClasses(), (!h2 && a2.isBeginning || !v2 && a2.isEnd) && a2.updateSlidesClasses(), a2.params.freeModeSticky) {
                  clearTimeout(a2.mousewheel.timeout), a2.mousewheel.timeout = void 0;
                  var f2 = a2.mousewheel.recentWheelEvents;
                  f2.length >= 15 && f2.shift();
                  var g2 = f2.length ? f2[f2.length - 1] : void 0, b2 = f2[0];
                  if (f2.push(d2), g2 && (d2.delta > g2.delta || d2.direction !== g2.direction))
                    f2.splice(0);
                  else if (f2.length >= 15 && d2.time - b2.time < 500 && b2.delta - d2.delta >= 1 && d2.delta <= 6) {
                    var w2 = r2 > 0 ? 0.8 : 0.2;
                    a2.mousewheel.lastEventBeforeSnap = d2, f2.splice(0), a2.mousewheel.timeout = E(function() {
                      a2.slideToClosest(a2.params.speed, true, void 0, w2);
                    }, 0);
                  }
                  a2.mousewheel.timeout || (a2.mousewheel.timeout = E(function() {
                    a2.mousewheel.lastEventBeforeSnap = d2, f2.splice(0), a2.slideToClosest(a2.params.speed, true, void 0, 0.5);
                  }, 500));
                }
                if (u2 || a2.emit("scroll", t2), a2.params.autoplay && a2.params.autoplayDisableOnInteraction && a2.autoplay.stop(), c2 === a2.minTranslate() || c2 === a2.maxTranslate())
                  return true;
              }
            } else {
              var y2 = { time: x(), delta: Math.abs(r2), direction: Math.sign(r2), raw: e2 }, T2 = a2.mousewheel.recentWheelEvents;
              T2.length >= 2 && T2.shift();
              var C2 = T2.length ? T2[T2.length - 1] : void 0;
              if (T2.push(y2), C2 ? (y2.direction !== C2.direction || y2.delta > C2.delta || y2.time > C2.time + 150) && a2.mousewheel.animateSlider(y2) : a2.mousewheel.animateSlider(y2), a2.mousewheel.releaseScroll(y2))
                return true;
            }
            return t2.preventDefault ? t2.preventDefault() : t2.returnValue = false, false;
          }
        }, animateSlider: function(e2) {
          var t2 = this, a2 = l();
          return !(this.params.mousewheel.thresholdDelta && e2.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && x() - t2.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e2.delta >= 6 && x() - t2.mousewheel.lastScrollTime < 60 || (e2.direction < 0 ? t2.isEnd && !t2.params.loop || t2.animating || (t2.slideNext(), t2.emit("scroll", e2.raw)) : t2.isBeginning && !t2.params.loop || t2.animating || (t2.slidePrev(), t2.emit("scroll", e2.raw)), t2.mousewheel.lastScrollTime = new a2.Date().getTime(), false)));
        }, releaseScroll: function(e2) {
          var t2 = this, a2 = t2.params.mousewheel;
          if (e2.direction < 0) {
            if (t2.isEnd && !t2.params.loop && a2.releaseOnEdges)
              return true;
          } else if (t2.isBeginning && !t2.params.loop && a2.releaseOnEdges)
            return true;
          return false;
        }, enable: function() {
          var e2 = this, t2 = J.event();
          if (e2.params.cssMode)
            return e2.wrapperEl.removeEventListener(t2, e2.mousewheel.handle), true;
          if (!t2)
            return false;
          if (e2.mousewheel.enabled)
            return false;
          var a2 = e2.$el;
          return e2.params.mousewheel.eventsTarget !== "container" && (a2 = m(e2.params.mousewheel.eventsTarget)), a2.on("mouseenter", e2.mousewheel.handleMouseEnter), a2.on("mouseleave", e2.mousewheel.handleMouseLeave), a2.on(t2, e2.mousewheel.handle), e2.mousewheel.enabled = true, true;
        }, disable: function() {
          var e2 = this, t2 = J.event();
          if (e2.params.cssMode)
            return e2.wrapperEl.addEventListener(t2, e2.mousewheel.handle), true;
          if (!t2)
            return false;
          if (!e2.mousewheel.enabled)
            return false;
          var a2 = e2.$el;
          return e2.params.mousewheel.eventsTarget !== "container" && (a2 = m(e2.params.mousewheel.eventsTarget)), a2.off(t2, e2.mousewheel.handle), e2.mousewheel.enabled = false, true;
        } }, Q = { toggleEl: function(e2, t2) {
          e2[t2 ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e2[0] && e2[0].tagName === "BUTTON" && (e2[0].disabled = t2);
        }, update: function() {
          var e2 = this, t2 = e2.params.navigation, a2 = e2.navigation.toggleEl;
          if (!e2.params.loop) {
            var i2 = e2.navigation, s2 = i2.$nextEl, r2 = i2.$prevEl;
            r2 && r2.length > 0 && (e2.isBeginning ? a2(r2, true) : a2(r2, false), e2.params.watchOverflow && e2.enabled && r2[e2.isLocked ? "addClass" : "removeClass"](t2.lockClass)), s2 && s2.length > 0 && (e2.isEnd ? a2(s2, true) : a2(s2, false), e2.params.watchOverflow && e2.enabled && s2[e2.isLocked ? "addClass" : "removeClass"](t2.lockClass));
          }
        }, onPrevClick: function(e2) {
          var t2 = this;
          e2.preventDefault(), t2.isBeginning && !t2.params.loop || t2.slidePrev();
        }, onNextClick: function(e2) {
          var t2 = this;
          e2.preventDefault(), t2.isEnd && !t2.params.loop || t2.slideNext();
        }, init: function() {
          var e2, t2, a2 = this, i2 = a2.params.navigation;
          (a2.params.navigation = k(a2.$el, a2.params.navigation, a2.params.createElements, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), i2.nextEl || i2.prevEl) && (i2.nextEl && (e2 = m(i2.nextEl), a2.params.uniqueNavElements && typeof i2.nextEl == "string" && e2.length > 1 && a2.$el.find(i2.nextEl).length === 1 && (e2 = a2.$el.find(i2.nextEl))), i2.prevEl && (t2 = m(i2.prevEl), a2.params.uniqueNavElements && typeof i2.prevEl == "string" && t2.length > 1 && a2.$el.find(i2.prevEl).length === 1 && (t2 = a2.$el.find(i2.prevEl))), e2 && e2.length > 0 && e2.on("click", a2.navigation.onNextClick), t2 && t2.length > 0 && t2.on("click", a2.navigation.onPrevClick), M(a2.navigation, { $nextEl: e2, nextEl: e2 && e2[0], $prevEl: t2, prevEl: t2 && t2[0] }), a2.enabled || (e2 && e2.addClass(i2.lockClass), t2 && t2.addClass(i2.lockClass)));
        }, destroy: function() {
          var e2 = this, t2 = e2.navigation, a2 = t2.$nextEl, i2 = t2.$prevEl;
          a2 && a2.length && (a2.off("click", e2.navigation.onNextClick), a2.removeClass(e2.params.navigation.disabledClass)), i2 && i2.length && (i2.off("click", e2.navigation.onPrevClick), i2.removeClass(e2.params.navigation.disabledClass));
        } }, ee = { update: function() {
          var e2 = this, t2 = e2.rtl, a2 = e2.params.pagination;
          if (a2.el && e2.pagination.el && e2.pagination.$el && e2.pagination.$el.length !== 0) {
            var i2, s2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, r2 = e2.pagination.$el, n2 = e2.params.loop ? Math.ceil((s2 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
            if (e2.params.loop ? ((i2 = Math.ceil((e2.activeIndex - e2.loopedSlides) / e2.params.slidesPerGroup)) > s2 - 1 - 2 * e2.loopedSlides && (i2 -= s2 - 2 * e2.loopedSlides), i2 > n2 - 1 && (i2 -= n2), i2 < 0 && e2.params.paginationType !== "bullets" && (i2 = n2 + i2)) : i2 = e2.snapIndex !== void 0 ? e2.snapIndex : e2.activeIndex || 0, a2.type === "bullets" && e2.pagination.bullets && e2.pagination.bullets.length > 0) {
              var l2, o2, d2, p2 = e2.pagination.bullets;
              if (a2.dynamicBullets && (e2.pagination.bulletSize = p2.eq(0)[e2.isHorizontal() ? "outerWidth" : "outerHeight"](true), r2.css(e2.isHorizontal() ? "width" : "height", e2.pagination.bulletSize * (a2.dynamicMainBullets + 4) + "px"), a2.dynamicMainBullets > 1 && e2.previousIndex !== void 0 && (e2.pagination.dynamicBulletIndex += i2 - e2.previousIndex, e2.pagination.dynamicBulletIndex > a2.dynamicMainBullets - 1 ? e2.pagination.dynamicBulletIndex = a2.dynamicMainBullets - 1 : e2.pagination.dynamicBulletIndex < 0 && (e2.pagination.dynamicBulletIndex = 0)), l2 = i2 - e2.pagination.dynamicBulletIndex, d2 = ((o2 = l2 + (Math.min(p2.length, a2.dynamicMainBullets) - 1)) + l2) / 2), p2.removeClass(a2.bulletActiveClass + " " + a2.bulletActiveClass + "-next " + a2.bulletActiveClass + "-next-next " + a2.bulletActiveClass + "-prev " + a2.bulletActiveClass + "-prev-prev " + a2.bulletActiveClass + "-main"), r2.length > 1)
                p2.each(function(e3) {
                  var t3 = m(e3), s3 = t3.index();
                  s3 === i2 && t3.addClass(a2.bulletActiveClass), a2.dynamicBullets && (s3 >= l2 && s3 <= o2 && t3.addClass(a2.bulletActiveClass + "-main"), s3 === l2 && t3.prev().addClass(a2.bulletActiveClass + "-prev").prev().addClass(a2.bulletActiveClass + "-prev-prev"), s3 === o2 && t3.next().addClass(a2.bulletActiveClass + "-next").next().addClass(a2.bulletActiveClass + "-next-next"));
                });
              else {
                var u2 = p2.eq(i2), c2 = u2.index();
                if (u2.addClass(a2.bulletActiveClass), a2.dynamicBullets) {
                  for (var h2 = p2.eq(l2), v2 = p2.eq(o2), f2 = l2; f2 <= o2; f2 += 1)
                    p2.eq(f2).addClass(a2.bulletActiveClass + "-main");
                  if (e2.params.loop)
                    if (c2 >= p2.length - a2.dynamicMainBullets) {
                      for (var g2 = a2.dynamicMainBullets; g2 >= 0; g2 -= 1)
                        p2.eq(p2.length - g2).addClass(a2.bulletActiveClass + "-main");
                      p2.eq(p2.length - a2.dynamicMainBullets - 1).addClass(a2.bulletActiveClass + "-prev");
                    } else
                      h2.prev().addClass(a2.bulletActiveClass + "-prev").prev().addClass(a2.bulletActiveClass + "-prev-prev"), v2.next().addClass(a2.bulletActiveClass + "-next").next().addClass(a2.bulletActiveClass + "-next-next");
                  else
                    h2.prev().addClass(a2.bulletActiveClass + "-prev").prev().addClass(a2.bulletActiveClass + "-prev-prev"), v2.next().addClass(a2.bulletActiveClass + "-next").next().addClass(a2.bulletActiveClass + "-next-next");
                }
              }
              if (a2.dynamicBullets) {
                var b2 = Math.min(p2.length, a2.dynamicMainBullets + 4), w2 = (e2.pagination.bulletSize * b2 - e2.pagination.bulletSize) / 2 - d2 * e2.pagination.bulletSize, y2 = t2 ? "right" : "left";
                p2.css(e2.isHorizontal() ? y2 : "top", w2 + "px");
              }
            }
            if (a2.type === "fraction" && (r2.find(P(a2.currentClass)).text(a2.formatFractionCurrent(i2 + 1)), r2.find(P(a2.totalClass)).text(a2.formatFractionTotal(n2))), a2.type === "progressbar") {
              var E2;
              E2 = a2.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
              var x2 = (i2 + 1) / n2, T2 = 1, C2 = 1;
              E2 === "horizontal" ? T2 = x2 : C2 = x2, r2.find(P(a2.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T2 + ") scaleY(" + C2 + ")").transition(e2.params.speed);
            }
            a2.type === "custom" && a2.renderCustom ? (r2.html(a2.renderCustom(e2, i2 + 1, n2)), e2.emit("paginationRender", r2[0])) : e2.emit("paginationUpdate", r2[0]), e2.params.watchOverflow && e2.enabled && r2[e2.isLocked ? "addClass" : "removeClass"](a2.lockClass);
          }
        }, render: function() {
          var e2 = this, t2 = e2.params.pagination;
          if (t2.el && e2.pagination.el && e2.pagination.$el && e2.pagination.$el.length !== 0) {
            var a2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i2 = e2.pagination.$el, s2 = "";
            if (t2.type === "bullets") {
              var r2 = e2.params.loop ? Math.ceil((a2 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
              e2.params.freeMode && !e2.params.loop && r2 > a2 && (r2 = a2);
              for (var n2 = 0; n2 < r2; n2 += 1)
                t2.renderBullet ? s2 += t2.renderBullet.call(e2, n2, t2.bulletClass) : s2 += "<" + t2.bulletElement + ' class="' + t2.bulletClass + '"></' + t2.bulletElement + ">";
              i2.html(s2), e2.pagination.bullets = i2.find(P(t2.bulletClass));
            }
            t2.type === "fraction" && (s2 = t2.renderFraction ? t2.renderFraction.call(e2, t2.currentClass, t2.totalClass) : '<span class="' + t2.currentClass + '"></span> / <span class="' + t2.totalClass + '"></span>', i2.html(s2)), t2.type === "progressbar" && (s2 = t2.renderProgressbar ? t2.renderProgressbar.call(e2, t2.progressbarFillClass) : '<span class="' + t2.progressbarFillClass + '"></span>', i2.html(s2)), t2.type !== "custom" && e2.emit("paginationRender", e2.pagination.$el[0]);
          }
        }, init: function() {
          var e2 = this;
          e2.params.pagination = k(e2.$el, e2.params.pagination, e2.params.createElements, { el: "swiper-pagination" });
          var t2 = e2.params.pagination;
          if (t2.el) {
            var a2 = m(t2.el);
            a2.length !== 0 && (e2.params.uniqueNavElements && typeof t2.el == "string" && a2.length > 1 && (a2 = e2.$el.find(t2.el)), t2.type === "bullets" && t2.clickable && a2.addClass(t2.clickableClass), a2.addClass(t2.modifierClass + t2.type), t2.type === "bullets" && t2.dynamicBullets && (a2.addClass("" + t2.modifierClass + t2.type + "-dynamic"), e2.pagination.dynamicBulletIndex = 0, t2.dynamicMainBullets < 1 && (t2.dynamicMainBullets = 1)), t2.type === "progressbar" && t2.progressbarOpposite && a2.addClass(t2.progressbarOppositeClass), t2.clickable && a2.on("click", P(t2.bulletClass), function(t3) {
              t3.preventDefault();
              var a3 = m(this).index() * e2.params.slidesPerGroup;
              e2.params.loop && (a3 += e2.loopedSlides), e2.slideTo(a3);
            }), M(e2.pagination, { $el: a2, el: a2[0] }), e2.enabled || a2.addClass(t2.lockClass));
          }
        }, destroy: function() {
          var e2 = this, t2 = e2.params.pagination;
          if (t2.el && e2.pagination.el && e2.pagination.$el && e2.pagination.$el.length !== 0) {
            var a2 = e2.pagination.$el;
            a2.removeClass(t2.hiddenClass), a2.removeClass(t2.modifierClass + t2.type), e2.pagination.bullets && e2.pagination.bullets.removeClass(t2.bulletActiveClass), t2.clickable && a2.off("click", P(t2.bulletClass));
          }
        } }, te = { setTranslate: function() {
          var e2 = this;
          if (e2.params.scrollbar.el && e2.scrollbar.el) {
            var t2 = e2.scrollbar, a2 = e2.rtlTranslate, i2 = e2.progress, s2 = t2.dragSize, r2 = t2.trackSize, n2 = t2.$dragEl, l2 = t2.$el, o2 = e2.params.scrollbar, d2 = s2, p2 = (r2 - s2) * i2;
            a2 ? (p2 = -p2) > 0 ? (d2 = s2 - p2, p2 = 0) : -p2 + s2 > r2 && (d2 = r2 + p2) : p2 < 0 ? (d2 = s2 + p2, p2 = 0) : p2 + s2 > r2 && (d2 = r2 - p2), e2.isHorizontal() ? (n2.transform("translate3d(" + p2 + "px, 0, 0)"), n2[0].style.width = d2 + "px") : (n2.transform("translate3d(0px, " + p2 + "px, 0)"), n2[0].style.height = d2 + "px"), o2.hide && (clearTimeout(e2.scrollbar.timeout), l2[0].style.opacity = 1, e2.scrollbar.timeout = setTimeout(function() {
              l2[0].style.opacity = 0, l2.transition(400);
            }, 1e3));
          }
        }, setTransition: function(e2) {
          var t2 = this;
          t2.params.scrollbar.el && t2.scrollbar.el && t2.scrollbar.$dragEl.transition(e2);
        }, updateSize: function() {
          var e2 = this;
          if (e2.params.scrollbar.el && e2.scrollbar.el) {
            var t2 = e2.scrollbar, a2 = t2.$dragEl, i2 = t2.$el;
            a2[0].style.width = "", a2[0].style.height = "";
            var s2, r2 = e2.isHorizontal() ? i2[0].offsetWidth : i2[0].offsetHeight, n2 = e2.size / e2.virtualSize, l2 = n2 * (r2 / e2.size);
            s2 = e2.params.scrollbar.dragSize === "auto" ? r2 * n2 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? a2[0].style.width = s2 + "px" : a2[0].style.height = s2 + "px", i2[0].style.display = n2 >= 1 ? "none" : "", e2.params.scrollbar.hide && (i2[0].style.opacity = 0), M(t2, { trackSize: r2, divider: n2, moveDivider: l2, dragSize: s2 }), e2.params.watchOverflow && e2.enabled && t2.$el[e2.isLocked ? "addClass" : "removeClass"](e2.params.scrollbar.lockClass);
          }
        }, getPointerPosition: function(e2) {
          return this.isHorizontal() ? e2.type === "touchstart" || e2.type === "touchmove" ? e2.targetTouches[0].clientX : e2.clientX : e2.type === "touchstart" || e2.type === "touchmove" ? e2.targetTouches[0].clientY : e2.clientY;
        }, setDragPosition: function(e2) {
          var t2, a2 = this, i2 = a2.scrollbar, s2 = a2.rtlTranslate, r2 = i2.$el, n2 = i2.dragSize, l2 = i2.trackSize, o2 = i2.dragStartPos;
          t2 = (i2.getPointerPosition(e2) - r2.offset()[a2.isHorizontal() ? "left" : "top"] - (o2 !== null ? o2 : n2 / 2)) / (l2 - n2), t2 = Math.max(Math.min(t2, 1), 0), s2 && (t2 = 1 - t2);
          var d2 = a2.minTranslate() + (a2.maxTranslate() - a2.minTranslate()) * t2;
          a2.updateProgress(d2), a2.setTranslate(d2), a2.updateActiveIndex(), a2.updateSlidesClasses();
        }, onDragStart: function(e2) {
          var t2 = this, a2 = t2.params.scrollbar, i2 = t2.scrollbar, s2 = t2.$wrapperEl, r2 = i2.$el, n2 = i2.$dragEl;
          t2.scrollbar.isTouched = true, t2.scrollbar.dragStartPos = e2.target === n2[0] || e2.target === n2 ? i2.getPointerPosition(e2) - e2.target.getBoundingClientRect()[t2.isHorizontal() ? "left" : "top"] : null, e2.preventDefault(), e2.stopPropagation(), s2.transition(100), n2.transition(100), i2.setDragPosition(e2), clearTimeout(t2.scrollbar.dragTimeout), r2.transition(0), a2.hide && r2.css("opacity", 1), t2.params.cssMode && t2.$wrapperEl.css("scroll-snap-type", "none"), t2.emit("scrollbarDragStart", e2);
        }, onDragMove: function(e2) {
          var t2 = this, a2 = t2.scrollbar, i2 = t2.$wrapperEl, s2 = a2.$el, r2 = a2.$dragEl;
          t2.scrollbar.isTouched && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, a2.setDragPosition(e2), i2.transition(0), s2.transition(0), r2.transition(0), t2.emit("scrollbarDragMove", e2));
        }, onDragEnd: function(e2) {
          var t2 = this, a2 = t2.params.scrollbar, i2 = t2.scrollbar, s2 = t2.$wrapperEl, r2 = i2.$el;
          t2.scrollbar.isTouched && (t2.scrollbar.isTouched = false, t2.params.cssMode && (t2.$wrapperEl.css("scroll-snap-type", ""), s2.transition("")), a2.hide && (clearTimeout(t2.scrollbar.dragTimeout), t2.scrollbar.dragTimeout = E(function() {
            r2.css("opacity", 0), r2.transition(400);
          }, 1e3)), t2.emit("scrollbarDragEnd", e2), a2.snapOnRelease && t2.slideToClosest());
        }, enableDraggable: function() {
          var e2 = this;
          if (e2.params.scrollbar.el) {
            var t2 = r(), a2 = e2.scrollbar, i2 = e2.touchEventsTouch, s2 = e2.touchEventsDesktop, n2 = e2.params, l2 = e2.support, o2 = a2.$el[0], d2 = !(!l2.passiveListener || !n2.passiveListeners) && { passive: false, capture: false }, p2 = !(!l2.passiveListener || !n2.passiveListeners) && { passive: true, capture: false };
            o2 && (l2.touch ? (o2.addEventListener(i2.start, e2.scrollbar.onDragStart, d2), o2.addEventListener(i2.move, e2.scrollbar.onDragMove, d2), o2.addEventListener(i2.end, e2.scrollbar.onDragEnd, p2)) : (o2.addEventListener(s2.start, e2.scrollbar.onDragStart, d2), t2.addEventListener(s2.move, e2.scrollbar.onDragMove, d2), t2.addEventListener(s2.end, e2.scrollbar.onDragEnd, p2)));
          }
        }, disableDraggable: function() {
          var e2 = this;
          if (e2.params.scrollbar.el) {
            var t2 = r(), a2 = e2.scrollbar, i2 = e2.touchEventsTouch, s2 = e2.touchEventsDesktop, n2 = e2.params, l2 = e2.support, o2 = a2.$el[0], d2 = !(!l2.passiveListener || !n2.passiveListeners) && { passive: false, capture: false }, p2 = !(!l2.passiveListener || !n2.passiveListeners) && { passive: true, capture: false };
            o2 && (l2.touch ? (o2.removeEventListener(i2.start, e2.scrollbar.onDragStart, d2), o2.removeEventListener(i2.move, e2.scrollbar.onDragMove, d2), o2.removeEventListener(i2.end, e2.scrollbar.onDragEnd, p2)) : (o2.removeEventListener(s2.start, e2.scrollbar.onDragStart, d2), t2.removeEventListener(s2.move, e2.scrollbar.onDragMove, d2), t2.removeEventListener(s2.end, e2.scrollbar.onDragEnd, p2)));
          }
        }, init: function() {
          var e2 = this, t2 = e2.scrollbar, a2 = e2.$el;
          e2.params.scrollbar = k(a2, e2.params.scrollbar, e2.params.createElements, { el: "swiper-scrollbar" });
          var i2 = e2.params.scrollbar;
          if (i2.el) {
            var s2 = m(i2.el);
            e2.params.uniqueNavElements && typeof i2.el == "string" && s2.length > 1 && a2.find(i2.el).length === 1 && (s2 = a2.find(i2.el));
            var r2 = s2.find("." + e2.params.scrollbar.dragClass);
            r2.length === 0 && (r2 = m('<div class="' + e2.params.scrollbar.dragClass + '"></div>'), s2.append(r2)), M(t2, { $el: s2, el: s2[0], $dragEl: r2, dragEl: r2[0] }), i2.draggable && t2.enableDraggable(), s2 && s2[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
          }
        }, destroy: function() {
          this.scrollbar.disableDraggable();
        } }, ae = { setTransform: function(e2, t2) {
          var a2 = this.rtl, i2 = m(e2), s2 = a2 ? -1 : 1, r2 = i2.attr("data-swiper-parallax") || "0", n2 = i2.attr("data-swiper-parallax-x"), l2 = i2.attr("data-swiper-parallax-y"), o2 = i2.attr("data-swiper-parallax-scale"), d2 = i2.attr("data-swiper-parallax-opacity");
          if (n2 || l2 ? (n2 = n2 || "0", l2 = l2 || "0") : this.isHorizontal() ? (n2 = r2, l2 = "0") : (l2 = r2, n2 = "0"), n2 = n2.indexOf("%") >= 0 ? parseInt(n2, 10) * t2 * s2 + "%" : n2 * t2 * s2 + "px", l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * t2 + "%" : l2 * t2 + "px", d2 != null) {
            var p2 = d2 - (d2 - 1) * (1 - Math.abs(t2));
            i2[0].style.opacity = p2;
          }
          if (o2 == null)
            i2.transform("translate3d(" + n2 + ", " + l2 + ", 0px)");
          else {
            var u2 = o2 - (o2 - 1) * (1 - Math.abs(t2));
            i2.transform("translate3d(" + n2 + ", " + l2 + ", 0px) scale(" + u2 + ")");
          }
        }, setTranslate: function() {
          var e2 = this, t2 = e2.$el, a2 = e2.slides, i2 = e2.progress, s2 = e2.snapGrid;
          t2.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t3) {
            e2.parallax.setTransform(t3, i2);
          }), a2.each(function(t3, a3) {
            var r2 = t3.progress;
            e2.params.slidesPerGroup > 1 && e2.params.slidesPerView !== "auto" && (r2 += Math.ceil(a3 / 2) - i2 * (s2.length - 1)), r2 = Math.min(Math.max(r2, -1), 1), m(t3).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t4) {
              e2.parallax.setTransform(t4, r2);
            });
          });
        }, setTransition: function(e2) {
          e2 === void 0 && (e2 = this.params.speed);
          this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t2) {
            var a2 = m(t2), i2 = parseInt(a2.attr("data-swiper-parallax-duration"), 10) || e2;
            e2 === 0 && (i2 = 0), a2.transition(i2);
          });
        } }, ie = { getDistanceBetweenTouches: function(e2) {
          if (e2.targetTouches.length < 2)
            return 1;
          var t2 = e2.targetTouches[0].pageX, a2 = e2.targetTouches[0].pageY, i2 = e2.targetTouches[1].pageX, s2 = e2.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(i2 - t2, 2) + Math.pow(s2 - a2, 2));
        }, onGestureStart: function(e2) {
          var t2 = this, a2 = t2.support, i2 = t2.params.zoom, s2 = t2.zoom, r2 = s2.gesture;
          if (s2.fakeGestureTouched = false, s2.fakeGestureMoved = false, !a2.gestures) {
            if (e2.type !== "touchstart" || e2.type === "touchstart" && e2.targetTouches.length < 2)
              return;
            s2.fakeGestureTouched = true, r2.scaleStart = ie.getDistanceBetweenTouches(e2);
          }
          r2.$slideEl && r2.$slideEl.length || (r2.$slideEl = m(e2.target).closest("." + t2.params.slideClass), r2.$slideEl.length === 0 && (r2.$slideEl = t2.slides.eq(t2.activeIndex)), r2.$imageEl = r2.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r2.$imageWrapEl = r2.$imageEl.parent("." + i2.containerClass), r2.maxRatio = r2.$imageWrapEl.attr("data-swiper-zoom") || i2.maxRatio, r2.$imageWrapEl.length !== 0) ? (r2.$imageEl && r2.$imageEl.transition(0), t2.zoom.isScaling = true) : r2.$imageEl = void 0;
        }, onGestureChange: function(e2) {
          var t2 = this, a2 = t2.support, i2 = t2.params.zoom, s2 = t2.zoom, r2 = s2.gesture;
          if (!a2.gestures) {
            if (e2.type !== "touchmove" || e2.type === "touchmove" && e2.targetTouches.length < 2)
              return;
            s2.fakeGestureMoved = true, r2.scaleMove = ie.getDistanceBetweenTouches(e2);
          }
          r2.$imageEl && r2.$imageEl.length !== 0 ? (a2.gestures ? s2.scale = e2.scale * s2.currentScale : s2.scale = r2.scaleMove / r2.scaleStart * s2.currentScale, s2.scale > r2.maxRatio && (s2.scale = r2.maxRatio - 1 + Math.pow(s2.scale - r2.maxRatio + 1, 0.5)), s2.scale < i2.minRatio && (s2.scale = i2.minRatio + 1 - Math.pow(i2.minRatio - s2.scale + 1, 0.5)), r2.$imageEl.transform("translate3d(0,0,0) scale(" + s2.scale + ")")) : e2.type === "gesturechange" && s2.onGestureStart(e2);
        }, onGestureEnd: function(e2) {
          var t2 = this, a2 = t2.device, i2 = t2.support, s2 = t2.params.zoom, r2 = t2.zoom, n2 = r2.gesture;
          if (!i2.gestures) {
            if (!r2.fakeGestureTouched || !r2.fakeGestureMoved)
              return;
            if (e2.type !== "touchend" || e2.type === "touchend" && e2.changedTouches.length < 2 && !a2.android)
              return;
            r2.fakeGestureTouched = false, r2.fakeGestureMoved = false;
          }
          n2.$imageEl && n2.$imageEl.length !== 0 && (r2.scale = Math.max(Math.min(r2.scale, n2.maxRatio), s2.minRatio), n2.$imageEl.transition(t2.params.speed).transform("translate3d(0,0,0) scale(" + r2.scale + ")"), r2.currentScale = r2.scale, r2.isScaling = false, r2.scale === 1 && (n2.$slideEl = void 0));
        }, onTouchStart: function(e2) {
          var t2 = this.device, a2 = this.zoom, i2 = a2.gesture, s2 = a2.image;
          i2.$imageEl && i2.$imageEl.length !== 0 && (s2.isTouched || (t2.android && e2.cancelable && e2.preventDefault(), s2.isTouched = true, s2.touchesStart.x = e2.type === "touchstart" ? e2.targetTouches[0].pageX : e2.pageX, s2.touchesStart.y = e2.type === "touchstart" ? e2.targetTouches[0].pageY : e2.pageY));
        }, onTouchMove: function(e2) {
          var t2 = this, a2 = t2.zoom, i2 = a2.gesture, s2 = a2.image, r2 = a2.velocity;
          if (i2.$imageEl && i2.$imageEl.length !== 0 && (t2.allowClick = false, s2.isTouched && i2.$slideEl)) {
            s2.isMoved || (s2.width = i2.$imageEl[0].offsetWidth, s2.height = i2.$imageEl[0].offsetHeight, s2.startX = T(i2.$imageWrapEl[0], "x") || 0, s2.startY = T(i2.$imageWrapEl[0], "y") || 0, i2.slideWidth = i2.$slideEl[0].offsetWidth, i2.slideHeight = i2.$slideEl[0].offsetHeight, i2.$imageWrapEl.transition(0));
            var n2 = s2.width * a2.scale, l2 = s2.height * a2.scale;
            if (!(n2 < i2.slideWidth && l2 < i2.slideHeight)) {
              if (s2.minX = Math.min(i2.slideWidth / 2 - n2 / 2, 0), s2.maxX = -s2.minX, s2.minY = Math.min(i2.slideHeight / 2 - l2 / 2, 0), s2.maxY = -s2.minY, s2.touchesCurrent.x = e2.type === "touchmove" ? e2.targetTouches[0].pageX : e2.pageX, s2.touchesCurrent.y = e2.type === "touchmove" ? e2.targetTouches[0].pageY : e2.pageY, !s2.isMoved && !a2.isScaling) {
                if (t2.isHorizontal() && (Math.floor(s2.minX) === Math.floor(s2.startX) && s2.touchesCurrent.x < s2.touchesStart.x || Math.floor(s2.maxX) === Math.floor(s2.startX) && s2.touchesCurrent.x > s2.touchesStart.x))
                  return void (s2.isTouched = false);
                if (!t2.isHorizontal() && (Math.floor(s2.minY) === Math.floor(s2.startY) && s2.touchesCurrent.y < s2.touchesStart.y || Math.floor(s2.maxY) === Math.floor(s2.startY) && s2.touchesCurrent.y > s2.touchesStart.y))
                  return void (s2.isTouched = false);
              }
              e2.cancelable && e2.preventDefault(), e2.stopPropagation(), s2.isMoved = true, s2.currentX = s2.touchesCurrent.x - s2.touchesStart.x + s2.startX, s2.currentY = s2.touchesCurrent.y - s2.touchesStart.y + s2.startY, s2.currentX < s2.minX && (s2.currentX = s2.minX + 1 - Math.pow(s2.minX - s2.currentX + 1, 0.8)), s2.currentX > s2.maxX && (s2.currentX = s2.maxX - 1 + Math.pow(s2.currentX - s2.maxX + 1, 0.8)), s2.currentY < s2.minY && (s2.currentY = s2.minY + 1 - Math.pow(s2.minY - s2.currentY + 1, 0.8)), s2.currentY > s2.maxY && (s2.currentY = s2.maxY - 1 + Math.pow(s2.currentY - s2.maxY + 1, 0.8)), r2.prevPositionX || (r2.prevPositionX = s2.touchesCurrent.x), r2.prevPositionY || (r2.prevPositionY = s2.touchesCurrent.y), r2.prevTime || (r2.prevTime = Date.now()), r2.x = (s2.touchesCurrent.x - r2.prevPositionX) / (Date.now() - r2.prevTime) / 2, r2.y = (s2.touchesCurrent.y - r2.prevPositionY) / (Date.now() - r2.prevTime) / 2, Math.abs(s2.touchesCurrent.x - r2.prevPositionX) < 2 && (r2.x = 0), Math.abs(s2.touchesCurrent.y - r2.prevPositionY) < 2 && (r2.y = 0), r2.prevPositionX = s2.touchesCurrent.x, r2.prevPositionY = s2.touchesCurrent.y, r2.prevTime = Date.now(), i2.$imageWrapEl.transform("translate3d(" + s2.currentX + "px, " + s2.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function() {
          var e2 = this.zoom, t2 = e2.gesture, a2 = e2.image, i2 = e2.velocity;
          if (t2.$imageEl && t2.$imageEl.length !== 0) {
            if (!a2.isTouched || !a2.isMoved)
              return a2.isTouched = false, void (a2.isMoved = false);
            a2.isTouched = false, a2.isMoved = false;
            var s2 = 300, r2 = 300, n2 = i2.x * s2, l2 = a2.currentX + n2, o2 = i2.y * r2, d2 = a2.currentY + o2;
            i2.x !== 0 && (s2 = Math.abs((l2 - a2.currentX) / i2.x)), i2.y !== 0 && (r2 = Math.abs((d2 - a2.currentY) / i2.y));
            var p2 = Math.max(s2, r2);
            a2.currentX = l2, a2.currentY = d2;
            var u2 = a2.width * e2.scale, c2 = a2.height * e2.scale;
            a2.minX = Math.min(t2.slideWidth / 2 - u2 / 2, 0), a2.maxX = -a2.minX, a2.minY = Math.min(t2.slideHeight / 2 - c2 / 2, 0), a2.maxY = -a2.minY, a2.currentX = Math.max(Math.min(a2.currentX, a2.maxX), a2.minX), a2.currentY = Math.max(Math.min(a2.currentY, a2.maxY), a2.minY), t2.$imageWrapEl.transition(p2).transform("translate3d(" + a2.currentX + "px, " + a2.currentY + "px,0)");
          }
        }, onTransitionEnd: function() {
          var e2 = this, t2 = e2.zoom, a2 = t2.gesture;
          a2.$slideEl && e2.previousIndex !== e2.activeIndex && (a2.$imageEl && a2.$imageEl.transform("translate3d(0,0,0) scale(1)"), a2.$imageWrapEl && a2.$imageWrapEl.transform("translate3d(0,0,0)"), t2.scale = 1, t2.currentScale = 1, a2.$slideEl = void 0, a2.$imageEl = void 0, a2.$imageWrapEl = void 0);
        }, toggle: function(e2) {
          var t2 = this.zoom;
          t2.scale && t2.scale !== 1 ? t2.out() : t2.in(e2);
        }, in: function(e2) {
          var t2, a2, i2, s2, r2, n2, o2, d2, p2, u2, c2, h2, v2, f2, g2, b2, w2 = this, y2 = l(), E2 = w2.zoom, x2 = w2.params.zoom, T2 = E2.gesture, C2 = E2.image;
          (T2.$slideEl || (e2 && e2.target && (T2.$slideEl = m(e2.target).closest("." + w2.params.slideClass)), T2.$slideEl || (w2.params.virtual && w2.params.virtual.enabled && w2.virtual ? T2.$slideEl = w2.$wrapperEl.children("." + w2.params.slideActiveClass) : T2.$slideEl = w2.slides.eq(w2.activeIndex)), T2.$imageEl = T2.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T2.$imageWrapEl = T2.$imageEl.parent("." + x2.containerClass)), T2.$imageEl && T2.$imageEl.length !== 0 && T2.$imageWrapEl && T2.$imageWrapEl.length !== 0) && (T2.$slideEl.addClass("" + x2.zoomedSlideClass), C2.touchesStart.x === void 0 && e2 ? (t2 = e2.type === "touchend" ? e2.changedTouches[0].pageX : e2.pageX, a2 = e2.type === "touchend" ? e2.changedTouches[0].pageY : e2.pageY) : (t2 = C2.touchesStart.x, a2 = C2.touchesStart.y), E2.scale = T2.$imageWrapEl.attr("data-swiper-zoom") || x2.maxRatio, E2.currentScale = T2.$imageWrapEl.attr("data-swiper-zoom") || x2.maxRatio, e2 ? (g2 = T2.$slideEl[0].offsetWidth, b2 = T2.$slideEl[0].offsetHeight, i2 = T2.$slideEl.offset().left + y2.scrollX + g2 / 2 - t2, s2 = T2.$slideEl.offset().top + y2.scrollY + b2 / 2 - a2, o2 = T2.$imageEl[0].offsetWidth, d2 = T2.$imageEl[0].offsetHeight, p2 = o2 * E2.scale, u2 = d2 * E2.scale, v2 = -(c2 = Math.min(g2 / 2 - p2 / 2, 0)), f2 = -(h2 = Math.min(b2 / 2 - u2 / 2, 0)), (r2 = i2 * E2.scale) < c2 && (r2 = c2), r2 > v2 && (r2 = v2), (n2 = s2 * E2.scale) < h2 && (n2 = h2), n2 > f2 && (n2 = f2)) : (r2 = 0, n2 = 0), T2.$imageWrapEl.transition(300).transform("translate3d(" + r2 + "px, " + n2 + "px,0)"), T2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E2.scale + ")"));
        }, out: function() {
          var e2 = this, t2 = e2.zoom, a2 = e2.params.zoom, i2 = t2.gesture;
          i2.$slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? i2.$slideEl = e2.$wrapperEl.children("." + e2.params.slideActiveClass) : i2.$slideEl = e2.slides.eq(e2.activeIndex), i2.$imageEl = i2.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i2.$imageWrapEl = i2.$imageEl.parent("." + a2.containerClass)), i2.$imageEl && i2.$imageEl.length !== 0 && i2.$imageWrapEl && i2.$imageWrapEl.length !== 0 && (t2.scale = 1, t2.currentScale = 1, i2.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i2.$slideEl.removeClass("" + a2.zoomedSlideClass), i2.$slideEl = void 0);
        }, toggleGestures: function(e2) {
          var t2 = this, a2 = t2.zoom, i2 = a2.slideSelector, s2 = a2.passiveListener;
          t2.$wrapperEl[e2]("gesturestart", i2, a2.onGestureStart, s2), t2.$wrapperEl[e2]("gesturechange", i2, a2.onGestureChange, s2), t2.$wrapperEl[e2]("gestureend", i2, a2.onGestureEnd, s2);
        }, enableGestures: function() {
          this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = true, this.zoom.toggleGestures("on"));
        }, disableGestures: function() {
          this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = false, this.zoom.toggleGestures("off"));
        }, enable: function() {
          var e2 = this, t2 = e2.support, a2 = e2.zoom;
          if (!a2.enabled) {
            a2.enabled = true;
            var i2 = !(e2.touchEvents.start !== "touchstart" || !t2.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false }, s2 = !t2.passiveListener || { passive: false, capture: true }, r2 = "." + e2.params.slideClass;
            e2.zoom.passiveListener = i2, e2.zoom.slideSelector = r2, t2.gestures ? (e2.$wrapperEl.on(e2.touchEvents.start, e2.zoom.enableGestures, i2), e2.$wrapperEl.on(e2.touchEvents.end, e2.zoom.disableGestures, i2)) : e2.touchEvents.start === "touchstart" && (e2.$wrapperEl.on(e2.touchEvents.start, r2, a2.onGestureStart, i2), e2.$wrapperEl.on(e2.touchEvents.move, r2, a2.onGestureChange, s2), e2.$wrapperEl.on(e2.touchEvents.end, r2, a2.onGestureEnd, i2), e2.touchEvents.cancel && e2.$wrapperEl.on(e2.touchEvents.cancel, r2, a2.onGestureEnd, i2)), e2.$wrapperEl.on(e2.touchEvents.move, "." + e2.params.zoom.containerClass, a2.onTouchMove, s2);
          }
        }, disable: function() {
          var e2 = this, t2 = e2.zoom;
          if (t2.enabled) {
            var a2 = e2.support;
            e2.zoom.enabled = false;
            var i2 = !(e2.touchEvents.start !== "touchstart" || !a2.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false }, s2 = !a2.passiveListener || { passive: false, capture: true }, r2 = "." + e2.params.slideClass;
            a2.gestures ? (e2.$wrapperEl.off(e2.touchEvents.start, e2.zoom.enableGestures, i2), e2.$wrapperEl.off(e2.touchEvents.end, e2.zoom.disableGestures, i2)) : e2.touchEvents.start === "touchstart" && (e2.$wrapperEl.off(e2.touchEvents.start, r2, t2.onGestureStart, i2), e2.$wrapperEl.off(e2.touchEvents.move, r2, t2.onGestureChange, s2), e2.$wrapperEl.off(e2.touchEvents.end, r2, t2.onGestureEnd, i2), e2.touchEvents.cancel && e2.$wrapperEl.off(e2.touchEvents.cancel, r2, t2.onGestureEnd, i2)), e2.$wrapperEl.off(e2.touchEvents.move, "." + e2.params.zoom.containerClass, t2.onTouchMove, s2);
          }
        } }, se = { loadInSlide: function(e2, t2) {
          t2 === void 0 && (t2 = true);
          var a2 = this, i2 = a2.params.lazy;
          if (e2 !== void 0 && a2.slides.length !== 0) {
            var s2 = a2.virtual && a2.params.virtual.enabled ? a2.$wrapperEl.children("." + a2.params.slideClass + '[data-swiper-slide-index="' + e2 + '"]') : a2.slides.eq(e2), r2 = s2.find("." + i2.elementClass + ":not(." + i2.loadedClass + "):not(." + i2.loadingClass + ")");
            !s2.hasClass(i2.elementClass) || s2.hasClass(i2.loadedClass) || s2.hasClass(i2.loadingClass) || r2.push(s2[0]), r2.length !== 0 && r2.each(function(e3) {
              var r3 = m(e3);
              r3.addClass(i2.loadingClass);
              var n2 = r3.attr("data-background"), l2 = r3.attr("data-src"), o2 = r3.attr("data-srcset"), d2 = r3.attr("data-sizes"), p2 = r3.parent("picture");
              a2.loadImage(r3[0], l2 || n2, o2, d2, false, function() {
                if (a2 != null && a2 && (!a2 || a2.params) && !a2.destroyed) {
                  if (n2 ? (r3.css("background-image", 'url("' + n2 + '")'), r3.removeAttr("data-background")) : (o2 && (r3.attr("srcset", o2), r3.removeAttr("data-srcset")), d2 && (r3.attr("sizes", d2), r3.removeAttr("data-sizes")), p2.length && p2.children("source").each(function(e5) {
                    var t3 = m(e5);
                    t3.attr("data-srcset") && (t3.attr("srcset", t3.attr("data-srcset")), t3.removeAttr("data-srcset"));
                  }), l2 && (r3.attr("src", l2), r3.removeAttr("data-src"))), r3.addClass(i2.loadedClass).removeClass(i2.loadingClass), s2.find("." + i2.preloaderClass).remove(), a2.params.loop && t2) {
                    var e4 = s2.attr("data-swiper-slide-index");
                    if (s2.hasClass(a2.params.slideDuplicateClass)) {
                      var u2 = a2.$wrapperEl.children('[data-swiper-slide-index="' + e4 + '"]:not(.' + a2.params.slideDuplicateClass + ")");
                      a2.lazy.loadInSlide(u2.index(), false);
                    } else {
                      var c2 = a2.$wrapperEl.children("." + a2.params.slideDuplicateClass + '[data-swiper-slide-index="' + e4 + '"]');
                      a2.lazy.loadInSlide(c2.index(), false);
                    }
                  }
                  a2.emit("lazyImageReady", s2[0], r3[0]), a2.params.autoHeight && a2.updateAutoHeight();
                }
              }), a2.emit("lazyImageLoad", s2[0], r3[0]);
            });
          }
        }, load: function() {
          var e2 = this, t2 = e2.$wrapperEl, a2 = e2.params, i2 = e2.slides, s2 = e2.activeIndex, r2 = e2.virtual && a2.virtual.enabled, n2 = a2.lazy, l2 = a2.slidesPerView;
          function o2(e3) {
            if (r2) {
              if (t2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e3 + '"]').length)
                return true;
            } else if (i2[e3])
              return true;
            return false;
          }
          function d2(e3) {
            return r2 ? m(e3).attr("data-swiper-slide-index") : m(e3).index();
          }
          if (l2 === "auto" && (l2 = 0), e2.lazy.initialImageLoaded || (e2.lazy.initialImageLoaded = true), e2.params.watchSlidesVisibility)
            t2.children("." + a2.slideVisibleClass).each(function(t3) {
              var a3 = r2 ? m(t3).attr("data-swiper-slide-index") : m(t3).index();
              e2.lazy.loadInSlide(a3);
            });
          else if (l2 > 1)
            for (var p2 = s2; p2 < s2 + l2; p2 += 1)
              o2(p2) && e2.lazy.loadInSlide(p2);
          else
            e2.lazy.loadInSlide(s2);
          if (n2.loadPrevNext)
            if (l2 > 1 || n2.loadPrevNextAmount && n2.loadPrevNextAmount > 1) {
              for (var u2 = n2.loadPrevNextAmount, c2 = l2, h2 = Math.min(s2 + c2 + Math.max(u2, c2), i2.length), v2 = Math.max(s2 - Math.max(c2, u2), 0), f2 = s2 + l2; f2 < h2; f2 += 1)
                o2(f2) && e2.lazy.loadInSlide(f2);
              for (var g2 = v2; g2 < s2; g2 += 1)
                o2(g2) && e2.lazy.loadInSlide(g2);
            } else {
              var b2 = t2.children("." + a2.slideNextClass);
              b2.length > 0 && e2.lazy.loadInSlide(d2(b2));
              var w2 = t2.children("." + a2.slidePrevClass);
              w2.length > 0 && e2.lazy.loadInSlide(d2(w2));
            }
        }, checkInViewOnLoad: function() {
          var e2 = l(), t2 = this;
          if (t2 && !t2.destroyed) {
            var a2 = t2.params.lazy.scrollingElement ? m(t2.params.lazy.scrollingElement) : m(e2), i2 = a2[0] === e2, s2 = i2 ? e2.innerWidth : a2[0].offsetWidth, r2 = i2 ? e2.innerHeight : a2[0].offsetHeight, n2 = t2.$el.offset(), o2 = false;
            t2.rtlTranslate && (n2.left -= t2.$el[0].scrollLeft);
            for (var d2 = [[n2.left, n2.top], [n2.left + t2.width, n2.top], [n2.left, n2.top + t2.height], [n2.left + t2.width, n2.top + t2.height]], p2 = 0; p2 < d2.length; p2 += 1) {
              var u2 = d2[p2];
              if (u2[0] >= 0 && u2[0] <= s2 && u2[1] >= 0 && u2[1] <= r2) {
                if (u2[0] === 0 && u2[1] === 0)
                  continue;
                o2 = true;
              }
            }
            var c2 = !(t2.touchEvents.start !== "touchstart" || !t2.support.passiveListener || !t2.params.passiveListeners) && { passive: true, capture: false };
            o2 ? (t2.lazy.load(), a2.off("scroll", t2.lazy.checkInViewOnLoad, c2)) : t2.lazy.scrollHandlerAttached || (t2.lazy.scrollHandlerAttached = true, a2.on("scroll", t2.lazy.checkInViewOnLoad, c2));
          }
        } }, re = { LinearSpline: function(e2, t2) {
          var a2, i2, s2, r2, n2, l2 = function(e3, t3) {
            for (i2 = -1, a2 = e3.length; a2 - i2 > 1; )
              e3[s2 = a2 + i2 >> 1] <= t3 ? i2 = s2 : a2 = s2;
            return a2;
          };
          return this.x = e2, this.y = t2, this.lastIndex = e2.length - 1, this.interpolate = function(e3) {
            return e3 ? (n2 = l2(this.x, e3), r2 = n2 - 1, (e3 - this.x[r2]) * (this.y[n2] - this.y[r2]) / (this.x[n2] - this.x[r2]) + this.y[r2]) : 0;
          }, this;
        }, getInterpolateFunction: function(e2) {
          var t2 = this;
          t2.controller.spline || (t2.controller.spline = t2.params.loop ? new re.LinearSpline(t2.slidesGrid, e2.slidesGrid) : new re.LinearSpline(t2.snapGrid, e2.snapGrid));
        }, setTranslate: function(e2, t2) {
          var a2, i2, s2 = this, r2 = s2.controller.control, n2 = s2.constructor;
          function l2(e3) {
            var t3 = s2.rtlTranslate ? -s2.translate : s2.translate;
            s2.params.controller.by === "slide" && (s2.controller.getInterpolateFunction(e3), i2 = -s2.controller.spline.interpolate(-t3)), i2 && s2.params.controller.by !== "container" || (a2 = (e3.maxTranslate() - e3.minTranslate()) / (s2.maxTranslate() - s2.minTranslate()), i2 = (t3 - s2.minTranslate()) * a2 + e3.minTranslate()), s2.params.controller.inverse && (i2 = e3.maxTranslate() - i2), e3.updateProgress(i2), e3.setTranslate(i2, s2), e3.updateActiveIndex(), e3.updateSlidesClasses();
          }
          if (Array.isArray(r2))
            for (var o2 = 0; o2 < r2.length; o2 += 1)
              r2[o2] !== t2 && r2[o2] instanceof n2 && l2(r2[o2]);
          else
            r2 instanceof n2 && t2 !== r2 && l2(r2);
        }, setTransition: function(e2, t2) {
          var a2, i2 = this, s2 = i2.constructor, r2 = i2.controller.control;
          function n2(t3) {
            t3.setTransition(e2, i2), e2 !== 0 && (t3.transitionStart(), t3.params.autoHeight && E(function() {
              t3.updateAutoHeight();
            }), t3.$wrapperEl.transitionEnd(function() {
              r2 && (t3.params.loop && i2.params.controller.by === "slide" && t3.loopFix(), t3.transitionEnd());
            }));
          }
          if (Array.isArray(r2))
            for (a2 = 0; a2 < r2.length; a2 += 1)
              r2[a2] !== t2 && r2[a2] instanceof s2 && n2(r2[a2]);
          else
            r2 instanceof s2 && t2 !== r2 && n2(r2);
        } }, ne = { getRandomNumber: function(e2) {
          e2 === void 0 && (e2 = 16);
          return "x".repeat(e2).replace(/x/g, function() {
            return Math.round(16 * Math.random()).toString(16);
          });
        }, makeElFocusable: function(e2) {
          return e2.attr("tabIndex", "0"), e2;
        }, makeElNotFocusable: function(e2) {
          return e2.attr("tabIndex", "-1"), e2;
        }, addElRole: function(e2, t2) {
          return e2.attr("role", t2), e2;
        }, addElRoleDescription: function(e2, t2) {
          return e2.attr("aria-roledescription", t2), e2;
        }, addElControls: function(e2, t2) {
          return e2.attr("aria-controls", t2), e2;
        }, addElLabel: function(e2, t2) {
          return e2.attr("aria-label", t2), e2;
        }, addElId: function(e2, t2) {
          return e2.attr("id", t2), e2;
        }, addElLive: function(e2, t2) {
          return e2.attr("aria-live", t2), e2;
        }, disableEl: function(e2) {
          return e2.attr("aria-disabled", true), e2;
        }, enableEl: function(e2) {
          return e2.attr("aria-disabled", false), e2;
        }, onEnterOrSpaceKey: function(e2) {
          if (e2.keyCode === 13 || e2.keyCode === 32) {
            var t2 = this, a2 = t2.params.a11y, i2 = m(e2.target);
            t2.navigation && t2.navigation.$nextEl && i2.is(t2.navigation.$nextEl) && (t2.isEnd && !t2.params.loop || t2.slideNext(), t2.isEnd ? t2.a11y.notify(a2.lastSlideMessage) : t2.a11y.notify(a2.nextSlideMessage)), t2.navigation && t2.navigation.$prevEl && i2.is(t2.navigation.$prevEl) && (t2.isBeginning && !t2.params.loop || t2.slidePrev(), t2.isBeginning ? t2.a11y.notify(a2.firstSlideMessage) : t2.a11y.notify(a2.prevSlideMessage)), t2.pagination && i2.is(P(t2.params.pagination.bulletClass)) && i2[0].click();
          }
        }, notify: function(e2) {
          var t2 = this.a11y.liveRegion;
          t2.length !== 0 && (t2.html(""), t2.html(e2));
        }, updateNavigation: function() {
          var e2 = this;
          if (!e2.params.loop && e2.navigation) {
            var t2 = e2.navigation, a2 = t2.$nextEl, i2 = t2.$prevEl;
            i2 && i2.length > 0 && (e2.isBeginning ? (e2.a11y.disableEl(i2), e2.a11y.makeElNotFocusable(i2)) : (e2.a11y.enableEl(i2), e2.a11y.makeElFocusable(i2))), a2 && a2.length > 0 && (e2.isEnd ? (e2.a11y.disableEl(a2), e2.a11y.makeElNotFocusable(a2)) : (e2.a11y.enableEl(a2), e2.a11y.makeElFocusable(a2)));
          }
        }, updatePagination: function() {
          var e2 = this, t2 = e2.params.a11y;
          e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.bullets.each(function(a2) {
            var i2 = m(a2);
            e2.a11y.makeElFocusable(i2), e2.params.pagination.renderBullet || (e2.a11y.addElRole(i2, "button"), e2.a11y.addElLabel(i2, t2.paginationBulletMessage.replace(/\{\{index\}\}/, i2.index() + 1)));
          });
        }, init: function() {
          var e2 = this, t2 = e2.params.a11y;
          e2.$el.append(e2.a11y.liveRegion);
          var a2 = e2.$el;
          t2.containerRoleDescriptionMessage && e2.a11y.addElRoleDescription(a2, t2.containerRoleDescriptionMessage), t2.containerMessage && e2.a11y.addElLabel(a2, t2.containerMessage);
          var i2 = e2.$wrapperEl, s2 = i2.attr("id") || "swiper-wrapper-" + e2.a11y.getRandomNumber(16), r2 = e2.params.autoplay && e2.params.autoplay.enabled ? "off" : "polite";
          e2.a11y.addElId(i2, s2), e2.a11y.addElLive(i2, r2), t2.itemRoleDescriptionMessage && e2.a11y.addElRoleDescription(m(e2.slides), t2.itemRoleDescriptionMessage), e2.a11y.addElRole(m(e2.slides), t2.slideRole);
          var n2, l2, o2 = e2.params.loop ? e2.slides.filter(function(t3) {
            return !t3.classList.contains(e2.params.slideDuplicateClass);
          }).length : e2.slides.length;
          e2.slides.each(function(a3, i3) {
            var s3 = m(a3), r3 = e2.params.loop ? parseInt(s3.attr("data-swiper-slide-index"), 10) : i3, n3 = t2.slideLabelMessage.replace(/\{\{index\}\}/, r3 + 1).replace(/\{\{slidesLength\}\}/, o2);
            e2.a11y.addElLabel(s3, n3);
          }), e2.navigation && e2.navigation.$nextEl && (n2 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (l2 = e2.navigation.$prevEl), n2 && n2.length && (e2.a11y.makeElFocusable(n2), n2[0].tagName !== "BUTTON" && (e2.a11y.addElRole(n2, "button"), n2.on("keydown", e2.a11y.onEnterOrSpaceKey)), e2.a11y.addElLabel(n2, t2.nextSlideMessage), e2.a11y.addElControls(n2, s2)), l2 && l2.length && (e2.a11y.makeElFocusable(l2), l2[0].tagName !== "BUTTON" && (e2.a11y.addElRole(l2, "button"), l2.on("keydown", e2.a11y.onEnterOrSpaceKey)), e2.a11y.addElLabel(l2, t2.prevSlideMessage), e2.a11y.addElControls(l2, s2)), e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.$el.on("keydown", P(e2.params.pagination.bulletClass), e2.a11y.onEnterOrSpaceKey);
        }, destroy: function() {
          var e2, t2, a2 = this;
          a2.a11y.liveRegion && a2.a11y.liveRegion.length > 0 && a2.a11y.liveRegion.remove(), a2.navigation && a2.navigation.$nextEl && (e2 = a2.navigation.$nextEl), a2.navigation && a2.navigation.$prevEl && (t2 = a2.navigation.$prevEl), e2 && e2.off("keydown", a2.a11y.onEnterOrSpaceKey), t2 && t2.off("keydown", a2.a11y.onEnterOrSpaceKey), a2.pagination && a2.params.pagination.clickable && a2.pagination.bullets && a2.pagination.bullets.length && a2.pagination.$el.off("keydown", P(a2.params.pagination.bulletClass), a2.a11y.onEnterOrSpaceKey);
        } }, le = { init: function() {
          var e2 = this, t2 = l();
          if (e2.params.history) {
            if (!t2.history || !t2.history.pushState)
              return e2.params.history.enabled = false, void (e2.params.hashNavigation.enabled = true);
            var a2 = e2.history;
            a2.initialized = true, a2.paths = le.getPathValues(e2.params.url), (a2.paths.key || a2.paths.value) && (a2.scrollToSlide(0, a2.paths.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || t2.addEventListener("popstate", e2.history.setHistoryPopState));
          }
        }, destroy: function() {
          var e2 = l();
          this.params.history.replaceState || e2.removeEventListener("popstate", this.history.setHistoryPopState);
        }, setHistoryPopState: function() {
          var e2 = this;
          e2.history.paths = le.getPathValues(e2.params.url), e2.history.scrollToSlide(e2.params.speed, e2.history.paths.value, false);
        }, getPathValues: function(e2) {
          var t2 = l(), a2 = (e2 ? new URL(e2) : t2.location).pathname.slice(1).split("/").filter(function(e3) {
            return e3 !== "";
          }), i2 = a2.length;
          return { key: a2[i2 - 2], value: a2[i2 - 1] };
        }, setHistory: function(e2, t2) {
          var a2 = this, i2 = l();
          if (a2.history.initialized && a2.params.history.enabled) {
            var s2;
            s2 = a2.params.url ? new URL(a2.params.url) : i2.location;
            var r2 = a2.slides.eq(t2), n2 = le.slugify(r2.attr("data-history"));
            if (a2.params.history.root.length > 0) {
              var o2 = a2.params.history.root;
              o2[o2.length - 1] === "/" && (o2 = o2.slice(0, o2.length - 1)), n2 = o2 + "/" + e2 + "/" + n2;
            } else
              s2.pathname.includes(e2) || (n2 = e2 + "/" + n2);
            var d2 = i2.history.state;
            d2 && d2.value === n2 || (a2.params.history.replaceState ? i2.history.replaceState({ value: n2 }, null, n2) : i2.history.pushState({ value: n2 }, null, n2));
          }
        }, slugify: function(e2) {
          return e2.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function(e2, t2, a2) {
          var i2 = this;
          if (t2)
            for (var s2 = 0, r2 = i2.slides.length; s2 < r2; s2 += 1) {
              var n2 = i2.slides.eq(s2);
              if (le.slugify(n2.attr("data-history")) === t2 && !n2.hasClass(i2.params.slideDuplicateClass)) {
                var l2 = n2.index();
                i2.slideTo(l2, e2, a2);
              }
            }
          else
            i2.slideTo(0, e2, a2);
        } }, oe = { onHashChange: function() {
          var e2 = this, t2 = r();
          e2.emit("hashChange");
          var a2 = t2.location.hash.replace("#", "");
          if (a2 !== e2.slides.eq(e2.activeIndex).attr("data-hash")) {
            var i2 = e2.$wrapperEl.children("." + e2.params.slideClass + '[data-hash="' + a2 + '"]').index();
            if (i2 === void 0)
              return;
            e2.slideTo(i2);
          }
        }, setHash: function() {
          var e2 = this, t2 = l(), a2 = r();
          if (e2.hashNavigation.initialized && e2.params.hashNavigation.enabled)
            if (e2.params.hashNavigation.replaceState && t2.history && t2.history.replaceState)
              t2.history.replaceState(null, null, "#" + e2.slides.eq(e2.activeIndex).attr("data-hash") || ""), e2.emit("hashSet");
            else {
              var i2 = e2.slides.eq(e2.activeIndex), s2 = i2.attr("data-hash") || i2.attr("data-history");
              a2.location.hash = s2 || "", e2.emit("hashSet");
            }
        }, init: function() {
          var e2 = this, t2 = r(), a2 = l();
          if (!(!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled)) {
            e2.hashNavigation.initialized = true;
            var i2 = t2.location.hash.replace("#", "");
            if (i2)
              for (var s2 = 0, n2 = e2.slides.length; s2 < n2; s2 += 1) {
                var o2 = e2.slides.eq(s2);
                if ((o2.attr("data-hash") || o2.attr("data-history")) === i2 && !o2.hasClass(e2.params.slideDuplicateClass)) {
                  var d2 = o2.index();
                  e2.slideTo(d2, 0, e2.params.runCallbacksOnInit, true);
                }
              }
            e2.params.hashNavigation.watchState && m(a2).on("hashchange", e2.hashNavigation.onHashChange);
          }
        }, destroy: function() {
          var e2 = l();
          this.params.hashNavigation.watchState && m(e2).off("hashchange", this.hashNavigation.onHashChange);
        } }, de = { run: function() {
          var e2 = this, t2 = e2.slides.eq(e2.activeIndex), a2 = e2.params.autoplay.delay;
          t2.attr("data-swiper-autoplay") && (a2 = t2.attr("data-swiper-autoplay") || e2.params.autoplay.delay), clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = E(function() {
            var t3;
            e2.params.autoplay.reverseDirection ? e2.params.loop ? (e2.loopFix(), t3 = e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isBeginning ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t3 = e2.slideTo(e2.slides.length - 1, e2.params.speed, true, true), e2.emit("autoplay")) : (t3 = e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.params.loop ? (e2.loopFix(), t3 = e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isEnd ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t3 = e2.slideTo(0, e2.params.speed, true, true), e2.emit("autoplay")) : (t3 = e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay")), (e2.params.cssMode && e2.autoplay.running || t3 === false) && e2.autoplay.run();
          }, a2);
        }, start: function() {
          var e2 = this;
          return e2.autoplay.timeout === void 0 && (!e2.autoplay.running && (e2.autoplay.running = true, e2.emit("autoplayStart"), e2.autoplay.run(), true));
        }, stop: function() {
          var e2 = this;
          return !!e2.autoplay.running && (e2.autoplay.timeout !== void 0 && (e2.autoplay.timeout && (clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = void 0), e2.autoplay.running = false, e2.emit("autoplayStop"), true));
        }, pause: function(e2) {
          var t2 = this;
          t2.autoplay.running && (t2.autoplay.paused || (t2.autoplay.timeout && clearTimeout(t2.autoplay.timeout), t2.autoplay.paused = true, e2 !== 0 && t2.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function(e3) {
            t2.$wrapperEl[0].addEventListener(e3, t2.autoplay.onTransitionEnd);
          }) : (t2.autoplay.paused = false, t2.autoplay.run())));
        }, onVisibilityChange: function() {
          var e2 = this, t2 = r();
          t2.visibilityState === "hidden" && e2.autoplay.running && e2.autoplay.pause(), t2.visibilityState === "visible" && e2.autoplay.paused && (e2.autoplay.run(), e2.autoplay.paused = false);
        }, onTransitionEnd: function(e2) {
          var t2 = this;
          t2 && !t2.destroyed && t2.$wrapperEl && e2.target === t2.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function(e3) {
            t2.$wrapperEl[0].removeEventListener(e3, t2.autoplay.onTransitionEnd);
          }), t2.autoplay.paused = false, t2.autoplay.running ? t2.autoplay.run() : t2.autoplay.stop());
        }, onMouseEnter: function() {
          var e2 = this;
          e2.params.autoplay.disableOnInteraction ? e2.autoplay.stop() : e2.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function(t2) {
            e2.$wrapperEl[0].removeEventListener(t2, e2.autoplay.onTransitionEnd);
          });
        }, onMouseLeave: function() {
          var e2 = this;
          e2.params.autoplay.disableOnInteraction || (e2.autoplay.paused = false, e2.autoplay.run());
        }, attachMouseEvents: function() {
          var e2 = this;
          e2.params.autoplay.pauseOnMouseEnter && (e2.$el.on("mouseenter", e2.autoplay.onMouseEnter), e2.$el.on("mouseleave", e2.autoplay.onMouseLeave));
        }, detachMouseEvents: function() {
          var e2 = this;
          e2.$el.off("mouseenter", e2.autoplay.onMouseEnter), e2.$el.off("mouseleave", e2.autoplay.onMouseLeave);
        } }, pe = { setTranslate: function() {
          for (var e2 = this, t2 = e2.slides, a2 = 0; a2 < t2.length; a2 += 1) {
            var i2 = e2.slides.eq(a2), s2 = -i2[0].swiperSlideOffset;
            e2.params.virtualTranslate || (s2 -= e2.translate);
            var r2 = 0;
            e2.isHorizontal() || (r2 = s2, s2 = 0);
            var n2 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i2[0].progress), 0) : 1 + Math.min(Math.max(i2[0].progress, -1), 0);
            i2.css({ opacity: n2 }).transform("translate3d(" + s2 + "px, " + r2 + "px, 0px)");
          }
        }, setTransition: function(e2) {
          var t2 = this, a2 = t2.slides, i2 = t2.$wrapperEl;
          if (a2.transition(e2), t2.params.virtualTranslate && e2 !== 0) {
            var s2 = false;
            a2.transitionEnd(function() {
              if (!s2 && t2 && !t2.destroyed) {
                s2 = true, t2.animating = false;
                for (var e3 = ["webkitTransitionEnd", "transitionend"], a3 = 0; a3 < e3.length; a3 += 1)
                  i2.trigger(e3[a3]);
              }
            });
          }
        } }, ue = { setTranslate: function() {
          var e2, t2 = this, a2 = t2.$el, i2 = t2.$wrapperEl, s2 = t2.slides, r2 = t2.width, n2 = t2.height, l2 = t2.rtlTranslate, o2 = t2.size, d2 = t2.browser, p2 = t2.params.cubeEffect, u2 = t2.isHorizontal(), c2 = t2.virtual && t2.params.virtual.enabled, h2 = 0;
          p2.shadow && (u2 ? ((e2 = i2.find(".swiper-cube-shadow")).length === 0 && (e2 = m('<div class="swiper-cube-shadow"></div>'), i2.append(e2)), e2.css({ height: r2 + "px" })) : (e2 = a2.find(".swiper-cube-shadow")).length === 0 && (e2 = m('<div class="swiper-cube-shadow"></div>'), a2.append(e2)));
          for (var v2 = 0; v2 < s2.length; v2 += 1) {
            var f2 = s2.eq(v2), g2 = v2;
            c2 && (g2 = parseInt(f2.attr("data-swiper-slide-index"), 10));
            var b2 = 90 * g2, w2 = Math.floor(b2 / 360);
            l2 && (b2 = -b2, w2 = Math.floor(-b2 / 360));
            var y2 = Math.max(Math.min(f2[0].progress, 1), -1), E2 = 0, x2 = 0, T2 = 0;
            g2 % 4 == 0 ? (E2 = 4 * -w2 * o2, T2 = 0) : (g2 - 1) % 4 == 0 ? (E2 = 0, T2 = 4 * -w2 * o2) : (g2 - 2) % 4 == 0 ? (E2 = o2 + 4 * w2 * o2, T2 = o2) : (g2 - 3) % 4 == 0 && (E2 = -o2, T2 = 3 * o2 + 4 * o2 * w2), l2 && (E2 = -E2), u2 || (x2 = E2, E2 = 0);
            var C2 = "rotateX(" + (u2 ? 0 : -b2) + "deg) rotateY(" + (u2 ? b2 : 0) + "deg) translate3d(" + E2 + "px, " + x2 + "px, " + T2 + "px)";
            if (y2 <= 1 && y2 > -1 && (h2 = 90 * g2 + 90 * y2, l2 && (h2 = 90 * -g2 - 90 * y2)), f2.transform(C2), p2.slideShadows) {
              var S2 = u2 ? f2.find(".swiper-slide-shadow-left") : f2.find(".swiper-slide-shadow-top"), M2 = u2 ? f2.find(".swiper-slide-shadow-right") : f2.find(".swiper-slide-shadow-bottom");
              S2.length === 0 && (S2 = m('<div class="swiper-slide-shadow-' + (u2 ? "left" : "top") + '"></div>'), f2.append(S2)), M2.length === 0 && (M2 = m('<div class="swiper-slide-shadow-' + (u2 ? "right" : "bottom") + '"></div>'), f2.append(M2)), S2.length && (S2[0].style.opacity = Math.max(-y2, 0)), M2.length && (M2[0].style.opacity = Math.max(y2, 0));
            }
          }
          if (i2.css({ "-webkit-transform-origin": "50% 50% -" + o2 / 2 + "px", "-moz-transform-origin": "50% 50% -" + o2 / 2 + "px", "-ms-transform-origin": "50% 50% -" + o2 / 2 + "px", "transform-origin": "50% 50% -" + o2 / 2 + "px" }), p2.shadow)
            if (u2)
              e2.transform("translate3d(0px, " + (r2 / 2 + p2.shadowOffset) + "px, " + -r2 / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p2.shadowScale + ")");
            else {
              var z2 = Math.abs(h2) - 90 * Math.floor(Math.abs(h2) / 90), P2 = 1.5 - (Math.sin(2 * z2 * Math.PI / 360) / 2 + Math.cos(2 * z2 * Math.PI / 360) / 2), k2 = p2.shadowScale, $2 = p2.shadowScale / P2, L2 = p2.shadowOffset;
              e2.transform("scale3d(" + k2 + ", 1, " + $2 + ") translate3d(0px, " + (n2 / 2 + L2) + "px, " + -n2 / 2 / $2 + "px) rotateX(-90deg)");
            }
          var I2 = d2.isSafari || d2.isWebView ? -o2 / 2 : 0;
          i2.transform("translate3d(0px,0," + I2 + "px) rotateX(" + (t2.isHorizontal() ? 0 : h2) + "deg) rotateY(" + (t2.isHorizontal() ? -h2 : 0) + "deg)");
        }, setTransition: function(e2) {
          var t2 = this, a2 = t2.$el;
          t2.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t2.params.cubeEffect.shadow && !t2.isHorizontal() && a2.find(".swiper-cube-shadow").transition(e2);
        } }, ce = { setTranslate: function() {
          for (var e2 = this, t2 = e2.slides, a2 = e2.rtlTranslate, i2 = 0; i2 < t2.length; i2 += 1) {
            var s2 = t2.eq(i2), r2 = s2[0].progress;
            e2.params.flipEffect.limitRotation && (r2 = Math.max(Math.min(s2[0].progress, 1), -1));
            var n2 = -180 * r2, l2 = 0, o2 = -s2[0].swiperSlideOffset, d2 = 0;
            if (e2.isHorizontal() ? a2 && (n2 = -n2) : (d2 = o2, o2 = 0, l2 = -n2, n2 = 0), s2[0].style.zIndex = -Math.abs(Math.round(r2)) + t2.length, e2.params.flipEffect.slideShadows) {
              var p2 = e2.isHorizontal() ? s2.find(".swiper-slide-shadow-left") : s2.find(".swiper-slide-shadow-top"), u2 = e2.isHorizontal() ? s2.find(".swiper-slide-shadow-right") : s2.find(".swiper-slide-shadow-bottom");
              p2.length === 0 && (p2 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "left" : "top") + '"></div>'), s2.append(p2)), u2.length === 0 && (u2 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "right" : "bottom") + '"></div>'), s2.append(u2)), p2.length && (p2[0].style.opacity = Math.max(-r2, 0)), u2.length && (u2[0].style.opacity = Math.max(r2, 0));
            }
            s2.transform("translate3d(" + o2 + "px, " + d2 + "px, 0px) rotateX(" + l2 + "deg) rotateY(" + n2 + "deg)");
          }
        }, setTransition: function(e2) {
          var t2 = this, a2 = t2.slides, i2 = t2.activeIndex, s2 = t2.$wrapperEl;
          if (a2.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t2.params.virtualTranslate && e2 !== 0) {
            var r2 = false;
            a2.eq(i2).transitionEnd(function() {
              if (!r2 && t2 && !t2.destroyed) {
                r2 = true, t2.animating = false;
                for (var e3 = ["webkitTransitionEnd", "transitionend"], a3 = 0; a3 < e3.length; a3 += 1)
                  s2.trigger(e3[a3]);
              }
            });
          }
        } }, he = { setTranslate: function() {
          for (var e2 = this, t2 = e2.width, a2 = e2.height, i2 = e2.slides, s2 = e2.slidesSizesGrid, r2 = e2.params.coverflowEffect, n2 = e2.isHorizontal(), l2 = e2.translate, o2 = n2 ? t2 / 2 - l2 : a2 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, p2 = r2.depth, u2 = 0, c2 = i2.length; u2 < c2; u2 += 1) {
            var h2 = i2.eq(u2), v2 = s2[u2], f2 = (o2 - h2[0].swiperSlideOffset - v2 / 2) / v2 * r2.modifier, g2 = n2 ? d2 * f2 : 0, b2 = n2 ? 0 : d2 * f2, w2 = -p2 * Math.abs(f2), y2 = r2.stretch;
            typeof y2 == "string" && y2.indexOf("%") !== -1 && (y2 = parseFloat(r2.stretch) / 100 * v2);
            var E2 = n2 ? 0 : y2 * f2, x2 = n2 ? y2 * f2 : 0, T2 = 1 - (1 - r2.scale) * Math.abs(f2);
            Math.abs(x2) < 1e-3 && (x2 = 0), Math.abs(E2) < 1e-3 && (E2 = 0), Math.abs(w2) < 1e-3 && (w2 = 0), Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(b2) < 1e-3 && (b2 = 0), Math.abs(T2) < 1e-3 && (T2 = 0);
            var C2 = "translate3d(" + x2 + "px," + E2 + "px," + w2 + "px)  rotateX(" + b2 + "deg) rotateY(" + g2 + "deg) scale(" + T2 + ")";
            if (h2.transform(C2), h2[0].style.zIndex = 1 - Math.abs(Math.round(f2)), r2.slideShadows) {
              var S2 = n2 ? h2.find(".swiper-slide-shadow-left") : h2.find(".swiper-slide-shadow-top"), M2 = n2 ? h2.find(".swiper-slide-shadow-right") : h2.find(".swiper-slide-shadow-bottom");
              S2.length === 0 && (S2 = m('<div class="swiper-slide-shadow-' + (n2 ? "left" : "top") + '"></div>'), h2.append(S2)), M2.length === 0 && (M2 = m('<div class="swiper-slide-shadow-' + (n2 ? "right" : "bottom") + '"></div>'), h2.append(M2)), S2.length && (S2[0].style.opacity = f2 > 0 ? f2 : 0), M2.length && (M2[0].style.opacity = -f2 > 0 ? -f2 : 0);
            }
          }
        }, setTransition: function(e2) {
          this.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2);
        } }, ve = { init: function() {
          var e2 = this, t2 = e2.params.thumbs;
          if (e2.thumbs.initialized)
            return false;
          e2.thumbs.initialized = true;
          var a2 = e2.constructor;
          return t2.swiper instanceof a2 ? (e2.thumbs.swiper = t2.swiper, M(e2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), M(e2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false })) : C(t2.swiper) && (e2.thumbs.swiper = new a2(M({}, t2.swiper, { watchSlidesVisibility: true, watchSlidesProgress: true, slideToClickedSlide: false })), e2.thumbs.swiperCreated = true), e2.thumbs.swiper.$el.addClass(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", e2.thumbs.onThumbClick), true;
        }, onThumbClick: function() {
          var e2 = this, t2 = e2.thumbs.swiper;
          if (t2) {
            var a2 = t2.clickedIndex, i2 = t2.clickedSlide;
            if (!(i2 && m(i2).hasClass(e2.params.thumbs.slideThumbActiveClass) || a2 == null)) {
              var s2;
              if (s2 = t2.params.loop ? parseInt(m(t2.clickedSlide).attr("data-swiper-slide-index"), 10) : a2, e2.params.loop) {
                var r2 = e2.activeIndex;
                e2.slides.eq(r2).hasClass(e2.params.slideDuplicateClass) && (e2.loopFix(), e2._clientLeft = e2.$wrapperEl[0].clientLeft, r2 = e2.activeIndex);
                var n2 = e2.slides.eq(r2).prevAll('[data-swiper-slide-index="' + s2 + '"]').eq(0).index(), l2 = e2.slides.eq(r2).nextAll('[data-swiper-slide-index="' + s2 + '"]').eq(0).index();
                s2 = n2 === void 0 ? l2 : l2 === void 0 ? n2 : l2 - r2 < r2 - n2 ? l2 : n2;
              }
              e2.slideTo(s2);
            }
          }
        }, update: function(e2) {
          var t2 = this, a2 = t2.thumbs.swiper;
          if (a2) {
            var i2 = a2.params.slidesPerView === "auto" ? a2.slidesPerViewDynamic() : a2.params.slidesPerView, s2 = t2.params.thumbs.autoScrollOffset, r2 = s2 && !a2.params.loop;
            if (t2.realIndex !== a2.realIndex || r2) {
              var n2, l2, o2 = a2.activeIndex;
              if (a2.params.loop) {
                a2.slides.eq(o2).hasClass(a2.params.slideDuplicateClass) && (a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft, o2 = a2.activeIndex);
                var d2 = a2.slides.eq(o2).prevAll('[data-swiper-slide-index="' + t2.realIndex + '"]').eq(0).index(), p2 = a2.slides.eq(o2).nextAll('[data-swiper-slide-index="' + t2.realIndex + '"]').eq(0).index();
                n2 = d2 === void 0 ? p2 : p2 === void 0 ? d2 : p2 - o2 == o2 - d2 ? a2.params.slidesPerGroup > 1 ? p2 : o2 : p2 - o2 < o2 - d2 ? p2 : d2, l2 = t2.activeIndex > t2.previousIndex ? "next" : "prev";
              } else
                l2 = (n2 = t2.realIndex) > t2.previousIndex ? "next" : "prev";
              r2 && (n2 += l2 === "next" ? s2 : -1 * s2), a2.visibleSlidesIndexes && a2.visibleSlidesIndexes.indexOf(n2) < 0 && (a2.params.centeredSlides ? n2 = n2 > o2 ? n2 - Math.floor(i2 / 2) + 1 : n2 + Math.floor(i2 / 2) - 1 : n2 > o2 && a2.params.slidesPerGroup, a2.slideTo(n2, e2 ? 0 : void 0));
            }
            var u2 = 1, c2 = t2.params.thumbs.slideThumbActiveClass;
            if (t2.params.slidesPerView > 1 && !t2.params.centeredSlides && (u2 = t2.params.slidesPerView), t2.params.thumbs.multipleActiveThumbs || (u2 = 1), u2 = Math.floor(u2), a2.slides.removeClass(c2), a2.params.loop || a2.params.virtual && a2.params.virtual.enabled)
              for (var h2 = 0; h2 < u2; h2 += 1)
                a2.$wrapperEl.children('[data-swiper-slide-index="' + (t2.realIndex + h2) + '"]').addClass(c2);
            else
              for (var v2 = 0; v2 < u2; v2 += 1)
                a2.slides.eq(t2.realIndex + v2).addClass(c2);
          }
        } }, fe = [U, Z, { name: "mousewheel", params: { mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }, create: function() {
          z(this, { mousewheel: { enabled: false, lastScrollTime: x(), lastEventBeforeSnap: void 0, recentWheelEvents: [], enable: J.enable, disable: J.disable, handle: J.handle, handleMouseEnter: J.handleMouseEnter, handleMouseLeave: J.handleMouseLeave, animateSlider: J.animateSlider, releaseScroll: J.releaseScroll } });
        }, on: { init: function(e2) {
          !e2.params.mousewheel.enabled && e2.params.cssMode && e2.mousewheel.disable(), e2.params.mousewheel.enabled && e2.mousewheel.enable();
        }, destroy: function(e2) {
          e2.params.cssMode && e2.mousewheel.enable(), e2.mousewheel.enabled && e2.mousewheel.disable();
        } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function() {
          z(this, { navigation: t({}, Q) });
        }, on: { init: function(e2) {
          e2.navigation.init(), e2.navigation.update();
        }, toEdge: function(e2) {
          e2.navigation.update();
        }, fromEdge: function(e2) {
          e2.navigation.update();
        }, destroy: function(e2) {
          e2.navigation.destroy();
        }, "enable disable": function(e2) {
          var t2 = e2.navigation, a2 = t2.$nextEl, i2 = t2.$prevEl;
          a2 && a2[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass), i2 && i2[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass);
        }, click: function(e2, t2) {
          var a2 = e2.navigation, i2 = a2.$nextEl, s2 = a2.$prevEl, r2 = t2.target;
          if (e2.params.navigation.hideOnClick && !m(r2).is(s2) && !m(r2).is(i2)) {
            if (e2.pagination && e2.params.pagination && e2.params.pagination.clickable && (e2.pagination.el === r2 || e2.pagination.el.contains(r2)))
              return;
            var n2;
            i2 ? n2 = i2.hasClass(e2.params.navigation.hiddenClass) : s2 && (n2 = s2.hasClass(e2.params.navigation.hiddenClass)), n2 === true ? e2.emit("navigationShow") : e2.emit("navigationHide"), i2 && i2.toggleClass(e2.params.navigation.hiddenClass), s2 && s2.toggleClass(e2.params.navigation.hiddenClass);
          }
        } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: function(e2) {
          return e2;
        }, formatFractionTotal: function(e2) {
          return e2;
        }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() {
          z(this, { pagination: t({ dynamicBulletIndex: 0 }, ee) });
        }, on: { init: function(e2) {
          e2.pagination.init(), e2.pagination.render(), e2.pagination.update();
        }, activeIndexChange: function(e2) {
          (e2.params.loop || e2.snapIndex === void 0) && e2.pagination.update();
        }, snapIndexChange: function(e2) {
          e2.params.loop || e2.pagination.update();
        }, slidesLengthChange: function(e2) {
          e2.params.loop && (e2.pagination.render(), e2.pagination.update());
        }, snapGridLengthChange: function(e2) {
          e2.params.loop || (e2.pagination.render(), e2.pagination.update());
        }, destroy: function(e2) {
          e2.pagination.destroy();
        }, "enable disable": function(e2) {
          var t2 = e2.pagination.$el;
          t2 && t2[e2.enabled ? "removeClass" : "addClass"](e2.params.pagination.lockClass);
        }, click: function(e2, t2) {
          var a2 = t2.target;
          if (e2.params.pagination.el && e2.params.pagination.hideOnClick && e2.pagination.$el.length > 0 && !m(a2).hasClass(e2.params.pagination.bulletClass)) {
            if (e2.navigation && (e2.navigation.nextEl && a2 === e2.navigation.nextEl || e2.navigation.prevEl && a2 === e2.navigation.prevEl))
              return;
            e2.pagination.$el.hasClass(e2.params.pagination.hiddenClass) === true ? e2.emit("paginationShow") : e2.emit("paginationHide"), e2.pagination.$el.toggleClass(e2.params.pagination.hiddenClass);
          }
        } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() {
          z(this, { scrollbar: t({ isTouched: false, timeout: null, dragTimeout: null }, te) });
        }, on: { init: function(e2) {
          e2.scrollbar.init(), e2.scrollbar.updateSize(), e2.scrollbar.setTranslate();
        }, update: function(e2) {
          e2.scrollbar.updateSize();
        }, resize: function(e2) {
          e2.scrollbar.updateSize();
        }, observerUpdate: function(e2) {
          e2.scrollbar.updateSize();
        }, setTranslate: function(e2) {
          e2.scrollbar.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.scrollbar.setTransition(t2);
        }, "enable disable": function(e2) {
          var t2 = e2.scrollbar.$el;
          t2 && t2[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
        }, destroy: function(e2) {
          e2.scrollbar.destroy();
        } } }, { name: "parallax", params: { parallax: { enabled: false } }, create: function() {
          z(this, { parallax: t({}, ae) });
        }, on: { beforeInit: function(e2) {
          e2.params.parallax.enabled && (e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
        }, init: function(e2) {
          e2.params.parallax.enabled && e2.parallax.setTranslate();
        }, setTranslate: function(e2) {
          e2.params.parallax.enabled && e2.parallax.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.params.parallax.enabled && e2.parallax.setTransition(t2);
        } } }, { name: "zoom", params: { zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function() {
          var e2 = this;
          z(e2, { zoom: t({ enabled: false, scale: 1, currentScale: 1, isScaling: false, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }, ie) });
          var a2 = 1;
          Object.defineProperty(e2.zoom, "scale", { get: function() {
            return a2;
          }, set: function(t2) {
            if (a2 !== t2) {
              var i2 = e2.zoom.gesture.$imageEl ? e2.zoom.gesture.$imageEl[0] : void 0, s2 = e2.zoom.gesture.$slideEl ? e2.zoom.gesture.$slideEl[0] : void 0;
              e2.emit("zoomChange", t2, i2, s2);
            }
            a2 = t2;
          } });
        }, on: { init: function(e2) {
          e2.params.zoom.enabled && e2.zoom.enable();
        }, destroy: function(e2) {
          e2.zoom.disable();
        }, touchStart: function(e2, t2) {
          e2.zoom.enabled && e2.zoom.onTouchStart(t2);
        }, touchEnd: function(e2, t2) {
          e2.zoom.enabled && e2.zoom.onTouchEnd(t2);
        }, doubleTap: function(e2, t2) {
          !e2.animating && e2.params.zoom.enabled && e2.zoom.enabled && e2.params.zoom.toggle && e2.zoom.toggle(t2);
        }, transitionEnd: function(e2) {
          e2.zoom.enabled && e2.params.zoom.enabled && e2.zoom.onTransitionEnd();
        }, slideChange: function(e2) {
          e2.zoom.enabled && e2.params.zoom.enabled && e2.params.cssMode && e2.zoom.onTransitionEnd();
        } } }, { name: "lazy", params: { lazy: { checkInView: false, enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() {
          z(this, { lazy: t({ initialImageLoaded: false }, se) });
        }, on: { beforeInit: function(e2) {
          e2.params.lazy.enabled && e2.params.preloadImages && (e2.params.preloadImages = false);
        }, init: function(e2) {
          e2.params.lazy.enabled && !e2.params.loop && e2.params.initialSlide === 0 && (e2.params.lazy.checkInView ? e2.lazy.checkInViewOnLoad() : e2.lazy.load());
        }, scroll: function(e2) {
          e2.params.freeMode && !e2.params.freeModeSticky && e2.lazy.load();
        }, "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e2) {
          e2.params.lazy.enabled && e2.lazy.load();
        }, transitionStart: function(e2) {
          e2.params.lazy.enabled && (e2.params.lazy.loadOnTransitionStart || !e2.params.lazy.loadOnTransitionStart && !e2.lazy.initialImageLoaded) && e2.lazy.load();
        }, transitionEnd: function(e2) {
          e2.params.lazy.enabled && !e2.params.lazy.loadOnTransitionStart && e2.lazy.load();
        }, slideChange: function(e2) {
          var t2 = e2.params, a2 = t2.lazy, i2 = t2.cssMode, s2 = t2.watchSlidesVisibility, r2 = t2.watchSlidesProgress, n2 = t2.touchReleaseOnEdges, l2 = t2.resistanceRatio;
          a2.enabled && (i2 || (s2 || r2) && (n2 || l2 === 0)) && e2.lazy.load();
        } } }, { name: "controller", params: { controller: { control: void 0, inverse: false, by: "slide" } }, create: function() {
          z(this, { controller: t({ control: this.params.controller.control }, re) });
        }, on: { update: function(e2) {
          e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
        }, resize: function(e2) {
          e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
        }, observerUpdate: function(e2) {
          e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
        }, setTranslate: function(e2, t2, a2) {
          e2.controller.control && e2.controller.setTranslate(t2, a2);
        }, setTransition: function(e2, t2, a2) {
          e2.controller.control && e2.controller.setTransition(t2, a2);
        } } }, { name: "a11y", params: { a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group" } }, create: function() {
          z(this, { a11y: t({}, ne, { liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) });
        }, on: { afterInit: function(e2) {
          e2.params.a11y.enabled && (e2.a11y.init(), e2.a11y.updateNavigation());
        }, toEdge: function(e2) {
          e2.params.a11y.enabled && e2.a11y.updateNavigation();
        }, fromEdge: function(e2) {
          e2.params.a11y.enabled && e2.a11y.updateNavigation();
        }, paginationUpdate: function(e2) {
          e2.params.a11y.enabled && e2.a11y.updatePagination();
        }, destroy: function(e2) {
          e2.params.a11y.enabled && e2.a11y.destroy();
        } } }, { name: "history", params: { history: { enabled: false, root: "", replaceState: false, key: "slides" } }, create: function() {
          z(this, { history: t({}, le) });
        }, on: { init: function(e2) {
          e2.params.history.enabled && e2.history.init();
        }, destroy: function(e2) {
          e2.params.history.enabled && e2.history.destroy();
        }, "transitionEnd _freeModeNoMomentumRelease": function(e2) {
          e2.history.initialized && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
        }, slideChange: function(e2) {
          e2.history.initialized && e2.params.cssMode && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
        } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: false, replaceState: false, watchState: false } }, create: function() {
          z(this, { hashNavigation: t({ initialized: false }, oe) });
        }, on: { init: function(e2) {
          e2.params.hashNavigation.enabled && e2.hashNavigation.init();
        }, destroy: function(e2) {
          e2.params.hashNavigation.enabled && e2.hashNavigation.destroy();
        }, "transitionEnd _freeModeNoMomentumRelease": function(e2) {
          e2.hashNavigation.initialized && e2.hashNavigation.setHash();
        }, slideChange: function(e2) {
          e2.hashNavigation.initialized && e2.params.cssMode && e2.hashNavigation.setHash();
        } } }, { name: "autoplay", params: { autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } }, create: function() {
          z(this, { autoplay: t({}, de, { running: false, paused: false }) });
        }, on: { init: function(e2) {
          e2.params.autoplay.enabled && (e2.autoplay.start(), r().addEventListener("visibilitychange", e2.autoplay.onVisibilityChange), e2.autoplay.attachMouseEvents());
        }, beforeTransitionStart: function(e2, t2, a2) {
          e2.autoplay.running && (a2 || !e2.params.autoplay.disableOnInteraction ? e2.autoplay.pause(t2) : e2.autoplay.stop());
        }, sliderFirstMove: function(e2) {
          e2.autoplay.running && (e2.params.autoplay.disableOnInteraction ? e2.autoplay.stop() : e2.autoplay.pause());
        }, touchEnd: function(e2) {
          e2.params.cssMode && e2.autoplay.paused && !e2.params.autoplay.disableOnInteraction && e2.autoplay.run();
        }, destroy: function(e2) {
          e2.autoplay.detachMouseEvents(), e2.autoplay.running && e2.autoplay.stop(), r().removeEventListener("visibilitychange", e2.autoplay.onVisibilityChange);
        } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: false } }, create: function() {
          z(this, { fadeEffect: t({}, pe) });
        }, on: { beforeInit: function(e2) {
          if (e2.params.effect === "fade") {
            e2.classNames.push(e2.params.containerModifierClass + "fade");
            var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true };
            M(e2.params, t2), M(e2.originalParams, t2);
          }
        }, setTranslate: function(e2) {
          e2.params.effect === "fade" && e2.fadeEffect.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.params.effect === "fade" && e2.fadeEffect.setTransition(t2);
        } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } }, create: function() {
          z(this, { cubeEffect: t({}, ue) });
        }, on: { beforeInit: function(e2) {
          if (e2.params.effect === "cube") {
            e2.classNames.push(e2.params.containerModifierClass + "cube"), e2.classNames.push(e2.params.containerModifierClass + "3d");
            var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true };
            M(e2.params, t2), M(e2.originalParams, t2);
          }
        }, setTranslate: function(e2) {
          e2.params.effect === "cube" && e2.cubeEffect.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.params.effect === "cube" && e2.cubeEffect.setTransition(t2);
        } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: true, limitRotation: true } }, create: function() {
          z(this, { flipEffect: t({}, ce) });
        }, on: { beforeInit: function(e2) {
          if (e2.params.effect === "flip") {
            e2.classNames.push(e2.params.containerModifierClass + "flip"), e2.classNames.push(e2.params.containerModifierClass + "3d");
            var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true };
            M(e2.params, t2), M(e2.originalParams, t2);
          }
        }, setTranslate: function(e2) {
          e2.params.effect === "flip" && e2.flipEffect.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.params.effect === "flip" && e2.flipEffect.setTransition(t2);
        } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true } }, create: function() {
          z(this, { coverflowEffect: t({}, he) });
        }, on: { beforeInit: function(e2) {
          e2.params.effect === "coverflow" && (e2.classNames.push(e2.params.containerModifierClass + "coverflow"), e2.classNames.push(e2.params.containerModifierClass + "3d"), e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
        }, setTranslate: function(e2) {
          e2.params.effect === "coverflow" && e2.coverflowEffect.setTranslate();
        }, setTransition: function(e2, t2) {
          e2.params.effect === "coverflow" && e2.coverflowEffect.setTransition(t2);
        } } }, { name: "thumbs", params: { thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function() {
          z(this, { thumbs: t({ swiper: null, initialized: false }, ve) });
        }, on: { beforeInit: function(e2) {
          var t2 = e2.params.thumbs;
          t2 && t2.swiper && (e2.thumbs.init(), e2.thumbs.update(true));
        }, slideChange: function(e2) {
          e2.thumbs.swiper && e2.thumbs.update();
        }, update: function(e2) {
          e2.thumbs.swiper && e2.thumbs.update();
        }, resize: function(e2) {
          e2.thumbs.swiper && e2.thumbs.update();
        }, observerUpdate: function(e2) {
          e2.thumbs.swiper && e2.thumbs.update();
        }, setTransition: function(e2, t2) {
          var a2 = e2.thumbs.swiper;
          a2 && a2.setTransition(t2);
        }, beforeDestroy: function(e2) {
          var t2 = e2.thumbs.swiper;
          t2 && e2.thumbs.swiperCreated && t2 && t2.destroy();
        } } }];
        return q.use(fe), q;
      });
    }
  });

  // src/components/cert-carousel/cert-carousel.js
  var position = 0;
  var slidesToShow = 4;
  var slidesToScroll = 2;
  var gapItem = 31;
  var gapAmount = 3;
  var btnPrev = document.querySelector(".js-cert-carousel__button_prev");
  var btnNext = document.querySelector(".js-cert-carousel__button_next");
  var certCarouselContainer = document.querySelector(".js-cert-cert-carousel__container");
  var certCarouselTrack = document.querySelector(".js-cert-carousel__track");
  var certCarouselItems = document.querySelectorAll(".js-cert-carousel__item");
  var itemsCount = certCarouselItems.length;
  var itemWidth = (certCarouselContainer.clientWidth - gapItem * gapAmount) / slidesToShow;
  var movePosition = slidesToScroll * itemWidth;
  certCarouselItems.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });
  btnNext.addEventListener("click", () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  var setPosition = () => {
    certCarouselTrack.style.transform = `translateX(${position}px)`;
  };
  var checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();

  // src/components/form-quick-order/form-quick-order.js
  var import_jquery = __toModule(require_jquery());
  var import_jquery2 = __toModule(require_jquery_maskedinput());
  (0, import_jquery.default)(function($) {
    $("#phone1").mask("+7 (999) 999 9999");
  });

  // src/components/swiper/swiper.js
  var import_swiper_bundle_min = __toModule(require_swiper_bundle_min());
  var swiper = new import_swiper_bundle_min.default(".swiper-container", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  // src/components/reviews/reviews.js
  var position2 = 0;
  var reviewSlidesToShow = 2;
  var reviewSlidesToScroll = 1;
  var reviewGapItem = 30;
  var reviewGapAmount = 1;
  var btnPrevReview = document.querySelector(".js-reviews__button_prev");
  var btnNextReview = document.querySelector(".js-reviews__button_next");
  var reviewContainer = document.querySelector(".js-reviews__container");
  var reviewTrack = document.querySelector(".js-reviews__track");
  var reviewItems = document.querySelectorAll(".js-reviews__item");
  var reviewItemsCount = reviewItems.length;
  var reviewItemWidth = (reviewContainer.clientWidth - reviewGapItem * reviewGapAmount) / reviewSlidesToShow;
  var reviewMovePosition = reviewSlidesToScroll * reviewItemWidth;
  reviewItems.forEach((item) => {
    item.style.minWidth = `${reviewItemWidth}px`;
  });
  btnNextReview.addEventListener("click", () => {
    const reviewItemsLeft = reviewItemsCount - (Math.abs(position2) + reviewSlidesToShow * reviewItemWidth) / reviewItemWidth;
    position2 -= reviewItemsLeft >= reviewSlidesToScroll ? reviewMovePosition : reviewItemsLeft * reviewItemWidth;
    setPosition2();
    checkBtns2();
  });
  btnPrevReview.addEventListener("click", () => {
    const reviewItemsLeft = Math.abs(position2) / reviewItemWidth;
    position2 += reviewItemsLeft >= reviewSlidesToScroll ? reviewMovePosition : reviewItemsLeft * reviewItemWidth;
    setPosition2();
    checkBtns2();
  });
  var setPosition2 = () => {
    reviewTrack.style.transform = `translateX(${position2}px)`;
  };
  var checkBtns2 = () => {
    btnPrevReview.disabled = position2 === 0;
    btnNextReview.disabled = position2 <= -(reviewItemsCount - reviewSlidesToShow) * reviewItemWidth;
  };
  checkBtns2();
})();
/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
//# sourceMappingURL=index.js.map
