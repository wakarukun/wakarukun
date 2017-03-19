function fusion_shin(Obj) {
    index_nub = Obj.selectedIndex; //選択された項目番号を取得する
    O_value = Obj.options[Obj.selectedIndex].value; //選択された項目の値を取得する
    T_value = Obj.options[Obj.selectedIndex].text;
    var fusioncolor;
    var fusionwaza;
    var wazacolor;
    var flagship = 0;
    switch (O_value) {
        case "sz":
            var a = [1, 1, 1];
            var b = [7, 8, 9];
            fusioncolor = "cc00cc"
            fusionwaza = ["スペリオン光線", "スペリオン光輪"];
            wazacolor = ["f9ce1d", "5ed361"];
            break;
        case "bm":
            var a = [5];
            var b = [19];
            fusioncolor = " dd830c"
            fusionwaza = ["ストビュームダイナマイト", "ストビュームバースト"];
            wazacolor = ["ff5252", "ff5252"];
            break;
        case "hs":
            var a = [3];
            var b = [21];
            fusioncolor = "0000cc"
            fusionwaza = ["オーブスラッガーショット", "トライデントスラッシュ"];
            wazacolor = ["f9ce1d", "ff5252"];
            break;
        case "tb":
            var a = [0];
            var b = [22];
            fusioncolor = "ff0000";
            fusionwaza = ["ゼットシウム光線", "ゼットシウム光輪"];
            wazacolor = ["f9ce1d", "ff5252"];
            break;
        case "pv":
            var a = [13];
            var b = [24];
              fusioncolor = "dd830c"
              fusionwaza = ["フォトリウムナックル"];
              wazacolor = ["ff5252"];
            break;
        case "fz":
            var a = [16];
            var b = [25];
            fusioncolor = "2196f3"
            fusionwaza = ["フルディウム光線"];
            wazacolor = ["f9ce1d"];
            break;
        case "la":
            var a = [23];
            var b = [25];
            fusioncolor = "cc00cc";
            fusionwaza = ["アタッカーギンガエックス"];
            wazacolor = ["f9ce1d"];
            break;
        case "sm":
            var a = [8];
            var b = [18];
            fusioncolor = "286f2c";
            fusionwaza = ["マクバルトアタック"];
            wazacolor = ["5ed361"];
            break;
        case "zs":
            var a = [7];
            var b = [10];
            fusioncolor = "666666";
            fusionwaza = ["マルチフラッシュスライサー"];
            wazacolor = ["ff5252"];
            break;
        case "lz":
            var a = [6];
            var b = [21];
            fusioncolor = "ff0000";
            fusionwaza = ["ナックルクロスビーム"];
            wazacolor = ["f9ce1d"];
            break;
        case "tm":
            var a = [11];
            var b = [22];
            fusioncolor = "cc00cc";
            fusionwaza = ["サンダーミラクルアタック"];
            wazacolor = ["ff5252"];
            break;
        case "sa":
            var a = [2];
            var b = [4];
            fusioncolor = "286f2c";
            fusionwaza = ["スラッガーエーススライサー"];
            wazacolor = ["ff5252"];
            break;
        case "kl":
            var a = [14, 15];
            var b = [20, 20];
            fusioncolor = "ff0000";
            fusionwaza = ["クラッシャーナイトリキデイター"];
            wazacolor = ["f9ce1d"];
            break;
        case "ss":
            var a = [1];
            var b = [17];
            fusioncolor = "666666";
            fusionwaza = ["ウルトラフルバースト"];
            wazacolor = ["f9ce1d"];
            break;
        case "ps":
            var a = [9];
            var b = [12];
            fusioncolor = "ff0000";
            fusionwaza = ["ガルラシウムボンバー"];
            wazacolor = ["f9ce1d"];
            break;
        case "es":
            var a = [2];
            var b = [21];
            fusioncolor = "0000cc";
            fusionwaza = ["ワイドスラッガーショット"];
            wazacolor = ["f9ce1d"];
            break;
        case "gv":
            var a = [23];
            var b = [24];
            fusioncolor = "286f2c";
            fusionwaza = ["ウルトラフュージョンシュート"];
            wazacolor = ["f9ce1d"];
            break;
        case "vk":
            var a = [20];
            var b = [24];
            fusioncolor = "666666";
            fusionwaza = ["ナイトビクトリウムシュート"];
            wazacolor = ["f9ce1d"];
            break;
        case "mp":
            var a = [19];
            var b = [20];
            fusioncolor = "ff0000";
            fusionwaza = ["メビュームナイトシュート"];
            wazacolor = ["f9ce1d"];
            break;
        case "ts":
            var a = [14, 15];
            var b = [22, 22];
            fusioncolor = "000000"
            fusionwaza = ["サンダーストリームネプチューン"];
            wazacolor = ["ff5252"];
            break;
        case "le":
            var a = [28];
            var b = [16];
            fusioncolor = "666666";
            fusionwaza = ["スパークレジェンド"];
            wazacolor = ["f9ce1d"];
            break;
        case "xz":
            var a = [29];
            var b = [25];
            fusioncolor = "2196f3";
            fusionwaza = ["ソードレイ・クロス・ゼロ"];
            wazacolor = ["ff5252"];
            break;
        case "me":
            var a = [19];
            var b = [23];
            fusioncolor = "666666";
            fusionwaza = ["メビュースペシャリーブレード"];
            wazacolor = ["f9ce1d"];
            break;
        case "bk":
            var a = [0];
            var b = [20];
            fusioncolor = "666666";
            fusionwaza = ["ナイト87シュート"];
            wazacolor = [""];
            break;
        case "ot":
            var a = [23, 23, 24];
            var b = [24, 25, 25];
            fusioncolor = "0000cc";
            fusionwaza = ["トリニティウム光輪"];
            wazacolor = ["5ed361"];
            break;
        case "sg":
            var a = [10, 10, 16];
            var b = [16, 21, 21];
            fusioncolor = ""
            break;

    }
    var counter = 0;
    for(a_num = 0; a_num < a.length; a_num++){
      var b_num = a_num;
    var fusiontable = document.createDocumentFragment();
    var fragment = document.createDocumentFragment();
    var thbody = document.createDocumentFragment();
    var tdbody = document.createDocumentFragment();
    var title = document.createElement('b');
    var titlefont = document.createElement('font');
    titlefont.setAttribute("color", fusioncolor);
    titlefont.appendChild(document.createTextNode(T_value));
    titlefont.appendChild(document.createTextNode('【'));
    var titlebefore = document.createElement('font');
    titlebefore.setAttribute("color", card[a[a_num]][0][7]);
    titlebefore.appendChild(document.createTextNode(card[a[a_num]][0][0]));
    var titleplus = document.createElement('font');
    titleplus.setAttribute("color", "000000");
    titleplus.appendChild(document.createTextNode('+'));
    var titleafter = document.createElement('font');
    titleafter.setAttribute("color", card[b[b_num]][0][7]);
    titleafter.appendChild(document.createTextNode(card[b[b_num]][0][0]));
    var titlefin = document.createElement('font');
    titlefin.setAttribute("color", fusioncolor);
    titlefin.appendChild(document.createTextNode('】'));
    title.appendChild(titlefont);
    title.appendChild(titlebefore);
    title.appendChild(titleplus);
    title.appendChild(titleafter);
    title.appendChild(titlefin);
    var wazatables = document.createElement('table');
    wazatables.setAttribute("class", "tablesorter")
    var wazatr = document.createElement('tr');
    wazatables.appendChild(wazatr);
    var wazatd = document.createElement('td');
    var syozi = document.createElement('b');
    syozi.appendChild(document.createTextNode("所持技"));
    wazatd.appendChild(syozi)
    wazatables.appendChild(wazatd);
    for(i = 0; i < fusionwaza.length; i++){
      var wazatd = document.createElement('td');
      wazatd.setAttribute("bgcolor", wazacolor[i]);
      syoziwaza = document.createElement('b');
      syoziwaza.appendChild(document.createTextNode(fusionwaza[i]));
      wazatd.appendChild(syoziwaza);
      wazatables.appendChild(wazatd);
    }
    var tables = document.createElement('table');
    tables.id = "fusionTable" + counter;
    tables.className = 'tablesorter';
    var thead = document.createElement('thead');
    var trbody1 = document.createElement('tr');
    var trbody2 = document.createElement('tr');
    var hissatsu = document.createElement('th');
    hissatsu.appendChild(document.createTextNode('必殺'));
    var tairyoku = document.createElement('th');
    tairyoku.appendChild(document.createTextNode('体力'));
    var kogeki = document.createElement('th');
    kogeki.appendChild(document.createTextNode('攻撃'));
    var hayasa = document.createElement('th');
    hayasa.appendChild(document.createTextNode('速さ'));
    var gokei = document.createElement('th');
    gokei.appendChild(document.createTextNode('合計'));
    var first = document.createElement('th');
    first.setAttribute("colspan",2);
    first.appendChild(document.createTextNode(card[a[a_num]][0][0]));
    var second = document.createElement('th');
    second.setAttribute("colspan",2);
    second.appendChild(document.createTextNode(card[b[b_num]][0][0]));
    tbody = document.createElement('tbody');
    thbody.appendChild(hissatsu);
    thbody.appendChild(tairyoku);
    thbody.appendChild(kogeki);
    thbody.appendChild(hayasa);
    thbody.appendChild(gokei);
    thbody.appendChild(first);
    thbody.appendChild(second);
    trbody1.appendChild(thbody);
    thead.appendChild(trbody1);
    for (p = 0; p < card[a[a_num]].length; p++) {
        for (q = 0; q < card[b[b_num]].length; q++) {
            var sum = 0;
            for (j = 1; j < 5; j++) {
                sum += Math.max(card[a[a_num]][p][j], card[b[b_num]][q][j]);
                if (card[a[a_num]][p][j] > card[b[b_num]][q][j]) {
                    var better = card[a[a_num]][p][7];
                } else if (card[a[a_num]][p][j] < card[b[b_num]][q][j]) {
                    var better = card[b[b_num]][q][7];
                } else {
                    var better = "000000";
                }
                var td = document.createElement('td');
                var tdfont = document.createElement('font');
                tdfont.setAttribute("color", better);
                tdfont.appendChild(document.createTextNode(Math.max(card[a[a_num]][p][j], card[b[b_num]][q][j])));
                td.appendChild(tdfont);
                fragment.appendChild(td);
            }
            var td = document.createElement('td');
            var sum_value = document.createElement('td');
            sum_value.appendChild(document.createTextNode(sum));
            var name1 = document.createElement('td');
            var name1font = document.createElement('font');
            name1font.appendChild(document.createTextNode(card[a[a_num]][p][6] + '(' + card[a[a_num]][p][5] + ')'));
            name1font.setAttribute("color", card[a[a_num]][p][7]);
            name1.appendChild(name1font);
            var waza1 = document.createElement('td');
            waza1.setAttribute("bgcolor", card[a[a_num]][p][9]);
            waza1.appendChild(document.createTextNode(card[a[a_num]][p][8]));
            var name2 = document.createElement('td');
            var name2font = document.createElement('font');
            name2font.setAttribute("color", card[b[b_num]][q][7]);
            name2font.appendChild(document.createTextNode(card[b[b_num]][q][6] + '(' + card[b[b_num]][q][5] + ')'));
            name2.appendChild(name2font);
            var waza2 = document.createElement('td');
            waza2.setAttribute("bgcolor", card[b[b_num]][q][9]);
            waza2.appendChild(document.createTextNode(card[b[b_num]][q][8]));
            fragment.appendChild(sum_value);
            fragment.appendChild(name1);
            fragment.appendChild(waza1);
            fragment.appendChild(name2);
            fragment.appendChild(waza2);
            var tr = document.createElement('tr');
            tr.appendChild(fragment);
            tdbody.appendChild(tr);
        }
    }
    tdbody.appendChild(tr);
    tbody.appendChild(tdbody);
    tables.appendChild(thead);
    tables.appendChild(tbody);
    if (flagship == 0) {
        JSSyncLoad(['https://wakarukun.github.io/wakarukun/jquery.tablesorter.min.js', "https://wakarukun.github.io/wakarukun/sorter_fusion.js"]);
        flagship += 1;
    }
    fusiontable.appendChild(title);
    fusiontable.appendChild(wazatables);
    fusiontable.appendChild(tables);
    if (counter == 0) {
        var clone = document.getElementById("list").cloneNode(false); //ガワだけ複製して…
        document.getElementById("list").parentNode.replaceChild(clone, document.getElementById("list")); //すげ替え。
    }
    document.getElementById("list").appendChild(fusiontable);
    counter += 1;
  }
    document.myForm.Maker.selectedIndex=0;
    document.myForm.Computer.selectedIndex=0;
}
