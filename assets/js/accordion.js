(function() {
    var defaultOptions = {
        hideOnStart: false,
        initItem: 3,
        animate: false,
        animateDuration: 200,
        labelMore: "もっと見る",
        labelLess: "閉じる"
    };
    $.fn.accordion = function(args) {
        var options;
        if (typeof(args) === "undefined") {
            options = defaultOptions;
        } else {
            options = $.extend({}, defaultOptions, args);
        }
        var thiz = this;
        var target = $("#" + this.attr("data-target"));
        if (target.length === 0) {
            return;
        }
        var childs = target.children("li");
        if (childs.length <= options.initItem) {
            thiz.hide();
            return;
        } else {
            childs = childs.slice(options.initItem);
        }

        // Hide on start
        if (options.hideOnStart) {
            childs.hide();
        }

        this.on("click", function() {
            if (options.animate === "slide") {
                childs.slideToggle(options.animateDuration);
            } else if (options.animate === "fade") {
                childs.fadeToggle(options.animateDuration);
            } else {
                childs.toggle();
            }
            var dataExpanded = thiz.attr("data-expanded");
            if (dataExpanded === "1") {
                thiz.attr("data-expanded", "0");
                thiz.html(options.labelMore);
            } else {
                thiz.attr("data-expanded", "1");
                thiz.html(options.labelLess);
            }
        });
    }
})();
