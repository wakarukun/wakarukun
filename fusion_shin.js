function fusion_shin(Obj) {
    index_nub = Obj.selectedIndex; //選択された項目番号を取得する
    O_value = Obj.options[Obj.selectedIndex].value; //選択された項目の値を取得する
    T_value = Obj.options[Obj.selectedIndex].text;
    var fusioncolor;
    var flagship = 0;
    switch (O_value) {
        case "sz":
            var a = [1];
            var b = [7, 8, 9];
            fusioncolor = "cc00cc"
            break;
        case "bm":
            var a = [5];
            var b = [19];
            fusioncolor = " dd830c"
            break;
        case "hs":
            var a = [3];
            var b = [21];
            fusioncolor = "0000cc"
            break;
        case "tb":
            var a = [0];
            var b = [22];
            fusioncolor = "ff0000"
            break;
        case "pv":
            var a = [13];
            var b = [24];
            fusioncolor = "dd830c"
            break;
        case "fz":
            var a = [16];
            var b = [25];
            fusioncolor = "2196f3"
            break;
        case "la":
            var a = [23];
            var b = [25];
            fusioncolor = "cc00cc"
            break;
        case "sm":
            var a = [8];
            var b = [18];
            fusioncolor = "286f2c"
            break;
        case "zs":
            var a = [7];
            var b = [10];
            fusioncolor = "666666"
            break;
        case "lz":
            var a = [6];
            var b = [21];
            fusioncolor = "ff0000"
            break;
        case "tm":
            var a = [11];
            var b = [22];
            fusioncolor = "cc00cc";
            break;
        case "sa":
            var a = [2];
            var b = [4];
            fusioncolor = "286f2c";
            break;
        case "kl":
            var a = [14, 15];
            var b = [20];
            fusioncolor = "ff0000";
            break;
        case "ss":
            var a = [1];
            var b = [17];
            fusioncolor = "666666";
            break;
        case "ps":
            var a = [9];
            var b = [12];
            fusioncolor = "ff0000";
            break;
        case "es":
            var a = [2];
            var b = [21];
            fusioncolor = "0000cc";
            break;
        case "gv":
            var a = [23];
            var b = [24];
            fusioncolor = "286f2c";
            break;
        case "vk":
            var a = [20];
            var b = [24];
            fusioncolor = "666666";
            break;
        case "mp":
            var a = [19];
            var b = [20];
            fusioncolor = "ff0000";
            break;
        case "ts":
            var a = [14, 15];
            var b = [22];
            fusioncolor = "000000"
            break;
        case "le":
            var a = [28];
            var b = [16];
            fusioncolor = "666666"
            break;
        case "xz":
            var a = [29];
            var b = [25];
            fusioncolor = "2196f3"
            break;
        case "me":
            var a = [19];
            var b = [23];
            fusioncolor = "666666"
            break;
        case "ot":
            var a = [23, 23, 24];
            var b = [24, 25, 25];
            fusioncolor = "0000cc"
            break;
    }
    var counter = 0;
    for(a_num = 0; a_num < a.length; a_num++){
      for(b_num = 0; b_num < b.length; b_num++){
    var fusiontable = document.createDocumentFragment();
    var fragment = document.createDocumentFragment();
    var thbody = document.createDocumentFragment();
    var tdbody = document.createDocumentFragment();
    var title = document.createElement('b');
    var titlefont = document.createElement('font');
    titlefont.setAttribute("color", fusioncolor);
    titlefont.appendChild(document.createTextNode(T_value));
    titlefont.appendChild(document.createTextNode('【'+card[a[a_num]][0][0]+ '+' + card[b[b_num]][0][0] + '】'));
    title.appendChild(titlefont);
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
    fusiontable.appendChild(tables);
    if (counter == 0) {
        var clone = document.getElementById("list").cloneNode(false); //ガワだけ複製して…
        document.getElementById("list").parentNode.replaceChild(clone, document.getElementById("list")); //すげ替え。
    }
    document.getElementById("list").appendChild(fusiontable);
    counter += 1;
    }
  }
    document.myForm.Maker.selectedIndex=0;
    document.myForm.Computer.selectedIndex=0;
}
