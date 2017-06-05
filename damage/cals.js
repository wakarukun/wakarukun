function Calc() {
  var hi_st = parseFloat(document.st.hissatsu.value);
  var ta_st = parseFloat(document.st.tairyoku.value);
  var ko_st = parseFloat(document.st.kogeki.value);
  var ha_st = parseFloat(document.st.hayasa.value);
  var hi_zy = 1 + (parseFloat(document.zyuku.hissatsu.value) / 100);
  var ta_zy = 1 + (parseFloat(document.zyuku.tairyoku.value) / 100);
  var ko_zy = 1 + (parseFloat(document.zyuku.kogeki.value) / 100);
  var ha_zy = 1 + (parseFloat(document.zyuku.hayasa.value) / 100);
  var sk1 = document.sk_name.sk_li1.selectedIndex;
  var sk2 = document.sk_name.sk_li2.selectedIndex;
  var sk1_val = document.sk_name.sk_li1.options[sk1].value;
  var sk2_val = document.sk_name.sk_li2.options[sk2].value;
  var syogo = document.syogo.sy_li.selectedIndex;
  var ha_item = document.item.ha_item.selectedIndex;
  var hi_item = document.item.hi_item.selectedIndex;
  var ta_item = document.item.ta_item.selectedIndex;
  var go_item = document.item.good_item.selectedIndex;
  var solo = document.Character.parent.selectedIndex;
  if (solo == 1) {
    var charanum = document.Character.united.selectedIndex;
    var chara = document.Character.united.options[charanum].value;
    var front = document.Character.Front.selectedIndex;
    switch (chara) {
    case "sz":
      if (front == 0) {
        hi_ke = 1.72;
        ta_ke = 1.1;
        ko_ke = 1.12;
        ha_ke = 1.22;
      }
      if (front == 1) {
        hi_ke = 1.65;
        ta_ke = 1.1;
        ko_ke = 1.2;
        ha_ke = 1.2;
      }
      if (front == 2) {
        hi_ke = 1.45;
        ta_ke = 1.1;
        ko_ke = 1.2;
        ha_ke = 1.4;
      }
      if (front == 3) {
        hi_ke = 1.45;
        ta_ke = 1.2;
        ko_ke = 1.4;
        ha_ke = 1.1;
      }
      break;
    case "bm":
      if (front == 0) {
        hi_ke = 1.43;
        ta_ke = 1.4;
        ko_ke = 1.22;
        ha_ke = 1.1;
      }
      if (front == 1) {
        hi_ke = 1.43;
        ta_ke = 1.2;
        ko_ke = 1.31;
        ha_ke = 1.2;
      }
      break;
    case "hs":
      if (front == 0) {
        hi_ke = 1.53;
        ta_ke = 1.1;
        ko_ke = 1.12;
        ha_ke = 1.4;
      }
      if (front == 1) {
        hi_ke = 1.4;
        ta_ke = 1.1;
        ko_ke = 1.32;
        ha_ke = 1.3;
      }
      break;
    case "tb":
      if (front == 0) {
        hi_ke = 1.66;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.1;
      }
      if (front == 1) {
        hi_ke = 1.75;
        ta_ke = 1.1;
        ko_ke = 1.2;
        ha_ke = 1.1;
      }
      break;
    case "ot":
      if (front == 0) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.36;
      }
      if (front == 1) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.40;
      }
      if (front == 2) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.26;
      }
      if (front == 3) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.30;
      }
      if (front == 4) {
        hi_ke = 1.34;
        ta_ke = 1.1;
        ko_ke = 1.31;
        ha_ke = 1.36;
      }
      if (front == 5) {
        hi_ke = 1.34;
        ta_ke = 1.1;
        ko_ke = 1.31;
        ha_ke = 1.40;
      }
      break;
    case "pv":
      hi_ke = 1.52;
      ta_ke = 1.2;
      ko_ke = 1.32;
      ha_ke = 1.1;
      break;
    case "fz":
      if (front == 0) {
        hi_ke = 1.32;
        ta_ke = 1.3;
        ko_ke = 1.12;
        ha_ke = 1.41;
      }
      if (front == 1) {
        hi_ke = 1.32;
        ta_ke = 1.3;
        ko_ke = 1.3;
        ha_ke = 1.21;
      }
      break;
    case "la":
      if (front == 0) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.32;
        ha_ke = 1.21;
      }
      if (front == 1) {
        hi_ke = 1.34;
        ta_ke = 1.2;
        ko_ke = 1.42;
        ha_ke = 1.21;
      }
      break;
    case "sm":
      if (front == 0) {
        hi_ke = 1.32;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.52;
      }
      if (front == 1) {
        hi_ke = 1.32;
        ta_ke = 1.1;
        ko_ke = 1.31;
        ha_ke = 1.43;
      }
      break;
    case "zs":
      if (front == 0) {
        hi_ke = 1.63;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.54;
        ta_ke = 1.1;
        ko_ke = 1.31;
        ha_ke = 1.1;
      }
      break;
    case "lz":
      if (front == 0) {
        hi_ke = 1.33;
        ta_ke = 1.3;
        ko_ke = 1.42;
        ha_ke = 1.1;
      }
      if (front == 1) {
        hi_ke = 1.42;
        ta_ke = 1.1;
        ko_ke = 1.42;
        ha_ke = 1.2;
      }
      break;
    case "tm":
      if (front == 0) {
        hi_ke = 1.56;
        ta_ke = 1.1;
        ko_ke = 1.2;
        ha_ke = 1.3;
      }
      if (front == 1) {
        hi_ke = 1.83;
        ta_ke = 1.1;
        ko_ke = 1.11;
        ha_ke = 1.1;
      }
      break;
    case "sa":
      if (front == 0) {
        hi_ke = 1.44;
        ta_ke = 1.1;
        ko_ke = 1.42;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.54;
        ta_ke = 1.1;
        ko_ke = 1.42;
        ha_ke = 1.1;
      }
      break;
    case "kl":
      if (front == 0) {
        hi_ke = 1.63;
        ta_ke = 1.1;
        ko_ke = 1.21;
        ha_ke = 1.21;
      }
      if (front == 1) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.21;
        ha_ke = 1.32;
      }
      break;
    case "ss":
      if (front == 0) {
        hi_ke = 1.74;
        ta_ke = 1.1;
        ko_ke = 1.1;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.65;
        ta_ke = 1.1;
        ko_ke = 1.1;
        ha_ke = 1.3;
      }
      break;
    case "ps":
      if (front == 0) {
        hi_ke = 1.33;
        ta_ke = 1.2;
        ko_ke = 1.52;
        ha_ke = 1.1;
      }
      if (front == 1) {
        hi_ke = 1.42;
        ta_ke = 1.2;
        ko_ke = 1.43;
        ha_ke = 1.1;
      }
      break;
    case "es":
      hi_ke = 1.43;
      ta_ke = 1.1;
      ko_ke = 1.32;
      ha_ke = 1.3;
      break;
    case "ts":
      if (front == 0) {
        hi_ke = 1.54;
        ta_ke = 1.1;
        ko_ke = 1.31;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.74;
        ta_ke = 1.1;
        ko_ke = 1.21;
        ha_ke = 1.1;
      }
      break;
    case "me":
      if (front == 0) {
        hi_ke = 1.44;
        ta_ke = 1.1;
        ko_ke = 1.4;
        ha_ke = 1.21;
      }
      if (front == 1) {
        hi_ke = 1.52;
        ta_ke = 1.1;
        ko_ke = 1.32;
        ha_ke = 1.21;
      }
      break;
    case "bk":
      if (front == 0) {
        hi_ke = 1.63;
        ta_ke = 1.3;
        ko_ke = 1.11;
        ha_ke = 1.11;
      }
      if (front == 1) {
        hi_ke = 1.45;
        ta_ke = 1.2;
        ko_ke = 1.2;
        ha_ke = 1.3;
      }
      break;
    case "sg":
      if (front == 0) {
        hi_ke = 1.42;
        ta_ke = 1.3;
        ko_ke = 1.22;
        ha_ke = 1.22;
      }
      if (front == 1) {
        hi_ke = 1.33;
        ta_ke = 1.1;
        ko_ke = 1.32;
        ha_ke = 1.4;
      }
      break;
    case "gv":
      if (front == 0) {
        hi_ke = 1.64;
        ta_ke = 1.1;
        ko_ke = 1.2;
        ha_ke = 1.21;
      }
      if (front == 1) {
        hi_ke = 1.64;
        ta_ke = 1.2;
        ko_ke = 1.2;
        ha_ke = 1.11;
      }
      break;
    case "vk":
      if (front == 0) {
        hi_ke = 1.44;
        ta_ke = 1.1;
        ko_ke = 1.21;
        ha_ke = 1.4;
      }
      if (front == 1) {
        hi_ke = 1.53;
        ta_ke = 1.2;
        ko_ke = 1.21;
        ha_ke = 1.22;
      }
      break;
    case "mp":
      if (front == 0) {
        hi_ke = 1.53;
        ta_ke = 1.1;
        ko_ke = 1.32;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.53;
        ta_ke = 1.1;
        ko_ke = 1.22;
        ha_ke = 1.3;
      }
      break;
    case "le":
      if (front == 0) {
        hi_ke = 1.33;
        ta_ke = 1.2;
        ko_ke = 1.23;
        ha_ke = 1.4;
      }
      if (front == 1) {
        hi_ke = 1.42;
        ta_ke = 1.1;
        ko_ke = 1.5;
        ha_ke = 1.12;
      }
      break;
    case "xz":
      if (front == 0) {
        hi_ke = 1.42;
        ta_ke = 1.3;
        ko_ke = 1.22;
        ha_ke = 1.2;
      }
      if (front == 1) {
        hi_ke = 1.33;
        ta_ke = 1.3;
        ko_ke = 1.31;
        ha_ke = 1.21;
      }
      break;
    }
  }
  if (solo == 2) {
    var charanum = document.Character.notunited.selectedIndex;
    var chara = document.Character.notunited.options[charanum].value;
    switch (chara) {
    case "zoffy":
      hi_ke = 1.5;
      ta_ke = 1.1;
      ko_ke = 1.0;
      ha_ke = 1.0;
      break;
    case "man":
      hi_ke = 1.5;
      ta_ke = 1.0;
      ko_ke = 1.0;
      ha_ke = 1.1;
      break;
    case "seven":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.2;
      ha_ke = 1.1;
      break;
    case "jack":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.0;
      ha_ke = 1.2;
      break;
    case "ace":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.2;
      ha_ke = 1.0;
      break;
    case "taro":
      hi_ke = 1.3;
      ta_ke = 1.2;
      ko_ke = 1.1;
      ha_ke = 1.0;
      break;
    case "leo":
      hi_ke = 1.2;
      ta_ke = 1.2;
      ko_ke = 1.0;
      ha_ke = 1.2;
      break;
    case "eighty":
      hi_ke = 1.3;
      ta_ke = 1.1;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "tiga":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "tiga_sky":
      hi_ke = 1.2;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.3;
      break;
    case "tiga_power":
      hi_ke = 1.2;
      ta_ke = 1.1;
      ko_ke = 1.3;
      ha_ke = 1.0;
      break;
    case "dyna":
      hi_ke = 1.2;
      ta_ke = 1.1;
      ko_ke = 1.3;
      ha_ke = 1.0;
      break;
    case "dyna_miracle":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.2;
      break;
    case "dyna_strong":
      hi_ke = 1.3;
      ta_ke = 1.1;
      ko_ke = 1.2;
      ha_ke = 1.0;
      break;
    case "gaia":
      hi_ke = 1.4;
      ta_ke = 1.1;
      ko_ke = 1.1;
      ha_ke = 1.0;
      break;
    case "aglu":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "cosmos":
      hi_ke = 1.2;
      ta_ke = 1.1;
      ko_ke = 1.0;
      ha_ke = 1.3;
      break;
    case "justice":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.3;
      ha_ke = 1.0;
      break;
    case "nexus":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.0;
      ha_ke = 1.2;
      break;
    case "max":
      hi_ke = 1.2;
      ta_ke = 1.0;
      ko_ke = 1.2;
      ha_ke = 1.2;
      break;
    case "mebius":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.2;
      ha_ke = 1.1;
      break;
    case "hikari":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.2;
      break;
    case "zero":
      hi_ke = 1.3;
      ta_ke = 1.0;
      ko_ke = 1.2;
      ha_ke = 1.1;
      break;
    case "ulzero":
      hi_ke = 1.3;
      ta_ke = 1.1;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "belial":
      hi_ke = 1.6;
      ta_ke = 1.0;
      ko_ke = 1.0;
      ha_ke = 1.0;
      break;
    case "gina":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "victory":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.0;
      break;
    case "x":
      hi_ke = 1.2;
      ta_ke = 1.1;
      ko_ke = 1.2;
      ha_ke = 1.1;
      break;
    case "origin":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    case "origin1":
      hi_ke = 1.4;
      ta_ke = 1.0;
      ko_ke = 1.1;
      ha_ke = 1.1;
      break;
    }
  }
  if (solo == 3) {
    var hi_ke = parseFloat(document.Character.hissatsu.value);
    var ta_ke = parseFloat(document.Character.tairyoku.value);
    var ko_ke = parseFloat(document.Character.kogeki.value);
    var ha_ke = parseFloat(document.Character.hayasa.value);
  }
  switch (sk1_val) {
  case "nl":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "pi":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.1;
    var hw_sk1 = 1.2;
    break;
  case "ch":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.1;
    var hw_sk1 = 1;
    break;
  case "ka":
    var hi_sk1 = 0.05;
    var ta_sk1 = 0.05;
    var ko_sk1 = 0.05;
    var ha_sk1 = 0.05;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "ba":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.3;
    var hw_sk1 = 1.3;
    break;
  case "ga":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1.5;
    break;
  case "zo":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.5;
    var hw_sk1 = 1.5;
    break;
  case "kl":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.2;
    var hw_sk1 = 1.2;
    break;
  case "sl":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1.3;
    var hw_sk1 = 1.3;
    break;
  case "hich":
    var hi_sk1 = 0.2;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "tach":
    var hi_sk1 = 0;
    var ta_sk1 = 0.2;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "koch":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0.2;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "hach":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0.2;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "hi":
    var hi_sk1 = 0.1;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "ta":
    var hi_sk1 = 0;
    var ta_sk1 = 0.1;
    var ko_sk1 = 0;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "ko":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0.1;
    var ha_sk1 = 0;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  case "ha":
    var hi_sk1 = 0;
    var ta_sk1 = 0;
    var ko_sk1 = 0;
    var ha_sk1 = 0.1;
    var ra_sk1 = 1;
    var hw_sk1 = 1;
    break;
  }
  switch (sk2_val) {
  case "nl":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "pi":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.1;
    var hw_sk2 = 1.2;
    break;
  case "ch":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.1;
    var hw_sk2 = 1;
    break;
  case "ka":
    var hi_sk2 = 0.05;
    var ta_sk2 = 0.05;
    var ko_sk2 = 0.05;
    var ha_sk2 = 0.05;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "ba":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.3;
    var hw_sk2 = 1.3;
    break;
  case "ga":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1.5;
    break;
  case "zo":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.5;
    var hw_sk2 = 1.5;
    break;
  case "kl":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.2;
    var hw_sk2 = 1.2;
    break;
  case "sl":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1.3;
    var hw_sk2 = 1.3;
    break;
  case "hich":
    var hi_sk2 = 0.2;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "tach":
    var hi_sk2 = 0;
    var ta_sk2 = 0.2;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "koch":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0.2;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "hach":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0.2;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "hi":
    var hi_sk2 = 0.1;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "ta":
    var hi_sk2 = 0;
    var ta_sk2 = 0.1;
    var ko_sk2 = 0;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "ko":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0.1;
    var ha_sk2 = 0;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  case "ha":
    var hi_sk2 = 0;
    var ta_sk2 = 0;
    var ko_sk2 = 0;
    var ha_sk2 = 0.1;
    var ra_sk2 = 1;
    var hw_sk2 = 1;
    break;
  }
  switch (syogo) {
  case 0:
    var hi_sy = 0;
    var ta_sy = 0;
    var ko_sy = 0;
    var ha_sy = 0;
    break;
  case 1:
    var hi_sy = 0.01;
    var ta_sy = 0;
    var ko_sy = 0;
    var ha_sy = 0;
    break;
  case 2:
    var hi_sy = 0;
    var ta_sy = 0.01;
    var ko_sy = 0;
    var ha_sy = 0;
    break;
  case 3:
    var hi_sy = 0;
    var ta_sy = 0;
    var ko_sy = 0.01;
    var ha_sy = 0;
    break;
  case 4:
    var hi_sy = 0;
    var ta_sy = 0;
    var ko_sy = 0;
    var ha_sy = 0.01;
    break;
  }
  var hi_tr = hi_st * (hi_ke + hi_sk1 + hi_sk2 + hi_sy + hi_item * 0.05 + go_item * 0.03) * hi_zy;
  var hp_tr = ta_st * (ta_ke + ta_sk1 + ta_sk2 + ta_sy + ta_item * 0.05) * ta_zy;
  var ko_tr = ko_st * (ko_ke + ko_sk1 + ko_sk2 + ko_sy) * ko_zy;
  var ha_tr = ha_st * (ha_ke + ha_sk1 + ha_sk2 + ha_sy + ha_item * 0.05) * ha_zy;
  document.ans.panch.value = Math.round(ko_tr * 18 * ra_sk1 * ra_sk2);
  document.ans.kikku.value = Math.round((ko_tr * 10 + ha_tr * 8) * ra_sk1 * ra_sk2);
  document.ans.kosen.value = Math.round((ko_tr * 10 + hi_tr * 8) * ra_sk1 * ra_sk2);
  document.ans.HP.value = Math.round(hp_tr * 800);
  document.ans.yelhi.value = Math.round(hi_tr * 250 * hw_sk1 * hw_sk2);
  document.ans.grehi.value = Math.round(hi_tr * 4 + ha_tr * 6) * 25 * hw_sk1 * hw_sk2;
  document.ans.redhi.value = Math.round(hi_tr * 4 + ko_tr * 6) * 25 * hw_sk1 * hw_sk2;
  document.ans.count.value = Math.round((8 + 0.25 * ha_tr) * 100) /100;
}
