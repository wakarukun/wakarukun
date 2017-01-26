;(function($) {
    $.fn.sortableInit = function(){
        var elements = this;

        var sortKeyClass = [
            'sort_number',
            'sort_number_attr'
        ];

        elements.each(function(){
            $(this).find('thead').find('tr:last').find('th').each(function(index){
                var self = this;
                // 対象クラスを持たない列にはソートボタンを表示しない
                if(!sortKeyClass.some(function(v){
                    return $(self).hasClass(v);
                })) return this;

                var func = null;
                var isAttr = null;
                // 数値型
                if ($(this).hasClass('sort_number')) {
                    func = mergeSortNumber;
                    isAttr = false;
                }
                // 属性数値型
                else if ($(this).hasClass('sort_number_attr')) {
                    func = mergeSortNumber;
                    isAttr = true;
                }

                var ascObj = $('<span>').html('▲').click(function(){
                    $(this).sortable(index, true, func, isAttr);
                }).css({"cursor":"pointer"});
                var descObj = $('<span>').html('▼').click(function(){
                    $(this).sortable(index, false, func, isAttr);
                }).css({"cursor":"pointer"});
                $(this).append($('<div>').addClass('sort_cursor').append(ascObj).append(descObj));
            });
        });

        return this;
    };

    $.fn.sortable = function(index, isAsc, func, isAttr){
        var element = this;

        var tbody = element.closest('table').find('tbody');
        // 色付けクラス削除
        tbody.find('td').removeClass('sort_by_asc sort_by_desc');
        var trs = [];
        tbody.find('tr').each(function(i){
            trs[i] = this;
        });
        trs = func(trs, index, isAsc, isAttr);
        tbody.empty().append(trs);
        // 色付けクラス追加
        tbody.find('tr').each(function(){
            $(this).find('td').eq(index).addClass(isAsc ? 'sort_by_asc' : 'sort_by_desc');
        });
        return this;
    };

    function mergeSortNumber(a, index, isAsc, isAttr) {
        var split = function(array) {
                if (array.length < 2) {
                    return array;
                }
                var a, b, mid = array.length / 2 | 0;
                a = split(array.slice(0, mid));
                b = split(array.slice(mid, array.length));

                return merge(array, a, b);
            },
            merge = function(array, a, b) {
                if (b === void 0) {
                    return array;
                }
                var c = [],
                    i, j;
                while (a.length > 0 && b.length > 0) {
                    if (isAttr) {
                        i = getValueAttr(a[0], index);
                        j = getValueAttr(b[0], index);
                    }
                    else {
                        i = getValueHtml(a[0], index);
                        j = getValueHtml(b[0], index);
                    }

                    if (isAsc) {
                        if (i <= j) {
                            c.push(a.shift());
                        } else {
                            c.push(b.shift());
                        }
                    } else {
                        if (i >= j) {
                            c.push(a.shift());
                        } else {
                            c.push(b.shift());
                        }
                    }
                }
                if (a.length === 0) {
                    c = c.concat(b);
                } else if (b.length === 0) {
                    c = c.concat(a);
                }
                return c;
            }
        return split(a);
    }

    function getValueHtml(tag, index) {
        return 1 * $(tag).find('td').eq(index).html();
    } 
    function getValueAttr(tag, index) {
        return 1 * $(tag).find('td').eq(index).attr('sort-value');
    } 
})(jQuery);
