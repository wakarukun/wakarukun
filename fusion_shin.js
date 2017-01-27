function fusion_shin(Obj) {
    index_nub = Obj.selectedIndex; //選択された項目番号を取得する
    O_value = Obj.options[Obj.selectedIndex].value; //選択された項目の値を取得する
    T_value = Obj.options[Obj.selectedIndex].text;
    var fusioncolor
    switch (O_value) {
        case "sz":
            var a = 1;
            var b = 26;
            fusioncolor = "cc00cc"
            break;
        case "bm":
            var a = 5;
            var b = 19;
            fusioncolor = " dd830c"
            break;
        case "hs":
            var a = 3;
            var b = 21;
            fusioncolor = "0000cc"
            break;
        case "tb":
            var a = 0;
            var b = 22;
            fusioncolor = "ff0000"
            break;
        case "pv":
            var a = 13;
            var b = 24;
            fusioncolor = "dd830c"
            break;
        case "fz":
            var a = 16;
            var b = 25;
            fusioncolor = "2196f3"
            break;
        case "la":
            var a = 23;
            var b = 25;
            fusioncolor = "cc00cc"
            break;
        case "sm":
            var a = 8;
            var b = 18;
            fusioncolor = "286f2c"
            break;
        case "zs":
            var a = 7;
            var b = 10;
            fusioncolor = "666666"
            break;
        case "lz":
            var a = 6;
            var b = 21;
            fusioncolor = "ff0000"
            break;
        case "tm":
            var a = 11;
            var b = 22;
            fusioncolor = "cc00cc";
            break;
        case "sa":
            var a = 2;
            var b = 4;
            fusioncolor = "286f2c";
            break;
        case "kl":
            var a = 27;
            var b = 20;
            fusioncolor = "ff0000";
            break;
        case "ss":
            var a = 1;
            var b = 17;
            fusioncolor = "666666";
            break;
        case "ps":
            var a = 9;
            var b = 12;
            fusioncolor = "ff0000";
            break;
        case "es":
            var a = 2;
            var b = 21;
            fusioncolor = "0000cc";
            break;
        case "gv":
            var a = 23;
            var b = 24;
            fusioncolor = "286f2c";
            break;
        case "vk":
            var a = 20;
            var b = 24;
            fusioncolor = "666666";
            break;
        case "mp":
            var a = 19;
            var b = 20;
            fusioncolor = "ff0000";
            break;
    }

    var fusiontable = document.createDocumentFragment();
    var fragment = document.createDocumentFragment();
    var thbody = document.createDocumentFragment();
    var tdbody = document.createDocumentFragment();
    var title = document.createElement('b');
    var titlefont = document.createElement('font');
    titlefont.setAttribute("color", fusioncolor);
    titlefont.appendChild(document.createTextNode(T_value));
    title.appendChild(titlefont);
    var tables = document.createElement('table');
    tables.id = "fusionTable";
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
    first.appendChild(document.createTextNode(card[a][0][0]));
    var second = document.createElement('th');
    second.appendChild(document.createTextNode(card[b][0][0]));
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
    for (p = 0; p < card[a].length; p++) {
        for (q = 0; q < card[b].length; q++) {
            var sum = 0;
            for (j = 1; j < 5; j++) {
                sum += Math.max(card[a][p][j], card[b][q][j]);
                if (card[a][p][j] > card[b][q][j]) {
                    var better = card[a][p][7];
                } else if (card[a][p][j] < card[b][q][j]) {
                    var better = card[b][q][7];
                } else {
                    var better = "00000";
                }
                var td = document.createElement('td');
                var tdfont = document.createElement('font');
                tdfont.setAttribute("color", better);
                tdfont.appendChild(document.createTextNode(Math.max(card[a][p][j], card[b][q][j])));
                td.appendChild(tdfont);
                fragment.appendChild(td);
            }
            var td = document.createElement('td');
            var sum_value = document.createElement('td');
            sum_value.appendChild(document.createTextNode(sum));
            var name1 = document.createElement('td');
            var name1font = document.createElement('font');
            name1font.appendChild(document.createTextNode(card[a][p][6] + '（' + card[a][p][5] + '）'));
            name1font.setAttribute("color", card[a][p][7]);
            name1.appendChild(name1font);
            var name2 = document.createElement('td');
            var name2font = document.createElement('font');
            name2font.setAttribute("color", card[b][q][7]);
            name2font.appendChild(document.createTextNode(card[b][q][6] + '（' + card[b][q][5] + '）'));
            name2.appendChild(name2font);
            fragment.appendChild(sum_value);
            fragment.appendChild(name1);
            fragment.appendChild(name2);
            var tr = document.createElement('tr');
            tr.appendChild(fragment);
            tdbody.appendChild(tr);
        }
    }
    tdbody.appendChild(tr);
    tbody.appendChild(tdbody);
    tables.appendChild(thead);
    tables.appendChild(tbody);
    var script1 = document.createElement('script');
    script1.setAttribute("type", "text/javascript");
    script1.setAttribute("src", "https://wakarukun.github.io/wakarukun/jquery.tablesorter.min.js");
    var script = document.createElement('script');
    script.setAttribute("src", "https://wakarukun.github.io/wakarukun/sorter_fusion.js");
    fusiontable.appendChild(script1);
    fusiontable.appendChild(title);
    fusiontable.appendChild(script);
    fusiontable.appendChild(tables);
    var clone = document.getElementById("list").cloneNode(false); //ガワだけ複製して…
    document.getElementById("list").parentNode.replaceChild(clone, document.getElementById("list")); //すげ替え。
    document.getElementById("list").appendChild(fusiontable);
}
