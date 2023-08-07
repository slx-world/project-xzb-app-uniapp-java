if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
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
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
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
  const _export_sfc = (sfc, props) => {
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
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$c], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
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
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
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
      /**
       * 初始化变量值
       */
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 获取父元素实例
       */
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
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
            style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
          },
          [
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
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                $data.val ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 18,
                  color: "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$b], ["__scopeId", "data-v-09fd5285"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$B = {
    name: "uniFormsItem",
    props: {
      // 自定义内容
      custom: {
        type: Boolean,
        default: false
      },
      // 是否显示报错信息
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
      // 左边标题的宽度单位px
      labelWidth: {
        type: [Number, String],
        default: ""
      },
      // 对齐方式，left|center|right
      labelAlign: {
        type: String,
        default: ""
      },
      // lable的位置，可选为 left-左边，top-上边
      labelPosition: {
        type: String,
        default: ""
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 表单校验规则
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
      // uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
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
      /**
       * 获取父元素实例
       */
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
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      /**
       * 子组件调用，如 easyinput
       * @param {Object} value
       */
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
      /**
       * 校验规则
       * @param {Object} value
       */
      async triggerCheck(value, formTrigger) {
        this.errMsg = "";
        if (!this.validator || Object.keys(this.formRules).length === 0)
          return;
        const isNoField = this.isRequired(this.formRules.rules || []);
        let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger);
        let result = null;
        if (!!isTrigger || formTrigger) {
          let name = this.isArray ? this.arrayField : this.name;
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            this.form.formData
          );
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
              title: result.errorMessage || "校验错误",
              icon: "none"
            });
          }
          if (this.form.errShowType === "modal") {
            uni.showModal({
              title: "提示",
              content: result.errorMessage || "校验错误"
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
      /**
       * 触发时机
       * @param {Object} event
       */
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
      // 是否有必填字段
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
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", { "uni-forms-item--border": $data.border, "is-first-border": $data.border && $data.isFirstBorder, "uni-forms-item-error": $options.msg }])
      },
      [
        vue.createElementVNode("view", { class: "uni-forms-item__box" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__inner", ["is-direction-" + $data.labelPos]])
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "uni-forms-item__label",
                  style: vue.normalizeStyle({ width: $data.labelWid, justifyContent: $options.justifyContent })
                },
                [
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
                    vue.createElementVNode(
                      "text",
                      { class: "label-text" },
                      vue.toDisplayString($props.label),
                      1
                      /* TEXT */
                    ),
                    $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "label-seat"
                    })) : vue.createCommentVNode("v-if", true)
                  ], true)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["uni-forms-item__content", { "is-input-error-border": $options.msg }])
                },
                [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          $options.msg ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["uni-error-message", { "uni-error-msg--boeder": $data.border }]),
              style: vue.normalizeStyle({
                paddingLeft: $options.labelLeft
              })
            },
            [
              vue.createElementVNode(
                "text",
                { class: "uni-error-message-text" },
                vue.toDisplayString($data.showMsg === "undertext" ? $options.msg : ""),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$a], ["__scopeId", "data-v-462874dd"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
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
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
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
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const _sfc_main$A = {
    name: "uniForms",
    components: {},
    emits: ["input", "reset", "validate", "submit"],
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return {};
        }
      },
      // 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return {};
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      // 校验触发器方式，默认 关闭
      validateTrigger: {
        type: String,
        default: ""
      },
      // label 位置，可选值 top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度，单位 px
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，可选值 left/center/right
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
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:152", "当前 uni-froms 组件缺少 ref 属性");
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
    // mounted() {
    // 	this.init(this.rules)
    // },
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
      // 监听 watch
      registerWatch() {
        this.unwatchs.forEach((v2) => v2());
        this.childrens.forEach((v2) => {
          v2.init();
        });
        Object.keys(this.dataValue).forEach((key) => {
          let watch = this.$watch(
            "dataValue." + key,
            (value) => {
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
            },
            {
              deep: true,
              immediate: true
            }
          );
          this.unwatchs.push(watch);
        });
      },
      /**
       * 公开给用户使用
       * 设置校验规则
       * @param {Object} formRules
       */
      setRules(formRules) {
        this.init(formRules);
      },
      /**
       * 公开给用户使用
       * 设置自定义表单组件 value 值
       *  @param {String} name 字段名称
       *  @param {String} value 字段值
       */
      setValue(name, value, callback) {
        let example = this.childrens.find((child) => child.name === name);
        if (!example)
          return null;
        value = this._getValue(example.name, value);
        this.formData[name] = value;
        example.val = value;
        return example.triggerCheck(value, callback);
      },
      /**
       * 表单重置
       * @param {Object} event
       */
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
      /**
       * 触发表单校验，通过 @validate 获取
       * @param {Object} validate
       */
      validateCheck(validate) {
        if (validate === null)
          validate = null;
        this.$emit("validate", validate);
      },
      /**
       * 校验所有或者部分表单
       */
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
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       */
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
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:377", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.validateAll(this.formData, "submit", keepitem, callback);
      },
      /**
       * 外部调用方法
       * 校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       */
      validate(keepitem, callback) {
        return this.submit(keepitem, callback, true);
      },
      /**
       * 部分表单校验
       * @param {Object} props
       * @param {Object} cb
       */
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
      /**
       * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
       */
      resetFields() {
        this.resetForm();
      },
      /**
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       */
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
      /**
       * 把 value 转换成指定的类型
       * @param {Object} key
       * @param {Object} value
       */
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
      /**
       * 过滤数字类型
       * @param {Object} format
       */
      type_filter(format) {
        return format === "int" || format === "double" || format === "number" || format === "timestamp";
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms", { "uni-forms--top": !$props.border }])
      },
      [
        vue.createElementVNode(
          "form",
          {
            onSubmit: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.submitForm && $options.submitForm(...args), ["stop"])),
            onReset: _cache[1] || (_cache[1] = (...args) => $options.resetForm && $options.resetForm(...args))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$9], ["__scopeId", "data-v-9a1e3c32"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
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
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
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
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      // 初始化动画条件
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
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
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
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
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
      // 关闭过度动画
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
      // 处理动画开始前的默认样式
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
      // 处理内置组合动画
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
      // 内置动画类型与实际动画对应字典
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
      // 驼峰转中横线
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
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$8], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$y = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
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
      /**
       * 监听type类型
       */
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
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
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
      // H5 下禁止底部滚动
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
    // TODO vue3
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
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
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
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "缺少类型：", direction);
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
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
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
      /**
       * 顶部弹出样式处理
       */
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
      /**
       * 底部弹出样式处理
       */
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
      /**
       * 中间弹出样式处理
       */
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
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
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
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$7], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _imports_0 = "/static/new/img_logo@2x.png";
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
      let currentSettings = { ...defaultSettings };
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
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
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
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
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
    if (oldScope) {
      oldScope.stop();
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
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
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
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
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
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app: app2,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
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
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
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
      }
    );
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
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
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
    return names.reduce(
      function(module, moduleName, i2) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i2 === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
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
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
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
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
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
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
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
    this._scope = null;
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
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
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
      formatAppLog("log", "at utils/request.js:19", params, baseUrl + url, "进来了么");
      uni.request({
        url: baseUrl + url,
        data: params,
        header,
        method,
        sslVerify: false
      }).then((res) => {
        formatAppLog("log", "at utils/request.js:27", params, url, res, "header");
        const { data } = res;
        if (res.statusCode == 401) {
          uni.showToast({
            title: "您的登录已过期！请重新登录后操作！",
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
            title: "权限不足，无法登录！",
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
        formatAppLog("log", "at utils/request.js:66", err, "err");
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
        //账号
        veriryCode: "",
        // 密码
        userType: 2
      });
      const customRules = vue.reactive({
        phone: {
          rules: [
            {
              required: true,
              errorMessage: "请输入手机号"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                const reg = /^1[3-9]\d{9}$/;
                if (!reg.test(value)) {
                  callback("手机号输入错误！请重新输入");
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
              errorMessage: "请输入验证码"
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
            formatAppLog("log", "at pages/login/user.vue:169", res, "登录结果获取");
            setTimeout(function() {
              uni.hideLoading();
            }, 500);
            clearTimeout(times);
            if (res.code === 200) {
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
            formatAppLog("log", "at pages/login/user.vue:207", err, "err");
            if (err.code === 605) {
              reason.value = err.msg;
              alertDialog.value.open();
            } else {
              uni.showToast({
                title: err.msg || "登录失败",
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
            title: "手机号输入错误！请重新输入",
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
            title: err.msg || "获取验证码失败",
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
            vue.createCommentVNode(" 登录表单 "),
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
                        placeholder: "请输入手机号"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
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
                        placeholder: "请输入验证码"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", {
                        class: "clearIcon",
                        onClick: handlePwd
                      }, "获取验证码")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rules", "modelValue"]),
              vue.createCommentVNode(" 按钮 "),
              vue.createElementVNode("view", { class: "btnBox" }, [
                vue.createElementVNode("button", {
                  class: vue.normalizeClass([
                    "btn-default",
                    vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0 ? "disabled" : ""
                  ]),
                  disabled: vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0,
                  type: "primary",
                  onClick: handleSubmit
                }, " 登录 ", 10, ["disabled"])
              ]),
              vue.createElementVNode("div", { class: "gentleReminder" }, " 仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！ "),
              vue.createCommentVNode(" end "),
              vue.createCommentVNode(" 更新请求Url - 教学需求 "),
              vue.createCommentVNode(' <view class="setUrl" @click="inputDialogToggle">配置请求url</view>\r\n			<uni-popup ref="inputDialog" type="dialog">\r\n				<uni-popup-dialog ref="inputClose" mode="input" title="配置URL" :value="baseURL" placeholder="请输入baseURL" @confirm="dialogInputConfirm"></uni-popup-dialog>\r\n			</uni-popup> '),
              vue.createCommentVNode(" 更新请求Url - 教学需求 ")
            ]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" 提示窗示例 "),
            vue.createVNode(
              _component_uni_popup,
              {
                ref_key: "alertDialog",
                ref: alertDialog,
                type: "dialog",
                "is-mask-click": false
              },
              {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "dialog" }, [
                    vue.createElementVNode("view", { class: "content" }, "该手机号已被冻结"),
                    vue.createElementVNode("view", { class: "reason" }, [
                      vue.createElementVNode("text", null, "冻结原因："),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(reason.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "phoneLabel" }, "如需解冻请拨打客服电话："),
                    vue.createElementVNode("view", { class: "phone" }, "400-000-4000"),
                    vue.createElementVNode("view", {
                      class: "footer",
                      onClick: handleClose
                    }, "知道了")
                  ])
                ]),
                _: 1
                /* STABLE */
              },
              512
              /* NEED_PATCH */
            )
          ])
        ]);
      };
    }
  };
  const PagesLoginUser = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/login/user.vue"]]);
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
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$6], ["__scopeId", "data-v-7920e3e0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
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
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
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
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
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
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$5], ["__scopeId", "data-v-26544265"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const getDispatchOrder = (params) => request({
    url: `/orders-dispatch/queryForList?serveTypeId=${params}`,
    method: "get"
  });
  const rejectOrder = (params) => request({
    url: `/orders-dispatch/reject`,
    method: "post",
    params
  });
  const receiveOrder = (params) => request({
    url: `/orders-dispatch/receive`,
    method: "post",
    params
  });
  const getDispatchOrderInfo = (params) => request({
    url: `/orders-dispatch/${params}`,
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
  const getOrder = (params, id) => request({
    url: params ? `/orders-serve/queryForList?serveStatus=${params}&id=` + (id ? id : "") : `/orders-serve/queryForList?id=${id}`,
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
          label: "服务技能",
          url: "../../static/new/btn_top_fwjn@2x.png",
          path: "/pages/serviceSkill/index"
        },
        {
          label: "接单设置",
          url: "../../static/new/btn_top_jdsz@2x.png",
          path: "/pages/getOrder/index"
        },
        {
          label: "服务范围",
          url: "../../static/new/btn_top_fwfw@2x.png",
          path: "/pages/serviceRange/index"
        }
        // {
        //   label: '城市设置',
        //   url: '../../static/new/btn_top_fwjn@2x.png',
        //   path: '',
        // },
      ]);
      const handleLink = (val) => {
        uni.navigateTo({
          url: val
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 公用nav "),
            vue.createElementVNode("view", { class: "navBox" }, [
              vue.createElementVNode("view", { class: "baseSetting" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(baseSetting, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "item",
                      key: index,
                      onClick: ($event) => handleLink(item.path)
                    }, [
                      vue.createElementVNode("image", {
                        src: item.url,
                        class: "itemImg"
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "view",
                        { class: "itemLabel" },
                        vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "bg" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const UniNav$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-5f714409"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-home-nav/index.vue"]]);
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
          text: "首页"
        },
        {
          pagePath: "/pages/pickup/index",
          iconPath: "static/collect.png",
          selectedIconPath: "static/collectActive.png",
          text: "订单"
        },
        // {
        // 	pagePath: '',
        // 	iconPath: 'static/qrcode.png',
        // 	selectedIconPath: 'static/qrcode.png',
        // 	text: ''
        // },
        {
          pagePath: "/pages/delivery/index",
          iconPath: "static/delivery.png",
          selectedIconPath: "static/deliveryActive.png",
          text: "消息"
        },
        {
          pagePath: "/pages/my/index",
          iconPath: "static/user.png",
          selectedIconPath: "static/userActive.png",
          text: "我的"
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
            title: "程序员哥哥正在实现中",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 公用底部 "),
            vue.createElementVNode("view", { class: "footBox" }, [
              vue.createElementVNode("view", { class: "uni-tabbar" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(tabbar), (item, index) => {
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
                      item.text !== "" ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: "uni-tabbar__label"
                        },
                        vue.toDisplayString(item.text),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const UniFooter = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-footer/index.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    props: {},
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "empty" }, [
          vue.createElementVNode("view", { class: "image" }),
          vue.createCommentVNode(' <image class="aimage" src="../../static/new/empty.png"></image> '),
          vue.createElementVNode("view", { class: "content" }, "暂无相关内容哦～")
        ]);
      };
    }
  };
  const Empty = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-c00e6953"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/empty/index.vue"]]);
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
      vue.watch(
        () => props.homeFilterList,
        () => {
          serviceType.data = [{ id: "", name: "全部" }].concat(props.homeFilterList);
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["homeFilter", __props.fixTop ? "fixTop" : ""])
          },
          [
            vue.createElementVNode("view", { class: "leftBox" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["item", !status.value ? "active" : ""]),
                  onClick: _cache[0] || (_cache[0] = ($event) => handleClick(0))
                },
                "抢单",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["item", status.value ? "active" : ""]),
                  onClick: _cache[1] || (_cache[1] = ($event) => handleClick(1))
                },
                "派单",
                2
                /* CLASS */
              )
            ]),
            vue.createElementVNode("view", { class: "rightBox" }, [
              vue.createElementVNode("view", { class: "label" }, "服务类型"),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["icon", isOpen.value ? "up" : "down"]),
                  onClick: handleOpen
                },
                null,
                2
                /* CLASS */
              )
            ]),
            vue.withDirectives(vue.createElementVNode(
              "view",
              { class: "filterPopup" },
              [
                vue.createElementVNode("view", { class: "service" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(serviceType).data, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["serviceItem", activeType.value === item.id ? "active" : ""]),
                        key: index,
                        onClick: ($event) => handleService(item.id)
                      }, vue.toDisplayString(item.name), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", { class: "footer" }, [
                  vue.createElementVNode("view", {
                    class: "btn-gray btn",
                    onClick: handleReset
                  }, "重置"),
                  vue.createElementVNode("view", {
                    class: "btn-red btn",
                    onClick: handleSubmit
                  }, "确定")
                ])
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, isOpen.value]
            ])
          ],
          2
          /* CLASS */
        );
      };
    }
  };
  const HomeFilter = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-538110be"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/components/homeFilter.vue"]]);
  const _sfc_main$q = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      },
      type: {
        type: Number
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      const isRob = vue.ref(true);
      let list = vue.reactive({
        data: []
      });
      const orderType = vue.ref(null);
      const alertDialog = vue.ref(null);
      const handleToInfo = (item) => {
        formatAppLog("log", "at pages/index/components/homeList.vue:95", item, "进入详情");
        uni.navigateTo({
          url: "/pages/orderInfo/index?id=" + item.id + "&type=dispatch"
        });
      };
      const handleRejectOrder = (id) => {
        formatAppLog("log", "at pages/index/components/homeList.vue:102", "点击了拒单");
        uni.navigateTo({
          url: "/pages/cancel/index?id=" + id + "&type=dispatch"
        });
      };
      const handleReceiveOrder = (id) => {
        receiveOrder({
          id
        }).then((res) => {
          formatAppLog("log", "at pages/index/components/homeList.vue:113", res, "接单");
          if (res.code === 200) {
            uni.showToast({
              title: "接单成功!",
              duration: 1e3,
              icon: "none"
            });
            emit("refresh");
          } else {
            uni.showToast({
              title: "接单失败!",
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接单失败!",
            duration: 1e3,
            icon: "none"
          });
          formatAppLog("log", "at pages/index/components/homeList.vue:135", err, "接单失败");
        });
      };
      const handleClose = () => {
        alertDialog.value.close();
        emit("refresh");
      };
      const handleTime = (val) => {
        return val ? val.replace(/:\d{2}$/, "") : "";
      };
      const handleRob = (id) => {
        robOrder({
          id
        }).then((res) => {
          formatAppLog("log", "at pages/index/components/homeList.vue:150", res, "抢单");
          if (res.code === 200) {
            isRob.value = true;
          } else {
            isRob.value = false;
          }
          alertDialog.value.open();
        }).catch((err) => {
          isRob.value = false;
          alertDialog.value.open();
          formatAppLog("log", "at pages/index/components/homeList.vue:161", err, "errrrr");
        });
      };
      vue.watchEffect(() => {
        list.data = props.data;
        orderType.value = props.type;
        formatAppLog("log", "at pages/index/components/homeList.vue:167", list.data, props, "++++++++++++++");
      });
      vue.watch(
        () => props.type,
        () => {
          formatAppLog("log", "at pages/index/components/homeList.vue:173", props.type, "=================");
        }
      );
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "card",
                key: index,
                onClick: ($event) => handleToInfo(item)
              }, [
                vue.createElementVNode("view", { class: "card-content" }, [
                  vue.createElementVNode("image", {
                    class: "leftCardContent",
                    src: item.serveItemImg
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "rightCardContent" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.serveItemName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "serviceTime" }, [
                      vue.createElementVNode("text", null, "预约时间"),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(handleTime(item.serveStartTime)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "serviceAddress" }, [
                  vue.createCommentVNode(" <view>服务地址</view> "),
                  vue.createElementVNode("view", { class: "address" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "addressContent" },
                      vue.toDisplayString(item.serveAddress),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "cardFooter" }, [
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("text", { class: "price-label" }, "服务费用"),
                    vue.createTextVNode(
                      " ￥" + vue.toDisplayString(item.serveFee),
                      1
                      /* TEXT */
                    )
                  ]),
                  !orderType.value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "robBtn btn-red",
                    onClick: ($event) => handleRob(item.id)
                  }, "立即抢单", 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "btn-box"
                  }, [
                    vue.createElementVNode("view", {
                      class: "btn-gray",
                      onClick: vue.withModifiers(($event) => handleRejectOrder(item.id), ["stop"])
                    }, "拒单", 8, ["onClick"]),
                    vue.createElementVNode("view", {
                      class: "btn-red",
                      onClick: vue.withModifiers(($event) => handleReceiveOrder(item.id), ["stop"])
                    }, "接单", 8, ["onClick"])
                  ]))
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -"),
          vue.createCommentVNode(" 提示窗示例 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "alertDialog",
              ref: alertDialog,
              type: "dialog",
              "is-mask-click": false
            },
            {
              default: vue.withCtx(() => [
                vue.createCommentVNode(` <view class="dialog">\r
        <view class="img" :class="isRob ? 'success' : 'fail'"></view>\r
        <view class="content">{{\r
          isRob ? '抢单成功' : '很遗憾，抢单失败'\r
        }}</view>\r
        <view class="footer" @click="handleClose">确定</view>\r
      </view> `),
                vue.createElementVNode("image", {
                  class: "dialogImg",
                  src: isRob.value ? "../../../static/new/img_chenggong@2x.png" : "../../../static/new/img_shibai@2x.png",
                  onClick: handleClose
                }, null, 8, ["src"])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const HomeList$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-5d962223"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/components/homeList.vue"]]);
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
        getList();
        getHomeFilterList();
      });
      onShow(() => {
        getList();
      });
      onPullDownRefresh(() => {
        getList();
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1e3);
        formatAppLog("log", "at pages/index/index.vue:88", "refresh");
      });
      const tabChange = (val, id) => {
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
          homeList.data = res.data || [];
          formatAppLog("log", "at pages/index/index.vue:106", res, homeList.data, "派单");
        });
      };
      const getRobOrderList = (params) => {
        getRobOrder(params).then((res) => {
          homeList.data = res.data.ordersSeizes || [];
          formatAppLog("log", "at pages/index/index.vue:113", res, homeList.data, "抢单");
        });
      };
      const getHomeFilterList = () => {
        getHomeFilter().then((res) => {
          homeFilterList.data = res.data;
        });
      };
      const handleCanScroll = (val) => {
        formatAppLog("log", "at pages/index/index.vue:125", val, "是否可滑动");
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
          vue.createCommentVNode(" 手机状态栏 "),
          vue.createVNode(_component_uni_nav_bar, {
            statusBar: "true",
            backgroundColor: "#F74347"
          }),
          vue.createElementVNode("scroll-view", {
            "scroll-y": icCanScroll.value,
            class: "scrollList",
            onScroll: handleScroll
          }, [
            vue.createCommentVNode(" 顶部基础配置和背景图 "),
            vue.createElementVNode("view", { class: "navFrame" }, [
              vue.createCommentVNode(" nav "),
              vue.createVNode(UniNav$1, { onGoBack: goBack })
            ]),
            vue.createCommentVNode(" 首页筛选 "),
            vue.createVNode(vue.unref(HomeFilter), {
              onHandleCanScroll: handleCanScroll,
              homeFilterList: vue.unref(homeFilterList).data,
              onGetList: getList,
              onTabChange: tabChange
            }, null, 8, ["homeFilterList"]),
            vue.createCommentVNode(" 吸顶筛选 "),
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
              type: orderType.value,
              onRefresh: getList
            }, null, 8, ["data", "type"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 }))
          ], 40, ["scroll-y"]),
          vue.createCommentVNode(" footer "),
          vue.createVNode(UniFooter, { pagePath: "pages/index/index" }),
          vue.createCommentVNode(" end ")
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/index.vue"]]);
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
  const UniNav = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-6e45a3f8"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-nav/index.vue"]]);
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
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleSelect = (active) => {
        if (status.value === "read")
          return;
        serviceSkill.data[activeIndex.value].serveSkillItemResDTOList = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList.map(
          (item) => {
            if (active.serveItemId === item.serveItemId) {
              return Object.assign({}, item, { isSelected: !item.isSelected });
            } else {
              return item;
            }
          }
        ), rightItem.data = [
          ...serviceSkill.data[activeIndex.value].serveSkillItemResDTOList
        ];
        formatAppLog("log", "at pages/serviceSkill/index.vue:105", serviceSkill.data, "点击后 ");
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
            getServiceSkillAllFunc();
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleCancel = () => {
        status.value = "read";
        getServiceSkillAllFunc();
      };
      const handleEdit = () => {
        status.value = "edit";
        formatAppLog("log", "at pages/serviceSkill/index.vue:144", "编辑状态");
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
            title: "选择服务技能",
            onGoBack: goBack,
            rithtText: status.value === "read" ? "编辑" : "",
            onHandleAll: handleEdit
          }, null, 8, ["rithtText"]),
          vue.createElementVNode("view", { class: "servicePage" }, [
            vue.createElementVNode("view", { class: "left" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(serviceSkill.data, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
                    onClick: ($event) => tabChange(item.serveTypeId, index)
                  }, [
                    vue.createElementVNode("view", { class: "tag" }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item.serveTypeName) + " ",
                        1
                        /* TEXT */
                      ),
                      item.count ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "selectNum"
                        },
                        vue.toDisplayString(item.count),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ])
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 右边内容区域 "),
            vue.createElementVNode("view", { class: "serviceBox right" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "clean" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(rightItem.data, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["card", item.isSelected ? "active" : ""]),
                        key: index,
                        onClick: ($event) => handleSelect(item)
                      }, vue.toDisplayString(item.serveItemName), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "footer" },
            [
              vue.createElementVNode("view", {
                class: "btn-gray btn",
                onClick: handleCancel
              }, "取消"),
              vue.createElementVNode("view", {
                class: "btn-red btn",
                onClick: handleSubmit
              }, "保存")
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, status.value === "edit"]
          ])
        ]);
      };
    }
  };
  const PagesServiceSkillIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-6ade5948"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serviceSkill/index.vue"]]);
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
            title: err.msg || "接口调用失败",
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
            title: err.msg || "接口调用失败",
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
            title: "接单设置",
            onGoBack: goBack
          }),
          vue.createElementVNode("view", { class: "switchBox" }, [
            vue.createElementVNode("text", null, "开启接单"),
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
  const PagesGetOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-2eafd06a"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/getOrder/index.vue"]]);
  const _sfc_main$l = {
    __name: "index",
    setup(__props) {
      const cityName = vue.ref("请选择");
      const address = vue.ref("请选择");
      const store2 = useStore();
      const users = store2.state.user;
      const location2 = vue.reactive({
        latitude: "",
        longitude: ""
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
        formatAppLog("log", "at pages/serviceRange/index.vue:75", "111");
      };
      const handleSelectCity = () => {
        uni.navigateTo({
          url: "/pages/city/index?address=" + address.value
        });
      };
      const handleChooseRange = () => {
        uni.chooseLocation({
          latitude: location2.latitude,
          longitude: location2.longitude,
          success: function(res) {
            address.value = res.name;
            location2.latitude = res.latitude;
            location2.longitude = res.longitude;
            markers.data.latitude = res.latitude;
            markers.data.longitude = res.longitude;
            store2.commit("user/setLocation", location2);
            store2.commit("user/setAddress", address.value);
            formatAppLog("log", "at pages/serviceRange/index.vue:96", res, "选择具体服务范围成功");
          },
          fail: function(err) {
            formatAppLog("log", "at pages/serviceRange/index.vue:99", err, "选择具体服务范围失败");
          }
        });
      };
      const handleSubmit = () => {
        if (!users.cityCode) {
          return uni.showToast({
            title: "请选择服务城市",
            duration: 1500,
            icon: "none"
          });
        } else if (!users.address || users.address === "请选择") {
          return uni.showToast({
            title: "请设置意向接单范围",
            duration: 1500,
            icon: "none"
          });
        }
        uni.showLoading({
          title: "loading",
          mask: true
        });
        setServiceSetting({
          cityCode: users.cityCode,
          location: String(users.location.longitude) + "," + String(users.location.latitude),
          intentionScope: users.address
        }).then((res) => {
          uni.showToast({
            title: "保存成功",
            duration: 1500,
            icon: "none",
            success: () => {
              uni.hideLoading();
              goBack();
            }
          });
        });
      };
      onShow(() => {
        getSettingInfo().then((res) => {
          formatAppLog("log", "at pages/serviceRange/index.vue:141", res, "获取当前配置的位置信息");
          if (!res.data.cityCode) {
            uni.getLocation({
              type: "gcj02",
              geocode: true,
              success: function(res2) {
                location2.latitude = res2.latitude;
                location2.longitude = res2.longitude;
                markers.data.latitude = res2.latitude;
                markers.data.longitude = res2.longitude;
                formatAppLog("log", "at pages/serviceRange/index.vue:153", res2, "获取当前位置成功");
              },
              fail: (err) => {
                location2.latitude = 39.909187;
                location2.longitude = 116.397455;
                markers.data.latitude = 39.909187;
                markers.data.longitude = 116.397455;
                formatAppLog("log", "at pages/serviceRange/index.vue:160", err, "获取当前位置失败");
              }
            });
            cityName.value = users.cityName;
          } else {
            store2.commit("user/setCityCode", users.cityCode || res.data.cityCode);
            cityName.value = users.cityName === "请选择" ? res.data.cityName : users.cityName;
            address.value = res.data.intentionScope;
            location2.latitude = res.data.location.split(",")[1];
            location2.longitude = res.data.location.split(",")[0];
            markers.data.latitude = res.data.location.split(",")[1];
            markers.data.longitude = res.data.location.split(",")[0];
            store2.commit("user/setLocation", location2);
            store2.commit("user/setAddress", address.value);
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      });
      vue.onMounted(() => {
      });
      const clearStore = () => {
        store2.commit("user/setLocation", {});
        store2.commit("user/setAddress", "");
        store2.commit("user/setCityCode", "");
        store2.commit("user/setCityName", "请选择");
      };
      const goBack = () => {
        uni.navigateBack();
        clearStore();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceRange" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "请选择工作地点",
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
              vue.createElementVNode("cover-view", { class: "label" }, "服务城市"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode(
                  "cover-view",
                  {
                    class: "cityName",
                    onClick: handleSelectCity
                  },
                  vue.toDisplayString(cityName.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("cover-image", {
                  onClick: handleSelectCity,
                  class: "icon",
                  src: "/static/new/icon_more@2x.png"
                })
              ])
            ]),
            vue.createElementVNode("cover-view", { class: "range" }, [
              vue.createElementVNode("cover-view", { class: "label" }, "意向接单范围"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode(
                  "cover-view",
                  {
                    class: "rangeName",
                    onClick: handleChooseRange
                  },
                  vue.toDisplayString(address.value),
                  1
                  /* TEXT */
                ),
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
              }, "保存")
            ])
          ])
        ]);
      };
    }
  };
  const PagesServiceRangeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-a953d043"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serviceRange/index.vue"]]);
  const Citys = {
    list: [
      {
        "cities": [
          {
            "cityCode": "0837",
            "cityName": "阿坝藏族羌族自治州"
          },
          {
            "cityCode": "0997",
            "cityName": "阿克苏地区"
          },
          {
            "cityCode": "1997",
            "cityName": "阿拉尔市"
          },
          {
            "cityCode": "0483",
            "cityName": "阿拉善盟"
          },
          {
            "cityCode": "0906",
            "cityName": "阿勒泰地区"
          },
          {
            "cityCode": "0897",
            "cityName": "阿里地区"
          },
          {
            "cityCode": "0412",
            "cityName": "鞍山市"
          },
          {
            "cityCode": "0915",
            "cityName": "安康市"
          },
          {
            "cityCode": "0556",
            "cityName": "安庆市"
          },
          {
            "cityCode": "0853",
            "cityName": "安顺市"
          },
          {
            "cityCode": "0372",
            "cityName": "安阳市"
          },
          {
            "cityCode": "1853",
            "cityName": "澳门特别行政区"
          }
        ],
        "idx": "A"
      },
      {
        "cities": [
          {
            "cityCode": "0478",
            "cityName": "巴彦淖尔市"
          },
          {
            "cityCode": "0996",
            "cityName": "巴音郭楞蒙古自治州"
          },
          {
            "cityCode": "0827",
            "cityName": "巴中市"
          },
          {
            "cityCode": "0436",
            "cityName": "白城市"
          },
          {
            "cityCode": "0802",
            "cityName": "白沙黎族自治县"
          },
          {
            "cityCode": "0439",
            "cityName": "白山市"
          },
          {
            "cityCode": "0943",
            "cityName": "白银市"
          },
          {
            "cityCode": "0776",
            "cityName": "百色市"
          },
          {
            "cityCode": "0552",
            "cityName": "蚌埠市"
          },
          {
            "cityCode": "0472",
            "cityName": "包头市"
          },
          {
            "cityCode": "0312",
            "cityName": "保定市"
          },
          {
            "cityCode": "0875",
            "cityName": "保山市"
          },
          {
            "cityCode": "0801",
            "cityName": "保亭黎族苗族自治县"
          },
          {
            "cityCode": "0917",
            "cityName": "宝鸡市"
          },
          {
            "cityCode": "0779",
            "cityName": "北海市"
          },
          {
            "cityCode": "010",
            "cityName": "北京市"
          },
          {
            "cityCode": "1906",
            "cityName": "北屯市"
          },
          {
            "cityCode": "0414",
            "cityName": "本溪市"
          },
          {
            "cityCode": "0857",
            "cityName": "毕节市"
          },
          {
            "cityCode": "0543",
            "cityName": "滨州市"
          },
          {
            "cityCode": "0909",
            "cityName": "博尔塔拉蒙古自治州"
          },
          {
            "cityCode": "0558",
            "cityName": "亳州市"
          }
        ],
        "idx": "B"
      },
      {
        "cities": [
          {
            "cityCode": "0317",
            "cityName": "沧州市"
          },
          {
            "cityCode": "0895",
            "cityName": "昌都市"
          },
          {
            "cityCode": "0994",
            "cityName": "昌吉回族自治州"
          },
          {
            "cityCode": "0803",
            "cityName": "昌江黎族自治县"
          },
          {
            "cityCode": "0736",
            "cityName": "常德市"
          },
          {
            "cityCode": "0519",
            "cityName": "常州市"
          },
          {
            "cityCode": "0431",
            "cityName": "长春市"
          },
          {
            "cityCode": "0731",
            "cityName": "长沙市"
          },
          {
            "cityCode": "0355",
            "cityName": "长治市"
          },
          {
            "cityCode": "0421",
            "cityName": "朝阳市"
          },
          {
            "cityCode": "0768",
            "cityName": "潮州市"
          },
          {
            "cityCode": "0735",
            "cityName": "郴州市"
          },
          {
            "cityCode": "028",
            "cityName": "成都市"
          },
          {
            "cityCode": "0804",
            "cityName": "澄迈县"
          },
          {
            "cityCode": "0314",
            "cityName": "承德市"
          },
          {
            "cityCode": "0566",
            "cityName": "池州市"
          },
          {
            "cityCode": "0476",
            "cityName": "赤峰市"
          },
          {
            "cityCode": "1771",
            "cityName": "崇左市"
          },
          {
            "cityCode": "0550",
            "cityName": "滁州市"
          },
          {
            "cityCode": "0878",
            "cityName": "楚雄彝族自治州"
          },
          {
            "cityCode": "023",
            "cityName": "重庆市"
          }
        ],
        "idx": "C"
      },
      {
        "cities": [
          {
            "cityCode": "0818",
            "cityName": "达州市"
          },
          {
            "cityCode": "0872",
            "cityName": "大理白族自治州"
          },
          {
            "cityCode": "0411",
            "cityName": "大连市"
          },
          {
            "cityCode": "0459",
            "cityName": "大庆市"
          },
          {
            "cityCode": "0352",
            "cityName": "大同市"
          },
          {
            "cityCode": "0457",
            "cityName": "大兴安岭地区"
          },
          {
            "cityCode": "0415",
            "cityName": "丹东市"
          },
          {
            "cityCode": "0692",
            "cityName": "德宏傣族景颇族自治州"
          },
          {
            "cityCode": "0838",
            "cityName": "德阳市"
          },
          {
            "cityCode": "0534",
            "cityName": "德州市"
          },
          {
            "cityCode": "0887",
            "cityName": "迪庆藏族自治州"
          },
          {
            "cityCode": "0806",
            "cityName": "定安县"
          },
          {
            "cityCode": "0932",
            "cityName": "定西市"
          },
          {
            "cityCode": "0807",
            "cityName": "东方市"
          },
          {
            "cityCode": "0546",
            "cityName": "东营市"
          },
          {
            "cityCode": "0769",
            "cityName": "东莞市"
          },
          {
            "cityCode": "0805",
            "cityName": "儋州市"
          }
        ],
        "idx": "D"
      },
      {
        "cities": [
          {
            "cityCode": "0477",
            "cityName": "鄂尔多斯市"
          },
          {
            "cityCode": "0711",
            "cityName": "鄂州市"
          },
          {
            "cityCode": "0718",
            "cityName": "恩施土家族苗族自治州"
          }
        ],
        "idx": "E"
      },
      {
        "cities": [
          {
            "cityCode": "0770",
            "cityName": "防城港市"
          },
          {
            "cityCode": "0757",
            "cityName": "佛山市"
          },
          {
            "cityCode": "0591",
            "cityName": "福州市"
          },
          {
            "cityCode": "0413",
            "cityName": "抚顺市"
          },
          {
            "cityCode": "0794",
            "cityName": "抚州市"
          },
          {
            "cityCode": "0418",
            "cityName": "阜新市"
          },
          {
            "cityCode": "1558",
            "cityName": "阜阳市"
          }
        ],
        "idx": "F"
      },
      {
        "cities": [
          {
            "cityCode": "0941",
            "cityName": "甘南藏族自治州"
          },
          {
            "cityCode": "0836",
            "cityName": "甘孜藏族自治州"
          },
          {
            "cityCode": "0797",
            "cityName": "赣州市"
          },
          {
            "cityCode": "0954",
            "cityName": "固原市"
          },
          {
            "cityCode": "0826",
            "cityName": "广安市"
          },
          {
            "cityCode": "0839",
            "cityName": "广元市"
          },
          {
            "cityCode": "020",
            "cityName": "广州市"
          },
          {
            "cityCode": "0773",
            "cityName": "桂林市"
          },
          {
            "cityCode": "1755",
            "cityName": "贵港市"
          },
          {
            "cityCode": "0851",
            "cityName": "贵阳市"
          },
          {
            "cityCode": "0975",
            "cityName": "果洛藏族自治州"
          }
        ],
        "idx": "G"
      },
      {
        "cities": [
          {
            "cityCode": "0451",
            "cityName": "哈尔滨市"
          },
          {
            "cityCode": "0902",
            "cityName": "哈密市"
          },
          {
            "cityCode": "0970",
            "cityName": "海北藏族自治州"
          },
          {
            "cityCode": "0972",
            "cityName": "海东市"
          },
          {
            "cityCode": "0898",
            "cityName": "海口市"
          },
          {
            "cityCode": "0974",
            "cityName": "海南藏族自治州"
          },
          {
            "cityCode": "0977",
            "cityName": "海西蒙古族藏族自治州"
          },
          {
            "cityCode": "0310",
            "cityName": "邯郸市"
          },
          {
            "cityCode": "0916",
            "cityName": "汉中市"
          },
          {
            "cityCode": "0571",
            "cityName": "杭州市"
          },
          {
            "cityCode": "0530",
            "cityName": "菏泽市"
          },
          {
            "cityCode": "0903",
            "cityName": "和田地区"
          },
          {
            "cityCode": "0551",
            "cityName": "合肥市"
          },
          {
            "cityCode": "0778",
            "cityName": "河池市"
          },
          {
            "cityCode": "0762",
            "cityName": "河源市"
          },
          {
            "cityCode": "0392",
            "cityName": "鹤壁市"
          },
          {
            "cityCode": "0468",
            "cityName": "鹤岗市"
          },
          {
            "cityCode": "1774",
            "cityName": "贺州市"
          },
          {
            "cityCode": "0456",
            "cityName": "黑河市"
          },
          {
            "cityCode": "0318",
            "cityName": "衡水市"
          },
          {
            "cityCode": "0734",
            "cityName": "衡阳市"
          },
          {
            "cityCode": "0873",
            "cityName": "红河哈尼族彝族自治州"
          },
          {
            "cityCode": "0471",
            "cityName": "呼和浩特市"
          },
          {
            "cityCode": "0470",
            "cityName": "呼伦贝尔市"
          },
          {
            "cityCode": "0429",
            "cityName": "葫芦岛市"
          },
          {
            "cityCode": "0992",
            "cityName": "胡杨河市"
          },
          {
            "cityCode": "0572",
            "cityName": "湖州市"
          },
          {
            "cityCode": "0745",
            "cityName": "怀化市"
          },
          {
            "cityCode": "0517",
            "cityName": "淮安市"
          },
          {
            "cityCode": "0561",
            "cityName": "淮北市"
          },
          {
            "cityCode": "0554",
            "cityName": "淮南市"
          },
          {
            "cityCode": "0713",
            "cityName": "黄冈市"
          },
          {
            "cityCode": "0973",
            "cityName": "黄南藏族自治州"
          },
          {
            "cityCode": "0559",
            "cityName": "黄山市"
          },
          {
            "cityCode": "0714",
            "cityName": "黄石市"
          },
          {
            "cityCode": "0752",
            "cityName": "惠州市"
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
            "cityName": "鸡西市"
          },
          {
            "cityCode": "0796",
            "cityName": "吉安市"
          },
          {
            "cityCode": "0432",
            "cityName": "吉林市"
          },
          {
            "cityCode": "0531",
            "cityName": "济南市"
          },
          {
            "cityCode": "0537",
            "cityName": "济宁市"
          },
          {
            "cityCode": "1391",
            "cityName": "济源市"
          },
          {
            "cityCode": "0573",
            "cityName": "嘉兴市"
          },
          {
            "cityCode": "1937",
            "cityName": "嘉峪关市"
          },
          {
            "cityCode": "0454",
            "cityName": "佳木斯市"
          },
          {
            "cityCode": "0750",
            "cityName": "江门市"
          },
          {
            "cityCode": "0391",
            "cityName": "焦作市"
          },
          {
            "cityCode": "0663",
            "cityName": "揭阳市"
          },
          {
            "cityCode": "0935",
            "cityName": "金昌市"
          },
          {
            "cityCode": "0579",
            "cityName": "金华市"
          },
          {
            "cityCode": "0416",
            "cityName": "锦州市"
          },
          {
            "cityCode": "0356",
            "cityName": "晋城市"
          },
          {
            "cityCode": "0354",
            "cityName": "晋中市"
          },
          {
            "cityCode": "0724",
            "cityName": "荆门市"
          },
          {
            "cityCode": "0716",
            "cityName": "荆州市"
          },
          {
            "cityCode": "0798",
            "cityName": "景德镇市"
          },
          {
            "cityCode": "0792",
            "cityName": "九江市"
          },
          {
            "cityCode": "0937",
            "cityName": "酒泉市"
          }
        ],
        "idx": "J"
      },
      {
        "cities": [
          {
            "cityCode": "0998",
            "cityName": "喀什地区"
          },
          {
            "cityCode": "0378",
            "cityName": "开封市"
          },
          {
            "cityCode": "1999",
            "cityName": "可克达拉市"
          },
          {
            "cityCode": "0990",
            "cityName": "克拉玛依市"
          },
          {
            "cityCode": "0908",
            "cityName": "克孜勒苏柯尔克孜自治州"
          },
          {
            "cityCode": "0871",
            "cityName": "昆明市"
          },
          {
            "cityCode": "1903",
            "cityName": "昆玉市"
          }
        ],
        "idx": "K"
      },
      {
        "cities": [
          {
            "cityCode": "0891",
            "cityName": "拉萨市"
          },
          {
            "cityCode": "1772",
            "cityName": "来宾市"
          },
          {
            "cityCode": "0931",
            "cityName": "兰州市"
          },
          {
            "cityCode": "0316",
            "cityName": "廊坊市"
          },
          {
            "cityCode": "2802",
            "cityName": "乐东黎族自治县"
          },
          {
            "cityCode": "0833",
            "cityName": "乐山市"
          },
          {
            "cityCode": "0888",
            "cityName": "丽江市"
          },
          {
            "cityCode": "0578",
            "cityName": "丽水市"
          },
          {
            "cityCode": "0518",
            "cityName": "连云港市"
          },
          {
            "cityCode": "0834",
            "cityName": "凉山彝族自治州"
          },
          {
            "cityCode": "0635",
            "cityName": "聊城市"
          },
          {
            "cityCode": "0419",
            "cityName": "辽阳市"
          },
          {
            "cityCode": "0437",
            "cityName": "辽源市"
          },
          {
            "cityCode": "0894",
            "cityName": "林芝市"
          },
          {
            "cityCode": "0883",
            "cityName": "临沧市"
          },
          {
            "cityCode": "0357",
            "cityName": "临汾市"
          },
          {
            "cityCode": "1896",
            "cityName": "临高县"
          },
          {
            "cityCode": "0930",
            "cityName": "临夏回族自治州"
          },
          {
            "cityCode": "0539",
            "cityName": "临沂市"
          },
          {
            "cityCode": "0809",
            "cityName": "陵水黎族自治县"
          },
          {
            "cityCode": "0772",
            "cityName": "柳州市"
          },
          {
            "cityCode": "0564",
            "cityName": "六安市"
          },
          {
            "cityCode": "0858",
            "cityName": "六盘水市"
          },
          {
            "cityCode": "0597",
            "cityName": "龙岩市"
          },
          {
            "cityCode": "2935",
            "cityName": "陇南市"
          },
          {
            "cityCode": "0738",
            "cityName": "娄底市"
          },
          {
            "cityCode": "0358",
            "cityName": "吕梁市"
          },
          {
            "cityCode": "0379",
            "cityName": "洛阳市"
          },
          {
            "cityCode": "0830",
            "cityName": "泸州市"
          },
          {
            "cityCode": "0395",
            "cityName": "漯河市"
          }
        ],
        "idx": "L"
      },
      {
        "cities": [
          {
            "cityCode": "0555",
            "cityName": "马鞍山市"
          },
          {
            "cityCode": "0668",
            "cityName": "茂名市"
          },
          {
            "cityCode": "0753",
            "cityName": "梅州市"
          },
          {
            "cityCode": "1833",
            "cityName": "眉山市"
          },
          {
            "cityCode": "0816",
            "cityName": "绵阳市"
          },
          {
            "cityCode": "0453",
            "cityName": "牡丹江市"
          }
        ],
        "idx": "M"
      },
      {
        "cities": [
          {
            "cityCode": "0896",
            "cityName": "那曲市"
          },
          {
            "cityCode": "0791",
            "cityName": "南昌市"
          },
          {
            "cityCode": "0817",
            "cityName": "南充市"
          },
          {
            "cityCode": "025",
            "cityName": "南京市"
          },
          {
            "cityCode": "0771",
            "cityName": "南宁市"
          },
          {
            "cityCode": "0599",
            "cityName": "南平市"
          },
          {
            "cityCode": "0513",
            "cityName": "南通市"
          },
          {
            "cityCode": "0377",
            "cityName": "南阳市"
          },
          {
            "cityCode": "1832",
            "cityName": "内江市"
          },
          {
            "cityCode": "0574",
            "cityName": "宁波市"
          },
          {
            "cityCode": "0593",
            "cityName": "宁德市"
          },
          {
            "cityCode": "0886",
            "cityName": "怒江傈僳族自治州"
          }
        ],
        "idx": "N"
      },
      {
        "cities": [
          {
            "cityCode": "0812",
            "cityName": "攀枝花市"
          },
          {
            "cityCode": "0427",
            "cityName": "盘锦市"
          },
          {
            "cityCode": "0799",
            "cityName": "萍乡市"
          },
          {
            "cityCode": "0375",
            "cityName": "平顶山市"
          },
          {
            "cityCode": "0933",
            "cityName": "平凉市"
          },
          {
            "cityCode": "0594",
            "cityName": "莆田市"
          },
          {
            "cityCode": "0879",
            "cityName": "普洱市"
          },
          {
            "cityCode": "0393",
            "cityName": "濮阳市"
          }
        ],
        "idx": "P"
      },
      {
        "cities": [
          {
            "cityCode": "0464",
            "cityName": "七台河市"
          },
          {
            "cityCode": "0452",
            "cityName": "齐齐哈尔市"
          },
          {
            "cityCode": "0855",
            "cityName": "黔东南苗族侗族自治州"
          },
          {
            "cityCode": "0854",
            "cityName": "黔南布依族苗族自治州"
          },
          {
            "cityCode": "0859",
            "cityName": "黔西南布依族苗族自治州"
          },
          {
            "cityCode": "2728",
            "cityName": "潜江市"
          },
          {
            "cityCode": "0777",
            "cityName": "钦州市"
          },
          {
            "cityCode": "0335",
            "cityName": "秦皇岛市"
          },
          {
            "cityCode": "0532",
            "cityName": "青岛市"
          },
          {
            "cityCode": "0763",
            "cityName": "清远市"
          },
          {
            "cityCode": "0934",
            "cityName": "庆阳市"
          },
          {
            "cityCode": "1894",
            "cityName": "琼海市"
          },
          {
            "cityCode": "1899",
            "cityName": "琼中黎族苗族自治县"
          },
          {
            "cityCode": "0874",
            "cityName": "曲靖市"
          },
          {
            "cityCode": "0595",
            "cityName": "泉州市"
          },
          {
            "cityCode": "0570",
            "cityName": "衢州市"
          }
        ],
        "idx": "Q"
      },
      {
        "cities": [
          {
            "cityCode": "0892",
            "cityName": "日喀则市"
          },
          {
            "cityCode": "0633",
            "cityName": "日照市"
          }
        ],
        "idx": "R"
      },
      {
        "cities": [
          {
            "cityCode": "0398",
            "cityName": "三门峡市"
          },
          {
            "cityCode": "0598",
            "cityName": "三明市"
          },
          {
            "cityCode": "2898",
            "cityName": "三沙市"
          },
          {
            "cityCode": "0899",
            "cityName": "三亚市"
          },
          {
            "cityCode": "0893",
            "cityName": "山南市"
          },
          {
            "cityCode": "0754",
            "cityName": "汕头市"
          },
          {
            "cityCode": "0660",
            "cityName": "汕尾市"
          },
          {
            "cityCode": "0914",
            "cityName": "商洛市"
          },
          {
            "cityCode": "0370",
            "cityName": "商丘市"
          },
          {
            "cityCode": "021",
            "cityName": "上海市"
          },
          {
            "cityCode": "0793",
            "cityName": "上饶市"
          },
          {
            "cityCode": "0751",
            "cityName": "韶关市"
          },
          {
            "cityCode": "0739",
            "cityName": "邵阳市"
          },
          {
            "cityCode": "0575",
            "cityName": "绍兴市"
          },
          {
            "cityCode": "0755",
            "cityName": "深圳市"
          },
          {
            "cityCode": "1719",
            "cityName": "神农架林区"
          },
          {
            "cityCode": "024",
            "cityName": "沈阳市"
          },
          {
            "cityCode": "0719",
            "cityName": "十堰市"
          },
          {
            "cityCode": "0993",
            "cityName": "石河子市"
          },
          {
            "cityCode": "0311",
            "cityName": "石家庄市"
          },
          {
            "cityCode": "0952",
            "cityName": "石嘴山市"
          },
          {
            "cityCode": "1909",
            "cityName": "双河市"
          },
          {
            "cityCode": "0469",
            "cityName": "双鸭山市"
          },
          {
            "cityCode": "0349",
            "cityName": "朔州市"
          },
          {
            "cityCode": "0434",
            "cityName": "四平市"
          },
          {
            "cityCode": "0438",
            "cityName": "松原市"
          },
          {
            "cityCode": "0512",
            "cityName": "苏州市"
          },
          {
            "cityCode": "0527",
            "cityName": "宿迁市"
          },
          {
            "cityCode": "0557",
            "cityName": "宿州市"
          },
          {
            "cityCode": "0722",
            "cityName": "随州市"
          },
          {
            "cityCode": "0455",
            "cityName": "绥化市"
          },
          {
            "cityCode": "0825",
            "cityName": "遂宁市"
          }
        ],
        "idx": "S"
      },
      {
        "cities": [
          {
            "cityCode": "0901",
            "cityName": "塔城地区"
          },
          {
            "cityCode": "1886",
            "cityName": "台湾省"
          },
          {
            "cityCode": "0576",
            "cityName": "台州市"
          },
          {
            "cityCode": "0538",
            "cityName": "泰安市"
          },
          {
            "cityCode": "0523",
            "cityName": "泰州市"
          },
          {
            "cityCode": "0351",
            "cityName": "太原市"
          },
          {
            "cityCode": "0315",
            "cityName": "唐山市"
          },
          {
            "cityCode": "022",
            "cityName": "天津市"
          },
          {
            "cityCode": "1728",
            "cityName": "天门市"
          },
          {
            "cityCode": "0938",
            "cityName": "天水市"
          },
          {
            "cityCode": "0410",
            "cityName": "铁岭市"
          },
          {
            "cityCode": "1996",
            "cityName": "铁门关市"
          },
          {
            "cityCode": "0435",
            "cityName": "通化市"
          },
          {
            "cityCode": "0475",
            "cityName": "通辽市"
          },
          {
            "cityCode": "0919",
            "cityName": "铜川市"
          },
          {
            "cityCode": "0562",
            "cityName": "铜陵市"
          },
          {
            "cityCode": "0856",
            "cityName": "铜仁市"
          },
          {
            "cityCode": "1998",
            "cityName": "图木舒克市"
          },
          {
            "cityCode": "0995",
            "cityName": "吐鲁番市"
          },
          {
            "cityCode": "1892",
            "cityName": "屯昌县"
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
            "cityName": "外国"
          },
          {
            "cityCode": "1898",
            "cityName": "万宁市"
          },
          {
            "cityCode": "0631",
            "cityName": "威海市"
          },
          {
            "cityCode": "0536",
            "cityName": "潍坊市"
          },
          {
            "cityCode": "0913",
            "cityName": "渭南市"
          },
          {
            "cityCode": "0577",
            "cityName": "温州市"
          },
          {
            "cityCode": "1893",
            "cityName": "文昌市"
          },
          {
            "cityCode": "0876",
            "cityName": "文山壮族苗族自治州"
          },
          {
            "cityCode": "0473",
            "cityName": "乌海市"
          },
          {
            "cityCode": "0474",
            "cityName": "乌兰察布市"
          },
          {
            "cityCode": "0991",
            "cityName": "乌鲁木齐市"
          },
          {
            "cityCode": "0510",
            "cityName": "无锡市"
          },
          {
            "cityCode": "0553",
            "cityName": "芜湖市"
          },
          {
            "cityCode": "0774",
            "cityName": "梧州市"
          },
          {
            "cityCode": "0953",
            "cityName": "吴忠市"
          },
          {
            "cityCode": "027",
            "cityName": "武汉市"
          },
          {
            "cityCode": "1935",
            "cityName": "武威市"
          },
          {
            "cityCode": "1994",
            "cityName": "五家渠市"
          },
          {
            "cityCode": "1897",
            "cityName": "五指山市"
          }
        ],
        "idx": "W"
      },
      {
        "cities": [
          {
            "cityCode": "029",
            "cityName": "西安市"
          },
          {
            "cityCode": "0971",
            "cityName": "西宁市"
          },
          {
            "cityCode": "0691",
            "cityName": "西双版纳傣族自治州"
          },
          {
            "cityCode": "0479",
            "cityName": "锡林郭勒盟"
          },
          {
            "cityCode": "0592",
            "cityName": "厦门市"
          },
          {
            "cityCode": "0728",
            "cityName": "仙桃市"
          },
          {
            "cityCode": "0715",
            "cityName": "咸宁市"
          },
          {
            "cityCode": "0910",
            "cityName": "咸阳市"
          },
          {
            "cityCode": "1852",
            "cityName": "香港特别行政区"
          },
          {
            "cityCode": "0710",
            "cityName": "襄阳市"
          },
          {
            "cityCode": "0732",
            "cityName": "湘潭市"
          },
          {
            "cityCode": "0743",
            "cityName": "湘西土家族苗族自治州"
          },
          {
            "cityCode": "0712",
            "cityName": "孝感市"
          },
          {
            "cityCode": "0373",
            "cityName": "新乡市"
          },
          {
            "cityCode": "0790",
            "cityName": "新余市"
          },
          {
            "cityCode": "0350",
            "cityName": "忻州市"
          },
          {
            "cityCode": "0376",
            "cityName": "信阳市"
          },
          {
            "cityCode": "0482",
            "cityName": "兴安盟"
          },
          {
            "cityCode": "0319",
            "cityName": "邢台市"
          },
          {
            "cityCode": "0516",
            "cityName": "徐州市"
          },
          {
            "cityCode": "0374",
            "cityName": "许昌市"
          },
          {
            "cityCode": "0563",
            "cityName": "宣城市"
          }
        ],
        "idx": "X"
      },
      {
        "cities": [
          {
            "cityCode": "0835",
            "cityName": "雅安市"
          },
          {
            "cityCode": "0535",
            "cityName": "烟台市"
          },
          {
            "cityCode": "0515",
            "cityName": "盐城市"
          },
          {
            "cityCode": "0911",
            "cityName": "延安市"
          },
          {
            "cityCode": "1433",
            "cityName": "延边朝鲜族自治州"
          },
          {
            "cityCode": "0514",
            "cityName": "扬州市"
          },
          {
            "cityCode": "0662",
            "cityName": "阳江市"
          },
          {
            "cityCode": "0353",
            "cityName": "阳泉市"
          },
          {
            "cityCode": "0458",
            "cityName": "伊春市"
          },
          {
            "cityCode": "0999",
            "cityName": "伊犁哈萨克自治州"
          },
          {
            "cityCode": "0831",
            "cityName": "宜宾市"
          },
          {
            "cityCode": "0717",
            "cityName": "宜昌市"
          },
          {
            "cityCode": "0795",
            "cityName": "宜春市"
          },
          {
            "cityCode": "0737",
            "cityName": "益阳市"
          },
          {
            "cityCode": "0951",
            "cityName": "银川市"
          },
          {
            "cityCode": "0701",
            "cityName": "鹰潭市"
          },
          {
            "cityCode": "0417",
            "cityName": "营口市"
          },
          {
            "cityCode": "0746",
            "cityName": "永州市"
          },
          {
            "cityCode": "0912",
            "cityName": "榆林市"
          },
          {
            "cityCode": "0775",
            "cityName": "玉林市"
          },
          {
            "cityCode": "0976",
            "cityName": "玉树藏族自治州"
          },
          {
            "cityCode": "0877",
            "cityName": "玉溪市"
          },
          {
            "cityCode": "0730",
            "cityName": "岳阳市"
          },
          {
            "cityCode": "0766",
            "cityName": "云浮市"
          },
          {
            "cityCode": "0359",
            "cityName": "运城市"
          }
        ],
        "idx": "Y"
      },
      {
        "cities": [
          {
            "cityCode": "0632",
            "cityName": "枣庄市"
          },
          {
            "cityCode": "0759",
            "cityName": "湛江市"
          },
          {
            "cityCode": "0596",
            "cityName": "漳州市"
          },
          {
            "cityCode": "0744",
            "cityName": "张家界市"
          },
          {
            "cityCode": "0313",
            "cityName": "张家口市"
          },
          {
            "cityCode": "0936",
            "cityName": "张掖市"
          },
          {
            "cityCode": "0870",
            "cityName": "昭通市"
          },
          {
            "cityCode": "0758",
            "cityName": "肇庆市"
          },
          {
            "cityCode": "0511",
            "cityName": "镇江市"
          },
          {
            "cityCode": "0371",
            "cityName": "郑州市"
          },
          {
            "cityCode": "0760",
            "cityName": "中山市"
          },
          {
            "cityCode": "1953",
            "cityName": "中卫市"
          },
          {
            "cityCode": "0580",
            "cityName": "舟山市"
          },
          {
            "cityCode": "0394",
            "cityName": "周口市"
          },
          {
            "cityCode": "0756",
            "cityName": "珠海市"
          },
          {
            "cityCode": "0733",
            "cityName": "株洲市"
          },
          {
            "cityCode": "0396",
            "cityName": "驻马店市"
          },
          {
            "cityCode": "0832",
            "cityName": "资阳市"
          },
          {
            "cityCode": "0533",
            "cityName": "淄博市"
          },
          {
            "cityCode": "0813",
            "cityName": "自贡市"
          },
          {
            "cityCode": "0852",
            "cityName": "遵义市"
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
      const store2 = useStore();
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
      const list = vue.ref([]);
      const activeId = vue.ref(1);
      const disPosition = vue.ref(true);
      const currentCity = vue.ref();
      vue.ref();
      const po_tips = vue.ref("重新定位");
      const hotCity = vue.ref([
        { name: "北京市", cityCode: "010" },
        { name: "上海市", cityCode: "021" },
        { name: "广州市", cityCode: "020" },
        { name: "深圳市", cityCode: "0755" }
      ]);
      const instance = vue.getCurrentInstance();
      const setList = () => {
        uni.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
          winOffsetY.value = ret[0].top;
          winHeight.value = ret[0].height;
          itemHeight.value = winHeight.value / list.value.length;
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
        if (list.value[index]) {
          scrollIntoId.value = list.value[index].idx;
        }
      };
      const touchMove = (e2) => {
        let pageY = e2.touches[0].pageY;
        let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
        if (list.value[index] && list.value[index].idx === scrollIntoId.value) {
          return false;
        }
        if (list.value[index]) {
          scrollIntoId.value = list.value[index].idx;
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
        list.value = Citys.list;
        setList();
        getOpenCity().then((res) => {
          list.value = res.data;
          formatAppLog("log", "at pages/city/index.vue:190", res, "getOpenCity");
        });
      });
      const getWarpWeft = () => {
        po_tips.value = "定位中...";
        uni.getLocation({
          type: "gcj02",
          geocode: true,
          success: function(res) {
            currentCity.value = {
              name: res.address.city
            };
            activeId.value = res.address.cityCode;
            setTimeout(() => {
              po_tips.value = "重新定位";
            }, 500);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/city/index.vue:214", res);
            setTimeout(() => {
              po_tips.value = "定位失败";
            }, 500);
            disPosition.value = true;
          }
        });
      };
      const selectCity = (city) => {
        formatAppLog("log", "at pages/city/index.vue:237", city, "city");
        currentCity.value = city;
        store2.commit("user/setCityCode", city.cityCode);
        store2.commit("user/setCityName", city.name);
        uni.navigateBack();
      };
      vue.watch(list, () => {
        setTimeout(() => {
          setList();
        }, 100);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "city" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "选择服务城市",
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
              vue.createElementVNode("view", { class: "grey" }, " 当前定位城市 "),
              vue.createCommentVNode(" 定位模块 "),
              vue.createElementVNode("view", { class: "position top" }, [
                vue.createElementVNode("view", { class: "position_city" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "position_city_one" },
                    vue.toDisplayString(currentCity.value ? currentCity.value.name : "定位失败"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", {
                    class: "WarpWeft",
                    onClick: getWarpWeft
                  }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: "/static/new/positions.png"
                    }),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(po_tips.value),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "hot grey" }, " 热门城市 "),
              vue.createCommentVNode(" 最近模块 "),
              vue.createCommentVNode(" 热门 "),
              hotCity.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "position"
              }, [
                vue.createElementVNode("view", { class: "position_city position_city_hot" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(hotCity.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(
                          activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"
                        ),
                        key: index,
                        onClick: ($event) => activeCity(item)
                      }, vue.toDisplayString(item.name), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "grey" }, " 小智帮已开通的城市 ")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 城市列表 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item, index) => {
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
                      vue.createElementVNode(
                        "text",
                        { class: "city" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ])
                ], 8, ["id"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode("view", { class: "placeholder footer" })
          ], 44, ["scroll-into-view"]),
          vue.createCommentVNode(" 右侧字母 "),
          vue.withDirectives(vue.createElementVNode("view", {
            class: "letters",
            id: "list",
            onTouchstart: touchStart,
            onTouchmove: vue.withModifiers(touchMove, ["stop", "prevent"]),
            onTouchend: touchEnd
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(letter.value, (item) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: "fmin",
                    key: item.idx
                  },
                  vue.toDisplayString(item.idx),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 40, ["onTouchmove"]), [
            [vue.vShow, false]
          ]),
          vue.createCommentVNode(" 选中之后字母 "),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "mask" },
            [
              vue.createElementVNode(
                "view",
                { class: "mask-r bold" },
                vue.toDisplayString(scrollIntoId.value),
                1
                /* TEXT */
              )
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, false]
          ])
        ]);
      };
    }
  };
  const PagesCityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-5a18b3c9"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/city/index.vue"]]);
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
            title: err.msg || "接口调用失败",
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
            title: err.msg || "接口调用失败",
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
          vue.createCommentVNode(" 手机状态栏 "),
          vue.createVNode(_component_uni_nav_bar, { statusBar: "true" }),
          vue.createCommentVNode(" 引导词 "),
          vue.createElementVNode("view", { class: "guide" }, [
            vue.createElementVNode("image", { src: "/static/new/img_tishi@2x.png" }),
            vue.createCommentVNode(' <view class="content">亲，完成以下4步设置，方可接单哦～</view> ')
          ]),
          vue.createCommentVNode(" 具体步骤 "),
          vue.createElementVNode("view", { class: "step" }, [
            vue.createElementVNode("view", { class: "stepOne stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepOne.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "实名认证"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "平台会保护你的个人信息")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["btn", auth.value ? "btn-successGreen" : "btn-red"])
                  },
                  vue.toDisplayString(auth.value ? "已完成" : "去认证"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepTwo stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepTwo.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "服务技能设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "设置完成后，方可为您推荐订单")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["btn", serveSkillStatus.value ? "btn-successGreen" : "btn-red"]),
                    onClick: toServiceSikll
                  },
                  vue.toDisplayString(serveSkillStatus.value ? "已完成" : "去设置"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepThree stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepThree.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "服务范围设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "设置完成后，方可为您推荐订单")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["btn", serveRangeStatus.value ? "btn-successGreen" : "btn-red"]),
                    onClick: toServiceRange
                  },
                  vue.toDisplayString(serveRangeStatus.value ? "已完成" : "去设置"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepFour stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepFour.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "接单设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "开启接单后，方可进行接单哦")
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
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode(
            "view",
            {
              onClick: toIndex,
              class: vue.normalizeClass(["btn-red footerBtn", settingsStatus.value ? "" : "notSetting"])
            },
            "进入首页",
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const PagesSettingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/setting/index.vue"]]);
  const orderStatus = [
    {
      value: 1,
      label: "待上门"
    },
    {
      value: 2,
      label: "待完工"
    },
    {
      value: 3,
      label: "已完成"
    },
    {
      value: 4,
      label: "已取消"
    },
    {
      value: 5,
      label: "被退单"
    }
  ];
  const DeliveryData = [
    {
      value: 1,
      label: "待上门"
    },
    {
      value: 2,
      label: "待完工"
    },
    {
      value: 3,
      label: "已完成"
    },
    {
      value: "",
      label: "全部"
    }
  ];
  const cancelData = [
    {
      value: 1,
      label: "服务地址有误"
    },
    {
      value: 2,
      label: "看错地址，无法服务"
    },
    {
      value: 3,
      label: "价格太低，不想服务了"
    },
    {
      value: 4,
      label: "临时有事，无法服务"
    },
    {
      value: 5,
      label: "产品维修复杂，无法服务"
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
      vue.ref(true);
      let list = vue.reactive({
        data: [
          {
            serveTypeName: "保洁服务",
            serveItemName: "空调清洗",
            serveStartTime: "2023-7-28 11:48:00",
            serveAddress: "金燕龙",
            serveFee: "666"
          }
        ]
      });
      const handleTime = (val) => {
        return val ? val.replace(/:\d{2}$/, "") : "";
      };
      const handleToInfo = (item) => {
        formatAppLog("log", "at pages/pickup/components/homeList.vue:106", item, "进入详情");
        uni.navigateTo({
          url: "/pages/orderInfo/index?id=" + item.id
        });
      };
      const handleCancel = (id) => {
        formatAppLog("log", "at pages/pickup/components/homeList.vue:112", "fff");
        uni.navigateTo({
          url: "/pages/cancel/index?id=" + id + "&type=list"
        });
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?status=" + status + "&id=" + id + "&type=list"
        });
      };
      vue.watchEffect(() => {
        list.data = props.data;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item) => {
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
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createCommentVNode(" {{ item.serveItemName }} "),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(item.id),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "serviceTime" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.serveStatus === 1 ? "预约时间" : item.serveStatus === 2 ? "服务开始时间" : "服务完成时间"),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "content" },
                        vue.toDisplayString(handleTime(
                          item.serveStatus === 1 ? item.serveStartTime : item.serveStatus === 2 ? item.realServeStartTime : item.realServeEndTime
                        )),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["orderStatus", [3, 4, 5].includes(item.serveStatus) ? "gray" : ""])
                    },
                    vue.toDisplayString(vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus).length && vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus)[0].label),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "serviceAddress" }, [
                  vue.createElementVNode("view", { class: "address" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "addressContent" },
                      vue.toDisplayString(item.serveAddress),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "cardFooter"
                }, [
                  [1].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "robBtn btn-gray",
                    onClick: vue.withModifiers(($event) => handleCancel(item.id), ["stop"])
                  }, "取消订单", 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "robBtn btn-red",
                    onClick: vue.withModifiers(($event) => handleServeRecord(item.id, item.serveStatus), ["stop"])
                  }, vue.toDisplayString(item.serveStatus === 1 ? "开始服务" : "完成服务"), 9, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true)
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createCommentVNode(" 加载底部 "),
          vue.createCommentVNode(' <uni-load-more :status="status" v-if="!isShowMore && isLogin && allOrderList.data.length" /> '),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -")
        ]);
      };
    }
  };
  const HomeList = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c2937e80"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/pickup/components/homeList.vue"]]);
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
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x2,
            top: y2
          },
          rightBottom: {
            right: x2,
            bottom: y2
          },
          leftBottom: {
            left: x2,
            bottom: y2
          },
          leftTop: {
            left: x2,
            top: y2
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
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$4], ["__scopeId", "data-v-c97cb896"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
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
        statusNum.data = props.statusNum;
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
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.tabBars, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                id: "tab" + index,
                class: "scroll-row-item",
                onClick: ($event) => changeTab(index)
              }, [
                statusNum.data[index] != "0" ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 0,
                  class: "uni-badge-left-margin",
                  text: statusNum.data[index],
                  absolute: "rightTop",
                  offset: [-8, 3],
                  size: "small"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(vue.unref(tabIndex) == index ? "scroll-row-item-act" : "")
                      },
                      [
                        vue.createElementVNode("text", { class: "line" }),
                        vue.createTextVNode(
                          " " + vue.toDisplayString(item.label),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["text"])) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(tabIndex) == index ? "scroll-row-item-act" : "")
                  },
                  [
                    vue.createElementVNode("text", { class: "line" }),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                ))
              ], 8, ["id", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, ["scroll-into-view"]);
      };
    }
  };
  const UniTab = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-tab/index.vue"]]);
  const _sfc_main$f = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      const statusNum = vue.reactive({
        data: []
      });
      const isHaveMore = vue.ref(false);
      const tabBars = DeliveryData;
      const icCanScroll = vue.ref(true);
      const homeList = vue.reactive({
        data: []
      });
      onShow(() => {
        getTabIndex(users.tabIndex);
        getOrderStatusNumFunc();
      });
      const handleLoad = () => {
        formatAppLog("log", "at pages/pickup/index.vue:80", users.tabIndex, "上拉加载");
        if (isHaveMore.value) {
          getListData(
            tabBars[users.tabIndex].value,
            homeList.data[homeList.data.length - 1].id
          );
        }
      };
      const getOrderStatusNumFunc = () => {
        getOrderStatusNum().then((res) => {
          statusNum.data = [res.data.noServed, res.data.serving];
          formatAppLog("log", "at pages/pickup/index.vue:94", res, "获取各个状态下的订单数量");
        });
      };
      const getListData = (val, id) => {
        getOrder(val, id).then((res) => {
          if (res.data.ordersServes.length === 10) {
            isHaveMore.value = true;
          } else {
            isHaveMore.value = false;
          }
          homeList.data = homeList.data.concat(res.data.ordersServes);
          formatAppLog("log", "at pages/pickup/index.vue:106", res, "66666666666");
        });
      };
      const getRobOrderList = () => {
      };
      const getTabIndex = (index) => {
        formatAppLog("log", "at pages/pickup/index.vue:113", index, "indexxxxxx");
        store2.commit("user/setTabIndex", index);
        homeList.data = [];
        getListData(tabBars[index].value, "");
        formatAppLog("log", "at pages/pickup/index.vue:117", tabBars[index].value, "index");
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "order" }, [
              vue.createCommentVNode(" 手机状态栏 "),
              vue.createVNode(_component_uni_nav_bar, {
                statusBar: "false",
                backgroundColor: "white",
                height: "0"
              }),
              vue.createCommentVNode(" nav "),
              vue.createCommentVNode(" 状态筛选 "),
              vue.createVNode(UniTab, {
                tabBars: vue.unref(tabBars),
                onGetTabIndex: getTabIndex,
                statusNum: statusNum.data
              }, null, 8, ["tabBars", "statusNum"]),
              vue.createCommentVNode(" 订单列表 "),
              vue.createElementVNode("scroll-view", {
                "scroll-y": icCanScroll.value,
                class: "scrollList",
                onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args)),
                onScrolltolower: handleLoad,
                "upper-threshold": 50
              }, [
                homeList.data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList), {
                  key: 0,
                  data: homeList.data,
                  onRefresh: getRobOrderList
                }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 }))
              ], 40, ["scroll-y"]),
              vue.createVNode(UniFooter, { pagePath: "pages/pickup/index" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesPickupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-003520e8"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/pickup/index.vue"]]);
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
            serveAddress: "北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室",
            contactsName: "柯胜伦",
            contactsPhone: "17788884444"
          },
          ordersInfo: {
            serveCode: "7364734677776",
            serveStartTime: "2026.5.26 12:30"
          },
          refundInfo: {
            refundReason: "未上门服务",
            refundTime: "2026.5.26 12:30",
            refundAmount: "198"
          },
          cancelInfo: {
            cancelReason: "未上门服务",
            cancelTime: "2026.5.26 12:30"
          },
          serveInfo: {
            serveTypeName: "保洁清洗",
            serveItemName: "日常保洁",
            serveNum: "1",
            serveFee: "198",
            serveBeforeIllustrate: "服务开始说明",
            realServeStartTime: "2022-12-03  12:00",
            serveBeforeImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ],
            //服务开始前照片列表
            serveAfterIllustrate: "服务结束说明",
            realServeEndTime: "2022-12-03  12:00",
            serveAfterImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ]
            //服务结束照片列表
          }
        }
      });
      let tabIndex = vue.ref(users.tabIndex ? users.tabIndex : 0);
      onLoad((options) => {
        formatAppLog("log", "at pages/orderInfo/index.vue:261", options, "options");
        type.value = options.type;
        getOrderInfoFunc(options.id);
      });
      const previewImage = (url, imgList) => {
        uni.previewImage({
          current: url,
          // 当前显示的图片链接
          urls: imgList
          // 需要预览的图片链接列表，一般是一个数组
        });
      };
      const getOrderInfoFunc = (id) => {
        type.value === "dispatch" ? getDispatchOrderInfo(id).then((res) => {
          info.data = res.data;
          formatAppLog("log", "at pages/orderInfo/index.vue:277", res.data, "获取派单订单详情");
        }) : getOrderInfo(id).then((res) => {
          info.data = res.data;
          formatAppLog("log", "at pages/orderInfo/index.vue:281", res.data, "获取订单详情");
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
            title: "订单详情",
            onGoBack: goBack
          }),
          vue.createCommentVNode(" 订单状态 "),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([
                "serveStatus",
                [1, 2, 3].includes(vue.unref(info).data.serveStatus) || !vue.unref(info).data.serveStatus ? "successStatus" : "failStatus"
              ])
            },
            [
              vue.createElementVNode(
                "view",
                { class: "status" },
                vue.toDisplayString(vue.unref(info).data.serveStatus ? vue.unref(orderStatus).filter(
                  (item) => item.value === vue.unref(info).data.serveStatus
                )[0].label : "派单中"),
                1
                /* TEXT */
              ),
              vue.unref(info).data.serveStatus === 1 || !vue.unref(info).data.serveStatus ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "serveTime"
                },
                " 请在" + vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime ? vue.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : "") + "前上门服务 ",
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          ),
          vue.createCommentVNode(" 客户信息 "),
          vue.createElementVNode("view", { class: "customerInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "客户信息"),
            vue.createElementVNode("view", { class: "nameAndPhone" }, [
              vue.createElementVNode(
                "text",
                { class: "name" },
                vue.toDisplayString(vue.unref(info).data.customerInfo.contactsName),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "phone" },
                vue.toDisplayString(vue.unref(info).data.customerInfo.contactsPhone),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "address" }, [
              vue.createElementVNode("view", { class: "location" }),
              vue.createElementVNode(
                "view",
                { class: "addressInfo" },
                vue.toDisplayString(vue.unref(info).data.customerInfo.serveAddress),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 服务信息 "),
          vue.createElementVNode("view", { class: "serveInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "服务信息"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("image", {
                class: "serveImg",
                src: vue.unref(info).data.serveInfo.serveItemImg || "../../static/new/empty.png"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "serveTypeBox" }, [
                vue.createElementVNode(
                  "view",
                  { class: "serveType" },
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveTypeName),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "serveItem" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(vue.unref(info).data.serveInfo.serveItemName),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode(" x "),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(vue.unref(info).data.serveInfo.serveNum),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode(" 小时 ")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "fee" }, [
              vue.createTextVNode(" 服务费用"),
              vue.createElementVNode(
                "text",
                { class: "feeText" },
                "￥" + vue.toDisplayString(vue.unref(info).data.serveInfo.serveFee),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "orderInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "订单信息"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "订单编号"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.ordersInfo.serveCode),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "预约时间"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime ? vue.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 取消信息 "),
          vue.unref(info).data.serveStatus === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "orderInfo card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "取消信息"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "取消时间"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelTime),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "取消原因"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelReason),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 退款信息 "),
          vue.unref(info).data.serveStatus === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "orderInfo card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "退款信息"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "退款时间"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelTime),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info first" }, [
              vue.createElementVNode("text", { class: "label" }, "退款原因"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelReason),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "退款金额"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                "￥" + vue.toDisplayString(vue.unref(info).data.cancelInfo.refundAmount),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 服务记录 "),
          [2, 3].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "serveRecord card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "服务记录"),
            (vue.unref(info).data.serveStatus === 2 || vue.unref(info).data.serveStatus === 3) && vue.unref(info).data.serveInfo.realServeStartTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "serveBefore"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "服务前"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(info).data.serveInfo.serveBeforeImgs, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("image", {
                      class: "img",
                      src: item,
                      key: index,
                      onClick: ($event) => previewImage(item, vue.unref(info).data.serveInfo.serveBeforeImgs)
                    }, null, 8, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "补充说明："),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveBeforeIllustrate),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "view",
                { class: "time" },
                vue.toDisplayString(vue.unref(info).data.serveInfo.realServeStartTime ? vue.unref(info).data.serveInfo.realServeStartTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(info).data.serveStatus === 3 && vue.unref(info).data.serveInfo.realServeEndTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "serveAfter"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "服务后"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(info).data.serveInfo.serveAfterImgs, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("image", {
                      class: "img",
                      src: item,
                      key: index,
                      onClick: ($event) => previewImage(item, vue.unref(info).data.serveInfo.serveAfterImgs)
                    }, null, 8, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "补充说明："),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveAfterIllustrate),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "view",
                { class: "time" },
                vue.toDisplayString(vue.unref(info).data.serveInfo.realServeEndTime ? vue.unref(info).data.serveInfo.realServeEndTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
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
            }, "取消订单")) : vue.createCommentVNode("v-if", true),
            [1, 2].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "btn-red",
                onClick: _cache[1] || (_cache[1] = ($event) => handleServeRecord(vue.unref(info).data.id, vue.unref(info).data.serveStatus))
              },
              vue.toDisplayString(vue.unref(info).data.serveStatus === 1 ? "开始服务" : "完成服务"),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesOrderInfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c0232ef0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/orderInfo/index.vue"]]);
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
      const title = vue.ref("取消原因");
      vue.ref("");
      let cancel = vue.ref(null);
      const orderId = vue.ref("");
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        from.value = options.type;
        title.value = from.value === "dispatch" ? "拒单原因" : "取消原因";
        formatAppLog("log", "at pages/cancel/index.vue:54", options, "取消订单");
      });
      const handleCause = (value) => {
        cancel.value = value;
        formatAppLog("log", "at pages/cancel/index.vue:60", value, "----------");
      };
      const handleSubmit = () => {
        if (from.value === "dispatch") {
          handleRejectSubmit();
        } else {
          handleCancelSubmit();
        }
      };
      const handleCancelSubmit = async () => {
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
                title: "取消成功!",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        } else {
          return uni.showToast({
            title: "请选择取消原因!",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      const handleRejectSubmit = async () => {
        if (cancel.value) {
          let times = setTimeout(() => {
            uni.showLoading({
              title: "loading"
            });
          }, 500);
          const params = {
            id: orderId.value,
            rejectReason: cancelData.filter((item) => item.value === cancel.value)[0].label
          };
          await rejectOrder(params).then((res) => {
            if (res.code === 200) {
              setTimeout(function() {
                uni.hideLoading();
              }, 500);
              clearTimeout(times);
              if (from.value === "list" || from.value === "dispatch") {
                goBack();
              } else {
                uni.navigateTo({
                  url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
                });
              }
              cancel.value = "";
              orderId.value = "";
              return uni.showToast({
                title: "拒单成功!",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        } else {
          return uni.showToast({
            title: "请选择拒绝原因!",
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
          vue.createCommentVNode(" 自定义头部 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" end "),
          vue.createElementVNode("view", { class: "pageBox" }, [
            vue.createElementVNode("view", { class: "boxCon concelBox" }, [
              vue.createElementVNode("view", { class: "tabConList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(cancelData), (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      ),
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
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ])
        ]);
      };
    }
  };
  const PagesCancelIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-35babf6b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/cancel/index.vue"]]);
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
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
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
        navigationBarTitleText: "登录"
      }
    },
    {
      path: "pages/index/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "小智帮",
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
        navigationBarTitleText: "选择服务技能"
      }
    },
    {
      path: "pages/getOrder/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "接单设置"
      }
    },
    {
      path: "pages/serviceRange/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "请选择工作地点"
      }
    },
    {
      path: "pages/city/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "选择服务城市"
      }
    },
    {
      path: "pages/setting/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "基础配置"
      }
    },
    {
      path: "pages/pickup/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "派件"
      }
    },
    {
      path: "pages/orderInfo/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "订单详情"
      }
    },
    {
      path: "pages/cancel/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "取消原因"
      }
    },
    {
      path: "pages/serveRecord/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "服务记录"
      }
    },
    {
      path: "pages/delivery/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "消息"
      }
    },
    {
      path: "pages/my/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "我的"
      }
    },
    {
      path: "pages/my/map",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "作业范围"
      }
    },
    {
      path: "pages/my/qrCode",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "专属二维码"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "小智帮",
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
  const t = {
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
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var r = s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
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
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
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
  }), i = r, o = (s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = i, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], C = e4[t4 + 14], T2 = e4[t4 + 15], P2 = i3[0], A2 = i3[1], E2 = i3[2], O = i3[3];
        P2 = u2(P2, A2, E2, O, o3, 7, a2[0]), O = u2(O, P2, A2, E2, c3, 12, a2[1]), E2 = u2(E2, O, P2, A2, p2, 17, a2[2]), A2 = u2(A2, E2, O, P2, f2, 22, a2[3]), P2 = u2(P2, A2, E2, O, g2, 7, a2[4]), O = u2(O, P2, A2, E2, m2, 12, a2[5]), E2 = u2(E2, O, P2, A2, y2, 17, a2[6]), A2 = u2(A2, E2, O, P2, _2, 22, a2[7]), P2 = u2(P2, A2, E2, O, w2, 7, a2[8]), O = u2(O, P2, A2, E2, v2, 12, a2[9]), E2 = u2(E2, O, P2, A2, I2, 17, a2[10]), A2 = u2(A2, E2, O, P2, S2, 22, a2[11]), P2 = u2(P2, A2, E2, O, b2, 7, a2[12]), O = u2(O, P2, A2, E2, k2, 12, a2[13]), E2 = u2(E2, O, P2, A2, C, 17, a2[14]), P2 = h2(P2, A2 = u2(A2, E2, O, P2, T2, 22, a2[15]), E2, O, c3, 5, a2[16]), O = h2(O, P2, A2, E2, y2, 9, a2[17]), E2 = h2(E2, O, P2, A2, S2, 14, a2[18]), A2 = h2(A2, E2, O, P2, o3, 20, a2[19]), P2 = h2(P2, A2, E2, O, m2, 5, a2[20]), O = h2(O, P2, A2, E2, I2, 9, a2[21]), E2 = h2(E2, O, P2, A2, T2, 14, a2[22]), A2 = h2(A2, E2, O, P2, g2, 20, a2[23]), P2 = h2(P2, A2, E2, O, v2, 5, a2[24]), O = h2(O, P2, A2, E2, C, 9, a2[25]), E2 = h2(E2, O, P2, A2, f2, 14, a2[26]), A2 = h2(A2, E2, O, P2, w2, 20, a2[27]), P2 = h2(P2, A2, E2, O, k2, 5, a2[28]), O = h2(O, P2, A2, E2, p2, 9, a2[29]), E2 = h2(E2, O, P2, A2, _2, 14, a2[30]), P2 = l2(P2, A2 = h2(A2, E2, O, P2, b2, 20, a2[31]), E2, O, m2, 4, a2[32]), O = l2(O, P2, A2, E2, w2, 11, a2[33]), E2 = l2(E2, O, P2, A2, S2, 16, a2[34]), A2 = l2(A2, E2, O, P2, C, 23, a2[35]), P2 = l2(P2, A2, E2, O, c3, 4, a2[36]), O = l2(O, P2, A2, E2, g2, 11, a2[37]), E2 = l2(E2, O, P2, A2, _2, 16, a2[38]), A2 = l2(A2, E2, O, P2, I2, 23, a2[39]), P2 = l2(P2, A2, E2, O, k2, 4, a2[40]), O = l2(O, P2, A2, E2, o3, 11, a2[41]), E2 = l2(E2, O, P2, A2, f2, 16, a2[42]), A2 = l2(A2, E2, O, P2, y2, 23, a2[43]), P2 = l2(P2, A2, E2, O, v2, 4, a2[44]), O = l2(O, P2, A2, E2, b2, 11, a2[45]), E2 = l2(E2, O, P2, A2, T2, 16, a2[46]), P2 = d2(P2, A2 = l2(A2, E2, O, P2, p2, 23, a2[47]), E2, O, o3, 6, a2[48]), O = d2(O, P2, A2, E2, _2, 10, a2[49]), E2 = d2(E2, O, P2, A2, C, 15, a2[50]), A2 = d2(A2, E2, O, P2, m2, 21, a2[51]), P2 = d2(P2, A2, E2, O, b2, 6, a2[52]), O = d2(O, P2, A2, E2, f2, 10, a2[53]), E2 = d2(E2, O, P2, A2, I2, 15, a2[54]), A2 = d2(A2, E2, O, P2, c3, 21, a2[55]), P2 = d2(P2, A2, E2, O, w2, 6, a2[56]), O = d2(O, P2, A2, E2, T2, 10, a2[57]), E2 = d2(E2, O, P2, A2, y2, 15, a2[58]), A2 = d2(A2, E2, O, P2, k2, 21, a2[59]), P2 = d2(P2, A2, E2, O, g2, 6, a2[60]), O = d2(O, P2, A2, E2, S2, 10, a2[61]), E2 = d2(E2, O, P2, A2, p2, 15, a2[62]), A2 = d2(A2, E2, O, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + A2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = i, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), s(function(e2, t2) {
    e2.exports = i.HmacMD5;
  })), a = s(function(e2, t2) {
    e2.exports = i.enc.Utf8;
  }), c = s(function(e2, t2) {
    var n2;
    e2.exports = (n2 = i, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const u = "FUNCTION", h = "OBJECT", l = "CLIENT_DB", d = "pending", p = "fullfilled", f = "rejected";
  function g(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function m(e2) {
    return "object" === g(e2);
  }
  function y(e2) {
    return "function" == typeof e2;
  }
  function _(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const w = "REJECTED", v = "NOT_PENDING";
  class I {
    constructor({ createPromise: e2, retryRule: t2 = w } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== d;
      }
    }
    exec() {
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then((e2) => (this.status = p, Promise.resolve(e2)), (e2) => (this.status = f, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function S(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const b = true, k = "app", T = S([]), P = k, A = S(""), E = S("[]") || [];
  let x = "";
  try {
    x = "__UNI__E9AF589";
  } catch (e2) {
  }
  let R = {};
  function U(e2, t2 = {}) {
    var n2, s2;
    return n2 = R, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (R[e2] = t2), R[e2];
  }
  R = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const L = ["invoke", "success", "fail", "complete"], N = U("_globalUniCloudInterceptor");
  function D(e2, t2) {
    N[e2] || (N[e2] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = N[e3][t3];
        s2 || (s2 = N[e3][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function F(e2, t2) {
    N[e2] || (N[e2] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = N[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete N[e2];
  }
  function q(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function M(e2, t2) {
    return N[e2] && N[e2][t2] || [];
  }
  function K(e2) {
    D("callObject", e2);
  }
  const j = U("_globalUniCloudListener"), B = "response", $ = "needLogin", W = "refreshToken", z = "clientdb", J = "cloudfunction", H = "cloudobject";
  function G(e2) {
    return j[e2] || (j[e2] = []), j[e2];
  }
  function V(e2, t2) {
    const n2 = G(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function Q(e2, t2) {
    const n2 = G(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = G(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let X, Z = false;
  function ee() {
    return X || (X = new Promise((e2) => {
      Z && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (Z = true, e2());
        }
        Z || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), X);
  }
  function te(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      y(s2) && (t2[n2] = _(s2));
    }
    return t2;
  }
  class ne extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var se = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function re(e2) {
    return e2 && re(e2.__v_raw) || e2;
  }
  function ie() {
    return { token: se.getStorageSync("uni_id_token") || se.getStorageSync("uniIdToken"), tokenExpired: se.getStorageSync("uni_id_token_expired") };
  }
  function oe({ token: e2, tokenExpired: t2 } = {}) {
    e2 && se.setStorageSync("uni_id_token", e2), t2 && se.setStorageSync("uni_id_token_expired", t2);
  }
  let ae, ce;
  function ue() {
    return ae || (ae = uni.getSystemInfoSync()), ae;
  }
  function he() {
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
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ce)
      return { ...ce, locale: e2, LOCALE: e2 };
    const t2 = ue(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ce = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...he(), ...t2 }, { ...ce, locale: e2, LOCALE: e2 };
  }
  var de = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), o(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new ne({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const r2 = e3.data;
        if (r2.error)
          return s2(new ne({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return c.stringify(a.parse(e2));
  } }, pe = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: fe } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: pe, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: pe }, "zh-Hans");
  var ge = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(fe("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = se, this._getAccessTokenPromiseHub = new I({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new ne({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: v });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
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
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new ne({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if ("string" !== g(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new ne({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const i2 = r2 && r2.envType || this.config.envType, o2 = (await this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 })).result, a2 = "https://" + o2.cdnDomain + "/" + o2.ossPath, { securityToken: c2, accessKeyId: u2, signature: h2, host: l2, ossPath: d2, id: p2, policy: f2, ossCallbackUrl: m2 } = o2, y2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: u2, Signature: h2, host: l2, id: p2, key: d2, policy: f2, success_action_status: 200 };
      if (c2 && (y2["x-oss-security-token"] = c2), m2) {
        const e3 = JSON.stringify({ callbackUrl: m2, callbackBody: JSON.stringify({ fileId: p2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        y2.callback = de.toBase64(e3);
      }
      const _2 = { url: "https://" + o2.host, formData: y2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, _2, { onUploadProgress: s2 })), m2)
        return { success: true, filePath: e2, fileID: a2 };
      if ((await this.reportOSSUpload({ id: p2 })).success)
        return { success: true, filePath: e2, fileID: a2 };
      throw new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var me = { init(e2) {
    const t2 = new ge(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var _e;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(_e || (_e = {}));
  var we = function() {
  };
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new ne({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ce = { adapter: null, runtime: void 0 }, Te = ["anonymousUuidKey"];
  class Pe extends we {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ce.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function Ae(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Pe();
      case "none":
        return new Pe();
      default:
        return t2.sessionStorage || new Pe();
    }
  }
  class Ee {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = Ae(this._persistence, Ce.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ae(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Te.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
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
  const Oe = {}, xe = {};
  function Re(e2) {
    return Oe[e2];
  }
  class Ue {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Le extends Ue {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
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
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Le)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t2 || {}) : e2;
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
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Fe(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Me = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", Be = "anonymousConverted", $e = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function He(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...Je, "x-seqid": e2 } };
  }
  class Ve {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, xe[t2]), He(this._reqClass, "post", [Ge]), He(this._reqClass, "upload", [Ge]), He(this._reqClass, "download", [Ge]);
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
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new ne({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Fe(Ke), this._cache.removeStore(n2);
        }
        throw new ne({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Fe($e), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new ne({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === ze.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(ye, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new ne({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new ne({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new ne({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Qe = {};
  function Ye(e2) {
    return Qe[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Ye(e2.env);
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
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Ye(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be string" });
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
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
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
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
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
  class et {
    constructor(e2) {
      if (!e2)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Fe(Me), Fe(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new ne({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Fe(Be, { env: this.config.env }), Fe(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new ne({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Fe(Me), Fe(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new ne({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(Me), Fe(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new ne({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(Me), Fe(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new ne({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Ye(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new ne({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Fe(Me), Fe(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Me, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De($e, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
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
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Ye(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new ne({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Ye(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Ye(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = async function({ fileID: e2 }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Ye(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new ne({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Ye(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new ne({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ce.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new Ee(e3), xe[t3] = new Ee({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Qe[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new ne({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        se.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = se.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    se.setStorageSync(e2, t2);
  }, getItem: (e2) => se.getStorageSync(e2), removeItem(e2) {
    se.removeStorageSync(e2);
  }, clear() {
    se.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = te(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends ge {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = ie();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new ne({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new ne({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new ne({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new ne({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function Ct({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = ie();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Tt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      se.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Ct.call(this, { data: t2 });
        se.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new ne({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new ne({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Pt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var At = /[\\^$.*+?()[\]{}|]/g, Et = RegExp(At.source);
  function Ot(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Et.test(s2) ? s2.replace(At, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Rt = "request", Ut = "response", Lt = "both";
  const yn = { code: 2e4, message: "System error" }, _n = { code: 20101, message: "Invalid client" };
  function In(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new ne({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || yn.code, message: r2 || o2, cause: a2 });
  }
  let bn;
  function An({ secretType: e2 } = {}) {
    return e2 === Rt || e2 === Ut || e2 === Lt;
  }
  function En({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function On({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ue();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = T;
      if (!n3)
        return {};
      e3 = function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), In(_n);
  }
  function xn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Rn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ct.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = An(n3), o2 = En(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && xn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && xn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Ot(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Ot(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Pt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && E ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Tt), o2 = Tt) : o2 = n2, o2 = o2.bind(e2), En(t3))
        a2 = n2.call(e2, t3);
      else if (An(t3)) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (On({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  bn = class {
    constructor() {
      throw In({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Un = Symbol("CLIENT_DB_INTERNAL");
  function Ln(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Un, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Nn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Dn = ["db.Geo", "db.command", "command.aggregate"];
  function Fn(e2, t2) {
    return Dn.indexOf(`${e2}.${t2}`) > -1;
  }
  function qn(e2) {
    switch (g(e2 = re(e2))) {
      case "array":
        return e2.map((e3) => qn(e3));
      case "object":
        return e2._internalType === Un || Object.keys(e2).forEach((t2) => {
          e2[t2] = qn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Mn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Kn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: qn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Mn(e2), n2 = Mn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Mn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Mn(e2), n2 = Mn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return jn({ $method: e2, $param: qn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: qn(t2) }), b) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function jn(e2, t2, n2) {
    return Ln(new Kn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Fn(s2, t3) ? jn({ $method: t3 }, e3, n2) : function() {
        return jn({ $method: t3, $param: qn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Bn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function $n(e2, t2 = {}) {
    return Ln(new e2(t2), { get: (e3, t3) => Fn("db", t3) ? jn({ $method: t3 }, null, e3) : function() {
      return jn({ $method: t3, $param: qn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Wn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Nn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Nn(this._dbCallBacks)), this.env = Ln({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Ln({}, { get: (e3, t3) => Bn({ path: ["Geo"], method: t3 }) }), this.serverDate = Bn({ path: [], method: "serverDate" }), this.RegExp = Bn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
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
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), q(M(o2, "fail"), e3).then(() => q(M(o2, "complete"), e3)).then(() => (r2(null, e3), Y(B, { type: z, content: e3 }), Promise.reject(e3)));
      }
      const c2 = q(M(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new ne({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (oe({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(W, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return q(M(o2, "success"), e4).then(() => q(M(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(B, { type: z, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new ne({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const zn = "token无效，跳转登录页面", Jn = "token过期，跳转登录页面", Hn = { TOKEN_INVALID_TOKEN_EXPIRED: Jn, TOKEN_INVALID_INVALID_CLIENTID: zn, TOKEN_INVALID: zn, TOKEN_INVALID_WRONG_TOKEN: zn, TOKEN_INVALID_ANONYMOUS_USER: zn }, Gn = { "uni-id-token-expired": Jn, "uni-id-check-token-failed": zn, "uni-id-token-not-exist": zn, "uni-id-check-device-feature-failed": zn };
  function Vn(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Qn(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(Vn(t2, e3.path)) : false === e3.needLogin && s2.push(Vn(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Yn(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function Xn() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function Zn() {
    return Yn(Xn());
  }
  function es(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Yn(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const ts = !!t.uniIdRouter;
  const { loginPage: ns, routerNeedLogin: ss, resToLogin: rs, needLoginPage: is, notNeedLoginPage: os, loginPageInTabBar: as } = function({ pages: e2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Qn(e2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e3 = []) {
      const t2 = [], n3 = [];
      return e3.forEach((e4) => {
        const { root: s3, pages: r3 = [] } = e4, { needLoginPage: i3, notNeedLoginPage: o3 } = Qn(r3, s3);
        t2.push(...i3), n3.push(...o3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: es(i2, r2) };
  }();
  if (is.indexOf(ns) > -1)
    throw new Error(`Login page [${ns}] should not be "needLogin", please check your pages.json`);
  function cs(e2) {
    const t2 = Zn();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function us(e2) {
    const t2 = Yn(cs(e2));
    return !(os.indexOf(t2) > -1) && (is.indexOf(t2) > -1 || ss.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function hs({ redirect: e2 }) {
    const t2 = Yn(e2), n2 = Yn(ns);
    return Zn() !== n2 && t2 !== n2;
  }
  function ls({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !hs({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ns, t2);
    as ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    });
  }
  function ds({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = ie();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: Gn[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: Gn[e4] };
      }
      return n3;
    }();
    if (us(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (G($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ps() {
    !function() {
      const e3 = Xn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = ds({ url: e3 });
      t2 || n2 && ls({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = ds({ url: e3.url });
        return t3 ? e3 : s2 ? (ls({ api: n2, redirect: cs(e3.url) }), false) : e3;
      } });
    }
  }
  function fs() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in Gn;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in Hn;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = G($);
        ee().then(() => {
          const n3 = Xn();
          if (n3 && hs({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ns && ls({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function gs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(B, e4);
      }, e3.offResponse = function(e4) {
        Q(B, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        Q($, e4);
      }, ts && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = true, ee().then(() => {
        ps.call(e3);
      }), rs && fs.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(W, e4);
      }, e3.offRefreshToken = function(e4) {
        Q(W, e4);
      };
    }(e2);
  }
  let ms;
  const ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _s = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function ws() {
    const e2 = ie().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ms(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ms = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !_s.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = ys.indexOf(e2.charAt(i2++)) << 18 | ys.indexOf(e2.charAt(i2++)) << 12 | (n2 = ys.indexOf(e2.charAt(i2++))) << 6 | (s2 = ys.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var vs = s(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Is = n(vs);
  const Ss = "manual";
  function bs(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Ss)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ks(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await q(M(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await q(M(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e4) {
            throw o3 = e4, await q(M(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await q(M(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: h, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e3, t3) {
          const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let p2 = false;
        try {
          l2 = await e2.callFunction(d2);
        } catch (e3) {
          p2 = true, l2 = { result: new ne(e3) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (oe(y2), Y(W, { ...y2 })), g2) {
          let e3 = m2;
          if (p2 && o2) {
            e3 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e3, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                      i3(e5);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new ne({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
          throw n3.detail = l2.result, Y(B, { type: H, content: n3 }), n3;
        }
        return Y(B, { type: H, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
        return { objectName: t2, methodName: c2, params: e3 };
      } }) });
    };
  }
  function Cs(e2) {
    return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Ts({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Cs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ps(e2) {
    const t2 = Cs(this);
    return t2.initPromise || (t2.initPromise = Ts.call(this, e2)), t2.initPromise;
  }
  function As(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ps.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Es(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class Os extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Es("getSystemInfo")(), Es("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function xs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        se.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Rs(e2) {
    {
      const { osName: e3, osVersion: t3 } = ue();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await xs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Us(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new I({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const Ls = { tcb: St, tencent: St, aliyun: me, private: kt };
  let Ns = new class {
    init(e2) {
      let t2 = {};
      const n2 = Ls[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = A;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new I({ createPromise: function() {
          return Rs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Us(t2), Rn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = $n(Wn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = $n(Wn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = ws, e3.chooseAndUploadFile = Is.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return bs(e3);
        } }), e3.SSEChannel = Os, e3.initSecureNetworkByWeixin = As(e3), e3.importObject = ks(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || u;
              s2 = e5 !== u;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: c2 } = te(n4), h2 = i2.then(() => s2 ? Promise.resolve() : q(M(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : q(M(t3, "success"), e5).then(() => q(M(t3, "complete"), e5)).then(() => (r2 && Y(B, { type: J, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : q(M(t3, "fail"), e5).then(() => q(M(t3, "complete"), e5)).then(() => (Y(B, { type: J, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || c2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), c2 && c2(e5), r2 && Y(B, { type: J, content: e5 });
            }, (e5) => {
              a2 && a2(e5), c2 && c2(e5), r2 && Y(B, { type: J, content: e5 });
            });
          };
        }(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = E;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Ns = Ns.init(t2), Ns._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Ns[e3] = function() {
          return console.error(n2), Promise.reject(new ne({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Ns, { get mixinDatacom() {
      return bs(Ns);
    } }), gs(Ns), Ns.addInterceptor = D, Ns.removeInterceptor = F, Ns.interceptObject = K;
  })();
  var Ds = Ns;
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
          errMsg: ERR_MSG_FAIL + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
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
        Ds.uploadFile({
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
        title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
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
      //单位是字节
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
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.filesList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "file-picker__box",
              key: index,
              style: vue.normalizeStyle($options.boxStyle)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "file-picker__box-content",
                  style: vue.normalizeStyle($options.borderStyle)
                },
                [
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
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "file-picker__box",
          style: vue.normalizeStyle($options.boxStyle)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "file-picker__box-content is-add",
              style: vue.normalizeStyle($options.borderStyle),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "icon-add" }),
                vue.createElementVNode("view", { class: "icon-add rotate" })
              ], true)
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3], ["__scopeId", "data-v-bdfc07e0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
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
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
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
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "uni-file-picker__lists is-text-box",
          style: vue.normalizeStyle($options.borderStyle)
        },
        [
          vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-file-picker__lists-box", {
                    "files-border": index !== 0 && $options.styles.dividline
                  }]),
                  key: index,
                  style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
                },
                [
                  vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
                    vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
                    vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
                    vue.createElementVNode(
                      "view",
                      { class: "files__name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
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
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2], ["__scopeId", "data-v-a54939c6"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
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
      // 自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 最大选择个数 ，h5只能限制单选或是多选
      limit: {
        type: [Number, String],
        default: 9
      },
      // 列表样式 grid | list | list-card
      mode: {
        type: String,
        default: "grid"
      },
      // 选择文件类型  image/video/all
      fileMediatype: {
        type: String,
        default: "image"
      },
      // 文件类型筛选
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
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
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
      if (!(Ds.config && Ds.config.provider)) {
        this.noSpace = true;
        Ds.chooseAndUploadFile = chooseAndUploadFile;
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
      /**
       * 公开用户使用，清空文件
       * @param {Object} index
       */
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
      /**
       * 公开用户使用，继续上传
       */
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
      /**
       * 选择文件
       */
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `您最多选择 ${this.limitLength} 个文件`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      /**
       * 选择文件并上传
       */
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        Ds.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          // TODO 如果为空，video 有问题
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          //默认9
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        });
      },
      /**
       * 选择文件回调
       * @param {Object} res
       */
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
          currentData.push({
            ...filedata,
            file: files[i2]
          });
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
      /**
       * 批传
       * @param {Object} e
       */
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        });
      },
      /**
       * 成功或失败
       */
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
      /**
       * 获取进度
       * @param {Object} progressEvent
       * @param {Object} index
       * @param {Object} type
       */
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
      /**
       * 删除文件
       * @param {Object} index
       */
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
      /**
       * 获取文件名和后缀
       * @param {Object} name
       */
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      /**
       * 处理返回事件
       */
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
      /**
       * 处理返回参数
       * @param {Object} files
       */
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
        const urls = await Ds.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      /**
       * 获取父元素实例
       */
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
        vue.createElementVNode(
          "text",
          { class: "file-title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "file-count" },
          vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength),
          1
          /* TEXT */
        )
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
        /* FORWARDED */
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
            }, "选择文件")
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-6223573f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("开始服务");
      const remark = vue.ref("");
      const orderId = vue.ref("");
      const fileList = vue.ref([]);
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        title.value = options.status == 1 ? "开始服务" : "完成服务";
        from.value = options.type;
        formatAppLog("log", "at pages/serveRecord/index.vue:56", options, "服务记录页面");
      });
      const handleDelete = (e2) => {
        fileList.value = fileList.value.filter(
          (item) => item.uuid !== e2.tempFile.uuid
        );
        formatAppLog("log", "at pages/serveRecord/index.vue:62", e2.tempFile.uuid, "删除回调");
      };
      const handleSuccess = (e2) => {
        formatAppLog("log", "at pages/serveRecord/index.vue:65", e2, "上传成功回调");
      };
      const uploadImage2 = async () => {
        const promises = fileList.value.map((item) => {
          return new Promise((resolve, reject) => {
            uni.uploadFile({
              url: "http://xzb-api-test.itheima.net/storage/upload",
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
            title: "图片上传失败",
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
        formatAppLog("log", "at pages/serveRecord/index.vue:115", e, "上传失败");
      };
      const handleSubmit = async () => {
        const uploadedImages = await uploadImage2();
        if (!fileList.value.length) {
          return uni.showToast({
            title: "请上传图片",
            duration: 2e3,
            icon: "none"
          });
        }
        uni.showLoading({
          title: "loading"
        });
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
        };
        if (title.value === "开始服务") {
          startServe(startParams).then((res) => {
            uni.hideLoading();
            if (res.code === 200) {
              sameFunc();
            } else {
              uni.showToast({
                title: "接口提交失败!",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        } else {
          finishServe(finishParams).then((res) => {
            if (res.code === 200) {
              uni.hideLoading();
              sameFunc();
            } else {
              uni.showToast({
                title: "接口提交失败!",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        }
        formatAppLog("log", "at pages/serveRecord/index.vue:183", uploadedImages, "上传后的图片链接数组");
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
            vue.createElementVNode(
              "view",
              { class: "title" },
              "服务" + vue.toDisplayString(title.value === "开始服务" ? "前" : "后") + "照片",
              1
              /* TEXT */
            ),
            vue.createVNode(_component_uni_file_picker, {
              limit: "3",
              title: "最多上传3张图片",
              onSuccess: handleSuccess,
              onSelect: handleSelect,
              onFail: handleFail,
              onDelete: handleDelete
            })
          ]),
          vue.createElementVNode("view", { class: "remark card" }, [
            vue.createElementVNode("view", { class: "title" }, "补充说明"),
            vue.createElementVNode("textarea", {
              onInput: handleInput,
              value: remark.value,
              maxlength: 50,
              "placeholder-style": "color:#F76260",
              placeholder: "请输入对本次服务前的其他说明补充"
            }, null, 40, ["value"]),
            vue.createElementVNode("view", { class: "limit" }, [
              vue.createElementVNode(
                "text",
                { class: "min" },
                vue.toDisplayString(remark.value.length),
                1
                /* TEXT */
              ),
              vue.createTextVNode("/"),
              vue.createElementVNode(
                "text",
                { class: "max" },
                vue.toDisplayString(50 - remark.value.length),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ])
        ]);
      };
    }
  };
  const PagesServeRecordIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1ccdec0f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serveRecord/index.vue"]]);
  const en$1 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans$1 = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "确定",
    "uni-popup.placeholder": "请输入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const zhHant$1 = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "確定",
    "uni-popup.placeholder": "請輸入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  initVueI18n(messages$1);
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
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
      const list = vue.ref();
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
          list.value.dealPList();
        } else {
          list.value.alreadList();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", null, [
              vue.createTextVNode(" 消息页面 "),
              vue.createVNode(UniFooter, { pagePath: "pages/delivery/index" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesDeliveryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-87751f05"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/delivery/index.vue"]]);
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
          title: "程序员哥哥正在实现中",
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
                vue.createElementVNode(
                  "view",
                  { class: "tit" },
                  vue.toDisplayString(__props.baseData.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  null,
                  vue.toDisplayString(__props.baseData.account),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "address" }, [
                  vue.createElementVNode("icon"),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(__props.baseData.agencyName ? __props.baseData.agencyName : "暂无"),
                    1
                    /* TEXT */
                  )
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
  const BaseInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d4d52b02"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/BaseInfo.vue"]]);
  const _sfc_main$6 = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
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
      /**
       * 兼容 PC @tian
       */
      mousedown(e2) {
      },
      mousemove(e2) {
      },
      mouseleave(e2) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size 属性只能设置为数字");
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
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
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
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
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
              vue.createElementVNode("text", null, "我的评价"),
              vue.createElementVNode("view", { class: "star" }, [
                vue.createVNode(_component_uni_rate, {
                  readonly: true,
                  "allow-half": "",
                  value: 4.5,
                  "active-color": "#EF4F3F",
                  color: "#F4F4F4"
                }, null, 8, ["value"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(4.5),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "排班时间"),
              (!__props.baseData.startTime || __props.baseData.startTime === "") && (!__props.baseData.endTime || __props.baseData.endTime === "") ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "无")) : (vue.openBlock(), vue.createElementBlock(
                "text",
                { key: 1 },
                vue.toDisplayString(vue.unref(overTimeFormat)(__props.baseData.startTime)) + "-" + vue.toDisplayString(vue.unref(overTimeFormat)(__props.baseData.endTime)),
                1
                /* TEXT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const Evaluate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fadf945b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/Evaluate.vue"]]);
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
              vue.createElementVNode("text", null, "全部取派"),
              vue.createElementVNode("text", null, [
                vue.createElementVNode("icon", { class: "nextIcon" })
              ])
            ]),
            vue.createElementVNode("navigator", {
              url: "/pages/my/map",
              "open-type": "redirect"
            }, [
              vue.createElementVNode("view", { class: "item" }, [
                vue.createElementVNode("text", null, "作业范围"),
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
  const HistoryScope = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-efd76cc3"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/HistoryScope.vue"]]);
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
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "navFrame" }, [
              vue.createCommentVNode(" 我的基本信息 "),
              vue.createVNode(BaseInfo, { baseData: vue.unref(baseData) }, null, 8, ["baseData"]),
              vue.createCommentVNode(" end "),
              vue.createCommentVNode(" 我的评价、排班时间 "),
              vue.createVNode(Evaluate, { baseData: vue.unref(baseData) }, null, 8, ["baseData"]),
              vue.createCommentVNode(" end "),
              vue.createCommentVNode(" 历史取派、作业范围 "),
              vue.createVNode(HistoryScope),
              vue.createCommentVNode(" end ")
            ]),
            vue.createCommentVNode(" 退出按钮 "),
            vue.createElementVNode("view", { class: "footBtn" }, [
              vue.createElementVNode("view", { class: "btnBox" }, [
                vue.createElementVNode("button", {
                  class: "btn-default",
                  onClick: handleOut
                }, "退出登录")
              ])
            ]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" footer "),
            vue.createVNode(UniFooter, { pagePath: "pages/my/index" }),
            vue.createCommentVNode(" end ")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f97bc692"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/index.vue"]]);
  const getUserScope = (params) => request({
    url: `/users/scope`,
    method: "get",
    params
  });
  const _sfc_main$2 = {
    __name: "map",
    setup(__props) {
      const title = vue.ref("作业范围");
      const latitude = vue.ref(39.997534);
      const longitude = vue.ref(116.475334);
      const polygons = vue.reactive([
        {
          //多边形的坐标数组
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
          //填充颜色后两个数值是透明度
          strokeColor: "#EF4F3F",
          //描边颜色
          strokeWidth: 2,
          //描边宽度
          zIndex: 1,
          //层级
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
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 自定义头部 "),
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
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyMap = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a4dc242"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/map.vue"]]);
  const _sfc_main$1 = {
    __name: "qrCode",
    setup(__props) {
      const title = vue.ref("专属二维码");
      vue.onMounted(() => {
      });
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/my/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 自定义头部 "),
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
                    vue.createElementVNode("view", { class: "tit" }, "神领快递员-张全蛋"),
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
                vue.createElementVNode("view", null, "扫码快速下单")
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyQrCode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-27c56fa5"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/qrCode.vue"]]);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/App.vue"]]);
  const global$1 = {
    // 注意：全局模块中不需要开启命名空间
    state: {
      footStatus: 0,
      // 公用footer的激活状态码
      orderActive: 0
      //记录订单页面顶部激活的订单状态
    },
    mutations: {
      // 公用footer的激活码
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
  const user = {
    namespaced: true,
    // 开启命名空间
    state() {
      return {
        location: {},
        //服务范围坐标
        address: "请选择",
        //服务范围详细地址
        cityCode: "",
        //服务范围城市编码
        cityName: "请选择",
        //服务范围城市名称
        tabIndex: 0,
        //储存当前触发的tab值
        userBase: {},
        // 用户信息
        pages: 0,
        //总页数
        page: 1,
        //当前页码
        token: "",
        //token
        taskId: "",
        //任务id
        detailsData: {},
        //任务详情
        taskType: 1,
        //当前进入的是取件详情还是派件详情  1取件，2派件
        taskStatus: 0,
        //已取件\已取消\去派件\已签收状态
        detailType: 0,
        //历史订单或者已经取件的详情页
        reasonVal: "",
        //取消订单原因选择内容
        reasonDesc: "",
        //取消订单描述
        orderDistance: null,
        //距离筛选值
        orderTime: null,
        //时间筛选值
        filterOverTime: null,
        //超时值
        deliveryData: [],
        //待取件数据储存
        cancelData: [],
        //已取件数据储存
        alreadyData: [],
        //取消数据储存
        isRedistribute: false,
        //取消订单原因是否退回到网点
        isFiltrate: false,
        //是否触发了距离、时间、超时任务筛选
        taskDetailData: {},
        //任务详情
        selectTaskData: [],
        //已经选择的任务，任务对选单选
        payData: {},
        //去取件的时候储存订单信息，二维码付款要用一些信息
        isBack: null,
        //是否返回
        istabChange: null,
        //是否tab切换
        isDelete: null,
        //已经取消订单是否删除了
        paymentMethod: null,
        //付款方式
        isPickUp: false,
        //是否触发了取件
        isCollect: false,
        //是否触发了取件
        isSign: false,
        isDelivery: false,
        //是否跳转派件页面
        newType: null,
        cardData: null,
        //身份信息
        timeData: null,
        //全部取派时间
        isInput: false,
        //是否在文本框里输入了文字
        isSearch: false,
        //是否从搜索页进的详情页
        searchText: "",
        //储存需要搜索的文本
        isSearchClear: false,
        //是否清空搜索内容
        isNew: false
        //是否从消息页的取件、派件进的详情
      };
    },
    mutations: {
      // 定义mutations，用于同步修改状态
      setLocation(state, provider) {
        state.location = provider;
      },
      setAddress(state, provider) {
        state.address = provider;
      },
      setCityCode(state, provider) {
        state.cityCode = provider;
      },
      setCityName(state, provider) {
        state.cityName = provider;
      },
      // 设置token
      setToken(state, provider) {
        state.token = provider;
      },
      // 设置用户信息
      setUserInfo(state, provider) {
        state.userBase = provider;
      },
      // 设置经纬度
      setlLacation(state, provider) {
        state.loacation = provider;
      },
      // 设置当前页数
      setPage(state, provider) {
        state.page = provider;
      },
      // 设置总页数
      setPages(state, provider) {
        state.pages = provider;
      },
      // 设置距离筛选值
      setOrderDistance(state, provider) {
        state.orderDistance = provider;
      },
      // 设置时间筛选值
      setOrderTime(state, provider) {
        state.orderTime = provider;
      },
      // 设置超时筛选值
      setFilterOverTime(state, provider) {
        state.filterOverTime = provider;
      },
      // 设置待取件数据储存
      setDeliveryData(state, provider) {
        state.deliveryData = provider;
      },
      // 设置已取件数据储存
      setAlreadyData(state, provider) {
        state.alreadyData = provider;
      },
      // 设置取消数据储存
      setCancelData(state, provider) {
        state.cancelData = provider;
      },
      // 设置任务id，方便其他页面用
      setTaskId(state, provider) {
        state.taskId = provider;
      },
      // 
      setTaskType(state, provider) {
        state.taskType = provider;
      },
      // 设置任务详情，方便其他页面用，较少加载接口次数
      setTaskDetailData(state, provider) {
        state.taskDetailData = provider;
      },
      // 设置 取消订单原因选择内容
      setReasonVal(state, provider) {
        state.reasonVal = provider;
      },
      // 设置 取消订单原因描述
      setReasonDesc(state, provider) {
        state.reasonDesc = provider;
      },
      // 设置 取消订单原因是否退回到网点
      setRedistribute(state, provider) {
        state.isRedistribute = provider;
      },
      // 设置已经选择的任务
      setSelectTaskData(state, provider) {
        state.selectTaskData = provider;
      },
      // 距离、时间、超时任务筛选
      setIsFiltrate(state, provider) {
        state.isFiltrate = provider;
      },
      // 设置消息触发的当前tab值
      setTabIndex(state, provider) {
        state.tabIndex = provider;
      },
      // 设置已取件\已取消\去派件\已签收状态
      setTaskStatus(state, provider) {
        state.taskStatus = provider;
      },
      // 设置储存订单信息，二维码付款要用一些信息
      setPayData(state, provider) {
        state.payData = provider;
      },
      // 设置任务详情
      setDetailsData(state, provider) {
        state.detailsData = provider;
      },
      // 设置消息跳转
      setNewType(state, provider) {
        state.newType = provider;
      },
      // 设置是否返回
      setIstabChange(state, provider) {
        state.istabChange = provider;
      },
      // 订单是否删除
      setIsDelete(state, provider) {
        state.isDelete = provider;
      },
      // 设置付款方式
      setPaymentMethod(state, provider) {
        state.paymentMethod = provider;
      },
      // 历史订单或者已经取件的详情页
      setDetailType(state, provider) {
        state.detailType = provider;
      },
      //设置  是否去取件
      setIsPickUp(state, provider) {
        state.isPickUp = provider;
      },
      // 到付的情况下，是否触发去取件后到，显示按钮为已取件
      setIsCollect(state, provider) {
        state.isCollect = provider;
      },
      setIsSign(state, provider) {
        state.isSign = provider;
      },
      setIsDelivery(state, provider) {
        state.isDelivery = provider;
      },
      // 设置身份校验身份信息
      setCardData(state, provider) {
        state.cardData = provider;
      },
      // 设置全部取派的时间
      setTimeData(state, provider) {
        state.timeData = provider;
      },
      // 设置是否在文本框里输入了文字
      setIsInput(state, provider) {
        state.isInput = provider;
      },
      // 设置是否由搜索页进的详情页，方便详情页返回
      setIsSearch(state, provider) {
        state.isSearch = provider;
      },
      // 设置搜索的内容，从详情页返回搜索页的时候显示默认搜索的内容
      setSearchText(state, provider) {
        state.searchText = provider;
      },
      //是否清空搜索
      setSearchClear(state, provider) {
        state.isSearchClear = provider;
      },
      // 设置是否从消息页的取件、派件进的详情
      setIsNew(state, provider) {
        state.isNew = provider;
      }
    },
    actions: {
      // 获取用户信息
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
  const store = createStore({
    // 全局模块
    ...global$1,
    // 局部模块
    modules: {
      user
    }
  });
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
})(Vue, uni.VueShared);
