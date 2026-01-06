//Tue Jan 06 2026 03:36:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const originalLog = console.log;
console.log = function (..._0x1f3109) {
  const _0x10685a = new Date();
  const _0x3ac915 = [_0x10685a.getFullYear(), String(_0x10685a.getMonth() + 1).padStart(2, "0"), String(_0x10685a.getDate()).padStart(2, "0")].join("-") + " " + [String(_0x10685a.getHours()).padStart(2, "0"), String(_0x10685a.getMinutes()).padStart(2, "0"), String(_0x10685a.getSeconds()).padStart(2, "0")].join(":");
  originalLog("[" + _0x3ac915 + "] " + _0x1f3109.map(String).join(" "));
};
async function validateLkey() {
  try {
    const _0x435e96 = {
      timeout: 10000
    };
    const _0x19d176 = await axios.get("https://gitee.com/xingxing666666/log/raw/master/Lkey.log", _0x435e96),
      _0x12f3fd = _0x19d176.data;
    let _0x4d1234 = "";
    if (_0x12f3fd.includes("Lkey=")) {
      _0x4d1234 = _0x12f3fd.split("Lkey=")[1].split("\n")[0].trim();
    } else {
      _0x4d1234 = _0x12f3fd.trim();
    }
    const _0x48a224 = process.env.Lkey;
    if (!_0x48a224 || _0x48a224 !== _0x4d1234) {
      console.log("❌ 未设置环境变量Lkey或Lkey的值不正确");
      console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
      console.log("📧 或者联系作者获取有效的Lkey");
      return false;
    }
    console.log("✅ Lkey验证通过");
    return true;
  } catch (_0x4cf5e1) {
    console.error("❌ 获取Lkey失败:", _0x4cf5e1.message);
    console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
    console.log("📧 或者联系作者获取有效的Lkey");
    return false;
  }
}
const CryptoJS = require("crypto-js"),
  crypto = require("crypto"),
  axios = require("axios").default;
const fs = require("fs"),
  JSEncrypt = require("node-jsencrypt");
let tool_pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const tool_decrypt = new JSEncrypt(),
  tool_mySetTimeout = setTimeout.bind(globalThis);
function encrypt_req(_0xa9d4e2, _0x1b6060, _0x1f7095) {
  var _0x26f1f6 = CryptoJS.enc.Utf8.parse(_0x1f7095),
    _0x553a3e = CryptoJS.enc.Utf8.parse(_0xa9d4e2),
    _0x247ccf = CryptoJS.TripleDES.encrypt(_0x26f1f6, _0x553a3e, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(_0x1b6060)
    });
  return _0x247ccf.ciphertext.toString();
}
function decrypt_req(_0x37b6a8, _0x317c8b, _0x5e1514) {
  var _0x101df7 = CryptoJS.enc.Utf8.parse(_0x37b6a8);
  var _0x35508f = CryptoJS.enc.Hex.parse(_0x5e1514);
  var _0x5e1514 = CryptoJS.enc.Base64.stringify(_0x35508f);
  var _0x320360 = CryptoJS.TripleDES.decrypt(_0x5e1514, _0x101df7, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x317c8b)
  });
  return CryptoJS.enc.Utf8.stringify(_0x320360).toString();
}
function encrypt_aes(_0xe4b01b, _0x4ea30a = "34d7cb0bcdf07523") {
  typeof _0xe4b01b != "string" && (_0xe4b01b = JSON.stringify(_0xe4b01b));
  var _0x38b544 = CryptoJS.enc.Utf8.parse(_0x4ea30a);
  var _0x277062 = CryptoJS.enc.Utf8.parse(_0xe4b01b);
  return CryptoJS.AES.encrypt(_0x277062, _0x38b544, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).ciphertext.toString();
}
function encrypt_aes_base64(_0x435a96, _0x12a278 = "34d7cb0bcdf07523") {
  typeof _0x435a96 != "string" && (_0x435a96 = JSON.stringify(_0x435a96));
  var _0x1f3c60 = CryptoJS.enc.Utf8.parse(_0x12a278),
    _0x1627d5 = CryptoJS.enc.Utf8.parse(_0x435a96);
  return CryptoJS.AES.encrypt(_0x1627d5, _0x1f3c60, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}
function encrypt_rsa_hex(_0x122c55) {
  const _0x292ea8 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6\nJGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65\ndU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORc\nAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----",
    _0x6f260c = crypto.createPublicKey(_0x292ea8);
  if (typeof _0x122c55 != "string") {
    _0x122c55 = JSON.stringify(_0x122c55);
  }
  let _0x446da5 = _0x122c55;
  let _0x178f2b = "";
  for (let _0x567c58 = 0; _0x567c58 < Math.ceil(_0x446da5.length / 32); _0x567c58++) {
    let _0x4c50fa;
    if (_0x567c58 == 0) {
      _0x4c50fa = _0x446da5.substring(0, 32);
    } else {
      _0x567c58 == Math.ceil(_0x446da5.length / 32) - 1 ? _0x4c50fa = _0x446da5.substring(32 * _0x567c58) : _0x4c50fa = _0x446da5.substring(32 * _0x567c58, 32 * (_0x567c58 + 1));
    }
    _0x178f2b += crypto.publicEncrypt({
      key: _0x6f260c,
      padding: crypto.constants.RSA_PKCS1_PADDING
    }, Buffer.from(_0x4c50fa)).toString("hex");
  }
  return _0x178f2b;
}
function TIMEstamp() {
  let _0x5b5771 = new Date();
  var _0x418ef1 = _0x5b5771.getFullYear();
  var _0xa0a8fd = _0x5b5771.getMonth() + 1,
    _0x391f00 = _0x5b5771.getDate(),
    _0x348247 = _0x5b5771.getHours(),
    _0x518719 = _0x5b5771.getMinutes(),
    _0x47620a = _0x5b5771.getSeconds();
  _0xa0a8fd = _0xa0a8fd < 10 ? "0" + _0xa0a8fd : _0xa0a8fd;
  _0x391f00 = _0x391f00 < 10 ? "0" + _0x391f00 : _0x391f00;
  _0x348247 = _0x348247 < 10 ? "0" + _0x348247 : _0x348247;
  _0x518719 = _0x518719 < 10 ? "0" + _0x518719 : _0x518719;
  _0x47620a = _0x47620a < 10 ? "0" + _0x47620a : _0x47620a;
  return _0x418ef1 + "" + _0xa0a8fd + "" + _0x391f00 + "" + _0x348247 + "" + _0x518719 + "" + _0x47620a;
}
function envtime(_0x41b4c6, _0x2a1693 = null) {
  const _0x14f3f9 = _0x2a1693 ? new Date(_0x2a1693) : new Date();
  let _0x30ff60 = {
    "M+": _0x14f3f9.getMonth() + 1,
    "d+": _0x14f3f9.getDate(),
    "H+": _0x14f3f9.getHours(),
    "m+": _0x14f3f9.getMinutes(),
    "s+": _0x14f3f9.getSeconds(),
    "q+": Math.floor((_0x14f3f9.getMonth() + 3) / 3),
    S: _0x14f3f9.getMilliseconds()
  };
  if (/(y+)/.test(_0x41b4c6)) {
    _0x41b4c6 = _0x41b4c6.replace(RegExp.$1, (_0x14f3f9.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let _0x4b9039 in _0x30ff60) {
    if (new RegExp("(" + _0x4b9039 + ")").test(_0x41b4c6)) {
      _0x41b4c6 = _0x41b4c6.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x30ff60[_0x4b9039] : ("00" + _0x30ff60[_0x4b9039]).substr(("" + _0x30ff60[_0x4b9039]).length));
    }
  }
  return _0x41b4c6;
}
function maskPhone(_0x28d8b5) {
  return _0x28d8b5.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3");
}
function wait(_0x326dca) {
  return new Promise(function (_0x5baabe) {
    tool_mySetTimeout(_0x5baabe, _0x326dca);
  });
}
function TIMEstamp1() {
  let _0x54b86c = new Date();
  var _0x381ca3 = _0x54b86c.getFullYear(),
    _0x10aaf5 = _0x54b86c.getMonth() + 1,
    _0x4bb5e9 = _0x54b86c.getDate(),
    _0x292cb4 = _0x54b86c.getHours();
  var _0x3a395c = _0x54b86c.getMinutes();
  var _0x47fe5e = _0x54b86c.getSeconds();
  _0x10aaf5 = _0x10aaf5 < 10 ? "0" + _0x10aaf5 : _0x10aaf5;
  _0x4bb5e9 = _0x4bb5e9 < 10 ? "0" + _0x4bb5e9 : _0x4bb5e9;
  _0x292cb4 = _0x292cb4 < 10 ? "0" + _0x292cb4 : _0x292cb4;
  _0x3a395c = _0x3a395c < 10 ? "0" + _0x3a395c : _0x3a395c;
  _0x47fe5e = _0x47fe5e < 10 ? "0" + _0x47fe5e : _0x47fe5e;
  return _0x381ca3 + "-" + _0x10aaf5 + "-" + _0x4bb5e9 + " " + _0x292cb4 + ":" + _0x3a395c + ":" + _0x47fe5e;
}
async function waitt(_0x2c0f1d) {
  const _0x240b59 = Date.now();
  while (Date.now() - _0x240b59 < _0x2c0f1d) {
    await new Promise(_0x2b38d1 => process.nextTick(_0x2b38d1));
  }
}
function randomString(_0x1391c1) {
  var _0x58e383 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    _0x4a7d10 = "";
  for (var _0x1136a3 = _0x1391c1; _0x1136a3 > 0; --_0x1136a3) {
    _0x4a7d10 += _0x58e383[Math.floor(Math.random() * _0x58e383.length)];
  }
  return _0x4a7d10;
}
async function sendMsg(_0xaf497, _0x33aff3, _0x6a3033 = "", _0x56bf3f = "") {
  const _0x3b79d = {
    url: "https://wxpusher.zjiecode.com/api/send/message",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x6a3033,
      content: String(_0xaf497),
      summary: _0x33aff3,
      contentType: 1,
      topicIds: [],
      uids: [_0x56bf3f],
      verifyPayType: "2"
    }
  };
  try {
    await axios(_0x3b79d);
    console.log("Message sent successfully");
  } catch (_0x544d86) {
    console.error("Failed to send message:", _0x544d86);
  }
}
async function loginPhone(_0x7b7065, _0x5ad571, _0x3b0428, _0x13662c = false) {
  try {
    tool_decrypt.setPrivateKey(tool_pubKey);
    let _0x1944d6 = TIMEstamp(),
      _0x2eba34 = randomString(16),
      _0xda462 = tool_decrypt.encrypt("iPhone 14 15.4." + _0x2eba34.substring(0, 12) + _0x7b7065 + _0x1944d6 + _0x5ad571 + "0$$$0."),
      _0x279534 = "";
    for (let _0x34aaf9 of _0x7b7065) {
      if (_0x34aaf9 <= 7) {
        _0x279534 += String(Number(_0x34aaf9) + 2);
      } else {
        if (_0x34aaf9 == 8) {
          _0x279534 += ":";
        } else {
          _0x34aaf9 == 9 && (_0x279534 += ";");
        }
      }
    }
    const _0x4c2cc5 = {
      code: "userLoginNormal",
      timestamp: _0x1944d6,
      broadAccount: "",
      broadToken: "",
      clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0x7b7065
    };
    const _0x43e2fd = {
      attach: "test",
      fieldData: {}
    };
    _0x43e2fd.fieldData.loginType = "4";
    _0x43e2fd.fieldData.accountType = "";
    _0x43e2fd.fieldData.loginAuthCipherAsymmertric = _0xda462;
    _0x43e2fd.fieldData.deviceUid = _0x2eba34;
    _0x43e2fd.fieldData.phoneNum = _0x279534;
    _0x43e2fd.fieldData.isChinatelecom = "0";
    _0x43e2fd.fieldData.systemVersion = "15.4.0";
    _0x43e2fd.fieldData.authentication = _0x5ad571;
    const _0x1ac9ba = {
      headerInfos: _0x4c2cc5,
      content: _0x43e2fd
    };
    let _0x131295 = _0x1ac9ba;
    if (!_0x3b0428 || _0x13662c) {
      const _0x37c04a = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0x131295
      };
      let _0x22faab = await axios(_0x37c04a);
      try {
        const _0xa4f13f = {
          ..._0x22faab.data.responseData.data.loginSuccessResult
        };
        _0x3b0428 = _0xa4f13f;
      } catch (_0x155e46) {
        return false;
      }
    }
    const _0xbca57f = {
      ..._0x3b0428
    };
    let _0x27648e = _0xbca57f,
      _0xa0ea04 = _0x3b0428.token,
      _0x335b99 = _0x3b0428.userId;
    _0x1944d6 = TIMEstamp();
    _0x131295 = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + _0x1944d6 + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0xa0ea04 + "</Token>\n                <UserLoginName>" + _0x7b7065 + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x335b99) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>";
    const _0x3f1651 = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0x131295,
      headers: {}
    };
    _0x3f1651.headers["Content-Type"] = "application/xml;charset=utf-8";
    options = _0x3f1651;
    let _0x9f237a = await axios(options);
    if (String(_0x9f237a.data).includes("过期") || String(_0x9f237a.data).includes("校验错误")) {
      return await loginPhone(_0x7b7065, _0x5ad571, _0x3b0428, true);
    }
    let _0x1a41e7 = _0x9f237a.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x12dc4d = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x1a41e7);
    _0x27648e.uid = _0x12dc4d;
    _0x27648e.password = _0x5ad571;
    _0x27648e.phoneNbr = _0x7b7065;
    return _0x27648e;
  } catch (_0x52d0b1) {
    return false;
  }
}
async function loginPhoneTwo(_0x32475a, _0x4345ad, _0x1f5104, _0x2a5980 = "./Cache.json", _0x301698 = false) {
  try {
    tool_decrypt.setPrivateKey(tool_pubKey);
    let _0x29cd7b = TIMEstamp(),
      _0x2742e2 = randomString(16),
      _0x1bc0fd = tool_decrypt.encrypt("iPhone 14 15.4." + _0x2742e2.substring(0, 12) + _0x32475a + _0x29cd7b + _0x4345ad + "0$$$0."),
      _0xab267 = "";
    for (let _0x75b11b of _0x32475a) {
      if (_0x75b11b <= 7) {
        _0xab267 += String(Number(_0x75b11b) + 2);
      } else {
        if (_0x75b11b == 8) {
          _0xab267 += ":";
        } else {
          if (_0x75b11b == 9) {
            _0xab267 += ";";
          }
        }
      }
    }
    const _0x48d8cb = {
      code: "userLoginNormal",
      timestamp: _0x29cd7b,
      broadAccount: "",
      broadToken: "",
      clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0x32475a
    };
    const _0xf050bd = {
      attach: "test",
      fieldData: {}
    };
    _0xf050bd.fieldData.loginType = "4";
    _0xf050bd.fieldData.accountType = "";
    _0xf050bd.fieldData.loginAuthCipherAsymmertric = _0x1bc0fd;
    _0xf050bd.fieldData.deviceUid = _0x2742e2;
    _0xf050bd.fieldData.phoneNum = _0xab267;
    _0xf050bd.fieldData.isChinatelecom = "0";
    _0xf050bd.fieldData.systemVersion = "15.4.0";
    _0xf050bd.fieldData.authentication = _0x4345ad;
    const _0x1a8b89 = {
      headerInfos: _0x48d8cb,
      content: _0xf050bd
    };
    let _0x2a1272 = _0x1a8b89;
    if (!_0x1f5104[_0x32475a] || _0x301698) {
      const _0x1998e3 = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0x2a1272
      };
      let _0x2cd2cd = await axios(_0x1998e3);
      const _0x18e974 = {
        ..._0x2cd2cd.data.responseData.data.loginSuccessResult
      };
      _0x1f5104[_0x32475a] = _0x18e974;
      console.log("写入缓存成功");
    }
    const _0x9c72d1 = {
      ..._0x1f5104[_0x32475a]
    };
    let _0x262048 = _0x9c72d1;
    fs.writeFileSync(_0x2a5980, JSON.stringify(_0x1f5104, null, 4), "utf8");
    let _0x378eb8 = _0x1f5104[_0x32475a].token,
      _0x4b3ddb = _0x1f5104[_0x32475a].userId;
    _0x29cd7b = TIMEstamp();
    _0x2a1272 = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + _0x29cd7b + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0x378eb8 + "</Token>\n                <UserLoginName>" + _0x32475a + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x4b3ddb) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>";
    const _0x5a603b = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0x2a1272,
      headers: {}
    };
    _0x5a603b.headers["Content-Type"] = "application/xml;charset=utf-8";
    options = _0x5a603b;
    let _0x592f04 = await axios(options);
    if (String(_0x592f04.data).includes("过期") || String(_0x592f04.data).includes("校验错误")) {
      return await loginPhone(_0x32475a, _0x4345ad, _0x1f5104, _0x2a5980, true);
    }
    let _0x29e358 = _0x592f04.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x5483a9 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x29e358);
    _0x262048.uid = _0x5483a9;
    _0x262048.password = _0x4345ad;
    return _0x262048;
  } catch (_0x548391) {
    console.log(_0x548391);
    return false;
  }
}
axios.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
axios.defaults.withCredentials = false;
const pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  decrypt = new JSEncrypt();
decrypt.setPrivateKey(pubKey);
let userPhone = [];
let Cache = {};
const ChacePath = "Cache.json";
process?.["env"]?.["chinaTelecomAccount"] ? process.env.chinaTelecomAccount.split("&").forEach(_0x53b0a1 => {
  if (_0x53b0a1) {
    const [_0x17088e, _0x312364] = _0x53b0a1.split("#");
    if (_0x17088e && _0x312364) {
      const _0x349eb0 = {
        phone: _0x17088e,
        password: _0x312364
      };
      userPhone.push(_0x349eb0);
    }
  }
}) : (console.log("未找到环境变量，请设置环境变量 chinaTelecomAccount（格式：手机号1#密码1&手机号2#密码2）"), process.exit(1));
async function loginPhoneMain(_0x39e4bd, _0x302312) {
  try {
    const _0x82c466 = TIMEstamp(),
      _0x383c4c = randomString(16),
      _0x2aab7a = decrypt.encrypt("iPhone 14 15.4." + _0x383c4c.substring(0, 12) + _0x39e4bd + _0x82c466 + _0x302312 + "0$$$0.");
    let _0x303a92 = "";
    for (const _0x31650f of _0x39e4bd) {
      if (_0x31650f <= 7) {
        _0x303a92 += String(Number(_0x31650f) + 2);
      } else {
        if (_0x31650f === "8") {
          _0x303a92 += ":";
        } else {
          if (_0x31650f === "9") {
            _0x303a92 += ";";
          }
        }
      }
    }
    if (!Cache[_0x39e4bd]) {
      const _0x501fab = {
        code: "userLoginNormal",
        timestamp: _0x82c466,
        broadAccount: "",
        broadToken: "",
        clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
        shopId: "20002",
        source: "110003",
        sourcePassword: "Sid98s",
        token: "",
        userLoginName: _0x303a92
      };
      const _0x13994f = {
          headerInfos: _0x501fab,
          content: {
            attach: "test",
            fieldData: {
              loginType: "4",
              accountType: "",
              loginAuthCipherAsymmertric: _0x2aab7a,
              deviceUid: _0x383c4c,
              phoneNum: _0x303a92,
              isChinatelecom: "0",
              systemVersion: "15.4.0",
              authentication: Array.from(_0x302312).map(_0x35e62b => String.fromCharCode(_0x35e62b.charCodeAt(0) + 2)).join("")
            }
          }
        },
        _0x174932 = {
          Cookie: ""
        };
      const _0x4c9624 = await axios({
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          method: "POST",
          data: _0x13994f,
          headers: _0x174932
        }),
        _0xef17cf = {
          ..._0x4c9624.data.responseData.data.loginSuccessResult
        };
      Cache[_0x39e4bd] = _0xef17cf;
      fs.writeFileSync(ChacePath, JSON.stringify(Cache), "utf8");
    }
    const _0xfbe452 = Cache[_0x39e4bd].token,
      _0x4ff403 = Cache[_0x39e4bd].userId,
      _0x293d3b = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + TIMEstamp() + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0xfbe452 + "</Token>\n                <UserLoginName>" + _0x39e4bd + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x4ff403) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>",
      _0x143536 = await axios({
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "POST",
        data: _0x293d3b,
        headers: {
          "Content-Type": "application/xml;charset=utf-8",
          Cookie: ""
        }
      });
    if (String(_0x143536.data).includes("过期") || String(_0x143536.data).includes("校验错误")) {
      delete Cache[_0x39e4bd];
      fs.writeFileSync(ChacePath, JSON.stringify(Cache), "utf8");
      return await loginPhoneMain(_0x39e4bd, _0x302312);
    }
    const _0x32b1e7 = _0x143536.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x382469 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x32b1e7),
      _0x9d4ee6 = {
        ...Cache[_0x39e4bd],
        uid: _0x382469,
        password: _0x302312,
        phoneNbr: _0x39e4bd
      };
    return _0x9d4ee6;
  } catch (_0x59326f) {
    console.error("账号 " + maskPhone(_0x39e4bd) + " 登录失败:", _0x59326f.message);
    return false;
  }
}
function aesEcbEncrypt(_0x288cdd, _0x1bef03) {
  if (![16, 24, 32].includes(_0x1bef03.length)) {
    throw new Error("AES密钥长度必须为16/24/32字节");
  }
  const _0xc1ce35 = CryptoJS.enc.Utf8.parse(_0x1bef03),
    _0x99da53 = CryptoJS.AES.encrypt(_0x288cdd, _0xc1ce35, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
  return _0x99da53.toString();
}
async function userLogin(_0x4f9ea0) {
  try {
    const _0xd705d4 = {
      ticket: _0x4f9ea0.uid,
      backUrl: "https%3A%2F%2Fwapact.189.cn%3A9001",
      platformCode: "P201010301",
      loginType: 2
    };
    const _0x13ecce = aesEcbEncrypt(JSON.stringify(_0xd705d4), "telecom_wap_2018"),
      _0x29d2d4 = await axios({
        url: "https://wapact.189.cn:9001/unified/user/login",
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json, text/javascript, */*; q=0.01",
          Cookie: ""
        },
        transformRequest: (_0x1bd271, _0x47cb0f) => {
          const _0x285a56 = _0x47cb0f["Content-Type"]?.["includes"]("application/json");
          return typeof _0x1bd271 === "string" && _0x285a56 ? _0x1bd271 : _0x1bd271;
        },
        data: _0x13ecce
      });
    _0x4f9ea0.Authorization = "Bearer " + _0x29d2d4.data.biz.token;
    await queryInfo(_0x4f9ea0);
  } catch (_0x24a06c) {
    console.error("账号 " + maskPhone(_0x4f9ea0.phoneNbr) + " 统一登录失败:", _0x24a06c.message);
  }
}
async function queryInfo(_0x4fdde1) {
  try {
    const _0x7c1723 = await axios({
      url: "https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable?userType=1&_=" + new Date().valueOf(),
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
        Cookie: "",
        Authorization: _0x4fdde1.Authorization
      }
    });
    await handleLottery(_0x4fdde1, _0x7c1723.data.biz.wzTurntable.code);
  } catch (_0xf55ee6) {
    console.error("账号 " + maskPhone(_0x4fdde1.phoneNbr) + " 查询转盘失败:", _0xf55ee6.message);
  }
}
async function handleLottery(_0x376f5d, _0x859bcc) {
  try {
    const _0x13a8f9 = await axios({
        url: "https://wapact.189.cn:9001/gateway/standQuery/detail/check?activityId=" + _0x859bcc + "&_=" + new Date().valueOf(),
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          Cookie: "",
          Authorization: _0x376f5d.Authorization
        }
      }),
      {
        userMaximum: _0x4ccc24,
        userCount: _0x142330
      } = _0x13a8f9.data.biz.resultInfo,
      _0x3cd92d = _0x4ccc24 - _0x142330;
    console.log("账号 " + maskPhone(_0x376f5d.phoneNbr) + " 金豆转盘可抽奖次数:", _0x3cd92d);
    if (_0x3cd92d > 0) {
      for (let _0xe205e = 0; _0xe205e < _0x3cd92d; _0xe205e++) {
        let _0x5adc1c = 0;
        while (_0x5adc1c < 1) {
          try {
            const _0x31ffb3 = {
              activityId: _0x859bcc
            };
            const _0x1f5541 = await axios({
              url: "https://wapact.189.cn:9001/gateway/golden/api/lottery",
              method: "POST",
              headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
                Cookie: "",
                Authorization: _0x376f5d.Authorization
              },
              data: _0x31ffb3
            });
            console.log("第 " + (_0xe205e + 1) + " 次抽奖结果:", _0x1f5541.data?.["biz"]?.["resultInfo"]?.["title"] || "抽奖失败");
            await waitt(3000);
            break;
          } catch (_0x4a4539) {
            _0x5adc1c++;
            console.error("第 " + (_0xe205e + 1) + " 次抽奖重试:", _0x4a4539.message);
            await waitt(3000);
          }
        }
      }
    }
  } catch (_0x1e96c9) {
    console.error("账号 " + maskPhone(_0x376f5d.phoneNbr) + " 抽奖处理失败:", _0x1e96c9.message);
  }
}
async function ssoHomLogin(_0x59a411) {
  try {
    const _0x7deb77 = await axios({
      url: "https://wappark.189.cn/jt-sign/ssoHomLogin?ticket=" + _0x59a411,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
        Cookie: ""
      }
    });
    return _0x7deb77.data;
  } catch (_0x2cfb30) {
    console.error("SSO登录失败:", _0x2cfb30.message);
    return null;
  }
}
async function webSign(_0x39dd41, _0x4d6cc8) {
  try {
    const _0x1fb4c6 = {
        phone: _0x39dd41.phoneNbr,
        sysType: "",
        date: new Date().getTime()
      },
      _0x1bc637 = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/sign",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x4d6cc8.sign,
          Cookie: ""
        },
        data: {
          encode: encrypt_aes(_0x1fb4c6)
        }
      });
    console.log("账号 " + maskPhone(_0x39dd41.phoneNbr) + " 签到结果:", _0x1bc637.data.data.msg);
  } catch (_0x1d9998) {
    console.error("账号 " + maskPhone(_0x39dd41.phoneNbr) + " 签到失败:", _0x1d9998.message);
  }
}
async function userStatusInfo(_0x2a6472, _0xd40527) {
  try {
    const _0x54365e = {
      phone: _0x2a6472.phoneNbr
    };
    const _0x1caad7 = await axios({
      url: "https://wappark.189.cn/jt-sign/api/home/userStatusInfo",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        sign: _0xd40527.sign,
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x54365e)
      }
    });
    console.log("账号 " + maskPhone(_0x2a6472.phoneNbr) + " 连签7天进度:", _0x1caad7.data.data.signDay);
    if (_0x1caad7.data.data.signDay === "7") {
      console.log("开始领取连签7天奖励");
      await exchangePrize(_0x2a6472, _0xd40527, "7");
    }
  } catch (_0x3a893e) {
    console.error("账号 " + maskPhone(_0x2a6472.phoneNbr) + " 查询连签状态失败:", _0x3a893e.message);
  }
}
async function continueSignDays(_0x5f00a1, _0x328df) {
  try {
    const _0x155e55 = {
      phone: _0x5f00a1.phoneNbr
    };
    const _0x40f64e = await axios({
      url: "https://wappark.189.cn/jt-sign/webSign/continueSignDays",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        sign: _0x328df.sign,
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x155e55)
      }
    });
    console.log("账号 " + maskPhone(_0x5f00a1.phoneNbr) + " 累签天数:", _0x40f64e.data.continueSignDays);
    const _0x4b985b = _0x40f64e.data.continueSignDays;
    (_0x4b985b === "15" || _0x4b985b === "28") && (console.log("开始领取累签" + _0x4b985b + "天奖励"), await waitt(3000), await exchangePrize(_0x5f00a1, _0x328df, _0x4b985b));
  } catch (_0x53a269) {
    console.error("账号 " + maskPhone(_0x5f00a1.phoneNbr) + " 查询累签状态失败:", _0x53a269.message);
  }
}
async function exchangePrize(_0x5b39d7, _0x582a67, _0x2eb3eb) {
  try {
    const _0x2b3388 = {
      phone: _0x5b39d7.phoneNbr,
      type: _0x2eb3eb
    };
    const _0x2c9ef6 = await axios({
      url: "https://wappark.189.cn/jt-sign/webSign/exchangePrize",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        sign: _0x582a67.sign,
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x2b3388)
      }
    });
    console.log("连签" + _0x2eb3eb + "天奖励领取结果:", _0x2c9ef6.data?.["prizeDetail"]?.["biz"]?.["winTitle"] || _0x2c9ef6.data.resoultMsg || _0x2c9ef6.data.msg);
  } catch (_0x46879b) {
    console.error("连签" + _0x2eb3eb + "天奖励领取失败:", _0x46879b.message);
    await waitt(2000);
    await exchangePrize(_0x5b39d7, _0x582a67, _0x2eb3eb);
  }
}
async function getTakList(_0x2962fc, _0x1af015) {
  try {
    const _0x3704c7 = {
      phone: _0x2962fc.phoneNbr,
      shopId: "20001",
      type: "hg_qd_zrwzjd"
    };
    const _0x1727f2 = await axios({
      url: "https://wappark.189.cn/jt-sign/webSign/homepage",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        sign: _0x1af015.sign,
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x3704c7)
      }
    });
    for (const _0x133aa0 of _0x1727f2.data.data.biz.adItems) {
      const {
        taskState: _0x5d9069,
        contentOne: _0x2969bf,
        title: _0x5dde09
      } = _0x133aa0;
      ["0", "1"].includes(_0x5d9069) && _0x2969bf === "18" && (console.log("开始完成任务: " + _0x5dde09), await polymerize(_0x2962fc, _0x1af015, _0x133aa0), await waitt(1500));
    }
  } catch (_0x26d1c2) {
    console.error("账号 " + maskPhone(_0x2962fc.phoneNbr) + " 任务处理失败:", _0x26d1c2.message);
  }
}
async function polymerize(_0x31772b, _0x3668d4, _0x4fe53e) {
  try {
    const _0x1eeb97 = {
      phone: _0x31772b.phoneNbr,
      jobId: _0x4fe53e.taskId
    };
    const _0xa01532 = await axios({
      url: "https://wappark.189.cn/jt-sign/webSign/polymerize",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        sign: _0x3668d4.sign,
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x1eeb97)
      }
    });
    console.log(_0x4fe53e.title + " 完成结果:", _0xa01532.data.resoultMsg);
  } catch (_0x2565f8) {
    console.error(_0x4fe53e.title + " 完成失败:", _0x2565f8.message);
  }
}
async function food(_0x38eec0, _0x3ea508) {
  try {
    const _0x25df5b = {
      phone: _0x38eec0.phoneNbr
    };
    const _0x384d15 = 10;
    for (let _0x16aac3 = 1; _0x16aac3 <= _0x384d15; _0x16aac3++) {
      try {
        const _0xdba93c = await axios({
          url: "https://wappark.189.cn/jt-sign/paradise/food",
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            sign: _0x3ea508.sign,
            Cookie: ""
          },
          data: {
            para: encrypt_rsa_hex(_0x25df5b)
          }
        });
        console.log("第 " + _0x16aac3 + " 次喂食结果:", _0xdba93c.data.resoultMsg);
        if (_0xdba93c.data.resoultMsg === "今天已达到最大喂食次数") {
          console.log("今日喂食次数已达上限");
          break;
        }
        _0x16aac3 < _0x384d15 && (await waitt(1000));
      } catch (_0x301bf3) {
        console.error("第 " + _0x16aac3 + " 次喂食失败:", _0x301bf3.message);
        break;
      }
    }
  } catch (_0x2fd646) {
    console.error("账号 " + maskPhone(_0x38eec0.phoneNbr) + " 喂食功能失败:", _0x2fd646.message);
  }
}
async function month_jml_preCost(_0x185bd4) {
  try {
    const _0x4271f4 = await axios({
      url: "https://wappark.189.cn/jt-sign/short/message/preCost",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        phone: encrypt_aes(_0x185bd4.phoneNbr),
        activityCode: "shortMesssge"
      }
    });
    if (_0x4271f4.data.resoultCode === "0") {
      const _0x19f0a5 = _0x4271f4.data.data.resoultMsg || "领取成功",
        _0x30f644 = _0x4271f4.data.resoultMsg;
      await month_jml_userCost(_0x185bd4, _0x19f0a5, _0x30f644);
      await month_jml_receive(_0x185bd4, _0x30f644);
      await month_jml_getCount(_0x185bd4, _0x30f644);
      await month_jml_refresh(_0x185bd4, _0x30f644);
    }
  } catch (_0x306d3a) {
    console.error("账号 " + maskPhone(_0x185bd4.phoneNbr) + " 每月见面礼处理失败:", _0x306d3a.message);
  }
}
async function month_jml_userCost(_0xc2d3c5, _0x510cc8, _0x5cfcaf) {
  try {
    const _0x4c371c = await axios({
      url: "https://wappark.189.cn/jt-sign/short/message/userCost",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        phone: encrypt_aes(_0xc2d3c5.phoneNbr),
        activityCode: "shortMesssge",
        flag: _0x5cfcaf
      }
    });
    if (_0x4c371c.data.resoultCode === "0") {
      console.log("见面礼" + _0x510cc8 + ":", _0x4c371c.data.data.map(_0x483929 => _0x483929.pizeName));
    }
  } catch (_0x5b726b) {
    console.error("month_jml_userCost 失败:", _0x5b726b.message);
  }
}
async function month_jml_receive(_0x3a4462, _0x4ef1a1) {
  try {
    const _0x408f79 = {
      phone: _0x3a4462.phoneNbr,
      flag: _0x4ef1a1
    };
    const _0x140d65 = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/receive",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x408f79)
      }
    });
    if (_0x140d65.data.code === "0") {
      console.log("领取APP抽奖次数成功");
    } else {
      console.log("领取APP抽奖次数失败: " + _0x140d65.data.msg);
    }
  } catch (_0x5876d8) {
    console.error("month_jml_receive 失败:", _0x5876d8.message);
  }
}
async function month_jml_getCount(_0x3bff94, _0x4d1782) {
  const _0x32396b = [202201, 202202, 202203];
  try {
    const _0x4edcd2 = {
      phone: _0x3bff94.phoneNbr,
      flag: _0x4d1782
    };
    const _0xdb50b3 = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/getCount",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x4edcd2)
      }
    });
    if (_0xdb50b3.data.code === "0") {
      const _0x3913e9 = _0xdb50b3.data.video.map(_0x46e078 => _0x46e078.videoType) || [],
        _0x564ad3 = _0x32396b.filter(_0x380aa8 => !_0x3913e9.includes(_0x380aa8));
      let _0x196b6e = false;
      for (const _0x13ea41 of _0x564ad3) {
        if (_0x196b6e) {
          const _0x35daa2 = Math.floor(Math.random() * 5000) + 3000;
          await waitt(_0x35daa2);
        }
        await month_jml_addVideoCount(_0x3bff94, _0x13ea41, _0x4d1782);
        _0x196b6e = true;
      }
    } else {
      console.log("查询看视频得抽奖机会失败: " + _0xdb50b3.data.msg);
    }
  } catch (_0x3f1263) {
    console.log("month_jml_getCount 失败: " + _0x3f1263.message);
  }
}
async function month_jml_addVideoCount(_0x1b2fe4, _0x14f832, _0x4315e4) {
  try {
    const _0x2c860c = {
      phone: _0x1b2fe4.phoneNbr,
      videoType: _0x14f832,
      flag: _0x4315e4
    };
    const _0x49f90b = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/addVideoCount",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x2c860c)
      }
    });
    _0x49f90b.data.code === "0" ? console.log("看视频" + _0x14f832 + "得抽奖机会成功") : console.log("看视频" + _0x14f832 + "得抽奖次数失败: " + _0x49f90b.data.msg);
  } catch (_0x5504fa) {
    console.log("month_jml_addVideoCount 失败: " + _0x5504fa.message);
  }
}
async function month_jml_refresh(_0x427a98, _0x2a8320) {
  try {
    const _0x3a71c7 = {
      phone: _0x427a98.phoneNbr,
      flag: _0x2a8320
    };
    const _0x18d43e = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/refresh",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x3a71c7)
      }
    });
    if (_0x18d43e.data.rNumber) {
      let _0x3c66f8 = _0x18d43e.data.rNumber || 0;
      console.log("可抽奖" + _0x3c66f8 + "次");
      let _0x2efdd5 = false;
      while (_0x3c66f8-- > 0) {
        if (_0x2efdd5) {
          const _0x534ab4 = Math.floor(Math.random() * 5000) + 5000;
          await waitt(_0x534ab4);
        }
        await month_jml_lotteryRevice(_0x427a98, _0x2a8320);
        _0x2efdd5 = true;
      }
    } else {
      console.log("查询抽奖次数失败");
    }
  } catch (_0x31fbfb) {
    console.log("month_jml_refresh 失败: " + _0x31fbfb.message);
  }
}
async function month_jml_lotteryRevice(_0x344239, _0x3573e1) {
  try {
    const _0x4d84a2 = {
      phone: _0x344239.phoneNbr,
      flag: _0x3573e1
    };
    const _0x59710e = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/lotteryRevice",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x4d84a2)
      }
    });
    _0x59710e.data.code === "0" ? console.log("每月见面礼抽奖结果: " + _0x59710e.data.rname) : console.log("每月见面礼抽奖失败: " + _0x59710e.data.msg);
  } catch (_0x50d375) {
    console.log("month_jml_lotteryRevice 失败: " + _0x50d375.message);
  }
}
async function main(_0x1c78a0, _0xc6c8cd) {
  try {
    const _0x25237d = await loginPhoneMain(_0x1c78a0, _0xc6c8cd);
    if (!_0x25237d) {
      console.log("账号 " + maskPhone(_0x1c78a0) + " 登录失败，跳过后续操作");
      return;
    }
    await userLogin(_0x25237d);
    const _0x3215c3 = await ssoHomLogin(_0x25237d.uid);
    if (_0x3215c3) {
      await webSign(_0x25237d, _0x3215c3);
      await userStatusInfo(_0x25237d, _0x3215c3);
      await waitt(3000);
      await continueSignDays(_0x25237d, _0x3215c3);
      await getTakList(_0x25237d, _0x3215c3);
      await food(_0x25237d, _0x3215c3);
    }
    await waitt(2000);
  } catch (_0x249c52) {
    console.error("账号 " + maskPhone(_0x1c78a0) + " 主流程失败:", _0x249c52.message);
  }
}
async function begin() {
  const _0x44ecb7 = await validateLkey();
  !_0x44ecb7 && (console.log("❌ Lkey验证失败，脚本停止运行"), process.exit(1));
  try {
    Cache = JSON.parse(fs.readFileSync(ChacePath, "utf8"));
  } catch (_0x428128) {
    fs.writeFileSync(ChacePath, JSON.stringify({}), "utf8");
    Cache = {};
  }
  console.log("✅ Lkey验证通过，开始执行任务");
  console.log("📱 共找到" + userPhone.length + "个账号，开始执行任务");
  try {
    for (let _0x4f00ee = 0; _0x4f00ee < userPhone.length; _0x4f00ee++) {
      const _0x1d37cb = userPhone[_0x4f00ee];
      console.log("\n====== 账号[" + (_0x4f00ee + 1) + "] " + maskPhone(_0x1d37cb.phone) + " ======");
      await main(_0x1d37cb.phone, _0x1d37cb.password);
    }
  } catch (_0x23726d) {
    console.error("全局执行错误:", _0x23726d.message);
  } finally {
    process.exit(0);
  }
}
begin();