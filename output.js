//Thu Dec 11 2025 03:09:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2ed34e = function () {
    let _0x14d593 = true;
    return function (_0x2aa934, _0x3a2eee) {
      const _0x4947f8 = _0x14d593 ? function () {
        if (_0x3a2eee) {
          const _0x308a03 = _0x3a2eee.apply(_0x2aa934, arguments);
          _0x3a2eee = null;
          return _0x308a03;
        }
      } : function () {};
      _0x14d593 = false;
      return _0x4947f8;
    };
  }(),
  _0x34d547 = _0x2ed34e(this, function () {
    const _0x5091c8 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this,
      _0x3d5525 = function () {
        const _0x36c2f5 = new _0x5091c8.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
        return !_0x36c2f5.test(_0x34d547);
      };
    return _0x3d5525();
  });
_0x34d547();
const _0x35cb75 = require("fs").promises,
  _0x368fae = require("crypto"),
  _0x4c8860 = require("axios"),
  _0x1c4828 = require("https"),
  {
    parse: _0x401508,
    format: _0x1a7a78,
    isSameMonth: _0x40ad72,
    isToday: _0x4b8d3f
  } = require("date-fns"),
  {
    URL: _0x322d1e,
    URLSearchParams: _0x287a91
  } = require("url"),
  _0x4c1c91 = process.env.chinaTelecomAccount || "";
const _0x230641 = "./chinaTelecom_cache.json";
let _0x555e60 = {};
const _0x1a0ee0 = new Date();
const _0x38641a = _0x1a0ee0.getMonth() + 1,
  _0x4fec83 = _0x1a0ee0.getFullYear(),
  _0x5e1e10 = new Date(_0x4fec83, _0x38641a, 0).getDate(),
  _0x56223e = _0x1a0ee0;
async function _0xb4d8cb(_0x186e89, _0x2f33bf, _0xdbc672) {
  const _0x341a00 = process.env.WXPUSHER_APP_TOKEN || "",
    _0x529240 = process.env.WXPUSHER_UID || "",
    _0x5bf3d9 = "https://wxpusher.zjiecode.com/api/send/message";
  try {
    const _0x2650aa = {
      appToken: _0x341a00,
      content: _0xdbc672,
      summary: _0x2f33bf,
      contentType: 2,
      uids: [_0x529240],
      title: _0x186e89
    };
    const _0x201567 = await _0x4c8860.post(_0x5bf3d9, _0x2650aa);
    return _0x201567.data;
  } catch (_0x2b1db2) {
    console.error("推送失败:", _0x2b1db2.message);
    const _0x17d12e = {
      success: false,
      msg: _0x2b1db2.message
    };
    return _0x17d12e;
  }
}
const _0xa2fc6b = {
  length: _0x5e1e10
};
const _0x5e6672 = Array.from(_0xa2fc6b, () => []),
  _0x49c9a5 = {},
  _0x1ab55b = {};
let _0x1572c4 = 0,
  _0x59beb6 = "";
const _0x4cfb20 = Buffer.from("1234567`90koiuyhgtfrdews"),
  _0x14d081 = Buffer.alloc(8, 0),
  _0x2e4dd7 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----",
  _0x533072 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----",
  _0x3e34d2 = {
    ciphers: "DEFAULT@SECLEVEL=1",
    rejectUnauthorized: false
  };
const _0x4a2adc = new _0x1c4828.Agent(_0x3e34d2),
  _0x3b6224 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36"
  };
const _0x2226fd = {
  httpsAgent: _0x4a2adc,
  headers: _0x3b6224,
  timeout: 30000
};
const _0x1d3c6b = _0x4c8860.create(_0x2226fd);
function _0x3855ea(_0x1a28fc, _0x1c9b6c) {
  const _0x52b51f = _0x1a28fc.match(/(\d+(?:\.\d+)?)元话费/);
  if (_0x52b51f) {
    return parseFloat(_0x52b51f[1]);
  }
  const _0x16551c = _0x1a28fc.match(/(\d+(?:\.\d+)?)/);
  return _0x16551c ? parseFloat(_0x16551c[0]) : 0;
}
async function _0x2240cc(_0x5d63f6, _0x8cb992, _0x29c04e, _0x41a92b) {
  try {
    let _0x51342a;
    try {
      _0x51342a = _0x401508(_0x5d63f6, "yyyy-MM-dd HH:mm:ss", new Date());
      if (isNaN(_0x51342a.getTime())) {
        _0x51342a = new Date(_0x5d63f6);
      }
    } catch (_0x4adc2f) {
      console.log("时间解析失败: " + _0x5d63f6);
      return;
    }
    if (_0x51342a.getFullYear() !== _0x4fec83 || _0x51342a.getMonth() + 1 !== _0x38641a) {
      return;
    }
    const _0x42d5c8 = _0x3855ea(_0x8cb992, _0x41a92b);
    let _0x2f5ec9 = _0x41a92b;
    if (_0x41a92b === "金豆抢兑") {
      if (_0x42d5c8 === 0.5) {
        _0x2f5ec9 = "金豆抢兑_0.5元";
      } else {
        if (_0x42d5c8 === 1) {
          _0x2f5ec9 = "金豆抢兑_1元";
        } else {
          if (_0x42d5c8 === 5) {
            _0x2f5ec9 = "金豆抢兑_5元";
          } else {
            if (_0x42d5c8 === 10) {
              _0x2f5ec9 = "金豆抢兑_10元";
            } else {
              _0x2f5ec9 = "金豆抢兑_其他";
            }
          }
        }
      }
    }
    _0x1572c4++;
    const _0xd5c87c = [_0x51342a, _0x8cb992, _0x29c04e, _0x2f5ec9, _0x1572c4, _0x42d5c8],
      _0x8deed7 = _0x51342a.getDate() - 1;
    _0x5e6672[_0x8deed7].push(_0xd5c87c);
    !_0x49c9a5[_0x29c04e] && (_0x49c9a5[_0x29c04e] = []);
    _0x49c9a5[_0x29c04e].push(_0xd5c87c);
    if (!_0x1ab55b[_0x2f5ec9]) {
      _0x1ab55b[_0x2f5ec9] = [];
    }
    _0x1ab55b[_0x2f5ec9].push(_0xd5c87c);
  } catch (_0x1cad72) {
    console.error("添加记录失败:", _0x1cad72);
  }
}
function _0x229abe() {
  const _0x86b8a = {};
  _0x5e6672.forEach((_0x41aa63, _0x40ee47) => {
    _0x86b8a[_0x40ee47 + 1] = _0x41aa63.reduce((_0x1ca7d9, _0x10cec5) => _0x1ca7d9 + _0x10cec5[5], 0);
  });
  const _0x2d9ecf = {},
    _0x46bd5a = {};
  Object.entries(_0x1ab55b).forEach(([_0xb48c73, _0x593da6]) => {
    _0x2d9ecf[_0xb48c73] = _0x593da6.reduce((_0x7b02ea, _0x316335) => _0x7b02ea + _0x316335[5], 0);
    _0x46bd5a[_0xb48c73] = _0x593da6.length;
  });
  const _0x6c5ba1 = {};
  Object.entries(_0x49c9a5).forEach(([_0x49fc66, _0x2f1b47]) => {
    _0x6c5ba1[_0x49fc66] = _0x2f1b47.reduce((_0x541c77, _0x114899) => _0x541c77 + _0x114899[5], 0);
  });
  const _0x51d8db = Object.values(_0x86b8a).reduce((_0x5c65dc, _0x205a09) => _0x5c65dc + _0x205a09, 0),
    _0x203e2d = {
      dailySums: _0x86b8a,
      typeSums: _0x2d9ecf,
      typeCounts: _0x46bd5a,
      phoneSums: _0x6c5ba1,
      monthlyTotal: _0x51d8db
    };
  return _0x203e2d;
}
function _0x5bd725() {
  const {
      typeSums: _0x49ff34,
      typeCounts: _0x1a5544,
      phoneSums: _0x4ff63b,
      monthlyTotal: _0x3bd537
    } = _0x229abe(),
    _0x249542 = [];
  Object.entries(_0x49c9a5).forEach(([_0x50dc64, _0x317993]) => {
    _0x317993.forEach(_0x554a8e => {
      const _0x5c7a59 = _0x554a8e[0];
      if (_0x4b8d3f(_0x5c7a59) && _0x554a8e[5] > 0) {
        _0x249542.push({
          phone: _0x50dc64,
          time: _0x1a7a78(_0x5c7a59, "HH:mm:ss.SSS").slice(0, -3),
          content: _0x554a8e[1],
          amount: _0x554a8e[5],
          type: _0x554a8e[3]
        });
      }
    });
  });
  const _0x391990 = [];
  Object.entries(_0x49c9a5).forEach(([_0x23174b, _0x5b5ed6], _0x5c14f7) => {
    let _0x3e8f6b = 0,
      _0x3ef0c5 = 0,
      _0x3b86e1 = 0,
      _0x44d244 = 0;
    _0x5b5ed6.forEach(_0x42c2fb => {
      const _0x4be29a = _0x42c2fb[3],
        _0x50a89f = _0x42c2fb[5];
      if (_0x4be29a.includes("金豆")) {
        _0x3e8f6b += _0x50a89f;
      } else {
        if (_0x4be29a.includes("抽奖")) {
          _0x3ef0c5 += _0x50a89f;
        } else {
          if (_0x4be29a.includes("权益")) {
            _0x3b86e1 += _0x50a89f;
          } else {
            if (_0x4be29a.includes("星播客")) {
              _0x44d244 += _0x50a89f;
            }
          }
        }
      }
    });
    _0x391990.push({
      index: _0x5c14f7 + 1,
      phone: _0x23174b,
      gold: Math.round(_0x3e8f6b * 10) / 10,
      lottery: Math.round(_0x3ef0c5 * 10) / 10,
      rights: Math.round(_0x3b86e1 * 10) / 10,
      star: Math.round(_0x44d244 * 10) / 10,
      total: Math.round(_0x4ff63b[_0x23174b] * 10) / 10
    });
  });
  let _0x5edc22 = 0,
    _0x3f260e = 0,
    _0x4d4010 = 0,
    _0x3db503 = 0;
  _0x249542.forEach(_0x50b22d => {
    if (_0x50b22d.type.includes("金豆")) {
      _0x5edc22 += _0x50b22d.amount;
    } else {
      if (_0x50b22d.type.includes("抽奖")) {
        _0x3f260e += _0x50b22d.amount;
      } else {
        if (_0x50b22d.type.includes("权益")) {
          _0x4d4010 += _0x50b22d.amount;
        } else {
          if (_0x50b22d.type.includes("星播客")) {
            _0x3db503 += _0x50b22d.amount;
          }
        }
      }
    }
  });
  const _0x17f10e = _0x5edc22 + _0x3f260e + _0x4d4010 + _0x3db503;
  let _0x455661 = 0,
    _0x57b862 = 0,
    _0x5c6d19 = 0,
    _0x435b1f = 0;
  _0x391990.forEach(_0x5676bf => {
    _0x455661 += _0x5676bf.gold;
    _0x57b862 += _0x5676bf.lottery;
    _0x5c6d19 += _0x5676bf.rights;
    _0x435b1f += _0x5676bf.star;
  });
  const _0x1233d1 = _0x455661 + _0x57b862 + _0x5c6d19 + _0x435b1f;
  let _0x2e17ad = "";
  if (_0x249542.length > 0) {
    _0x249542.forEach(_0x5445c6 => {
      const _0x3c4398 = _0x5445c6.phone.slice(0, 3) + "****" + _0x5445c6.phone.slice(-4);
      let _0x10f048 = "";
      if (_0x5445c6.type.includes("金豆")) {
        _0x10f048 = "金豆兑换";
      } else {
        if (_0x5445c6.type.includes("抽奖")) {
          _0x10f048 = "各种抽奖";
        } else {
          if (_0x5445c6.type.includes("权益")) {
            _0x10f048 = "等级权益";
          } else {
            if (_0x5445c6.type.includes("星播客")) {
              _0x10f048 = "星播客";
            } else {
              _0x10f048 = _0x5445c6.type;
            }
          }
        }
      }
      _0x2e17ad += "\n            <tr height=\"25\">\n                <td>" + _0x5445c6.time.slice(0, 5) + "</td>\n                <td>" + _0x3c4398 + "</td>\n                <td>" + _0x5445c6.content + "</td>\n                <td>" + _0x10f048 + "</td>\n            </tr>";
    });
  } else {
    _0x2e17ad = "<tr height=\"25\"><td colspan=\"4\" style=\"text-align:center;padding:15px;\">今日无中奖记录</td></tr>";
  }
  let _0x144c3c = "";
  _0x391990.forEach(_0x97bad5 => {
    const _0x26fc40 = _0x97bad5.phone.slice(0, 3) + "****" + _0x97bad5.phone.slice(-4);
    _0x144c3c += "\n        <tr height=\"25\">\n            <td>" + _0x26fc40 + "</td>\n            <td><b style=\"color:#e74c3c;\">" + _0x97bad5.gold + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x97bad5.lottery + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x97bad5.rights + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x97bad5.star + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x97bad5.total + "</b></td>\n        </tr>";
  });
  return "<!DOCTYPE html>\n<html class=\"\" lang=\"zh-CN\">\n<head>\n    <title>" + _0x4fec83 + "年" + _0x38641a + "月" + _0x56223e.getDate() + "日电信话费统计</title>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no\">\n    <meta name=\"referrer\" content=\"never\">\n    <style>\n        :root {\n            color-scheme: light dark;\n            --primary-color: #6c5ce7;\n            --nav-bg-color: #f8f9fa;\n            --font-color: #2d3436;\n            --hr-color: #e0e0e0;\n            --meta-color: #636e72;\n            --code-bg: rgba(108, 92, 231, 0.08);\n            --code-border: rgba(108, 92, 231, 0.15);\n            --code-block-bg: rgba(108, 92, 231, 0.05);\n            --code-block-border: rgba(108, 92, 231, 0.12);\n            --paid-badge-bg: #b2bec3;\n            --paid-badge-color: #FFFFFF;\n        }\n\n        @media (prefers-color-scheme: dark) {\n            :root {\n                --primary-color: #6c5ce7;\n                --nav-bg-color: #1a1a1a;\n                --font-color: rgba(255, 255, 255, 0.9);\n                --hr-color: #444;\n                --meta-color: #aaa;\n                --code-bg: rgba(108, 92, 231, 0.15);\n                --code-border: rgba(108, 92, 231, 0.25);\n                --code-block-bg: rgba(108, 92, 231, 0.12);\n                --code-block-border: rgba(108, 92, 231, 0.2);\n                --paid-badge-bg: #555;\n                --paid-badge-color: #FFFFFF;\n            }\n        }\n\n        :root {\n            color: var(--font-color);\n            background-color: var(--nav-bg-color);\n        }\n\n        * {\n            box-sizing: border-box;\n            -webkit-font-smoothing: antialiased;\n            -webkit-overflow-scrolling: touch;\n            -webkit-tap-highlight-color: transparent;\n            -webkit-text-size-adjust: none;\n            -webkit-touch-callout: none;\n        }\n\n        body {\n            overflow-x: hidden;\n            margin: 0;\n            padding: 0;\n            color: var(--font-color);\n            letter-spacing: 0;\n            font-size: 14px;\n            font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei UI\", \"Microsoft YaHei\", Arial, sans-serif;\n            -moz-osx-font-smoothing: grayscale;\n            -webkit-font-smoothing: antialiased;\n            background-color: var(--nav-bg-color);\n            word-wrap: break-word;\n            line-height: 1.4;\n        }\n\n        .article-container {\n            max-width: 100%;\n            margin: 0 auto;\n            min-height: 100vh;\n            padding: 0 8px;\n        }\n\n        .article-content {\n            padding: 6px 8px;\n            font-size: 14px;\n            line-height: 1.4;\n            color: var(--font-color);\n        }\n\n        .section-title {\n            text-align: center;\n            font-size: 14px;\n            font-weight: bold;\n            margin-bottom: 6px;\n            color: white;\n            padding: 5px;\n            border-radius: 6px;\n            background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);\n            box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n        }\n\n        .stats-box {\n            margin: 0 0 8px 0;\n            padding: 6px;\n            border-radius: 8px;\n            color: white;\n            box-shadow: 0 3px 8px rgba(0,0,0,0.12);\n        }\n\n        .today-stats {\n            background: linear-gradient(135deg, #00b894 0%, #55efc4 100%);\n        }\n\n        .month-stats {\n            background: linear-gradient(135deg, #fd79a8 0%, #fab1a0 100%);\n        }\n\n        .stats-grid {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            margin: 2px 0;\n        }\n\n        .stat-item {\n            text-align: center;\n            margin: 2px;\n            padding: 4px;\n            background: rgba(255,255,255,0.25);\n            border-radius: 5px;\n            min-width: 65px;\n            box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n            backdrop-filter: blur(5px);\n        }\n\n        .stat-label {\n            font-size: 10px;\n            font-weight: 500;\n        }\n\n        .stat-value {\n            font-size: 12px;\n            font-weight: bold;\n        }\n\n        .total-stat {\n            background: rgba(255,255,255,0.35);\n            border: 1px solid rgba(255,255,255,0.6);\n        }\n\n        .table-container {\n            overflow-x: auto;\n            margin: 5px 0;\n            border-radius: 8px;\n            box-shadow: 0 3px 8px rgba(0,0,0,0.12);\n        }\n\n        table {\n            margin: 0 auto;\n            text-align: center;\n            border-collapse: collapse;\n            width: 100%;\n            font-size: 11px;\n            min-width: 270px;\n            border-radius: 8px;\n            overflow: hidden;\n        }\n\n        thead tr {\n            background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);\n            color: white;\n        }\n\n        th {\n            padding: 5px 3px;\n            font-size: 10px;\n            font-weight: 600;\n        }\n\n        td {\n            padding: 5px 3px;\n            border-bottom: 1px solid rgba(0,0,0,0.05);\n        }\n\n        tbody tr:nth-child(even) {\n            background-color: rgba(0,0,0,0.02);\n        }\n\n        tbody tr:hover {\n            background-color: rgba(0,0,0,0.04);\n            transition: background-color 0.2s ease;\n        }\n\n        @media screen and (max-width: 768px) {\n            .article-container {\n                padding: 0 5px;\n            }\n\n            .article-content {\n                padding: 5px 6px;\n                font-size: 13px;\n            }\n\n            .section-title {\n                font-size: 13px;\n            }\n\n            .stat-item {\n                min-width: 60px;\n            }\n\n            .stat-label {\n                font-size: 9px;\n            }\n\n            .stat-value {\n                font-size: 11px;\n            }\n\n            table {\n                font-size: 10px;\n                min-width: 260px;\n            }\n\n            th, td {\n                padding: 4px 2px;\n            }\n        }\n    </style>\n</head>\n<body mpa-version=\"11.8.2\" mpa-extension-id=\"ibefaeehajgcpooopoegkifhgecigeeg\">\n    <div class=\"article-container\">\n        <!-- 文章内容 -->\n        <main class=\"article-content\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <div class=\"section-title\">" + _0x4fec83 + "年" + _0x38641a + "月话费统计</div>\n            \n            <!-- 今日统计部分 -->\n            <div class=\"stats-box today-stats\">\n                <div class=\"section-title\">" + _0x38641a + "月" + _0x56223e.getDate() + "日今日统计</div>\n                <div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日金豆</div>\n                        <div class=\"stat-value\">" + _0x5edc22 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日抽奖</div>\n                        <div class=\"stat-value\">" + _0x3f260e + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日权益</div>\n                        <div class=\"stat-value\">" + _0x4d4010 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日星播客</div>\n                        <div class=\"stat-value\">" + _0x3db503 + "</div>\n                    </div>\n                    <div class=\"stat-item total-stat\">\n                        <div class=\"stat-label\">今日总计</div>\n                        <div class=\"stat-value\">" + _0x17f10e + "</div>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- 今日中奖记录表格 -->\n            <div>\n                <div class=\"section-title\">今日中奖记录明细</div>\n                <div class=\"table-container\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>时间</th>\n                                <th>号码</th>\n                                <th>金额</th>\n                                <th>类型</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            " + _0x2e17ad + "\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            \n            <!-- 本月统计部分 -->\n            <div class=\"stats-box month-stats\">\n                <div class=\"section-title\">本月累计统计</div>\n                <div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">金豆</div>\n                        <div class=\"stat-value\">" + _0x455661 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">抽奖</div>\n                        <div class=\"stat-value\">" + _0x57b862 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">权益</div>\n                        <div class=\"stat-value\">" + _0x5c6d19 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">星播客</div>\n                        <div class=\"stat-value\">" + _0x435b1f + "</div>\n                    </div>\n                    <div class=\"stat-item total-stat\">\n                        <div class=\"stat-label\">本月总计</div>\n                        <div class=\"stat-value\">" + _0x1233d1 + "</div>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- 本月明细表格 -->\n            <div>\n                <div class=\"section-title\">账号明细统计</div>\n                <div class=\"table-container\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>号码</th>\n                                <th>金豆</th>\n                                <th>抽奖</th>\n                                <th>权益</th>\n                                <th>星播客</th>\n                                <th>合计</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            " + _0x144c3c + "\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </main>\n    </div>\n</body>\n</html>";
}
async function _0x564bb8() {
  _0x5e6672.forEach(_0x30a2a4 => {
    _0x30a2a4.sort((_0x3165ae, _0x3d04b3) => _0x3165ae[0] - _0x3d04b3[0] || _0x3165ae[4] - _0x3d04b3[4]);
  });
  Object.values(_0x49c9a5).forEach(_0x5b9f95 => {
    _0x5b9f95.sort((_0x4e660c, _0x687257) => _0x4e660c[0] - _0x687257[0] || _0x4e660c[4] - _0x687257[4]);
  });
  Object.values(_0x1ab55b).forEach(_0x6eb3c3 => {
    _0x6eb3c3.sort((_0xf835e5, _0x1b4f67) => _0xf835e5[0] - _0x1b4f67[0] || _0xf835e5[4] - _0x1b4f67[4]);
  });
  _0x5e6672.forEach((_0x7ec663, _0x6361d6) => {
    if (_0x7ec663.length === 0) {
      return;
    }
    _0x7ec663.forEach(_0x4c380f => {});
  });
  Object.entries(_0x49c9a5).forEach(([_0x29b095, _0x3482a6], _0x3d77cb) => {
    _0x3482a6.forEach(_0x16008b => {});
  });
  let _0x3f84a4 = 0;
  Object.entries(_0x1ab55b).forEach(([_0x537db1, _0x3d932d], _0x540c68) => {
    const _0x4ada11 = _0x3d932d.reduce((_0x37993b, _0xd730e) => _0x37993b + _0xd730e[5], 0);
    _0x3f84a4 += _0x4ada11;
    _0x3d932d.forEach(_0x1b00d2 => {});
  });
  console.log("\n" + "=".repeat(60) + "\n最终汇总");
  const _0x37cf94 = _0x4c1c91 ? _0x4c1c91.split("\n").length : 0;
  console.log("• 总账号数：" + _0x37cf94);
  console.log("• 成功账号：" + Object.keys(_0x49c9a5).length + "个");
  console.log("• 总金额：" + _0x3f84a4.toFixed(2) + "元");
  console.log("" + "=".repeat(60));
  _0x59beb6 = _0x5bd725();
  const _0x254943 = _0x4fec83 + "年" + _0x38641a + "月" + _0x56223e.getDate() + "日电信话费统计",
    _0x1bd786 = _0x38641a + "月" + _0x56223e.getDate() + "日电信话费统计",
    _0x59c4ed = await _0xb4d8cb(_0x254943, _0x1bd786, _0x59beb6);
  if (_0x59c4ed.success) {
    console.log("推送通知已发送");
  } else {
    console.log("推送失败: " + _0x59c4ed.msg);
  }
}
function _0x675661(_0x38c930) {
  const _0x5d220f = _0x368fae.createCipheriv("des-ede3-cbc", _0x4cfb20, _0x14d081);
  let _0x37f9f9 = _0x5d220f.update(_0x38c930, "utf8", "hex");
  _0x37f9f9 += _0x5d220f.final("hex");
  return _0x37f9f9;
}
function _0x5734ac(_0x140e1b) {
  const _0x14db0a = _0x368fae.createDecipheriv("des-ede3-cbc", _0x4cfb20, _0x14d081);
  let _0x453eeb = _0x14db0a.update(_0x140e1b, "hex", "utf8");
  _0x453eeb += _0x14db0a.final("utf8");
  return _0x453eeb;
}
function _0xfd7bf2(_0xb9aaf1) {
  const _0x2e0999 = _0x368fae.createPublicKey(_0x2e4dd7),
    _0x41b52e = _0x368fae.publicEncrypt({
      key: _0x2e0999,
      padding: _0x368fae.constants.RSA_PKCS1_PADDING
    }, Buffer.from(_0xb9aaf1));
  return _0x41b52e.toString("base64");
}
function _0x1919a1(_0x21f006) {
  const _0x5cb188 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
    _0x32e331 = "-----BEGIN PUBLIC KEY-----\n" + _0x5cb188 + "\n-----END PUBLIC KEY-----",
    _0x8d53d4 = _0x368fae.createPublicKey(_0x32e331),
    _0x3398b4 = _0x8d53d4.asymmetricKeyDetails.modulusLength / 8,
    _0x5d31b0 = _0x3398b4 - 11,
    _0x3321cd = Buffer.from(_0x21f006, "utf8"),
    _0xcb3762 = [];
  for (let _0x366bdd = 0; _0x366bdd < _0x3321cd.length; _0x366bdd += _0x5d31b0) {
    const _0x4cd9ae = _0x3321cd.slice(_0x366bdd, _0x366bdd + _0x5d31b0),
      _0x2117fc = _0x368fae.publicEncrypt({
        key: _0x8d53d4,
        padding: _0x368fae.constants.RSA_PKCS1_PADDING
      }, _0x4cd9ae);
    _0xcb3762.push(_0x2117fc);
  }
  return Buffer.concat(_0xcb3762).toString("base64");
}
function _0x22bb16(_0x3cef14) {
  const _0x379fbb = _0x368fae.createPublicKey(_0x533072),
    _0x37efa3 = _0x379fbb.asymmetricKeyDetails.modulusLength / 8,
    _0x3af60c = _0x37efa3 - 11;
  const _0x3de879 = Buffer.from(_0x3cef14, "utf8");
  let _0x3762c3 = Buffer.alloc(0);
  for (let _0x397d14 = 0; _0x397d14 < _0x3de879.length; _0x397d14 += _0x3af60c) {
    const _0x5357e4 = _0x3de879.slice(_0x397d14, _0x397d14 + _0x3af60c),
      _0x5909a4 = _0x368fae.publicEncrypt({
        key: _0x379fbb,
        padding: _0x368fae.constants.RSA_PKCS1_PADDING
      }, _0x5357e4);
    _0x3762c3 = Buffer.concat([_0x3762c3, _0x5909a4]);
  }
  return _0x3762c3.toString("hex");
}
function _0xed3167(_0x3f2b36) {
  return _0x3f2b36.split("").map(_0x2b2486 => String.fromCharCode(_0x2b2486.charCodeAt(0) + 2)).join("");
}
function _0x34d746(_0x4d34e9) {
  const _0x1d8415 = Buffer.from("34d7cb0bcdf07523"),
    _0x6ffe31 = _0x368fae.createCipheriv("aes-128-ecb", _0x1d8415, null);
  _0x6ffe31.setAutoPadding(true);
  let _0x4a737c = _0x6ffe31.update(_0x4d34e9, "utf8", "hex");
  _0x4a737c += _0x6ffe31.final("hex");
  return _0x4a737c;
}
async function _0x4d41e0(_0x10bdfa, _0x1f79c7) {
  const _0x3cdb0c = "abcdef0123456789";
  const _0x2bb1ae = _0x1321b0 => Array.from({
    length: _0x1321b0
  }, () => _0x3cdb0c[Math.floor(Math.random() * _0x3cdb0c.length)]).join("");
  const _0x56e08b = [_0x2bb1ae(8), _0x2bb1ae(4), "4" + _0x2bb1ae(3), _0x2bb1ae(4), _0x2bb1ae(12)],
    _0x1a0872 = _0x1a7a78(new Date(), "yyyyMMddHHmmss"),
    _0x18ff94 = "iPhone 14 15.4." + _0x56e08b[0] + _0x56e08b[1] + _0x10bdfa + _0x1a0872 + _0x1f79c7.slice(0, 6) + "0$$$0.";
  try {
    const _0x14483f = await _0x1d3c6b.post("https://appgologin.189.cn:9031/login/client/userLoginNormal", {
        headerInfos: {
          code: "userLoginNormal",
          timestamp: _0x1a0872,
          broadAccount: "",
          broadToken: "",
          clientType: "#11.3.0#channel50#iPhone 14 Pro Max#",
          shopId: "20002",
          source: "110003",
          sourcePassword: "Sid98s",
          token: "",
          userLoginName: _0xed3167(_0x10bdfa)
        },
        content: {
          attach: "test",
          fieldData: {
            loginType: "4",
            accountType: "",
            loginAuthCipherAsymmertric: _0xfd7bf2(_0x18ff94),
            deviceUid: "" + _0x56e08b[0] + _0x56e08b[1] + _0x56e08b[2],
            phoneNum: _0xed3167(_0x10bdfa),
            isChinatelecom: "0",
            systemVersion: "15.4.0",
            authentication: _0xed3167(_0x1f79c7)
          }
        }
      }),
      _0x135705 = _0x14483f.data.responseData?.["data"] || {},
      _0x4d2afd = _0x135705.loginSuccessResult;
    if (_0x4d2afd) {
      _0x555e60[_0x10bdfa] = _0x4d2afd;
      await _0x35cb75.writeFile(_0x230641, JSON.stringify(_0x555e60, null, 2));
      return await _0x550c13(_0x10bdfa, _0x4d2afd.userId, _0x4d2afd.token);
    }
    return false;
  } catch (_0x55d72) {
    console.log(_0x10bdfa + " 登录失败: " + _0x55d72.message);
    return false;
  }
}
async function _0x550c13(_0x142782, _0x3563c8, _0x53b8ee) {
  try {
    const _0x5989a1 = _0x1a7a78(new Date(), "yyyyMMddHHmmss"),
      _0x384037 = _0x675661(_0x3563c8),
      _0x2116c0 = "<Request>\n    <HeaderInfos>\n        <Code>getSingle</Code>\n        <Timestamp>" + _0x5989a1 + "</Timestamp>\n        <BroadAccount></BroadAccount>\n        <BroadToken></BroadToken>\n        <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n        <ShopId>20002</ShopId>\n        <Source>110003</Source>\n        <SourcePassword>Sid98s</SourcePassword>\n        <Token>" + _0x53b8ee + "</Token>\n        <UserLoginName>" + _0x142782 + "</UserLoginName>\n    </HeaderInfos>\n    <Content>\n        <Attach>test</Attach>\n        <FieldData>\n            <TargetId>" + _0x384037 + "</TargetId>\n            <Url>4a6862274835b451</Url>\n        </FieldData>\n    </Content>\n</Request>",
      _0x41f95b = await _0x1d3c6b.post("https://appgologin.189.cn:9031/map/clientXML", _0x2116c0, {
        headers: {
          "User-Agent": "CtClient;10.4.1;Android;13;22081212C;NTQzNzgx!#!MTgwNTg5",
          "Content-Type": "application/xml"
        }
      }),
      _0x232c64 = _0x41f95b.data.match(/<Ticket>(.*?)<\/Ticket>/);
    return _0x232c64 ? _0x5734ac(_0x232c64[1]) : false;
  } catch (_0x121335) {
    console.log(_0x142782 + " 获取ticket失败: " + _0x121335.message);
    return false;
  }
}
async function _0x5eec9b(_0x8ea659, _0x5328c7) {
  try {
    const _0x6071ca = await _0x1d3c6b.get("https://xbk.189.cn/xbkapi/api/auth/jump", {
        params: {
          userID: _0x5328c7,
          version: "9.3.3",
          type: "room",
          l: "renwu"
        },
        maxRedirects: 0,
        validateStatus: _0xa884a6 => _0xa884a6 >= 300 && _0xa884a6 < 400
      }),
      _0xd1294 = _0x6071ca.headers.location;
    if (!_0xd1294) {
      return null;
    }
    const _0x32ff8a = new _0x287a91(new _0x322d1e(_0xd1294).search);
    return _0x32ff8a.get("usercode") || null;
  } catch (_0x484c7b) {
    console.error(_0x8ea659 + " 获取 UserCode 失败:", _0x484c7b.message);
    return null;
  }
}
async function _0x402fa8(_0x3fe406, _0x506de1) {
  try {
    const _0x1117b1 = "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
      _0x4d12c1 = {
        usercode: _0x506de1
      };
    const _0x50fd3d = await _0x1d3c6b.post(_0x1117b1, new _0x287a91(_0x4d12c1));
    return _0x50fd3d.data?.["data"]?.["token"] || null;
  } catch (_0x416791) {
    console.log(_0x3fe406 + " 获取usertoken失败: " + _0x416791.message);
    return null;
  }
}
async function _0x948ac5(_0x56f753, _0x13be0e) {
  try {
    const _0x31aaf8 = "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=",
      _0x356330 = await _0x1d3c6b.get(_0x31aaf8, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: "Bearer " + _0x1919a1(_0x13be0e)
        }
      }),
      _0x518d1f = _0x356330.data?.["data"] || [];
    for (const _0x47b4b3 of _0x518d1f) {
      if (_0x47b4b3.title && _0x47b4b3.title.includes("话费")) {
        await _0x2240cc(_0x47b4b3.win_time || "", _0x47b4b3.title, _0x56f753, "星播客");
      }
    }
    console.log(_0x56f753.slice(0, 3) + "****" + _0x56f753.slice(-4) + " 星播客查询完毕");
  } catch (_0x131ab7) {
    console.log(_0x56f753 + " 星播客查询失败: " + _0x131ab7.message);
  }
}
async function _0x197ca9(_0x367aac, _0x553638) {
  try {
    const _0x1bb598 = {
      ticket: _0x553638
    };
    const _0x35ea82 = {
      params: _0x1bb598
    };
    const _0x5ad1e9 = await _0x1d3c6b.get("https://wappark.189.cn/jt-sign/ssoHomLoginForBill", _0x35ea82),
      _0x1af0be = _0x5ad1e9.data,
      _0x3e2ed3 = _0x1af0be.accId,
      _0x54c07c = _0x1af0be.sign;
    if (!_0x3e2ed3 || !_0x54c07c) {
      return;
    }
    const _0x8beb76 = await _0x142fb2(_0x367aac, _0x3e2ed3);
    await _0x63c7b(_0x367aac, _0x8beb76, "金豆抢兑");
    console.log(_0x367aac.slice(0, 3) + "****" + _0x367aac.slice(-4) + " 金豆兑换查询完毕");
    const _0xc1a7f3 = await _0x27de18(_0x367aac, _0x3e2ed3);
    await _0x63c7b(_0x367aac, _0xc1a7f3, "等级权益");
    console.log(_0x367aac.slice(0, 3) + "****" + _0x367aac.slice(-4) + " 等级权益查询完毕");
    const _0x2f09b6 = await _0x365ec9(_0x367aac, _0x3e2ed3, _0x54c07c);
    for (const _0x15288e of _0x2f09b6) {
      const _0x21b883 = _0x15288e.winTitle || "";
      if (_0x21b883.includes("话费")) {
        await _0x2240cc(_0x15288e.createdDate || "", _0x21b883, _0x367aac, "各种抽奖");
      }
    }
    console.log(_0x367aac.slice(0, 3) + "****" + _0x367aac.slice(-4) + " 抽奖查询完毕");
  } catch (_0x3f5c55) {
    console.log(_0x367aac + " 登录金豆商城失败: " + _0x3f5c55.message);
  }
}
async function _0x63c7b(_0x3391bf, _0x16dc6a, _0x582758) {
  for (const _0x28b2c3 of _0x16dc6a) {
    const _0x4d9add = _0x28b2c3.title || "";
    _0x4d9add.includes("话费") && (await _0x2240cc(_0x28b2c3.createdDate || "", _0x4d9add, _0x3391bf, _0x582758));
  }
}
async function _0x142fb2(_0x565ad5, _0x5792a1) {
  try {
    const _0x297564 = "https://wappark.189.cn/jt-sign/paradise/getCoinMallExchangetRecords",
      _0x18b064 = {
        accId: _0x5792a1,
        page: 0,
        size: 150
      };
    const _0x52b6d0 = _0x22bb16(JSON.stringify(_0x18b064)),
      _0x37bc7c = {
        para: _0x52b6d0
      };
    const _0x437189 = await _0x1d3c6b.post(_0x297564, _0x37bc7c);
    return _0x437189.data?.["data"] || [];
  } catch (_0xb525ae) {
    console.log(_0x565ad5 + " 获取金豆记录失败: " + _0xb525ae.message);
    return [];
  }
}
async function _0x27de18(_0x101165, _0x3971ed) {
  try {
    const _0x5b9029 = "https://wappark.189.cn/jt-sign/paradise/getRightsExchangetRecords",
      _0xfc1612 = {
        accId: _0x3971ed,
        page: 0,
        size: 20
      };
    const _0x4d4dd8 = _0x22bb16(JSON.stringify(_0xfc1612)),
      _0x3a4568 = {
        para: _0x4d4dd8
      };
    const _0x453d30 = await _0x1d3c6b.post(_0x5b9029, _0x3a4568);
    return _0x453d30.data?.["data"] || [];
  } catch (_0xec8704) {
    console.log(_0x101165 + " 获取权益记录失败: " + _0xec8704.message);
    return [];
  }
}
async function _0x365ec9(_0x472b49, _0x29ae82, _0xf4dd54) {
  try {
    _0x1d3c6b.defaults.headers.common.sign = _0xf4dd54;
    const _0x5df523 = "https://wappark.189.cn/jt-sign/webSign/getPrizeRecords",
      _0x5eff9d = {
        phone: _0x29ae82,
        page: 0,
        size: 150
      };
    const _0x575aaf = _0x22bb16(JSON.stringify(_0x5eff9d)),
      _0x4a9363 = {
        para: _0x575aaf
      };
    const _0x1ff898 = await _0x1d3c6b.post(_0x5df523, _0x4a9363);
    return _0x1ff898.data?.["data"] || [];
  } catch (_0xde8c99) {
    console.log(_0x472b49 + " 获取抽奖记录失败: " + _0xde8c99.message);
    return [];
  }
}
async function _0x5094c6(_0x512a13) {
  return new Promise(_0x57b189 => setTimeout(_0x57b189, _0x512a13));
}
async function _0x18b47d(_0x2fff33, _0x66dc43) {
  let _0x800055 = false;
  try {
    const _0x4e7fb5 = await _0x35cb75.readFile(_0x230641, "utf8");
    _0x555e60 = JSON.parse(_0x4e7fb5);
  } catch (_0xeac8b0) {
    _0x555e60 = {};
  }
  _0x2fff33 in _0x555e60 && (_0x800055 = await _0x550c13(_0x2fff33, _0x555e60[_0x2fff33].userId, _0x555e60[_0x2fff33].token));
  if (!_0x800055) {
    _0x800055 = await _0x4d41e0(_0x2fff33, _0x66dc43);
  }
  if (_0x800055) {
    const _0x30543c = await _0x5eec9b(_0x2fff33, _0x800055);
    if (_0x30543c) {
      const _0x511761 = await _0x402fa8(_0x2fff33, _0x30543c);
      if (_0x511761) {
        await _0x948ac5(_0x2fff33, _0x511761);
        console.log("账号 " + _0x2fff33.slice(0, 3) + "****" + _0x2fff33.slice(-4) + " 查询星播客完成，等待10秒后继续...");
        await _0x5094c6(10000);
      }
    }
    await _0x197ca9(_0x2fff33, _0x800055);
  } else {
    console.log(_0x2fff33.slice(0, 3) + "****" + _0x2fff33.slice(-4) + " 登录失败");
  }
}
function _0x5a9ce0() {
  const _0x5c8101 = new Date("2025-12-10"),
    _0x1eff6e = new Date();
  if (_0x1eff6e > _0x5c8101) {
    return false;
  }
  return true;
}
async function _0x10bd9a() {
  console.log("开始执行电信话费统计...");
  if (!_0x5a9ce0()) {
    return;
  }
  const _0x4e127d = process.env.WXPUSHER_APP_TOKEN || "";
  const _0x47fb24 = process.env.WXPUSHER_UID || "";
  if (!_0x4e127d || !_0x47fb24) {
    console.log("⚠️  请配置WXPUSHER，否则不进行推送");
  }
  try {
    const _0x4303ad = await _0x35cb75.readFile(_0x230641, "utf8");
    _0x555e60 = JSON.parse(_0x4303ad);
  } catch (_0x48ecba) {
    _0x555e60 = {};
  }
  const _0xa1c593 = _0x4c1c91 ? _0x4c1c91.split("&") : [],
    _0x36ee4c = _0xa1c593.filter(_0x3f926d => _0x3f926d.includes("#")).map(_0x5f0d96 => {
      const [_0x273622, _0x199ca7] = _0x5f0d96.split("#");
      return _0x18b47d(_0x273622, _0x199ca7);
    });
  await Promise.all(_0x36ee4c);
  await _0x564bb8();
}
require.main === module && _0x10bd9a().catch(_0x1cf803 => {
  console.error("脚本执行失败:", _0x1cf803);
  process.exit(1);
});