// imageflip. Lightweight JQuery Mobile Image Gallery 
// Saman W Jayasekara : sam@cflove.org : www.cflove.org
// 15 Sap 2012 - Ver 0.1 - MIT License 
(function(a) {
    a.fn.imageflip = function() {
        var b = "js/images/loading.gif";
        var c = a("<img />").attr("src", b).load();
        //alert(c+'c');
        var d = a(this);
        a(this).children().each(function(b, c) {
            var d = a(this).find("a");
            d.attr("data-href", d.attr("href")).removeAttr("href")
        }).click(function(c) {
            a(d).children("[showing]").removeAttr("showing");
            a(this).attr("showing", "yes");
            var e = a(this).find("a").attr("data-href");
            var f = a(this).find("a").attr("title");
        
            if (e !== "") {
                if (!a("#imageflippage").length) {

                    a("body").append('<div data-role="page" id="imageflippage" data-theme="c" data-title=""><div data-role="content" id="tadcontent"><div id="imageflipimg"></div><div id="imagefliper"></div><div id="tadinfo"></div><div id="tadnavi" data-role="navbar"><ul><li><a href="" data-iconpos="notext" data-role="button" data-icon="delete" id="tadclose" style="float:right;padding:1.0em;background-color:black;margin:35px"></a></li></ui></div></div></div>');
                    a.mobile.initializePage();
                    a("#imageflippage").on("pagehide", function() {
                        a(this).remove()
                    });
                    a("#tadclose").click(function(a) {
                        history.back()
                    });
                    a("#imagefliper").click(function(b) {
                        if (a("#tadnavi").is(":visible")) {
                            a("#tadnavi").slideUp("slow");
                            a("#tadinfo:visible").slideUp("slow")
                        } else {
                            a("#tadnavi").slideDown("slow");
                            if (a("#tadinfo").html() !== "") {
                                a("#tadinfo").slideDown("slow")
                            }
                        }
                    }).swipeleft(function() {
                        a("#tadbk").click()
                    }).swiperight(function() {
                        a("#tadnxt").click()
                    });
                    a("#tadnxt").click(function(b) {
                        if (a(d).children("[showing]").next().length) {
                            a(d).children("[showing]").next().click()
                        } else {
                            a(d).children(":first-child").click()
                        }
                    });
                    a("#tadbk").click(function(b) {
                        if (a(d).children("[showing]").prev().length) {
                            a(d).children("[showing]").prev().click()
                        } else {
                            a(d).children(":last-child").click()
                        }
                    })
                }
                a("#imageflipimg").fadeOut("fast", function() {

                    a(".ui-btn-active").removeClass("ui-btn-active");
                    a("#imageflipimg").html('<img src="' + b + '" style="margin-top:120px">');
                    a("<img />").attr("src", e).load(function(b) {
//alert(f+'f');
                        if (typeof f !== "undefined" && f !== false && f !== "") {
                            a("#tadinfo").html(f).slideDown("slow", function() {
                                a("#tadinfo:visible").delay("4000").slideUp("slow")
                            })
                        } else {
                            a("#tadinfo").html("")
                        }
                        //var ee = "http://insurance.fourthforce.in/insurance/uploads/screen480x480.jpeg";
                       // var eee = "http://insurance.fourthforce.in/insurance/uploads/NaturalWallpaper 9.jpg";
                       var eee = e;

                        var t = eee.replace(/ /g, "%20");
                        //var encodedUrl = encodeURIComponent(eee);
                       //alert(t+'encodedUrl');

                        //alert(e+'e i');
                        a("#imageflipimg").css({
                            "background-image": "url(" + t + ")"
                        }).html("").fadeIn("slow")
                    })
                });
                if (!a("#imageflippage").is(":visible")) {
                    a.mobile.changePage("#imageflippage")
                }
            }
        })
    }
})(jQuery)