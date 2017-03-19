function gyakubiki(flag) {
    index_nub = document.myForm.Maker.selectedIndex;
    O_value = document.myForm.Maker.options[index_nub].value;
    T_value = document.myForm.Maker.options[index_nub].text;
    if (flag == 0) {
        index_nub2 = document.myForm.Computer.selectedIndex;
        T_value2 = document.myForm.Computer.options[index_nub2].text;
    } else {
        T_value2 = "個別に選ぶ？";
    }
    var fusioncolor
    var fusionname
    var flagship = 0;
    switch (O_value) {
        case "zoffy":
            var a = [0];
            var b = [22, 20];
            fusioncolor = ["ff0000", ""];
            fusionname = ["サンダーブレスター", "ナイトブレスター"];
            fusionwaza = [["ゼットシウム光線", "ゼットシウム光輪"], ["ナイト87シュート"]];
            wazacolor = [["f9ce1d", "ff5252"], [""]];
            break;
        case "man":
            var a = [1];
            var b = [7, 8, 9, 17];
            fusioncolor = ["cc00cc", "cc00cc", "cc00cc", "666666"];
            fusionname = ["スペシウムゼペリオン", "スペシウムゼペリオン", "スペシウムゼペリオン", "スペシウムシュトローム"];
            fusionwaza = [["スペリオン光線", "スペリオン光輪"], ["スペリオン光線", "スペリオン光輪"], ["スペリオン光線", "スペリオン光輪"], ["ウルトラフルバースト"]];
            wazacolor = [["f9ce1d", "ff5252"], ["f9ce1d", "ff5252"],　["f9ce1d", "ff5252"], ["f9ce1d"]];
            break;
        case "seven":
            var a = [2];
            var b = [4, 21];
            fusioncolor = ["286f2c", "0000cc"];
            fusionname = ["スラッガーエース", "エメリウムスラッガー"];
            fusionwaza = [["スラッガーエーススライサー"], ["ワイドスラッガーショット"]];
            wazacolor = [["ff5252"], ["f9ce1d"]];
            break;
        case "jack":
            var a = [3];
            var b = [21];
            fusioncolor = ["0000cc"];
            fusionname = ["ハリケーンスラッシュ"];
            fusionwaza = [["オーブスラッガーショット", "トライデントスラッシュ"]];
            wazacolor = [["f9ce1d", "ff5252"]];
            break;
        case "ace":
            var a = [4];
            var b = [2];
            fusioncolor = ["286f2c"];
            fusionname = ["スラッガーエース"];
            fusionwaza = [["スラッガーエーススライサー"]];
            wazacolor = [["ff5252"]];
            break;
        case "taro":
            var a = [5];
            var b = [19];
            fusioncolor = ["dd830c"];
            fusionname = ["バーンマイト"];
            fusionwaza = [["ストビュームダイナマイト", "ストビュームバースト"]];
            wazacolor = [["ff5252", "ff5252"]];
            break;
        case "leo":
            var a = [6];
            var b = [21];
            fusioncolor = ["ff0000"];
            fusionname = ["レオゼロナックル"];
            fusionwaza = [["ナックルクロスビーム"]];
            wazacolor = [["f9ce1d"]];
            break;
        case "tiga":
            var a = [7];
            var b = [1, 10];
            fusioncolor = ["cc00cc", "666666"];
            fusionname = ["スペシウムゼペリオン", "ゼペリオンソルジェント"];
            fusionwaza = [["スペリオン光線", "スペリオン光輪"], ["マルチフラッシュスライサー"]];
            wazacolor = [["f9ce1d", "5ed361"], ["ff5252"]];
            break;
        case "tiga_sky":
            var a = [8];
            var b = [1, 18];
            fusioncolor = ["cc00cc", "286f2c"];
            fusionname = ["スペシウムゼペリオン", "スカイダッシュマックス"];
            fusionwaza = [["スペリオン光線", "スペリオン光輪"], ["マクバルトアタック"]];
            wazacolor = [["f9ce1d", "5ed361"], ["5ed361"]];
            break;
        case "tiga_power":
            var a = [9];
            var b = [1, 12];
            fusioncolor = ["cc00cc", "ff0000"];
            fusionname = ["スペシウムゼペリオン", "パワーストロング"];
            fusionwaza = [["スペリオン光線", "スペリオン光輪"], ["ガルラシウムボンバー"]];
            wazacolor = [["f9ce1d", "5ed361"], ["f9ce1d"]];
            break;
        case "dyna":
            var a = [10];
            var b = [7];
            fusioncolor = ["666666"];
            fusionname = ["ゼペリオンソルジェント"];
            fusionwaza = [["マルチフラッシュスライサー"]];
            wazacolor = [["ff5252"]];
            break;
        case "dyna_miracle":
            var a = [11];
            var b = [22];
            fusioncolor = ["cc00cc"];
            fusionname = ["サンダーミラクル"];
            fusionwaza = [["サンダーミラクルアタック"]];
            wazacolor = [["ff5252"]];
            break;
        case "dyna_strong":
            var a = [12];
            var b = [9];
            fusioncolor = ["ff0000"];
            fusionname = ["パワーストロング"];
            fusionwaza = [["ガルラシウムボンバー"]];
            wazacolor = [["f9ce1d"]];
            break;
        case "gaia":
            var a = [13];
            var b = [24];
            fusioncolor = ["dd830c"];
            fusionname = ["フォトンビクトリウム"];
            fusionwaza = [["フォトリウムナックル"]];
            wazacolor = [["ff5252"]];
            break;
        case "aglu":
            var a = [14];
            var b = [20, 22];
            fusioncolor = ["ff0000", "0000cc"];
            fusionname = ["ナイトリキデイター", "サンダーストリーム"];
            fusionwaza = [["クラッシャーナイトリキデイター"],["サンダーストリームネプチューン"]];
            wazacolor = [["f9ce1d"],["ff5252"]];
            break;
        case "agluV2":
            var a = [15];
            var b = [20, 22];
            fusioncolor = ["ff0000", "0000cc"];
            fusionname = ["ナイトリキデイター", "サンダーストリーム"];
            fusionwaza = [["クラッシャーナイトリキデイター"],["サンダーストリームネプチューン"]];
            wazacolor = [["f9ce1d"],["ff5252"]];
            break;
        case "cosmos":
            var a = [16];
            var b = [25, 28];
            fusioncolor = ["2196f3", "666666"];
            fusionname = ["フルムーンザナディウム", "ウルトラマンレジェンド"];
            fusionwaza = [["フルディウム光線"],["スパークレジェンド"]];
            wazacolor = [["f9ce1d"],["f9ce1d"]];
            break;
        case "justice":
            var a = [28];
            var b = [16];
            fusioncolor = ["666666"];
            fusionname = ["ウルトラマンレジェンド"];
            fusionwaza = [["スパークレジェンド"]];
            wazacolor = [["f9ce1d"]];
            break;
        case "nexus_red":
            var a = [17];
            var b = [1];
            fusioncolor = ["666666"];
            fusionname = ["スペシウムシュトローム"];
            fusionwaza = [["ウルトラフルバースト"]];
            wazacolor = [["f9ce1d"]];
            break;
        case "max":
            var a = [18];
            var b = [8];
            fusioncolor = ["286f2c"];
            fusionname = ["スカイダッシュマックス"];
            fusionwaza = [["マクバルトアタック"]];
            wazacolor = [["5ed361"]];
            break;
        case "mebius":
            var a = [19];
            var b = [5, 20, 23];
            fusioncolor = ["dd830c", "ff0000", ""];
            fusionname = ["バーンマイト", "メビウスフェニックスブレイブ", "メビュームエスペシャリー"];
            fusionwaza = [["ストビュームダイナマイト", "ストビュームバースト"], ["メビュームナイトシュート"], ["メビュースペシャリーブレード"]];
            wazacolor = [["f9ce1d", "ff5252"], ["f9ce1d"], ["f9ce1d"]];
            break;
        case "hikari":
            var a = [20];
            var b = [19, 14, 15, 0, 24];
            fusioncolor = ["ff0000", "ff0000", "ff0000", "", "666666"];
            fusionname = ["メビウスフェニックスブレイブ", "ナイトリキデイター", "ナイトリキデイター", "ナイトブレスター", "ビクトリーナイト"];
            fusionwaza = [["メビュームナイトシュート"], ["クラッシャーナイトリキデイター"], ["クラッシャーナイトリキデイター"], ["ナイト87シュート"], ["ナイトビクトリウムシュート"]];
            wazacolor = [["f9ce1d"], ["f9ce1d"], ["f9ce1d"], [""], ["f9ce1d"]];
            break;
        case "zero":
            var a = [21];
            var b = [3, 6, 2];
            fusioncolor = ["0000cc", "ff0000", "0000cc"];
            fusionname = ["ハリケーンスラッシュ", "レオゼロナックル", "エメリウムスラッガー"];
            fusionwaza = [["オーブスラッガーショット", "トライデントスラッシュ"], ["ナックルクロスビーム"], ["ワイドスラッガーショット"]];
            wazacolor = [["f9ce1d", "ff5252"], ["f9ce1d"], ["f9ce1d"]];
            break;
        case "ulzero":
            var a = [29];
            var b = [25];
            fusioncolor = ["2196f3"];
            fusionname = ["ウルトラマンX ゼロアーマー"];
            fusionwaza = [["ソードレイ・クロス・ゼロ"]];
            wazacolor = [["ff5252"]];
            break;
        case "belial":
            var a = [22];
            var b = [0, 11, 14, 15];
            fusioncolor = ["ff0000", "cc00cc", "ff0000", "ff0000"];
            fusionname = ["サンダーブレスター", "サンダーミラクル", "サンダーストリーム", "サンダーストリーム"];
            fusionwaza = [["ゼットシウム光線", "ゼットシウム光輪"], ["サンダーミラクルアタック"], ["サンダーストリームネプチューン"], ["サンダーストリームネプチューン"]];
            wazacolor = [["f9ce1d", "ff5252"], ["ff5252"], ["ff5252"], ["ff5252"]];
            break;
        case "ginga":
            var a = [23];
            var b = [25, 24 ,19, 24, 25];
            fusioncolor = ["cc00cc", "286f2c", "", "", ""];
            fusionname = ["ライトニングアタッカー", "ギンガビクトリー", "メビュームエスペシャリー", "オーブトリニティ", "オーブトリニティ"];
            fusionwaza = [["アタッカーギンガエックス"], ["ウルトラフュージョンシュート"], ["メビュースペシャリーブレード"], ["トリニティウム光輪"], ["トリニティウム光輪"]];
            wazacolor = [["f9ce1d"], ["f9ce1d"], ["f9ce1d"], ["5ed361"], ["5ed361"]];
            break;
        case "victory":
            var a = [24];
            var b = [13, 23, 20, 23, 25];
            fusioncolor = ["dd830c", "286f2c", "666666", "", ""];
            fusionname = ["フォトンビクトリウム", "ギンガビクトリー", "ビクトリーナイト", "オーブトリニティ", "オーブトリニティ"];
            fusionwaza = [["フォトリウムナックル"], ["ウルトラフュージョンシュート"], ["ナイトビクトリウムシュート"], ["トリニティウム光輪"], ["トリニティウム光輪"]];
            wazacolor = [["ff5252"], ["f9ce1d"], ["f9ce1d"], ["5ed361"], ["5ed361"]];
            break;
        case "x":
            var a = [25];
            var b = [16, 23, 29, 23, 24];
            fusioncolor = ["2196f3", "cc00cc", "2196f3", "", ""];
            fusionname = ["フルムーンザナディウム", "ライトニングアタッカー", "ウルトラマンX ゼロアーマー", "オーブトリニティ", "オーブトリニティ"];
            fusionwaza = [["フルディウム光線"], ["アタッカーギンガエックス"], ["ソードレイ・クロス・ゼロ"], ["トリニティウム光輪"], ["トリニティウム光輪"]];
            wazacolor = [["f9ce1d"], ["f9ce1d"], ["ff5252"], ["5ed361"], ["5ed361"]];
            break;
    }
    var counter = 0;
    for (b_num = 0; b_num < b.length; b_num++) {
        var fusiontable = document.createDocumentFragment();
        var fusiontable = document.createDocumentFragment();
        var fragment = document.createDocumentFragment();
        var thbody = document.createDocumentFragment();
        var tdbody = document.createDocumentFragment();
        var title = document.createElement('b');
        var titlefont = document.createElement('font');
        titlefont.setAttribute("color", fusioncolor[b_num]);
        titlefont.appendChild(document.createTextNode(fusionname[b_num]));
        titlefont.appendChild(document.createTextNode('【'));
        var titlebefore = document.createElement('font');
        titlebefore.setAttribute("color", card[a][0][7]);
        titlebefore.appendChild(document.createTextNode(card[a][0][0]));
        var titleplus = document.createElement('font');
        titleplus.setAttribute("color", "000000");
        titleplus.appendChild(document.createTextNode('+'));
        var titleafter = document.createElement('font');
        titleafter.setAttribute("color", card[b[b_num]][0][7]);
        titleafter.appendChild(document.createTextNode(card[b[b_num]][0][0]));
        var titlefin = document.createElement('font');
        titlefin.setAttribute("color", fusioncolor[b_num]);
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
        for(i = 0; i < fusionwaza[b_num].length; i++){
          var wazatd = document.createElement('td');
          wazatd.setAttribute("bgcolor", wazacolor[b_num][i]);
          syoziwaza = document.createElement('b');
          syoziwaza.appendChild(document.createTextNode(fusionwaza[b_num][i]));
          wazatd.appendChild(syoziwaza);
          wazatables.appendChild(wazatd);
        }
        var tables = document.createElement('table');
        tables.id = "fusionTable" + b_num;
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
        first.setAttribute("colspan", 2);
        first.appendChild(document.createTextNode(card[a][0][0]));
        var second = document.createElement('th');
        second.setAttribute("colspan", 2);
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
        if (T_value2 == "個別に選ぶ？") {
            for (p = 0; p < card[a].length; p++) {
                for (q = 0; q < card[b[b_num]].length; q++) {
                    var sum = 0;
                    for (j = 1; j < 5; j++) {
                        sum += Math.max(card[a][p][j], card[b[b_num]][q][j]);
                        if (card[a][p][j] > card[b[b_num]][q][j]) {
                            var better = card[a][p][7];
                        } else if (card[a][p][j] < card[b[b_num]][q][j]) {
                            var better = card[b[b_num]][q][7];
                        } else {
                            var better = "000000";
                        }
                        var td = document.createElement('td');
                        var tdfont = document.createElement('font');
                        tdfont.setAttribute("color", better);
                        tdfont.appendChild(document.createTextNode(Math.max(card[a][p][j], card[b[b_num]][q][j])));
                        td.appendChild(tdfont);
                        fragment.appendChild(td);
                    }
                    var td = document.createElement('td');
                    var sum_value = document.createElement('td');
                    sum_value.appendChild(document.createTextNode(sum));
                    var name1 = document.createElement('td');
                    var name1font = document.createElement('font');
                    name1font.appendChild(document.createTextNode(card[a][p][6] + '(' + card[a][p][5] + ')'));
                    name1font.setAttribute("color", card[a][p][7]);
                    name1.appendChild(name1font);
                    var waza1 = document.createElement('td');
                    waza1.setAttribute("bgcolor", card[a][p][9]);
                    waza1.appendChild(document.createTextNode(card[a][p][8]));
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
        } else {
            for (s = 0; s < card[a].length; s++) {
                if (card[a][s][6] == T_value2) {
                    p = s;
                    break;
                }
            }
            for (q = 0; q < card[b[b_num]].length; q++) {
                var sum = 0;
                for (j = 1; j < 5; j++) {
                    sum += Math.max(card[a][p][j], card[b[b_num]][q][j]);
                    if (card[a][p][j] > card[b[b_num]][q][j]) {
                        var better = card[a][p][7];
                    } else if (card[a][p][j] < card[b[b_num]][q][j]) {
                        var better = card[b[b_num]][q][7];
                    } else {
                        var better = "000000";
                    }
                    var td = document.createElement('td');
                    var tdfont = document.createElement('font');
                    tdfont.setAttribute("color", better);
                    tdfont.appendChild(document.createTextNode(Math.max(card[a][p][j], card[b[b_num]][q][j])));
                    td.appendChild(tdfont);
                    fragment.appendChild(td);
                }
                var td = document.createElement('td');
                var sum_value = document.createElement('td');
                sum_value.appendChild(document.createTextNode(sum));
                var name1 = document.createElement('td');
                var name1font = document.createElement('font');
                name1font.appendChild(document.createTextNode(card[a][p][6] + '(' + card[a][p][5] + ')'));
                name1font.setAttribute("color", card[a][p][7]);
                name1.appendChild(name1font);
                var waza1 = document.createElement('td');
                waza1.setAttribute("bgcolor", card[a][p][9]);
                waza1.appendChild(document.createTextNode(card[a][p][8]));
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
    document.fusion_name.fusion_list.selectedIndex = 0;
}
