var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k2, p2) {
    switch (shared.toRawType(p2)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p2;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v2) {
      const type2 = shared.toTypeString(v2).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v2 = "---BEGIN:JSON---" + JSON.stringify(v2, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e2) {
          v2 = type2;
        }
      } else {
        if (v2 === null) {
          v2 = "---NULL---";
        } else if (v2 === void 0) {
          v2 = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v2).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v2 = "---BEGIN:" + vType + "---" + v2 + "---END:" + vType + "---";
          } else {
            v2 = String(v2);
          }
        }
      }
      return v2;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$D = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$c], ["__scopeId", "data-v-a2e81f6e"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _sfc_main$C = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 15
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        errMsg: "",
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      }
    },
    watch: {
      value(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
        });
      }
    },
    created() {
      if (!this.value && this.value !== 0) {
        this.val = this.modelValue;
      }
      if (!this.modelValue && this.modelValue !== 0) {
        this.val = this.value;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.val);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
      });
    },
    methods: {
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onEyes() {
        this.showPassword = !this.showPassword;
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        event.detail.value;
        this.$emit("blur", event);
      },
      onConfirm(e2) {
        this.$emit("confirm", e2.detail.value);
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
        style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix"))
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle({
            "padding-right": $props.type === "password" || $props.clearable || $props.prefixIcon ? "" : "10px",
            "padding-left": $props.prefixIcon ? "" : "10px"
          }),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          $data.val ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 18,
            color: "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$b], ["__scopeId", "data-v-abe12412"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$B = {
    name: "uniFormsItem",
    props: {
      custom: {
        type: Boolean,
        default: false
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      name: String,
      required: Boolean,
      validateTrigger: {
        type: String,
        default: ""
      },
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      },
      label: String,
      labelWidth: {
        type: [Number, String],
        default: ""
      },
      labelAlign: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: ""
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      rules: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        errorTop: false,
        errorBottom: false,
        labelMarginBottom: "",
        errorWidth: "",
        errMsg: "",
        val: "",
        labelPos: "",
        labelWid: "",
        labelAli: "",
        showMsg: "undertext",
        border: false,
        isFirstBorder: false,
        isArray: false,
        arrayField: ""
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      fieldStyle() {
        let style = {};
        if (this.labelPos == "top") {
          style.padding = "0 0";
          this.labelMarginBottom = "6px";
        }
        if (this.labelPos == "left" && this.msg !== false && this.msg != "") {
          style.paddingBottom = "0px";
          this.errorBottom = true;
          this.errorTop = false;
        } else if (this.labelPos == "top" && this.msg !== false && this.msg != "") {
          this.errorBottom = false;
          this.errorTop = true;
        } else {
          this.errorTop = false;
          this.errorBottom = false;
        }
        return style;
      },
      justifyContent() {
        if (this.labelAli === "left")
          return "flex-start";
        if (this.labelAli === "center")
          return "center";
        if (this.labelAli === "right")
          return "flex-end";
      },
      labelLeft() {
        return (this.labelPos === "left" ? parseInt(this.labelWid) : 0) + "px";
      }
    },
    watch: {
      validateTrigger(trigger) {
        this.formTrigger = trigger;
      }
    },
    created() {
      this.form = this.getForm();
      this.group = this.getForm("uniGroup");
      this.formRules = [];
      this.formTrigger = this.validateTrigger;
      if (this.name && this.name.indexOf("[") !== -1 && this.name.indexOf("]") !== -1) {
        this.isArray = true;
        this.arrayField = this.name;
        this.form.formData[this.name] = this.form._getValue(this.name, "");
      }
    },
    mounted() {
      if (this.form) {
        this.form.childrens.push(this);
      }
      this.init();
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      init() {
        if (this.form) {
          let { formRules, validator, formData, value, labelPosition, labelWidth, labelAlign, errShowType } = this.form;
          this.labelPos = this.labelPosition ? this.labelPosition : labelPosition;
          if (this.label) {
            this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || 70;
          } else {
            this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || "auto";
          }
          if (this.labelWid && this.labelWid !== "auto") {
            this.labelWid += "px";
          }
          this.labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (!this.form.isFirstBorder) {
            this.form.isFirstBorder = true;
            this.isFirstBorder = true;
          }
          if (this.group) {
            if (!this.group.isFirstBorder) {
              this.group.isFirstBorder = true;
              this.isFirstBorder = true;
            }
          }
          this.border = this.form.border;
          this.showMsg = errShowType;
          let name = this.isArray ? this.arrayField : this.name;
          if (!name)
            return;
          if (formRules && this.rules.length > 0) {
            if (!formRules[name]) {
              formRules[name] = {
                rules: this.rules
              };
            }
            validator.updateSchema(formRules);
          }
          this.formRules = formRules[name] || {};
          this.validator = validator;
        } else {
          this.labelPos = this.labelPosition || "left";
          this.labelWid = this.labelWidth || 65;
          this.labelAli = this.labelAlign || "left";
        }
      },
      unInit() {
        if (this.form) {
          this.form.childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete this.form.formData[item.name];
            }
          });
        }
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      clearValidate() {
        this.errMsg = "";
      },
      setValue(value) {
        let name = this.isArray ? this.arrayField : this.name;
        if (name) {
          if (this.errMsg)
            this.errMsg = "";
          this.form.formData[name] = this.form._getValue(name, value);
          if (!this.formRules || typeof this.formRules && JSON.stringify(this.formRules) === "{}")
            return;
          this.triggerCheck(this.form._getValue(this.name, value));
        }
      },
      async triggerCheck(value, formTrigger) {
        this.errMsg = "";
        if (!this.validator || Object.keys(this.formRules).length === 0)
          return;
        const isNoField = this.isRequired(this.formRules.rules || []);
        let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger);
        let result = null;
        if (!!isTrigger || formTrigger) {
          let name = this.isArray ? this.arrayField : this.name;
          result = await this.validator.validateUpdate({
            [name]: value
          }, this.form.formData);
        }
        if (!isNoField && (value === void 0 || value === "")) {
          result = null;
        }
        const inputComp = this.form.inputChildrens.find((child) => child.rename === this.name);
        if ((isTrigger || formTrigger) && result && result.errorMessage) {
          if (inputComp) {
            inputComp.errMsg = result.errorMessage;
          }
          if (this.form.errShowType === "toast") {
            uni.showToast({
              title: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF",
              icon: "none"
            });
          }
          if (this.form.errShowType === "modal") {
            uni.showModal({
              title: "\u63D0\u793A",
              content: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF"
            });
          }
        } else {
          if (inputComp) {
            inputComp.errMsg = "";
          }
        }
        this.errMsg = !result ? "" : result.errorMessage;
        this.form.validateCheck(result ? result : null);
        return result ? result : null;
      },
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "bind" ? true : false;
              }
              return false;
            }
            return true;
          }
          return false;
        }
        return true;
      },
      isRequired(rules) {
        let isNoField = false;
        for (let i2 = 0; i2 < rules.length; i2++) {
          const ruleData = rules[i2];
          if (ruleData.required) {
            isNoField = true;
            break;
          }
        }
        return isNoField;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms-item", { "uni-forms-item--border": $data.border, "is-first-border": $data.border && $data.isFirstBorder, "uni-forms-item-error": $options.msg }])
    }, [
      vue.createElementVNode("view", { class: "uni-forms-item__box" }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__inner", ["is-direction-" + $data.labelPos]])
        }, [
          vue.createElementVNode("view", {
            class: "uni-forms-item__label",
            style: vue.normalizeStyle({ width: $data.labelWid, justifyContent: $options.justifyContent })
          }, [
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              $props.leftIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 1,
                class: "label-icon",
                size: "16",
                type: $props.leftIcon,
                color: $props.iconColor
              }, null, 8, ["type", "color"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "label-text" }, vue.toDisplayString($props.label), 1),
              $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "label-seat"
              })) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-forms-item__content", { "is-input-error-border": $options.msg }])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ], 2),
        $options.msg ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["uni-error-message", { "uni-error-msg--boeder": $data.border }]),
          style: vue.normalizeStyle({
            paddingLeft: $options.labelLeft
          })
        }, [
          vue.createElementVNode("text", { class: "uni-error-message-text" }, vue.toDisplayString($data.showMsg === "undertext" ? $options.msg : ""), 1)
        ], 6)) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$a], ["__scopeId", "data-v-61dfc0d0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i")
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e2) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e2) {
        result = this._getMessage(rule, e2.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list2 = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list2[i2] = item.value;
        } else {
          list2[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list2)).size === list2.length;
      } else {
        if (list2.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "\u9A8C\u8BC1\u9519\u8BEF",
      defaultInvalid: "\u63D0\u4EA4\u7684\u5B57\u6BB5{field}\u5728\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u5B58\u5728",
      validateFunction: "\u9A8C\u8BC1\u65E0\u6548",
      required: "{label}\u5FC5\u586B",
      "enum": "{label}\u8D85\u51FA\u8303\u56F4",
      timestamp: "{label}\u683C\u5F0F\u65E0\u6548",
      whitespace: "{label}\u4E0D\u80FD\u4E3A\u7A7A",
      typeError: "{label}\u7C7B\u578B\u65E0\u6548",
      date: {
        format: "{label}\u65E5\u671F{value}\u683C\u5F0F\u65E0\u6548",
        parse: "{label}\u65E5\u671F\u65E0\u6CD5\u89E3\u6790,{value}\u65E0\u6548",
        invalid: "{label}\u65E5\u671F{value}\u65E0\u6548"
      },
      length: {
        minLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{minLength}",
        maxLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{maxLength}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minLength}\u548C{maxLength}\u4E4B\u95F4"
      },
      number: {
        minimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E{minimum}",
        maximum: "{label}\u4E0D\u80FD\u5927\u4E8E{maximum}",
        exclusiveMinimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E{minimum}",
        exclusiveMaximum: "{label}\u4E0D\u80FD\u5927\u4E8E\u7B49\u4E8E{maximum}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minimum}and{maximum}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "{label}\u683C\u5F0F\u4E0D\u5339\u914D"
      }
    };
  }
  SchemaValidator.message = new Message();
  const _sfc_main$A = {
    name: "uniForms",
    components: {},
    emits: ["input", "reset", "validate", "submit"],
    props: {
      value: {
        type: Object,
        default() {
          return {};
        }
      },
      modelValue: {
        type: Object,
        default() {
          return {};
        }
      },
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      validateTrigger: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: "left"
      },
      errShowType: {
        type: String,
        default: "undertext"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formData: {}
      };
    },
    computed: {
      dataValue() {
        if (JSON.stringify(this.modelValue) === "{}") {
          return this.value;
        } else {
          return this.modelValue;
        }
      }
    },
    watch: {
      rules(newVal) {
        this.init(newVal);
      },
      labelPosition() {
        this.childrens.forEach((vm) => {
          vm.init();
        });
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:152", "\u5F53\u524D uni-froms \u7EC4\u4EF6\u7F3A\u5C11 ref \u5C5E\u6027");
            formVm.setValue(name, value);
          }
        };
      }
      this.unwatchs = [];
      this.childrens = [];
      this.inputChildrens = [];
      this.checkboxChildrens = [];
      this.formRules = [];
      this.init(this.rules);
    },
    methods: {
      init(formRules) {
        if (Object.keys(formRules).length === 0) {
          try {
            this.formData = JSON.parse(JSON.stringify(this.dataValue));
          } catch (e2) {
            this.formData = {};
          }
          return;
        }
        this.formRules = formRules;
        this.validator = new SchemaValidator(formRules);
        this.registerWatch();
      },
      registerWatch() {
        this.unwatchs.forEach((v2) => v2());
        this.childrens.forEach((v2) => {
          v2.init();
        });
        Object.keys(this.dataValue).forEach((key) => {
          let watch = this.$watch("dataValue." + key, (value) => {
            if (!value)
              return;
            if (value.toString() === "[object Object]") {
              for (let i2 in value) {
                let name = `${key}[${i2}]`;
                this.formData[name] = this._getValue(name, value[i2]);
              }
            } else {
              this.formData[key] = this._getValue(key, value);
            }
          }, {
            deep: true,
            immediate: true
          });
          this.unwatchs.push(watch);
        });
      },
      setRules(formRules) {
        this.init(formRules);
      },
      setValue(name, value, callback) {
        let example = this.childrens.find((child) => child.name === name);
        if (!example)
          return null;
        value = this._getValue(example.name, value);
        this.formData[name] = value;
        example.val = value;
        return example.triggerCheck(value, callback);
      },
      resetForm(event) {
        this.childrens.forEach((item) => {
          item.errMsg = "";
          const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
          if (inputComp) {
            inputComp.errMsg = "";
            inputComp.is_reset = true;
            inputComp.$emit("input", inputComp.multiple ? [] : "");
            inputComp.$emit("update:modelValue", inputComp.multiple ? [] : "");
          }
        });
        this.childrens.forEach((item) => {
          if (item.name) {
            this.formData[item.name] = this._getValue(item.name, "");
          }
        });
        this.$emit("reset", event);
      },
      validateCheck(validate) {
        if (validate === null)
          validate = null;
        this.$emit("validate", validate);
      },
      async validateAll(invalidFields, type, keepitem, callback) {
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => v2.name === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let newFormData = {};
        if (this.validator) {
          for (let key in childrens) {
            const child = childrens[key];
            let name = child.isArray ? child.arrayField : child.name;
            if (child.isArray) {
              if (child.name.indexOf("[") !== -1 && child.name.indexOf("]") !== -1) {
                const fieldData = child.name.split("[");
                const fieldName = fieldData[0];
                const fieldValue = fieldData[1].replace("]", "");
                if (!newFormData[fieldName]) {
                  newFormData[fieldName] = {};
                }
                newFormData[fieldName][fieldValue] = this._getValue(name, invalidFields[name]);
              }
            } else {
              newFormData[name] = this._getValue(name, invalidFields[name]);
            }
            const result = await child.triggerCheck(invalidFields[name], true);
            if (result) {
              results.push(result);
              if (this.errShowType === "toast" || this.errShowType === "modal")
                break;
            }
          }
        } else {
          newFormData = invalidFields;
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            newFormData[v2] = this.dataValue[v2];
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: newFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        callback && typeof callback === "function" && callback(results, newFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      submitForm() {
      },
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:377", "submit \u65B9\u6CD5\u5373\u5C06\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528validate\u65B9\u6CD5\u4EE3\u66FF\uFF01");
        }
        return this.validateAll(this.formData, "submit", keepitem, callback);
      },
      validate(keepitem, callback) {
        return this.submit(keepitem, callback, true);
      },
      validateField(props, callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          if (props.indexOf(item.name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [item.name]: this.formData[item.name]
            });
          }
        });
        return this.validateAll(invalidFields, "submit", [], callback);
      },
      resetFields() {
        this.resetForm();
      },
      clearValidate(props) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
          if (props.length === 0) {
            item.errMsg = "";
            if (inputComp) {
              inputComp.errMsg = "";
            }
          } else {
            if (props.indexOf(item.name) !== -1) {
              item.errMsg = "";
              if (inputComp) {
                inputComp.errMsg = "";
              }
            }
          }
        });
      },
      _getValue(key, value) {
        const rules = this.formRules[key] && this.formRules[key].rules || [];
        const isRuleNum = rules.find((val) => val.format && this.type_filter(val.format));
        const isRuleBool = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
        if (isRuleNum) {
          value = isNaN(value) ? value : value === "" || value === null ? null : Number(value);
        }
        if (isRuleBool) {
          value = !value ? false : true;
        }
        return value;
      },
      type_filter(format) {
        return format === "int" || format === "double" || format === "number" || format === "timestamp";
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms", { "uni-forms--top": !$props.border }])
    }, [
      vue.createElementVNode("form", {
        onSubmit: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.submitForm && $options.submitForm(...args), ["stop"])),
        onReset: _cache[1] || (_cache[1] = (...args) => $options.resetForm && $options.resetForm(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 32)
    ], 2);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$9], ["__scopeId", "data-v-7ae0e404"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$z = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i2} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$8], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$y = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$5);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$7], ["__scopeId", "data-v-7c43d41b"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  var _imports_0 = "/static/new/img_logo@2x.png";
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition2, msg) {
    if (!condition2) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i2 = subs.indexOf(fn);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$1(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app: app2,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(function(module, moduleName, i2) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i2 === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e2) {
      return e2;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v2) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e2) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e2);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e2);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e2);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  function request({ url = "", params = {}, method = "GET" }) {
    if (!uni.getStorageSync("baseUrl")) {
      uni.setStorageSync("baseUrl", "http://172.17.2.58");
    }
    let baseUrl = "http://172.17.2.58/api";
    const token = uni.getStorageSync("token");
    let header = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token
    };
    if (url == "/track/upload") {
      header["Content-Type"] = "application/x-www-form-urlencoded";
    }
    const requestRes = new Promise((resolve, reject) => {
      uni.request({
        url: baseUrl + url,
        data: params,
        header,
        method
      }).then((res) => {
        formatAppLog("log", "at utils/request.js:29", params, url, res, "header");
        const { data } = res;
        if (res.statusCode == 401) {
          uni.showToast({
            title: "\u60A8\u7684\u767B\u5F55\u5DF2\u8FC7\u671F\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u64CD\u4F5C\uFF01",
            duration: 2e3,
            icon: "none"
          });
          uni.redirectTo({
            url: "/pages/login/user"
          });
          return false;
        }
        if (res.statusCode == 400) {
          uni.showToast({
            title: "\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u767B\u5F55\uFF01",
            duration: 2e3,
            icon: "none"
          });
          uni.redirectTo({
            url: "/pages/login/user"
          });
          return false;
        }
        if (data.code == 1) {
          uni.showToast({
            title: data.msg,
            duration: 2e3,
            icon: "none"
          });
          return false;
        }
        if (data.code == 0 || data.code == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      }).catch((err) => {
        const error = { data: { msg: err.data } };
        reject(error);
      });
    });
    return requestRes;
  }
  const phoneLogins = (params) => request({
    url: `/login/worker`,
    method: "post",
    params
  });
  const getsmsCode = (params) => request({
    url: `/sms-code/send`,
    method: "post",
    params
  });
  const getUserInfo = (params) => request({
    url: `/users/get`,
    method: "get",
    params
  });
  const getUserSetting = (params) => request({
    url: `/serve-settings/status`,
    method: "get",
    params
  });
  const setPickUpStatus = (params) => request({
    url: `/serve-settings/pick-up`,
    method: "put",
    params
  });
  const getServiceSkillAll = (params) => request({
    url: `/serve-skill/category`,
    method: "get",
    params
  });
  const updateServiceSkill = (params) => request({
    url: `/serve-skill/batchUpsert`,
    method: "post",
    params
  });
  const getSettingInfo = (params) => request({
    url: `/serve-settings`,
    method: "get",
    params
  });
  const getOpenCity = (params) => request({
    url: `/region/listSimple`,
    method: "get",
    params
  });
  const setServiceSetting = (params) => request({
    url: `/serve-settings/serve-scope`,
    method: "put",
    params
  });
  const _sfc_main$x = {
    __name: "user",
    setup(__props) {
      const store2 = useStore();
      const customForm = vue.ref();
      const alertDialog = vue.ref(null);
      const reason = vue.ref("");
      let fromInfo = vue.reactive({
        phone: "15066699132",
        veriryCode: "",
        userType: 2
      });
      const customRules = vue.reactive({
        phone: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                const reg = /^1[3-9]\d{9}$/;
                if (!reg.test(value)) {
                  callback("\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF\uFF01\u8BF7\u91CD\u65B0\u8F93\u5165");
                }
                return true;
              }
            }
          ]
        },
        veriryCode: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
            }
          ]
        }
      });
      vue.onMounted(() => {
      });
      const handleClose = () => {
        alertDialog.value.close();
      };
      const handleSubmit = async () => {
        const valid = await customForm.value.validate();
        if (valid) {
          let times = setTimeout(() => {
            uni.showLoading({
              title: "loading",
              mask: true
            });
          }, 500);
          await phoneLogins(fromInfo).then(async (res) => {
            formatAppLog("log", "at pages/login/user.vue:169", res, "\u767B\u5F55\u7ED3\u679C\u83B7\u53D6");
            if (res.code === 200) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              clearTimeout(times);
              uni.setStorageSync("token", res.data.token);
              store2.commit("user/setToken", res.data.token);
              await getUserSetting().then((res2) => {
                formatAppLog("log", "at pages/login/user.vue:182", res2, "getUserSetting");
                if (Boolean(res2.data.settingsStatus)) {
                  uni.redirectTo({
                    url: "/pages/index/index"
                  });
                } else {
                  uni.redirectTo({
                    url: "/pages/setting/index"
                  });
                }
              });
            } else if (res.code === 605) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              uni.showToast({
                title: res.msg,
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            setTimeout(function() {
              uni.hideLoading();
            }, 500);
            formatAppLog("log", "at pages/login/user.vue:210", err, "err");
            if (err.code === 605) {
              reason.value = err.msg;
              alertDialog.value.open();
            } else {
              uni.showToast({
                title: err.msg || "\u767B\u5F55\u5931\u8D25",
                duration: 1500,
                icon: "none"
              });
            }
          });
        }
      };
      const handlePwd = async () => {
        const reg = /^1[3-9]\d{9}$/;
        if (!reg.test(fromInfo.phone)) {
          return uni.showToast({
            title: "\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF\uFF01\u8BF7\u91CD\u65B0\u8F93\u5165",
            duration: 2e3,
            icon: "none"
          });
        }
        getsmsCode({
          bussinessType: 3,
          phone: fromInfo.phone
        }).then((res) => {
          fromInfo.veriryCode = "123456";
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      vue.ref(uni.getStorageSync("baseUrl"));
      vue.ref(null);
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$6);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("image", {
            src: _imports_0,
            class: "logo"
          }),
          vue.createElementVNode("view", { class: "loginBox" }, [
            vue.createCommentVNode(" \u767B\u5F55\u8868\u5355 "),
            vue.createElementVNode("view", { class: "loginMain" }, [
              vue.createVNode(_component_uni_forms, {
                ref_key: "customForm",
                ref: customForm,
                rules: customRules,
                modelValue: vue.unref(fromInfo)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_forms_item, { name: "phone" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        clearable: false,
                        class: "item",
                        modelValue: vue.unref(fromInfo).phone,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(fromInfo).phone = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_uni_forms_item, {
                    name: "veriryCode",
                    class: "pwdBox"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        clearable: false,
                        class: "item",
                        modelValue: vue.unref(fromInfo).veriryCode,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(fromInfo).veriryCode = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", {
                        class: "clearIcon",
                        onClick: handlePwd
                      }, "\u83B7\u53D6\u9A8C\u8BC1\u7801")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["rules", "modelValue"]),
              vue.createCommentVNode(" \u6309\u94AE "),
              vue.createElementVNode("view", { class: "btnBox" }, [
                vue.createElementVNode("button", {
                  class: vue.normalizeClass([
                    "btn-default",
                    vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0 ? "disabled" : ""
                  ]),
                  disabled: vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0,
                  type: "primary",
                  onClick: handleSubmit
                }, " \u767B\u5F55 ", 10, ["disabled"])
              ]),
              vue.createElementVNode("div", { class: "gentleReminder" }, " \u4EC5\u7528\u4E8EIT\u57F9\u8BAD\u6559\u5B66\u4F7F\u7528\uFF0C\u4E3A\u4FDD\u969C\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5B89\u5168\uFF0C\u8BF7\u52FF\u5411\u5E73\u53F0\u5F55\u5165\u4EFB\u4F55\u4E2A\u4EBA\u654F\u611F\u4FE1\u606F\uFF08\u5982\u624B\u673A\u53F7\u3001\u8EAB\u4EFD\u8BC1\u53F7\u7B49\uFF09\uFF01 "),
              vue.createCommentVNode(" end "),
              vue.createCommentVNode(" \u66F4\u65B0\u8BF7\u6C42Url - \u6559\u5B66\u9700\u6C42 "),
              vue.createCommentVNode(' <view class="setUrl" @click="inputDialogToggle">\u914D\u7F6E\u8BF7\u6C42url</view>\r\n			<uni-popup ref="inputDialog" type="dialog">\r\n				<uni-popup-dialog ref="inputClose" mode="input" title="\u914D\u7F6EURL" :value="baseURL" placeholder="\u8BF7\u8F93\u5165baseURL" @confirm="dialogInputConfirm"></uni-popup-dialog>\r\n			</uni-popup> '),
              vue.createCommentVNode(" \u66F4\u65B0\u8BF7\u6C42Url - \u6559\u5B66\u9700\u6C42 ")
            ]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" \u63D0\u793A\u7A97\u793A\u4F8B "),
            vue.createVNode(_component_uni_popup, {
              ref_key: "alertDialog",
              ref: alertDialog,
              type: "dialog",
              "is-mask-click": false
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "dialog" }, [
                  vue.createElementVNode("view", { class: "content" }, "\u8BE5\u624B\u673A\u53F7\u5DF2\u88AB\u51BB\u7ED3"),
                  vue.createElementVNode("view", { class: "reason" }, [
                    vue.createElementVNode("text", null, "\u51BB\u7ED3\u539F\u56E0\uFF1A"),
                    vue.createElementVNode("text", null, vue.toDisplayString(reason.value), 1)
                  ]),
                  vue.createElementVNode("view", { class: "phoneLabel" }, "\u5982\u9700\u89E3\u51BB\u8BF7\u62E8\u6253\u5BA2\u670D\u7535\u8BDD\uFF1A"),
                  vue.createElementVNode("view", { class: "phone" }, "400-000-4000"),
                  vue.createElementVNode("view", {
                    class: "footer",
                    onClick: handleClose
                  }, "\u77E5\u9053\u4E86")
                ])
              ]),
              _: 1
            }, 512)
          ])
        ]);
      };
    }
  };
  var PagesLoginUser = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/login/user.vue"]]);
  const _sfc_main$w = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$6], ["__scopeId", "data-v-f9a87a8e"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$v = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  size: "20"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  size: "22"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$5], ["__scopeId", "data-v-6bda1a90"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const getDispatchOrder = (params) => request({
    url: params ? `/orders-dispatch?serveTypeId=${params}` : "/orders-dispatch",
    method: "get"
  });
  const getRobOrder = (params) => request({
    url: params ? `/orders-seize/?serveTypeId=${params}` : "/orders-seize/",
    method: "get"
  });
  const getHomeFilter = () => request({
    url: `/serve-type/simpleList`,
    method: "get"
  });
  const robOrder = (params) => request({
    url: `/orders-seize/`,
    method: "post",
    params
  });
  const getOrder = (params) => request({
    url: params ? `/orders-serve/queryForList?serveStatus=${params}` : "/orders-serve/queryForList",
    method: "get"
  });
  const getOrderInfo = (params) => request({
    url: `/orders-serve/${params}`,
    method: "get"
  });
  const cancelOrder = (params) => request({
    url: `/orders-serve/cancel`,
    method: "post",
    params
  });
  const startServe = (params) => request({
    url: `/orders-serve/start`,
    method: "post",
    params
  });
  const finishServe = (params) => request({
    url: `/orders-serve/finish`,
    method: "post",
    params
  });
  const getOrderStatusNum = (params) => request({
    url: `/orders-serve/status/num`,
    method: "get"
  });
  const _sfc_main$u = {
    __name: "index",
    setup(__props) {
      const baseSetting = vue.reactive([
        {
          label: "\u670D\u52A1\u6280\u80FD",
          url: "../../static/new/btn_top_fwjn@2x.png",
          path: "/pages/serviceSkill/index"
        },
        {
          label: "\u63A5\u5355\u8BBE\u7F6E",
          url: "../../static/new/btn_top_jdsz@2x.png",
          path: "/pages/getOrder/index"
        },
        {
          label: "\u670D\u52A1\u8303\u56F4",
          url: "../../static/new/btn_top_fwfw@2x.png",
          path: "/pages/serviceRange/index"
        }
      ]);
      const handleLink = (val) => {
        uni.navigateTo({
          url: val
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u516C\u7528nav "),
          vue.createElementVNode("view", { class: "navBox" }, [
            vue.createElementVNode("view", { class: "baseSetting" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(baseSetting, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: index,
                  onClick: ($event) => handleLink(item.path)
                }, [
                  vue.createElementVNode("image", {
                    src: item.url,
                    class: "itemImg"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "itemLabel" }, vue.toDisplayString(item.label), 1)
                ], 8, ["onClick"]);
              }), 128))
            ]),
            vue.createElementVNode("view", { class: "bg" })
          ]),
          vue.createCommentVNode(" end ")
        ], 2112);
      };
    }
  };
  var UniNav$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-02b269f0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-home-nav/index.vue"]]);
  const _sfc_main$t = {
    __name: "index",
    props: {
      pagePath: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const store2 = useStore();
      const currentPage = vue.ref(store2.state.footStatus);
      let tabbar = vue.ref([
        {
          pagePath: "/pages/index/index",
          iconPath: "static/home.png",
          selectedIconPath: "static/homeActive.png",
          text: "\u9996\u9875"
        },
        {
          pagePath: "/pages/pickup/index",
          iconPath: "static/collect.png",
          selectedIconPath: "static/collectActive.png",
          text: "\u8BA2\u5355"
        },
        {
          pagePath: "/pages/delivery/index",
          iconPath: "static/delivery.png",
          selectedIconPath: "static/deliveryActive.png",
          text: "\u6D88\u606F"
        },
        {
          pagePath: "/pages/my/index",
          iconPath: "static/user.png",
          selectedIconPath: "static/userActive.png",
          text: "\u6211\u7684"
        }
      ]);
      const changeTab = (item, index) => {
        store2.commit("user/setFilterOverTime", null);
        if (item.text !== "") {
          currentPage.value = index;
          store2.commit("setFootStatus", index);
          store2.commit("user/setDeliveryData", []);
          store2.commit("user/setTabIndex", 0);
          store2.commit("user/setTaskStatus", 0);
          store2.commit("user/setDetailType", 0);
          store2.commit("user/setNewType", null);
          uni.redirectTo({
            url: item.pagePath,
            success: (e2) => {
            },
            fail: () => {
            }
          });
        } else {
          uni.showToast({
            title: "\u7A0B\u5E8F\u5458\u54E5\u54E5\u6B63\u5728\u5B9E\u73B0\u4E2D",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u516C\u7528\u5E95\u90E8 "),
          vue.createElementVNode("view", { class: "footBox" }, [
            vue.createElementVNode("view", { class: "uni-tabbar" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tabbar), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["tabbar-item", currentPage.value === index ? "active" : ""]),
                  key: index,
                  onClick: ($event) => changeTab(item, index)
                }, [
                  (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "uni-tabbar__bd"
                  }, [
                    item.pagePath !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-tabbar__icon"
                    }, [
                      currentPage.value === index ? (vue.openBlock(), vue.createElementBlock("img", {
                        key: 0,
                        class: "item-img",
                        src: item.selectedIconPath
                      }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("img", {
                        key: 1,
                        class: "item-img",
                        src: item.iconPath
                      }, null, 8, ["src"]))
                    ])) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "qrCode"
                    }, [
                      vue.createElementVNode("img", {
                        src: item.iconPath
                      }, null, 8, ["src"])
                    ]))
                  ])),
                  item.text !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "uni-tabbar__label"
                  }, vue.toDisplayString(item.text), 1)) : vue.createCommentVNode("v-if", true)
                ], 10, ["onClick"]);
              }), 128))
            ])
          ]),
          vue.createCommentVNode(" end ")
        ], 2112);
      };
    }
  };
  var UniFooter = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-footer/index.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    props: {},
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "empty" }, [
          vue.createElementVNode("view", { class: "image" }),
          vue.createCommentVNode(' <image class="aimage" src="../../static/new/empty.png"></image> '),
          vue.createElementVNode("view", { class: "content" }, "\u6682\u65E0\u76F8\u5173\u5185\u5BB9\u54E6\uFF5E")
        ]);
      };
    }
  };
  var Empty = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-70a727a5"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/empty/index.vue"]]);
  const _sfc_main$r = {
    __name: "homeFilter",
    props: {
      fixTop: {
        type: Boolean,
        default: false
      },
      homeFilterList: {
        type: Array,
        default: () => []
      }
    },
    emits: ["handleCanScroll", "getList", "tabChange"],
    setup(__props, { emit }) {
      const props = __props;
      const status = vue.ref(0);
      const isOpen = vue.ref(false);
      let serviceType = vue.reactive({
        data: []
      });
      const activeType = vue.ref("");
      const handleClick = (val) => {
        status.value = val;
        emit("tabChange", status.value, activeType.value);
      };
      const handleOpen = () => {
        isOpen.value = !isOpen.value;
        formatAppLog("log", "at pages/index/components/homeFilter.vue:70", isOpen.value, "isOpen.value");
        emit("handleCanScroll", isOpen.value);
      };
      const handleReset = () => {
        activeType.value = "";
        isOpen.value = false;
        emit("handleCanScroll", isOpen.value);
        emit("tabChange", status.value, activeType.value);
      };
      const handleService = (val) => {
        activeType.value = val;
      };
      const handleSubmit = () => {
        isOpen.value = false;
        emit("handleCanScroll", isOpen.value);
        emit("tabChange", status.value, activeType.value);
      };
      vue.watch(() => props.homeFilterList, () => {
        serviceType.data = [{ id: "", name: "\u5168\u90E8" }].concat(props.homeFilterList);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["homeFilter", __props.fixTop ? "fixTop" : ""])
        }, [
          vue.createElementVNode("view", { class: "leftBox" }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["item", !status.value ? "active" : ""]),
              onClick: _cache[0] || (_cache[0] = ($event) => handleClick(0))
            }, "\u62A2\u5355", 2),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["item", status.value ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => handleClick(1))
            }, "\u6D3E\u5355", 2)
          ]),
          vue.createElementVNode("view", { class: "rightBox" }, [
            vue.createElementVNode("view", { class: "label" }, "\u670D\u52A1\u7C7B\u578B"),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["icon", isOpen.value ? "up" : "down"]),
              onClick: handleOpen
            }, null, 2)
          ]),
          vue.withDirectives(vue.createElementVNode("view", { class: "filterPopup" }, [
            vue.createElementVNode("view", { class: "service" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(serviceType).data, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["serviceItem", activeType.value === item.id ? "active" : ""]),
                  key: index,
                  onClick: ($event) => handleService(item.id)
                }, vue.toDisplayString(item.name), 11, ["onClick"]);
              }), 128))
            ]),
            vue.createElementVNode("view", { class: "footer" }, [
              vue.createElementVNode("view", {
                class: "btn-gray btn",
                onClick: handleReset
              }, "\u91CD\u7F6E"),
              vue.createElementVNode("view", {
                class: "btn-red btn",
                onClick: handleSubmit
              }, "\u786E\u5B9A")
            ])
          ], 512), [
            [vue.vShow, isOpen.value]
          ])
        ], 2);
      };
    }
  };
  var HomeFilter = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-1426d0ea"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/components/homeFilter.vue"]]);
  const _sfc_main$q = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      vue.onMounted(() => {
      });
      const isRob = vue.ref(true);
      let list2 = vue.reactive({
        data: []
      });
      const alertDialog = vue.ref(null);
      const handleClose = () => {
        alertDialog.value.close();
        emit("refresh");
      };
      const handleRob = (id) => {
        robOrder({
          id
        }).then((res) => {
          formatAppLog("log", "at pages/index/components/homeList.vue:70", res, "\u62A2\u5355");
          if (res.code === 200) {
            isRob.value = true;
          } else {
            isRob.value = false;
          }
          alertDialog.value.open();
        });
      };
      vue.watchEffect(() => {
        list2.data = props.data;
        formatAppLog("log", "at pages/index/components/homeList.vue:81", list2.data, "++++++++++++++");
      });
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list2).data, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "card",
              key: index
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("image", {
                  class: "leftCardContent",
                  src: item.serveItemImg
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "rightCardContent" }, [
                  vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.serveTypeName) + "-" + vue.toDisplayString(item.serveItemName), 1),
                  vue.createElementVNode("view", { class: "serviceTime" }, [
                    vue.createElementVNode("text", null, "\u9884\u7EA6\u65F6\u95F4"),
                    vue.createElementVNode("text", null, vue.toDisplayString(item.serveStartTime), 1)
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "serviceAddress" }, [
                vue.createCommentVNode(" <view>\u670D\u52A1\u5730\u5740</view> "),
                vue.createElementVNode("view", { class: "address" }, [
                  vue.createElementVNode("view", { class: "addressContent" }, vue.toDisplayString(item.serveAddress), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "cardFooter" }, [
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode("text", { class: "price-label" }, "\u670D\u52A1\u8D39\u7528"),
                  vue.createTextVNode(" \uFFE5" + vue.toDisplayString(item.serveFee), 1)
                ]),
                vue.createElementVNode("view", {
                  class: "robBtn btn-red",
                  onClick: ($event) => handleRob(item.id)
                }, "\u7ACB\u5373\u62A2\u5355", 8, ["onClick"])
              ])
            ]);
          }), 128)),
          vue.createElementVNode("view", { class: "footer" }, "- \u5DF2 \u7ECF \u5230 \u5E95 \u4E86 -"),
          vue.createCommentVNode(" \u63D0\u793A\u7A97\u793A\u4F8B "),
          vue.createVNode(_component_uni_popup, {
            ref_key: "alertDialog",
            ref: alertDialog,
            type: "dialog",
            "is-mask-click": false
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "dialog" }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["img", isRob.value ? "success" : "fail"])
                }, null, 2),
                vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(isRob.value ? "\u62A2\u5355\u6210\u529F" : "\u5F88\u9057\u61BE\uFF0C\u62A2\u5355\u5931\u8D25"), 1),
                vue.createElementVNode("view", {
                  class: "footer",
                  onClick: handleClose
                }, "\u786E\u5B9A")
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  var HomeList$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-62e7a190"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/components/homeList.vue"]]);
  const _sfc_main$p = {
    __name: "index",
    setup(__props) {
      const fixTop = vue.ref(false);
      const icCanScroll = vue.ref(true);
      const orderType = vue.ref(0);
      const serveId = vue.ref("");
      let homeFilterList = vue.reactive({
        data: []
      });
      let homeList = vue.reactive({
        data: []
      });
      vue.onMounted(() => {
        getRobOrderList();
        getHomeFilterList();
      });
      onPullDownRefresh(() => {
        getList();
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1e3);
        formatAppLog("log", "at pages/index/index.vue:84", "refresh");
      });
      const tabChange = (val, id) => {
        formatAppLog("log", "at pages/index/index.vue:87", val, id, "val, id");
        orderType.value = val;
        serveId.value = id;
        getList();
      };
      const getList = () => {
        if (!orderType.value) {
          getRobOrderList(serveId.value);
        } else {
          getDispatchList(serveId.value);
        }
      };
      const getDispatchList = (params) => {
        getDispatchOrder(params).then((res) => {
          homeList.data = res.data.ordersSeizes;
          formatAppLog("log", "at pages/index/index.vue:109", res, homeList.data, 1111111);
        });
      };
      const getRobOrderList = (params) => {
        getRobOrder(params).then((res) => {
          homeList.data = res.data.ordersSeizes;
          formatAppLog("log", "at pages/index/index.vue:116", res, homeList.data, 1111111);
        });
      };
      const getHomeFilterList = () => {
        getHomeFilter().then((res) => {
          homeFilterList.data = res.data;
        });
      };
      const handleCanScroll = (val) => {
        formatAppLog("log", "at pages/index/index.vue:128", val, "\u662F\u5426\u53EF\u6ED1\u52A8");
        icCanScroll.value = !val;
      };
      const handleScroll = (e2) => {
        if (e2.detail.scrollTop > 188) {
          fixTop.value = true;
        } else {
          fixTop.value = false;
        }
      };
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/index/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createCommentVNode(" \u624B\u673A\u72B6\u6001\u680F "),
          vue.createVNode(_component_uni_nav_bar, {
            statusBar: "true",
            backgroundColor: "#F74347"
          }),
          vue.createElementVNode("scroll-view", {
            "scroll-y": icCanScroll.value,
            class: "scrollList",
            onScroll: handleScroll
          }, [
            vue.createCommentVNode(" \u9876\u90E8\u57FA\u7840\u914D\u7F6E\u548C\u80CC\u666F\u56FE "),
            vue.createElementVNode("view", { class: "navFrame" }, [
              vue.createCommentVNode(" nav "),
              vue.createVNode(UniNav$1, { onGoBack: goBack })
            ]),
            vue.createCommentVNode(" \u9996\u9875\u7B5B\u9009 "),
            vue.createVNode(vue.unref(HomeFilter), {
              onHandleCanScroll: handleCanScroll,
              homeFilterList: vue.unref(homeFilterList).data,
              onGetList: getList,
              onTabChange: tabChange
            }, null, 8, ["homeFilterList"]),
            vue.createCommentVNode(" \u5438\u9876\u7B5B\u9009 "),
            vue.withDirectives(vue.createVNode(vue.unref(HomeFilter), {
              fixTop: fixTop.value,
              homeFilterList: vue.unref(homeFilterList).data,
              onGetList: getList
            }, null, 8, ["fixTop", "homeFilterList"]), [
              [vue.vShow, fixTop.value]
            ]),
            vue.createCommentVNode(" end "),
            vue.unref(homeList).data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList$1), {
              key: 0,
              data: vue.unref(homeList).data,
              onRefresh: getRobOrderList
            }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 }))
          ], 40, ["scroll-y"]),
          vue.createCommentVNode(" footer "),
          vue.createVNode(UniFooter, { pagePath: "pages/index/index" }),
          vue.createCommentVNode(" end ")
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-57280228"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/index.vue"]]);
  const _sfc_main$o = {
    __name: "index",
    props: {
      title: {
        type: String,
        default: ""
      },
      rithtText: {
        type: String,
        default: ""
      },
      isLeftText: {
        type: Boolean
      }
    },
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      users.taskStatus;
      const goBack = () => {
        emit("goBack");
      };
      const handleAll = () => {
        emit("handleAll");
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        return __props.isLeftText ? (vue.openBlock(), vue.createBlock(_component_uni_nav_bar, {
          key: 0,
          title: __props.title,
          statusBar: "true",
          fixed: "true"
        }, null, 8, ["title"])) : (vue.openBlock(), vue.createBlock(_component_uni_nav_bar, {
          key: 1,
          onClickLeft: goBack,
          "left-icon": "back",
          leftIcon: "arrowleft",
          title: __props.title,
          statusBar: "true",
          fixed: "true",
          "right-text": __props.rithtText,
          onClickRight: handleAll
        }, null, 8, ["title", "right-text"]));
      };
    }
  };
  var UniNav = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-30dede9e"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-nav/index.vue"]]);
  const _sfc_main$n = {
    __name: "index",
    setup(__props) {
      const activeId = vue.ref(null);
      const activeIndex = vue.ref(0);
      const serviceSkill = vue.reactive({
        data: []
      });
      const rightItem = vue.reactive({
        data: []
      });
      const status = vue.ref("read");
      vue.onMounted(() => {
        getServiceSkillAllFunc();
      });
      const getServiceSkillAllFunc = () => {
        getServiceSkillAll().then((res) => {
          if (res.code == 200) {
            serviceSkill.data = res.data;
            activeId.value = res.data[0].serveTypeId;
            rightItem.data = serviceSkill.data[0].serveSkillItemResDTOList;
            formatAppLog("log", "at pages/serviceSkill/index.vue:77", serviceSkill.data, "serviceSkill.data");
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleSelect = (active) => {
        if (status.value === "read")
          return;
        serviceSkill.data[activeIndex.value].serveSkillItemResDTOList = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList.map((item) => {
          if (active.serveItemId === item.serveItemId) {
            return Object.assign({}, item, { isSelected: !item.isSelected });
          } else {
            return item;
          }
        }), rightItem.data = [
          ...serviceSkill.data[activeIndex.value].serveSkillItemResDTOList
        ];
        formatAppLog("log", "at pages/serviceSkill/index.vue:105", serviceSkill.data, "\u70B9\u51FB\u540E ");
      };
      const handleSubmit = () => {
        const selectedList = [];
        serviceSkill.data.forEach((item, index) => {
          item.serveSkillItemResDTOList.forEach((item1, index1) => {
            if (item1.isSelected) {
              selectedList.push({
                serveItemId: item1.serveItemId,
                serveTypeId: item.serveTypeId
              });
            }
          });
        });
        formatAppLog("log", "at pages/serviceSkill/index.vue:120", selectedList, "selectedList");
        updateServiceSkill(selectedList).then((res) => {
          if (res.code === 200) {
            status.value = "read";
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleCancel = () => {
        status.value = "read";
      };
      const handleEdit = () => {
        status.value = "edit";
        formatAppLog("log", "at pages/serviceSkill/index.vue:143", "\u7F16\u8F91\u72B6\u6001");
      };
      const tabChange = (id, index) => {
        activeId.value = id;
        activeIndex.value = index;
        rightItem.data = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceSkill" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "\u9009\u62E9\u670D\u52A1\u6280\u80FD",
            onGoBack: goBack,
            rithtText: status.value === "read" ? "\u7F16\u8F91" : "",
            onHandleAll: handleEdit
          }, null, 8, ["rithtText"]),
          vue.createElementVNode("view", { class: "servicePage" }, [
            vue.createElementVNode("view", { class: "left" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(serviceSkill.data, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
                  onClick: ($event) => tabChange(item.serveTypeId, index)
                }, [
                  vue.createElementVNode("view", { class: "tag" }, [
                    vue.createTextVNode(vue.toDisplayString(item.serveTypeName) + " ", 1),
                    item.count ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "selectNum"
                    }, vue.toDisplayString(item.count), 1)) : vue.createCommentVNode("v-if", true)
                  ])
                ], 10, ["onClick"]);
              }), 128))
            ]),
            vue.createCommentVNode(" \u53F3\u8FB9\u5185\u5BB9\u533A\u57DF "),
            vue.createElementVNode("view", { class: "serviceBox right" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "clean" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(rightItem.data, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["card", item.isSelected ? "active" : ""]),
                      key: index,
                      onClick: ($event) => handleSelect(item)
                    }, vue.toDisplayString(item.serveItemName), 11, ["onClick"]);
                  }), 128))
                ])
              ])
            ])
          ]),
          vue.withDirectives(vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-gray btn",
              onClick: handleCancel
            }, "\u53D6\u6D88"),
            vue.createElementVNode("view", {
              class: "btn-red btn",
              onClick: handleSubmit
            }, "\u4FDD\u5B58")
          ], 512), [
            [vue.vShow, status.value === "edit"]
          ])
        ]);
      };
    }
  };
  var PagesServiceSkillIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-f34db350"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/serviceSkill/index.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    setup(__props) {
      const canPickUp = vue.ref(false);
      onShow(() => {
        getSetting();
      });
      const handlePickUpStatus = () => {
        setPickUpStatus({
          canPickUp: canPickUp.value ? 0 : 1
        }).then((res) => {
          if (res.code == 200) {
            getSetting();
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const getSetting = () => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            canPickUp.value = res.data.canPickUp;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceSkill" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "\u63A5\u5355\u8BBE\u7F6E",
            onGoBack: goBack
          }),
          vue.createElementVNode("view", { class: "switchBox" }, [
            vue.createElementVNode("text", null, "\u5F00\u542F\u63A5\u5355"),
            vue.createElementVNode("switch", {
              color: "#F74347",
              style: { "transform": "scale(0.7)" },
              onChange: handlePickUpStatus,
              checked: canPickUp.value
            }, null, 40, ["checked"])
          ])
        ]);
      };
    }
  };
  var PagesGetOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-6bad7658"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/getOrder/index.vue"]]);
  const _sfc_main$l = {
    __name: "index",
    setup(__props) {
      const cityName = vue.ref("\u8BF7\u9009\u62E9");
      const address = vue.ref("\u8BF7\u9009\u62E9");
      const store2 = useStore();
      const users = store2.state.user;
      const location2 = vue.reactive({
        latitude: "",
        longitude: ""
      });
      const params = vue.reactive({
        cityCode: "",
        location: "",
        intentionScope: ""
      });
      const markers = vue.reactive({
        data: {
          id: 1,
          latitude: 0,
          longitude: 0,
          iconPath: "/static/new/img_weizhi@2x.png",
          width: 60,
          height: 60
        }
      });
      const markerTap = () => {
        formatAppLog("log", "at pages/serviceRange/index.vue:77", "111");
      };
      const handleSelectCity = () => {
        uni.navigateTo({
          url: "/pages/city/index?address=" + address.value
        });
      };
      const handleChooseRange = () => {
        uni.chooseLocation({
          latitude: location2.longitude,
          longitude: location2.latitude,
          success: function(res) {
            address.value = res.name;
            location2.latitude = res.longitude;
            location2.longitude = res.latitude;
            markers.data.latitude = res.latitude;
            markers.data.longitude = res.longitude;
            store2.commit("user/setLocation", location2);
            store2.commit("user/setAddress", address.value);
          },
          fail: function(err) {
            formatAppLog("log", "at pages/serviceRange/index.vue:101", err, "err");
          }
        });
      };
      const handleSubmit = () => {
        setServiceSetting({
          cityCode: params.cityCode,
          location: String(location2.latitude) + "," + String(location2.longitude),
          intentionScope: users.address
        }).then((res) => {
          uni.showToast({
            title: "\u4FDD\u5B58\u6210\u529F",
            duration: 1500,
            icon: "none"
          });
          formatAppLog("log", "at pages/serviceRange/index.vue:116", res, "\u8BBE\u7F6E\u670D\u52A1\u8303\u56F4");
        });
      };
      onLoad((option) => {
        getSettingInfo().then((res) => {
          formatAppLog("log", "at pages/serviceRange/index.vue:122", res, "\u83B7\u53D6\u5F53\u524D\u914D\u7F6E\u7684\u4F4D\u7F6E\u4FE1\u606F");
          if (!res.data.location) {
            uni.getLocation({
              type: "gcj02",
              geocode: true,
              success: function(res2) {
                location2.latitude = res2.longitude;
                location2.longitude = res2.latitude;
                markers.data.latitude = res2.latitude;
                markers.data.longitude = res2.longitude;
                formatAppLog("log", "at pages/serviceRange/index.vue:133", res2, "\u5F53\u524D\u4F4D\u7F6E1");
              }
            });
          } else {
            params.cityCode = res.data.cityCode;
            cityName.value = res.data.cityName;
            address.value = res.data.intentionScope;
            location2.latitude = res.data.location.split(",")[0];
            location2.longitude = res.data.location.split(",")[1];
            markers.data.latitude = res.data.location.split(",")[1];
            markers.data.longitude = res.data.location.split(",")[0];
          }
          if (option.name) {
            cityName.value = option.name;
            address.value = option.address;
            params.cityCode = option.cityCode;
            params.intentionScope = option.name;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      });
      vue.onMounted(() => {
      });
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/index/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceRange" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "\u8BF7\u9009\u62E9\u5DE5\u4F5C\u5730\u70B9",
            onGoBack: goBack
          }),
          vue.createElementVNode("map", {
            class: "map",
            markers: [markers.data],
            latitude: location2.latitude,
            longitude: location2.longitude,
            onMarkertap: markerTap
          }, null, 40, ["markers", "latitude", "longitude"]),
          vue.createElementVNode("cover-view", { class: "address" }, [
            vue.createElementVNode("cover-view", { class: "city" }, [
              vue.createElementVNode("cover-view", { class: "label" }, "\u670D\u52A1\u57CE\u5E02"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode("cover-view", { class: "cityName" }, vue.toDisplayString(cityName.value), 1),
                vue.createElementVNode("cover-image", {
                  onClick: handleSelectCity,
                  class: "icon",
                  src: "/static/new/icon_more@2x.png"
                })
              ])
            ]),
            vue.createElementVNode("cover-view", { class: "range" }, [
              vue.createElementVNode("cover-view", { class: "label" }, "\u610F\u5411\u63A5\u5355\u8303\u56F4"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode("cover-view", { class: "rangeName" }, vue.toDisplayString(address.value), 1),
                vue.createElementVNode("cover-image", {
                  onClick: handleChooseRange,
                  class: "icon",
                  src: "/static/new/icon_more@2x.png"
                })
              ])
            ]),
            vue.createElementVNode("cover-view", { class: "btn-red" }, [
              vue.createElementVNode("cover-view", {
                class: "text",
                onClick: handleSubmit
              }, "\u4FDD\u5B58")
            ])
          ])
        ]);
      };
    }
  };
  var PagesServiceRangeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-6cac4378"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/serviceRange/index.vue"]]);
  const Citys = {
    list: [
      {
        "cities": [
          {
            "cityCode": "0837",
            "cityName": "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0997",
            "cityName": "\u963F\u514B\u82CF\u5730\u533A"
          },
          {
            "cityCode": "1997",
            "cityName": "\u963F\u62C9\u5C14\u5E02"
          },
          {
            "cityCode": "0483",
            "cityName": "\u963F\u62C9\u5584\u76DF"
          },
          {
            "cityCode": "0906",
            "cityName": "\u963F\u52D2\u6CF0\u5730\u533A"
          },
          {
            "cityCode": "0897",
            "cityName": "\u963F\u91CC\u5730\u533A"
          },
          {
            "cityCode": "0412",
            "cityName": "\u978D\u5C71\u5E02"
          },
          {
            "cityCode": "0915",
            "cityName": "\u5B89\u5EB7\u5E02"
          },
          {
            "cityCode": "0556",
            "cityName": "\u5B89\u5E86\u5E02"
          },
          {
            "cityCode": "0853",
            "cityName": "\u5B89\u987A\u5E02"
          },
          {
            "cityCode": "0372",
            "cityName": "\u5B89\u9633\u5E02"
          },
          {
            "cityCode": "1853",
            "cityName": "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
          }
        ],
        "idx": "A"
      },
      {
        "cities": [
          {
            "cityCode": "0478",
            "cityName": "\u5DF4\u5F66\u6DD6\u5C14\u5E02"
          },
          {
            "cityCode": "0996",
            "cityName": "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0827",
            "cityName": "\u5DF4\u4E2D\u5E02"
          },
          {
            "cityCode": "0436",
            "cityName": "\u767D\u57CE\u5E02"
          },
          {
            "cityCode": "0802",
            "cityName": "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0439",
            "cityName": "\u767D\u5C71\u5E02"
          },
          {
            "cityCode": "0943",
            "cityName": "\u767D\u94F6\u5E02"
          },
          {
            "cityCode": "0776",
            "cityName": "\u767E\u8272\u5E02"
          },
          {
            "cityCode": "0552",
            "cityName": "\u868C\u57E0\u5E02"
          },
          {
            "cityCode": "0472",
            "cityName": "\u5305\u5934\u5E02"
          },
          {
            "cityCode": "0312",
            "cityName": "\u4FDD\u5B9A\u5E02"
          },
          {
            "cityCode": "0875",
            "cityName": "\u4FDD\u5C71\u5E02"
          },
          {
            "cityCode": "0801",
            "cityName": "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0917",
            "cityName": "\u5B9D\u9E21\u5E02"
          },
          {
            "cityCode": "0779",
            "cityName": "\u5317\u6D77\u5E02"
          },
          {
            "cityCode": "010",
            "cityName": "\u5317\u4EAC\u5E02"
          },
          {
            "cityCode": "1906",
            "cityName": "\u5317\u5C6F\u5E02"
          },
          {
            "cityCode": "0414",
            "cityName": "\u672C\u6EAA\u5E02"
          },
          {
            "cityCode": "0857",
            "cityName": "\u6BD5\u8282\u5E02"
          },
          {
            "cityCode": "0543",
            "cityName": "\u6EE8\u5DDE\u5E02"
          },
          {
            "cityCode": "0909",
            "cityName": "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0558",
            "cityName": "\u4EB3\u5DDE\u5E02"
          }
        ],
        "idx": "B"
      },
      {
        "cities": [
          {
            "cityCode": "0317",
            "cityName": "\u6CA7\u5DDE\u5E02"
          },
          {
            "cityCode": "0895",
            "cityName": "\u660C\u90FD\u5E02"
          },
          {
            "cityCode": "0994",
            "cityName": "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0803",
            "cityName": "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0736",
            "cityName": "\u5E38\u5FB7\u5E02"
          },
          {
            "cityCode": "0519",
            "cityName": "\u5E38\u5DDE\u5E02"
          },
          {
            "cityCode": "0431",
            "cityName": "\u957F\u6625\u5E02"
          },
          {
            "cityCode": "0731",
            "cityName": "\u957F\u6C99\u5E02"
          },
          {
            "cityCode": "0355",
            "cityName": "\u957F\u6CBB\u5E02"
          },
          {
            "cityCode": "0421",
            "cityName": "\u671D\u9633\u5E02"
          },
          {
            "cityCode": "0768",
            "cityName": "\u6F6E\u5DDE\u5E02"
          },
          {
            "cityCode": "0735",
            "cityName": "\u90F4\u5DDE\u5E02"
          },
          {
            "cityCode": "028",
            "cityName": "\u6210\u90FD\u5E02"
          },
          {
            "cityCode": "0804",
            "cityName": "\u6F84\u8FC8\u53BF"
          },
          {
            "cityCode": "0314",
            "cityName": "\u627F\u5FB7\u5E02"
          },
          {
            "cityCode": "0566",
            "cityName": "\u6C60\u5DDE\u5E02"
          },
          {
            "cityCode": "0476",
            "cityName": "\u8D64\u5CF0\u5E02"
          },
          {
            "cityCode": "1771",
            "cityName": "\u5D07\u5DE6\u5E02"
          },
          {
            "cityCode": "0550",
            "cityName": "\u6EC1\u5DDE\u5E02"
          },
          {
            "cityCode": "0878",
            "cityName": "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "023",
            "cityName": "\u91CD\u5E86\u5E02"
          }
        ],
        "idx": "C"
      },
      {
        "cities": [
          {
            "cityCode": "0818",
            "cityName": "\u8FBE\u5DDE\u5E02"
          },
          {
            "cityCode": "0872",
            "cityName": "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0411",
            "cityName": "\u5927\u8FDE\u5E02"
          },
          {
            "cityCode": "0459",
            "cityName": "\u5927\u5E86\u5E02"
          },
          {
            "cityCode": "0352",
            "cityName": "\u5927\u540C\u5E02"
          },
          {
            "cityCode": "0457",
            "cityName": "\u5927\u5174\u5B89\u5CAD\u5730\u533A"
          },
          {
            "cityCode": "0415",
            "cityName": "\u4E39\u4E1C\u5E02"
          },
          {
            "cityCode": "0692",
            "cityName": "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0838",
            "cityName": "\u5FB7\u9633\u5E02"
          },
          {
            "cityCode": "0534",
            "cityName": "\u5FB7\u5DDE\u5E02"
          },
          {
            "cityCode": "0887",
            "cityName": "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0806",
            "cityName": "\u5B9A\u5B89\u53BF"
          },
          {
            "cityCode": "0932",
            "cityName": "\u5B9A\u897F\u5E02"
          },
          {
            "cityCode": "0807",
            "cityName": "\u4E1C\u65B9\u5E02"
          },
          {
            "cityCode": "0546",
            "cityName": "\u4E1C\u8425\u5E02"
          },
          {
            "cityCode": "0769",
            "cityName": "\u4E1C\u839E\u5E02"
          },
          {
            "cityCode": "0805",
            "cityName": "\u510B\u5DDE\u5E02"
          }
        ],
        "idx": "D"
      },
      {
        "cities": [
          {
            "cityCode": "0477",
            "cityName": "\u9102\u5C14\u591A\u65AF\u5E02"
          },
          {
            "cityCode": "0711",
            "cityName": "\u9102\u5DDE\u5E02"
          },
          {
            "cityCode": "0718",
            "cityName": "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
          }
        ],
        "idx": "E"
      },
      {
        "cities": [
          {
            "cityCode": "0770",
            "cityName": "\u9632\u57CE\u6E2F\u5E02"
          },
          {
            "cityCode": "0757",
            "cityName": "\u4F5B\u5C71\u5E02"
          },
          {
            "cityCode": "0591",
            "cityName": "\u798F\u5DDE\u5E02"
          },
          {
            "cityCode": "0413",
            "cityName": "\u629A\u987A\u5E02"
          },
          {
            "cityCode": "0794",
            "cityName": "\u629A\u5DDE\u5E02"
          },
          {
            "cityCode": "0418",
            "cityName": "\u961C\u65B0\u5E02"
          },
          {
            "cityCode": "1558",
            "cityName": "\u961C\u9633\u5E02"
          }
        ],
        "idx": "F"
      },
      {
        "cities": [
          {
            "cityCode": "0941",
            "cityName": "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0836",
            "cityName": "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0797",
            "cityName": "\u8D63\u5DDE\u5E02"
          },
          {
            "cityCode": "0954",
            "cityName": "\u56FA\u539F\u5E02"
          },
          {
            "cityCode": "0826",
            "cityName": "\u5E7F\u5B89\u5E02"
          },
          {
            "cityCode": "0839",
            "cityName": "\u5E7F\u5143\u5E02"
          },
          {
            "cityCode": "020",
            "cityName": "\u5E7F\u5DDE\u5E02"
          },
          {
            "cityCode": "0773",
            "cityName": "\u6842\u6797\u5E02"
          },
          {
            "cityCode": "1755",
            "cityName": "\u8D35\u6E2F\u5E02"
          },
          {
            "cityCode": "0851",
            "cityName": "\u8D35\u9633\u5E02"
          },
          {
            "cityCode": "0975",
            "cityName": "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          }
        ],
        "idx": "G"
      },
      {
        "cities": [
          {
            "cityCode": "0451",
            "cityName": "\u54C8\u5C14\u6EE8\u5E02"
          },
          {
            "cityCode": "0902",
            "cityName": "\u54C8\u5BC6\u5E02"
          },
          {
            "cityCode": "0970",
            "cityName": "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0972",
            "cityName": "\u6D77\u4E1C\u5E02"
          },
          {
            "cityCode": "0898",
            "cityName": "\u6D77\u53E3\u5E02"
          },
          {
            "cityCode": "0974",
            "cityName": "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0977",
            "cityName": "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0310",
            "cityName": "\u90AF\u90F8\u5E02"
          },
          {
            "cityCode": "0916",
            "cityName": "\u6C49\u4E2D\u5E02"
          },
          {
            "cityCode": "0571",
            "cityName": "\u676D\u5DDE\u5E02"
          },
          {
            "cityCode": "0530",
            "cityName": "\u83CF\u6CFD\u5E02"
          },
          {
            "cityCode": "0903",
            "cityName": "\u548C\u7530\u5730\u533A"
          },
          {
            "cityCode": "0551",
            "cityName": "\u5408\u80A5\u5E02"
          },
          {
            "cityCode": "0778",
            "cityName": "\u6CB3\u6C60\u5E02"
          },
          {
            "cityCode": "0762",
            "cityName": "\u6CB3\u6E90\u5E02"
          },
          {
            "cityCode": "0392",
            "cityName": "\u9E64\u58C1\u5E02"
          },
          {
            "cityCode": "0468",
            "cityName": "\u9E64\u5C97\u5E02"
          },
          {
            "cityCode": "1774",
            "cityName": "\u8D3A\u5DDE\u5E02"
          },
          {
            "cityCode": "0456",
            "cityName": "\u9ED1\u6CB3\u5E02"
          },
          {
            "cityCode": "0318",
            "cityName": "\u8861\u6C34\u5E02"
          },
          {
            "cityCode": "0734",
            "cityName": "\u8861\u9633\u5E02"
          },
          {
            "cityCode": "0873",
            "cityName": "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0471",
            "cityName": "\u547C\u548C\u6D69\u7279\u5E02"
          },
          {
            "cityCode": "0470",
            "cityName": "\u547C\u4F26\u8D1D\u5C14\u5E02"
          },
          {
            "cityCode": "0429",
            "cityName": "\u846B\u82A6\u5C9B\u5E02"
          },
          {
            "cityCode": "0992",
            "cityName": "\u80E1\u6768\u6CB3\u5E02"
          },
          {
            "cityCode": "0572",
            "cityName": "\u6E56\u5DDE\u5E02"
          },
          {
            "cityCode": "0745",
            "cityName": "\u6000\u5316\u5E02"
          },
          {
            "cityCode": "0517",
            "cityName": "\u6DEE\u5B89\u5E02"
          },
          {
            "cityCode": "0561",
            "cityName": "\u6DEE\u5317\u5E02"
          },
          {
            "cityCode": "0554",
            "cityName": "\u6DEE\u5357\u5E02"
          },
          {
            "cityCode": "0713",
            "cityName": "\u9EC4\u5188\u5E02"
          },
          {
            "cityCode": "0973",
            "cityName": "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0559",
            "cityName": "\u9EC4\u5C71\u5E02"
          },
          {
            "cityCode": "0714",
            "cityName": "\u9EC4\u77F3\u5E02"
          },
          {
            "cityCode": "0752",
            "cityName": "\u60E0\u5DDE\u5E02"
          }
        ],
        "idx": "H"
      },
      {
        "cities": [],
        "idx": "I"
      },
      {
        "cities": [
          {
            "cityCode": "0467",
            "cityName": "\u9E21\u897F\u5E02"
          },
          {
            "cityCode": "0796",
            "cityName": "\u5409\u5B89\u5E02"
          },
          {
            "cityCode": "0432",
            "cityName": "\u5409\u6797\u5E02"
          },
          {
            "cityCode": "0531",
            "cityName": "\u6D4E\u5357\u5E02"
          },
          {
            "cityCode": "0537",
            "cityName": "\u6D4E\u5B81\u5E02"
          },
          {
            "cityCode": "1391",
            "cityName": "\u6D4E\u6E90\u5E02"
          },
          {
            "cityCode": "0573",
            "cityName": "\u5609\u5174\u5E02"
          },
          {
            "cityCode": "1937",
            "cityName": "\u5609\u5CEA\u5173\u5E02"
          },
          {
            "cityCode": "0454",
            "cityName": "\u4F73\u6728\u65AF\u5E02"
          },
          {
            "cityCode": "0750",
            "cityName": "\u6C5F\u95E8\u5E02"
          },
          {
            "cityCode": "0391",
            "cityName": "\u7126\u4F5C\u5E02"
          },
          {
            "cityCode": "0663",
            "cityName": "\u63ED\u9633\u5E02"
          },
          {
            "cityCode": "0935",
            "cityName": "\u91D1\u660C\u5E02"
          },
          {
            "cityCode": "0579",
            "cityName": "\u91D1\u534E\u5E02"
          },
          {
            "cityCode": "0416",
            "cityName": "\u9526\u5DDE\u5E02"
          },
          {
            "cityCode": "0356",
            "cityName": "\u664B\u57CE\u5E02"
          },
          {
            "cityCode": "0354",
            "cityName": "\u664B\u4E2D\u5E02"
          },
          {
            "cityCode": "0724",
            "cityName": "\u8346\u95E8\u5E02"
          },
          {
            "cityCode": "0716",
            "cityName": "\u8346\u5DDE\u5E02"
          },
          {
            "cityCode": "0798",
            "cityName": "\u666F\u5FB7\u9547\u5E02"
          },
          {
            "cityCode": "0792",
            "cityName": "\u4E5D\u6C5F\u5E02"
          },
          {
            "cityCode": "0937",
            "cityName": "\u9152\u6CC9\u5E02"
          }
        ],
        "idx": "J"
      },
      {
        "cities": [
          {
            "cityCode": "0998",
            "cityName": "\u5580\u4EC0\u5730\u533A"
          },
          {
            "cityCode": "0378",
            "cityName": "\u5F00\u5C01\u5E02"
          },
          {
            "cityCode": "1999",
            "cityName": "\u53EF\u514B\u8FBE\u62C9\u5E02"
          },
          {
            "cityCode": "0990",
            "cityName": "\u514B\u62C9\u739B\u4F9D\u5E02"
          },
          {
            "cityCode": "0908",
            "cityName": "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0871",
            "cityName": "\u6606\u660E\u5E02"
          },
          {
            "cityCode": "1903",
            "cityName": "\u6606\u7389\u5E02"
          }
        ],
        "idx": "K"
      },
      {
        "cities": [
          {
            "cityCode": "0891",
            "cityName": "\u62C9\u8428\u5E02"
          },
          {
            "cityCode": "1772",
            "cityName": "\u6765\u5BBE\u5E02"
          },
          {
            "cityCode": "0931",
            "cityName": "\u5170\u5DDE\u5E02"
          },
          {
            "cityCode": "0316",
            "cityName": "\u5ECA\u574A\u5E02"
          },
          {
            "cityCode": "2802",
            "cityName": "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0833",
            "cityName": "\u4E50\u5C71\u5E02"
          },
          {
            "cityCode": "0888",
            "cityName": "\u4E3D\u6C5F\u5E02"
          },
          {
            "cityCode": "0578",
            "cityName": "\u4E3D\u6C34\u5E02"
          },
          {
            "cityCode": "0518",
            "cityName": "\u8FDE\u4E91\u6E2F\u5E02"
          },
          {
            "cityCode": "0834",
            "cityName": "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0635",
            "cityName": "\u804A\u57CE\u5E02"
          },
          {
            "cityCode": "0419",
            "cityName": "\u8FBD\u9633\u5E02"
          },
          {
            "cityCode": "0437",
            "cityName": "\u8FBD\u6E90\u5E02"
          },
          {
            "cityCode": "0894",
            "cityName": "\u6797\u829D\u5E02"
          },
          {
            "cityCode": "0883",
            "cityName": "\u4E34\u6CA7\u5E02"
          },
          {
            "cityCode": "0357",
            "cityName": "\u4E34\u6C7E\u5E02"
          },
          {
            "cityCode": "1896",
            "cityName": "\u4E34\u9AD8\u53BF"
          },
          {
            "cityCode": "0930",
            "cityName": "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0539",
            "cityName": "\u4E34\u6C82\u5E02"
          },
          {
            "cityCode": "0809",
            "cityName": "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0772",
            "cityName": "\u67F3\u5DDE\u5E02"
          },
          {
            "cityCode": "0564",
            "cityName": "\u516D\u5B89\u5E02"
          },
          {
            "cityCode": "0858",
            "cityName": "\u516D\u76D8\u6C34\u5E02"
          },
          {
            "cityCode": "0597",
            "cityName": "\u9F99\u5CA9\u5E02"
          },
          {
            "cityCode": "2935",
            "cityName": "\u9647\u5357\u5E02"
          },
          {
            "cityCode": "0738",
            "cityName": "\u5A04\u5E95\u5E02"
          },
          {
            "cityCode": "0358",
            "cityName": "\u5415\u6881\u5E02"
          },
          {
            "cityCode": "0379",
            "cityName": "\u6D1B\u9633\u5E02"
          },
          {
            "cityCode": "0830",
            "cityName": "\u6CF8\u5DDE\u5E02"
          },
          {
            "cityCode": "0395",
            "cityName": "\u6F2F\u6CB3\u5E02"
          }
        ],
        "idx": "L"
      },
      {
        "cities": [
          {
            "cityCode": "0555",
            "cityName": "\u9A6C\u978D\u5C71\u5E02"
          },
          {
            "cityCode": "0668",
            "cityName": "\u8302\u540D\u5E02"
          },
          {
            "cityCode": "0753",
            "cityName": "\u6885\u5DDE\u5E02"
          },
          {
            "cityCode": "1833",
            "cityName": "\u7709\u5C71\u5E02"
          },
          {
            "cityCode": "0816",
            "cityName": "\u7EF5\u9633\u5E02"
          },
          {
            "cityCode": "0453",
            "cityName": "\u7261\u4E39\u6C5F\u5E02"
          }
        ],
        "idx": "M"
      },
      {
        "cities": [
          {
            "cityCode": "0896",
            "cityName": "\u90A3\u66F2\u5E02"
          },
          {
            "cityCode": "0791",
            "cityName": "\u5357\u660C\u5E02"
          },
          {
            "cityCode": "0817",
            "cityName": "\u5357\u5145\u5E02"
          },
          {
            "cityCode": "025",
            "cityName": "\u5357\u4EAC\u5E02"
          },
          {
            "cityCode": "0771",
            "cityName": "\u5357\u5B81\u5E02"
          },
          {
            "cityCode": "0599",
            "cityName": "\u5357\u5E73\u5E02"
          },
          {
            "cityCode": "0513",
            "cityName": "\u5357\u901A\u5E02"
          },
          {
            "cityCode": "0377",
            "cityName": "\u5357\u9633\u5E02"
          },
          {
            "cityCode": "1832",
            "cityName": "\u5185\u6C5F\u5E02"
          },
          {
            "cityCode": "0574",
            "cityName": "\u5B81\u6CE2\u5E02"
          },
          {
            "cityCode": "0593",
            "cityName": "\u5B81\u5FB7\u5E02"
          },
          {
            "cityCode": "0886",
            "cityName": "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE"
          }
        ],
        "idx": "N"
      },
      {
        "cities": [
          {
            "cityCode": "0812",
            "cityName": "\u6500\u679D\u82B1\u5E02"
          },
          {
            "cityCode": "0427",
            "cityName": "\u76D8\u9526\u5E02"
          },
          {
            "cityCode": "0799",
            "cityName": "\u840D\u4E61\u5E02"
          },
          {
            "cityCode": "0375",
            "cityName": "\u5E73\u9876\u5C71\u5E02"
          },
          {
            "cityCode": "0933",
            "cityName": "\u5E73\u51C9\u5E02"
          },
          {
            "cityCode": "0594",
            "cityName": "\u8386\u7530\u5E02"
          },
          {
            "cityCode": "0879",
            "cityName": "\u666E\u6D31\u5E02"
          },
          {
            "cityCode": "0393",
            "cityName": "\u6FEE\u9633\u5E02"
          }
        ],
        "idx": "P"
      },
      {
        "cities": [
          {
            "cityCode": "0464",
            "cityName": "\u4E03\u53F0\u6CB3\u5E02"
          },
          {
            "cityCode": "0452",
            "cityName": "\u9F50\u9F50\u54C8\u5C14\u5E02"
          },
          {
            "cityCode": "0855",
            "cityName": "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0854",
            "cityName": "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0859",
            "cityName": "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "2728",
            "cityName": "\u6F5C\u6C5F\u5E02"
          },
          {
            "cityCode": "0777",
            "cityName": "\u94A6\u5DDE\u5E02"
          },
          {
            "cityCode": "0335",
            "cityName": "\u79E6\u7687\u5C9B\u5E02"
          },
          {
            "cityCode": "0532",
            "cityName": "\u9752\u5C9B\u5E02"
          },
          {
            "cityCode": "0763",
            "cityName": "\u6E05\u8FDC\u5E02"
          },
          {
            "cityCode": "0934",
            "cityName": "\u5E86\u9633\u5E02"
          },
          {
            "cityCode": "1894",
            "cityName": "\u743C\u6D77\u5E02"
          },
          {
            "cityCode": "1899",
            "cityName": "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            "cityCode": "0874",
            "cityName": "\u66F2\u9756\u5E02"
          },
          {
            "cityCode": "0595",
            "cityName": "\u6CC9\u5DDE\u5E02"
          },
          {
            "cityCode": "0570",
            "cityName": "\u8862\u5DDE\u5E02"
          }
        ],
        "idx": "Q"
      },
      {
        "cities": [
          {
            "cityCode": "0892",
            "cityName": "\u65E5\u5580\u5219\u5E02"
          },
          {
            "cityCode": "0633",
            "cityName": "\u65E5\u7167\u5E02"
          }
        ],
        "idx": "R"
      },
      {
        "cities": [
          {
            "cityCode": "0398",
            "cityName": "\u4E09\u95E8\u5CE1\u5E02"
          },
          {
            "cityCode": "0598",
            "cityName": "\u4E09\u660E\u5E02"
          },
          {
            "cityCode": "2898",
            "cityName": "\u4E09\u6C99\u5E02"
          },
          {
            "cityCode": "0899",
            "cityName": "\u4E09\u4E9A\u5E02"
          },
          {
            "cityCode": "0893",
            "cityName": "\u5C71\u5357\u5E02"
          },
          {
            "cityCode": "0754",
            "cityName": "\u6C55\u5934\u5E02"
          },
          {
            "cityCode": "0660",
            "cityName": "\u6C55\u5C3E\u5E02"
          },
          {
            "cityCode": "0914",
            "cityName": "\u5546\u6D1B\u5E02"
          },
          {
            "cityCode": "0370",
            "cityName": "\u5546\u4E18\u5E02"
          },
          {
            "cityCode": "021",
            "cityName": "\u4E0A\u6D77\u5E02"
          },
          {
            "cityCode": "0793",
            "cityName": "\u4E0A\u9976\u5E02"
          },
          {
            "cityCode": "0751",
            "cityName": "\u97F6\u5173\u5E02"
          },
          {
            "cityCode": "0739",
            "cityName": "\u90B5\u9633\u5E02"
          },
          {
            "cityCode": "0575",
            "cityName": "\u7ECD\u5174\u5E02"
          },
          {
            "cityCode": "0755",
            "cityName": "\u6DF1\u5733\u5E02"
          },
          {
            "cityCode": "1719",
            "cityName": "\u795E\u519C\u67B6\u6797\u533A"
          },
          {
            "cityCode": "024",
            "cityName": "\u6C88\u9633\u5E02"
          },
          {
            "cityCode": "0719",
            "cityName": "\u5341\u5830\u5E02"
          },
          {
            "cityCode": "0993",
            "cityName": "\u77F3\u6CB3\u5B50\u5E02"
          },
          {
            "cityCode": "0311",
            "cityName": "\u77F3\u5BB6\u5E84\u5E02"
          },
          {
            "cityCode": "0952",
            "cityName": "\u77F3\u5634\u5C71\u5E02"
          },
          {
            "cityCode": "1909",
            "cityName": "\u53CC\u6CB3\u5E02"
          },
          {
            "cityCode": "0469",
            "cityName": "\u53CC\u9E2D\u5C71\u5E02"
          },
          {
            "cityCode": "0349",
            "cityName": "\u6714\u5DDE\u5E02"
          },
          {
            "cityCode": "0434",
            "cityName": "\u56DB\u5E73\u5E02"
          },
          {
            "cityCode": "0438",
            "cityName": "\u677E\u539F\u5E02"
          },
          {
            "cityCode": "0512",
            "cityName": "\u82CF\u5DDE\u5E02"
          },
          {
            "cityCode": "0527",
            "cityName": "\u5BBF\u8FC1\u5E02"
          },
          {
            "cityCode": "0557",
            "cityName": "\u5BBF\u5DDE\u5E02"
          },
          {
            "cityCode": "0722",
            "cityName": "\u968F\u5DDE\u5E02"
          },
          {
            "cityCode": "0455",
            "cityName": "\u7EE5\u5316\u5E02"
          },
          {
            "cityCode": "0825",
            "cityName": "\u9042\u5B81\u5E02"
          }
        ],
        "idx": "S"
      },
      {
        "cities": [
          {
            "cityCode": "0901",
            "cityName": "\u5854\u57CE\u5730\u533A"
          },
          {
            "cityCode": "1886",
            "cityName": "\u53F0\u6E7E\u7701"
          },
          {
            "cityCode": "0576",
            "cityName": "\u53F0\u5DDE\u5E02"
          },
          {
            "cityCode": "0538",
            "cityName": "\u6CF0\u5B89\u5E02"
          },
          {
            "cityCode": "0523",
            "cityName": "\u6CF0\u5DDE\u5E02"
          },
          {
            "cityCode": "0351",
            "cityName": "\u592A\u539F\u5E02"
          },
          {
            "cityCode": "0315",
            "cityName": "\u5510\u5C71\u5E02"
          },
          {
            "cityCode": "022",
            "cityName": "\u5929\u6D25\u5E02"
          },
          {
            "cityCode": "1728",
            "cityName": "\u5929\u95E8\u5E02"
          },
          {
            "cityCode": "0938",
            "cityName": "\u5929\u6C34\u5E02"
          },
          {
            "cityCode": "0410",
            "cityName": "\u94C1\u5CAD\u5E02"
          },
          {
            "cityCode": "1996",
            "cityName": "\u94C1\u95E8\u5173\u5E02"
          },
          {
            "cityCode": "0435",
            "cityName": "\u901A\u5316\u5E02"
          },
          {
            "cityCode": "0475",
            "cityName": "\u901A\u8FBD\u5E02"
          },
          {
            "cityCode": "0919",
            "cityName": "\u94DC\u5DDD\u5E02"
          },
          {
            "cityCode": "0562",
            "cityName": "\u94DC\u9675\u5E02"
          },
          {
            "cityCode": "0856",
            "cityName": "\u94DC\u4EC1\u5E02"
          },
          {
            "cityCode": "1998",
            "cityName": "\u56FE\u6728\u8212\u514B\u5E02"
          },
          {
            "cityCode": "0995",
            "cityName": "\u5410\u9C81\u756A\u5E02"
          },
          {
            "cityCode": "1892",
            "cityName": "\u5C6F\u660C\u53BF"
          }
        ],
        "idx": "T"
      },
      {
        "cities": [],
        "idx": "U"
      },
      {
        "cities": [],
        "idx": "V"
      },
      {
        "cities": [
          {
            "cityCode": "1900",
            "cityName": "\u5916\u56FD"
          },
          {
            "cityCode": "1898",
            "cityName": "\u4E07\u5B81\u5E02"
          },
          {
            "cityCode": "0631",
            "cityName": "\u5A01\u6D77\u5E02"
          },
          {
            "cityCode": "0536",
            "cityName": "\u6F4D\u574A\u5E02"
          },
          {
            "cityCode": "0913",
            "cityName": "\u6E2D\u5357\u5E02"
          },
          {
            "cityCode": "0577",
            "cityName": "\u6E29\u5DDE\u5E02"
          },
          {
            "cityCode": "1893",
            "cityName": "\u6587\u660C\u5E02"
          },
          {
            "cityCode": "0876",
            "cityName": "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0473",
            "cityName": "\u4E4C\u6D77\u5E02"
          },
          {
            "cityCode": "0474",
            "cityName": "\u4E4C\u5170\u5BDF\u5E03\u5E02"
          },
          {
            "cityCode": "0991",
            "cityName": "\u4E4C\u9C81\u6728\u9F50\u5E02"
          },
          {
            "cityCode": "0510",
            "cityName": "\u65E0\u9521\u5E02"
          },
          {
            "cityCode": "0553",
            "cityName": "\u829C\u6E56\u5E02"
          },
          {
            "cityCode": "0774",
            "cityName": "\u68A7\u5DDE\u5E02"
          },
          {
            "cityCode": "0953",
            "cityName": "\u5434\u5FE0\u5E02"
          },
          {
            "cityCode": "027",
            "cityName": "\u6B66\u6C49\u5E02"
          },
          {
            "cityCode": "1935",
            "cityName": "\u6B66\u5A01\u5E02"
          },
          {
            "cityCode": "1994",
            "cityName": "\u4E94\u5BB6\u6E20\u5E02"
          },
          {
            "cityCode": "1897",
            "cityName": "\u4E94\u6307\u5C71\u5E02"
          }
        ],
        "idx": "W"
      },
      {
        "cities": [
          {
            "cityCode": "029",
            "cityName": "\u897F\u5B89\u5E02"
          },
          {
            "cityCode": "0971",
            "cityName": "\u897F\u5B81\u5E02"
          },
          {
            "cityCode": "0691",
            "cityName": "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0479",
            "cityName": "\u9521\u6797\u90ED\u52D2\u76DF"
          },
          {
            "cityCode": "0592",
            "cityName": "\u53A6\u95E8\u5E02"
          },
          {
            "cityCode": "0728",
            "cityName": "\u4ED9\u6843\u5E02"
          },
          {
            "cityCode": "0715",
            "cityName": "\u54B8\u5B81\u5E02"
          },
          {
            "cityCode": "0910",
            "cityName": "\u54B8\u9633\u5E02"
          },
          {
            "cityCode": "1852",
            "cityName": "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"
          },
          {
            "cityCode": "0710",
            "cityName": "\u8944\u9633\u5E02"
          },
          {
            "cityCode": "0732",
            "cityName": "\u6E58\u6F6D\u5E02"
          },
          {
            "cityCode": "0743",
            "cityName": "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0712",
            "cityName": "\u5B5D\u611F\u5E02"
          },
          {
            "cityCode": "0373",
            "cityName": "\u65B0\u4E61\u5E02"
          },
          {
            "cityCode": "0790",
            "cityName": "\u65B0\u4F59\u5E02"
          },
          {
            "cityCode": "0350",
            "cityName": "\u5FFB\u5DDE\u5E02"
          },
          {
            "cityCode": "0376",
            "cityName": "\u4FE1\u9633\u5E02"
          },
          {
            "cityCode": "0482",
            "cityName": "\u5174\u5B89\u76DF"
          },
          {
            "cityCode": "0319",
            "cityName": "\u90A2\u53F0\u5E02"
          },
          {
            "cityCode": "0516",
            "cityName": "\u5F90\u5DDE\u5E02"
          },
          {
            "cityCode": "0374",
            "cityName": "\u8BB8\u660C\u5E02"
          },
          {
            "cityCode": "0563",
            "cityName": "\u5BA3\u57CE\u5E02"
          }
        ],
        "idx": "X"
      },
      {
        "cities": [
          {
            "cityCode": "0835",
            "cityName": "\u96C5\u5B89\u5E02"
          },
          {
            "cityCode": "0535",
            "cityName": "\u70DF\u53F0\u5E02"
          },
          {
            "cityCode": "0515",
            "cityName": "\u76D0\u57CE\u5E02"
          },
          {
            "cityCode": "0911",
            "cityName": "\u5EF6\u5B89\u5E02"
          },
          {
            "cityCode": "1433",
            "cityName": "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0514",
            "cityName": "\u626C\u5DDE\u5E02"
          },
          {
            "cityCode": "0662",
            "cityName": "\u9633\u6C5F\u5E02"
          },
          {
            "cityCode": "0353",
            "cityName": "\u9633\u6CC9\u5E02"
          },
          {
            "cityCode": "0458",
            "cityName": "\u4F0A\u6625\u5E02"
          },
          {
            "cityCode": "0999",
            "cityName": "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0831",
            "cityName": "\u5B9C\u5BBE\u5E02"
          },
          {
            "cityCode": "0717",
            "cityName": "\u5B9C\u660C\u5E02"
          },
          {
            "cityCode": "0795",
            "cityName": "\u5B9C\u6625\u5E02"
          },
          {
            "cityCode": "0737",
            "cityName": "\u76CA\u9633\u5E02"
          },
          {
            "cityCode": "0951",
            "cityName": "\u94F6\u5DDD\u5E02"
          },
          {
            "cityCode": "0701",
            "cityName": "\u9E70\u6F6D\u5E02"
          },
          {
            "cityCode": "0417",
            "cityName": "\u8425\u53E3\u5E02"
          },
          {
            "cityCode": "0746",
            "cityName": "\u6C38\u5DDE\u5E02"
          },
          {
            "cityCode": "0912",
            "cityName": "\u6986\u6797\u5E02"
          },
          {
            "cityCode": "0775",
            "cityName": "\u7389\u6797\u5E02"
          },
          {
            "cityCode": "0976",
            "cityName": "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE"
          },
          {
            "cityCode": "0877",
            "cityName": "\u7389\u6EAA\u5E02"
          },
          {
            "cityCode": "0730",
            "cityName": "\u5CB3\u9633\u5E02"
          },
          {
            "cityCode": "0766",
            "cityName": "\u4E91\u6D6E\u5E02"
          },
          {
            "cityCode": "0359",
            "cityName": "\u8FD0\u57CE\u5E02"
          }
        ],
        "idx": "Y"
      },
      {
        "cities": [
          {
            "cityCode": "0632",
            "cityName": "\u67A3\u5E84\u5E02"
          },
          {
            "cityCode": "0759",
            "cityName": "\u6E5B\u6C5F\u5E02"
          },
          {
            "cityCode": "0596",
            "cityName": "\u6F33\u5DDE\u5E02"
          },
          {
            "cityCode": "0744",
            "cityName": "\u5F20\u5BB6\u754C\u5E02"
          },
          {
            "cityCode": "0313",
            "cityName": "\u5F20\u5BB6\u53E3\u5E02"
          },
          {
            "cityCode": "0936",
            "cityName": "\u5F20\u6396\u5E02"
          },
          {
            "cityCode": "0870",
            "cityName": "\u662D\u901A\u5E02"
          },
          {
            "cityCode": "0758",
            "cityName": "\u8087\u5E86\u5E02"
          },
          {
            "cityCode": "0511",
            "cityName": "\u9547\u6C5F\u5E02"
          },
          {
            "cityCode": "0371",
            "cityName": "\u90D1\u5DDE\u5E02"
          },
          {
            "cityCode": "0760",
            "cityName": "\u4E2D\u5C71\u5E02"
          },
          {
            "cityCode": "1953",
            "cityName": "\u4E2D\u536B\u5E02"
          },
          {
            "cityCode": "0580",
            "cityName": "\u821F\u5C71\u5E02"
          },
          {
            "cityCode": "0394",
            "cityName": "\u5468\u53E3\u5E02"
          },
          {
            "cityCode": "0756",
            "cityName": "\u73E0\u6D77\u5E02"
          },
          {
            "cityCode": "0733",
            "cityName": "\u682A\u6D32\u5E02"
          },
          {
            "cityCode": "0396",
            "cityName": "\u9A7B\u9A6C\u5E97\u5E02"
          },
          {
            "cityCode": "0832",
            "cityName": "\u8D44\u9633\u5E02"
          },
          {
            "cityCode": "0533",
            "cityName": "\u6DC4\u535A\u5E02"
          },
          {
            "cityCode": "0813",
            "cityName": "\u81EA\u8D21\u5E02"
          },
          {
            "cityCode": "0852",
            "cityName": "\u9075\u4E49\u5E02"
          }
        ],
        "idx": "Z"
      }
    ],
    index: [
      {
        "idx": "#"
      },
      {
        "idx": "A"
      },
      {
        "idx": "B"
      },
      {
        "idx": "C"
      },
      {
        "idx": "D"
      },
      {
        "idx": "E"
      },
      {
        "idx": "F"
      },
      {
        "idx": "G"
      },
      {
        "idx": "H"
      },
      {
        "idx": "J"
      },
      {
        "idx": "K"
      },
      {
        "idx": "L"
      },
      {
        "idx": "M"
      },
      {
        "idx": "N"
      },
      {
        "idx": "P"
      },
      {
        "idx": "Q"
      },
      {
        "idx": "R"
      },
      {
        "idx": "S"
      },
      {
        "idx": "T"
      },
      {
        "idx": "W"
      },
      {
        "idx": "X"
      },
      {
        "idx": "Y"
      },
      {
        "idx": "Z"
      }
    ]
  };
  const _sfc_main$k = {
    __name: "index",
    setup(__props) {
      const address = vue.ref("");
      const customBar = vue.ref("87px");
      const winHeight = vue.ref(0);
      const itemHeight = vue.ref(0);
      const winOffsetY = vue.ref(0);
      const touchmove = vue.ref(false);
      const scrollHeight = vue.ref("");
      const letter = vue.ref([]);
      vue.ref("");
      const scrollIntoId = vue.ref("");
      const list2 = vue.ref([]);
      const activeId = vue.ref(1);
      const disPosition = vue.ref(true);
      const currentCity = vue.ref();
      vue.ref();
      const po_tips = vue.ref("\u91CD\u65B0\u5B9A\u4F4D");
      const hotCity = vue.ref([
        { name: "\u5317\u4EAC\u5E02", cityCode: "010" },
        { name: "\u4E0A\u6D77\u5E02", cityCode: "021" },
        { name: "\u5E7F\u5DDE\u5E02", cityCode: "020" },
        { name: "\u6DF1\u5733\u5E02", cityCode: "0755" }
      ]);
      const instance = vue.getCurrentInstance();
      const setList = () => {
        uni.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
          winOffsetY.value = ret[0].top;
          winHeight.value = ret[0].height;
          itemHeight.value = winHeight.value / list2.value.length;
        });
      };
      onLoad((option) => {
        address.value = option.address;
      });
      const goBack = () => {
        uni.navigateBack();
      };
      const touchStart = (e2) => {
        touchmove.value = true;
        let pageY = e2.touches[0].pageY;
        let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
        if (list2.value[index]) {
          scrollIntoId.value = list2.value[index].idx;
        }
      };
      const touchMove = (e2) => {
        let pageY = e2.touches[0].pageY;
        let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
        if (list2.value[index] && list2.value[index].idx === scrollIntoId.value) {
          return false;
        }
        if (list2.value[index]) {
          scrollIntoId.value = list2.value[index].idx;
        }
      };
      const touchEnd = () => {
        touchmove.value = false;
      };
      const activeCity = (val) => {
        activeId.value = val.cityCode;
        selectCity(val);
      };
      vue.onMounted(() => {
        getWarpWeft();
        scrollHeight.value = uni.getSystemInfoSync().windowHeight - parseInt(customBar.value) + "px";
        letter.value = Citys.index;
        list2.value = Citys.list;
        setList();
        getOpenCity().then((res) => {
          list2.value = res.data;
          formatAppLog("log", "at pages/city/index.vue:188", res, "getOpenCity");
        });
      });
      const getWarpWeft = () => {
        po_tips.value = "\u5B9A\u4F4D\u4E2D...";
        uni.getLocation({
          type: "gcj02",
          geocode: true,
          success: function(res) {
            currentCity.value = {
              name: res.address.city
            };
            activeId.value = res.address.cityCode;
            setTimeout(() => {
              po_tips.value = "\u91CD\u65B0\u5B9A\u4F4D";
            }, 500);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/city/index.vue:212", res);
            setTimeout(() => {
              po_tips.value = "\u5B9A\u4F4D\u5931\u8D25";
            }, 500);
            disPosition.value = true;
          }
        });
      };
      const selectCity = (city) => {
        formatAppLog("log", "at pages/city/index.vue:235", city, "city");
        currentCity.value = city;
        uni.redirectTo({
          url: "/pages/serviceRange/index?cityCode=" + city.cityCode + "&name=" + city.name + "&address=" + address.value
        });
        uni.setStorageSync("city", city);
      };
      vue.watch(list2, () => {
        setTimeout(() => {
          setList();
        }, 100);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "city" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "\u9009\u62E9\u670D\u52A1\u57CE\u5E02",
            onGoBack: goBack
          }),
          vue.createElementVNode("scroll-view", {
            class: "w100",
            "scroll-y": "true",
            "scroll-into-view": scrollIntoId.value,
            style: vue.normalizeStyle({ height: scrollHeight.value }),
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop", "prevent"]))
          }, [
            disPosition.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              id: "hot"
            }, [
              vue.createElementVNode("view", { class: "grey" }, " \u5F53\u524D\u5B9A\u4F4D\u57CE\u5E02 "),
              vue.createCommentVNode(" \u5B9A\u4F4D\u6A21\u5757 "),
              vue.createElementVNode("view", { class: "position top" }, [
                vue.createElementVNode("view", { class: "position_city" }, [
                  vue.createElementVNode("view", { class: "position_city_one" }, vue.toDisplayString(currentCity.value ? currentCity.value.name : "\u5B9A\u4F4D\u5931\u8D25"), 1),
                  vue.createElementVNode("view", {
                    class: "WarpWeft",
                    onClick: getWarpWeft
                  }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: "/static/new/positions.png"
                    }),
                    vue.createElementVNode("text", null, vue.toDisplayString(po_tips.value), 1)
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "hot grey" }, " \u70ED\u95E8\u57CE\u5E02 "),
              vue.createCommentVNode(" \u6700\u8FD1\u6A21\u5757 "),
              vue.createCommentVNode(" \u70ED\u95E8 "),
              hotCity.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "position"
              }, [
                vue.createElementVNode("view", { class: "position_city position_city_hot" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(hotCity.value, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"),
                      key: index,
                      onClick: ($event) => activeCity(item)
                    }, vue.toDisplayString(item.name), 11, ["onClick"]);
                  }), 128))
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "grey" }, " \u5C0F\u667A\u5E2E\u5DF2\u5F00\u901A\u7684\u57CE\u5E02 ")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u57CE\u5E02\u5217\u8868 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(list2.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                id: item.id,
                key: index,
                class: "cityList"
              }, [
                vue.createCommentVNode(' <view class="letter-header bold">{{ item.idx }}</view> '),
                vue.createElementVNode("view", { class: "contents" }, [
                  vue.createElementVNode("view", {
                    class: "city-div",
                    onClick: ($event) => selectCity(item)
                  }, [
                    vue.createElementVNode("text", { class: "city" }, vue.toDisplayString(item.name), 1)
                  ], 8, ["onClick"])
                ])
              ], 8, ["id"]);
            }), 128)),
            vue.createElementVNode("view", { class: "placeholder footer" })
          ], 44, ["scroll-into-view"]),
          vue.createCommentVNode(" \u53F3\u4FA7\u5B57\u6BCD "),
          vue.withDirectives(vue.createElementVNode("view", {
            class: "letters",
            id: "list",
            onTouchstart: touchStart,
            onTouchmove: vue.withModifiers(touchMove, ["stop", "prevent"]),
            onTouchend: touchEnd
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(letter.value, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "fmin",
                key: item.idx
              }, vue.toDisplayString(item.idx), 1);
            }), 128))
          ], 40, ["onTouchmove"]), [
            [vue.vShow, false]
          ]),
          vue.createCommentVNode(" \u9009\u4E2D\u4E4B\u540E\u5B57\u6BCD "),
          vue.withDirectives(vue.createElementVNode("view", { class: "mask" }, [
            vue.createElementVNode("view", { class: "mask-r bold" }, vue.toDisplayString(scrollIntoId.value), 1)
          ], 512), [
            [vue.vShow, false]
          ])
        ]);
      };
    }
  };
  var PagesCityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-49347d67"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/city/index.vue"]]);
  const _sfc_main$j = {
    __name: "index",
    setup(__props) {
      const canPickUp = vue.ref(false);
      const settingsStatus = vue.ref(false);
      const serveRangeStatus = vue.ref(false);
      const serveSkillStatus = vue.ref(false);
      const auth = vue.ref(false);
      onShow(() => {
        getSetting();
      });
      vue.onMounted(() => {
      });
      const getSetting = () => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            canPickUp.value = res.data.canPickUp;
            settingsStatus.value = res.data.settingsStatus;
            serveRangeStatus.value = res.data.serveScopeSetted;
            serveSkillStatus.value = res.data.serveSkillSetted;
            auth.value = res.data.authed;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handlePickUpStatus = () => {
        setPickUpStatus({
          canPickUp: canPickUp.value ? 0 : 1
        }).then((res) => {
          if (res.code == 200) {
            getSetting();
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const toServiceSikll = () => {
        uni.navigateTo({
          url: "/pages/serviceSkill/index"
        });
      };
      const toServiceRange = () => {
        uni.navigateTo({
          url: "/pages/serviceRange/index"
        });
      };
      const toIndex = () => {
        if (!settingsStatus.value) {
          return;
        } else {
          uni.redirectTo({
            url: "/pages/index/index"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "setting" }, [
          vue.createCommentVNode(" \u624B\u673A\u72B6\u6001\u680F "),
          vue.createVNode(_component_uni_nav_bar, { statusBar: "true" }),
          vue.createCommentVNode(" \u5F15\u5BFC\u8BCD "),
          vue.createElementVNode("view", { class: "guide" }, [
            vue.createElementVNode("image", { src: "/static/new/img_logo@2x.png" }),
            vue.createElementVNode("view", { class: "content" }, "\u4EB2\uFF0C\u5B8C\u6210\u4EE5\u4E0B4\u6B65\u8BBE\u7F6E\uFF0C\u65B9\u53EF\u63A5\u5355\u54E6\uFF5E")
          ]),
          vue.createCommentVNode(" \u5177\u4F53\u6B65\u9AA4 "),
          vue.createElementVNode("view", { class: "step" }, [
            vue.createElementVNode("view", { class: "stepOne stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepOne.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "\u5B9E\u540D\u8BA4\u8BC1"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "\u5E73\u53F0\u4F1A\u4FDD\u62A4\u4F60\u7684\u4E2A\u4EBA\u4FE1\u606F")
                ]),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["btn", auth.value ? "btn-successGreen" : "btn-red"])
                }, vue.toDisplayString(auth.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BA4\u8BC1"), 3)
              ])
            ]),
            vue.createElementVNode("view", { class: "stepTwo stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepTwo.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "\u670D\u52A1\u6280\u80FD\u8BBE\u7F6E"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u65B9\u53EF\u4E3A\u60A8\u63A8\u8350\u8BA2\u5355")
                ]),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["btn", serveSkillStatus.value ? "btn-successGreen" : "btn-red"]),
                  onClick: toServiceSikll
                }, vue.toDisplayString(serveSkillStatus.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BBE\u7F6E"), 3)
              ])
            ]),
            vue.createElementVNode("view", { class: "stepThree stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepThree.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "\u670D\u52A1\u8303\u56F4\u8BBE\u7F6E"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u65B9\u53EF\u4E3A\u60A8\u63A8\u8350\u8BA2\u5355")
                ]),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["btn", serveRangeStatus.value ? "btn-successGreen" : "btn-red"]),
                  onClick: toServiceRange
                }, vue.toDisplayString(serveRangeStatus.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BBE\u7F6E"), 3)
              ])
            ]),
            vue.createElementVNode("view", { class: "stepFour stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepFour.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "\u63A5\u5355\u8BBE\u7F6E"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "\u5F00\u542F\u63A5\u5355\u540E\uFF0C\u65B9\u53EF\u8FDB\u884C\u63A5\u5355\u54E6")
                ]),
                vue.createElementVNode("switch", {
                  color: "#F74347",
                  style: { "transform": "scale(0.7)" },
                  onChange: handlePickUpStatus,
                  checked: canPickUp.value
                }, null, 40, ["checked"])
              ])
            ])
          ]),
          vue.createCommentVNode(" \u5E95\u90E8\u6309\u94AE "),
          vue.createElementVNode("view", {
            onClick: toIndex,
            class: vue.normalizeClass(["btn-red footerBtn", settingsStatus.value ? "" : "notSetting"])
          }, "\u8FDB\u5165\u9996\u9875", 2)
        ]);
      };
    }
  };
  var PagesSettingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/setting/index.vue"]]);
  const orderStatus = [
    {
      value: 1,
      label: "\u5F85\u4E0A\u95E8"
    },
    {
      value: 2,
      label: "\u5F85\u5B8C\u5DE5"
    },
    {
      value: 3,
      label: "\u5DF2\u5B8C\u6210"
    },
    {
      value: 4,
      label: "\u5DF2\u53D6\u6D88"
    },
    {
      value: 5,
      label: "\u88AB\u9000\u5355"
    }
  ];
  const DeliveryData = [
    {
      value: 1,
      label: "\u5F85\u4E0A\u95E8"
    },
    {
      value: 2,
      label: "\u5F85\u5B8C\u5DE5"
    },
    {
      value: 3,
      label: "\u5DF2\u5B8C\u6210"
    },
    {
      value: "",
      label: "\u5168\u90E8"
    }
  ];
  const cancelData = [
    {
      value: 1,
      label: "\u670D\u52A1\u5730\u5740\u6709\u8BEF"
    },
    {
      value: 2,
      label: "\u770B\u9519\u5730\u5740\uFF0C\u65E0\u6CD5\u670D\u52A1"
    },
    {
      value: 3,
      label: "\u4EF7\u683C\u592A\u4F4E\uFF0C\u4E0D\u60F3\u670D\u52A1\u4E86"
    },
    {
      value: 4,
      label: "\u4E34\u65F6\u6709\u4E8B\uFF0C\u65E0\u6CD5\u670D\u52A1"
    },
    {
      value: 5,
      label: "\u4EA7\u54C1\u7EF4\u4FEE\u590D\u6742\uFF0C\u65E0\u6CD5\u670D\u52A1"
    }
  ];
  const _sfc_main$i = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      vue.onMounted(() => {
      });
      const isRob = vue.ref(true);
      let data = vue.reactive([
        {
          serveTypeName: "\u4FDD\u6D01\u670D\u52A1",
          serveItemName: "\u7A7A\u8C03\u6E05\u6D17",
          serveStartTime: "2023-7-28 11:48:00",
          serveAddress: "\u91D1\u71D5\u9F99",
          serveFee: "666"
        }
      ]);
      const alertDialog = vue.ref(null);
      const handleClose = () => {
        alertDialog.value.close();
        emit("refresh");
      };
      const handleToInfo = (item) => {
        formatAppLog("log", "at pages/pickup/components/homeList.vue:110", item, "\u8FDB\u5165\u8BE6\u60C5");
        uni.navigateTo({
          url: "/pages/orderInfo/index?id=" + item.id
        });
      };
      const handleCancel = (id) => {
        formatAppLog("log", "at pages/pickup/components/homeList.vue:116", "fff");
        uni.navigateTo({
          url: "/pages/cancel/index?id=" + id + "&type=list"
        });
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?status=" + status + "&id=" + id + "&type=list"
        });
      };
      vue.watch(() => props.data, () => {
        data = props.data;
        formatAppLog("log", "at pages/pickup/components/homeList.vue:136", data, "dddddddddddddddd");
      });
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(data), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "card",
              key: item.id,
              onClick: ($event) => handleToInfo(item)
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("image", {
                  class: "leftCardContent",
                  src: item.serveItemImg || "../../../static/new/empty.png"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "rightCardContent" }, [
                  vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.serveTypeName) + "-" + vue.toDisplayString(item.serveItemName), 1),
                  vue.createElementVNode("view", { class: "serviceTime" }, [
                    vue.createElementVNode("text", null, "\u9884\u7EA6\u65F6\u95F4"),
                    vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(item.serveStatus === 1 ? item.serveStartTime : item.serveStatus === 2 ? item.realServeStartTime : item.realServeEndTime), 1)
                  ])
                ]),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["orderStatus", [3, 4, 5].includes(item.serveStatus) ? "gray" : ""])
                }, vue.toDisplayString(vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus).length && vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus)[0].label), 3)
              ]),
              vue.createElementVNode("view", { class: "serviceAddress" }, [
                vue.createCommentVNode(" <view>\u670D\u52A1\u5730\u5740</view> "),
                vue.createElementVNode("view", { class: "address" }, [
                  vue.createElementVNode("view", { class: "addressContent" }, vue.toDisplayString(item.serveAddress), 1)
                ])
              ]),
              [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "cardFooter"
              }, [
                vue.createCommentVNode(' <view class="price">\r\n          <text class="price-label">\u670D\u52A1\u8D39\u7528</text>\r\n          \uFFE5{{ item.serveFee }}\r\n        </view> '),
                [1].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "robBtn btn-gray",
                  onClick: vue.withModifiers(($event) => handleCancel(item.id), ["stop"])
                }, "\u53D6\u6D88\u8BA2\u5355", 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "robBtn btn-red",
                  onClick: vue.withModifiers(($event) => handleServeRecord(item.id, item.serveStatus), ["stop"])
                }, vue.toDisplayString(item.serveStatus === 1 ? "\u5F00\u59CB\u670D\u52A1" : "\u5B8C\u6210\u670D\u52A1"), 9, ["onClick"])) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true)
            ], 8, ["onClick"]);
          }), 128)),
          vue.createElementVNode("view", { class: "footer" }, "- \u5DF2 \u7ECF \u5230 \u5E95 \u4E86 -"),
          vue.createCommentVNode(" \u63D0\u793A\u7A97\u793A\u4F8B "),
          vue.createVNode(_component_uni_popup, {
            ref_key: "alertDialog",
            ref: alertDialog,
            type: "dialog",
            "is-mask-click": false
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "dialog" }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["img", isRob.value ? "success" : "fail"])
                }, null, 2),
                vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(isRob.value ? "\u62A2\u5355\u6210\u529F" : "\u5F88\u9057\u61BE\uFF0C\u62A2\u5355\u5931\u8D25"), 1),
                vue.createElementVNode("view", {
                  class: "footer",
                  onClick: handleClose
                }, "\u786E\u5B9A")
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  var HomeList = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-58ad869c"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/pickup/components/homeList.vue"]]);
  const _sfc_main$h = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x2 = `${-w2 + this.offset[0]}px`;
        const y = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x2,
            top: y
          },
          rightBottom: {
            right: x2,
            bottom: y
          },
          leftBottom: {
            left: x2,
            bottom: y
          },
          leftTop: {
            left: x2,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      badgeWidth() {
        return {
          width: `${this.width}px`
        };
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          height: "10px",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass([$options.classNames, "uni-badge"]),
        style: vue.normalizeStyle([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, vue.toDisplayString($options.displayValue), 7)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$4], ["__scopeId", "data-v-7c66581c"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$g = {
    __name: "index",
    props: {
      tabBars: {
        type: Array,
        default: () => []
      },
      statusNum: {
        type: Array,
        default: () => []
      }
    },
    emits: "",
    setup(__props, { expose, emit }) {
      const props = __props;
      const store2 = useStore();
      const statusNum = vue.reactive({
        data: []
      });
      const users = store2.state.user;
      const scrollinto = vue.ref("tab0");
      let tabIndex = vue.ref(users.tabIndex ? users.tabIndex : 0);
      const changeTab = (index) => {
        if (tabIndex.value == index) {
          return;
        }
        tabIndex.value = index;
        emit("getTabIndex", index);
        scrollinto.value = "tab" + index;
      };
      vue.watchEffect(() => {
        statusNum.data = props.statusNum.data;
        formatAppLog("log", "at components/uni-tab/index.vue:67", list.data, "++++++++++++++");
      });
      expose({
        changeTab
      });
      return (_ctx, _cache) => {
        const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-x": "true",
          class: "tabScroll",
          "scroll-into-view": scrollinto.value,
          "scroll-with-animation": true
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.tabBars, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              id: "tab" + index,
              class: "scroll-row-item",
              onClick: ($event) => changeTab(index)
            }, [
              vue.createVNode(_component_uni_badge, {
                class: "uni-badge-left-margin",
                text: statusNum.data[index],
                absolute: "rightTop",
                offset: [-8, 3],
                size: "small"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(vue.unref(tabIndex) == index ? "scroll-row-item-act" : "")
                  }, [
                    vue.createElementVNode("text", { class: "line" }),
                    vue.createTextVNode(" " + vue.toDisplayString(item.label), 1)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["text"])
            ], 8, ["id", "onClick"]);
          }), 128))
        ], 8, ["scroll-into-view"]);
      };
    }
  };
  var UniTab = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-tab/index.vue"]]);
  const _sfc_main$f = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      const statusNum = vue.reactive({
        data: []
      });
      const tabBars = DeliveryData;
      vue.ref(0);
      const icCanScroll = vue.ref(true);
      const homeList = vue.reactive({
        data: [
          {
            serveTypeName: "\u4FDD\u6D01\u670D\u52A1",
            serveItemName: "\u7A7A\u8C03\u6E05\u6D17",
            serveStartTime: "2023-7-28 11:48",
            serveAddress: "\u91D1\u71D5\u9F99",
            serveFee: "666"
          }
        ]
      });
      onShow(() => {
        getTabIndex(users.tabIndex);
        getOrderStatusNumFunc();
      });
      const getOrderStatusNumFunc = () => {
        getOrderStatusNum().then((res) => {
          statusNum.data = [res.data.noServed, res.data.serving];
          formatAppLog("log", "at pages/pickup/index.vue:85", res, "\u83B7\u53D6\u5404\u4E2A\u72B6\u6001\u4E0B\u7684\u8BA2\u5355\u6570\u91CF");
        });
      };
      const getListData = (val) => {
        getOrder(val).then((res) => {
          homeList.data = res.data.ordersServes;
          formatAppLog("log", "at pages/pickup/index.vue:92", res, "66666666666");
        });
      };
      const getRobOrderList = () => {
      };
      const getTabIndex = (index) => {
        store2.commit("user/setTabIndex", index);
        getListData(tabBars[index].value);
        formatAppLog("log", "at pages/pickup/index.vue:101", tabBars[index].value, "index");
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "order" }, [
            vue.createCommentVNode(" \u624B\u673A\u72B6\u6001\u680F "),
            vue.createVNode(_component_uni_nav_bar, {
              statusBar: "false",
              backgroundColor: "white",
              height: "0"
            }),
            vue.createCommentVNode(" nav "),
            vue.createCommentVNode(" \u72B6\u6001\u7B5B\u9009 "),
            vue.createVNode(UniTab, {
              tabBars: vue.unref(tabBars),
              onGetTabIndex: getTabIndex,
              statusNum
            }, null, 8, ["tabBars", "statusNum"]),
            vue.createCommentVNode(" \u8BA2\u5355\u5217\u8868 "),
            vue.createElementVNode("scroll-view", {
              "scroll-y": icCanScroll.value,
              class: "scrollList",
              onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
            }, [
              homeList.data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList), {
                key: 0,
                data: homeList.data,
                onRefresh: getRobOrderList
              }, null, 8, ["data"])) : vue.createCommentVNode("v-if", true)
            ], 40, ["scroll-y"]),
            vue.createVNode(UniFooter, { pagePath: "pages/pickup/index" })
          ]),
          vue.createCommentVNode(" end ")
        ], 2112);
      };
    }
  };
  var PagesPickupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0e6a68f8"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/pickup/index.vue"]]);
  const _sfc_main$e = {
    __name: "index",
    props: {
      tabBars: {
        type: Array,
        default: () => []
      }
    },
    emits: "",
    setup(__props, { expose, emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      const scrollinto = vue.ref("tab0");
      const type = vue.ref("");
      let info = vue.reactive({
        data: {
          serveStatus: 1,
          customerInfo: {
            serveAddress: "\u5317\u4EAC\u5E02\u660C\u5E73\u533A\u7EA2\u65D7\u5927\u8857124\u53F7\u4E94\u661F\u5927\u53A619\u5C42109\u5BA44\u53F7\u4E94\u661F\u5927\u53A619\u5C42109\u5BA4",
            contactsName: "\u67EF\u80DC\u4F26",
            contactsPhone: "17788884444"
          },
          ordersInfo: {
            serveCode: "7364734677776",
            serveStartTime: "2026.5.26 12:30"
          },
          refundInfo: {
            refundReason: "\u672A\u4E0A\u95E8\u670D\u52A1",
            refundTime: "2026.5.26 12:30",
            refundAmount: "198"
          },
          cancelInfo: {
            cancelReason: "\u672A\u4E0A\u95E8\u670D\u52A1",
            cancelTime: "2026.5.26 12:30"
          },
          serveInfo: {
            serveTypeName: "\u4FDD\u6D01\u6E05\u6D17",
            serveItemName: "\u65E5\u5E38\u4FDD\u6D01",
            serveNum: "1",
            serveFee: "198",
            serveBeforeIllustrate: "\u670D\u52A1\u5F00\u59CB\u8BF4\u660E",
            realServeStartTime: "2022-12-03  12:00",
            serveBeforeImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ],
            serveAfterIllustrate: "\u670D\u52A1\u7ED3\u675F\u8BF4\u660E",
            realServeEndTime: "2022-12-03  12:00",
            serveAfterImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ]
          }
        }
      });
      let tabIndex = vue.ref(users.tabIndex ? users.tabIndex : 0);
      onLoad((options) => {
        formatAppLog("log", "at pages/orderInfo/index.vue:235", options, "options");
        getOrderInfoFunc(options.id);
        type.value = options.type;
      });
      const getOrderInfoFunc = (id) => {
        getOrderInfo(id).then((res) => {
          info.data = res.data;
          formatAppLog("log", "at pages/orderInfo/index.vue:243", res.data, "\u83B7\u53D6\u8BA2\u5355\u8BE6\u60C5");
        });
      };
      const changeTab = (index) => {
        if (tabIndex.value == index) {
          return;
        }
        tabIndex.value = index;
        emit("getTabIndex", index);
        scrollinto.value = "tab" + index;
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?id=" + id + "&type=info&status" + status
        });
      };
      const handleCancel = (id) => {
        uni.navigateTo({
          url: "/pages/cancel/index?id=" + id + "&type=info"
        });
      };
      const goBack = () => {
        if (type.value === "info") {
          uni.redirectTo({
            url: "/pages/pickup/index"
          });
        } else {
          uni.navigateBack();
        }
      };
      expose({
        changeTab
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "order-info" }, [
          vue.createVNode(UniNav, {
            title: "\u8BA2\u5355\u8BE6\u60C5",
            onGoBack: goBack
          }),
          vue.createCommentVNode(" \u8BA2\u5355\u72B6\u6001 "),
          vue.createElementVNode("view", {
            class: vue.normalizeClass([
              "serveStatus",
              [1, 2, 3].includes(vue.unref(info).data.serveStatus) ? "successStatus" : "failStatus"
            ])
          }, [
            vue.createElementVNode("view", { class: "status" }, vue.toDisplayString(vue.unref(orderStatus).filter((item) => item.value === vue.unref(info).data.serveStatus)[0].label), 1),
            vue.unref(info).data.serveStatus === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "serveTime"
            }, " \u8BF7\u5728" + vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime) + "\u524D\u4E0A\u95E8\u670D\u52A1 ", 1)) : vue.createCommentVNode("v-if", true)
          ], 2),
          vue.createCommentVNode(" \u5BA2\u6237\u4FE1\u606F "),
          vue.createElementVNode("view", { class: "customerInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "\u5BA2\u6237\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "nameAndPhone" }, [
              vue.createElementVNode("text", { class: "name" }, vue.toDisplayString(vue.unref(info).data.customerInfo.contactsName), 1),
              vue.createElementVNode("text", { class: "phone" }, vue.toDisplayString(vue.unref(info).data.customerInfo.contactsPhone), 1)
            ]),
            vue.createElementVNode("view", { class: "address" }, [
              vue.createElementVNode("view", { class: "location" }),
              vue.createElementVNode("view", { class: "addressInfo" }, vue.toDisplayString(vue.unref(info).data.customerInfo.serveAddress), 1)
            ])
          ]),
          vue.createCommentVNode(" \u670D\u52A1\u4FE1\u606F "),
          vue.createElementVNode("view", { class: "serveInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "\u670D\u52A1\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("image", {
                class: "serveImg",
                src: "/static/new/img_success@2x.png"
              }),
              vue.createElementVNode("view", { class: "serveTypeBox" }, [
                vue.createElementVNode("view", { class: "serveType" }, vue.toDisplayString(vue.unref(info).data.serveInfo.serveTypeName), 1),
                vue.createElementVNode("view", { class: "serveItem" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(info).data.serveInfo.serveItemName), 1),
                  vue.createTextVNode(" x "),
                  vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(info).data.serveInfo.serveNum), 1),
                  vue.createTextVNode(" \u5C0F\u65F6 ")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "fee" }, [
              vue.createTextVNode(" \u670D\u52A1\u8D39\u7528"),
              vue.createElementVNode("text", { class: "feeText" }, "\uFFE5" + vue.toDisplayString(vue.unref(info).data.serveInfo.serveFee), 1)
            ])
          ]),
          vue.createCommentVNode(" \u8BA2\u5355\u4FE1\u606F "),
          vue.createElementVNode("view", { class: "orderInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "\u8BA2\u5355\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "\u8BA2\u5355\u7F16\u53F7"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.ordersInfo.serveCode), 1)
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "\u9884\u7EA6\u65F6\u95F4"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime), 1)
            ])
          ]),
          vue.createCommentVNode(" \u53D6\u6D88\u4FE1\u606F "),
          vue.unref(info).data.serveStatus === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "orderInfo card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "\u53D6\u6D88\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "\u53D6\u6D88\u65F6\u95F4"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelTime), 1)
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "\u53D6\u6D88\u539F\u56E0"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelReason), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u9000\u6B3E\u4FE1\u606F "),
          vue.unref(info).data.serveStatus === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "orderInfo card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "\u9000\u6B3E\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "\u9000\u6B3E\u65F6\u95F4"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelTime), 1)
            ]),
            vue.createElementVNode("view", { class: "orderTime info first" }, [
              vue.createElementVNode("text", { class: "label" }, "\u9000\u6B3E\u539F\u56E0"),
              vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelReason), 1)
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "\u9000\u6B3E\u91D1\u989D"),
              vue.createElementVNode("text", { class: "content" }, "\uFFE5" + vue.toDisplayString(vue.unref(info).data.cancelInfo.refundAmount), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u670D\u52A1\u8BB0\u5F55 "),
          [2, 3].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "serveRecord card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "\u670D\u52A1\u8BB0\u5F55"),
            (vue.unref(info).data.serveStatus === 2 || vue.unref(info).data.serveStatus === 3) && vue.unref(info).data.serveInfo.realServeStartTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "serveBefore"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "\u670D\u52A1\u524D"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(info).data.serveInfo.serveBeforeImgs, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    class: "img",
                    src: item,
                    key: index
                  }, null, 8, ["src"]);
                }), 128))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "\u8865\u5145\u8BF4\u660E\uFF1A"),
                vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(info).data.serveInfo.serveBeforeIllustrate), 1)
              ]),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(vue.unref(info).data.serveInfo.realServeStartTime), 1)
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(info).data.serveStatus === 3 && vue.unref(info).data.serveInfo.realServeEndTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "serveAfter"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "\u670D\u52A1\u540E"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(info).data.serveInfo.serveAfterImgs, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    class: "img",
                    src: item,
                    key: index
                  }, null, 8, ["src"]);
                }), 128))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "\u8865\u5145\u8BF4\u660E\uFF1A"),
                vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(info).data.serveInfo.serveBeforeIllustrate), 1)
              ]),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(vue.unref(info).data.serveInfo.realServeEndTime), 1)
            ])) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          [1, 2].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 3,
            class: "footer"
          }, [
            [1].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "btn-gray",
              onClick: _cache[0] || (_cache[0] = ($event) => handleCancel(vue.unref(info).data.id))
            }, "\u53D6\u6D88\u8BA2\u5355")) : vue.createCommentVNode("v-if", true),
            [1, 2].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "btn-red",
              onClick: _cache[1] || (_cache[1] = ($event) => handleServeRecord(vue.unref(info).data.id, vue.unref(info).data.serveStatus))
            }, vue.toDisplayString(vue.unref(info).data.serveStatus === 1 ? "\u5F00\u59CB\u670D\u52A1" : "\u5B8C\u6210\u670D\u52A1"), 1)) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  var PagesOrderInfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-2827b336"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/orderInfo/index.vue"]]);
  const overTimeFormat = (val) => {
    const times = getTimeDate(val);
    return times.times;
  };
  const getTimeDate = (val) => {
    const date = new Date(val);
    date.setTime(date.getTime());
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    date.getSeconds();
    const time = {
      date: addZero(month) + "-" + addZero(day) + " " + addZero(hour) + ":" + addZero(minute),
      times: addZero(hour) + ":" + addZero(minute),
      veryDayDate: addZero(year) + "-" + addZero(month) + "-" + addZero(day) + " 00:00:00"
    };
    return time;
  };
  function addZero(s2) {
    return s2 < 10 ? "0" + s2 : s2;
  }
  const _sfc_main$d = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("\u53D6\u6D88\u539F\u56E0");
      vue.ref("");
      let cancel = vue.ref(null);
      const orderId = vue.ref("");
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        from.value = options.type;
        formatAppLog("log", "at pages/cancel/index.vue:53", options, "\u53D6\u6D88\u8BA2\u5355");
      });
      const handleCause = (value) => {
        cancel.value = value;
        formatAppLog("log", "at pages/cancel/index.vue:59", value, "----------");
      };
      const handleSubmit = async () => {
        if (cancel.value) {
          let times = setTimeout(() => {
            uni.showLoading({
              title: "loading"
            });
          }, 500);
          const params = {
            id: orderId.value,
            cancelReason: cancelData.filter((item) => item.value === cancel.value)[0].label
          };
          await cancelOrder(params).then((res) => {
            if (res.code === 200) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              clearTimeout(times);
              if (from.value === "list") {
                goBack();
              } else {
                uni.navigateTo({
                  url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
                });
              }
              cancel.value = "";
              orderId.value = "";
              return uni.showToast({
                title: "\u64CD\u4F5C\u6210\u529F!",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        } else {
          return uni.showToast({
            title: "\u8BF7\u9009\u62E9\u53D6\u6D88\u539F\u56E0!",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "cancel" }, [
          vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" end "),
          vue.createElementVNode("view", { class: "pageBox" }, [
            vue.createElementVNode("view", { class: "boxCon concelBox" }, [
              vue.createElementVNode("view", { class: "tabConList" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(cancelData), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "item",
                    key: index
                  }, [
                    vue.createElementVNode("text", null, vue.toDisplayString(item.label), 1),
                    vue.createElementVNode("view", { class: "cause" }, [
                      vue.createElementVNode("radio", {
                        color: "#F74347",
                        style: { "transform": "scale(0.7)" },
                        value: "r1",
                        checked: item.value === vue.unref(cancel),
                        onClick: ($event) => handleCause(item.value)
                      }, null, 8, ["checked", "onClick"])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          vue.createCommentVNode(" \u5E95\u90E8\u6309\u94AE "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "\u786E\u8BA4\u63D0\u4EA4")
          ])
        ]);
      };
    }
  };
  var PagesCancelIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3ce92776"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/cancel/index.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const pages = [
    {
      path: "pages/login/user",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u767B\u5F55"
      }
    },
    {
      path: "pages/index/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u5C0F\u667A\u5E2E",
        "app-plus": {
          pullToRefresh: {
            support: true,
            color: "#ff3333",
            style: "default",
            height: "50px"
          }
        }
      }
    },
    {
      path: "pages/serviceSkill/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u9009\u62E9\u670D\u52A1\u6280\u80FD"
      }
    },
    {
      path: "pages/getOrder/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u63A5\u5355\u8BBE\u7F6E"
      }
    },
    {
      path: "pages/serviceRange/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u8BF7\u9009\u62E9\u5DE5\u4F5C\u5730\u70B9"
      }
    },
    {
      path: "pages/city/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u9009\u62E9\u670D\u52A1\u57CE\u5E02"
      }
    },
    {
      path: "pages/setting/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u57FA\u7840\u914D\u7F6E"
      }
    },
    {
      path: "pages/pickup/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u6D3E\u4EF6"
      }
    },
    {
      path: "pages/orderInfo/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u8BA2\u5355\u8BE6\u60C5"
      }
    },
    {
      path: "pages/cancel/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u53D6\u6D88\u539F\u56E0"
      }
    },
    {
      path: "pages/serveRecord/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u670D\u52A1\u8BB0\u5F55"
      }
    },
    {
      path: "pages/delivery/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u6D88\u606F"
      }
    },
    {
      path: "pages/my/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u6211\u7684"
      }
    },
    {
      path: "pages/my/map",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u4F5C\u4E1A\u8303\u56F4"
      }
    },
    {
      path: "pages/my/qrCode",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "\u4E13\u5C5E\u4E8C\u7EF4\u7801"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "\u5C0F\u667A\u5E2E",
    backgroundColor: "#F8F8F8",
    onReachBottomDistance: 50
  };
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  var t = {
    pages,
    globalStyle,
    condition
  };
  function n(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function s(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var o = s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, o2 = s2.lib = {}, r2 = o2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = o2.WordArray = r2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, o3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var r3 = 0; r3 < o3; r3++) {
            var i3 = n4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            t4[s3 + r3 >>> 2] |= i3 << 24 - (s3 + r3) % 4 * 8;
          }
        else
          for (r3 = 0; r3 < o3; r3 += 4)
            t4[s3 + r3 >>> 2] = n4[r3 >>> 2];
        return this.sigBytes += o3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = r2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], o3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var o4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return o4 /= 4294967296, (o4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, r3 = 0; r3 < t4; r3 += 4) {
          var a3 = o3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push((r3 >>> 4).toString(16)), s3.push((15 & r3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(r3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, h2 = o2.BufferedBlockAlgorithm = r2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        typeof e4 == "string" && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, o3 = n4.sigBytes, r3 = this.blockSize, a3 = o3 / (4 * r3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * r3, u3 = e3.min(4 * c3, o3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += r3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(h3, u3);
      }, clone: function() {
        var e4 = r2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      o2.Hasher = h2.extend({ cfg: r2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = (s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = o, function(e3) {
      var t3 = n2, s2 = t3.lib, o2 = s2.WordArray, r2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = r2.extend({ _doReset: function() {
        this._hash = new o2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, o3 = e4[s3];
          e4[s3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
        }
        var r3 = this._hash.words, i3 = e4[t4 + 0], c3 = e4[t4 + 1], f2 = e4[t4 + 2], g2 = e4[t4 + 3], p2 = e4[t4 + 4], m2 = e4[t4 + 5], y = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], k2 = e4[t4 + 9], T2 = e4[t4 + 10], S2 = e4[t4 + 11], v2 = e4[t4 + 12], A2 = e4[t4 + 13], P2 = e4[t4 + 14], I2 = e4[t4 + 15], b2 = r3[0], O2 = r3[1], C2 = r3[2], E2 = r3[3];
        b2 = u2(b2, O2, C2, E2, i3, 7, a2[0]), E2 = u2(E2, b2, O2, C2, c3, 12, a2[1]), C2 = u2(C2, E2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, C2, E2, b2, g2, 22, a2[3]), b2 = u2(b2, O2, C2, E2, p2, 7, a2[4]), E2 = u2(E2, b2, O2, C2, m2, 12, a2[5]), C2 = u2(C2, E2, b2, O2, y, 17, a2[6]), O2 = u2(O2, C2, E2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, C2, E2, w2, 7, a2[8]), E2 = u2(E2, b2, O2, C2, k2, 12, a2[9]), C2 = u2(C2, E2, b2, O2, T2, 17, a2[10]), O2 = u2(O2, C2, E2, b2, S2, 22, a2[11]), b2 = u2(b2, O2, C2, E2, v2, 7, a2[12]), E2 = u2(E2, b2, O2, C2, A2, 12, a2[13]), C2 = u2(C2, E2, b2, O2, P2, 17, a2[14]), b2 = l2(b2, O2 = u2(O2, C2, E2, b2, I2, 22, a2[15]), C2, E2, c3, 5, a2[16]), E2 = l2(E2, b2, O2, C2, y, 9, a2[17]), C2 = l2(C2, E2, b2, O2, S2, 14, a2[18]), O2 = l2(O2, C2, E2, b2, i3, 20, a2[19]), b2 = l2(b2, O2, C2, E2, m2, 5, a2[20]), E2 = l2(E2, b2, O2, C2, T2, 9, a2[21]), C2 = l2(C2, E2, b2, O2, I2, 14, a2[22]), O2 = l2(O2, C2, E2, b2, p2, 20, a2[23]), b2 = l2(b2, O2, C2, E2, k2, 5, a2[24]), E2 = l2(E2, b2, O2, C2, P2, 9, a2[25]), C2 = l2(C2, E2, b2, O2, g2, 14, a2[26]), O2 = l2(O2, C2, E2, b2, w2, 20, a2[27]), b2 = l2(b2, O2, C2, E2, A2, 5, a2[28]), E2 = l2(E2, b2, O2, C2, f2, 9, a2[29]), C2 = l2(C2, E2, b2, O2, _2, 14, a2[30]), b2 = h2(b2, O2 = l2(O2, C2, E2, b2, v2, 20, a2[31]), C2, E2, m2, 4, a2[32]), E2 = h2(E2, b2, O2, C2, w2, 11, a2[33]), C2 = h2(C2, E2, b2, O2, S2, 16, a2[34]), O2 = h2(O2, C2, E2, b2, P2, 23, a2[35]), b2 = h2(b2, O2, C2, E2, c3, 4, a2[36]), E2 = h2(E2, b2, O2, C2, p2, 11, a2[37]), C2 = h2(C2, E2, b2, O2, _2, 16, a2[38]), O2 = h2(O2, C2, E2, b2, T2, 23, a2[39]), b2 = h2(b2, O2, C2, E2, A2, 4, a2[40]), E2 = h2(E2, b2, O2, C2, i3, 11, a2[41]), C2 = h2(C2, E2, b2, O2, g2, 16, a2[42]), O2 = h2(O2, C2, E2, b2, y, 23, a2[43]), b2 = h2(b2, O2, C2, E2, k2, 4, a2[44]), E2 = h2(E2, b2, O2, C2, v2, 11, a2[45]), C2 = h2(C2, E2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = h2(O2, C2, E2, b2, f2, 23, a2[47]), C2, E2, i3, 6, a2[48]), E2 = d2(E2, b2, O2, C2, _2, 10, a2[49]), C2 = d2(C2, E2, b2, O2, P2, 15, a2[50]), O2 = d2(O2, C2, E2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, C2, E2, v2, 6, a2[52]), E2 = d2(E2, b2, O2, C2, g2, 10, a2[53]), C2 = d2(C2, E2, b2, O2, T2, 15, a2[54]), O2 = d2(O2, C2, E2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, C2, E2, w2, 6, a2[56]), E2 = d2(E2, b2, O2, C2, I2, 10, a2[57]), C2 = d2(C2, E2, b2, O2, y, 15, a2[58]), O2 = d2(O2, C2, E2, b2, A2, 21, a2[59]), b2 = d2(b2, O2, C2, E2, p2, 6, a2[60]), E2 = d2(E2, b2, O2, C2, S2, 10, a2[61]), C2 = d2(C2, E2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, C2, E2, b2, k2, 21, a2[63]), r3[0] = r3[0] + b2 | 0, r3[1] = r3[1] + O2 | 0, r3[2] = r3[2] + C2 | 0, r3[3] = r3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, o3 = 8 * t4.sigBytes;
        n3[o3 >>> 5] |= 128 << 24 - o3 % 32;
        var r3 = e3.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (o3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), n3[14 + (o3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = r2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, o3, r3, i3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function l2(e4, t4, n3, s3, o3, r3, i3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function h2(e4, t4, n3, s3, o3, r3, i3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function d2(e4, t4, n3, s3, o3, r3, i3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      t3.MD5 = r2._createHelper(c2), t3.HmacMD5 = r2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e2, t2) {
    var n2, s2, r2;
    e2.exports = (s2 = (n2 = o).lib.Base, r2 = n2.enc.Utf8, void (n2.algo.HMAC = s2.extend({ init: function(e3, t3) {
      e3 = this._hasher = new e3.init(), typeof t3 == "string" && (t3 = r2.parse(t3));
      var n3 = e3.blockSize, s3 = 4 * n3;
      t3.sigBytes > s3 && (t3 = e3.finalize(t3)), t3.clamp();
      for (var o2 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = o2.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      o2.sigBytes = i2.sigBytes = s3, this.reset();
    }, reset: function() {
      var e3 = this._hasher;
      e3.reset(), e3.update(this._iKey);
    }, update: function(e3) {
      return this._hasher.update(e3), this;
    }, finalize: function(e3) {
      var t3 = this._hasher, n3 = t3.finalize(e3);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), s(function(e2, t2) {
    e2.exports = o.HmacMD5;
  }));
  const i = "FUNCTION", a = "OBJECT", c = "CLIENT_DB";
  function u(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function l(e2) {
    return u(e2) === "object";
  }
  function h(e2) {
    return e2 && typeof e2 == "string" ? JSON.parse(e2) : e2;
  }
  const d = true, f = "app";
  let g;
  switch (f) {
    case "h5":
      g = "web";
      break;
    case "app-plus":
      g = "app";
      break;
    default:
      g = f;
  }
  const p = h({}.UNICLOUD_DEBUG), m = h("[]");
  let _ = "";
  try {
    _ = "__UNI__E9AF589";
  } catch (e2) {
  }
  let w = {};
  function k(e2, t2 = {}) {
    var n2, s2;
    return n2 = w, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (w[e2] = t2), w[e2];
  }
  g === "app" && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const T = ["invoke", "success", "fail", "complete"], S = k("_globalUniCloudInterceptor");
  function v(e2, t2) {
    S[e2] || (S[e2] = {}), l(t2) && Object.keys(t2).forEach((n2) => {
      T.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = S[e3][t3];
        s2 || (s2 = S[e3][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function A(e2, t2) {
    S[e2] || (S[e2] = {}), l(t2) ? Object.keys(t2).forEach((n2) => {
      T.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = S[e3][t3];
        if (!s2)
          return;
        const o2 = s2.indexOf(n3);
        o2 > -1 && s2.splice(o2, 1);
      }(e2, n2, t2[n2]);
    }) : delete S[e2];
  }
  function P(e2, t2) {
    return e2 && e2.length !== 0 ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function I(e2, t2) {
    return S[e2] && S[e2][t2] || [];
  }
  const b = k("_globalUniCloudListener"), O = "response", C = "needLogin", E = "refreshToken", R = "clientdb", U = "cloudfunction", x = "cloudobject";
  function L(e2) {
    return b[e2] || (b[e2] = []), b[e2];
  }
  function D(e2, t2) {
    const n2 = L(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function N(e2, t2) {
    const n2 = L(e2), s2 = n2.indexOf(t2);
    s2 !== -1 && n2.splice(s2, 1);
  }
  function q(e2, t2) {
    const n2 = L(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  function F(e2, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if (t2 === "callFunction") {
        const e3 = n2 && n2.type || i;
        s2 = e3 !== i;
      }
      const o2 = t2 === "callFunction" && !s2;
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const a2 = r2.then(() => s2 ? Promise.resolve() : P(I(t2, "invoke"), n2)).then(() => e2.call(this, n2)).then((e3) => s2 ? Promise.resolve(e3) : P(I(t2, "success"), e3).then(() => P(I(t2, "complete"), e3)).then(() => (o2 && q(O, { type: U, content: e3 }), Promise.resolve(e3))), (e3) => s2 ? Promise.reject(e3) : P(I(t2, "fail"), e3).then(() => P(I(t2, "complete"), e3)).then(() => (q(O, { type: U, content: e3 }), Promise.reject(e3))));
      if (!(n2.success || n2.fail || n2.complete))
        return a2;
      a2.then((e3) => {
        n2.success && n2.success(e3), n2.complete && n2.complete(e3), o2 && q(O, { type: U, content: e3 });
      }, (e3) => {
        n2.fail && n2.fail(e3), n2.complete && n2.complete(e3), o2 && q(O, { type: U, content: e3 });
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e2.call(this, t3);
      e2.call(this, t3).then((e3) => {
        t3.success && t3.success(e3), t3.complete && t3.complete(e3);
      }, (e3) => {
        t3.fail && t3.fail(e3), t3.complete && t3.complete(e3);
      });
    };
  }
  class M extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || "", this.errCode = this.code = e2.code || "SYSTEM_ERROR", this.requestId = e2.requestId;
    }
  }
  function $() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let j;
  function K() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (j)
      return __spreadProps(__spreadValues({}, j), { locale: e2, LOCALE: e2 });
    const t2 = uni.getSystemInfoSync(), { deviceId: n2, osName: s2, uniPlatform: o2, appId: r2 } = t2, i2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < i2.length; e3++) {
      delete t2[i2[e3]];
    }
    return j = __spreadValues(__spreadValues({ PLATFORM: o2, OS: s2, APPID: r2, DEVICEID: n2 }, $()), t2), __spreadProps(__spreadValues({}, j), { locale: e2, LOCALE: e2 });
  }
  var B = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {}), g === "web" && e3.errMsg && e3.errMsg.indexOf("request:fail") === 0 && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new M({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const o2 = e3.data;
        if (o2.error)
          return s2(new M({ code: o2.error.code, message: o2.error.message, requestId: t3 }));
        o2.result = o2.data, o2.requestId = t3, delete o2.data, n2(o2);
      } }));
    });
  } };
  var H = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() }, W = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: z } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: W, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: W }, "zh-Hans");
  var V = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(z("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = H, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return B.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = B.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = B.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e2) => new Promise((t2, n2) => {
        e2.result && e2.result.accessToken ? (this.setAccessToken(e2.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new M({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e2) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e2))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: o2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : a2(new M({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new M({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: o2 }) {
      if (u(t2) !== "string")
        throw new M({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new M({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new M({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const r2 = o2 && o2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: r2, filename: t2 }).then((t3) => {
        const o3 = t3.result;
        i2 = o3.id, a2 = "https://" + o3.cdnDomain + "/" + o3.ossPath;
        const r3 = { url: "https://" + o3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o3.accessKeyId, Signature: o3.signature, host: o3.host, id: i2, key: o3.ossPath, policy: o3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, r3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: a2 }) : s3(new M({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e2[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && e2.length !== 0 || n2(new M({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
  };
  var J = { init(e2) {
    const t2 = new V(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const Y = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var X;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(X || (X = {}));
  var G = function() {
  };
  const Q = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new M({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Z(e2) {
    return e2 === void 0;
  }
  function ee(e2) {
    return Object.prototype.toString.call(e2) === "[object Null]";
  }
  var te;
  function ne(e2) {
    const t2 = (n2 = e2, Object.prototype.toString.call(n2) === "[object Array]" ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(te || (te = {}));
  const se = { adapter: null, runtime: void 0 }, oe = ["anonymousUuidKey"];
  class re extends G {
    constructor() {
      super(), se.adapter.root.tcbObject || (se.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      se.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return se.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete se.adapter.root.tcbObject[e2];
    }
    clear() {
      delete se.adapter.root.tcbObject;
    }
  }
  function ie(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new re();
      case "none":
        return new re();
      default:
        return t2.sessionStorage || new re();
    }
  }
  class ae {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = se.adapter.primaryStorage || e2.persistence, this._storage = ie(this._persistence, se.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, o2 = `anonymous_uuid_${e2.env}`, r2 = `login_type_${e2.env}`, i2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: o2, loginTypeKey: r2, userInfoKey: i2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e2;
      const n2 = ie(e2, se.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && oe.includes(e3))
          continue;
        const o2 = this._storage.getItem(s2);
        Z(o2) || ee(o2) || (n2.setItem(s2, o2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, o2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, o2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const ce = {}, ue = {};
  function le(e2) {
    return ce[e2];
  }
  class he {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class de extends he {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const fe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          s2 !== -1 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof de)
        return console.error(e2.error), this;
      const n2 = typeof e2 == "string" ? new he(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function ge(e2, t2) {
    fe.on(e2, t2);
  }
  function pe(e2, t2 = {}) {
    fe.fire(e2, t2);
  }
  function me(e2, t2) {
    fe.off(e2, t2);
  }
  const ye = "loginStateChanged", _e = "loginStateExpire", we = "loginTypeChanged", ke = "anonymousConverted", Te = "refreshAccessToken";
  var Se;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(Se || (Se = {}));
  const ve = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Ae = { "X-SDK-Version": "1.3.5" };
  function Pe(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const o2 = {}, r2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e2, t3);
        Object.assign(o2, s3), Object.assign(r2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e3;
        if (e3 = i2, Object.prototype.toString.call(e3) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), o2);
        else
          for (const e4 in o2)
            i2.append(e4, o2[e4]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), r2), s2.call(e2, t3);
    };
  }
  function Ie() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: __spreadProps(__spreadValues({}, Ae), { "x-seqid": e2 }) };
  }
  class be {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new se.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = le(this.config.env), this._localCache = (t2 = this.config.env, ue[t2]), Pe(this._reqClass, "post", [Ie]), Pe(this._reqClass, "upload", [Ie]), Pe(this._reqClass, "download", [Ie]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: o2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let r2 = this._cache.getStore(n2);
      if (!r2)
        throw new M({ message: "\u672A\u767B\u5F55CloudBase" });
      const i2 = { refresh_token: r2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if (e3 === "SIGN_PARAM_INVALID" || e3 === "REFRESH_TOKEN_EXPIRED" || e3 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === Se.ANONYMOUS && e3 === "INVALID_REFRESH_TOKEN") {
            const e4 = this._cache.getStore(o2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          pe(_e), this._cache.removeStore(n2);
        }
        throw new M({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return pe(Te), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new M({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e2), o2 = this._cache.getStore(t2), r2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, o2) && (r2 = false), (!s2 || !o2 || o2 < Date.now()) && r2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: o2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let o2 = "application/x-www-form-urlencoded";
      const r2 = __spreadValues({ action: e2, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (ve.indexOf(e2) === -1) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (r2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e2 === "storage.uploadFile") {
        i2 = new FormData();
        for (let e3 in i2)
          i2.hasOwnProperty(e3) && i2[e3] !== void 0 && i2.append(e3, r2[e3]);
        o2 = "multipart/form-data";
      } else {
        o2 = "application/json", i2 = {};
        for (let e3 in r2)
          r2[e3] !== void 0 && (i2[e3] = r2[e3]);
      }
      let a2 = { headers: { "content-type": o2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
      let f2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let o3 = "";
        for (let e4 in n3)
          o3 === "" ? !s3 && (t3 += "?") : o3 += "&", o3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += o3) ? t3 : `${e3}${t3}`;
      }(Y, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const g2 = await this.post(__spreadValues({ url: f2, data: i2 }, a2)), p2 = g2.header && g2.header["x-tcb-trace"];
      if (p2 && this._localCache.setStore(s2, p2), Number(g2.status) !== 200 && Number(g2.statusCode) !== 200 || !g2.data)
        throw new M({ code: "NETWORK_ERROR", message: "network request error" });
      return g2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && ve.indexOf(e2) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new M({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new M({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Oe = {};
  function Ce(e2) {
    return Oe[e2];
  }
  class Ee {
    constructor(e2) {
      this.config = e2, this._cache = le(e2.env), this._request = Ce(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Re {
    constructor(e2) {
      if (!e2)
        throw new M({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = le(this._envId), this._request = Ce(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if (typeof e2 != "string")
        throw new M({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if (typeof e2 != "string")
        throw new M({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class Ue {
    constructor(e2) {
      if (!e2)
        throw new M({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, o2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: o2, accessToken: r2, accessTokenExpire: i2 }, this.user = new Re(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === Se.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Se.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Se.WECHAT || this.loginType === Se.WECHAT_OPEN || this.loginType === Se.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class xe extends Ee {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, o2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (o2.uuid && o2.refresh_token) {
        this._setAnonymousUUID(o2.uuid), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), pe(ye), pe(we, { env: this.config.env, loginType: Se.ANONYMOUS, persistence: "local" });
        const e3 = new Ue(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new M({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), r2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: o2, ticket: e2 });
      if (r2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), pe(ke, { env: this.config.env }), pe(we, { loginType: Se.CUSTOM, persistence: "local" }), { credential: { refreshToken: r2.refresh_token } };
      throw new M({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, Se.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Le extends Ee {
    async signIn(e2) {
      if (typeof e2 != "string")
        throw new M({ param: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), pe(ye), pe(we, { env: this.config.env, loginType: Se.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ue(this.config.env);
      throw new M({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class De extends Ee {
    async signIn(e2, t2) {
      if (typeof e2 != "string")
        throw new M({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token: r2, access_token_expire: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), r2 && i2 ? this.setAccessToken(r2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), pe(ye), pe(we, { env: this.config.env, loginType: Se.EMAIL, persistence: this.config.persistence }), new Ue(this.config.env);
      throw s2.code ? new M({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new M({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class Ne extends Ee {
    async signIn(e2, t2) {
      if (typeof e2 != "string")
        throw new M({ code: "PARAM_ERROR", message: "username must be a string" });
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Se.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token_expire: r2, access_token: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), i2 && r2 ? this.setAccessToken(i2, r2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), pe(ye), pe(we, { env: this.config.env, loginType: Se.USERNAME, persistence: this.config.persistence }), new Ue(this.config.env);
      throw s2.code ? new M({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new M({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class qe {
    constructor(e2) {
      this.config = e2, this._cache = le(e2.env), this._request = Ce(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), ge(we, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new xe(this.config);
    }
    customAuthProvider() {
      return new Le(this.config);
    }
    emailAuthProvider() {
      return new De(this.config);
    }
    usernameAuthProvider() {
      return new Ne(this.config);
    }
    async signInAnonymously() {
      return new xe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new De(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new Ne(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new xe(this.config)), ge(ke, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === Se.ANONYMOUS)
        throw new M({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const o2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), pe(ye), pe(we, { env: this.config.env, loginType: Se.NULL, persistence: this.config.persistence }), o2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      ge(ye, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      ge(_e, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      ge(Te, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      ge(ke, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      ge(we, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new Ue(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if (typeof e2 != "string")
        throw new M({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new Le(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : __spreadProps(__spreadValues({}, e2.data), { requestId: e2.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Fe = function(e2, t2) {
    t2 = t2 || Q();
    const n2 = Ce(this.config.env), { cloudPath: s2, filePath: o2, onUploadProgress: r2, fileType: i2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e3, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: o2, name: s2, fileType: i2, onUploadProgress: r2 }).then((e4) => {
        e4.statusCode === 201 ? t2(null, { fileID: l2, requestId: d2 }) : t2(new M({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, Me = function(e2, t2) {
    t2 = t2 || Q();
    const n2 = Ce(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, $e = function({ fileList: e2 }, t2) {
    if (t2 = t2 || Q(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e2)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e2 };
    return Ce(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, je = function({ fileList: e2 }, t2) {
    t2 = t2 || Q(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e2)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return Ce(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, Ke = async function({ fileID: e2 }, t2) {
    const n2 = (await je.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Ce(this.config.env);
    let o2 = n2.download_url;
    if (o2 = encodeURI(o2), !t2)
      return s2.download({ url: o2 });
    t2(await s2.download({ url: o2 }));
  }, Be = function({ name: e2, data: t2, query: n2, parse: s2, search: o2 }, r2) {
    const i2 = r2 || Q();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new M({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: o2, function_name: e2, request_data: a2 };
    return Ce(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        i2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), i2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            i2(new M({ message: "response data must be json" }));
          }
      }
      return i2.promise;
    }).catch((e3) => {
      i2(e3);
    }), i2.promise;
  }, He = { timeout: 15e3, persistence: "session" }, We = {};
  class ze {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (se.adapter || (this.requestClient = new se.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e2.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, He), e2), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new ze(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || se.adapter.primaryStorage || He.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        ce[t3] = new ae(e3), ue[t3] = new ae(__spreadProps(__spreadValues({}, e3), { persistence: "local" }));
      }(this.config), n2 = this.config, Oe[n2.env] = new be(n2), this.authObj = new qe(this.config), this.authObj;
    }
    on(e2, t2) {
      return ge.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return me.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return Be.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return $e.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return je.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return Ke.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return Fe.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return Me.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      We[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = We[e2];
      if (!n2)
        throw new M({ message: `\u6269\u5C55${e2} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ne(e2) || {};
      t2 && (se.adapter = t2), n2 && (se.runtime = n2);
    }
  }
  var Ve = new ze();
  function Je(e2, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), o2 = "";
    for (var r2 in n2)
      o2 === "" ? !s2 && (t2 += "?") : o2 += "&", o2 += r2 + "=" + encodeURIComponent(n2[r2]);
    return /^http(s)?:\/\//.test(t2 += o2) ? t2 : "" + e2 + t2;
  }
  class Ye {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, o2) => {
        H.request({ url: Je("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          o2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: o2, data: r2, headers: i2, fileType: a2 } = e2, c2 = H.uploadFile({ url: Je("https:", s2), name: "file", formData: Object.assign({}, r2), filePath: o2, fileType: a2, header: i2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          e3.statusCode === 200 && r2.success_action_status && (n3.statusCode = parseInt(r2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          g === "mp-alipay" && console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177\u4E0A\u4F20\u817E\u8BAF\u4E91\u65F6\u65E0\u6CD5\u51C6\u786E\u5224\u65AD\u662F\u5426\u4E0A\u4F20\u6210\u529F\uFF0C\u8BF7\u4F7F\u7528\u771F\u673A\u6D4B\u8BD5"), n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        typeof e2.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Xe = { setItem(e2, t2) {
    H.setStorageSync(e2, t2);
  }, getItem: (e2) => H.getStorageSync(e2), removeItem(e2) {
    H.removeStorageSync(e2);
  }, clear() {
    H.clearStorageSync();
  } };
  var Ge = { genAdapter: function() {
    return { root: {}, reqClass: Ye, localStorage: Xe, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ve.useAdapters(Ge);
  const Qe = Ve, Ze = Qe.init;
  Qe.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = Ze.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        t3[e4] = F(t3[e4]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var et = Qe;
  function tt(e2) {
    return e2 && tt(e2.__v_raw) || e2;
  }
  function nt() {
    return { token: H.getStorageSync("uni_id_token") || H.getStorageSync("uniIdToken"), tokenExpired: H.getStorageSync("uni_id_token_expired") };
  }
  function st({ token: e2, tokenExpired: t2 } = {}) {
    e2 && H.setStorageSync("uni_id_token", e2), t2 && H.setStorageSync("uni_id_token_expired", t2);
  }
  function ot() {
    if (g !== "web")
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), H.removeStorageSync("uni_id_token"), H.removeStorageSync("uniIdToken"), H.removeStorageSync("uni_id_token_expired"));
  }
  var rt = class extends V {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = B.sign(n2, this.config.clientSecret);
      const o2 = K();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(o2));
      const { token: r2 } = nt();
      return s2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: o2, success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : a2(new M({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new M({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new M({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let o2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: r2, formData: i2, name: a2 } = t3.result;
        o2 = t3.result.fileUrl;
        const c2 = { url: r2, formData: i2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: o2 }) : s3(new M({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e2 } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var it = { init(e2) {
    const t2 = new rt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function at({ data: e2 }) {
    let t2;
    t2 = K();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = nt();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  function ct({ name: e2, data: t2 }) {
    const { localAddress: n2, localPort: s2 } = this, o2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      H.request({ method: "POST", url: i2, data: { name: e2, platform: g, provider: o2, spaceId: r2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e3 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._originCallFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = at.call(this, { data: t2 });
        H.request({ method: "POST", url: a2, data: { provider: o2, platform: g, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new M({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new M({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ut = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var lt = /[\\^$.*+?()[\]{}|]/g, ht = RegExp(lt.source);
  function dt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && ht.test(s2) ? s2.replace(lt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function ft({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.config.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function gt(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = at.call(e2, { data: n3.data });
      const o2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, ft.call(this, { functionName: s2, result: e3, logPvd: o2 }), Promise.resolve(e3)), (e3) => (ft.call(this, { functionName: s2, result: e3, logPvd: o2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: o3, content: r2, mode: i2 } = n4[s3], a2 = e4.match(o3);
          if (!a2)
            continue;
          let c2 = r2;
          for (let e5 = 1; e5 < a2.length; e5++)
            c2 = dt(c2, `{$${e5}}`, a2[e5]);
          for (const e5 in t3)
            c2 = dt(c2, `{${e5}}`, t3[e5]);
          return i2 === "replace" ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: ut, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      let s2;
      return e2.debugInfo && !e2.debugInfo.forceRemote && m ? (e2._originCallFunction || (e2._originCallFunction = n2), s2 = ct.call(this, t3)) : s2 = n2.call(this, t3), Object.defineProperty(s2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), s2;
    };
  }
  const pt = Symbol("CLIENT_DB_INTERNAL");
  function mt(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = pt, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e3 || typeof n2 != "string") {
        const t3 = e3[n2];
        return typeof t3 == "function" ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function yt(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      s2 !== -1 && e2[t2].splice(s2, 1);
    } };
  }
  const _t = ["db.Geo", "db.command", "command.aggregate"];
  function wt(e2, t2) {
    return _t.indexOf(`${e2}.${t2}`) > -1;
  }
  function kt(e2) {
    switch (u(e2 = tt(e2))) {
      case "array":
        return e2.map((e3) => kt(e3));
      case "object":
        return e2._internalType === pt || Object.keys(e2).forEach((t2) => {
          e2[t2] = kt(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Tt(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class St {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: kt(e3.$param) })) };
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => e3.$method === "action");
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => e2.$method !== "action") };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Tt(e2), n2 = Tt(e2.prevStage);
        if (t2 === "aggregate" && n2 === "collection" || t2 === "pipeline")
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if (Tt(e2) === "command")
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Tt(e2), n2 = Tt(e2.prevStage);
        if (t2 === "aggregate" && n2 === "command")
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get count() {
      if (!this.isAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e2 = this;
      return function() {
        return vt({ $method: "count", $param: kt(Array.from(arguments)) }, e2, this._database);
      };
    }
    get remove() {
      if (!this.isCommand)
        return function() {
          return this._send("remove", Array.from(arguments));
        };
      const e2 = this;
      return function() {
        return vt({ $method: "remove", $param: kt(Array.from(arguments)) }, e2, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      if (!this.isCommand)
        return function() {
          throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        };
      const e2 = this;
      return function() {
        return vt({ $method: "set", $param: kt(Array.from(arguments)) }, e2, this._database);
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: kt(t2) }), d) {
        const e3 = s2.$db.find((e4) => e4.$method === "collection"), t3 = e3 && e3.$param;
        t3 && t3.length === 1 && typeof e3.$param[0] == "string" && e3.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function vt(e2, t2, n2) {
    return mt(new St(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), wt(s2, t3) ? vt({ $method: t3 }, e3, n2) : function() {
        return vt({ $method: t3, $param: kt(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function At({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class Pt extends class {
    constructor({ uniClient: e2 = {} } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = yt(this._authCallBacks), Object.assign(this, yt(this._dbCallBacks)), this.env = mt({}, { get: (e3, t2) => ({ $env: t2 }) }), this.Geo = mt({}, { get: (e3, t2) => At({ path: ["Geo"], method: t2 }) }), this.serverDate = At({ path: [], method: "serverDate" }), this.RegExp = At({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if (typeof e2 != "string" || !e2.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function o2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const o3 = s2[n3];
            o3.udb && typeof o3.udb.setResult == "function" && (t3 ? o3.udb.setResult(t3) : o3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const r2 = this;
      function i2(e3) {
        return r2._callback("error", [e3]), P(I("database", "fail"), e3).then(() => P(I("database", "complete"), e3)).then(() => (o2(null, e3), q(O, { type: R, content: e3 }), Promise.reject(e3)));
      }
      const a2 = P(I("database", "invoke")), u2 = this._uniClient;
      return a2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: r3, systemInfo: a3 = [] } = e3.result;
        if (a3)
          for (let e4 = 0; e4 < a3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = a3[e4], o3 = console[g === "app" && t4 === "warn" ? "error" : t4] || console.log;
            let r4 = "[System Info]" + n4;
            s4 && (r4 = `${r4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), o3(r4);
          }
        if (t3) {
          return i2(new M({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.code, e3.result.errMsg = e3.result.message, s3 && r3 && (st({ token: s3, tokenExpired: r3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: r3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: r3 }]), q(E, { token: s3, tokenExpired: r3 }));
        const c2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < c2.length; t4++) {
          const { prop: n4, tips: s4 } = c2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return P(I("database", "success"), e4).then(() => P(I("database", "complete"), e4)).then(() => (o2(e4, null), q(O, { type: R, content: e4 }), Promise.resolve(e4)));
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return i2(new M({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  function It(e2) {
    e2.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e2.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = function(e3, t3 = {}) {
        return mt(new e3(t3), { get: (e4, t4) => wt("db", t4) ? vt({ $method: t4 }, null, e4) : function() {
          return vt({ $method: t4, $param: kt(Array.from(arguments)) }, null, e4);
        } });
      }(Pt, { uniClient: e2 });
      return this._database = n2, n2;
    };
  }
  const bt = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Ot = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Ct = { TOKEN_INVALID_TOKEN_EXPIRED: Ot, TOKEN_INVALID_INVALID_CLIENTID: bt, TOKEN_INVALID: bt, TOKEN_INVALID_WRONG_TOKEN: bt, TOKEN_INVALID_ANONYMOUS_USER: bt }, Et = { "uni-id-token-expired": Ot, "uni-id-check-token-failed": bt, "uni-id-token-not-exist": bt, "uni-id-check-device-feature-failed": bt };
  function Rt(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Ut(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      e3.needLogin === true ? n2.push(Rt(t2, e3.path)) : e3.needLogin === false && s2.push(Rt(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function xt(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = e2.split("?")[0].replace(/^\//, "");
    return n2.some((e3) => e3.pagePath === s2);
  }
  const Lt = !!t.uniIdRouter;
  const { loginPage: Dt, routerNeedLogin: Nt, resToLogin: qt, needLoginPage: Ft, notNeedLoginPage: Mt, loginPageInTabBar: $t } = function({ pages: e2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: o2 = {} } = t) {
    const { loginPage: r2, needLogin: i2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Ut(e2), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e3 = []) {
      const t2 = [], n3 = [];
      return e3.forEach((e4) => {
        const { root: s3, pages: o3 = [] } = e4, { needLoginPage: r3, notNeedLoginPage: i3 } = Ut(o3, s3);
        t2.push(...r3), n3.push(...i3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: r2, routerNeedLogin: i2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: xt(r2, o2) };
  }();
  function jt(e2) {
    const t2 = function(e3) {
      const t3 = getCurrentPages(), n2 = t3[t3.length - 1].route, s2 = e3.charAt(0), o2 = e3.split("?")[0];
      if (s2 === "/")
        return o2;
      const r2 = o2.replace(/^\//, "").split("/"), i2 = n2.split("/");
      i2.pop();
      for (let e4 = 0; e4 < r2.length; e4++) {
        const t4 = r2[e4];
        t4 === ".." ? i2.pop() : t4 !== "." && i2.push(t4);
      }
      return i2[0] === "" && i2.shift(), i2.join("/");
    }(e2).replace(/^\//, "");
    return !(Mt.indexOf(t2) > -1) && (Ft.indexOf(t2) > -1 || Nt.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Kt(e2, t2) {
    return e2.charAt(0) !== "/" && (e2 = "/" + e2), t2 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t2)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t2)}` : e2;
  }
  function Bt() {
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { token: t3, tokenExpired: s2 } = nt();
        let o2;
        if (t3) {
          if (s2 < Date.now()) {
            const e4 = "uni-id-token-expired";
            o2 = { errCode: e4, errMsg: Et[e4] };
          }
        } else {
          const e4 = "uni-id-check-token-failed";
          o2 = { errCode: e4, errMsg: Et[e4] };
        }
        if (jt(e3.url) && o2) {
          o2.uniIdRedirectUrl = e3.url;
          if (L(C).length > 0)
            return setTimeout(() => {
              q(C, o2);
            }, 0), e3.url = "", false;
          if (!Dt)
            return e3;
          const t4 = Kt(Dt, o2.uniIdRedirectUrl);
          if ($t) {
            if (n2 === "navigateTo" || n2 === "redirectTo")
              return setTimeout(() => {
                uni.switchTab({ url: t4 });
              }), false;
          } else if (n2 === "switchTab")
            return setTimeout(() => {
              uni.navigateTo({ url: t4 });
            }), false;
          e3.url = t4;
        }
        return e3;
      } });
    }
  }
  function Ht() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            const { errCode: t3 } = e3;
            return t3 in Et;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            const { errCode: t3 } = e3;
            return t3 in Ct;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = L(C), n3 = getCurrentPages(), s3 = n3[n3.length - 1], o2 = s3 && s3.$page && s3.$page.fullPath;
        if (t3.length > 0)
          return q(C, Object.assign({ uniIdRedirectUrl: o2 }, e3));
        Dt && uni.navigateTo({ url: Kt(Dt, o2) });
      }(n2);
    });
  }
  function Wt(e2) {
    e2.onNeedLogin = function(e3) {
      D(C, e3);
    }, e2.offNeedLogin = function(e3) {
      N(C, e3);
    }, Lt && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = true, function t2() {
      const n2 = getCurrentPages();
      n2 && n2[0] ? Bt.call(e2) : setTimeout(() => {
        t2();
      }, 30);
    }(), qt && Ht.call(e2)));
  }
  function zt(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        D(O, e4);
      }, e3.offResponse = function(e4) {
        N(O, e4);
      };
    }(e2), Wt(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        D(E, e4);
      }, e3.offRefreshToken = function(e4) {
        N(E, e4);
      };
    }(e2);
  }
  let Vt;
  const Jt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Yt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Xt() {
    const e2 = nt().token || "", t2 = e2.split(".");
    if (!e2 || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Vt(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Vt = typeof atob != "function" ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Yt.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, o2 = "", r2 = 0; r2 < e2.length; )
      t2 = Jt.indexOf(e2.charAt(r2++)) << 18 | Jt.indexOf(e2.charAt(r2++)) << 12 | (n2 = Jt.indexOf(e2.charAt(r2++))) << 6 | (s2 = Jt.indexOf(e2.charAt(r2++))), o2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return o2;
  } : atob;
  var Gt = s(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function o2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function r2(e3, t3, { onChooseFile: s3, onUploadProgress: o3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e4 : t5);
        }
        return e4;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, o4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const r3 = t5.tempFiles, i2 = r3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!r3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = r3[s5];
            e4.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, o4 && o4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < i2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < i2 && c2();
            });
          }
        });
      }(e3, t4, 5, o3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? r2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: r3 = ["album", "camera"], extension: i2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: r3, extension: i2, success(t5) {
              e5(o2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? r2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: r3, sourceType: i2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: r3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: r4, height: i3, width: a3 } = t5;
              e5(o2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: r4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : r2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, r3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return r3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(o2(t5));
            }, fail(e6) {
              r3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Qt = n(Gt);
  const Zt = "manual";
  function en$2(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Zt)
          return;
        let n2 = false;
        const s2 = [];
        for (let o2 = 2; o2 < e3.length; o2++)
          e3[o2] !== t2[o2] && (s2.push(e3[o2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: o2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = o2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const r2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = r2, t2 && t2(r2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const o2 = t2.collection || this.collection;
      n2 = Array.isArray(o2) ? n2.collection(...o2) : n2.collection(o2);
      const r2 = t2.where || this.where;
      r2 && Object.keys(r2).length && (n2 = n2.where(r2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f2 = t2.getcount !== void 0 ? t2.getcount : this.getcount, g2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, p2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return g2 && (m2.getTree = y), p2 && (m2.getTreePath = y), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function tn(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), e3;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: o2, errorOptions: r2 } = n2, i2 = !s2;
      return new Proxy({}, { get: (n3, s3) => async function n4(...c2) {
        let u2;
        i2 && uni.showLoading({ title: o2.title, mask: o2.mask });
        try {
          u2 = await e2.callFunction({ name: t2, type: a, data: { method: s3, params: c2 } });
        } catch (e3) {
          u2 = { result: e3 };
        }
        const { errCode: l2, errMsg: h2, newToken: d2 } = u2.result || {};
        if (i2 && uni.hideLoading(), d2 && d2.token && d2.tokenExpired && (st(d2), q(E, __spreadValues({}, d2))), l2) {
          if (i2)
            if (r2.type === "toast")
              uni.showToast({ title: h2, icon: "none" });
            else {
              if (r2.type !== "modal")
                throw new Error(`Invalid errorOptions.type: ${r2.type}`);
              {
                const { confirm: e4 } = await async function({ title: e5, content: t3, showCancel: n5, cancelText: s4, confirmText: o3 } = {}) {
                  return new Promise((r3, i3) => {
                    uni.showModal({ title: e5, content: t3, showCancel: n5, cancelText: s4, confirmText: o3, success(e6) {
                      r3(e6);
                    }, fail() {
                      r3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: h2, showCancel: r2.retry, cancelText: "\u53D6\u6D88", confirmText: r2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (r2.retry && e4)
                  return n4(...c2);
              }
            }
          const e3 = new M({ code: l2, message: h2, requestId: u2.requestId });
          throw e3.detail = u2.result, q(O, { type: x, content: e3 }), e3;
        }
        return q(O, { type: x, content: u2.result }), u2.result;
      } });
    };
  }
  async function nn(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        H.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } }));
      }));
      return !(!e3.data || e3.data.code !== 0);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  function sn(e2) {
    if (e2.initUniCloudStatus && e2.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e3, t3) => {
      setTimeout(() => {
        e3();
      }, n2);
    }), e2.isReady = false, e2.isDefault = false;
    const s2 = e2.auth();
    e2.initUniCloudStatus = "pending", e2.initUniCloud = t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (g === "app" && uni.getSystemInfoSync().osName === "ios") {
        const { osName: e3, osVersion: t3 } = uni.getSystemInfoSync();
        e3 === "ios" && function(e4) {
          if (!e4 || typeof e4 != "string")
            return 0;
          const t4 = e4.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e2.debugInfo) {
        const { address: t3, servePort: n3 } = e2.debugInfo;
        return async function(e3, t4) {
          let n4;
          for (let s3 = 0; s3 < e3.length; s3++) {
            const o2 = e3[s3];
            if (await nn(o2, t4)) {
              n4 = o2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console[g === "app" ? "error" : "warn"];
      if (t3)
        e2.localAddress = t3, e2.localPort = n3;
      else if (e2.debugInfo) {
        let t4 = "";
        e2.debugInfo.initialLaunchType === "remote" ? (e2.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", g === "web" && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), g.indexOf("mp-") === 0 && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ot(), e2.isReady = true, e2.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e2.initUniCloudStatus = "rejected";
    });
  }
  let on = new class {
    init(e2) {
      let t2 = {};
      const n2 = g === "web" && navigator.userAgent.indexOf("HBuilderX") > 0 || g === "app";
      switch (e2.provider) {
        case "tcb":
        case "tencent":
          t2 = et.init(Object.assign(e2, { debugLog: n2 }));
          break;
        case "aliyun":
          t2 = J.init(Object.assign(e2, { debugLog: n2 }));
          break;
        case "private":
          t2 = it.init(Object.assign(e2, { debugLog: n2 }));
          break;
        default:
          throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      }
      const s2 = p;
      s2 && !s2.code && (t2.debugInfo = s2), sn(t2), t2.reInit = function() {
        sn(this);
      }, gt(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), It(t2), function(e3) {
        e3.getCurrentUserInfo = Xt, e3.chooseAndUploadFile = Qt.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return en$2(e3);
        } }), e3.importObject = tn(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e3] = F(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    {
      const e2 = m;
      let t2 = {};
      if (e2.length === 1)
        t2 = e2[0], on = on.init(t2), on.isDefault = true;
      else {
        const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
        let n2;
        n2 = e2 && e2.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e3) => {
          on[e3] = function() {
            return console.error(n2), Promise.reject(new M({ code: "SYS_ERR", message: n2 }));
          };
        });
      }
      Object.assign(on, { get mixinDatacom() {
        return en$2(on);
      } }), zt(on), on.addInterceptor = v, on.removeInterceptor = A, g === "web" && (window.uniCloud = on);
    }
  })();
  var rn = on;
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        rn.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `\u5F53\u524D\u9009\u62E9\u4E86${res.tempFiles.length}\u4E2A\u6587\u4EF6 \uFF0C${res.tempFiles.length - files.length} \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$c = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.filesList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "file-picker__box",
          key: index,
          style: vue.normalizeStyle($options.boxStyle)
        }, [
          vue.createElementVNode("view", {
            class: "file-picker__box-content",
            style: vue.normalizeStyle($options.borderStyle)
          }, [
            vue.createElementVNode("image", {
              class: "file-image",
              src: item.url,
              mode: "aspectFill",
              onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
            }, null, 8, ["src", "onClick"]),
            $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon-del-box",
              onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "icon-del" }),
              vue.createElementVNode("view", { class: "icon-del rotate" })
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 4)
        ], 4);
      }), 128)),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-picker__box",
        style: vue.normalizeStyle($options.boxStyle)
      }, [
        vue.createElementVNode("view", {
          class: "file-picker__box-content is-add",
          style: vue.normalizeStyle($options.borderStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "icon-add" }),
            vue.createElementVNode("view", { class: "icon-add rotate" })
          ], true)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3], ["__scopeId", "data-v-4c5c5653"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$b = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-file-picker__lists is-text-box",
        style: vue.normalizeStyle($options.borderStyle)
      }, [
        vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-file-picker__lists-box", {
              "files-border": index !== 0 && $options.styles.dividline
            }]),
            key: index,
            style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
          }, [
            vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
              vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
              vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
              vue.createElementVNode("view", { class: "files__name" }, vue.toDisplayString(item.name), 1),
              $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon-del-box icon-files",
                onClick: ($event) => $options.delFile(index)
              }, [
                vue.createElementVNode("view", { class: "icon-del icon-files" }),
                vue.createElementVNode("view", { class: "icon-del rotate" })
              ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 6);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2], ["__scopeId", "data-v-4f822398"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$a = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      mode: {
        type: String,
        default: "grid"
      },
      fileMediatype: {
        type: String,
        default: "image"
      },
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(rn.config && rn.config.provider)) {
        this.noSpace = true;
        rn.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `\u60A8\u6700\u591A\u9009\u62E9 ${this.limitLength} \u4E2A\u6587\u4EF6`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        rn.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        });
      },
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push(__spreadProps(__spreadValues({}, filedata), {
            file: files[i2]
          }));
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        });
      },
      async setSuccessAndError(res, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await rn.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode("text", { class: "file-title" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("text", { class: "file-count" }, vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "\u9009\u62E9\u6587\u4EF6")
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-363ace0e"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("\u5F00\u59CB\u670D\u52A1");
      const remark = vue.ref("");
      const orderId = vue.ref("");
      const fileList = vue.ref([]);
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        title.value = options.status == 1 ? "\u5F00\u59CB\u670D\u52A1" : "\u5B8C\u6210\u670D\u52A1";
        from.value = options.type;
        formatAppLog("log", "at pages/serveRecord/index.vue:56", options, "\u670D\u52A1\u8BB0\u5F55\u9875\u9762");
      });
      const handleDelete = (e2) => {
        fileList.value = fileList.value.filter((item) => item.uuid !== e2.tempFile.uuid);
        formatAppLog("log", "at pages/serveRecord/index.vue:62", e2.tempFile.uuid, "\u5220\u9664\u56DE\u8C03");
      };
      const handleSuccess = (e2) => {
        formatAppLog("log", "at pages/serveRecord/index.vue:65", e2, "\u4E0A\u4F20\u6210\u529F\u56DE\u8C03");
      };
      const uploadImage2 = async () => {
        const promises = fileList.value.map((item) => {
          return new Promise((resolve, reject) => {
            uni.uploadFile({
              url: "http://172.17.2.58/api/storage/upload",
              files: [
                {
                  name: "file",
                  uri: item.url,
                  file: item
                }
              ],
              header: {
                Authorization: uni.getStorageSync("token")
              },
              success: (uploadFileRes) => {
                const imageUrl = JSON.parse(uploadFileRes.data).data.url;
                resolve(imageUrl);
              },
              fail: (err) => {
                reject(err);
              }
            });
          });
        });
        try {
          const uploadedImages = await Promise.all(promises);
          return uploadedImages;
        } catch (error) {
          formatAppLog("error", "at pages/serveRecord/index.vue:98", error);
          uni.showToast({
            title: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25",
            duration: 1e3,
            icon: "none"
          });
          return [];
        }
      };
      const handleSelect = (e2) => {
        if (fileList.value.length) {
          fileList.value = fileList.value.concat(e2.tempFiles);
        } else {
          fileList.value = e2.tempFiles;
        }
      };
      const handleFail = () => {
        formatAppLog("log", "at pages/serveRecord/index.vue:115", e, "\u4E0A\u4F20\u5931\u8D25");
      };
      const handleSubmit = async () => {
        const uploadedImages = await uploadImage2();
        if (!fileList.value.length) {
          return uni.showToast({
            title: "\u8BF7\u4E0A\u4F20\u56FE\u7247",
            duration: 2e3,
            icon: "none"
          });
        }
        let times = setTimeout(() => {
          uni.showLoading({
            title: "loading"
          });
        }, 500);
        let startParams = {
          id: orderId.value,
          serveBeforeImgs: uploadedImages,
          serveBeforeIllustrate: remark.value
        };
        let finishParams = {
          id: orderId.value,
          serveAfterImgs: uploadedImages,
          serveAfterIllustrate: remark.value
        };
        const sameFunc = () => {
          if (from.value === "list") {
            goBack();
          } else {
            uni.navigateTo({
              url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
            });
          }
          remark.value = "";
          orderId.value = "";
          fileList.value = [];
          return uni.showToast({
            title: "\u64CD\u4F5C\u6210\u529F!",
            duration: 1e3,
            icon: "none"
          });
        };
        if (title.value === "\u5F00\u59CB\u670D\u52A1") {
          startServe(startParams).then((res) => {
            if (res.code === 200) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              clearTimeout(times);
              sameFunc();
            }
          });
        } else {
          finishServe(finishParams).then((res) => {
            if (res.code === 200) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              clearTimeout(times);
              sameFunc();
            }
          });
        }
        formatAppLog("log", "at pages/serveRecord/index.vue:183", uploadedImages, "\u4E0A\u4F20\u540E\u7684\u56FE\u7247\u94FE\u63A5\u6570\u7EC4");
      };
      const handleInput = (e2) => {
        remark.value = e2.detail.value;
        formatAppLog("log", "at pages/serveRecord/index.vue:187", e2.detail.value, "-----");
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "serveRecord" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createElementVNode("view", { class: "img card" }, [
            vue.createElementVNode("view", { class: "title" }, "\u670D\u52A1" + vue.toDisplayString(title.value === "\u5F00\u59CB\u670D\u52A1" ? "\u524D" : "\u540E") + "\u7167\u7247", 1),
            vue.createVNode(_component_uni_file_picker, {
              limit: "3",
              title: "\u6700\u591A\u4E0A\u4F203\u5F20\u56FE\u7247",
              onSuccess: handleSuccess,
              onSelect: handleSelect,
              onFail: handleFail,
              onDelete: handleDelete
            })
          ]),
          vue.createElementVNode("view", { class: "remark card" }, [
            vue.createElementVNode("view", { class: "title" }, "\u8865\u5145\u8BF4\u660E"),
            vue.createElementVNode("textarea", {
              onInput: handleInput,
              value: remark.value,
              maxlength: 50,
              "placeholder-style": "color:#F76260",
              placeholder: "\u8BF7\u8F93\u5165\u5BF9\u672C\u6B21\u670D\u52A1\u524D\u7684\u5176\u4ED6\u8BF4\u660E\u8865\u5145"
            }, null, 40, ["value"]),
            vue.createElementVNode("view", { class: "limit" }, [
              vue.createElementVNode("text", { class: "min" }, vue.toDisplayString(remark.value.length), 1),
              vue.createTextVNode("/"),
              vue.createElementVNode("text", { class: "max" }, vue.toDisplayString(50 - remark.value.length), 1)
            ])
          ]),
          vue.createCommentVNode(" \u5E95\u90E8\u6309\u94AE "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "\u786E\u8BA4\u63D0\u4EA4")
          ])
        ]);
      };
    }
  };
  var PagesServeRecordIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-45744d9a"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/serveRecord/index.vue"]]);
  var en$1 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans$1 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant$1 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  initVueI18n(messages$1);
  var en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  setTimeout(() => {
    uni.getSystemInfoSync().platform;
  }, 16);
  initVueI18n(messages);
  const _sfc_main$8 = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      vue.ref();
      const list2 = vue.ref();
      vue.ref();
      vue.ref();
      let tabIndex = vue.ref(0);
      vue.ref(true);
      vue.ref(false);
      vue.reactive(/* @__PURE__ */ new Map());
      vue.onMounted(() => {
        if (users.tabIndex) {
          tabIndex.value = users.tabIndex;
        }
        if (users.tabIndex === 0) {
          list2.value.dealPList();
        } else {
          list2.value.alreadList();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", null, [
            vue.createTextVNode(" \u6D88\u606F\u9875\u9762 "),
            vue.createVNode(UniFooter, { pagePath: "pages/delivery/index" })
          ]),
          vue.createCommentVNode(" end ")
        ], 2112);
      };
    }
  };
  var PagesDeliveryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7c6df030"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/delivery/index.vue"]]);
  const _sfc_main$7 = {
    __name: "BaseInfo",
    props: {
      baseData: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      const handleQr = () => {
        uni.showToast({
          title: "\u7A0B\u5E8F\u5458\u54E5\u54E5\u6B63\u5728\u5B9E\u73B0\u4E2D",
          duration: 1e3,
          icon: "none"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "nav-bg mnav-bg" }, [
          vue.createElementVNode("view", { class: "headBg" }),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", { class: "headBox" }, [
              vue.createElementVNode("view", { class: "head" }, [
                __props.baseData.avatar === "" ? (vue.openBlock(), vue.createElementBlock("icon", { key: 0 })) : (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: __props.baseData.avatar
                }, null, 8, ["src"]))
              ]),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", { class: "tit" }, vue.toDisplayString(__props.baseData.name), 1),
                vue.createElementVNode("view", null, vue.toDisplayString(__props.baseData.account), 1),
                vue.createElementVNode("view", { class: "address" }, [
                  vue.createElementVNode("icon"),
                  vue.createTextVNode(" " + vue.toDisplayString(__props.baseData.agencyName ? __props.baseData.agencyName : "\u6682\u65E0"), 1)
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "QR",
              onClick: handleQr
            }, [
              vue.createElementVNode("image", { src: "/static/qr.png" })
            ])
          ])
        ]);
      };
    }
  };
  var BaseInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1c1ce0bd"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/BaseInfo.vue"]]);
  const _sfc_main$6 = {
    name: "UniRate",
    props: {
      isFill: {
        type: [Boolean, String],
        default: true
      },
      color: {
        type: String,
        default: "#ececec"
      },
      activeColor: {
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        type: String,
        default: "#c0c0c0"
      },
      size: {
        type: [Number, String],
        default: 24
      },
      value: {
        type: [Number, String],
        default: 0
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 5
      },
      margin: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        type: [Boolean, String],
        default: false
      },
      touchable: {
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e2) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e2) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      mousedown(e2) {
      },
      mousemove(e2) {
      },
      mouseleave(e2) {
      },
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size \u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value = index + 1;
          } else {
            value = index + 0.5;
          }
        } else {
          value = index + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        ref: "uni-rate",
        class: "uni-rate"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.stars, (star, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
            style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
            key: index,
            onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
            onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              color: $props.color,
              size: $props.size,
              type: $props.isFill ? "star-filled" : "star"
            }, null, 8, ["color", "size", "type"]),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ width: star.activeWitch }),
              class: "uni-rate__icon-on"
            }, [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? $props.disabledColor : $props.activeColor,
                size: $props.size,
                type: "star-filled"
              }, null, 8, ["color", "size"])
            ], 4)
          ], 38);
        }), 128))
      ], 512)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-978a5ada"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const _sfc_main$5 = {
    __name: "Evaluate",
    props: {
      baseData: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "boxBg headTop" }, [
          vue.createElementVNode("view", { class: "headItem" }, [
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "\u6211\u7684\u8BC4\u4EF7"),
              vue.createElementVNode("view", { class: "star" }, [
                vue.createVNode(_component_uni_rate, {
                  readonly: true,
                  "allow-half": "",
                  value: 4.5,
                  "active-color": "#EF4F3F",
                  color: "#F4F4F4"
                }, null, 8, ["value"]),
                vue.createElementVNode("text", null, vue.toDisplayString(4.5), 1)
              ])
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "\u6392\u73ED\u65F6\u95F4"),
              (!__props.baseData.startTime || __props.baseData.startTime === "") && (!__props.baseData.endTime || __props.baseData.endTime === "") ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u65E0")) : (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, vue.toDisplayString(vue.unref(overTimeFormat)(__props.baseData.startTime)) + "-" + vue.toDisplayString(vue.unref(overTimeFormat)(__props.baseData.endTime)), 1))
            ])
          ])
        ]);
      };
    }
  };
  var Evaluate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e5f99d92"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/Evaluate.vue"]]);
  const _sfc_main$4 = {
    __name: "HistoryScope",
    setup(__props) {
      const store2 = useStore();
      const handleHistory = () => {
        store2.commit("user/setTabIndex", 0);
        store2.commit("user/setTaskStatus", -1);
        uni.navigateTo({
          url: "/pages/history/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "boxBg" }, [
          vue.createElementVNode("view", { class: "headItem" }, [
            vue.createElementVNode("view", {
              class: "item",
              onClick: handleHistory
            }, [
              vue.createElementVNode("text", null, "\u5168\u90E8\u53D6\u6D3E"),
              vue.createElementVNode("text", null, [
                vue.createElementVNode("icon", { class: "nextIcon" })
              ])
            ]),
            vue.createElementVNode("navigator", {
              url: "/pages/my/map",
              "open-type": "redirect"
            }, [
              vue.createElementVNode("view", { class: "item" }, [
                vue.createElementVNode("text", null, "\u4F5C\u4E1A\u8303\u56F4"),
                vue.createElementVNode("text", null, [
                  vue.createElementVNode("icon", { class: "nextIcon" })
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  var HistoryScope = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f05c4784"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/HistoryScope.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      const store2 = useStore();
      let baseData = uni.getStorageSync("userInfo");
      const handleOut = () => {
        uni.removeStorageSync("token");
        store2.commit("setFootStatus", 0);
        uni.redirectTo({
          url: "/pages/login/user"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "navFrame" }, [
            vue.createCommentVNode(" \u6211\u7684\u57FA\u672C\u4FE1\u606F "),
            vue.createVNode(BaseInfo, { baseData: vue.unref(baseData) }, null, 8, ["baseData"]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" \u6211\u7684\u8BC4\u4EF7\u3001\u6392\u73ED\u65F6\u95F4 "),
            vue.createVNode(Evaluate, { baseData: vue.unref(baseData) }, null, 8, ["baseData"]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" \u5386\u53F2\u53D6\u6D3E\u3001\u4F5C\u4E1A\u8303\u56F4 "),
            vue.createVNode(HistoryScope),
            vue.createCommentVNode(" end ")
          ]),
          vue.createCommentVNode(" \u9000\u51FA\u6309\u94AE "),
          vue.createElementVNode("view", { class: "footBtn" }, [
            vue.createElementVNode("view", { class: "btnBox" }, [
              vue.createElementVNode("button", {
                class: "btn-default",
                onClick: handleOut
              }, "\u9000\u51FA\u767B\u5F55")
            ])
          ]),
          vue.createCommentVNode(" end "),
          vue.createCommentVNode(" footer "),
          vue.createVNode(UniFooter, { pagePath: "pages/my/index" }),
          vue.createCommentVNode(" end ")
        ], 64);
      };
    }
  };
  var PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4dcceeb0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/index.vue"]]);
  const getUserScope = (params) => request({
    url: `/users/scope`,
    method: "get",
    params
  });
  const _sfc_main$2 = {
    __name: "map",
    setup(__props) {
      const title = vue.ref("\u4F5C\u4E1A\u8303\u56F4");
      const latitude = vue.ref(39.997534);
      const longitude = vue.ref(116.475334);
      const polygons = vue.reactive([
        {
          points: [
            {
              longitude: 116.475334,
              latitude: 39.997534
            },
            {
              longitude: 116.476627,
              latitude: 39.998315
            },
            {
              longitude: 116.478603,
              latitude: 39.99879
            },
            {
              longitude: 116.478529,
              latitude: 40.000296
            },
            {
              longitude: 116.475082,
              latitude: 40.000151
            },
            {
              longitude: 116.473421,
              latitude: 39.998717
            }
          ],
          fillColor: "#EF4F3F20",
          strokeColor: "#EF4F3F",
          strokeWidth: 2,
          zIndex: 1,
          dottedLine: true
        }
      ]);
      vue.onMounted(() => {
        getUserPolygon();
      });
      const getUserPolygon = async () => {
        await getUserScope().then((res) => {
          if (res.code === 200)
            ;
        });
      };
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/my/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" end "),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("map", {
              class: "mapBox",
              latitude: latitude.value,
              longitude: longitude.value,
              polygons,
              scale: "16"
            }, null, 8, ["latitude", "longitude", "polygons"])
          ])
        ], 64);
      };
    }
  };
  var PagesMyMap = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4adb27b2"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/map.vue"]]);
  const _sfc_main$1 = {
    __name: "qrCode",
    setup(__props) {
      const title = vue.ref("\u4E13\u5C5E\u4E8C\u7EF4\u7801");
      vue.onMounted(() => {
      });
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/my/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" end "),
          vue.createElementVNode("view", { class: "pageBox qrCode" }, [
            vue.createElementVNode("view", { class: "boxBg" }, [
              vue.createElementVNode("view", { class: "qrHead" }, [
                vue.createElementVNode("view", { class: "head" }),
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode("view", { class: "tit" }, "\u795E\u9886\u5FEB\u9012\u5458-\u5F20\u5168\u86CB"),
                  vue.createElementVNode("view", { class: "star" }, [
                    vue.createVNode(_component_uni_rate, {
                      readonly: true,
                      "allow-half": "",
                      value: 4.5,
                      "active-color": "#EF4F3F",
                      color: "#F4F4F4"
                    }, null, 8, ["value"]),
                    vue.createElementVNode("text", null, "4.7")
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("image", { src: "/static/scanPay.png" })
              ]),
              vue.createElementVNode("view", null, "\u626B\u7801\u5FEB\u901F\u4E0B\u5355")
            ])
          ])
        ], 64);
      };
    }
  };
  var PagesMyQrCode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-699c7670"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/qrCode.vue"]]);
  __definePage("pages/login/user", PagesLoginUser);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/serviceSkill/index", PagesServiceSkillIndex);
  __definePage("pages/getOrder/index", PagesGetOrderIndex);
  __definePage("pages/serviceRange/index", PagesServiceRangeIndex);
  __definePage("pages/city/index", PagesCityIndex);
  __definePage("pages/setting/index", PagesSettingIndex);
  __definePage("pages/pickup/index", PagesPickupIndex);
  __definePage("pages/orderInfo/index", PagesOrderInfoIndex);
  __definePage("pages/cancel/index", PagesCancelIndex);
  __definePage("pages/serveRecord/index", PagesServeRecordIndex);
  __definePage("pages/delivery/index", PagesDeliveryIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/my/map", PagesMyMap);
  __definePage("pages/my/qrCode", PagesMyQrCode);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const store2 = useStore();
      const locationData = vue.ref({});
      onShow(() => {
        uni.getLocation({
          type: "gcj02",
          success: (res) => {
            locationData.value = {
              longitude: res.longitude,
              latitude: res.latitude
            };
            store2.commit("user/setlLacation", locationData.value);
          },
          fail: (err) => {
          }
        });
        uni.getNetworkType({
          success: function(res) {
          }
        });
      });
      vue.onMounted(() => {
      });
      return () => {
      };
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/App.vue"]]);
  var global$1 = {
    state: {
      footStatus: 0,
      orderActive: 0
    },
    mutations: {
      setFootStatus(state, provider) {
        state.footStatus = provider;
      },
      setOrderActive(state, provider) {
        state.footStatus = provider;
      }
    },
    actions: {},
    getters: {}
  };
  var user = {
    namespaced: true,
    state() {
      return {
        location: {},
        address: "\u8BF7\u9009\u62E9",
        userBase: {},
        pages: 0,
        page: 1,
        token: "",
        taskId: "",
        detailsData: {},
        taskType: 1,
        taskStatus: 0,
        detailType: 0,
        tabIndex: 0,
        reasonVal: "",
        reasonDesc: "",
        orderDistance: null,
        orderTime: null,
        filterOverTime: null,
        deliveryData: [],
        cancelData: [],
        alreadyData: [],
        isRedistribute: false,
        isFiltrate: false,
        taskDetailData: {},
        selectTaskData: [],
        payData: {},
        isBack: null,
        istabChange: null,
        isDelete: null,
        paymentMethod: null,
        isPickUp: false,
        isCollect: false,
        isSign: false,
        isDelivery: false,
        newType: null,
        cardData: null,
        timeData: null,
        isInput: false,
        isSearch: false,
        searchText: "",
        isSearchClear: false,
        isNew: false
      };
    },
    mutations: {
      setLocation(state, provider) {
        state.loacation = provider;
      },
      setAddress(state, provider) {
        state.address = provider;
      },
      setToken(state, provider) {
        state.token = provider;
      },
      setUserInfo(state, provider) {
        state.userBase = provider;
      },
      setlLacation(state, provider) {
        state.loacation = provider;
      },
      setPage(state, provider) {
        state.page = provider;
      },
      setPages(state, provider) {
        state.pages = provider;
      },
      setOrderDistance(state, provider) {
        state.orderDistance = provider;
      },
      setOrderTime(state, provider) {
        state.orderTime = provider;
      },
      setFilterOverTime(state, provider) {
        state.filterOverTime = provider;
      },
      setDeliveryData(state, provider) {
        state.deliveryData = provider;
      },
      setAlreadyData(state, provider) {
        state.alreadyData = provider;
      },
      setCancelData(state, provider) {
        state.cancelData = provider;
      },
      setTaskId(state, provider) {
        state.taskId = provider;
      },
      setTaskType(state, provider) {
        state.taskType = provider;
      },
      setTaskDetailData(state, provider) {
        state.taskDetailData = provider;
      },
      setReasonVal(state, provider) {
        state.reasonVal = provider;
      },
      setReasonDesc(state, provider) {
        state.reasonDesc = provider;
      },
      setRedistribute(state, provider) {
        state.isRedistribute = provider;
      },
      setSelectTaskData(state, provider) {
        state.selectTaskData = provider;
      },
      setIsFiltrate(state, provider) {
        state.isFiltrate = provider;
      },
      setTabIndex(state, provider) {
        state.tabIndex = provider;
      },
      setTaskStatus(state, provider) {
        state.taskStatus = provider;
      },
      setPayData(state, provider) {
        state.payData = provider;
      },
      setDetailsData(state, provider) {
        state.detailsData = provider;
      },
      setNewType(state, provider) {
        state.newType = provider;
      },
      setIstabChange(state, provider) {
        state.istabChange = provider;
      },
      setIsDelete(state, provider) {
        state.isDelete = provider;
      },
      setPaymentMethod(state, provider) {
        state.paymentMethod = provider;
      },
      setDetailType(state, provider) {
        state.detailType = provider;
      },
      setIsPickUp(state, provider) {
        state.isPickUp = provider;
      },
      setIsCollect(state, provider) {
        state.isCollect = provider;
      },
      setIsSign(state, provider) {
        state.isSign = provider;
      },
      setIsDelivery(state, provider) {
        state.isDelivery = provider;
      },
      setCardData(state, provider) {
        state.cardData = provider;
      },
      setTimeData(state, provider) {
        state.timeData = provider;
      },
      setIsInput(state, provider) {
        state.isInput = provider;
      },
      setIsSearch(state, provider) {
        state.isSearch = provider;
      },
      setSearchText(state, provider) {
        state.searchText = provider;
      },
      setSearchClear(state, provider) {
        state.isSearchClear = provider;
      },
      setIsNew(state, provider) {
        state.isNew = provider;
      }
    },
    actions: {
      async GetUsersInfo({ state, commit }, payload) {
        if (state.token !== "") {
          await getUserInfo().then((res) => {
            uni.setStorageSync("userInfo", res.data);
            commit("setUserInfo", res.data);
          });
        }
      }
    },
    getters: {}
  };
  var store = createStore(__spreadProps(__spreadValues({}, global$1), {
    modules: {
      user
    }
  }));
  function createApp(rootComponent, rootProps) {
    rootComponent.mpTye = "app";
    rootComponent.render = () => {
    };
    const app2 = vue.createVueApp(rootComponent, rootProps);
    app2.provide("__globalStyles", __uniConfig.styles);
    const oldMount = app2.mount;
    app2.mount = (container) => {
      const appVm = oldMount.call(app2, container);
      return appVm;
    };
    return app2;
  }
  const app = createApp(App);
  app.use(store);
  app.mount("#app");
})(uni.VueShared, Vue);
