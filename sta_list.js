function status_shin() {
    var flagship = 0;
    var counter = 0;
    var fusiontable = document.createDocumentFragment();
    var fragment = document.createDocumentFragment();
    var thbody = document.createDocumentFragment();
    var tdbody = document.createDocumentFragment();
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
    var hero_name = document.createElement('th');
    hero_name.appendChild(document.createTextNode('キャラ'));
    var No = document.createElement('th');
    No.appendChild(document.createTextNode('No.'));
    var rare = document.createElement('th');
    rare.appendChild(document.createTextNode('レア'));
    tbody = document.createElement('tbody');
    thbody.appendChild(hissatsu);
    thbody.appendChild(tairyoku);
    thbody.appendChild(kogeki);
    thbody.appendChild(hayasa);
    thbody.appendChild(gokei);
    thbody.appendChild(hero_name);
    thbody.appendChild(No);
    thbody.appendChild(rare);
    trbody1.appendChild(thbody);
    thead.appendChild(trbody1);
    for (p = 0; p < card.length; p++) {
     if(p != 26 && p != 27){
      for (q = 0; q < card[p].length; q++){
            var sum = 0;
            for (j = 1; j < 5; j++) {
　　　　　　　  var number = card[p][q][j] * Kcard[p][j - 1];
                number = Math.round(number * 10)/10;
                sum += number;
                var td = document.createElement('td');
                var tdfont = document.createElement('font');
                tdfont.appendChild(document.createTextNode(number));
                td.appendChild(tdfont);
                fragment.appendChild(td);
            }
            var td = document.createElement('td');
            var sum_value = document.createElement('td');
            sum = Math.round(sum * 10) / 10
            sum_value.appendChild(document.createTextNode(sum));
            var name2 = document.createElement('td');
            var name2font = document.createElement('font');
            name2font.setAttribute("color", card[p][q][7]);
            name2font.appendChild(document.createTextNode(card[p][q][0]));
            name2.appendChild(name2font);
            var hero_no = document.createElement('td');
            hero_no.appendChild(document.createTextNode(card[p][q][6]));
            var rare = document.createElement('td');
            rare.appendChild(document.createTextNode(card[p][q][5]));
            fragment.appendChild(sum_value);
            fragment.appendChild(name2);
            fragment.appendChild(hero_no);
            fragment.appendChild(rare);
            var tr = document.createElement('tr');
            tr.appendChild(fragment);
            tdbody.appendChild(tr);
          }
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
    fusiontable.appendChild(tables);
    if (counter == 0) {
        var clone = document.getElementById("list").cloneNode(false); //ガワだけ複製して…
        document.getElementById("list").parentNode.replaceChild(clone, document.getElementById("list")); //すげ替え。
    }
    document.getElementById("list").appendChild(fusiontable);
    counter += 1;
}
