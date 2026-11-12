! function(t) {
    function d(e) {
        var i = t(this);
        i.scrollTop() > parseInt(cnArgs.onScrollOffset) && (i.setCookieNotice("accept"), i.off("scroll", d))
    }
    t(document).ready(function() {
        var s = t("#cookie-notice"),
            c = t.fn.getCookieNotice();
        t(document).on("click", ".cn-set-cookie", function(e) {
            e.preventDefault(), t(this).setCookieNotice(t(this).data("cookie-set"))
        }), t(document).on("click", ".cn-revoke-cookie", function(e) {
            if (e.preventDefault(), "yes" === cnArgs.refuse) {
                var i = t(this);
                if ("yes" === cnArgs.onScroll && t(window).on("scroll", d), "1" === cnArgs.revoke_cookies) {
                    if (i.hasClass("cn-revoke-inline")) {
                        var o = t("body");
                        o.hasClass("cookies-revoke") || o.hasClass("cookies-not-set") || ("automatic" === cnArgs.revoke_cookies_opt ? s.showCookieNotice(3) : s.showCookieNotice(2))
                    } else s.showCookieNotice(1);
                    c = t.fn.getCookieNotice(), t.fn.setCookieNoticeBodyClass("cookies-set cookies-revoke " + ("true" === c ? "cookies-accepted" : "cookies-refused"))
                }
            }
        }), void 0 === c ? ("yes" === cnArgs.onScroll && t(window).on("scroll", d), s.showCookieNotice(0), t.fn.setCookieNoticeBodyClass("cookies-not-set")) : "yes" === cnArgs.refuse ? "1" === cnArgs.revoke_cookies && ("automatic" === cnArgs.revoke_cookies_opt && s.hideCookieNotice(1), t.fn.setCookieNoticeBodyClass("cookies-set " + ("true" === c ? "cookies-accepted" : "cookies-refused"))) : t.fn.setCookieNoticeBodyClass("cookies-set " + ("true" === c ? "cookies-accepted" : "cookies-refused"))
    }), t.fn.setCookieNotice = function(e) {
        "yes" === cnArgs.onScroll && t(window).off("scroll", d);
        var i = new Date,
            o = new Date,
            s = t("#cookie-notice");
        if (o.setTime(parseInt(i.getTime()) + 1e3 * parseInt(cnArgs.cookieTime)), e = "accept" === e ? "true" : "false", document.cookie = cnArgs.cookieName + "=" + e + ";expires=" + o.toUTCString() + ";" + (void 0 !== cnArgs.cookieDomain && "" !== cnArgs.cookieDomain ? "domain=" + cnArgs.cookieDomain + ";" : "") + (void 0 !== cnArgs.cookiePath && "" !== cnArgs.cookiePath ? "path=" + cnArgs.cookiePath + ";" : "") + ("1" === cnArgs.secure ? "secure;" : ""), t.event.trigger({
                type: "setCookieNotice",
                value: e,
                time: i,
                expires: o
            }), t.fn.setCookieNoticeBodyClass("cookies-set " + ("true" === e ? "cookies-accepted" : "cookies-refused")), "yes" === cnArgs.refuse && "1" === cnArgs.revoke_cookies && "automatic" === cnArgs.revoke_cookies_opt ? s.hideCookieNotice(2) : s.hideCookieNotice(0), e && "1" === cnArgs.redirection) {
            var c = window.location.protocol + "//",
                n = window.location.host + "/" + window.location.pathname;
            "1" === cnArgs.cache ? (c = c + n.replace("//", "/") + ("" === window.location.search ? "?" : window.location.search + "&") + "cn-reloaded=1" + window.location.hash, window.location.href = c) : (c = c + n.replace("//", "/") + window.location.search + window.location.hash, window.location.reload(!0))
        } else;
    }, t.fn.setCookieNoticeBodyClass = function(e) {
        t("body").removeClass("cookies-revoke cookies-accepted cookies-refused cookies-set cookies-not-set").addClass(e)
    }, t.fn.getCookieNotice = function() {
        var e = ("; " + document.cookie).split("; cookie_notice_accepted=");
        return 2 === e.length ? e.pop().split(";").shift() : void 0
    }, t.fn.showCookieNotice = function(e) {
        t.event.trigger({
            type: "showCookieNotice",
            value: e,
            data: cnArgs
        });
        var i = this;
        switch (e) {
            case 0:
                "fade" === cnArgs.hideEffect ? i.css({
                    visibility: "visible",
                    display: "none"
                }).fadeIn(400) : "slide" === cnArgs.hideEffect ? i.css({
                    visibility: "visible",
                    display: "none"
                }).slideDown(400) : i.css({
                    visibility: "visible"
                }).show();
                break;
            case 1:
                "fade" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").fadeOut(400, function() {
                    i.css({
                        visibility: "visible",
                        display: "none"
                    }).fadeIn(400)
                }) : "slide" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").slideUp(400, function() {
                    i.css({
                        visibility: "visible",
                        display: "none"
                    }).slideDown(400)
                }) : i.css({
                    visibility: "visible"
                }).find(".cookie-notice-revoke-container").hide();
                break;
            case 2:
                "fade" === cnArgs.hideEffect ? i.css({
                    visibility: "visible",
                    display: "none"
                }).fadeIn(400) : "slide" === cnArgs.hideEffect ? i.css({
                    visibility: "visible",
                    display: "none"
                }).slideDown(400) : i.css({
                    visibility: "visible"
                });
                break;
            case 3:
                "fade" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").fadeOut(400, function() {
                    i.css({
                        visibility: "visible",
                        display: "none"
                    }).fadeIn(400)
                }) : "slide" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").slideUp(400, function() {
                    i.css({
                        visibility: "visible",
                        display: "none"
                    }).slideDown(400)
                }) : i.css({
                    visibility: "visible"
                }).find(".cookie-notice-revoke-container").hide()
        }
    }, t.fn.hideCookieNotice = function(e) {
        t.event.trigger({
            type: "hideCookieNotice",
            value: e,
            data: cnArgs
        });
        var i = this,
            o = this.css("display");
        switch (e) {
            case 0:
                "fade" === cnArgs.hideEffect ? i.fadeOut(400) : "slide" === cnArgs.hideEffect ? i.slideUp(400) : i.css({
                    visibility: "hidden"
                });
                break;
            case 1:
                "fade" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").hide().fadeIn(400).css({
                    visibility: "visible",
                    display: "block"
                }) : "slide" === cnArgs.hideEffect ? i.find(".cookie-notice-revoke-container").hide().slideDown(400).css({
                    visibility: "visible",
                    display: "block"
                }) : i.find(".cookie-notice-revoke-container").css({
                    visibility: "visible",
                    display: "block"
                });
                break;
            case 2:
                "fade" === cnArgs.hideEffect ? i.fadeOut(400, function() {
                    i.css({
                        visibility: "hidden",
                        display: o
                    }).find(".cookie-notice-revoke-container").hide().fadeIn(400).css({
                        visibility: "visible",
                        display: "block"
                    })
                }) : "slide" === cnArgs.hideEffect ? i.slideUp(400, function() {
                    i.css({
                        visibility: "hidden",
                        display: o
                    }).find(".cookie-notice-revoke-container").hide().slideDown(400).css({
                        visibility: "visible",
                        display: "block"
                    })
                }) : i.css({
                    visibility: "hidden"
                }).find(".cookie-notice-revoke-container").css({
                    visibility: "visible",
                    display: "block"
                })
        }
    }
}(jQuery);
var WPacTime = WPacTime || {
    getTime: function(a, b, d) {
        return "chat" == d ? this.getChatTime(a, b || "en") : d ? this.getFormatTime(a, d, b || "en") : this.getDefaultTime(a, b || "en")
    },
    getChatTime: function(a, b) {
        var d = ((new Date).getTime() - a) / 1E3 / 60 / 60,
            c = d / 24;
        return 24 > d ? this.getFormatTime(a, "HH:mm", b) : 365 > c ? this.getFormatTime(a, "dd.MM HH:mm", b) : this.getFormatTime(a, "yyyy.MM.dd HH:mm", b)
    },
    getDefaultTime: function(a, b) {
        return this.getTimeAgo(a, b)
    },
    getTimeAgo: function(a, b) {
        a = ((new Date).getTime() - a) / 1E3;
        var d = a / 60,
            c = d / 60,
            e = c / 24,
            f = e / 365;
        b = WPacTime.Messages[b] ? b : "en";
        return 45 > a ? WPacTime.Messages[b].second : 90 > a ? WPacTime.Messages[b].minute : 45 > d ? WPacTime.Messages[b].minutes(d) : 90 > d ? WPacTime.Messages[b].hour : 24 > c ? WPacTime.Messages[b].hours(c) : 48 > c ? WPacTime.Messages[b].day : 30 > e ? WPacTime.Messages[b].days(e) : 60 > e ? WPacTime.Messages[b].month : 365 > e ? WPacTime.Messages[b].months(e) : 2 > f ? WPacTime.Messages[b].year : WPacTime.Messages[b].years(f)
    },
    getTime12: function(a, b) {
        a = new Date(a);
        return (a.getHours() % 12 ? a.getHours() % 12 : 12) + ":" + a.getMinutes() +
            (12 <= a.getHours() ? " PM" : " AM")
    },
    getFormatTime: function(a, b, d) {
        var c = new Date(a),
            e = {
                SS: c.getMilliseconds(),
                ss: c.getSeconds(),
                mm: c.getMinutes(),
                HH: c.getHours(),
                hh: (c.getHours() % 12 ? c.getHours() % 12 : 12) + (12 <= c.getHours() ? "PM" : "AM"),
                dd: c.getDate(),
                MM: c.getMonth() + 1,
                yyyy: c.getFullYear(),
                yy: String(c.getFullYear()).toString().substr(2, 2),
                ago: this.getTimeAgo(a, d),
                12: this.getTime12(a, d)
            };
        return b.replace(/(SS|ss|mm|HH|hh|DD|dd|MM|yyyy|yy|ago|12)/g, function(a, b) {
            a = e[b];
            return 10 > a ? "0" + a : a
        })
    },
    declineNum: function(a, b, d, c) {
        return a + " " + this.declineMsg(a, b, d, c)
    },
    declineMsg: function(a, b, d, c, e) {
        var f = a % 10;
        return 1 == f && (1 == a || 20 < a) ? b : 1 < f && 5 > f && (20 < a || 10 > a) ? d : a ? c : e
    }
};
WPacTime.Messages = {
    ru: {
        second: "\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e",
        minute: "\u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u043c\u0438\u043d\u0443\u0442\u0430 \u043d\u0430\u0437\u0430\u0434", "\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434", "\u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434")
        },
        hour: "\u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434", "\u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434", "\u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434")
        },
        day: "\u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434", "\u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434", "\u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434")
        },
        month: "\u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434", "\u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434", "\u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434")
        },
        year: "\u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434", "\u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434", "\u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434")
        }
    },
    en: {
        second: "just now",
        minute: "1m ago",
        minutes: function(a) {
            return Math.round(a) + "m ago"
        },
        hour: "1h ago",
        hours: function(a) {
            return Math.round(a) + "h ago"
        },
        day: "a day ago",
        days: function(a) {
            return Math.round(a) + " days ago"
        },
        month: "a month ago",
        months: function(a) {
            return Math.round(a / 30) + " months ago"
        },
        year: "a year ago",
        years: function(a) {
            return Math.round(a) + " years ago"
        }
    },
    uk: {
        second: "\u0442\u0456\u043b\u044c\u043a\u0438 \u0449\u043e",
        minute: "\u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443", "\u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443", "\u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443")
        },
        hour: "\u0433\u043e\u0434\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0433\u043e\u0434\u0438\u043d\u0443 \u0442\u043e\u043c\u0443", "\u0433\u043e\u0434\u0438\u043d\u0438 \u0442\u043e\u043c\u0443", "\u0433\u043e\u0434\u0438\u043d \u0442\u043e\u043c\u0443")
        },
        day: "\u0434\u0435\u043d\u044c \u0442\u043e\u043c\u0443",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0434\u0435\u043d\u044c \u0442\u043e\u043c\u0443", "\u0434\u043d\u0456 \u0442\u043e\u043c\u0443", "\u0434\u043d\u0456\u0432 \u0442\u043e\u043c\u0443")
        },
        month: "\u043c\u0456\u0441\u044f\u0446\u044c \u0442\u043e\u043c\u0443",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u043c\u0456\u0441\u044f\u0446\u044c \u0442\u043e\u043c\u0443", "\u043c\u0456\u0441\u044f\u0446\u0456 \u0442\u043e\u043c\u0443", "\u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0442\u043e\u043c\u0443")
        },
        year: "\u0440\u0456\u043a \u0442\u043e\u043c\u0443",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0440\u0456\u043a \u0442\u043e\u043c\u0443", "\u0440\u043e\u043a\u0438 \u0442\u043e\u043c\u0443", "\u0440\u043e\u043a\u0456\u0432 \u0442\u043e\u043c\u0443")
        }
    },
    ro: {
        second: "chiar acum",
        minute: "\u00een urm\u0103 minut",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "o minuta in urma", "minute in urma", "de minute in urma")
        },
        hour: "acum o ora",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "acum o ora", "ore in urma", "de ore in urma")
        },
        day: "o zi in urma",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "o zi in urma", "zile in urma", "de zile in urma")
        },
        month: "o luna in urma",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "o luna in urma", "luni in urma", "de luni in urma")
        },
        year: "un an in urma",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "un an in urma", "ani in urma", "de ani in urma")
        }
    },
    lv: {
        second: "Maz\u0101k par min\u016bti",
        minute: "Pirms min\u016btes",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "pirms min\u016btes", "pirms min\u016bt\u0113m", "pirms min\u016bt\u0113m")
        },
        hour: "pirms stundas",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "pirms stundas", "pirms stund\u0101m", "pirms stund\u0101m")
        },
        day: "pirms dienas",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "pirms dienas", "pirms dien\u0101m", "pirms dien\u0101m")
        },
        month: "pirms m\u0113ne\u0161a",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "pirms m\u0113ne\u0161a", "pirms m\u0113ne\u0161iem", "pirms m\u0113ne\u0161iem")
        },
        year: "pirms gada",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "pirms gada", "pirms gadiem", "pirms gadiem")
        }
    },
    lt: {
        second: "k\u0105 tik",
        minute: "prie\u0161 minut\u0119",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "minut\u0117 prie\u0161", "minut\u0117s prie\u0161", "minu\u010di\u0173 prie\u0161")
        },
        hour: "prie\u0161 valand\u0105",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "valanda prie\u0161", "valandos prie\u0161", "valand\u0173 prie\u0161")
        },
        day: "prie\u0161 dien\u0105",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "diena prie\u0161", "dienos prie\u0161", "dien\u0173 prie\u0161")
        },
        month: "prie\u0161 m\u0117nes\u012f",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "m\u0117nes\u012f prie\u0161", "m\u0117nesiai prie\u0161", "m\u0117nesi\u0173 prie\u0161")
        },
        year: "prie\u0161 metus",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "metai prie\u0161", "metai prie\u0161", "met\u0173 prie\u0161")
        }
    },
    kk: {
        second: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437 \u0443\u0430\u049b\u044b\u0442 \u0431\u04b1\u0440\u044b\u043d",
        minute: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d", "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d", "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d")
        },
        hour: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d", "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d", "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d")
        },
        day: "\u0431\u0456\u0440 \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d", "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d", "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d")
        },
        month: "\u0431\u0456\u0440 \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d", "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d", "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d")
        },
        year: "\u0431\u0456\u0440 \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d", "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d", "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d")
        }
    },
    ka: {
        second: "\u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",
        minute: "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc")
        },
        hour: "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc")
        },
        day: "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc")
        },
        month: "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc")
        },
        year: "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc", "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc")
        }
    },
    hy: {
        second: "\u0574\u056b \u0584\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576 \u0561\u057c\u0561\u057b",
        minute: "\u0574\u0565\u056f \u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b", "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b", "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b")
        },
        hour: "\u0574\u0565\u056f \u056a\u0561\u0574 \u0561\u057c\u0561\u057b",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b", "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b", "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b")
        },
        day: "\u0574\u0565\u056f \u0585\u0580 \u0561\u057c\u0561\u057b",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0585\u0580 \u0561\u057c\u0561\u057b", "\u0585\u0580 \u0561\u057c\u0561\u057b", "\u0585\u0580 \u0561\u057c\u0561\u057b")
        },
        month: "\u0574\u0565\u056f \u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b", "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b", "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b")
        },
        year: "\u0574\u0565\u056f \u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b", "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b", "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b")
        }
    },
    fr: {
        second: "tout \u00e0 l'heure",
        minute: "environ une minute",
        minutes: function(a) {
            return Math.round(a) + " minutes"
        },
        hour: "environ une heure",
        hours: function(a) {
            return "environ " + Math.round(a) + " heures"
        },
        day: "un jour",
        days: function(a) {
            return Math.round(a) + " jours"
        },
        month: "environ un mois",
        months: function(a) {
            return Math.round(a / 30) + " mois"
        },
        year: "environ un an",
        years: function(a) {
            return Math.round(a) + " ans"
        }
    },
    es: {
        second: "ahora",
        minute: "hace un minuto",
        minutes: function(a) {
            return "hace " + Math.round(a) + " minuts"
        },
        hour: "hace una hora",
        hours: function(a) {
            return "hace " + Math.round(a) + " horas"
        },
        day: "hace un dia",
        days: function(a) {
            return "hace " + Math.round(a) + " d\u00edas"
        },
        month: "hace un mes",
        months: function(a) {
            return "hace " + Math.round(a / 30) + " meses"
        },
        year: "hace a\u00f1os",
        years: function(a) {
            return "hace " + Math.round(a) + " a\u00f1os"
        }
    },
    el: {
        second: "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
        minute: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
        minutes: function(a) {
            return Math.round(a) + " minutes"
        },
        hour: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03b7\u03bd \u03bc\u03b9\u03b1 \u03ce\u03c1\u03b1",
        hours: function(a) {
            return "about " + Math.round(a) + " hours"
        },
        day: "\u03bc\u03b9\u03b1 \u03bc\u03ad\u03c1\u03b1",
        days: function(a) {
            return Math.round(a) + " days"
        },
        month: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
        months: function(a) {
            return Math.round(a / 30) + " months"
        },
        year: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
        years: function(a) {
            return Math.round(a) + " years"
        }
    },
    de: {
        second: "soeben",
        minute: "vor einer Minute",
        minutes: function(a) {
            return "vor " + Math.round(a) + " Minuten"
        },
        hour: "vor einer Stunde",
        hours: function(a) {
            return "vor " + Math.round(a) + " Stunden"
        },
        day: "vor einem Tag",
        days: function(a) {
            return "vor " + Math.round(a) + " Tagen"
        },
        month: "vor einem Monat",
        months: function(a) {
            return "vor " +
                Math.round(a / 30) + " Monaten"
        },
        year: "vor einem Jahr",
        years: function(a) {
            return "vor " + Math.round(a) + " Jahren"
        }
    },
    be: {
        second: "\u043c\u0435\u043d\u0448 \u0437\u0430 \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
        minute: "\u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0445\u0432\u0456\u043b\u0456\u043d\u0430 \u0442\u0430\u043c\u0443", "\u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443", "\u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443")
        },
        hour: "\u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443", "\u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443", "\u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443")
        },
        day: "\u0434\u0437\u0435\u043d\u044c \u0442\u0430\u043c\u0443",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0434\u0437\u0435\u043d\u044c \u0442\u0430\u043c\u0443", "\u0434\u043d\u0456 \u0442\u0430\u043c\u0443", "\u0434\u0437\u0451\u043d \u0442\u0430\u043c\u0443")
        },
        month: "\u043c\u0435\u0441\u044f\u0446 \u0442\u0430\u043c\u0443",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "\u043c\u0435\u0441\u044f\u0446 \u0442\u0430\u043c\u0443", "\u043c\u0435\u0441\u044f\u0446\u0430 \u0442\u0430\u043c\u0443", "\u043c\u0435\u0441\u044f\u0446\u0430\u045e \u0442\u0430\u043c\u0443")
        },
        year: "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443", "\u0433\u0430\u0434\u044b \u0442\u0430\u043c\u0443", "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443")
        }
    },
    it: {
        second: "proprio ora",
        minute: "un minuto fa",
        minutes: function(a) {
            return WPacTime.declineNum(Math.round(a), "un minuto fa", "minuti fa", "minuti fa")
        },
        hour: "un'ora fa",
        hours: function(a) {
            return WPacTime.declineNum(Math.round(a), "un'ora fa", "ore fa", "ore fa")
        },
        day: "un giorno fa",
        days: function(a) {
            return WPacTime.declineNum(Math.round(a), "un giorno fa", "giorni fa", "giorni fa")
        },
        month: "un mese fa",
        months: function(a) {
            return WPacTime.declineNum(Math.round(a / 30), "un mese fa", "mesi fa", "mesi fa")
        },
        year: "un anno fa",
        years: function(a) {
            return WPacTime.declineNum(Math.round(a), "un anno fa", "anni fa", "anni fa")
        }
    },
    tr: {
        second: "az \u00f6nce",
        minute: "dakika \u00f6nce",
        minutes: function(a) {
            return Math.round(a) + " dakika \u00f6nce"
        },
        hour: "saat \u00f6nce",
        hours: function(a) {
            return Math.round(a) + " saat \u00f6nce"
        },
        day: "g\u00fcn \u00f6nce",
        days: function(a) {
            return Math.round(a) + " g\u00fcn \u00f6nce"
        },
        month: "ay \u00f6nce",
        months: function(a) {
            return Math.round(a / 30) + " ay \u00f6nce"
        },
        year: "y\u0131l \u00f6nce",
        years: function(a) {
            return Math.round(a) + " y\u0131l \u00f6nce"
        }
    },
    nb: {
        second: "n\u00e5 nettopp",
        minute: "ett minutt siden",
        minutes: function(a) {
            return Math.round(a) + " minutter siden"
        },
        hour: "en time siden",
        hours: function(a) {
            return Math.round(a) + " timer siden"
        },
        day: "en dag siden",
        days: function(a) {
            return Math.round(a) + " dager siden"
        },
        month: "en m\u00e5ned siden",
        months: function(a) {
            return Math.round(a / 30) + " m\u00e5neder siden"
        },
        year: "ett \u00e5r siden",
        years: function(a) {
            return Math.round(a) + " \u00e5r siden"
        }
    },
    da: {
        second: "lige nu",
        minute: "et minut siden",
        minutes: function(a) {
            return Math.round(a) + " minutter siden"
        },
        hour: "en time siden",
        hours: function(a) {
            return Math.round(a) + " timer siden"
        },
        day: "en dag siden",
        days: function(a) {
            return Math.round(a) + " dage siden"
        },
        month: "en m\u00e5ned siden",
        months: function(a) {
            return Math.round(a / 30) + " m\u00e5neder siden"
        },
        year: "et \u00e5r siden",
        years: function(a) {
            return Math.round(a) + " \u00e5r siden"
        }
    },
    nl: {
        second: "zojuist",
        minute: "minuten geleden",
        minutes: function(a) {
            return Math.round(a) + " minuten geleden"
        },
        hour: "uur geleden",
        hours: function(a) {
            return Math.round(a) + " uur geleden"
        },
        day: "1 dag geleden",
        days: function(a) {
            return Math.round(a) + " dagen geleden"
        },
        month: "maand geleden",
        months: function(a) {
            return Math.round(a / 30) + " maanden geleden"
        },
        year: "jaar geleden",
        years: function(a) {
            return Math.round(a) + " jaar geleden"
        }
    },
    ca: {
        second: "ara mateix",
        minute: "fa un minut",
        minutes: function(a) {
            return "fa " +
                Math.round(a) + " minuts"
        },
        hour: "fa una hora",
        hours: function(a) {
            return "fa " + Math.round(a) + " hores"
        },
        day: "fa un dia",
        days: function(a) {
            return "fa " + Math.round(a) + " dies"
        },
        month: "fa un mes",
        months: function(a) {
            return "fa " + Math.round(a / 30) + " mesos"
        },
        year: "fa un any",
        years: function(a) {
            return "fa " + Math.round(a) + " anys"
        }
    },
    sv: {
        second: "just nu",
        minute: "en minut sedan",
        minutes: function(a) {
            return Math.round(a) + " minuter sedan"
        },
        hour: "en timme sedan",
        hours: function(a) {
            return Math.round(a) + " timmar sedan"
        },
        day: "en dag sedan",
        days: function(a) {
            return Math.round(a) + " dagar sedan"
        },
        month: "en m\u00e5nad sedan",
        months: function(a) {
            return Math.round(a / 30) + " m\u00e5nader sedan"
        },
        year: "ett \u00e5r sedan",
        years: function(a) {
            return Math.round(a) + " \u00e5r sedan"
        }
    },
    pl: {
        second: "w\u0142a\u015bnie teraz",
        minute: "minut\u0119 temu",
        minutes: function(a) {
            return Math.round(a) + " minut temu"
        },
        hour: "godzin\u0119 temu",
        hours: function(a) {
            return Math.round(a) + " godzin temu"
        },
        day: "wczoraj",
        days: function(a) {
            return Math.round(a) + " dni temu"
        },
        month: "miesi\u0105c temu",
        months: function(a) {
            return Math.round(a / 30) + " miesi\u0119cy temu"
        },
        year: "rok temu",
        years: function(a) {
            return Math.round(a) + " lat temu"
        }
    },
    pt: {
        second: "agora",
        minute: "1 minuto atr\u00e1s",
        minutes: function(a) {
            return Math.round(a) + " minutos atr\u00e1s"
        },
        hour: "1 hora atr\u00e1s",
        hours: function(a) {
            return Math.round(a) + " horas atr\u00e1s"
        },
        day: "1 dia atr\u00e1s",
        days: function(a) {
            return Math.round(a) + " dias atr\u00e1s"
        },
        month: "1 m\u00eas atr\u00e1s",
        months: function(a) {
            return Math.round(a / 30) + " meses atr\u00e1s"
        },
        year: "1 ano atr\u00e1s",
        years: function(a) {
            return Math.round(a) + " anos atr\u00e1s"
        }
    },
    hu: {
        second: "\u00e9pp az im\u00e9nt",
        minute: "1 perccel ezel\u0151tt",
        minutes: function(a) {
            return Math.round(a) + " perccel ezel\u0151tt"
        },
        hour: "\u00f3r\u00e1val ezel\u0151tt",
        hours: function(a) {
            return Math.round(a) + " \u00f3r\u00e1val ezel\u0151tt"
        },
        day: "nappal ezel\u0151tt",
        days: function(a) {
            return Math.round(a) + " nappal ezel\u0151tt"
        },
        month: "h\u00f3nappal ezel\u0151tt",
        months: function(a) {
            return Math.round(a / 30) + " h\u00f3nappal ezel\u0151tt"
        },
        year: "\u00e9vvel ezel\u0151tt",
        years: function(a) {
            return Math.round(a) + " \u00e9vvel ezel\u0151tt"
        }
    },
    fi: {
        second: "juuri nyt",
        minute: "minuutti sitten",
        minutes: function(a) {
            return Math.round(a) + " minuuttia sitten"
        },
        hour: "tunti sitten",
        hours: function(a) {
            return Math.round(a) + " tuntia sitten"
        },
        day: "p\u00e4iv\u00e4 sitten",
        days: function(a) {
            return Math.round(a) + " p\u00e4iv\u00e4\u00e4 sitten"
        },
        month: "kuukausi sitten",
        months: function(a) {
            return Math.round(a / 30) + " kuukautta sitten"
        },
        year: "vuosi sitten",
        years: function(a) {
            return Math.round(a) + " vuotta sitten"
        }
    },
    he: {
        second: "\u05d4\u05e8\u05d2\u05e2",
        minute: "\u05dc\u05e4\u05e0\u05d9 \u05d3\u05e7\u05d4",
        minutes: function(a) {
            return "\u05dc\u05e4\u05e0\u05d9 " + Math.round(a) + " \u05d3\u05e7\u05d5\u05ea"
        },
        hour: "\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05d4",
        hours: function(a) {
            return "\u05dc\u05e4\u05e0\u05d9 " + Math.round(a) + " \u05e9\u05e2\u05d5\u05ea"
        },
        day: "\u05dc\u05e4\u05e0\u05d9 \u05d9\u05d5\u05dd",
        days: function(a) {
            return "\u05dc\u05e4\u05e0\u05d9 " + Math.round(a) + " \u05d9\u05de\u05d9\u05dd"
        },
        month: "\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9",
        months: function(a) {
            return 2 == Math.round(a / 30) ? "\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : "\u05dc\u05e4\u05e0\u05d9 " + Math.round(a / 30) + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
        },
        year: "\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05d4",
        years: function(a) {
            return "\u05dc\u05e4\u05e0\u05d9 " + Math.round(a) + " \u05e9\u05e0\u05d9\u05dd"
        }
    },
    bg: {
        second: "\u0432 \u043c\u043e\u043c\u0435\u043d\u0442\u0430",
        minute: "\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0438\u043d\u0443\u0442\u0430",
        minutes: function(a) {
            return "\u043f\u0440\u0435\u0434\u0438 " +
                Math.round(a) + " \u043c\u0438\u043d\u0443\u0442\u0438"
        },
        hour: "\u043f\u0440\u0435\u0434\u0438 1 \u0447\u0430\u0441",
        hours: function(a) {
            return "\u043f\u0440\u0435\u0434\u0438 " + Math.round(a) + " \u0447\u0430\u0441\u0430"
        },
        day: "\u043f\u0440\u0435\u0434\u0438 1 \u0434\u0435\u043d",
        days: function(a) {
            return "\u043f\u0440\u0435\u0434\u0438 " + Math.round(a) + " \u0434\u043d\u0438"
        },
        month: "\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0435\u0441\u0435\u0446",
        months: function(a) {
            return "\u043f\u0440\u0435\u0434\u0438 " + Math.round(a / 30) + " \u043c\u0435\u0441\u0435\u0446\u0430"
        },
        year: "\u043f\u0440\u0435\u0434\u0438 1 \u0433\u043e\u0434\u0438\u043d\u0430",
        years: function(a) {
            return "\u043f\u0440\u0435\u0434\u0438 " + Math.round(a) + " \u0433\u043e\u0434\u0438\u043d\u0438"
        }
    },
    sk: {
        second: "pr\u00e1ve teraz",
        minute: "pred min\u00fatov",
        minutes: function(a) {
            return "pred " + Math.round(a) + " min\u00fatami"
        },
        hour: "pred hodinou",
        hours: function(a) {
            return "pred " + Math.round(a) + " hodinami"
        },
        day: "v\u010dera",
        days: function(a) {
            return "pred " + Math.round(a) + " d\u0148ami"
        },
        month: "pred mesiacom",
        months: function(a) {
            return "pred " + Math.round(a / 30) + " mesiacmi"
        },
        year: "pred rokom",
        years: function(a) {
            return "pred " + Math.round(a) + " rokmi"
        }
    },
    lo: {
        second: "\u0ea7\u0eb1\u0ec8\u0e87\u0e81\u0eb5\u0ec9\u0e99\u0eb5\u0ec9",
        minute: "\u0edc\u0eb6\u0ec8\u0e87\u0e99\u0eb2\u0e97\u0eb5\u0e81\u0ec8\u0ead\u0e99",
        minutes: function(a) {
            return Math.round(a) + " \u0e99\u0eb2\u0e97\u0eb5\u0e81\u0ec8\u0ead\u0e99"
        },
        hour: "\u0edc\u0eb6\u0ec8\u0e87\u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87\u0e81\u0ec8\u0ead\u0e99",
        hours: function(a) {
            return Math.round(a) + " \u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87\u0e81\u0ec8\u0ead\u0e99"
        },
        day: "\u0edc\u0eb6\u0ec8\u0e87\u0ea1\u0eb7\u0ec9\u0e81\u0ec8\u0ead\u0e99",
        days: function(a) {
            return Math.round(a) + " \u0ea1\u0eb7\u0ec9\u0e81\u0ec8\u0ead\u0e99"
        },
        month: "\u0edc\u0eb6\u0ec8\u0e87\u0ec0\u0e94\u0eb7\u0ead\u0e99\u0e81\u0ec8\u0ead\u0e99",
        months: function(a) {
            return Math.round(a / 30) + " \u0ec0\u0e94\u0eb7\u0ead\u0e99\u0e81\u0ec8\u0ead\u0e99"
        },
        year: "\u0edc\u0eb6\u0ec8\u0e87\u0e9b\u0eb5\u0e81\u0ec8\u0ead\u0e99",
        years: function(a) {
            return Math.round(a) + " \u0e9b\u0eb5\u0e81\u0ec8\u0ead\u0e99"
        }
    },
    sl: {
        second: "pravkar",
        minute: "pred eno minuto",
        minutes: function(a) {
            return "pred " + Math.round(a) + " minutami"
        },
        hour: "pred eno uro",
        hours: function(a) {
            return "pred " + Math.round(a) + " urami"
        },
        day: "pred enim dnem",
        days: function(a) {
            return "pred " + Math.round(a) + " dnevi"
        },
        month: "pred enim mesecem",
        months: function(a) {
            return "pred " + Math.round(a / 30) + " meseci"
        },
        year: "pred enim letom",
        years: function(a) {
            return "pred " + Math.round(a) + " leti"
        }
    },
    et: {
        second: "just n\u00fc\u00fcd",
        minute: "minut tagasi",
        minutes: function(a) {
            return Math.round(a) + " minutit tagasi"
        },
        hour: "tund tagasi",
        hours: function(a) {
            return Math.round(a) + " tundi tagasi"
        },
        day: "p\u00e4ev tagasi",
        days: function(a) {
            return Math.round(a) + " p\u00e4eva tagasi"
        },
        month: "kuu aega tagasi",
        months: function(a) {
            return Math.round(a / 30) + " kuud tagasi"
        },
        year: "aasta tagasi",
        years: function(a) {
            return Math.round(a) + " aastat tagasi"
        }
    }
};
jQuery(document).ready(function() {
    jQuery(".js-modal-close, .modal-overlay").click(function() {
        jQuery(".modal-box, .modal-overlay").fadeOut(500, function() {
            jQuery(".modal-overlay").remove();
        });
    });
    jQuery(window).resize(function() {
        jQuery(".modal-box").css({
            top: (jQuery(window).height() - jQuery(".modal-box").outerHeight()) / 2,
            left: (jQuery(window).width() - jQuery(".modal-box").outerWidth()) / 2
        });
    });
    jQuery(window).resize();
});
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            wpcf7.submit($form);
            event.preventDefault();
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        $('[placeholder].placeheld', $form).each(function(i, n) {
            $(n).val('');
        });
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    $('[name="g-recaptcha-response"]', $form).each(function() {
                        if ('' === $(this).val()) {
                            var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                            wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                        }
                    });
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    if (data.onSentOk) {
                        $.each(data.onSentOk, function(i, n) {
                            eval(n)
                        });
                    }
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                case 'acceptance_missing':
                default:
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
            }
            wpcf7.refill($form, data);
            if (data.onSubmit) {
                $.each(data.onSubmit, function(i, n) {
                    eval(n)
                });
            }
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
            }
            $form.find('[placeholder].placeheld').each(function(i, n) {
                $(n).val($(n).attr('placeholder'));
            });
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('input:checkbox.wpcf7-acceptance', $form).each(function() {
            var $a = $(this);
            if ($a.hasClass('wpcf7-invert') && $a.is(':checked') || !$a.hasClass('wpcf7-invert') && !$a.is(':checked')) {
                $submit.prop('disabled', true);
                return false;
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
jQuery(".wpcr_author_stars").each(function() {
    var val = jQuery(this).data("rating");
    var size = Math.max(0, (Math.min(5, val))) * 16;
    var $span = jQuery('<span />').width(size);
    jQuery(this).html($span);
});
jQuery(function() {});
jQuery(".wpcr_averageStars").each(function() {
    var val1 = jQuery(this).data("rating");
    var size1 = Math.max(0, (Math.min(5, val1))) * 16;
    var $span1 = jQuery('<span />').width(size1);
    jQuery(this).html($span1);
});
jQuery(".reply a.comment-reply-link").click(function() {
    jQuery('fieldset.rating').attr('id', 'hide-stars');
});
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function() {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);
! function(w) {
    "use strict";
    window.evc = {}, w(document).ready(function() {
        var e, t;
        (e = w(".evc-owl-carousel")).length && e.each(function() {
            var e = w(this),
                t = e.children().length,
                a = e.data("number-of-items"),
                n = void 0 !== a && !1 !== a ? parseInt(a, 10) : 1,
                o = "yes" === e.data("enable-loop"),
                i = "yes" === e.data("enable-autoplay"),
                r = "yes" === e.data("enable-autoplay-hover-pause"),
                c = e.data("carousel-speed"),
                s = void 0 !== c && !1 !== c ? parseInt(c, 10) : 5e3,
                d = e.data("carousel-speed-animation"),
                l = void 0 !== d && !1 !== d ? parseInt(d, 10) : 600,
                u = e.data("carousel-margin"),
                h = void 0 !== u && !1 !== u ? parseInt(u, 10) : 0,
                v = e.data("enable-center"),
                f = "yes" === v,
                p = "yes" === e.data("enable-navigation"),
                m = "yes" === e.data("enable-pagination");
            p && m && e.addClass("evc-carousel-has-both-control"), t <= 1 && (m = p = i = o = !1), f && n < 3 && (n = 3);
            var g = n < 3 ? n : 2,
                b = n < 3 ? n : 3,
                y = n < 5 ? n : 4;
            e.owlCarousel({
                items: n,
                loop: o,
                autoplay: i,
                autoplayHoverPause: r,
                autoplayTimeout: s,
                smartSpeed: l,
                margin: h,
                center: f,
                dots: m,
                nav: p,
                navText: ['<span class="evc-prev-arrow ' + evcVars.global.sliderNavPrevArrow + '"></span>', '<span class="evc-next-arrow ' + evcVars.global.sliderNavNextArrow + '"></span>'],
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    681: {
                        items: g
                    },
                    769: {
                        items: b
                    },
                    1025: {
                        items: y
                    },
                    1281: {
                        items: n
                    }
                },
                onInitialize: function() {
                    e.addClass("evc-owl-carousel-init")
                }
            })
        }), (t = w(".evc-has-pagination")).length && t.each(function() {
            var t = w(this),
                n = t.children(".evc-element-wrapper"),
                o = t.find(".evc-load-more-button"),
                i = t.find(".evc-pagination-spinner");
            o.on("click", function(e) {
                e.preventDefault(), o.addClass("evc-loading"), i.addClass("evc-loading");
                var a = t.data("options");
                w.ajax({
                    type: "POST",
                    data: {
                        action: "extensive_vc_init_shortcode_pagination",
                        options: a
                    },
                    url: evcVars.global.adminAjaxUrl,
                    success: function(e) {
                        var t = JSON.parse(e);
                        a.next_page = parseInt(a.next_page, 10) + 1, n.append(t.data), o.removeClass("evc-loading"), i.removeClass("evc-loading"), a.next_page > a.max_pages_num && o.hide()
                    }
                })
            })
        })
    })
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        var e;
        (e = a(".evc-counter")).length && e.each(function() {
            var e = a(this),
                t = e.find(".evc-c-digit");
            e.appear(function() {
                e.css("opacity", "1"), t.countTo({
                    from: 0,
                    to: parseFloat(t.text()),
                    speed: 1500,
                    refreshInterval: 100
                })
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery),
function(z) {
    "use strict";
    z(document).ready(function() {
        var e;
        (e = z(".evc-custom-font")).length && e.each(function() {
            var e = z(this),
                t = "",
                a = e.data("item-class"),
                n = e.data("font-size-1440"),
                o = e.data("font-size-1366"),
                i = e.data("font-size-1280"),
                r = e.data("font-size-1024"),
                c = e.data("font-size-768"),
                s = e.data("font-size-680"),
                d = e.data("line-height-1440"),
                l = e.data("line-height-1366"),
                u = e.data("line-height-1280"),
                h = e.data("line-height-1024"),
                v = e.data("line-height-768"),
                f = e.data("line-height-680"),
                p = "",
                m = "",
                g = "",
                b = "",
                y = "",
                w = "",
                x = "",
                C = "";
            void 0 !== a && !1 !== a && (t = a), void 0 !== n && !1 !== n && (p += "font-size: " + n + " !important;"), void 0 !== o && !1 !== o && (m += "font-size: " + o + " !important;"), void 0 !== i && !1 !== i && (g += "font-size: " + i + " !important;"), void 0 !== r && !1 !== r && (b += "font-size: " + r + " !important;"), void 0 !== c && !1 !== c && (y += "font-size: " + c + " !important;"), void 0 !== s && !1 !== s && (w += "font-size: " + s + " !important;"), void 0 !== d && !1 !== d && (p += "line-height: " + d + " !important;"), void 0 !== l && !1 !== l && (m += "line-height: " + l + " !important;"), void 0 !== u && !1 !== u && (g += "line-height: " + u + " !important;"), void 0 !== h && !1 !== h && (b += "line-height: " + h + " !important;"), void 0 !== v && !1 !== v && (y += "line-height: " + v + " !important;"), void 0 !== f && !1 !== f && (w += "line-height: " + f + " !important;"), (p.length || m.length || g.length || b.length || y.length || w.length) && (p.length && (C += "@media only screen and (max-width: 1440px) {.evc-custom-font." + t + " { " + p + " } }"), m.length && (C += "@media only screen and (max-width: 1366px) {.evc-custom-font." + t + " { " + m + " } }"), g.length && (C += "@media only screen and (max-width: 1280px) {.evc-custom-font." + t + " { " + g + " } }"), b.length && (C += "@media only screen and (max-width: 1024px) {.evc-custom-font." + t + " { " + b + " } }"), y.length && (C += "@media only screen and (max-width: 768px) {.evc-custom-font." + t + " { " + y + " } }"), w.length && (C += "@media only screen and (max-width: 680px) {.evc-custom-font." + t + " { " + w + " } }")), C.length && (x = '<style type="text/css">' + C + "</style>"), x.length && z("head").append(x)
        })
    })
}(jQuery),
function(h) {
    "use strict";
    evc.doughnutChart = [], h(document).ready(function() {
        a.init()
    });
    var a = {
        charts: [],
        init: function(e) {
            this.holder = h(".evc-doughnut-chart"), h.extend(this.holder, e), this.holder.length && (this.holder.each(function() {
                a.createChart(h(this))
            }), evc.doughnutChart.push(this))
        },
        createChart: function(t) {
            t.appear(function() {
                t.addClass("evc-dc-appeared");
                var e = new Chart(t.children("canvas"), {
                    type: "doughnut",
                    data: a.getChartData(t),
                    options: a.getChartOptions(t)
                });
                a.charts.push(e)
            }, {
                accX: 0,
                accY: -80
            })
        },
        getChartData: function(e) {
            var t = e.children(".evc-doughnut-chart-item"),
                a = e.data("border-color"),
                n = void 0 !== a && "" !== a ? a : "#fff",
                o = e.data("border-hover-color"),
                i = void 0 !== o && "" !== o ? o : "#efefef",
                r = e.data("border-width"),
                c = void 0 !== r && "" !== r ? parseInt(r, 10) : 2,
                s = [],
                d = [],
                l = [],
                u = {};
            return t.each(function() {
                var e = h(this),
                    t = e.data("label"),
                    a = e.data("value"),
                    n = e.data("color");
                void 0 !== t && "" !== t && s.push(t), void 0 !== a && "" !== a && void 0 !== n && "" !== n && (d.push(a), l.push(n))
            }), u.labels = s, u.datasets = [{
                data: d,
                backgroundColor: l,
                borderColor: n,
                hoverBorderColor: i,
                borderWidth: c
            }], u
        },
        getChartOptions: function(e) {
            var t = e.data("enable-legend"),
                a = e.data("legend-position"),
                n = e.data("legend-text-size"),
                o = void 0 !== n && "" !== n ? parseInt(n, 10) : 12,
                i = e.data("legend-color"),
                r = void 0 !== i && "" !== i ? i : "#666",
                c = {
                    responsive: !0
                };
            return c.legend = {
                display: t,
                position: a,
                labels: {
                    fontSize: o,
                    fontColor: r
                }
            }, c
        }
    }
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        var e;
        (e = o(".evc-full-screen-sections")).length && e.each(function() {
            var e = o(this),
                n = e.children(".evc-fss-wrapper"),
                t = e.data("enable-navigation"),
                a = "yes" === t;
            n.fullpage({
                sectionSelector: ".evc-fss-item",
                loopTop: !0,
                loopBottom: !0,
                verticalCentered: !1,
                navigation: !1,
                onLeave: function(e, t, a) {
                    n.hasClass("evc-fss-first-init") && n.removeClass("evc-fss-first-init")
                },
                afterRender: function() {
                    a && e.children(".evc-fss-nav-holder").css("visibility", "visible"), n.addClass("evc-fss-is-loaded evc-fss-first-init")
                }
            }), a && (e.find("#evc-fss-nav-up").on("click", function() {
                return o.fn.fullpage.moveSectionUp(), !1
            }), e.find("#evc-fss-nav-down").on("click", function() {
                return o.fn.fullpage.moveSectionDown(), !1
            }))
        })
    })
}(jQuery),
function(r) {
    "use strict";
    r(document).ready(function() {
        var e;
        (e = r(".evc-icon-progress-bar")).length && e.each(function() {
            var e = r(this),
                a = e.find(".evc-ipb-icon"),
                n = e.data("number-of-active-icons"),
                o = e.data("icon-active-color"),
                i = [];
            a.length && void 0 !== n && !1 !== n && e.appear(function() {
                a.each(function(e) {
                    if (e < n) {
                        var t = 150 * (e + 1);
                        i[e] = setTimeout(function() {
                            r(a[e]).addClass("evc-active"), void 0 !== n && !1 !== n && r(a[e]).css("color", o)
                        }, t)
                    }
                })
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery),
function(h) {
    "use strict";
    evc.pieChart = [], h(document).ready(function() {
        a.init()
    });
    var a = {
        charts: [],
        init: function(e) {
            this.holder = h(".evc-pie-chart"), h.extend(this.holder, e), this.holder.length && (this.holder.each(function() {
                a.createChart(h(this))
            }), evc.pieChart.push(this))
        },
        createChart: function(t) {
            t.appear(function() {
                t.addClass("evc-pc-appeared");
                var e = new Chart(t.children("canvas"), {
                    type: "pie",
                    data: a.getChartData(t),
                    options: a.getChartOptions(t)
                });
                a.charts.push(e)
            }, {
                accX: 0,
                accY: -80
            })
        },
        getChartData: function(e) {
            var t = e.children(".evc-pie-chart-item"),
                a = e.data("border-color"),
                n = void 0 !== a && "" !== a ? a : "#fff",
                o = e.data("border-hover-color"),
                i = void 0 !== o && "" !== o ? o : "#efefef",
                r = e.data("border-width"),
                c = void 0 !== r && "" !== r ? parseInt(r, 10) : 2,
                s = [],
                d = [],
                l = [],
                u = {};
            return t.each(function() {
                var e = h(this),
                    t = e.data("label"),
                    a = e.data("value"),
                    n = e.data("color");
                void 0 !== t && "" !== t && s.push(t), void 0 !== a && "" !== a && void 0 !== n && "" !== n && (d.push(a), l.push(n))
            }), u.labels = s, u.datasets = [{
                data: d,
                backgroundColor: l,
                borderColor: n,
                hoverBorderColor: i,
                borderWidth: c
            }], u
        },
        getChartOptions: function(e) {
            var t = e.data("enable-legend"),
                a = e.data("legend-position"),
                n = e.data("legend-text-size"),
                o = void 0 !== n && "" !== n ? parseInt(n, 10) : 12,
                i = e.data("legend-color"),
                r = void 0 !== i && "" !== i ? i : "#666",
                c = {
                    responsive: !0
                };
            return c.legend = {
                display: t,
                position: a,
                labels: {
                    fontSize: o,
                    fontColor: r
                }
            }, c
        }
    }
}(jQuery),
function(v) {
    "use strict";
    v(document).ready(function() {
        var e;
        (e = v(".evc-line-graph")).length && e.each(function() {
            var e = v(this),
                t = e.data("legend-text"),
                a = e.data("border-color"),
                n = void 0 !== a && "" !== a ? a : "",
                o = e.data("border-width"),
                i = void 0 !== o && "" !== o ? o : "",
                r = "yes" !== e.data("disable-line"),
                c = e.data("background-color"),
                s = void 0 !== c && "" !== c ? c : "",
                d = e.children(".evc-line-graph-item"),
                l = e.children("canvas"),
                u = [],
                h = [];
            d.each(function() {
                var e = v(this),
                    t = e.data("label"),
                    a = e.data("value");
                void 0 !== t && "" !== t && u.push(t), void 0 !== a && "" !== a && h.push(a)
            }), e.appear(function() {
                e.addClass("evc-lg-appeared"), new Chart(l, {
                    type: "line",
                    data: {
                        labels: u,
                        datasets: [{
                            label: t,
                            data: h,
                            backgroundColor: s,
                            borderColor: n,
                            borderWidth: i,
                            showLine: r
                        }]
                    }
                })
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        var e;
        (e = t(".evc-process")).length && e.each(function() {
            var e = t(this);
            e.appear(function() {
                e.addClass("evc-process-appeared")
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        var e;
        (e = t(".evc-process-2")).length && e.each(function() {
            var e = t(this);
            e.appear(function() {
                e.addClass("evc-process-appeared")
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        ! function() {
            var e = i(".evc-tabs");
            e.length && e.each(function() {
                var e = i(this),
                    t = e.find(".evc-tabs-item");
                t.each(function(e) {
                    e += 1;
                    var t = i(this),
                        a = t.attr("id"),
                        n = t.parent().find(".evc-tabs-nav li:nth-child(" + e + ") a"),
                        o = n.attr("href"); - 1 < (a = "#" + a).indexOf(o) && n.attr("href", a)
                }), e.tabs(), e.appear(function() {
                    e.css({
                        visibility: "visible"
                    }), a(t)
                }), e.find(".evc-tabs-nav li").each(function() {
                    i(this).children().on("click", function() {
                        setTimeout(function() {
                            a(t)
                        }, 50)
                    })
                })
            });

            function a(e) {
                e.each(function() {
                    var e = i(this);
                    e.is(":visible") ? e.addClass("evc-active") : e.removeClass("evc-active")
                })
            }
        }()
    })
}(jQuery),
function(s) {
    "use strict";
    s(document).ready(function() {
        var e;
        (e = s(".evc-text-marquee")).length && e.each(function() {
            var t = s(this),
                e = t.find(".evc-tm-element"),
                i = e.filter(".evc-tm-original"),
                r = e.filter(".evc-tm-aux"),
                c = function(e) {
                    return t.outerWidth() > e.outerWidth() ? t.outerWidth() : e.outerWidth()
                };
            ! function() {
                window.requestNextAnimationFrame = function() {
                    var a, n, e = navigator.userAgent,
                        t = 0,
                        o = this;
                    return window.webkitRequestAnimationFrame && (n = function(e) {
                        void 0 === e && (e = +new Date), o.callback(e)
                    }, a = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function(e, t) {
                        o.callback = e, a(n, t)
                    }), window.mozRequestAnimationFrame && (t = e.indexOf("rv:"), -1 !== e.indexOf("Gecko") && "2.0" === e.substr(t + 3, 3) && (window.mozRequestAnimationFrame = void 0)), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                        var a, n;
                        window.setTimeout(function() {
                            a = +new Date, e(a), n = +new Date, o.timeout = 1e3 / 60 - (n - a)
                        }, o.timeout)
                    }
                }();
                var o = c(i);
                e.css({
                    width: o
                }), r.css("left", o), e.each(function(e) {
                    var t = s(this),
                        a = 0,
                        n = function() {
                            a -= 1, t.position().left <= -o && (t.css("left", parseInt(o - 1)), a = 0), t.css("transform", "translate3d(" + .8 * a + "px,0,0)"), requestNextAnimationFrame(n), s(window).resize(function() {
                                o = c(i), a = 0, i.css("left", 0), r.css("left", o)
                            })
                        };
                    n()
                })
            }()
        })
    })
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        e().init()
    });
    var e = function() {
        var e = t(".evc-button");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e = t(this);
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function(e) {
                                    e.data.button.css("color", e.data.color)
                                },
                                a = e.css("color"),
                                n = e.data("hover-color");
                            e.on("mouseenter", {
                                button: e,
                                color: n
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e),
                    function(e) {
                        if (void 0 !== e.data("hover-background-color")) {
                            var t = function(e) {
                                    e.data.button.css("background-color", e.data.color)
                                },
                                a = e.css("background-color"),
                                n = e.data("hover-background-color");
                            e.on("mouseenter", {
                                button: e,
                                color: n
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e),
                    function(e) {
                        if (void 0 !== e.data("hover-border-color")) {
                            var t = function(e) {
                                    e.data.button.css("border-color", e.data.color)
                                },
                                a = e.css("borderTopColor"),
                                n = e.data("hover-border-color");
                            e.on("mouseenter", {
                                button: e,
                                color: n
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e)
                })
            }
        }
    }
}(jQuery),
function(g) {
    "use strict";
    g(document).ready(function() {
        var e;
        (e = g(".evc-svg-text")).length && e.each(function() {
            var e = g(this),
                t = "",
                a = e.data("item-class"),
                n = e.data("font-size-1440"),
                o = e.data("font-size-1366"),
                i = e.data("font-size-1280"),
                r = e.data("font-size-1024"),
                c = e.data("font-size-768"),
                s = e.data("font-size-680"),
                d = "",
                l = "",
                u = "",
                h = "",
                v = "",
                f = "",
                p = "",
                m = "";
            void 0 !== a && !1 !== a && (t = a), void 0 !== n && !1 !== n && (d += "font-size: " + n + " !important;", d += "height: " + n + " !important;"), void 0 !== o && !1 !== o && (l += "font-size: " + o + " !important;", l += "height: " + o + " !important;"), void 0 !== i && !1 !== i && (u += "font-size: " + i + " !important;", u += "height: " + i + " !important;"), void 0 !== r && !1 !== r && (h += "font-size: " + r + " !important;", h += "height: " + r + " !important;"), void 0 !== c && !1 !== c && (v += "font-size: " + c + " !important;", v += "height: " + c + " !important;"), void 0 !== s && !1 !== s && (f += "font-size: " + s + " !important;", f += "height: " + s + " !important;"), (d.length || l.length || u.length || h.length || v.length || f.length) && (d.length && (m += "@media only screen and (max-width: 1440px) {.evc-svg-text." + t + " { " + d + " } }"), l.length && (m += "@media only screen and (max-width: 1366px) {.evc-svg-text." + t + " { " + l + " } }"), u.length && (m += "@media only screen and (max-width: 1280px) {.evc-svg-text." + t + " { " + u + " } }"), h.length && (m += "@media only screen and (max-width: 1024px) {.evc-svg-text." + t + " { " + h + " } }"), v.length && (m += "@media only screen and (max-width: 768px) {.evc-svg-text." + t + " { " + v + " } }"), f.length && (m += "@media only screen and (max-width: 680px) {.evc-svg-text." + t + " { " + f + " } }")), m.length && (p = '<style type="text/css">' + m + "</style>"), p.length && g("head").append(p)
        })
    })
}(jQuery),
function(r) {
    "use strict";
    r(document).ready(function() {
        var e;
        (e = r(".evc-progress-bar")).length && e.each(function() {
            var e = r(this),
                a = e.hasClass("evc-pb-vertical"),
                n = e.find(".evc-pb-percent"),
                o = e.find(".evc-pb-active-bar"),
                i = parseFloat(o.data("percentage"));
            void 0 !== i && !1 !== i && e.appear(function() {
                var e, t;
                t = i, (e = n).length && e.each(function() {
                    var e = r(this);
                    e.css({
                        opacity: "1"
                    }).countTo({
                        from: 0,
                        to: t,
                        speed: 1500,
                        refreshInterval: 50
                    })
                }), a ? o.stop().animate({
                    height: i + "%"
                }, 1500) : o.stop().animate({
                    width: i + "%"
                }, 1500)
            }, {
                accX: 0,
                accY: -80
            })
        })
    })
}(jQuery);
/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
    }(function(e, t) {
        "use strict";

        function r(r) {
            var n = t.console;
            o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), e.migrateTrace && n.trace && n.trace()));
        }

        function n(e, t, n, a) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(a), n;
                },
                set: function(e) {
                    r(a), n = e;
                }
            });
        }

        function a(e, t, n, a) {
            e[t] = function() {
                return r(a), n.apply(this, arguments);
            };
        }
        e.migrateVersion = "3.0.1",
            function() {
                var r = /^[12]\./;
                t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
            }();
        var o = {};
        e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
            o = {}, e.migrateWarnings.length = 0;
        }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var i = e.fn.init,
            s = e.isNumeric,
            u = e.find,
            c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        e.fn.init = function(e) {
            var t = Array.prototype.slice.call(arguments);
            return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), i.apply(this, t);
        }, e.fn.init.prototype = e.fn, e.find = function(e) {
            var n = Array.prototype.slice.call(arguments);
            if ("string" == typeof e && c.test(e)) try {
                t.document.querySelector(e);
            } catch (a) {
                e = e.replace(l, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]';
                });
                try {
                    t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), n[0] = e;
                } catch (e) {
                    r("Attribute selector with '#' was not fixed: " + n[0]);
                }
            }
            return u.apply(this, n);
        };
        var d;
        for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
        e.fn.size = function() {
            return r("jQuery.fn.size() is deprecated and removed; use the .length property"), this.length;
        }, e.parseJSON = function() {
            return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
        }, e.isNumeric = function(t) {
            var n = s(t),
                a = function(t) {
                    var r = t && t.toString();
                    return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
                }(t);
            return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"), a;
        }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
        var p = e.ajax;
        e.ajax = function() {
            var e = p.apply(this, arguments);
            return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"), a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e;
        };
        var f = e.fn.removeAttr,
            y = e.fn.toggleClass,
            m = /\S+/g;
        e.fn.removeAttr = function(t) {
            var n = this;
            return e.each(t.match(m), function(t, a) {
                e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a), n.prop(a, !1));
            }), f.apply(this, arguments);
        }, e.fn.toggleClass = function(t) {
            return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var r = this.getAttribute && this.getAttribute("class") || "";
                r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
            }));
        };
        var h = !1;
        e.swap && e.each(["height", "width", "reliableMarginRight"], function(t, r) {
            var n = e.cssHooks[r] && e.cssHooks[r].get;
            n && (e.cssHooks[r].get = function() {
                var e;
                return h = !0, e = n.apply(this, arguments), h = !1, e;
            });
        }), e.swap = function(e, t, n, a) {
            var o, i, s = {};
            h || r("jQuery.swap() is undocumented and deprecated");
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, a || []);
            for (i in t) e.style[i] = s[i];
            return o;
        };
        var g = e.data;
        e.data = function(t, n, a) {
            var o;
            if (n && "object" == typeof n && 2 === arguments.length) {
                o = e.hasData(t) && g.call(this, t);
                var i = {};
                for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), o[s] = n[s]) : i[s] = n[s];
                return g.call(this, t, i), n;
            }
            return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
        };
        var v = e.Tween.prototype.run,
            j = function(e) {
                return e;
            };
        e.Tween.prototype.run = function() {
            e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), e.easing[this.easing] = j), v.apply(this, arguments);
        }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
        var Q = e.fn.load,
            b = e.event.add,
            w = e.event.fix;
        e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), e.event.fix = function(t) {
            var n, a = t.type,
                o = this.fixHooks[a],
                i = e.event.props;
            if (i.length)
                for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length;) e.event.addProp(i.pop());
            if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a), (i = o.props) && i.length))
                for (; i.length;) e.event.addProp(i.pop());
            return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
        }, e.event.add = function(e, n) {
            return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), b.apply(this, arguments);
        }, e.each(["load", "unload", "error"], function(t, n) {
            e.fn[n] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
            };
        }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
            e.fn[n] = function(e, t) {
                return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
            };
        }), e(function() {
            e(t.document).triggerHandler("ready");
        }), e.event.special.ready = {
            setup: function() {
                this === t.document && r("'ready' event is deprecated");
            }
        }, e.fn.extend({
            bind: function(e, t, n) {
                return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
            },
            delegate: function(e, t, n, a) {
                return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
            },
            undelegate: function(e, t, n) {
                return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function(e, t) {
                return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
            }
        });
        var x = e.fn.offset;
        e.fn.offset = function() {
            var n, a = this[0],
                o = {
                    top: 0,
                    left: 0
                };
            return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
        };
        var k = e.param;
        e.param = function(t, n) {
            var a = e.ajaxSettings && e.ajaxSettings.traditional;
            return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = a), k.call(this, t, n);
        };
        var A = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), A.apply(this, arguments);
        };
        var S = e.Deferred,
            q = [
                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
            ];
        return e.Deferred = function(t) {
            var n = S(),
                a = n.promise();
            return n.pipe = a.pipe = function() {
                var t = arguments;
                return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                    e.each(q, function(o, i) {
                        var s = e.isFunction(t[o]) && t[o];
                        n[i[1]](function() {
                            var t = s && s.apply(this, arguments);
                            t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [t] : arguments);
                        });
                    }), t = null;
                }).promise();
            }, t && t.call(n, n), n;
        }, e.Deferred.exceptionHook = S.exceptionHook, e;
    });
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
        var l = s(e);
        return l.host ? d(l.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement,
                r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
    }

    function l(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }

    function m(e, t, o, i) {
        return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function h() {
        var e = window.document.body,
            t = window.document.documentElement,
            o = ie() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }

    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function g(e) {
        var o = {};
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a(e, 'top'),
                n = a(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n
        } catch (e) {} else o = e.getBoundingClientRect();
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = 'HTML' === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            f = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (f || m) {
            var g = t(e);
            f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
        }
        return c(r)
    }

    function u(e, o) {
        var i = ie(),
            r = 'HTML' === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            l = +a.borderTopWidth.split('px')[0],
            m = +a.borderLeftWidth.split('px')[0],
            h = c({
                top: p.top - s.top - l,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = +a.marginTop.split('px')[0],
                b = +a.marginLeft.split('px')[0];
            h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
    }

    function b(e) {
        var t = window.document.documentElement,
            o = u(e, t),
            i = _(t.clientWidth, window.innerWidth || 0),
            n = _(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return c(s)
    }

    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }

    function w(e, t, i, r) {
        var p = {
                top: 0,
                left: 0
            },
            s = d(e, t);
        if ('viewport' === r) p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var f = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var l = h(),
                    m = l.height,
                    c = l.width;
                p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
            } else p = f
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
    }

    function v(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function E(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = w(o, i, r, n),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return se({
                    key: e
                }, s[e], {
                    area: v(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            }),
            f = 0 < a.length ? a[0].key : d[0].key,
            l = e.split('-')[1];
        return f + (l ? '-' + l : '')
    }

    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }

    function O(e) {
        var t = window.getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }

    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e),
            n = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
    }

    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var i = T(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }

    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function(t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t
        })
    }

    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r]) return r
        }
        return null
    }

    function D() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n(p.parentNode), t, o, i), i.push(p)
    }

    function P(e, t, o, i) {
        o.updateBound = i, window.addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function U(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
        })
    }

    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function F(e, t, o) {
        var i = T(e, function(e) {
                var o = e.name;
                return o === t
            }),
            n = !!i && e.some(function(e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }

    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }

    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function G(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(T(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return q(e, n, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }), n
    }
    for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function(e) {
            return X.some(function(t) {
                return -1 < (e || '').toString().indexOf(t)
            })
        }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        }
    var i, te = J && Q(window.MutationObserver),
        oe = te ? function(e) {
            var t = !1,
                o = 0,
                i = document.createElement('span'),
                n = new MutationObserver(function() {
                    e(), t = !1
                });
            return n.observe(i, {
                    attributes: !0
                }),
                function() {
                    t || (t = !0, i.setAttribute('x-index', o), ++o)
                }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, $))
            }
        },
        ie = function() {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
        },
        ne = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        re = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        pe = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        se = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ae = de.slice(3),
        fe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        le = function() {
            function t(o, i) {
                var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return se({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return re(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return D.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return A.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }]), t
        }();
    return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            f = {
                                start: pe({}, d, r[d]),
                                end: pe({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = se({}, p, f[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var o, i = t.offset,
                        n = e.placement,
                        r = e.offsets,
                        p = r.popper,
                        s = r.reference,
                        d = n.split('-')[0];
                    return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority,
                        p = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var o = p[e];
                                return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = p[o];
                                return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = se({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = V,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var o = t.element;
                    if ('string' == typeof o) {
                        if (o = e.instance.popper.querySelector(o), !o) return e;
                    } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var i = e.placement.split('-')[0],
                        n = e.offsets,
                        r = n.popper,
                        p = n.reference,
                        s = -1 !== ['left', 'right'].indexOf(i),
                        d = s ? 'height' : 'width',
                        a = s ? 'top' : 'left',
                        f = s ? 'left' : 'top',
                        l = s ? 'bottom' : 'right',
                        m = O(o)[d];
                    p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                    var h = p[a] + p[d] / 2 - m / 2,
                        g = h - c(e.offsets.popper)[a];
                    return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = L(i),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case fe.FLIP:
                            p = [i, n];
                            break;
                        case fe.CLOCKWISE:
                            p = K(i);
                            break;
                        case fe.COUNTERCLOCKWISE:
                            p = K(i, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = L(i);
                        var a = e.offsets.popper,
                            f = e.offsets.reference,
                            l = V,
                            m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
                            h = l(a.left) < l(o.left),
                            c = l(a.right) > l(o.right),
                            g = l(a.top) < l(o.top),
                            u = l(a.bottom) > l(o.bottom),
                            b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                            y = -1 !== ['top', 'bottom'].indexOf(i),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        f = r(e.instance.popper),
                        l = g(f),
                        m = {
                            position: n.position
                        },
                        h = {
                            left: V(n.left),
                            top: V(n.top),
                            bottom: V(n.bottom),
                            right: V(n.right)
                        },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === i ? 'left' : 'right',
                        b = B('transform');
                    if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e),
                        p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), U(t, {
                        position: 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, le
});;
/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var bootstrap = function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = function() {
            function t(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n() {
                return {
                    bindType: r.end,
                    delegateType: r.end,
                    handle: function(t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function i() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in o)
                    if ("undefined" != typeof t.style[e]) return {
                        end: o[e]
                    };
                return !1
            }

            function s(t) {
                var n = this,
                    i = !1;
                return e(this).one(a.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || a.triggerTransitionEnd(n)
                }, t), this
            }
            var r = !1,
                o = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                a = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var n = t.getAttribute("data-target");
                        n && "#" !== n || (n = t.getAttribute("href") || "");
                        try {
                            return e(document).find(n).length > 0 ? n : null
                        } catch (t) {
                            return null
                        }
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        e(t).trigger(r.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(r)
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType
                    },
                    typeCheckConfig: function(e, n, i) {
                        for (var s in i)
                            if (Object.prototype.hasOwnProperty.call(i, s)) {
                                var r = i[s],
                                    o = n[s],
                                    l = o && a.isElement(o) ? "element" : t(o);
                                if (!new RegExp(r).test(l)) throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
                            }
                    }
                };
            return r = i(), e.fn.emulateTransitionEnd = s, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a
        }(),
        r = function(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        },
        o = function(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        },
        a = function() {
            var t = "alert",
                n = e.fn[t],
                i = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                o = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                a = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.alert"), this._element = null
                    }, n._getRootElement = function(t) {
                        var n = s.getSelectorFromElement(t),
                            i = !1;
                        return n && (i = e(n)[0]), i || (i = e(t).closest("." + o.ALERT)[0]), i
                    }, n._triggerCloseEvent = function(t) {
                        var n = e.Event(i.CLOSE);
                        return e(t).trigger(n), n
                    }, n._removeElement = function(t) {
                        var n = this;
                        e(t).removeClass(o.SHOW), s.supportsTransitionEnd() && e(t).hasClass(o.FADE) ? e(t).one(s.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(150) : this._destroyElement(t)
                    }, n._destroyElement = function(t) {
                        e(t).detach().trigger(i.CLOSED).remove()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                s = i.data("bs.alert");
                            s || (s = new t(this), i.data("bs.alert", s)), "close" === n && s[n](this)
                        })
                    }, t._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(i.CLICK_DATA_API, {
                DISMISS: '[data-dismiss="alert"]'
            }.DISMISS, a._handleDismiss(new a)), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function() {
                return e.fn[t] = n, a._jQueryInterface
            }, a
        }(),
        l = function() {
            var t = "button",
                n = e.fn[t],
                i = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                s = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                o = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                a = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0,
                            n = !0,
                            r = e(this._element).closest(s.DATA_TOGGLE)[0];
                        if (r) {
                            var o = e(this._element).find(s.INPUT)[0];
                            if (o) {
                                if ("radio" === o.type)
                                    if (o.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;
                                    else {
                                        var a = e(r).find(s.ACTIVE)[0];
                                        a && e(a).removeClass(i.ACTIVE)
                                    }
                                if (t) {
                                    if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                    o.checked = !e(this._element).hasClass(i.ACTIVE), e(o).trigger("change")
                                }
                                o.focus(), n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.button"), this._element = null
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this).data("bs.button");
                            i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                        })
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)), a._jQueryInterface.call(e(n), "toggle")
            }).on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(s.BUTTON)[0];
                e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function() {
                return e.fn[t] = n, a._jQueryInterface
            }, a
        }(),
        h = function() {
            var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = e.fn[t],
                a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                c = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                u = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                d = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                f = function() {
                    function o(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners()
                    }
                    var f = o.prototype;
                    return f.next = function() {
                        this._isSliding || this._slide(h.NEXT)
                    }, f.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, f.prev = function() {
                        this._isSliding || this._slide(h.PREV)
                    }, f.pause = function(t) {
                        t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, f.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, f.to = function(t) {
                        var n = this;
                        this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(c.SLID, function() {
                                return n.to(t)
                            });
                            else {
                                if (i === t) return this.pause(), void this.cycle();
                                var s = t > i ? h.NEXT : h.PREV;
                                this._slide(s, this._items[t])
                            }
                    }, f.dispose = function() {
                        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, f._getConfig = function(n) {
                        return n = e.extend({}, a, n), s.typeCheckConfig(t, n, l), n
                    }, f._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(c.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(c.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(c.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(c.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, f._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, f._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t)
                    }, f._getItemByDirection = function(t, e) {
                        var n = t === h.NEXT,
                            i = t === h.PREV,
                            s = this._getItemIndex(e),
                            r = this._items.length - 1;
                        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
                        var o = (s + (t === h.PREV ? -1 : 1)) % this._items.length;
                        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                    }, f._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t),
                            s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),
                            r = e.Event(c.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: s,
                                to: i
                            });
                        return e(this._element).trigger(r), r
                    }, f._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(u.ACTIVE)
                        }
                    }, f._slide = function(t, n) {
                        var i, r, o, a = this,
                            l = e(this._element).find(d.ACTIVE_ITEM)[0],
                            f = this._getItemIndex(l),
                            _ = n || l && this._getItemByDirection(t, l),
                            g = this._getItemIndex(_),
                            m = Boolean(this._interval);
                        if (t === h.NEXT ? (i = u.LEFT, r = u.NEXT, o = h.LEFT) : (i = u.RIGHT, r = u.PREV, o = h.RIGHT), _ && e(_).hasClass(u.ACTIVE)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(_, o).isDefaultPrevented() && l && _) {
                            this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(_);
                            var p = e.Event(c.SLID, {
                                relatedTarget: _,
                                direction: o,
                                from: f,
                                to: g
                            });
                            s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE) ? (e(_).addClass(r), s.reflow(_), e(l).addClass(i), e(_).addClass(i), e(l).one(s.TRANSITION_END, function() {
                                e(_).removeClass(i + " " + r).addClass(u.ACTIVE), e(l).removeClass(u.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                    return e(a._element).trigger(p)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (e(l).removeClass(u.ACTIVE), e(_).addClass(u.ACTIVE), this._isSliding = !1, e(this._element).trigger(p)), m && this.cycle()
                        }
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                s = e.extend({}, a, e(this).data());
                            "object" == typeof t && e.extend(s, t);
                            var r = "string" == typeof t ? t : s.slide;
                            if (i || (i = new o(this, s), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof r) {
                                if ("undefined" == typeof i[r]) throw new Error('No method named "' + r + '"');
                                i[r]()
                            } else s.interval && (i.pause(), i.cycle())
                        })
                    }, o._dataApiClickHandler = function(t) {
                        var i = s.getSelectorFromElement(this);
                        if (i) {
                            var r = e(i)[0];
                            if (r && e(r).hasClass(u.CAROUSEL)) {
                                var a = e.extend({}, e(r).data(), e(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), o._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                            }
                        }
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler), e(window).on(c.LOAD_DATA_API, function() {
                e(d.DATA_RIDE).each(function() {
                    var t = e(this);
                    f._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = o, f._jQueryInterface
            }, f
        }(),
        c = function() {
            var t = "collapse",
                n = "bs.collapse",
                i = e.fn[t],
                o = {
                    toggle: !0,
                    parent: ""
                },
                a = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                l = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                h = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                c = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                u = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                d = function() {
                    function i(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                a = s.getSelectorFromElement(o);
                            null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o)
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var d = i.prototype;
                    return d.toggle = function() {
                        e(this._element).hasClass(h.SHOW) ? this.hide() : this.show()
                    }, d.show = function() {
                        var t = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(h.SHOW)) {
                            var r, o;
                            if (this._parent && ((r = e.makeArray(e(this._parent).children().children(u.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                                var a = e.Event(l.SHOW);
                                if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                    r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));
                                    var c = this._getDimension();
                                    e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var d = function() {
                                        e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), t._element.style[c] = "", t.setTransitioning(!1), e(t._element).trigger(l.SHOWN)
                                    };
                                    if (s.supportsTransitionEnd()) {
                                        var f = "scroll" + (c[0].toUpperCase() + c.slice(1));
                                        e(this._element).one(s.TRANSITION_END, d).emulateTransitionEnd(600), this._element.style[c] = this._element[f] + "px"
                                    } else d()
                                }
                            }
                        }
                    }, d.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
                            var n = e.Event(l.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._triggerArray.length)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            a = s.getSelectorFromElement(o);
                                        null !== a && (e(a).hasClass(h.SHOW) || e(o).addClass(h.COLLAPSED).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var c = function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)
                                };
                                this._element.style[i] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600) : c()
                            }
                        }
                    }, d.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, d.dispose = function() {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, d._getConfig = function(n) {
                        return n = e.extend({}, o, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(t, n, a), n
                    }, d._getDimension = function() {
                        return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT
                    }, d._getParent = function() {
                        var t = this,
                            n = null;
                        s.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(r).each(function(e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, d._addAriaAndCollapsedClass = function(t, n) {
                        if (t) {
                            var i = e(t).hasClass(h.SHOW);
                            n.length && e(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function(t) {
                        var n = s.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var s = e(this),
                                r = s.data(n),
                                a = e.extend({}, o, s.data(), "object" == typeof t && t);
                            if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new i(this, a), s.data(n, r)), "string" == typeof t) {
                                if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');
                                r[t]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = s.getSelectorFromElement(this);
                e(r).each(function() {
                    var t = e(this),
                        s = t.data(n) ? "toggle" : i.data();
                    d._jQueryInterface.call(t, s)
                })
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                return e.fn[t] = i, d._jQueryInterface
            }, d
        }(),
        u = function() {
            if ("undefined" == typeof n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
            var t = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                a = e.fn[t],
                l = new RegExp("38|40|27"),
                h = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                c = {
                    DISABLED: "disabled",
                    SHOW: "show",
                    DROPUP: "dropup",
                    MENURIGHT: "dropdown-menu-right",
                    MENULEFT: "dropdown-menu-left"
                },
                u = {
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    MENU: ".dropdown-menu",
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
                },
                d = {
                    TOP: "top-start",
                    TOPEND: "top-end",
                    BOTTOM: "bottom-start",
                    BOTTOMEND: "bottom-end"
                },
                f = {
                    offset: 0,
                    flip: !0
                },
                _ = {
                    offset: "(number|string|function)",
                    flip: "boolean"
                },
                g = function() {
                    function a(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var g = a.prototype;
                    return g.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(c.DISABLED)) {
                            var t = a._getParentFromElement(this._element),
                                i = e(this._menu).hasClass(c.SHOW);
                            if (a._clearMenus(), !i) {
                                var s = {
                                        relatedTarget: this._element
                                    },
                                    r = e.Event(h.SHOW, s);
                                if (e(t).trigger(r), !r.isDefaultPrevented()) {
                                    var o = this._element;
                                    e(t).hasClass(c.DROPUP) && (e(this._menu).hasClass(c.MENULEFT) || e(this._menu).hasClass(c.MENURIGHT)) && (o = t), this._popper = new n(o, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(u.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(c.SHOW), e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s))
                                }
                            }
                        }
                    }, g.dispose = function() {
                        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
                    }, g.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, g._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(h.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, g._getConfig = function(n) {
                        return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, g._getMenuElement = function() {
                        if (!this._menu) {
                            var t = a._getParentFromElement(this._element);
                            this._menu = e(t).find(u.MENU)[0]
                        }
                        return this._menu
                    }, g._getPlacement = function() {
                        var t = e(this._element).parent(),
                            n = d.BOTTOM;
                        return t.hasClass(c.DROPUP) ? (n = d.TOP, e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND)) : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND), n
                    }, g._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, g._getPopperConfig = function() {
                        var t = this,
                            n = {};
                        "function" == typeof this._config.offset ? n.fn = function(n) {
                            return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n
                        } : n.offset = this._config.offset;
                        var i = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: n,
                                flip: {
                                    enabled: this._config.flip
                                }
                            }
                        };
                        return this._inNavbar && (i.modifiers.applyStyle = {
                            enabled: !this._inNavbar
                        }), i
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i),
                                s = "object" == typeof t ? t : null;
                            if (n || (n = new a(this, s), e(this).data(i, n)), "string" == typeof t) {
                                if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, a._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0; s < n.length; s++) {
                                var r = a._getParentFromElement(n[s]),
                                    o = e(n[s]).data(i),
                                    l = {
                                        relatedTarget: n[s]
                                    };
                                if (o) {
                                    var d = o._menu;
                                    if (e(r).hasClass(c.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
                                        var f = e.Event(h.HIDE, l);
                                        e(r).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[s].setAttribute("aria-expanded", "false"), e(d).removeClass(c.SHOW), e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function(t) {
                        var n, i = s.getSelectorFromElement(t);
                        return i && (n = e(i)[0]), n || t.parentNode
                    }, a._dataApiKeydownHandler = function(t) {
                        if (!(!l.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(c.DISABLED)))) {
                            var n = a._getParentFromElement(this),
                                i = e(n).hasClass(c.SHOW);
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var s = e(n).find(u.VISIBLE_ITEMS).get();
                                if (s.length) {
                                    var r = s.indexOf(t.target);
                                    38 === t.which && r > 0 && r--, 40 === t.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var o = e(n).find(u.DATA_TOGGLE)[0];
                                    e(o).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return _
                        }
                    }]), a
                }();
            return e(document).on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, g._clearMenus).on(h.CLICK_DATA_API, u.DATA_TOGGLE, function(t) {
                t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
            }).on(h.CLICK_DATA_API, u.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
                return e.fn[t] = a, g._jQueryInterface
            }, g
        }(),
        d = function() {
            var t = "modal",
                n = ".bs.modal",
                i = e.fn[t],
                o = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                a = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                h = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                c = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                u = function() {
                    function i(t, n) {
                        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var u = i.prototype;
                    return u.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, u.show = function(t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
                            var i = e.Event(l.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(l.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }, u.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(l.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(h.SHOW), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(s.TRANSITION_END, function(t) {
                                    return n._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, u.dispose = function() {
                        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, u.handleUpdate = function() {
                        this._adjustDialog()
                    }, u._getConfig = function(n) {
                        return n = e.extend({}, o, n), s.typeCheckConfig(t, n, a), n
                    }, u._showElement = function(t) {
                        var n = this,
                            i = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();
                        var r = e.Event(l.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, u._enforceFocus = function() {
                        var t = this;
                        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                            document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                        })
                    }, u._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
                    }, u._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(l.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(l.RESIZE)
                    }, u._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            e(document.body).removeClass(h.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                        })
                    }, u._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, u._showBackdrop = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(h.FADE) ? h.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = s.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function(t) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(h.SHOW), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(h.SHOW);
                            var o = function() {
                                n._removeBackdrop(), t && t()
                            };
                            s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else t && t()
                    }, u._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, u._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, u._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, u._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(c.FIXED_CONTENT).each(function(n, i) {
                                var s = e(i)[0].style.paddingRight,
                                    r = e(i).css("padding-right");
                                e(i).data("padding-right", s).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                            }), e(c.STICKY_CONTENT).each(function(n, i) {
                                var s = e(i)[0].style.marginRight,
                                    r = e(i).css("margin-right");
                                e(i).data("margin-right", s).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                            }), e(c.NAVBAR_TOGGLER).each(function(n, i) {
                                var s = e(i)[0].style.marginRight,
                                    r = e(i).css("margin-right");
                                e(i).data("margin-right", s).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, u._resetScrollbar = function() {
                        e(c.FIXED_CONTENT).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right")
                        }), e(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
                    }, u._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, i._jQueryInterface = function(t, n) {
                        return this.each(function() {
                            var s = e(this).data("bs.modal"),
                                r = e.extend({}, i.Default, e(this).data(), "object" == typeof t && t);
                            if (s || (s = new i(this, r), e(this).data("bs.modal", s)), "string" == typeof t) {
                                if ("undefined" == typeof s[t]) throw new Error('No method named "' + t + '"');
                                s[t](n)
                            } else r.show && s.show(n)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function(t) {
                var n, i = this,
                    r = s.getSelectorFromElement(this);
                r && (n = e(r)[0]);
                var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var a = e(n).one(l.SHOW, function(t) {
                    t.isDefaultPrevented() || a.one(l.HIDDEN, function() {
                        e(i).is(":visible") && i.focus()
                    })
                });
                u._jQueryInterface.call(e(n), o, this)
            }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
                return e.fn[t] = i, u._jQueryInterface
            }, u
        }(),
        f = function() {
            if ("undefined" == typeof n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            var t = "tooltip",
                i = ".bs.tooltip",
                o = e.fn[t],
                a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                l = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)"
                },
                h = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                c = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip"
                },
                u = {
                    SHOW: "show",
                    OUT: "out"
                },
                d = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                f = {
                    FADE: "fade",
                    SHOW: "show"
                },
                _ = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner",
                    ARROW: ".arrow"
                },
                g = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                m = function() {
                    function o(t, e) {
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var m = o.prototype;
                    return m.enable = function() {
                        this._isEnabled = !0
                    }, m.disable = function() {
                        this._isEnabled = !1
                    }, m.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, m.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, m.dispose = function() {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, m.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var a = this.getTipElement(),
                                l = s.getUID(this.constructor.NAME);
                            a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(f.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                                c = this._getAttachment(h);
                            this.addAttachmentClass(c);
                            var d = !1 === this.config.container ? document.body : e(this.config.container);
                            e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
                                placement: c,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: _.ARROW
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(a).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var g = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === u.OUT && t._leave(null, t)
                            };
                            s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(s.TRANSITION_END, g).emulateTransitionEnd(o._TRANSITION_DURATION) : g()
                        }
                    }, m.hide = function(t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function() {
                                n._hoverState !== u.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, m.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, m.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, m.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, m.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, m.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW)
                    }, m.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, m.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, m._getAttachment = function(t) {
                        return h[t.toUpperCase()]
                    }, m._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if (n !== g.MANUAL) {
                                var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    s = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(s, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = e.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, m._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, m._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === u.SHOW ? n._hoverState = u.SHOW : (clearTimeout(n._timeout), n._hoverState = u.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === u.SHOW && n.show()
                        }, n.config.delay.show) : n.show())
                    }, m._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === u.OUT && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, m._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, m._getConfig = function(n) {
                        return "number" == typeof(n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, m._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, m._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(a);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, m._handlePopperPlacementChange = function(t) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, m._fixTransition = function() {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.tooltip"),
                                i = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                                if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), o
                }();
            return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = o, m._jQueryInterface
            }, m
        }(),
        _ = function() {
            var t = "popover",
                n = ".bs.popover",
                i = e.fn[t],
                s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                a = e.extend({}, f.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                l = e.extend({}, f.DefaultType, {
                    content: "(string|element|function)"
                }),
                h = {
                    FADE: "fade",
                    SHOW: "show"
                },
                c = {
                    TITLE: ".popover-header",
                    CONTENT: ".popover-body"
                },
                u = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                d = function(i) {
                    function d() {
                        return i.apply(this, arguments) || this
                    }
                    o(d, i);
                    var f = d.prototype;
                    return f.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, f.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, f.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, f.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(c.TITLE), this.getTitle()), this.setElementContent(t.find(c.CONTENT), this._getContent()), t.removeClass(h.FADE + " " + h.SHOW)
                    }, f._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, f._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(s);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, d._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.popover"),
                                i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new d(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(d, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), d
                }(f);
            return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                return e.fn[t] = i, d._jQueryInterface
            }, d
        }(),
        g = function() {
            var t = "scrollspy",
                n = e.fn[t],
                i = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                o = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                a = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                l = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active"
                },
                h = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                c = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                u = function() {
                    function n(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.LIST_ITEMS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(a.SCROLL, function(t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    var u = n.prototype;
                    return u.refresh = function() {
                        var t = this,
                            n = this._scrollElement !== this._scrollElement.window ? c.POSITION : c.OFFSET,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === c.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) {
                            var n, o = s.getSelectorFromElement(t);
                            if (o && (n = e(o)[0]), n) {
                                var a = n.getBoundingClientRect();
                                if (a.width || a.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, u.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, u._getConfig = function(n) {
                        if ("string" != typeof(n = e.extend({}, i, n)).target) {
                            var r = e(n.target).attr("id");
                            r || (r = s.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r
                        }
                        return s.typeCheckConfig(t, n, o), n
                    }, u._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, u._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, u._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, u._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                        }
                    }, u._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ", " + h.LIST_ITEMS).addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)), e(this._scrollElement).trigger(a.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, u._clear = function() {
                        e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)
                    }, n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.scrollspy"),
                                s = "object" == typeof t && t;
                            if (i || (i = new n(this, s), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                                if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]), n
                }();
            return e(window).on(a.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    u._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
                return e.fn[t] = n, u._jQueryInterface
            }, u
        }(),
        m = function() {
            var t = e.fn.tab,
                n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                i = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                o = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                a = function() {
                    function t(t) {
                        this._element = t
                    }
                    var a = t.prototype;
                    return a.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                            var r, a, l = e(this._element).closest(o.NAV_LIST_GROUP)[0],
                                h = s.getSelectorFromElement(this._element);
                            if (l) {
                                var c = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                                a = e.makeArray(e(l).find(c)), a = a[a.length - 1]
                            }
                            var u = e.Event(n.HIDE, {
                                    relatedTarget: this._element
                                }),
                                d = e.Event(n.SHOW, {
                                    relatedTarget: a
                                });
                            if (a && e(a).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
                                h && (r = e(h)[0]), this._activate(this._element, l);
                                var f = function() {
                                    var i = e.Event(n.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        s = e.Event(n.SHOWN, {
                                            relatedTarget: a
                                        });
                                    e(a).trigger(i), e(t._element).trigger(s)
                                };
                                r ? this._activate(r, r.parentNode, f) : f()
                            }
                        }
                    }, a.dispose = function() {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, a._activate = function(t, n, r) {
                        var a, l = this,
                            h = (a = "UL" === n.nodeName ? e(n).find(o.ACTIVE_UL) : e(n).children(o.ACTIVE))[0],
                            c = r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE),
                            u = function() {
                                return l._transitionComplete(t, h, c, r)
                            };
                        h && c ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150) : u(), h && e(h).removeClass(i.SHOW)
                    }, a._transitionComplete = function(t, n, r, a) {
                        if (n) {
                            e(n).removeClass(i.ACTIVE);
                            var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                            l && e(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), r ? (s.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                            var h = e(t).closest(o.DROPDOWN)[0];
                            h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0)
                        }
                        a && a()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                s = i.data("bs.tab");
                            if (s || (s = new t(this), i.data("bs.tab", s)), "string" == typeof n) {
                                if ("undefined" == typeof s[n]) throw new Error('No method named "' + n + '"');
                                s[n]()
                            }
                        })
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function(t) {
                t.preventDefault(), a._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function() {
                return e.fn.tab = t, a._jQueryInterface
            }, a
        }();
    return function() {
        if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = s, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = d, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = f, t
}({}, $, Popper);;
! function(t) {
    "use strict";
    var s = {
            slide: 0,
            delay: 5e3,
            loop: !0,
            preload: !1,
            preloadImage: !1,
            preloadVideo: !1,
            timer: !0,
            overlay: !1,
            autoplay: !0,
            shuffle: !1,
            cover: !0,
            color: null,
            align: "center",
            valign: "center",
            firstTransition: null,
            firstTransitionDuration: null,
            transition: "fade",
            transitionDuration: 1e3,
            transitionRegister: [],
            animation: null,
            animationDuration: "auto",
            animationRegister: [],
            slidesToKeep: 1,
            init: function() {},
            play: function() {},
            pause: function() {},
            walk: function() {},
            slides: []
        },
        i = {},
        e = function(i, e) {
            this.elmt = i, this.settings = t.extend({}, s, t.vegas.defaults, e), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
                objectFit: "objectFit" in document.body.style,
                transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
                video: t.vegas.isVideoCompatible()
            }, this.settings.shuffle === !0 && this.shuffle(), this._init()
        };
    e.prototype = {
        _init: function() {
            var s, i, e, n = "BODY" === this.elmt.tagName,
                o = this.settings.timer,
                a = this.settings.overlay,
                r = this;
            this._preload(), n || (this.$elmt.css("height", this.$elmt.css("height")), s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(s), this.elmt.innerHTML = ""), o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = t('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || this.$elmt.append(s), setTimeout(function() {
                r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play")
            }, 1)
        },
        _preload: function() {
            var t, s;
            for (s = 0; s < this.settings.slides.length; s++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[s].src && (t = new Image, t.src = this.settings.slides[s].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[s].video && (this.settings.slides[s].video instanceof Array ? this._video(this.settings.slides[s].video) : this._video(this.settings.slides[s].video.src))
        },
        _random: function(t) {
            return t[Math.floor(Math.random() * t.length)]
        },
        _slideShow: function() {
            var t = this;
            this.total > 1 && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
                t.next()
            }, this._options("delay")))
        },
        _timer: function(t) {
            var s = this;
            clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function() {
                s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
            }, 100))
        },
        _video: function(t) {
            var s, e, n = t.toString();
            return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]), s = document.createElement("video"), s.preload = !0, t.forEach(function(t) {
                e = document.createElement("source"), e.src = t, s.appendChild(e)
            }), i[n] = s, s)
        },
        _fadeOutSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume - .09;
            n > 0 ? (t.volume = n, setTimeout(function() {
                i._fadeOutSound(t, s)
            }, e)) : t.pause()
        },
        _fadeInSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume + .09;
            n < 1 && (t.volume = n, setTimeout(function() {
                i._fadeInSound(t, s)
            }, e))
        },
        _options: function(t, s) {
            return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
        },
        _goto: function(s) {
            function i() {
                f._timer(!0), setTimeout(function() {
                    y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"), h.each(function() {
                        var t = h.find("video").get(0);
                        t && (t.volume = 1, f._fadeOutSound(t, _))
                    }), e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
                    for (var t = 0; t < h.length - f.settings.slidesToKeep; t++) h.eq(t).remove();
                    f.trigger("walk"), f._slideShow()
                }, 100)
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0), this.slide = s;
            var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"),
                d = this.settings.slides[s].src,
                l = this.settings.slides[s].video,
                g = this._options("delay"),
                u = this._options("align"),
                c = this._options("valign"),
                p = this._options("cover"),
                m = this._options("color") || this.$elmt.css("background-color"),
                f = this,
                v = h.length,
                y = this._options("transition"),
                _ = this._options("transitionDuration"),
                w = this._options("animation"),
                b = this._options("animationDuration");
            this.settings.firstTransition && this.first && (y = this.settings.firstTransition || y), this.settings.firstTransitionDuration && this.first && (_ = this.settings.firstTransitionDuration || _), this.first && (this.first = !1), "repeat" !== p && (p === !0 ? p = "cover" : p === !1 && (p = "contain")), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)), ("random" === w || w instanceof Array) && (w = w instanceof Array ? this._random(w) : this._random(this.animations)), ("auto" === _ || _ > g) && (_ = g), "auto" === b && (b = g), e = t('<div class="vegas-slide"></div>'), this.support.transition && y && e.addClass("vegas-transition-" + y), this.support.video && l ? (a = l instanceof Array ? this._video(l) : this._video(l.src), a.loop = void 0 === l.loop || l.loop, a.muted = void 0 === l.mute || l.mute, a.muted === !1 ? (a.volume = 0, this._fadeInSound(a, _)) : a.pause(), o = t(a).addClass("vegas-video").css("background-color", m), this.support.objectFit ? o.css("object-position", u + " " + c).css("object-fit", p).css("width", "100%").css("height", "100%") : "contain" === p && o.css("width", "100%").css("height", "100%"), e.append(o)) : (r = new Image, n = t('<div class="vegas-slide-inner"></div>').css("background-image", 'url("' + d + '")').css("background-color", m).css("background-position", u + " " + c), "repeat" === p ? n.css("background-repeat", "repeat") : n.css("background-size", p), this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"), e.append(n)), this.support.transition || e.css("display", "none"), v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e), h.css("transition", "all 0ms").each(function() {
                this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), y && (this.className += " vegas-transition-" + y, this.className += " vegas-transition-" + y + "-in")
            }), f._timer(!1), a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : (r.src = d, r.complete ? i() : r.onload = i)
        },
        _end: function() {
            this.ended = !0, this._timer(!1), this.trigger("end")
        },
        shuffle: function() {
            for (var t, s, i = this.total - 1; i > 0; i--) s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t
        },
        play: function() {
            this.paused && (this.paused = !1, this.next(), this.trigger("play"))
        },
        pause: function() {
            this._timer(!1), this.paused = !0, this.trigger("pause")
        },
        toggle: function() {
            this.paused ? this.play() : this.pause()
        },
        playing: function() {
            return !this.paused && !this.noshow
        },
        current: function(t) {
            return t ? {
                slide: this.slide,
                data: this.settings.slides[this.slide]
            } : this.slide
        },
        jump: function(t) {
            t < 0 || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
        },
        next: function() {
            if (this.slide++, this.slide >= this.total) {
                if (!this.settings.loop) return this._end();
                this.slide = 0
            }
            this._goto(this.slide)
        },
        previous: function() {
            if (this.slide--, this.slide < 0) {
                if (!this.settings.loop) return void this.slide++;
                this.slide = this.total - 1
            }
            this._goto(this.slide)
        },
        trigger: function(t) {
            var s = [];
            s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
        },
        options: function(i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i) return this.settings;
                if (void 0 === e) return this.settings[i];
                this.settings[i] = e
            }
            this.settings.slides !== n && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
        },
        destroy: function() {
            clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
        }
    }, t.fn.vegas = function(t) {
        var s, i = arguments,
            n = !1;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            this._vegas || (this._vegas = new e(this, t))
        });
        if ("string" == typeof t) {
            if (this.each(function() {
                    var e = this._vegas;
                    if (!e) throw new Error("No Vegas applied to this element.");
                    "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
                }), n) throw new Error('No method "' + t + '" in Vegas.');
            return void 0 !== s ? s : this
        }
    }, t.vegas = {}, t.vegas.defaults = s, t.vegas.isVideoCompatible = function() {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
}(window.jQuery || window.Zepto);;
/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0,
                n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), o += r ? 0 : 1, n = i[o]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - o,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            o = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            }
        else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
    if (ytp.YTAPIReady) return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady");
}
var getYTPVideoID = function(url) {
    var videoID, playlistID;
    if (url.indexOf("youtu.be") > 0) {
        videoID = url.substr(url.lastIndexOf("/") + 1, url.length);
        playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
        videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
    } else if (url.indexOf("http") > -1) {
        videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
        playlistID = url.indexOf("list=") > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
    } else {
        videoID = url.length > 15 ? null : url;
        playlistID = videoID ? null : url;
    }
    return {
        videoID: videoID,
        playlistID: playlistID
    };
};
(function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.1.4",
        build: "6519",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: true,
            vol: 50,
            addRaster: false,
            mask: false,
            opacity: 1,
            quality: "default",
            mute: false,
            loop: true,
            fadeOnStartTime: 500,
            showControls: true,
            showAnnotations: false,
            showYTLogo: true,
            stopMovieOnBlur: true,
            realfullscreen: true,
            mobileFallbackImage: null,
            gaTrack: true,
            optimizeDisplay: true,
            remember_last_time: false,
            playOnlyIfVisible: false,
            anchor: "center,center",
            onReady: function(player) {},
            onError: function(player, err) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                YTPlayer.state = 0;
                YTPlayer.filters = jQuery.mbYTPlayer.filters;
                YTPlayer.filtersEnabled = true;
                YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime();
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");
                if (typeof property != "undefined" && typeof property.vol != "undefined") {
                    if (property.vol === 0) {
                        property.vol = 1;
                        property.mute = true;
                    }
                }
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                if (YTPlayer.opt.loop == "true")
                    YTPlayer.opt.loop = 9999;
                YTPlayer.isRetina = (window.retina || window.devicePixelRatio > 1);
                var isIframe = function() {
                    var isIfr = false;
                    try {
                        if (self.location.href != top.location.href) isIfr = true;
                    } catch (e) {
                        isIfr = true;
                    }
                    return isIfr;
                };
                YTPlayer.opt.realfullscreen = isIframe() ? false : YTPlayer.opt.realfullscreen;
                if (!$YTPlayer.attr("id"))
                    $YTPlayer.attr("id", "ytp_" + new Date().getTime());
                var playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = false;
                YTPlayer.hasFocus = true;
                YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '1' : '3';
                var start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))
                    start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID));
                if (YTPlayer.opt.remember_last_time && start_from_last) {
                    YTPlayer.start_from_last = start_from_last;
                    jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID);
                }
                var playerVars = {
                    'modestbranding': 1,
                    'autoplay': 0,
                    'controls': 0,
                    'showinfo': 0,
                    'rel': 0,
                    'enablejsapi': 1,
                    'version': 3,
                    'playerapiid': playerID,
                    'origin': '*',
                    'allowfullscreen': true,
                    'wmode': 'transparent',
                    'iv_load_policy': YTPlayer.opt.showAnnotations,
                    'playsinline': jQuery.browser.mobile ? 1 : 0
                };
                if (document.createElement('video').canPlayType) jQuery.extend(playerVars, {
                    'html5': 1
                });
                if (jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9)
                    this.opt.opacity = 1;
                YTPlayer.isPlayer = YTPlayer.opt.containment == "self";
                YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body");
                if (YTPlayer.isPlayer) {
                    YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer");
                    YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    });
                    YTPlayer.opt.containment.width("100%");
                    YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper);
                    YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    });
                }
                if (YTPlayer.isBackground && ytp.backgroundIsInited)
                    return;
                if (!YTPlayer.isPlayer) {
                    $YTPlayer.hide();
                }
                YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isPlayer) {
                    YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay();
                    })
                }
                YTPlayer.wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id);
                YTPlayer.wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden"
                });
                YTPlayer.wrapper.append(playerBox);
                playerBox.css({
                    opacity: 1
                });
                playerBox.after(YTPlayer.overlay);
                YTPlayer.opt.containment.children().not("script, style").each(function() {
                    if (jQuery(this).css("position") == "static")
                        jQuery(this).css("position", "relative");
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        boxSizing: "border-box"
                    });
                    YTPlayer.wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    });
                    $YTPlayer.hide();
                } else if (YTPlayer.opt.containment.css("position") == "static")
                    YTPlayer.opt.containment.css({
                        position: "relative"
                    });
                YTPlayer.opt.containment.prepend(YTPlayer.wrapper);
                if (!YTPlayer.isBackground) {
                    YTPlayer.overlay.on("mouseenter", function() {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length)
                            YTPlayer.controlBar.addClass("visible");
                    }).on("mouseleave", function() {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length)
                            YTPlayer.controlBar.removeClass("visible");
                    });
                }
                if (!ytp.YTAPIReady) {
                    jQuery("#YTAPI").remove();
                    var tag = jQuery("<script></script>").attr({
                        "src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                        "id": "YTAPI"
                    });
                    jQuery("head").prepend(tag);
                } else {
                    setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady");
                    }, 100);
                }
                if (jQuery.mbBrowser.mobile && YTPlayer.opt.mobileFallbackImage) {
                    if (YTPlayer.opt.mobileFallbackImage) {
                        YTPlayer.wrapper.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: 1
                        })
                    }
                    if (jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay)
                        jQuery("body").one("touchstart", function() {
                            YTPlayer.player.playVideo();
                        });
                    if (!YTPlayer.isPlayer)
                        $YTPlayer.remove();
                    jQuery(document).trigger("YTPUnavailable");
                    return;
                }
                jQuery(document).on("YTAPIReady", function() {
                    if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit) return;
                    if (YTPlayer.isBackground) {
                        ytp.backgroundIsInited = true;
                    }
                    YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? (YTPlayer.isBackground ? true : false) : YTPlayer.opt.autoPlay;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
                    jQuery(YTPlayer).on("YTPChanged", function() {
                        if (YTPlayer.isInit)
                            return;
                        YTPlayer.isInit = true;
                        new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                'onReady': function(event) {
                                    YTPlayer.player = event.target;
                                    if (YTPlayer.isReady)
                                        return;
                                    YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? false : true;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                    jQuery(YTPlayer.playerEl).unselectable();
                                    $YTPlayer.optimizeDisplay();
                                    jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                        $YTPlayer.optimizeDisplay();
                                    });
                                    if (YTPlayer.opt.remember_last_time) {
                                        jQuery(window).on("unload.YTP_" + YTPlayer.id, function() {
                                            var current_time = YTPlayer.player.getCurrentTime();
                                            jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer.videoID, current_time, 0);
                                        });
                                    }
                                    jQuery.mbYTPlayer.checkForState(YTPlayer);
                                },
                                'onStateChange': function(event) {
                                    if (typeof event.target.getPlayerState != "function") return;
                                    var state = event.target.getPlayerState();
                                    if (YTPlayer.preventTrigger) {
                                        YTPlayer.preventTrigger = false;
                                        return
                                    }
                                    YTPlayer.state = state;
                                    var eventType;
                                    switch (state) {
                                        case -1:
                                            eventType = "YTPUnstarted";
                                            break;
                                        case 0:
                                            eventType = "YTPRealEnd";
                                            break;
                                        case 1:
                                            eventType = "YTPPlay";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                            if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString())]);
                                            if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()));
                                            break;
                                        case 2:
                                            eventType = "YTPPause";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 3:
                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                            eventType = "YTPBuffering";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5:
                                            eventType = "YTPCued";
                                            break;
                                        default:
                                            break;
                                    }
                                    var YTPEvent = jQuery.Event(eventType);
                                    YTPEvent.time = YTPlayer.currentTime;
                                    if (!YTPlayer.preventTrigger)
                                        jQuery(YTPlayer).trigger(YTPEvent);
                                },
                                'onPlaybackQualityChange': function(e) {
                                    var quality = e.target.getPlaybackQuality();
                                    var YTPQualityChange = jQuery.Event("YTPQualityChange");
                                    YTPQualityChange.quality = quality;
                                    jQuery(YTPlayer).trigger(YTPQualityChange);
                                },
                                'onError': function(err) {
                                    if (err.data == 150) {
                                        console.log("Embedding this video is restricted by Youtube.");
                                        if (YTPlayer.isPlayList)
                                            jQuery(YTPlayer).playNext();
                                    }
                                    if (err.data == 2 && YTPlayer.isPlayList) {
                                        jQuery(YTPlayer).playNext();
                                    }
                                    if (typeof YTPlayer.opt.onError == "function")
                                        YTPlayer.opt.onError($YTPlayer, err);
                                }
                            }
                        });
                    });
                });
                $YTPlayer.off("YTPTime.mask");
                jQuery.mbYTPlayer.applyMask(YTPlayer);
            });
        },
        isOnScreen: function(YTPlayer) {
            var playerBox = YTPlayer.wrapper;
            var winTop = $(window).scrollTop();
            var winBottom = winTop + $(window).height();
            var elTop = playerBox.offset().top;
            var elBottom = elTop + playerBox.height() / 2;
            return ((elBottom <= winBottom) && (elTop >= winTop));
        },
        getDataFromAPI: function(YTPlayer) {
            YTPlayer.videoData = jQuery.mbStorage.get("YTPlayer_data_" + YTPlayer.videoID);
            jQuery(YTPlayer).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (YTPlayer.hasData) {
                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                        var bgndURL = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                        YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                            backgroundSize: "cover"
                        });
                        YTPlayer.opt.backgroundUrl = bgndURL;
                    }
                }
            });
            if (YTPlayer.videoData) {
                setTimeout(function() {
                    YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? 16 / 9 : YTPlayer.opt.ratio;
                    YTPlayer.dataReceived = true;
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    jQuery(YTPlayer).trigger(YTPChanged);
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData)
                        YTPData.prop[x] = YTPlayer.videoData[x];
                    jQuery(YTPlayer).trigger(YTPData);
                }, YTPlayer.opt.fadeOnStartTime);
                YTPlayer.hasData = true;
            } else if (jQuery.mbYTPlayer.apiKey) {
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(data) {
                    YTPlayer.dataReceived = true;
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    jQuery(YTPlayer).trigger(YTPChanged);

                    function parseYTPlayer_data(data) {
                        YTPlayer.videoData = {};
                        YTPlayer.videoData.id = YTPlayer.videoID;
                        YTPlayer.videoData.channelTitle = data.channelTitle;
                        YTPlayer.videoData.title = data.title;
                        YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring(0, 400) + " ...";
                        YTPlayer.videoData.aspectratio = YTPlayer.opt.ratio == "auto" ? 16 / 9 : YTPlayer.opt.ratio;
                        YTPlayer.opt.ratio = YTPlayer.videoData.aspectratio;
                        YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
                        YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
                        YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
                        jQuery.mbStorage.set("YTPlayer_data_" + YTPlayer.videoID, YTPlayer.videoData);
                    }
                    parseYTPlayer_data(data.items[0].snippet);
                    YTPlayer.hasData = true;
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData) YTPData.prop[x] = YTPlayer.videoData[x];
                    jQuery(YTPlayer).trigger(YTPData);
                });
            } else {
                setTimeout(function() {
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    jQuery(YTPlayer).trigger(YTPChanged);
                }, 50);
                if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                    var bgndURL = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer.videoID + "/maxresdefault.jpg";
                    if (bgndURL)
                        YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                            backgroundSize: "cover"
                        });
                    YTPlayer.opt.backgroundUrl = bgndURL;
                }
                YTPlayer.videoData = null;
                YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
            }
            if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                YTPlayer.loading = jQuery("<div/>").addClass("loading").html("Loading").hide();
                jQuery(YTPlayer).append(YTPlayer.loading);
                YTPlayer.loading.fadeIn();
            }
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove();
        },
        getVideoData: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoData;
        },
        getVideoID: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false;
        },
        setVideoQuality: function(quality) {
            var YTPlayer = this.get(0);
            YTPlayer.player.setPlaybackQuality(quality);
        },
        playlist: function(videos, shuffle, callback) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.isPlayList = true;
            if (shuffle) videos = jQuery.shuffle(videos);
            if (!YTPlayer.videoID) {
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 0;
                YTPlayer.videoLength = videos.length;
                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).mb_YTPlayer();
            }
            if (typeof callback == "function")
                jQuery(YTPlayer).one("YTPChanged", function() {
                    callback(YTPlayer);
                });
            jQuery(YTPlayer).on("YTPEnd", function() {
                jQuery(YTPlayer).playNext();
            });
            return this;
        },
        playNext: function() {
            var YTPlayer = this.get(0);
            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }
            YTPlayer.videoCounter++;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength)
                YTPlayer.videoCounter = 0;
            jQuery(YTPlayer).YTPChangeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            return this;
        },
        playPrev: function() {
            var YTPlayer = this.get(0);
            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }
            YTPlayer.videoCounter--;
            if (YTPlayer.videoCounter < 0)
                YTPlayer.videoCounter = YTPlayer.videoLength - 1;
            jQuery(YTPlayer).YTPChangeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            return this;
        },
        playIndex: function(idx) {
            var YTPlayer = this.get(0);
            idx = idx - 1;
            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }
            YTPlayer.videoCounter = idx;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength - 1)
                YTPlayer.videoCounter = YTPlayer.videoLength - 1;
            jQuery(YTPlayer).YTPChangeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            return this;
        },
        changeMovie: function(opt) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.opt.startAt = 0;
            YTPlayer.opt.stopAt = 0;
            YTPlayer.opt.mask = false;
            YTPlayer.opt.mute = true;
            YTPlayer.hasData = false;
            YTPlayer.hasChanged = true;
            YTPlayer.player.loopTime = undefined;
            if (opt)
                jQuery.extend(YTPlayer.opt, opt);
            YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;
            if (YTPlayer.opt.loop == "true")
                YTPlayer.opt.loop = 9999;
            jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 0
            }, YTPlayer.opt.fadeOnStartTime, function() {
                var YTPChangeMovie = jQuery.Event("YTPChangeMovie");
                YTPChangeMovie.time = YTPlayer.currentTime;
                YTPChangeMovie.videoId = YTPlayer.videoID;
                jQuery(YTPlayer).trigger(YTPChangeMovie);
                jQuery(YTPlayer).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID), 1, YTPlayer.opt.quality);
                jQuery(YTPlayer).optimizeDisplay();
                jQuery.mbYTPlayer.checkForState(YTPlayer);
                jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
            });
            jQuery.mbYTPlayer.applyMask(YTPlayer);
        },
        getPlayer: function() {
            return jQuery(this).get(0).player;
        },
        playerDestroy: function() {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = true;
            ytp.backgroundIsInited = false;
            YTPlayer.isInit = false;
            YTPlayer.videoID = null;
            YTPlayer.isReady = false;
            YTPlayer.wrapper.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove();
            clearInterval(YTPlayer.checkForStartAt);
            clearInterval(YTPlayer.getState);
            return this;
        },
        fullscreen: function(real) {
            var YTPlayer = this.get(0);
            if (typeof real == "undefined") real = YTPlayer.opt.realfullscreen;
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("YTPFullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls);
                        } else {
                            YTPlayer.wrapper.before(controls);
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                    } else {
                        jQuery(YTPlayer).YTPSetVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart");
                    }
                });
            }
            if (!YTPlayer.isAlone) {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    });
                }
                jQuery(document).on("mousemove.YTPlayer", function(e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    });
                    clearTimeout(YTPlayer.hideCursor);
                    if (!jQuery(e.target).parents().is(".mb_YTPBar")) YTPlayer.hideCursor = setTimeout(hideMouse, 3000);
                });
                hideMouse();
                if (real) {
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("YTPFullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, YTPlayer.opt.fadeOnStartTime * 2);
                        videoWrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
                    }, YTPlayer.opt.fadeOnStartTime)
                } else
                    videoWrapper.css({
                        zIndex: 10000
                    }).CSSAnimate({
                        opacity: 1
                    }, YTPlayer.opt.fadeOnStartTime * 2);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true;
            } else {
                jQuery(document).off("mousemove.YTPlayer");
                clearTimeout(YTPlayer.hideCursor);
                YTPlayer.overlay.css({
                    cursor: "auto"
                });
                if (real) {
                    cancelFullscreen();
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime);
                    videoWrapper.css({
                        zIndex: 0
                    });
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false;
            }

            function RunPrefixMethod(obj, method) {
                var pfx = ["webkit", "moz", "ms", "o", ""];
                var p = 0,
                    m, t;
                while (p < pfx.length && !obj[m]) {
                    m = method;
                    if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1);
                    }
                    m = pfx[p] + m;
                    t = typeof obj[m];
                    if (t != "undefined") {
                        pfx = [pfx[p]];
                        return (t == "function" ? obj[m]() : obj[m]);
                    }
                    p++;
                }
            }

            function launchFullscreen(element) {
                RunPrefixMethod(element, "RequestFullScreen");
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen");
                }
            }
            return this;
        },
        toggleLoops: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0;
            } else {
                if (data.startAt) {
                    YTPlayer.player.seekTo(data.startAt);
                } else {
                    YTPlayer.player.playVideo();
                }
                data.loop = 1;
            }
            return this;
        },
        play: function() {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isReady)
                return this;
            YTPlayer.player.playVideo();
            YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime);
            if (!jQuery(YTPlayer.playerEl).is(":visible"))
                jQuery(YTPlayer.playerEl).CSSAnimate({
                    opacity: 1
                }, YTPlayer.opt.fadeOnStartTime * 2);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.state = 1;
            YTPlayer.orig_background = jQuery(YTPlayer).css("background-image");
            return this;
        },
        togglePlay: function(callback) {
            var YTPlayer = this.get(0);
            if (YTPlayer.state == 1)
                this.YTPPause();
            else
                this.YTPPlay();
            if (typeof callback == "function")
                callback(YTPlayer.state);
            return this;
        },
        stop: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo();
            return this;
        },
        pause: function() {
            var YTPlayer = this.get(0);
            YTPlayer.player.pauseVideo();
            YTPlayer.state = 2;
            return this;
        },
        seekTo: function(val) {
            var YTPlayer = this.get(0);
            YTPlayer.player.seekTo(val, true);
            return this;
        },
        setVolume: function(val) {
            var YTPlayer = this.get(0);
            if (!YTPlayer.player.length)
                return;
            if (!val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0)
                jQuery(YTPlayer).YTPUnmute();
            else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.opt.vol == val)) {
                if (!YTPlayer.isMute)
                    jQuery(YTPlayer).YTPMute();
                else
                    jQuery(YTPlayer).YTPUnmute();
            } else {
                YTPlayer.opt.vol = val;
                YTPlayer.player.setVolume(YTPlayer.opt.vol);
                if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(val)
            }
            return this;
        },
        toggleVolume: function() {
            var YTPlayer = this.get(0);
            if (!YTPlayer) return;
            if (YTPlayer.player.isMuted()) {
                jQuery(YTPlayer).YTPUnmute();
                return true;
            } else {
                jQuery(YTPlayer).YTPMute();
                return false;
            }
        },
        mute: function() {
            var YTPlayer = this.get(0);
            if (YTPlayer.isMute) return;
            YTPlayer.player.mute();
            YTPlayer.isMute = true;
            YTPlayer.player.setVolume(0);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10) {
                YTPlayer.volumeBar.updateSliderVal(0);
            }
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(YTPlayer).addClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.addClass("muted");
            var YTPEvent = jQuery.Event("YTPMuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (!YTPlayer.preventTrigger)
                jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
        unmute: function() {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isMute) return;
            YTPlayer.player.unMute();
            YTPlayer.isMute = false;
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(YTPlayer).removeClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.removeClass("muted");
            var YTPEvent = jQuery.Event("YTPUnmuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (!YTPlayer.preventTrigger)
                jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
        applyFilter: function(filter, value) {
            return this.each(function() {
                var YTPlayer = this;
                YTPlayer.filters[filter].value = value;
                if (YTPlayer.filtersEnabled)
                    jQuery(YTPlayer).YTPEnableFilters();
            });
        },
        applyFilters: function(filters) {
            return this.each(function() {
                var YTPlayer = this;
                if (!YTPlayer.isReady) {
                    jQuery(YTPlayer).on("YTPReady", function() {
                        jQuery(YTPlayer).YTPApplyFilters(filters);
                    });
                    return;
                }
                for (var key in filters)
                    jQuery(YTPlayer).YTPApplyFilter(key, filters[key]);
                jQuery(YTPlayer).trigger("YTPFiltersApplied");
            });
        },
        toggleFilter: function(filter, value) {
            return this.each(function() {
                var YTPlayer = this;
                if (!YTPlayer.filters[filter].value) YTPlayer.filters[filter].value = value;
                else YTPlayer.filters[filter].value = 0;
                if (YTPlayer.filtersEnabled) jQuery(this).YTPEnableFilters();
            });
        },
        toggleFilters: function(callback) {
            return this.each(function() {
                var YTPlayer = this;
                if (YTPlayer.filtersEnabled) {
                    jQuery(YTPlayer).trigger("YTPDisableFilters");
                    jQuery(YTPlayer).YTPDisableFilters();
                } else {
                    jQuery(YTPlayer).YTPEnableFilters();
                    jQuery(YTPlayer).trigger("YTPEnableFilters");
                }
                if (typeof callback == "function")
                    callback(YTPlayer.filtersEnabled);
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var YTPlayer = this;
                var iframe = jQuery(YTPlayer.playerEl);
                iframe.css("-webkit-filter", "");
                iframe.css("filter", "");
                YTPlayer.filtersEnabled = false;
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var YTPlayer = this;
                var iframe = jQuery(YTPlayer.playerEl);
                var filterStyle = "";
                for (var key in YTPlayer.filters) {
                    if (YTPlayer.filters[key].value)
                        filterStyle += key.replace("_", "-") + "(" + YTPlayer.filters[key].value + YTPlayer.filters[key].unit + ") ";
                }
                iframe.css("-webkit-filter", filterStyle);
                iframe.css("filter", filterStyle);
                YTPlayer.filtersEnabled = true;
            });
        },
        removeFilter: function(filter, callback) {
            return this.each(function() {
                var YTPlayer = this;
                if (typeof filter == "function") {
                    callback = filter;
                    filter = null;
                }
                if (!filter)
                    for (var key in YTPlayer.filters) {
                        jQuery(this).YTPApplyFilter(key, 0);
                        if (typeof callback == "function") callback(key);
                    } else {
                        jQuery(this).YTPApplyFilter(filter, 0);
                        if (typeof callback == "function") callback(filter);
                    }
            });
        },
        getFilters: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.filters;
        },
        addMask: function(mask) {
            var YTPlayer = this.get(0);
            if (!mask)
                mask = YTPlayer.actualMask;
            var tempImg = jQuery("<img/>").attr("src", mask).on("load", function() {
                YTPlayer.overlay.CSSAnimate({
                    opacity: 0
                }, YTPlayer.opt.fadeOnStartTime, function() {
                    YTPlayer.hasMask = true;
                    tempImg.remove();
                    YTPlayer.overlay.css({
                        backgroundImage: "url(" + mask + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    });
                    YTPlayer.overlay.CSSAnimate({
                        opacity: 1
                    }, YTPlayer.opt.fadeOnStartTime);
                });
            });
            return this;
        },
        removeMask: function() {
            var YTPlayer = this.get(0);
            YTPlayer.overlay.CSSAnimate({
                opacity: 0
            }, YTPlayer.opt.fadeOnStartTime, function() {
                YTPlayer.hasMask = false;
                YTPlayer.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                });
                YTPlayer.overlay.CSSAnimate({
                    opacity: 1
                }, YTPlayer.opt.fadeOnStartTime);
            });
            return this;
        },
        applyMask: function(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            $YTPlayer.off("YTPTime.mask");
            if (YTPlayer.opt.mask) {
                if (typeof YTPlayer.opt.mask == "string") {
                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask);
                    YTPlayer.actualMask = YTPlayer.opt.mask;
                } else if (typeof YTPlayer.opt.mask == "object") {
                    for (var time in YTPlayer.opt.mask) {
                        if (YTPlayer.opt.mask[time])
                            var img = jQuery("<img/>").attr("src", YTPlayer.opt.mask[time]);
                    }
                    if (YTPlayer.opt.mask[0])
                        $YTPlayer.YTPAddMask(YTPlayer.opt.mask[0]);
                    $YTPlayer.on("YTPTime.mask", function(e) {
                        for (var time in YTPlayer.opt.mask) {
                            if (e.time == time)
                                if (!YTPlayer.opt.mask[time]) {
                                    $YTPlayer.YTPRemoveMask();
                                } else {
                                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);
                                    YTPlayer.actualMask = YTPlayer.opt.mask[time];
                                }
                        }
                    });
                }
            }
            return this;
        },
        toggleMask: function() {
            var YTPlayer = this.get(0);
            var $YTPlayer = $(YTPlayer);
            if (YTPlayer.hasMask)
                $YTPlayer.YTPRemoveMask();
            else
                $YTPlayer.YTPAddMask();
            return this;
        },
        manageProgress: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTPProgress");
            var loadedBar = controls.find(".mb_YTPLoaded");
            var timeBar = controls.find(".mb_YTPseekbar");
            var totW = progressBar.outerWidth();
            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = (currentTime * totW) / totalTime;
            var startLeft = 0;
            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
            loadedBar.css({
                left: startLeft,
                width: loadedW + "%"
            });
            timeBar.css({
                left: 0,
                width: timeW
            });
            return {
                totalTime: totalTime,
                currentTime: currentTime
            };
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            data.showYTLogo = data.showYTLogo || data.printUrl;
            if (jQuery("#controlBar_" + YTPlayer.id).length)
                return;
            YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                if (YTPlayer.player.getPlayerState() == 1) jQuery(YTPlayer).YTPPause();
                else jQuery(YTPlayer).YTPPlay();
            });
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).YTPUnmute();
                } else {
                    jQuery(YTPlayer).YTPMute();
                }
            });
            var volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
            });
            YTPlayer.volumeBar = volumeBar;
            var idx = jQuery("<span/>").addClass("mb_YTPTime");
            var vURL = data.videoURL ? data.videoURL : "";
            if (vURL.indexOf("http") < 0) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT")
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                timeBar.css({
                    width: (e.clientX - timeBar.offset().left)
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
            if (data.showYTLogo) {
                buttonBar.append(movieUrl);
            }
            if (YTPlayer.isBackground || (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground)) buttonBar.append(onlyVideo);
            YTPlayer.controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                YTPlayer.controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(YTPlayer.controlBar);
            } else {
                jQuery("body").after(YTPlayer.controlBar);
            }
            volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function(el) {
                    if (el.value == 0) {
                        jQuery(YTPlayer).YTPMute();
                    } else {
                        jQuery(YTPlayer).YTPUnmute();
                    }
                    YTPlayer.player.setVolume(el.value);
                    if (!YTPlayer.isMute) YTPlayer.opt.vol = el.value;
                }
            });
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            clearInterval(YTPlayer.getState);
            if (!jQuery.contains(document, YTPlayer)) {
                jQuery(YTPlayer).YTPPlayerDestroy();
                clearInterval(YTPlayer.getState);
                clearInterval(YTPlayer.checkForStartAt);
                return;
            }
            jQuery.mbYTPlayer.checkForStart(YTPlayer);
            YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress();
                var $YTPlayer = jQuery(YTPlayer);
                var data = YTPlayer.opt;
                var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                YTPlayer.start_from_last = null;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                if (YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPEvent);
                }
                YTPlayer.currentTime = prog.currentTime;
                YTPlayer.totalTime = YTPlayer.player.getDuration();
                if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass("isMuted");
                else $YTPlayer.removeClass("isMuted");
                if (YTPlayer.opt.showControls)
                    if (prog.totalTime) {
                        YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    } else {
                        YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                    }
                if (eval(YTPlayer.opt.stopMovieOnBlur)) {
                    if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                            YTPlayer.hasFocus = false;
                            $YTPlayer.YTPPause();
                        }
                    } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
                        YTPlayer.hasFocus = true;
                        $YTPlayer.YTPPlay();
                    }
                }
                if (YTPlayer.opt.playOnlyIfVisible) {
                    var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                    if (!isOnScreen) {
                        $YTPlayer.YTPPause();
                    } else {
                        $YTPlayer.YTPPlay();
                    }
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
                    YTPlayer.controlBar.addClass("compact");
                    YTPlayer.isCompact = true;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
                    YTPlayer.controlBar.removeClass("compact");
                    YTPlayer.isCompact = false;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                }
                if (YTPlayer.player.getPlayerState() == 1 && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt))) {
                    if (YTPlayer.isEnded) return;
                    YTPlayer.isEnded = true;
                    setTimeout(function() {
                        YTPlayer.isEnded = false
                    }, 1000);
                    if (YTPlayer.isPlayList) {
                        if (!data.loop || (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)) {
                            YTPlayer.player.loopTime = undefined;
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            return;
                        }
                    } else if (!data.loop || (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)) {
                        YTPlayer.player.loopTime = undefined;
                        YTPlayer.preventTrigger = true;
                        YTPlayer.state = 2;
                        jQuery(YTPlayer).YTPPause();
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, YTPlayer.opt.fadeOnStartTime, function() {
                            if (YTPlayer.controlBar.length)
                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isBackground) {
                                if (YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer) {
                                    YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background;
                                    YTPlayer.opt.containment.css({
                                        background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                        backgroundSize: "cover"
                                    });
                                }
                            } else {
                                if (YTPlayer.orig_background)
                                    jQuery(YTPlayer).css("background-image", YTPlayer.orig_background);
                            }
                        });
                        return;
                    }
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
                    startAt = startAt || 1;
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    jQuery(YTPlayer).YTPPause();
                    YTPlayer.player.seekTo(startAt, true);
                    $YTPlayer.YTPPlay();
                }
            }, interval);
        },
        checkForStart: function(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer)) {
                jQuery(YTPlayer).YTPPlayerDestroy();
                return
            }
            YTPlayer.preventTrigger = true;
            YTPlayer.state = 2;
            jQuery(YTPlayer).YTPPlay();
            jQuery(YTPlayer).YTPPause();
            jQuery(YTPlayer).muteYTPVolume();
            jQuery("#controlBar_" + YTPlayer.id).remove();
            YTPlayer.controlBar = false;
            if (YTPlayer.opt.showControls)
                jQuery.mbYTPlayer.buildControls(YTPlayer);
            if (YTPlayer.overlay)
                if (YTPlayer.opt.addRaster) {
                    var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN);
                } else {
                    YTPlayer.overlay.removeClass(function(index, classNames) {
                        var current_classes = classNames.split(" "),
                            classes_to_remove = [];
                        jQuery.each(current_classes, function(index, class_name) {
                            if (/raster.*/.test(class_name)) {
                                classes_to_remove.push(class_name);
                            }
                        });
                        classes_to_remove.push("retina");
                        return classes_to_remove.join(" ");
                    })
                }
            var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            YTPlayer.start_from_last = null;
            YTPlayer.player.playVideo();
            YTPlayer.player.seekTo(startAt, true);
            clearInterval(YTPlayer.checkForStartAt);
            jQuery(YTPlayer).YTPMute();
            YTPlayer.checkForStartAt = setInterval(function() {
                var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    clearInterval(YTPlayer.checkForStartAt);
                    if (typeof YTPlayer.opt.onReady == "function")
                        YTPlayer.opt.onReady(YTPlayer);
                    YTPlayer.isReady = true;
                    var YTPready = jQuery.Event("YTPReady");
                    YTPready.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPready);
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    jQuery(YTPlayer).YTPPause();
                    if (!YTPlayer.opt.mute)
                        jQuery(YTPlayer).YTPUnmute();
                    YTPlayer.preventTrigger = false;
                    if (YTPlayer.opt.autoPlay) {
                        $YTPlayer.YTPPlay();
                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime;
                        jQuery(YTPlayer).trigger(YTPStart);
                        jQuery(YTPlayer.playerEl).css({
                            opacity: 1
                        });
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime * 2);
                        if (jQuery.mbBrowser.os.name == "mac" && jQuery.mbBrowser.safari && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0) {
                            YTPlayer.safariPlay = setInterval(function() {
                                if (YTPlayer.state != 1)
                                    $YTPlayer.YTPPlay();
                                else
                                    clearInterval(YTPlayer.safariPlay)
                            }, 10)
                        }
                        $YTPlayer.one("YTPReady", function() {
                            $YTPlayer.YTPPlay();
                        });
                    } else {
                        setTimeout(function() {
                            YTPlayer.player.pauseVideo();
                            YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isPlayer) {
                                jQuery(YTPlayer.playerEl).CSSAnimate({
                                    opacity: 1
                                }, YTPlayer.opt.fadeOnStartTime);
                                YTPlayer.wrapper.CSSAnimate({
                                    opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                }, YTPlayer.opt.fadeOnStartTime);
                            }
                        }, 250);
                        if (YTPlayer.controlBar.length)
                            YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                    }
                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && (YTPlayer.loading && YTPlayer.loading.length)) {
                        YTPlayer.loading.html("Ready");
                        setTimeout(function() {
                            YTPlayer.loading.fadeOut();
                        }, 100)
                    }
                    if (YTPlayer.controlBar && YTPlayer.controlBar.length)
                        YTPlayer.controlBar.slideDown(1000);
                } else if (jQuery.mbBrowser.os.name == "mac" && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0) {
                    YTPlayer.player.playVideo();
                    if (startAt >= 0)
                        YTPlayer.player.seekTo(startAt, true);
                }
            }, 100);
        },
        getTime: function() {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime);
        },
        getTotalTime: function() {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime);
        },
        formatTime: function(s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - (60 * min));
            return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
        },
        setAnchor: function(anchor) {
            var $YTplayer = this;
            $YTplayer.optimizeDisplay(anchor);
        },
        getAnchor: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.opt.anchor;
        }
    };
    jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0);
        var vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor;
        YTPlayer.opt.anchor = typeof YTPlayer.opt.anchor != "undefined " ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",");
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = YTPlayer.isPlayer ? 0 : 180;
            var win = {};
            var el = YTPlayer.wrapper;
            win.width = el.outerWidth();
            win.height = el.outerHeight() + abundance;
            YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
            vid.width = win.width;
            vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio);
            vid.marginTop = Math.ceil(-((vid.height - win.height) / 2));
            vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            if (lowest) {
                vid.height = win.height;
                vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio);
                vid.marginTop = 0;
                vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2));
            }
            for (var a in YTPAlign) {
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                        case "top":
                            vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                            break;
                        case "bottom":
                            vid.marginTop = lowest ? 0 : -(vid.height - (win.height));
                            break;
                        case "left":
                            vid.marginLeft = 0;
                            break;
                        case "right":
                            vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                            break;
                        default:
                            if (vid.width > win.width)
                                vid.marginLeft = -((vid.width - win.width) / 2);
                            break;
                    }
                }
            }
        } else {
            vid.width = "100%";
            vid.height = "100%";
            vid.marginTop = 0;
            vid.marginLeft = 0;
        }
        jQuery(YTPlayer.playerEl).css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        });
    };
    jQuery.shuffle = function(arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    };
    jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on");
        });
    };
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;
    jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor;
    jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor;
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.play;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause;
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume;
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress;
    jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;
})(jQuery, ytp);;

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, r) {
    var i = uncamel(t),
        n = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[n + "filter"] = e[n + "filter"] || "", r = setUnit(r > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : r, jQuery.CSS.filters[t].unit), e[n + "filter"] += i + "(" + r + ") ", delete e[t]
}
jQuery.support.CSStransition = function() {
    var e = document.body || document.documentElement,
        t = e.style;
    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var r in t) {
            "transform" === r && (t[jQuery.CSS.sfx + "transform"] = t[r], delete t[r]), "transform-origin" === r && (t[jQuery.CSS.sfx + "transform-origin"] = e[r], delete t[r]), "filter" !== r || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[r], delete t[r]), "blur" === r && setFilter(t, "blur", e[r]), "brightness" === r && setFilter(t, "brightness", e[r]), "contrast" === r && setFilter(t, "contrast", e[r]), "grayscale" === r && setFilter(t, "grayscale", e[r]), "hueRotate" === r && setFilter(t, "hueRotate", e[r]), "invert" === r && setFilter(t, "invert", e[r]), "saturate" === r && setFilter(t, "saturate", e[r]), "sepia" === r && setFilter(t, "sepia", e[r]);
            var i = "";
            "x" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[r], "px") + ")", delete t[r]), "y" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[r], "px") + ")", delete t[r]), "z" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[r], "px") + ")", delete t[r]), "rotate" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[r], "deg") + ")", delete t[r]), "scale" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[r], "") + ")", delete t[r]), "scaleX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[r], "") + ")", delete t[r]), "scaleY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[r], "") + ")", delete t[r]), "scaleZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[r], "") + ")", delete t[r]), "skew" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[r], "deg") + ")", delete t[r]), "perspective" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[r], "px") + ")", delete t[r])
        }
        return t
    },
    getProp: function(e) {
        var t = [];
        for (var r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
        return t.join(",")
    },
    animate: function(e, t, r, i, n) {
        return this.each(function() {
            function s() {
                u.called = !0, u.CSSAIsRunning = !1, a.off(jQuery.CSS.transitionEnd + "." + u.id), clearTimeout(u.timeout), a.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof n && n.apply(u), "function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null)
            }
            var u = this,
                a = jQuery(this);
            u.id = u.id || "CSSA_" + (new Date).getTime();
            var o = o || {
                type: "noEvent"
            };
            if (u.CSSAIsRunning && u.eventType == o.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void(u.CSSqueue = function() {
                a.CSSAnimate(e, t, r, i, n)
            });
            if (u.CSSqueue = null, u.eventType = o.type, 0 !== a.length && e) {
                if (e = jQuery.normalizeCss(e), u.CSSAIsRunning = !0, "function" == typeof t && (n = t, t = jQuery.fx.speeds._default), "function" == typeof r && (i = r, r = 0), "string" == typeof r && (n = r, r = 0), "function" == typeof i && (n = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var f in jQuery.fx.speeds) {
                        if (t == f) {
                            t = jQuery.fx.speeds[f];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof n && (i = n, n = null), !jQuery.support.CSStransition) {
                    for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                            var S = e[c],
                                l = "left";
                            e[l] = S, delete e[c]
                        }
                        if ("y" === c) {
                            var S = e[c],
                                l = "top";
                            e[l] = S, delete e[c]
                        }("-ms-transform" === c || "-ms-filter" === c) && delete e[c]
                    }
                    return void a.delay(r).animate(e, t, n)
                }
                var y = {
                    "default": "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                y[i] && (i = y[i]), a.off(jQuery.CSS.transitionEnd + "." + u.id);
                var m = jQuery.CSS.getProp(e),
                    d = {};
                jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = m, d[jQuery.CSS.sfx + "transition-duration"] = t + "ms", d[jQuery.CSS.sfx + "transition-delay"] = r + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function() {
                    a.one(jQuery.CSS.transitionEnd + "." + u.id, s), a.css(d)
                }, 1), u.timeout = setTimeout(function() {
                    return u.called || !n ? (u.called = !1, void(u.CSSAIsRunning = !1)) : (a.css(jQuery.CSS.sfx + "transition", ""), n.apply(u), u.CSSAIsRunning = !1, void("function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null)))
                }, t + r + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this),
            r = jQuery.normalizeCss(e);
        t.css(r)
    })
};;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {};
jQuery.browser.mozilla = !1;
jQuery.browser.webkit = !1;
jQuery.browser.opera = !1;
jQuery.browser.safari = !1;
jQuery.browser.chrome = !1;
jQuery.browser.androidStock = !1;
jQuery.browser.msie = !1;
jQuery.browser.edge = !1;
jQuery.browser.ua = nAgt;

function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        e = "ontouchstart" in document.createElement("div");
    return a || e ? !0 : !1
}
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    }; - 1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"); - 1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"); - 1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux");
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5));
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown");
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1");
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0");
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1");
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2");
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0");
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown");
    a.name = a.name.toLowerCase();
    a.major_version = "Unknown";
    a.minor_version = "Unknown";
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1]));
    return a
};
jQuery.browser.os = getOS();
jQuery.browser.hasTouch = isTouchSupported();
jQuery.browser.name = navigator.appName;
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0;
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
jQuery.browser.version = jQuery.browser.majorVersion;
jQuery.browser.android = /Android/i.test(nAgt);
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;
jQuery.isMobile = jQuery.browser.mobile;
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width();
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
jQuery.mbBrowser = jQuery.browser;
jQuery.browser.versionCompare = function(a, e) {
    if ("stringstring" != typeof a + typeof e) return !1;
    for (var c = a.split("."), d = e.split("."), b = 0, f = Math.max(c.length, d.length); b < f; b++) {
        if (c[b] && !d[b] && 0 < parseInt(c[b]) || parseInt(c[b]) > parseInt(d[b])) return 1;
        if (d[b] && !c[b] && 0 < parseInt(d[b]) || parseInt(c[b]) < parseInt(d[b])) return -1
    }
    return 0
};;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {};
jQuery.browser.mozilla = !1;
jQuery.browser.webkit = !1;
jQuery.browser.opera = !1;
jQuery.browser.safari = !1;
jQuery.browser.chrome = !1;
jQuery.browser.androidStock = !1;
jQuery.browser.msie = !1;
jQuery.browser.edge = !1;
jQuery.browser.ua = nAgt;

function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        e = "ontouchstart" in document.createElement("div");
    return a || e ? !0 : !1
}
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    }; - 1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"); - 1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"); - 1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux");
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5));
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown");
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1");
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0");
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1");
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2");
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0");
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown");
    a.name = a.name.toLowerCase();
    a.major_version = "Unknown";
    a.minor_version = "Unknown";
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1]));
    return a
};
jQuery.browser.os = getOS();
jQuery.browser.hasTouch = isTouchSupported();
jQuery.browser.name = navigator.appName;
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0;
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
jQuery.browser.version = jQuery.browser.majorVersion;
jQuery.browser.android = /Android/i.test(nAgt);
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;
jQuery.isMobile = jQuery.browser.mobile;
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width();
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
jQuery.mbBrowser = jQuery.browser;
jQuery.browser.versionCompare = function(a, e) {
    if ("stringstring" != typeof a + typeof e) return !1;
    for (var c = a.split("."), d = e.split("."), b = 0, f = Math.max(c.length, d.length); b < f; b++) {
        if (c[b] && !d[b] && 0 < parseInt(c[b]) || parseInt(c[b]) > parseInt(d[b])) return 1;
        if (d[b] && !c[b] && 0 < parseInt(d[b]) || parseInt(c[b]) < parseInt(d[b])) return -1
    }
    return 0
};
(function(b) {
    b.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: b.browser.mobile ? "touchstart" : "mousedown",
            end: b.browser.mobile ? "touchend" : "mouseup",
            move: b.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function(c) {
            return this.each(function() {
                var a = this,
                    d = b(a);
                d.addClass("simpleSlider");
                a.opt = {};
                b.extend(a.opt, b.simpleSlider.defaults, c);
                b.extend(a.opt, d.data());
                var e = "h" == a.opt.orientation ? "horizontal" : "vertical";
                e = b("<div/>").addClass("level").addClass(e);
                d.prepend(e);
                a.level = e;
                d.css({
                    cursor: "default"
                });
                "auto" == a.opt.scale && (a.opt.scale = b(a).outerWidth());
                d.updateSliderVal();
                a.opt.readonly || (d.on(b.simpleSlider.events.start, function(c) {
                    b.browser.mobile && (c = c.changedTouches[0]);
                    a.canSlide = !0;
                    d.updateSliderVal(c);
                    "h" == a.opt.orientation ? d.css({
                        cursor: "col-resize"
                    }) : d.css({
                        cursor: "row-resize"
                    });
                    b.browser.mobile || (c.preventDefault(), c.stopPropagation())
                }), b(document).on(b.simpleSlider.events.move, function(c) {
                    b.browser.mobile && (c = c.changedTouches[0]);
                    a.canSlide && (b(document).css({
                        cursor: "default"
                    }), d.updateSliderVal(c), b.browser.mobile || (c.preventDefault(), c.stopPropagation()))
                }).on(b.simpleSlider.events.end, function() {
                    b(document).css({
                        cursor: "auto"
                    });
                    a.canSlide = !1;
                    d.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(c) {
            var a = this.get(0);
            if (a.opt) {
                a.opt.initialval = "number" == typeof a.opt.initialval ? a.opt.initialval : a.opt.initialval(a);
                var d = b(a).outerWidth(),
                    e = b(a).outerHeight();
                a.x = "object" == typeof c ? c.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof c ? c * d / a.opt.scale : a.opt.initialval * d / a.opt.scale;
                a.y = "object" == typeof c ? c.clientY + document.body.scrollTop - this.offset().top : "number" == typeof c ? (a.opt.scale - a.opt.initialval - c) * e / a.opt.scale : a.opt.initialval * e / a.opt.scale;
                a.y = this.outerHeight() - a.y;
                a.scaleX = a.x * a.opt.scale / d;
                a.scaleY = a.y * a.opt.scale / e;
                a.outOfRangeX = a.scaleX > a.opt.scale ? a.scaleX - a.opt.scale : 0 > a.scaleX ? a.scaleX : 0;
                a.outOfRangeY = a.scaleY > a.opt.scale ? a.scaleY - a.opt.scale : 0 > a.scaleY ? a.scaleY : 0;
                a.outOfRange = "h" == a.opt.orientation ? a.outOfRangeX : a.outOfRangeY;
                a.value = "undefined" != typeof c ? "h" == a.opt.orientation ? a.x >= this.outerWidth() ? a.opt.scale : 0 >= a.x ? 0 : a.scaleX : a.y >= this.outerHeight() ? a.opt.scale : 0 >= a.y ? 0 : a.scaleY : "h" == a.opt.orientation ? a.scaleX : a.scaleY;
                "h" == a.opt.orientation ? a.level.width(Math.floor(100 * a.x / d) + "%") : a.level.height(Math.floor(100 * a.y / e));
                "function" == typeof a.opt.callback && a.opt.callback(a)
            }
        }
    };
    b.fn.simpleSlider = b.simpleSlider.init;
    b.fn.updateSliderVal = b.simpleSlider.updateSliderVal
})(jQuery);;
(function(d) {
    d.mbCookie = {
        set: function(a, c, f, b) {
            "object" == typeof c && (c = JSON.stringify(c));
            b = b ? "; domain=" + b : "";
            var e = new Date,
                d = "";
            0 < f && (e.setTime(e.getTime() + 864E5 * f), d = "; expires=" + e.toGMTString());
            document.cookie = a + "=" + c + d + "; path=/" + b
        },
        get: function(a) {
            a += "=";
            for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var b = c[d];
                    " " == b.charAt(0);) b = b.substring(1, b.length);
                if (0 == b.indexOf(a)) try {
                    return JSON.parse(b.substring(a.length, b.length))
                } catch (e) {
                    return b.substring(a.length, b.length)
                }
            }
            return null
        },
        remove: function(a) {
            d.mbCookie.set(a, "", -1)
        }
    };
    d.mbStorage = {
        set: function(a, c) {
            "object" == typeof c && (c = JSON.stringify(c));
            localStorage.setItem(a, c)
        },
        get: function(a) {
            if (localStorage[a]) try {
                return JSON.parse(localStorage[a])
            } catch (c) {
                return localStorage[a]
            } else return null
        },
        remove: function(a) {
            a ? localStorage.removeItem(a) : localStorage.clear()
        }
    }
})(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});;
(function($, document, window) {
    var
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            appendTo: '',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: true,
            removeClasses: false,
            removeStyles: false,
            brand: '',
            animations: 'jquery',
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav',
        Keyboard = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        if (!this.settings.duplicate && !options.hasOwnProperty("removeIds")) {
            this.settings.removeIds = false;
        }
        this._defaults = defaults;
        this._name = mobileMenu;
        this.init();
    }
    Plugin.prototype.init = function() {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass, menuBar;
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
        } else {
            $this.mobileNav = menu;
        }
        if (settings.removeIds) {
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function(i, e) {
                $(e).removeAttr('id');
            });
        }
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function(i, e) {
                $(e).removeAttr('class');
            });
        }
        if (settings.removeStyles) {
            $this.mobileNav.removeAttr('style');
            $this.mobileNav.find('*').each(function(i, e) {
                $(e).removeAttr('style');
            });
        }
        iconClass = prefix + '_icon';
        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }
        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
        if (settings.brand !== '') {
            var brand = $('<div class="' + prefix + '_brand">' + settings.brand + '</div>');
            $(menuBar).append(brand);
        }
        $this.btn = $(['<' + settings.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">', '<span class="' + prefix + '_menutxt">' + settings.label + '</span>', '<span class="' + iconClass + '">', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '</span>', '</' + settings.parentTag + '>'].join(''));
        $(menuBar).append($this.btn);
        if (settings.appendTo !== '') {
            $(settings.appendTo).append(menuBar);
        } else {
            $(settings.prependTo).prepend(menuBar);
        }
        menuBar.append($this.mobileNav);
        var items = $this.mobileNav.find('li');
        $(items).each(function() {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);
            if (data.children.length > 0) {
                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];
                $(a).each(function() {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }
                    if ($(this).is("a")) {
                        containsAnchor = true;
                    }
                });
                var wrapElement = $('<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>');
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix + '_row');
                } else
                    $(nodes).wrapAll('<span class="' + prefix + '_parent-link ' + prefix + '_row"/>').parent();
                if (!settings.showChildren) {
                    item.addClass(prefix + '_collapsed');
                } else {
                    item.addClass(prefix + '_open');
                }
                item.addClass(prefix + '_parent');
                var arrowElement = $('<span class="' + prefix + '_arrow">' + (settings.showChildren ? settings.openedSymbol : settings.closedSymbol) + '</span>');
                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();
                $(nodes).last().after(arrowElement);
            } else if (item.children().length === 0) {
                item.addClass(prefix + '_txtnode');
            }
            item.children('a').attr('role', 'menuitem').click(function(event) {
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix + '_parent')) {
                    $($this.btn).click();
                }
            });
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function(event) {
                    $($this.btn).click();
                });
                item.find('.' + prefix + '_parent-link a:not(.' + prefix + '_item)').click(function(event) {
                    $($this.btn).click();
                });
            }
        });
        $(items).each(function() {
            var data = $(this).data('menu');
            if (!settings.showChildren) {
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);
        $this.mobileNav.attr('role', 'menu');
        $(document).mousedown(function() {
            $this._outlines(false);
        });
        $(document).keyup(function() {
            $this._outlines(true);
        });
        $($this.btn).click(function(e) {
            e.preventDefault();
            $this._menuToggle();
        });
        $this.mobileNav.on('click', '.' + prefix + '_item', function(e) {
            e.preventDefault();
            $this._itemClick($(this));
        });
        $($this.btn).keydown(function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.ENTER:
                case Keyboard.SPACE:
                case Keyboard.DOWN:
                    e.preventDefault();
                    if (ev.keyCode !== Keyboard.DOWN || !$($this.btn).hasClass(prefix + '_open')) {
                        $this._menuToggle();
                    }
                    $($this.btn).next().find('[role="menuitem"]').first().focus();
                    break;
            }
        });
        $this.mobileNav.on('keydown', '.' + prefix + '_item', function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.ENTER:
                    e.preventDefault();
                    $this._itemClick($(e.target));
                    break;
                case Keyboard.RIGHT:
                    e.preventDefault();
                    if ($(e.target).parent().hasClass(prefix + '_collapsed')) {
                        $this._itemClick($(e.target));
                    }
                    $(e.target).next().find('[role="menuitem"]').first().focus();
                    break;
            }
        });
        $this.mobileNav.on('keydown', '[role="menuitem"]', function(e) {
            var ev = e || event;
            switch (ev.keyCode) {
                case Keyboard.DOWN:
                    e.preventDefault();
                    var allItems = $(e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var nextIdx = idx + 1;
                    if (allItems.length <= nextIdx) {
                        nextIdx = 0;
                    }
                    var next = allItems.eq(nextIdx);
                    next.focus();
                    break;
                case Keyboard.UP:
                    e.preventDefault();
                    var allItems = $(e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var next = allItems.eq(idx - 1);
                    next.focus();
                    break;
                case Keyboard.LEFT:
                    e.preventDefault();
                    if ($(e.target).parent().parent().parent().hasClass(prefix + '_open')) {
                        var parent = $(e.target).parent().parent().prev();
                        parent.focus();
                        $this._itemClick(parent);
                    } else if ($(e.target).parent().parent().hasClass(prefix + '_nav')) {
                        $this._menuToggle();
                        $($this.btn).focus();
                    }
                    break;
                case Keyboard.ESCAPE:
                    e.preventDefault();
                    $this._menuToggle();
                    $($this.btn).focus();
                    break;
            }
        });
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.' + prefix + '_item a').click(function(e) {
                e.stopImmediatePropagation();
            });
        }
    };
    Plugin.prototype._menuToggle = function(el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;
        if (btn.hasClass(prefix + '_collapsed')) {
            btn.removeClass(prefix + '_collapsed');
            btn.addClass(prefix + '_open');
        } else {
            btn.removeClass(prefix + '_open');
            btn.addClass(prefix + '_collapsed');
        }
        btn.addClass(prefix + '_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };
    Plugin.prototype._itemClick = function(el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data('menu');
        if (!data) {
            data = {};
            data.arrow = el.children('.' + prefix + '_arrow');
            data.ul = el.next('ul');
            data.parent = el.parent();
            if (data.parent.hasClass(prefix + '_parent-link')) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next('ul');
            }
            el.data('menu', data);
        }
        if (data.parent.hasClass(prefix + '_collapsed')) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix + '_collapsed');
            data.parent.addClass(prefix + '_open');
            data.parent.addClass(prefix + '_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix + '_collapsed');
            data.parent.removeClass(prefix + '_open');
            data.parent.addClass(prefix + '_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        function afterOpen(trigger, parent) {
            $(trigger).removeClass(prefix + '_animating');
            $(parent).removeClass(prefix + '_animating');
            if (!init) {
                settings.afterOpen(trigger);
            }
        }

        function afterClose(trigger, parent) {
            el.attr('aria-hidden', 'true');
            items.attr('tabindex', '-1');
            $this._setVisAttr(el, true);
            el.hide();
            $(trigger).removeClass(prefix + '_animating');
            $(parent).removeClass(prefix + '_animating');
            if (!init) {
                settings.afterClose(trigger);
            } else if (trigger == 'init') {
                settings.init();
            }
        }
        if (el.hasClass(prefix + '_hidden')) {
            el.removeClass(prefix + '_hidden');
            if (!init) {
                settings.beforeOpen(trigger);
            }
            if (settings.animations === 'jquery') {
                el.stop(true, true).slideDown(duration, settings.easingOpen, function() {
                    afterOpen(trigger, parent);
                });
            } else if (settings.animations === 'velocity') {
                el.velocity("finish").velocity("slideDown", {
                    duration: duration,
                    easing: settings.easingOpen,
                    complete: function() {
                        afterOpen(trigger, parent);
                    }
                });
            }
            el.attr('aria-hidden', 'false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix + '_hidden');
            if (!init) {
                settings.beforeClose(trigger);
            }
            if (settings.animations === 'jquery') {
                el.stop(true, true).slideUp(duration, this.settings.easingClose, function() {
                    afterClose(trigger, parent)
                });
            } else if (settings.animations === 'velocity') {
                el.velocity("finish").velocity("slideUp", {
                    duration: duration,
                    easing: settings.easingClose,
                    complete: function() {
                        afterClose(trigger, parent);
                    }
                });
            }
        }
    };
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;
        var nonHidden = el.children('li').children('ul').not('.' + prefix + '_hidden');
        if (!hidden) {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr('aria-hidden', 'false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr('aria-hidden', 'true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.' + prefix + '_item'));
            el.data('menu', data);
        }
        return data.links;
    };
    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', 'none');
        } else {
            $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', '');
        }
    };
    Plugin.prototype.toggle = function() {
        var $this = this;
        $this._menuToggle();
    };
    Plugin.prototype.open = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + '_collapsed')) {
            $this._menuToggle();
        }
    };
    Plugin.prototype.close = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + '_open')) {
            $this._menuToggle();
        }
    };
    $.fn[mobileMenu] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + mobileMenu)) {
                    $.data(this, 'plugin_' + mobileMenu, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function() {
                var instance = $.data(this, 'plugin_' + mobileMenu);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));
(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#header-area').addClass('fixTotop');
            } else {
                $('#header-area').removeClass('fixTotop');
            }
            if ($(window).scrollTop() >= 400) {
                $('.scroll-top').slideDown(400);
            } else {
                $('.scroll-top').slideUp(400);
            }
        });
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        $('#startDate').datepicker({
            locale: 'fr-fr',
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: today,
            format: 'dd mm yy',
        });
        $('#endDate').datepicker({
            locale: 'fr-fr',
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: function() {
                return $('#startDate').val();
            },
            format: 'dd mm yy',
        });
        $(".partner-content-wrap").owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 1500,
            nav: false,
            dots: false,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $(".popucar-menu a, .home2-car-filter a").click(function() {
            $(".popucar-menu a, .home2-car-filter a").removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $(".popular-car-gird").isotope({
                filter: filterValue
            });
            return false;
        });
        $(".newcar-menu a").click(function() {
            $(".newcar-menu a").removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $(".newest-car-gird").isotope({
                filter: filterValue
            });
            return false;
        });
        $('.car-hover').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
        $(".testimonial-content").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: true
        });
        $('#mobileapp-video-bg').YTPlayer({
            fitToBackground: true,
            videoURL: 'm5_AKjDdqaU',
            containment: '#mobile-app-area',
            quality: 'highres',
            loop: true,
            showControls: false,
            opacity: 1,
            mute: true
        });
        $(".scroll-top").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
        });
        $(".mainmenu").slicknav({
            'label': '',
            'prependTo': '#header-bottom .container .row'
        });
        $("#slideslow-bg").vegas({
            overlay: true,
            transition: 'fade',
            transitionDuration: 2000,
            delay: 4000,
            color: '#000',
            animation: 'random',
            animationDuration: 20000,
            slides: [{
                src: 'assets/img/slider-img/slider-img-1.jpg'
            }, {
                src: 'assets/img/slider-img/slider-img-2.jpg'
            }, {
                src: 'assets/img/slider-img/slider-img-3.jpg'
            }, {
                src: 'assets/img/slider-img/slider-img-4.jpg'
            }]
        });
        $('#startDate2').datepicker({
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: today,
            maxDate: function() {
                return $('#endDate2').val();
            },
            format: 'dd mm yy'
        });
        $('#endDate2').datepicker({
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: function() {
                return $('#startDate2').val();
            },
            format: 'dd mm yy'
        });
        $("#home-slider-area").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3000,
            nav: false,
            dots: true,
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown'
        });
        $(".car-preview-crousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
        $(".service-container-wrap").owlCarousel({
            loop: true,
            items: 3,
            margin: 20,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    jQuery(window).load(function() {
        jQuery('.preloader').fadeOut();
        jQuery('.preloader-spinner').delay(350).fadeOut('slow');
        jQuery('body').removeClass('loader-active');
        jQuery(".popular-car-gird").isotope();
    });
}(jQuery));
/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 JÃ¶rn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.on("click.validate", ":submit", function(event) {
                    if (validator.settings.submitHandler) {
                        validator.submitButton = event.target;
                    }
                    if ($(this).hasClass("cancel")) {
                        validator.cancelSubmit = true;
                    }
                    if ($(this).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault();
                    }

                    function handle() {
                        var hidden, result;
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                            }
                            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (validator.submitButton) {
                                hidden.remove();
                            }
                            if (result !== undefined) {
                                return result;
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            var valid, validator, errorList;
            if ($(this[0]).is("form")) {
                valid = this.validate().form();
            } else {
                errorList = [];
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid;
                    if (!valid) {
                        errorList = errorList.concat(validator.errorList);
                    }
                });
                validator.errorList = errorList;
            }
            return valid;
        },
        rules: function(command, argument) {
            var element = this[0],
                settings, staticRules, existingRules, data, param, filtered;
            if (element == null || element.form == null) {
                return;
            }
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        delete existingRules.messages;
                        staticRules[element.name] = existingRules;
                        if (argument.messages) {
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        }
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                            if (method === "required") {
                                $(element).removeAttr("aria-required");
                            }
                        });
                        return filtered;
                }
            }
            data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
                $(element).attr("aria-required", "true");
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                });
            }
            return data;
        }
    });
    $.extend($.expr.pseudos || $.expr[":"], {
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        filled: function(a) {
            var val = $(a).val();
            return val !== null && !!$.trim("" + val);
        },
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (params === undefined) {
            return source;
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n;
            });
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else if (element.name in this.submitted || element.name in this.invalid) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element);
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "champs obligatoire.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}."),
            step: $.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                    }
                    var validator = $.data(this.form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        settings = validator.settings;
                    if (settings[eventType] && !$(this).is(settings.ignore)) {
                        settings[eventType].call(validator, this, event);
                    }
                }
                $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
                $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    v = this,
                    result = true,
                    rs, group;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    group = this.groups[checkElement.name];
                    if (group) {
                        $.each(this.groups, function(name, testgroup) {
                            if (testgroup === group && name !== checkElement.name) {
                                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                                if (cleanElement && cleanElement.name in v.invalid) {
                                    v.currentElements.push(cleanElement);
                                    result = v.check(cleanElement) && result;
                                }
                            }
                        });
                    }
                    rs = this.check(checkElement) !== false;
                    result = result && rs;
                    if (rs) {
                        this.invalid[checkElement.name] = false;
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    $(element).attr("aria-invalid", !rs);
                }
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    var validator = this;
                    $.extend(this.errorMap, errors);
                    this.errorList = $.map(this.errorMap, function(message, name) {
                        return {
                            message: message,
                            element: validator.findByName(name)[0]
                        };
                    });
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(elements);
            },
            resetElements: function(elements) {
                var i;
                if (this.settings.unhighlight) {
                    for (i = 0; elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
                        this.findByName(elements[i].name).removeClass(this.settings.validClass);
                    }
                } else {
                    elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0,
                    i;
                for (i in obj) {
                    if (obj[i]) {
                        count++;
                    }
                }
                return count;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var name = this.name || $(this).attr("name");
                    if (!name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                    }
                    if (name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false;
                    }
                    rulesCache[name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
                var $element = $(element),
                    type = element.type,
                    val, idx;
                if (type === "radio" || type === "checkbox") {
                    return this.findByName(element.name).filter(":checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? "NaN" : $element.val();
                }
                if (element.hasAttribute("contenteditable")) {
                    val = $element.text();
                } else {
                    val = $element.val();
                }
                if (type === "file") {
                    if (val.substr(0, 12) === "C:\\fakepath\\") {
                        return val.substr(12);
                    }
                    idx = val.lastIndexOf("/");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    idx = val.lastIndexOf("\\");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    return val;
                }
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i;
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule;
                if (typeof rules.normalizer === "function") {
                    val = rules.normalizer.call(element, val);
                    if (typeof val !== "string") {
                        throw new TypeError("The normalizer should return a string value.");
                    }
                    delete rules.normalizer;
                }
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() +
                    method.substring(1).toLowerCase()) || $(element).data("msg");
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },
            defaultMessage: function(element, rule) {
                if (typeof rule === "string") {
                    rule = {
                        method: rule
                    };
                }
                var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                return message;
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule);
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var place, group, errorID, v, error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message);
                } else {
                    error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, place, $(element));
                    } else {
                        place.insertAfter(element);
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                        errorID = error.attr("id");
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);
                        group = this.groups[element.name];
                        if (group) {
                            v = this;
                            $.each(v.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
                var name = this.escapeCssMeta(this.idOrName(element)),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
                }
                return this.errors().filter(selector);
            },
            escapeCssMeta: function(string) {
                return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name);
                }
                return $(element).not(this.settings.ignore)[0];
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length;
                        }
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    $(element).addClass(this.settings.pendingClass);
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                $(element).removeClass(this.settings.pendingClass);
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element, method) {
                method = typeof method === "string" && method || "remote";
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, {
                        method: method
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },
        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },
        normalizeAttributeRule: function(rules, type, method, value) {
            if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);
                if (isNaN(value)) {
                    value = undefined;
                }
            }
            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {
                rules[method] = true;
            }
        },
        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true;
                    }
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }
                this.normalizeAttributeRule(rules, type, method, value);
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        dataRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
        },
        staticRules: function(element) {
            var rules = {},
                validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        $.data(element.form, "validator").resetElements($(element));
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            step: function(value, element, param) {
                var type = $(element).attr("type"),
                    errorMessage = "Step attribute on input type " + type + " is not supported.",
                    supportedTypes = ["text", "number", "range"],
                    re = new RegExp("\\b" + type + "\\b"),
                    notSupported = type && !re.test(supportedTypes.join()),
                    decimalPlaces = function(num) {
                        var match = ("" + num).match(/(?:\.(\d+))?$/);
                        if (!match) {
                            return 0;
                        }
                        return match[1] ? match[1].length : 0;
                    },
                    toInt = function(num) {
                        return Math.round(num * Math.pow(10, decimals));
                    },
                    valid = true,
                    decimals;
                if (notSupported) {
                    throw new Error(errorMessage);
                }
                decimals = decimalPlaces(param);
                if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                    valid = false;
                }
                return this.optional(element) || valid;
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                    target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },
            remote: function(value, element, param, method) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                method = typeof method === "string" && method || "remote";
                var previous = this.previousValue(element, method),
                    validator, data, optionDataString;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
                this.settings.messages[element.name][method] = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                optionDataString = $.param($.extend({
                    data: value
                }, param.data));
                if (previous.old === optionDataString) {
                    return previous.valid;
                }
                previous.old = optionDataString;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;
                        validator.settings.messages[element.name][method] = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.resetInternals();
                            validator.toHide = validator.errorsFor(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.invalid[element.name] = false;
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, {
                                method: method,
                                parameters: value
                            });
                            errors[element.name] = previous.message = message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }
        }
    });
    var pendingRequests = {},
        ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
    return $;
}));;
/*!
 * ClockPicker v{package.version} (http://weareoutman.github.io/clockpicker/)
 * Copyright 2014 Wang Shenwei.
 * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
 */
(function() {
    var $ = window.jQuery,
        $win = $(window),
        $doc = $(document),
        $body;
    var svgNS = 'http://www.w3.org/2000/svg',
        svgSupported = 'SVGAngle' in window && (function() {
            var supported, el = document.createElement('div');
            el.innerHTML = '<svg/>';
            supported = (el.firstChild && el.firstChild.namespaceURI) == svgNS;
            el.innerHTML = '';
            return supported;
        })();
    var transitionSupported = (function() {
        var style = document.createElement('div').style;
        return 'transition' in style || 'WebkitTransition' in style || 'MozTransition' in style || 'msTransition' in style || 'OTransition' in style;
    })();
    var touchSupported = 'ontouchstart' in window,
        mousedownEvent = 'mousedown' + (touchSupported ? ' touchstart' : ''),
        mousemoveEvent = 'mousemove.clockpicker' + (touchSupported ? ' touchmove.clockpicker' : ''),
        mouseupEvent = 'mouseup.clockpicker' + (touchSupported ? ' touchend.clockpicker' : '');
    var vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;

    function createSvgElement(name) {
        return document.createElementNS(svgNS, name);
    }

    function leadingZero(num) {
        return (num < 10 ? '0' : '') + num;
    }
    var idCounter = 0;

    function uniqueId(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    }
    var dialRadius = 100,
        outerRadius = 80,
        innerRadius = 54,
        tickRadius = 13,
        diameter = dialRadius * 2,
        duration = transitionSupported ? 350 : 1;
    var tpl = ['<div class="popover clockpicker-popover">', '<div class="arrow"></div>', '<div class="popover-title">', '<span class="clockpicker-span-hours text-primary"></span>', ' : ', '<span class="clockpicker-span-minutes"></span>', '<span class="clockpicker-span-am-pm"></span>', '</div>', '<div class="popover-content">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', '</div>', '<span class="clockpicker-am-pm-block">', '</span>', '</div>', '</div>'].join('');

    function ClockPicker(element, options) {
        var popover = $(tpl),
            plate = popover.find('.clockpicker-plate'),
            hoursView = popover.find('.clockpicker-hours'),
            minutesView = popover.find('.clockpicker-minutes'),
            amPmBlock = popover.find('.clockpicker-am-pm-block'),
            isInput = element.prop('tagName') === 'INPUT',
            input = isInput ? element : element.find('input'),
            addon = element.find('.input-group-addon'),
            self = this,
            timer;
        this.id = uniqueId('cp');
        this.element = element;
        this.options = options;
        this.isAppended = false;
        this.isShown = false;
        this.currentView = 'hours';
        this.isInput = isInput;
        this.input = input;
        this.addon = addon;
        this.popover = popover;
        this.plate = plate;
        this.hoursView = hoursView;
        this.minutesView = minutesView;
        this.amPmBlock = amPmBlock;
        this.spanHours = popover.find('.clockpicker-span-hours');
        this.spanMinutes = popover.find('.clockpicker-span-minutes');
        this.spanAmPm = popover.find('.clockpicker-span-am-pm');
        this.amOrPm = "PM";
        if (options.twelvehour) {
            var amPmButtonsTemplate = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-am-button">', 'AM</button>', '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-pm-button">', 'PM</button>', '</div>'].join('');
            var amPmButtons = $(amPmButtonsTemplate);
            $('<button type="button" class="btn btn-sm btn-default clockpicker-button am-button">' + "AM" + '</button>').on("click", function() {
                self.amOrPm = "AM";
                $('.clockpicker-span-am-pm').empty().append('AM');
            }).appendTo(this.amPmBlock);
            $('<button type="button" class="btn btn-sm btn-default clockpicker-button pm-button">' + "PM" + '</button>').on("click", function() {
                self.amOrPm = 'PM';
                $('.clockpicker-span-am-pm').empty().append('PM');
            }).appendTo(this.amPmBlock);
        }
        if (!options.autoclose) {
            $('<button type="button" class="btn btn-sm btn-default btn-block clockpicker-button">' + options.donetext + '</button>').click($.proxy(this.done, this)).appendTo(popover);
        }
        if ((options.placement === 'top' || options.placement === 'bottom') && (options.align === 'top' || options.align === 'bottom')) options.align = 'left';
        if ((options.placement === 'left' || options.placement === 'right') && (options.align === 'left' || options.align === 'right')) options.align = 'top';
        popover.addClass(options.placement);
        popover.addClass('clockpicker-align-' + options.align);
        this.spanHours.click($.proxy(this.toggleView, this, 'hours'));
        this.spanMinutes.click($.proxy(this.toggleView, this, 'minutes'));
        input.on('focus.clockpicker click.clockpicker', $.proxy(this.show, this));
        addon.on('click.clockpicker', $.proxy(this.toggle, this));
        var tickTpl = $('<div class="clockpicker-tick"></div>'),
            i, tick, radian, radius;
        if (options.twelvehour) {
            for (i = 1; i < 13; i += 1) {
                tick = tickTpl.clone();
                radian = i / 6 * Math.PI;
                radius = outerRadius;
                tick.css('font-size', '120%');
                tick.css({
                    left: dialRadius + Math.sin(radian) * radius - tickRadius,
                    top: dialRadius - Math.cos(radian) * radius - tickRadius
                });
                tick.html(i === 0 ? '00' : i);
                hoursView.append(tick);
                tick.on(mousedownEvent, mousedown);
            }
        } else {
            for (i = 0; i < 24; i += 1) {
                tick = tickTpl.clone();
                radian = i / 6 * Math.PI;
                var inner = i > 0 && i < 13;
                radius = inner ? innerRadius : outerRadius;
                tick.css({
                    left: dialRadius + Math.sin(radian) * radius - tickRadius,
                    top: dialRadius - Math.cos(radian) * radius - tickRadius
                });
                if (inner) {
                    tick.css('font-size', '120%');
                }
                tick.html(i === 0 ? '00' : i);
                hoursView.append(tick);
                tick.on(mousedownEvent, mousedown);
            }
        }
        for (i = 0; i < 60; i += 5) {
            tick = tickTpl.clone();
            radian = i / 30 * Math.PI;
            tick.css({
                left: dialRadius + Math.sin(radian) * outerRadius - tickRadius,
                top: dialRadius - Math.cos(radian) * outerRadius - tickRadius
            });
            tick.css('font-size', '120%');
            tick.html(leadingZero(i));
            minutesView.append(tick);
            tick.on(mousedownEvent, mousedown);
        }
        plate.on(mousedownEvent, function(e) {
            if ($(e.target).closest('.clockpicker-tick').length === 0) {
                mousedown(e, true);
            }
        });

        function mousedown(e, space) {
            var offset = plate.offset(),
                isTouch = /^touch/.test(e.type),
                x0 = offset.left + dialRadius,
                y0 = offset.top + dialRadius,
                dx = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
                dy = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0,
                z = Math.sqrt(dx * dx + dy * dy),
                moved = false;
            if (space && (z < outerRadius - tickRadius || z > outerRadius + tickRadius)) {
                return;
            }
            e.preventDefault();
            var movingTimer = setTimeout(function() {
                $body.addClass('clockpicker-moving');
            }, 200);
            if (svgSupported) {
                plate.append(self.canvas);
            }
            self.setHand(dx, dy, !space, true);
            $doc.off(mousemoveEvent).on(mousemoveEvent, function(e) {
                e.preventDefault();
                var isTouch = /^touch/.test(e.type),
                    x = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
                    y = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0;
                if (!moved && x === dx && y === dy) {
                    return;
                }
                moved = true;
                self.setHand(x, y, false, true);
            });
            $doc.off(mouseupEvent).on(mouseupEvent, function(e) {
                $doc.off(mouseupEvent);
                e.preventDefault();
                var isTouch = /^touch/.test(e.type),
                    x = (isTouch ? e.originalEvent.changedTouches[0] : e).pageX - x0,
                    y = (isTouch ? e.originalEvent.changedTouches[0] : e).pageY - y0;
                if ((space || moved) && x === dx && y === dy) {
                    self.setHand(x, y);
                }
                if (self.currentView === 'hours') {
                    self.toggleView('minutes', duration / 2);
                } else {
                    if (options.autoclose) {
                        self.minutesView.addClass('clockpicker-dial-out');
                        setTimeout(function() {
                            self.done();
                        }, duration / 2);
                    }
                }
                plate.prepend(canvas);
                clearTimeout(movingTimer);
                $body.removeClass('clockpicker-moving');
                $doc.off(mousemoveEvent);
            });
        }
        if (svgSupported) {
            var canvas = popover.find('.clockpicker-canvas'),
                svg = createSvgElement('svg');
            svg.setAttribute('class', 'clockpicker-svg');
            svg.setAttribute('width', diameter);
            svg.setAttribute('height', diameter);
            var g = createSvgElement('g');
            g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');
            var bearing = createSvgElement('circle');
            bearing.setAttribute('class', 'clockpicker-canvas-bearing');
            bearing.setAttribute('cx', 0);
            bearing.setAttribute('cy', 0);
            bearing.setAttribute('r', 2);
            var hand = createSvgElement('line');
            hand.setAttribute('x1', 0);
            hand.setAttribute('y1', 0);
            var bg = createSvgElement('circle');
            bg.setAttribute('class', 'clockpicker-canvas-bg');
            bg.setAttribute('r', tickRadius);
            var fg = createSvgElement('circle');
            fg.setAttribute('class', 'clockpicker-canvas-fg');
            fg.setAttribute('r', 3.5);
            g.appendChild(hand);
            g.appendChild(bg);
            g.appendChild(fg);
            g.appendChild(bearing);
            svg.appendChild(g);
            canvas.append(svg);
            this.hand = hand;
            this.bg = bg;
            this.fg = fg;
            this.bearing = bearing;
            this.g = g;
            this.canvas = canvas;
        }
        raiseCallback(this.options.init);
    }

    function raiseCallback(callbackFunction) {
        if (callbackFunction && typeof callbackFunction === "function") {
            callbackFunction();
        }
    }
    ClockPicker.DEFAULTS = {
        'default': '',
        fromnow: 0,
        placement: 'bottom',
        align: 'left',
        donetext: '完成',
        autoclose: false,
        twelvehour: false,
        vibrate: true
    };
    ClockPicker.prototype.toggle = function() {
        this[this.isShown ? 'hide' : 'show']();
    };
    ClockPicker.prototype.locate = function() {
        var element = this.element,
            popover = this.popover,
            offset = element.offset(),
            width = element.outerWidth(),
            height = element.outerHeight(),
            placement = this.options.placement,
            align = this.options.align,
            styles = {},
            self = this;
        popover.show();
        switch (placement) {
            case 'bottom':
                styles.top = offset.top + height;
                break;
            case 'right':
                styles.left = offset.left + width;
                break;
            case 'top':
                styles.top = offset.top - popover.outerHeight();
                break;
            case 'left':
                styles.left = offset.left - popover.outerWidth();
                break;
        }
        switch (align) {
            case 'left':
                styles.left = offset.left;
                break;
            case 'right':
                styles.left = offset.left + width - popover.outerWidth();
                break;
            case 'top':
                styles.top = offset.top;
                break;
            case 'bottom':
                styles.top = offset.top + height - popover.outerHeight();
                break;
        }
        popover.css(styles);
    };
    ClockPicker.prototype.show = function(e) {
        if (this.isShown) {
            return;
        }
        raiseCallback(this.options.beforeShow);
        var self = this;
        if (!this.isAppended) {
            $body = $(document.body).append(this.popover);
            $win.on('resize.clockpicker' + this.id, function() {
                if (self.isShown) {
                    self.locate();
                }
            });
            this.isAppended = true;
        }
        var value = ((this.input.prop('value') || this.options['default'] || '') + '').split(':');
        if (value[0] === 'now') {
            var now = new Date(+new Date() + this.options.fromnow);
            value = [now.getHours(), now.getMinutes()];
        }
        this.hours = +value[0] || 0;
        this.minutes = +value[1] || 0;
        this.spanHours.html(leadingZero(this.hours));
        this.spanMinutes.html(leadingZero(this.minutes));
        this.toggleView('hours');
        this.locate();
        this.isShown = true;
        $doc.on('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id, function(e) {
            var target = $(e.target);
            if (target.closest(self.popover).length === 0 && target.closest(self.addon).length === 0 && target.closest(self.input).length === 0) {
                self.hide();
            }
        });
        $doc.on('keyup.clockpicker.' + this.id, function(e) {
            if (e.keyCode === 27) {
                self.hide();
            }
        });
        raiseCallback(this.options.afterShow);
    };
    ClockPicker.prototype.hide = function() {
        raiseCallback(this.options.beforeHide);
        this.isShown = false;
        $doc.off('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id);
        $doc.off('keyup.clockpicker.' + this.id);
        this.popover.hide();
        raiseCallback(this.options.afterHide);
    };
    ClockPicker.prototype.toggleView = function(view, delay) {
        var raiseAfterHourSelect = false;
        if (view === 'minutes' && $(this.hoursView).css("visibility") === "visible") {
            raiseCallback(this.options.beforeHourSelect);
            raiseAfterHourSelect = true;
        }
        var isHours = view === 'hours',
            nextView = isHours ? this.hoursView : this.minutesView,
            hideView = isHours ? this.minutesView : this.hoursView;
        this.currentView = view;
        this.spanHours.toggleClass('text-primary', isHours);
        this.spanMinutes.toggleClass('text-primary', !isHours);
        hideView.addClass('clockpicker-dial-out');
        nextView.css('visibility', 'visible').removeClass('clockpicker-dial-out');
        this.resetClock(delay);
        clearTimeout(this.toggleViewTimer);
        this.toggleViewTimer = setTimeout(function() {
            hideView.css('visibility', 'hidden');
        }, duration);
        if (raiseAfterHourSelect) {
            raiseCallback(this.options.afterHourSelect);
        }
    };
    ClockPicker.prototype.resetClock = function(delay) {
        var view = this.currentView,
            value = this[view],
            isHours = view === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            radian = value * unit,
            radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
            x = Math.sin(radian) * radius,
            y = -Math.cos(radian) * radius,
            self = this;
        if (svgSupported && delay) {
            self.canvas.addClass('clockpicker-canvas-out');
            setTimeout(function() {
                self.canvas.removeClass('clockpicker-canvas-out');
                self.setHand(x, y);
            }, delay);
        } else {
            this.setHand(x, y);
        }
    };
    ClockPicker.prototype.setHand = function(x, y, roundBy5, dragging) {
        var radian = Math.atan2(x, -y),
            isHours = this.currentView === 'hours',
            unit = Math.PI / (isHours || roundBy5 ? 6 : 30),
            z = Math.sqrt(x * x + y * y),
            options = this.options,
            inner = isHours && z < (outerRadius + innerRadius) / 2,
            radius = inner ? innerRadius : outerRadius,
            value;
        if (options.twelvehour) {
            radius = outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (options.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            } else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        } else {
            if (isHours) {
                if (value === 12) {
                    value = 0;
                }
                value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            } else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (this[this.currentView] !== value) {
            if (vibrate && this.options.vibrate) {
                if (!this.vibrateTimer) {
                    navigator[vibrate](10);
                    this.vibrateTimer = setTimeout($.proxy(function() {
                        this.vibrateTimer = null;
                    }, this), 100);
                }
            }
        }
        this[this.currentView] = value;
        this[isHours ? 'spanHours' : 'spanMinutes'].html(leadingZero(value));
        if (!svgSupported) {
            this[isHours ? 'hoursView' : 'minutesView'].find('.clockpicker-tick').each(function() {
                var tick = $(this);
                tick.toggleClass('active', value === +tick.html());
            });
            return;
        }
        if (dragging || (!isHours && value % 5)) {
            this.g.insertBefore(this.hand, this.bearing);
            this.g.insertBefore(this.bg, this.fg);
            this.bg.setAttribute('class', 'clockpicker-canvas-bg clockpicker-canvas-bg-trans');
        } else {
            this.g.insertBefore(this.hand, this.bg);
            this.g.insertBefore(this.fg, this.bg);
            this.bg.setAttribute('class', 'clockpicker-canvas-bg');
        }
        var cx = Math.sin(radian) * radius,
            cy = -Math.cos(radian) * radius;
        this.hand.setAttribute('x2', cx);
        this.hand.setAttribute('y2', cy);
        this.bg.setAttribute('cx', cx);
        this.bg.setAttribute('cy', cy);
        this.fg.setAttribute('cx', cx);
        this.fg.setAttribute('cy', cy);
    };
    ClockPicker.prototype.done = function() {
        raiseCallback(this.options.beforeDone);
        this.hide();
        var last = this.input.prop('value'),
            value = leadingZero(this.hours) + ':' + leadingZero(this.minutes);
        if (this.options.twelvehour) {
            value = value + this.amOrPm;
        }
        this.input.prop('value', value);
        if (value !== last) {
            this.input.triggerHandler('change');
            if (!this.isInput) {
                this.element.trigger('change');
            }
        }
        if (this.options.autoclose) {
            this.input.trigger('blur');
        }
        raiseCallback(this.options.afterDone);
    };
    ClockPicker.prototype.remove = function() {
        this.element.removeData('clockpicker');
        this.input.off('focus.clockpicker click.clockpicker');
        this.addon.off('click.clockpicker');
        if (this.isShown) {
            this.hide();
        }
        if (this.isAppended) {
            $win.off('resize.clockpicker' + this.id);
            this.popover.remove();
        }
    };
    $.fn.clockpicker = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data('clockpicker');
            if (!data) {
                var options = $.extend({}, ClockPicker.DEFAULTS, $this.data(), typeof option == 'object' && option);
                $this.data('clockpicker', new ClockPicker($this, options));
            } else {
                if (typeof data[option] === 'function') {
                    data[option].apply(data, args);
                }
            }
        });
    };
}());
jQuery(document).ready(function($) {
    $(".btn_tarifs").click(function() {
        var id = $(this).attr("id");
        $("#type_voiture option[value='" + id + "']").prop('selected', true);
    });
    $('.clockpicker').clockpicker({
        placement: 'bottom',
        align: 'right',
        donetext: 'Valider'
    });
    jQuery(".single-slide-item > .container > .row > .col-lg-5 > .wpcf7 > .wpcf7-form ").validate({
        rules: {
            nom: {
                required: true
            },
            prenom: {
                required: true
            },
            telephone: {
                required: true,
                number: true
            },
            startDate: {
                required: true
            },
            endDate: {
                required: true
            },
            email: {
                required: true
            }
        }
    });
    $("#envoyer").click(function(event) {
        event.preventDefault();
        if ($(".single-slide-item > .container > .row > .col-lg-5 > .wpcf7 > .wpcf7-form").valid() == true)
            $(".single-slide-item > .container > .row > .col-lg-5 > .wpcf7 > .wpcf7-form").submit();
    });
    jQuery(".single  > .wpcf7 > .wpcf7-form ").validate({
        rules: {
            nom: {
                required: true
            },
            prenom: {
                required: true
            },
            telephone: {
                required: true,
                number: true
            },
            startDate: {
                required: true
            },
            endDate: {
                required: true
            },
            email: {
                required: true
            }
        }
    });
    $("#envoie_pop").click(function(event) {
        event.preventDefault();
        if ($(" .wpcf7 > .wpcf7-form").valid() == true) {
            $(" .single  > .wpcf7 > .wpcf7-form").submit();
        }
    });
    $(".refresh").css("display", "none");
    $(document).on('submit', '.wpcf7-form', function() {
        $(".refresh").css("display", "inline-block");
        jQuery.ajax({
            complete: function() {
                $(".refresh").css("display", "none");
                setTimeout(function() {
                    $('#myModal').modal('hide');
                }, 2000);
            }
        });
    });
    $('body').on('click', '.loadmore', function() {
        $(this).css('display', 'none');
        type = this.id;
        page = parseInt($('.paged_' + type + ':last').val()) + 1;
        max_pages = parseInt($('.max_pages_' + type + ':last').val());
        var data = {
            'action': 'load_posts_by_ajax',
            'page': page,
            'type': type,
            'max_pages': max_pages
        };
        jQuery.ajax({
            url: Myajax.ajaxurl,
            type: "post",
            data: data,
            beforeSend: function() {
                $("#wait_" + type).css("display", "block");
            },
            success: function(response) {
                $('.' + type).append(response);
                if (max_pages > 4) {
                    $("#" + type).show();
                    page++;
                }
            },
            complete: function() {
                $("#wait_" + type).css("display", "none");
            },
        });
    });
    (function($) {
        "use strict";
        $(window).on('load', function() {
            var pre_loader = $('.preloader')
            pre_loader.fadeOut('slow', function() {
                $(this).remove();
            });
        });
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 117) {
                $('.header-main').addClass('fixed-header');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.header-main').removeClass('fixed-header');
                $('.scroll-to-top').fadeOut(300);
            }
        });
        if ($('.header-main li.dropdown ul').length) {
            $('.header-main li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
            $('.header-main li.dropdown .dropdown-btn').on('click', function() {
                $(this).prev('ul').slideToggle(500);
            });
            $('.navigation li.dropdown > a').on('click', function(e) {
                e.preventDefault();
            });
        }
        if ($('.accordion-block').length) {
            $('.accordion-block .accordion-btn').on('click', function() {
                if ($(this).hasClass('active') !== true) {
                    $('.accordion-block .accordion-btn').removeClass('active');
                }
                if ($(this).next('.accordion-description').is(':visible')) {
                    $(this).removeClass('active');
                    $(this).next('.accordion-description').slideUp(500);
                } else {
                    $(this).addClass('active');
                    $('.accordion-block .accordion-description').slideUp(500);
                    $(this).next('.accordion-description').slideDown(500);
                }
            });
        }
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);
            });
        }
        $('.gallery-slider-area').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
        $('.four-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 2000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1070: {
                    items: 4
                }
            }
        });
        $('.two-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                }
            }
        });
        $('.three-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
        $('.testimonial-slider-area').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
        $('.team-slider-area').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 4
                }
            }
        });
        if ($('.toggle-search').length) {
            $('.toggle-search').on('click', function() {
                $('.header-search-area').slideToggle(300);
            });
        }
        if ($('.custom-select-box').length) {
            $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
        }
        if ($('.lightbox-image').length) {
            $('.lightbox-image').fancybox({
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                }
            });
        }
        if ($("#contact-form").length) {
            $("#contact-form").validate({
                submitHandler: function(form) {
                    var form_btn = $(form).find('button[type="submit"]');
                    var form_result_div = '#form-result';
                    $(form_result_div).remove();
                    form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                    var form_btn_old_msg = form_btn.html();
                    form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                    $(form).ajaxSubmit({
                        dataType: 'json',
                        success: function(data) {
                            if (data.status == 'true') {
                                $(form).find('.form-control').val('');
                            }
                            form_btn.prop('disabled', false).html(form_btn_old_msg);
                            $(form_result_div).html(data.message).fadeIn('slow');
                            setTimeout(function() {
                                $(form_result_div).fadeOut('slow')
                            }, 6000);
                        }
                    });
                }
            });
        }
        $(window).on('scroll', function() {
            if ($('.fun-fact-counter').length) {
                $('.fun-fact-counter .column.animated').each(function() {
                    var $t = $(this),
                        n = $t.find(".count-text").attr("data-stop"),
                        r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".count-text").text()
                        }).animate({
                            countNum: n
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function() {
                                $t.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $t.find(".count-text").text(this.countNum);
                            }
                        });
                    }
                });
            }
        });
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 10);
            });
        }
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();
        }
    })(window.jQuery);
    $('.wpcf7 .wpcf7-form p label span .wpcf7-select').mouseleave(function() {
        var sel = $(this).val();
        console.log(sel);
        if (sel == "Autre") {
            $('.autres-avis').css({
                opacity: '1',
                height: 'auto',
                marginBottom: '0px'
            });
            $(".wpcf7 .wpcf7-form p input[type=submit]").attr("disabled", "disabled").css({
                background: '#a94442',
                border: '1px solid #a94442'
            });
            $(".message-avis").css({
                display: "block"
            });
        } else {
            $('.autres-avis').css({
                opacity: '0',
                height: '0',
                marginBottom: '-50px'
            });
            $(".message-avis").css({
                display: "none"
            });
            $(".wpcf7 .wpcf7-form p input[type=submit]").removeAttr("disabled").css({
                background: '#ff7353',
                border: '1px solid #ff7353'
            });
        }
    });
    $(".autres-avis").keyup(function() {
        var length = $(this).val().length;
        if (length > 5) {
            $(".message-avis").css({
                display: "none"
            });
            $(".wpcf7 .wpcf7-form p input[type=submit]").removeAttr("disabled").css({
                background: '#ff7353',
                border: '1px solid #ff7353'
            });
        } else {
            $(".wpcf7 .wpcf7-form p input[type=submit]").attr("disabled", "disabled").css({
                background: '#a94442',
                border: '1px solid #a94442'
            });
            $(".message-avis").css({
                display: "block"
            });
        }
    });
});
$('#startDate').on('change', function() {
    start = $("#startDate").val();
    end = $("#endDate").val();
    if (start >= end) {
        $("#endDate").val('');
    }
});
! function(t) {
    var e = {};

    function n(a) {
        if (e[a]) return e[a].exports;
        var i = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(a, i, function(e) {
                return t[e]
            }.bind(null, i));
        return a
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 2)
}([function(t, e) {
    function n(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
            return typeof t
        } : t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(e)
    }
    t.exports = n
}, function(t, e) {
    ! function() {
        t.exports = this.jQuery
    }()
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(0),
        i = n.n(a),
        o = (n(3), n(1)),
        r = n.n(o);
    Array.prototype.timedaysIncludes || Object.defineProperty(Array.prototype, "timedaysIncludes", {
            value: function(t) {
                return !!this.includes(parseInt(t)) || !!this.includes(t.toString())
            }
        }),
        function(t, e, n, a) {
            function o(e, n) {
                this.$qlwapp = t(e), this.init(this)
            }

            function r() {
                t("div#qlwapp").qlwapp()
            }
            t.fn.simulateClick = function() {
                return this.each((function() {
                    if ("createEvent" in n) {
                        var t = this.ownerDocument,
                            e = t.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, t.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.dispatchEvent(e)
                    } else this.click()
                }))
            }, o.prototype = {
                timeDateToString: function(t) {
                    var e = "" + t.getMinutes();
                    return 1 === e.length && (e = "0" + e), t.getHours() + ":" + e
                },
                timeStringToInt: function(t, e) {
                    return parseInt(t + e)
                },
                isMobile: function(t) {
                    var n = e.matchMedia("(pointer:coarse)");
                    return n && n.matches
                },
                init: function(n) {
                    var a = this.$qlwapp;
                    if (a.on("qlwapp.init", (function(t) {
                            n.mobiledevice = n.isMobile()
                        })), a.on("qlwapp.time", (function(e) {
                            var a = t(e.target),
                                i = a.data("timedays") || [],
                                o = parseInt(a.data("timezone")) || 0,
                                r = new Date((new Date).getTime() + 60 * o * 1e3).getUTCDay().toString();
                            if (i && i.length && !i.includes(r)) {
                                a.addClass("qlwapp-readonly"), a.find(".qlwapp-days").show(), a.find(".qlwapp-time").hide();
                                var p = function(t, e) {
                                    for (var n = t; n <= 6; n++)
                                        if (e.timedaysIncludes(n)) return n;
                                    for (n = 0; n <= t; n++)
                                        if (e.timedaysIncludes(n)) return n
                                }(r, i);
                                return a.find(".day" + p).addClass("qlwapp-available-day"), !0
                            }
                            i && i.length && i.includes(r) && (a.find(".qlwapp-days").hide(), a.find(".qlwapp-time").show());
                            var l = a.data("timefrom") || !1,
                                s = a.data("timeto") || !1;
                            if (!s || !l || l === s) return !0;
                            var d, u, c = new Date,
                                f = -c.getTimezoneOffset() - o,
                                g = new Date,
                                w = new Date;
                            if (d = n.timeStringToInt(l[0], l[1]), u = n.timeStringToInt(l[3], l[4]), w.setHours(d), w.setMinutes(u + f), d = n.timeStringToInt(s[0], s[1]), u = n.timeStringToInt(s[3], s[4]), g.setHours(d), g.setMinutes(u + f), c.getTime() >= w.getTime() && c.getTime() <= g.getTime() || (a.addClass("qlwapp-readonly"), a.find(".qlwapp-days").hide(), a.find(".qlwapp-time").show()), !o) return !0;
                            a.find(".from").text(n.timeDateToString(w)), a.find(".to").text(n.timeDateToString(g))
                        })), a.on("qlwapp.pro", (function(e) {
                            a.find(".qlwapp-toggle").trigger("qlwapp.time"), a.find(".qlwapp-account").each((function(e, n) {
                                t(n).trigger("qlwapp.time")
                            }))
                        })), a.on("qlwapp.resize", (function(e) {
                            t(this).hasClass("qlwapp-show") && t(this).trigger("qlwapp.toggle")
                        })), a.on("qlwapp.init", (function(t) {
                            n.mobiledevice ? a.addClass("mobile").removeClass("desktop") : a.addClass("desktop").removeClass("mobile"), a.addClass("qlwapp-js-ready")
                        })), a.on("qlwapp.init", (function(t) {
                            a.hasClass("qlwapp-premium") && a.trigger("qlwapp.pro")
                        })), a.addClass("qlwapp-js-ready").trigger("qlwapp.init"), a.on("qlwapp.height", (function(a) {
                            var i = t(a.delegateTarget),
                                o = i.find(".qlwapp-body").find(".qlwapp-carousel"),
                                r = i.find(".qlwapp-header"),
                                p = i.find(".qlwapp-footer"),
                                l = t(e).innerHeight() - r.outerHeight() - p.outerHeight();
                            n.mobiledevice || (l = .7 * t(e).innerHeight() - r.outerHeight() - p.outerHeight()), o.css({
                                "max-height": l + "px"
                            })
                        })), a.on("qlwapp.toggle", (function(e) {
                            var n = t(e.delegateTarget),
                                a = n.find(".qlwapp-box");
                            n.addClass("qlwapp-transition"), a.removeClass("response texting"), setTimeout((function() {
                                n.toggleClass("qlwapp-show").trigger("qlwapp.height")
                            }), 10), setTimeout((function() {
                                n.toggleClass("qlwapp-transition")
                            }), 300)
                        })), a.on("click", "[data-action=box], [data-action=close]", (function(e) {
                            e.preventDefault(), t(e.delegateTarget).trigger("qlwapp.toggle")
                        })), a.on("click", "[data-action=open]", (function(e) {
                            var a = "https://api.whatsapp.com/send";
                            n.mobiledevice || (a = "https://web.whatsapp.com/send");
                            var i = t(this),
                                o = i.data("message") || "",
                                r = i.data("phone") || "";
                            t(this).attr("href", a + "?phone=" + r + "&text=" + o)
                        })), a.on("click", "[data-action=previous]", (function(e) {
                            e.preventDefault();
                            var n = t(e.delegateTarget).find(".qlwapp-box");
                            n.addClass("closing"), setTimeout((function() {
                                n.removeClass("response").removeClass("closing"), n.removeClass("texting")
                            }), 300)
                        })), a.on("click", "[data-action=chat]", (function(e) {
                            e.preventDefault();
                            var n = t(this),
                                a = t(e.delegateTarget),
                                i = a.find(".qlwapp-box"),
                                o = n.find(".qlwapp-avatar img").attr("src"),
                                r = n.find(".qlwapp-name").text(),
                                p = n.find(".qlwapp-label").text(),
                                l = n.find(".qlwapp-time").text(),
                                s = n.data("message"),
                                d = n.data("phone");
                            i.addClass("response").addClass("opening"), a.trigger("qlwapp.height"), setTimeout((function() {
                                i.removeClass("opening")
                            }), 300);
                            var u = i.find(".qlwapp-reply"),
                                c = i.find(".qlwapp-header"),
                                f = c.find(".qlwapp-avatar img"),
                                g = c.find(".qlwapp-number"),
                                w = c.find(".qlwapp-name"),
                                m = c.find(".qlwapp-label"),
                                h = i.find(".qlwapp-message"),
                                q = l ? l + " - " + p : p;
                            u.data("phone", d), f.attr("src", o), f.attr("alt", r), g.html(d), w.html(r), m.html(q), h.html(s)
                        })), a.on("click", "textarea", (function(t) {
                            a.off("qlwapp.resize")
                        })), a.on("keypress", "textarea", (function(t) {
                            13 == t.keyCode && setTimeout((function() {
                                a.find(".qlwapp-reply").simulateClick("click")
                            }), 100)
                        })), a.on("keyup", "[data-action=response]", (function(e) {
                            e.preventDefault();
                            var n = t(this).find("textarea"),
                                a = t(this).find("pre"),
                                i = t(this).find(".qlwapp-reply"),
                                o = t(e.delegateTarget).find(".qlwapp-box"),
                                r = o.find(".qlwapp-buttons");
                            a.html(n.val()), setTimeout((function() {
                                o.addClass("texting").css({
                                    "padding-bottom": a.outerHeight()
                                }), r.addClass("active");
                                var t = n.val();
                                i.data("message", t), "" == t && (o.removeClass("texting"), r.removeClass("active"))
                            }), 300)
                        })), a.hasClass("auto-load") && t.cookie && !t.cookie("qlwapp-auto-load")) {
                        var i = a.data("autoloadelay");
                        setTimeout((function() {
                            a.trigger("qlwapp.toggle")
                        }), i), t.cookie("qlwapp-auto-load", "auto open cookie", {
                            expires: 1
                        })
                    }
                }
            }, t.fn.qlwapp = function(e) {
                var n, a = arguments;
                return void 0 === e || "object" === i()(e) ? this.each((function() {
                    t.data(this, "plugin_qlwapp") || t.data(this, "plugin_qlwapp", new o(this, e))
                })) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (this.each((function() {
                    var i = t.data(this, "plugin_qlwapp");
                    i instanceof o && "function" == typeof i[e] && (n = i[e].apply(i, Array.prototype.slice.call(a, 1))), "destroy" === e && t.data(this, "plugin_qlwapp", null)
                })), void 0 !== n ? n : this) : void 0
            }, r(), t(e).on("load", (function() {
                r()
            })), t(e).on("click", (function(e) {
                t(e.target).closest("#qlwapp.qlwapp-show").length || t("div#qlwapp.qlwapp-show").trigger("qlwapp.toggle")
            })), t(e).on("resize", (function(e) {
                t("div#qlwapp").trigger("qlwapp.resize"), t("div#qlwapp").trigger("qlwapp.init")
            }))
        }(r.a, window, document)
}, function(t, e) {}]);
var PUM, PUM_Accessibility, PUM_Analytics, pm_cookie, pm_cookie_json, pm_remove_cookie;
! function(i) {
    "use strict";
    void 0 === i.fn.on && (i.fn.on = function(e, o, t) {
        return this.delegate(o, e, t)
    }), void 0 === i.fn.off && (i.fn.off = function(e, o, t) {
        return this.undelegate(o, e, t)
    }), void 0 === i.fn.bindFirst && (i.fn.bindFirst = function(e, o) {
        var t = i(this);
        t.unbind(e, o), t.bind(e, o), (t = (o = i._data(t[0]).events)[e]).unshift(t.pop()), o[e] = t
    }), void 0 === i.fn.outerHtml && (i.fn.outerHtml = function() {
        var e = i(this).clone();
        return i("<div/>").append(e).html()
    }), void 0 === i.fn.isInViewport && (i.fn.isInViewport = function() {
        var e = i(this).offset().top,
            o = e + i(this).outerHeight(),
            t = i(window).scrollTop(),
            n = t + i(window).height();
        return t < o && e < n
    }), void 0 === Date.now && (Date.now = function() {
        return (new Date).getTime()
    })
}(jQuery),
function(a, r, s) {
    "use strict";

    function n(e, o) {
        function t(e, o, t) {
            return o ? e[o.slice(0, t ? -1 : o.length)] : e
        }
        return o.split(".").reduce(function(e, o) {
            return o ? o.split("[").reduce(t, e) : e
        }, e)
    }
    window.pum_vars = window.pum_vars || {
        default_theme: "0",
        home_url: "/",
        version: 1.7,
        pm_dir_url: "",
        ajaxurl: "",
        restapi: !1,
        analytics_api: !1,
        rest_nonce: null,
        debug_mode: !1,
        disable_tracking: !0,
        message_position: "top",
        core_sub_forms_enabled: !0,
        popups: {}
    }, window.pum_popups = window.pum_popups || {}, window.pum_vars.popups = window.pum_popups, PUM = {
        get: new function() {
            function e(e, o, t) {
                "boolean" == typeof o && (t = o, o = !1);
                var n = o ? o.selector + " " + e : e;
                return s !== i[n] && !t || (i[n] = o ? o.find(e) : jQuery(e)), i[n]
            }
            var i = {};
            return e.elementCache = i, e
        },
        getPopup: function(e) {
            var o;
            return o = e, (e = isNaN(o) || parseInt(Number(o)) !== parseInt(o) || isNaN(parseInt(o, 10)) ? "current" === e ? PUM.get(".pum-overlay.pum-active:eq(0)", !0) : "open" === e ? PUM.get(".pum-overlay.pum-active", !0) : "closed" === e ? PUM.get(".pum-overlay:not(.pum-active)", !0) : e instanceof jQuery ? e : a(e) : PUM.get("#pum-" + e)).hasClass("pum-overlay") ? e : e.hasClass("popmake") || e.parents(".pum-overlay").length ? e.parents(".pum-overlay") : a()
        },
        open: function(e, o) {
            PUM.getPopup(e).popmake("open", o)
        },
        close: function(e, o) {
            PUM.getPopup(e).popmake("close", o)
        },
        preventOpen: function(e) {
            PUM.getPopup(e).addClass("preventOpen")
        },
        getSettings: function(e) {
            return PUM.getPopup(e).popmake("getSettings")
        },
        getSetting: function(e, o, t) {
            o = n(PUM.getSettings(e), o);
            return void 0 !== o ? o : t !== s ? t : null
        },
        checkConditions: function(e) {
            return PUM.getPopup(e).popmake("checkConditions")
        },
        getCookie: function(e) {
            return a.pm_cookie(e)
        },
        getJSONCookie: function(e) {
            return a.pm_cookie_json(e)
        },
        setCookie: function(e, o) {
            PUM.getPopup(e).popmake("setCookie", jQuery.extend({
                name: "pum-" + PUM.getSetting(e, "id"),
                expires: "+30 days"
            }, o))
        },
        clearCookie: function(e, o) {
            a.pm_remove_cookie(e), "function" == typeof o && o()
        },
        clearCookies: function(e, o) {
            var t, n = PUM.getPopup(e).popmake("getSettings").cookies;
            if (n !== s && n.length)
                for (t = 0; n.length > t; t += 1) a.pm_remove_cookie(n[t].settings.name);
            "function" == typeof o && o()
        },
        getClickTriggerSelector: function(e, o) {
            var t = PUM.getPopup(e),
                e = PUM.getSettings(e),
                e = [".popmake-" + e.id, ".popmake-" + decodeURIComponent(e.slug), 'a[href$="#popmake-' + e.id + '"]'];
            return o.extra_selectors && "" !== o.extra_selectors && e.push(o.extra_selectors), (e = pum.hooks.applyFilters("pum.trigger.click_open.selectors", e, o, t)).join(", ")
        },
        disableClickTriggers: function(e, o) {
            if (e !== s)
                if (o !== s) {
                    var t = PUM.getClickTriggerSelector(e, o);
                    a(t).removeClass("pum-trigger"), a(r).off("click.pumTrigger click.popmakeOpen", t)
                } else {
                    var n = PUM.getSetting(e, "triggers", []);
                    if (n.length)
                        for (var i = 0; n.length > i; i++) - 1 !== pum.hooks.applyFilters("pum.disableClickTriggers.clickTriggerTypes", ["click_open"]).indexOf(n[i].type) && (t = PUM.getClickTriggerSelector(e, n[i].settings), a(t).removeClass("pum-trigger"), a(r).off("click.pumTrigger click.popmakeOpen", t))
                }
        },
        actions: {
            stopIframeVideosPlaying: function() {
                var e = PUM.getPopup(this),
                    o = e.popmake("getContainer");
                e.hasClass("pum-has-videos") || (o.find("iframe").filter('[src*="youtube"],[src*="vimeo"]').each(function() {
                    var e = a(this),
                        o = e.attr("src"),
                        t = o.replace("autoplay=1", "1=1");
                    t !== o && (o = t), e.prop("src", o)
                }), o.find("video").each(function() {
                    this.pause()
                }))
            }
        }
    }, a.fn.popmake = function(e) {
        return a.fn.popmake.methods[e] ? (a(r).trigger("pumMethodCall", arguments), a.fn.popmake.methods[e].apply(this, Array.prototype.slice.call(arguments, 1))) : "object" != typeof e && e ? void(window.console && console.warn("Method " + e + " does not exist on $.fn.popmake")) : a.fn.popmake.methods.init.apply(this, arguments)
    }, a.fn.popmake.methods = {
        init: function() {
            return this.each(function() {
                var e, o = PUM.getPopup(this),
                    t = o.popmake("getSettings");
                return t.theme_id <= 0 && (t.theme_id = pum_vars.default_theme), t.disable_reposition !== s && t.disable_reposition || a(window).on("resize", function() {
                    (o.hasClass("pum-active") || o.find(".popmake.active").length) && a.fn.popmake.utilities.throttle(setTimeout(function() {
                        o.popmake("reposition")
                    }, 25), 500, !1)
                }), o.find(".pum-container").data("popmake", t), o.data("popmake", t).trigger("pumInit"), t.open_sound && "none" !== t.open_sound && ((e = "custom" !== t.open_sound ? new Audio(pum_vars.pm_dir_url + "/assets/sounds/" + t.open_sound) : new Audio(t.custom_sound)).addEventListener("canplaythrough", function() {
                    o.data("popAudio", e)
                }), e.addEventListener("error", function() {
                    console.warn("Error occurred when trying to load Popup opening sound.")
                }), e.load()), this
            })
        },
        getOverlay: function() {
            return PUM.getPopup(this)
        },
        getContainer: function() {
            return PUM.getPopup(this).find(".pum-container")
        },
        getTitle: function() {
            return PUM.getPopup(this).find(".pum-title") || null
        },
        getContent: function() {
            return PUM.getPopup(this).find(".pum-content") || null
        },
        getClose: function() {
            return PUM.getPopup(this).find(".pum-content + .pum-close") || null
        },
        getSettings: function() {
            var e = PUM.getPopup(this);
            return a.extend(!0, {}, a.fn.popmake.defaults, e.data("popmake") || {}, "object" == typeof pum_popups && void 0 !== pum_popups[e.attr("id")] ? pum_popups[e.attr("id")] : {})
        },
        state: function(e) {
            var o = PUM.getPopup(this);
            if (s !== e) switch (e) {
                case "isOpen":
                    return o.hasClass("pum-open") || o.popmake("getContainer").hasClass("active");
                case "isClosed":
                    return !o.hasClass("pum-open") && !o.popmake("getContainer").hasClass("active")
            }
        },
        open: function(e) {
            var o = PUM.getPopup(this),
                t = o.popmake("getContainer"),
                n = o.popmake("getClose"),
                i = o.popmake("getSettings"),
                r = a("html");
            return o.trigger("pumBeforeOpen"), o.hasClass("preventOpen") || t.hasClass("preventOpen") ? (console.log("prevented"), o.removeClass("preventOpen").removeClass("pum-active").trigger("pumOpenPrevented")) : (i.stackable || o.popmake("close_all"), o.addClass("pum-active"), 0 < i.close_button_delay && n.fadeOut(0), r.addClass("pum-open"), i.overlay_disabled ? r.addClass("pum-open-overlay-disabled") : r.addClass("pum-open-overlay"), i.position_fixed ? r.addClass("pum-open-fixed") : r.addClass("pum-open-scrollable"), o.popmake("setup_close").popmake("reposition").popmake("animate", i.animation_type, function() {
                0 < i.close_button_delay && setTimeout(function() {
                    n.fadeIn()
                }, i.close_button_delay), o.trigger("pumAfterOpen"), a(window).trigger("resize"), a.fn.popmake.last_open_popup = o, e !== s && e()
            }), void 0 !== o.data("popAudio") && o.data("popAudio").play().catch(function(e) {
                console.warn("Sound was not able to play when popup opened. Reason: " + e)
            })), this
        },
        setup_close: function() {
            var t = PUM.getPopup(this),
                e = t.popmake("getClose"),
                n = t.popmake("getSettings");
            return (e = e.add(a(".popmake-close, .pum-close", t).not(e))).off("click.pum").on("click.pum", function(e) {
                var o = a(this);
                o.hasClass("pum-do-default") || o.data("do-default") !== s && o.data("do-default") || e.preventDefault(), a.fn.popmake.last_close_trigger = "Close Button", t.popmake("close")
            }), (n.close_on_esc_press || n.close_on_f4_press) && a(window).off("keyup.popmake").on("keyup.popmake", function(e) {
                27 === e.keyCode && n.close_on_esc_press && (a.fn.popmake.last_close_trigger = "ESC Key", t.popmake("close")), 115 === e.keyCode && n.close_on_f4_press && (a.fn.popmake.last_close_trigger = "F4 Key", t.popmake("close"))
            }), n.close_on_overlay_click && (t.on("pumAfterOpen", function() {
                a(r).on("click.pumCloseOverlay", function(e) {
                    a(e.target).closest(".pum-container").length || (a.fn.popmake.last_close_trigger = "Overlay Click", t.popmake("close"))
                })
            }), t.on("pumAfterClose", function() {
                a(r).off("click.pumCloseOverlay")
            })), n.close_on_form_submission && PUM.hooks.addAction("pum.integration.form.success", function(e, o) {
                o.popup && o.popup[0] === t[0] && setTimeout(function() {
                    a.fn.popmake.last_close_trigger = "Form Submission", t.popmake("close")
                }, n.close_on_form_submission_delay || 0)
            }), t.trigger("pumSetupClose"), this
        },
        close: function(n) {
            return this.each(function() {
                var e = PUM.getPopup(this),
                    o = e.popmake("getContainer"),
                    t = (t = e.popmake("getClose")).add(a(".popmake-close, .pum-close", e).not(t));
                return e.trigger("pumBeforeClose"), e.hasClass("preventClose") || o.hasClass("preventClose") ? e.removeClass("preventClose").trigger("pumClosePrevented") : o.fadeOut("fast", function() {
                    e.is(":visible") && e.fadeOut("fast"), a(window).off("keyup.popmake"), e.off("click.popmake"), t.off("click.popmake"), 1 === a(".pum-active").length && a("html").removeClass("pum-open").removeClass("pum-open-scrollable").removeClass("pum-open-overlay").removeClass("pum-open-overlay-disabled").removeClass("pum-open-fixed"), e.removeClass("pum-active").trigger("pumAfterClose"), n !== s && n()
                }), this
            })
        },
        close_all: function() {
            return a(".pum-active").popmake("close"), this
        },
        reposition: function(e) {
            var o = PUM.getPopup(this).trigger("pumBeforeReposition"),
                t = o.popmake("getContainer"),
                n = o.popmake("getSettings"),
                i = n.location,
                r = {
                    my: "",
                    at: "",
                    of: window,
                    collision: "none",
                    using: "function" == typeof e ? e : a.fn.popmake.callbacks.reposition_using
                },
                e = {
                    overlay: null,
                    container: null
                },
                s = null;
            try {
                s = a(a.fn.popmake.last_open_trigger)
            } catch (e) {
                s = a()
            }
            return n.position_from_trigger && s.length ? (r.of = s, 0 <= i.indexOf("left") && (r.my += " right", r.at += " left" + (0 !== n.position_left ? "-" + n.position_left : "")), 0 <= i.indexOf("right") && (r.my += " left", r.at += " right" + (0 !== n.position_right ? "+" + n.position_right : "")), 0 <= i.indexOf("center") && (r.my = "center" === i ? "center" : r.my + " center", r.at = "center" === i ? "center" : r.at + " center"), 0 <= i.indexOf("top") && (r.my += " bottom", r.at += " top" + (0 !== n.position_top ? "-" + n.position_top : "")), 0 <= i.indexOf("bottom") && (r.my += " top", r.at += " bottom" + (0 !== n.position_bottom ? "+" + n.position_bottom : ""))) : (0 <= i.indexOf("left") && (r.my += " left" + (0 !== n.position_left ? "+" + n.position_left : ""), r.at += " left"), 0 <= i.indexOf("right") && (r.my += " right" + (0 !== n.position_right ? "-" + n.position_right : ""), r.at += " right"), 0 <= i.indexOf("center") && (r.my = "center" === i ? "center" : r.my + " center", r.at = "center" === i ? "center" : r.at + " center"), 0 <= i.indexOf("top") && (r.my += " top" + (0 !== n.position_top ? "+" + (a("body").hasClass("admin-bar") ? parseInt(n.position_top, 10) + 32 : n.position_top) : ""), r.at += " top"), 0 <= i.indexOf("bottom") && (r.my += " bottom" + (0 !== n.position_bottom ? "-" + n.position_bottom : ""), r.at += " bottom")), r.my = a.trim(r.my), r.at = a.trim(r.at), o.is(":hidden") && (e.overlay = o.css("opacity"), o.css({
                opacity: 0
            }).show(0)), t.is(":hidden") && (e.container = t.css("opacity"), t.css({
                opacity: 0
            }).show(0)), n.position_fixed && t.addClass("fixed"), "custom" === n.size ? t.css({
                width: n.custom_width,
                height: n.custom_height_auto ? "auto" : n.custom_height
            }) : "auto" !== n.size && t.addClass("responsive").css({
                minWidth: "" !== n.responsive_min_width ? n.responsive_min_width : "auto",
                maxWidth: "" !== n.responsive_max_width ? n.responsive_max_width : "auto"
            }), o.trigger("pumAfterReposition"), t.addClass("custom-position").position(r).trigger("popmakeAfterReposition"), "center" === i && t[0].offsetTop < 0 && t.css({
                top: a("body").hasClass("admin-bar") ? 42 : 10
            }), e.overlay && o.css({
                opacity: e.overlay
            }).hide(0), e.container && t.css({
                opacity: e.container
            }).hide(0), this
        },
        animation_origin: function(e) {
            var o = PUM.getPopup(this).popmake("getContainer"),
                t = {
                    my: "",
                    at: ""
                };
            switch (e) {
                case "top":
                    t = {
                        my: "left+" + o.offset().left + " bottom-100",
                        at: "left top"
                    };
                    break;
                case "bottom":
                    t = {
                        my: "left+" + o.offset().left + " top+100",
                        at: "left bottom"
                    };
                    break;
                case "left":
                    t = {
                        my: "right top+" + o.offset().top,
                        at: "left top"
                    };
                    break;
                case "right":
                    t = {
                        my: "left top+" + o.offset().top,
                        at: "right top"
                    };
                    break;
                default:
                    0 <= e.indexOf("left") && (t = {
                        my: t.my + " right",
                        at: t.at + " left"
                    }), 0 <= e.indexOf("right") && (t = {
                        my: t.my + " left",
                        at: t.at + " right"
                    }), 0 <= e.indexOf("center") && (t = {
                        my: t.my + " center",
                        at: t.at + " center"
                    }), 0 <= e.indexOf("top") && (t = {
                        my: t.my + " bottom-100",
                        at: t.at + " top"
                    }), (t = 0 <= e.indexOf("bottom") ? {
                        my: t.my + " top+100",
                        at: t.at + " bottom"
                    } : t).my = a.trim(t.my), t.at = a.trim(t.at)
            }
            return t.of = window, t.collision = "none", t
        }
    }
}(jQuery, document),
function(e) {
    "use strict";
    e.fn.popmake.version = 1.8, e.fn.popmake.last_open_popup = null, window.ajaxurl = window.pum_vars.ajaxurl, window.PUM.init = function() {
        console.log("init popups ✔"), e(".pum").popmake(), e(void 0).trigger("pumInitialized"), "object" == typeof pum_vars.form_success && (pum_vars.form_success = e.extend({
            popup_id: null,
            settings: {}
        }), PUM.forms.success(pum_vars.form_success.popup_id, pum_vars.form_success.settings)), PUM.integrations.init()
    }, e(function() {
        var e = PUM.hooks.applyFilters("pum.initHandler", PUM.init),
            o = PUM.hooks.applyFilters("pum.initPromises", []);
        Promise.all(o).then(e)
    }), e(".pum").on("pumInit", function() {
        var e = PUM.getPopup(this),
            o = PUM.getSetting(e, "id"),
            e = e.find("form");
        e.length && e.append('<input type="hidden" name="pum_form_popup_id" value="' + o + '" />')
    }).on("pumAfterClose", window.PUM.actions.stopIframeVideosPlaying)
}(jQuery),
function(i, t) {
    "use strict";
    var n, r, s, a = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
        e = ".pum:not(.pum-accessibility-disabled)";
    PUM_Accessibility = {
        forceFocus: function(e) {
            s && s.length && !s[0].contains(e.target) && (e.stopPropagation(), PUM_Accessibility.setFocusToFirstItem())
        },
        trapTabKey: function(e) {
            var o, t, n;
            9 === e.keyCode && (o = s.find(".pum-container *").filter(a).filter(":visible"), n = i(":focus"), t = o.length, n = o.index(n), e.shiftKey ? 0 === n && (o.get(t - 1).focus(), e.preventDefault()) : n === t - 1 && (o.get(0).focus(), e.preventDefault()))
        },
        setFocusToFirstItem: function() {
            s.find(".pum-container *").filter(a).filter(":visible").first().focus()
        },
        initiateFocusLock: function() {
            var e = PUM.getPopup(this),
                o = i(":focus");
            e.has(o).length || (r = o), s = e.on("keydown.pum_accessibility", PUM_Accessibility.trapTabKey).attr("aria-hidden", "false"), (n = i("body > *").filter(":visible").not(s)).attr("aria-hidden", "true"), i(t).one("focusin.pum_accessibility", PUM_Accessibility.forceFocus), PUM_Accessibility.setFocusToFirstItem()
        }
    }, i(t).on("pumInit", e, function() {
        PUM.getPopup(this).find("[tabindex]").each(function() {
            var e = i(this);
            e.data("tabindex", e.attr("tabindex")).prop("tabindex", "0")
        })
    }).on("pumBeforeOpen", e, function() {}).on("pumAfterOpen", e, PUM_Accessibility.initiateFocusLock).on("pumBeforeClose", e, function() {}).on("pumAfterClose", e, function() {
        PUM.getPopup(this).off("keydown.pum_accessibility").attr("aria-hidden", "true"), n && (n.attr("aria-hidden", "false"), n = null), void 0 !== r && r.length && r.focus(), s = null, i(t).off("focusin.pum_accessibility")
    }).on("pumSetupClose", e, function() {}).on("pumOpenPrevented", e, function() {}).on("pumClosePrevented", e, function() {}).on("pumBeforeReposition", e, function() {})
}(jQuery, document),
function(i) {
    "use strict";
    i.fn.popmake.last_open_trigger = null, i.fn.popmake.last_close_trigger = null, i.fn.popmake.conversion_trigger = null;
    var r = !(void 0 === pum_vars.analytics_api || !pum_vars.analytics_api);
    PUM_Analytics = {
        beacon: function(e, o) {
            var t = new Image,
                n = r ? pum_vars.analytics_api : pum_vars.ajaxurl,
                o = {
                    route: pum.hooks.applyFilters("pum.analyticsBeaconRoute", "/" + pum_vars.analytics_route + "/"),
                    data: pum.hooks.applyFilters("pum.AnalyticsBeaconData", i.extend(!0, {
                        event: "open",
                        pid: null,
                        _cache: +new Date
                    }, e)),
                    callback: "function" == typeof o ? o : function() {}
                };
            r ? n += o.route : o.data.action = "pum_analytics", n && (i(t).on("error success load done", o.callback), t.src = n + "?" + i.param(o.data))
        }
    }, void 0 !== pum_vars.disable_tracking && pum_vars.disable_tracking || (i(document).on("pumAfterOpen.core_analytics", ".pum", function() {
        var e = PUM.getPopup(this),
            e = {
                pid: parseInt(e.popmake("getSettings").id, 10) || null
            };
        0 < e.pid && !i("body").hasClass("single-popup") && PUM_Analytics.beacon(e)
    }), i(function() {
        PUM.hooks.addAction("pum.integration.form.success", function(e, o) {
            !1 !== o.ajax && (0 === o.popup.length || 0 < (o = {
                pid: parseInt(o.popup.popmake("getSettings").id, 10) || null,
                event: "conversion"
            }).pid && !i("body").hasClass("single-popup") && PUM_Analytics.beacon(o))
        })
    }))
}(jQuery),
function(n, r) {
    "use strict";

    function s(e) {
        var o = e.popmake("getContainer"),
            t = {
                display: "",
                opacity: ""
            };
        e.css(t), o.css(t)
    }

    function a(e) {
        return e.overlay_disabled ? 0 : e.animation_speed / 2
    }

    function p(e) {
        return e.overlay_disabled ? parseInt(e.animation_speed) : e.animation_speed / 2
    }
    n.fn.popmake.methods.animate_overlay = function(e, o, t) {
        return PUM.getPopup(this).popmake("getSettings").overlay_disabled ? n.fn.popmake.overlay_animations.none.apply(this, [o, t]) : n.fn.popmake.overlay_animations[e] ? n.fn.popmake.overlay_animations[e].apply(this, [o, t]) : (window.console && console.warn("Animation style " + e + " does not exist."), this)
    }, n.fn.popmake.methods.animate = function(e) {
        return n.fn.popmake.animations[e] ? n.fn.popmake.animations[e].apply(this, Array.prototype.slice.call(arguments, 1)) : (window.console && console.warn("Animation style " + e + " does not exist."), this)
    }, n.fn.popmake.animations = {
        none: function(e) {
            var o = PUM.getPopup(this);
            return o.popmake("getContainer").css({
                opacity: 1,
                display: "block"
            }), o.popmake("animate_overlay", "none", 0, function() {
                e !== r && e()
            }), this
        },
        slide: function(o) {
            var e = PUM.getPopup(this),
                t = e.popmake("getContainer"),
                n = e.popmake("getSettings"),
                i = e.popmake("animation_origin", n.animation_origin);
            return s(e), t.position(i), e.popmake("animate_overlay", "fade", a(n), function() {
                t.popmake("reposition", function(e) {
                    t.animate(e, p(n), "swing", function() {
                        o !== r && o()
                    })
                })
            }), this
        },
        fade: function(e) {
            var o = PUM.getPopup(this),
                t = o.popmake("getContainer"),
                n = o.popmake("getSettings");
            return s(o), o.css({
                opacity: 0,
                display: "block"
            }), t.css({
                opacity: 0,
                display: "block"
            }), o.popmake("animate_overlay", "fade", a(n), function() {
                t.animate({
                    opacity: 1
                }, p(n), "swing", function() {
                    e !== r && e()
                })
            }), this
        },
        fadeAndSlide: function(o) {
            var e = PUM.getPopup(this),
                t = e.popmake("getContainer"),
                n = e.popmake("getSettings"),
                i = e.popmake("animation_origin", n.animation_origin);
            return s(e), e.css({
                display: "block",
                opacity: 0
            }), t.css({
                display: "block",
                opacity: 0
            }), t.position(i), e.popmake("animate_overlay", "fade", a(n), function() {
                t.popmake("reposition", function(e) {
                    e.opacity = 1, t.animate(e, p(n), "swing", function() {
                        o !== r && o()
                    })
                })
            }), this
        },
        grow: function(e) {
            return n.fn.popmake.animations.fade.apply(this, arguments)
        },
        growAndSlide: function(e) {
            return n.fn.popmake.animations.fadeAndSlide.apply(this, arguments)
        }
    }, n.fn.popmake.overlay_animations = {
        none: function(e, o) {
            PUM.getPopup(this).css({
                opacity: 1,
                display: "block"
            }), "function" == typeof o && o()
        },
        fade: function(e, o) {
            PUM.getPopup(this).css({
                opacity: 0,
                display: "block"
            }).animate({
                opacity: 1
            }, e, "swing", o)
        },
        slide: function(e, o) {
            PUM.getPopup(this).slideDown(e, o)
        }
    }
}(jQuery, void document),
function(e, o) {
    "use strict";
    e(o).on("pumInit", ".pum", function() {
        e(this).popmake("getContainer").trigger("popmakeInit")
    }).on("pumBeforeOpen", ".pum", function() {
        e(this).popmake("getContainer").addClass("active").trigger("popmakeBeforeOpen")
    }).on("pumAfterOpen", ".pum", function() {
        e(this).popmake("getContainer").trigger("popmakeAfterOpen")
    }).on("pumBeforeClose", ".pum", function() {
        e(this).popmake("getContainer").trigger("popmakeBeforeClose")
    }).on("pumAfterClose", ".pum", function() {
        e(this).popmake("getContainer").removeClass("active").trigger("popmakeAfterClose")
    }).on("pumSetupClose", ".pum", function() {
        e(this).popmake("getContainer").trigger("popmakeSetupClose")
    }).on("pumOpenPrevented", ".pum", function() {
        e(this).popmake("getContainer").removeClass("preventOpen").removeClass("active")
    }).on("pumClosePrevented", ".pum", function() {
        e(this).popmake("getContainer").removeClass("preventClose")
    }).on("pumBeforeReposition", ".pum", function() {
        e(this).popmake("getContainer").trigger("popmakeBeforeReposition")
    })
}(jQuery, document),
function(o) {
    "use strict";
    o.fn.popmake.callbacks = {
        reposition_using: function(e) {
            o(this).css(e)
        }
    }
}(jQuery, document),
function(p) {
    "use strict";

    function u() {
        return e = void 0 === e ? "undefined" != typeof MobileDetect ? new MobileDetect(window.navigator.userAgent) : {
            phone: function() {
                return !1
            },
            tablet: function() {
                return !1
            }
        } : e
    }
    var e;
    p.extend(p.fn.popmake.methods, {
        checkConditions: function() {
            var e, o, t, n, i, r = PUM.getPopup(this),
                s = r.popmake("getSettings"),
                a = !0;
            if (s.disable_on_mobile && u().phone()) return !1;
            if (s.disable_on_tablet && u().tablet()) return !1;
            if (s.conditions.length)
                for (o = 0; s.conditions.length > o; o++) {
                    for (n = s.conditions[o], e = !1, t = 0; n.length > t && ((!(i = p.extend({}, {
                            not_operand: !1
                        }, n[t])).not_operand && r.popmake("checkCondition", i) || i.not_operand && !r.popmake("checkCondition", i)) && (e = !0), p(this).trigger("pumCheckingCondition", [e, i]), !e); t++);
                    e || (a = !1)
                }
            return a
        },
        checkCondition: function(e) {
            var o = e.target || null;
            e.settings;
            return o ? p.fn.popmake.conditions[o] ? p.fn.popmake.conditions[o].apply(this, [e]) : window.console ? (console.warn("Condition " + o + " does not exist."), !0) : void 0 : (console.warn("Condition type not set."), !1)
        }
    }), p.fn.popmake.conditions = {}
}(jQuery, document),
function(c) {
    "use strict";

    function d(e, o, t) {
        var n, i = new Date;
        if ("undefined" != typeof document) {
            if (1 < arguments.length) {
                switch (typeof(t = c.extend({
                    path: pum_vars.home_url
                }, d.defaults, t)).expires) {
                    case "number":
                        i.setMilliseconds(i.getMilliseconds() + 864e5 * t.expires), t.expires = i;
                        break;
                    case "string":
                        i.setTime(1e3 * c.fn.popmake.utilities.strtotime("+" + t.expires)), t.expires = i
                }
                try {
                    n = JSON.stringify(o), /^[\{\[]/.test(n) && (o = n)
                } catch (e) {}
                return o = f.write ? f.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [e, "=", o, t.expires ? "; expires=" + t.expires.toUTCString() : "", t.path ? "; path=" + t.path : "", t.domain ? "; domain=" + t.domain : "", t.secure ? "; secure" : ""].join("")
            }
            e || (n = {});
            for (var r = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, a = 0; a < r.length; a++) {
                var p = r[a].split("=");
                '"' === (l = p.slice(1).join("=")).charAt(0) && (l = l.slice(1, -1));
                try {
                    var u = p[0].replace(s, decodeURIComponent),
                        l = f.read ? f.read(l, u) : f(l, u) || l.replace(s, decodeURIComponent);
                    if (this.json) try {
                        l = JSON.parse(l)
                    } catch (e) {}
                    if (e === u) {
                        n = l;
                        break
                    }
                    e || (n[u] = l)
                } catch (e) {}
            }
            return n
        }
    }
    var f;
    c.extend(c.fn.popmake, {
        cookie: (void 0 === f && (f = function() {}), (d.set = d).get = function(e) {
            return d.call(d, e)
        }, d.getJSON = function() {
            return d.apply({
                json: !0
            }, [].slice.call(arguments))
        }, d.defaults = {}, d.remove = function(e, o) {
            d(e, "", c.extend({}, o, {
                expires: -1,
                path: ""
            })), d(e, "", c.extend({}, o, {
                expires: -1
            }))
        }, d.process = function(e, o, t, n) {
            return d.apply(d, 3 < arguments.length && "object" != typeof t && void 0 !== o ? [e, o, {
                expires: t,
                path: n
            }] : [].slice.call(arguments, [0, 2]))
        }, d.withConverter = c.fn.popmake.cookie, d)
    }), pm_cookie = c.pm_cookie = c.fn.popmake.cookie.process, pm_cookie_json = c.pm_cookie_json = c.fn.popmake.cookie.getJSON, pm_remove_cookie = c.pm_remove_cookie = c.fn.popmake.cookie.remove
}(jQuery),
function(i, e, n) {
    "use strict";

    function r(e) {
        i.pm_cookie(e.name, !0, e.session ? null : e.time, e.path ? pum_vars.home_url || "/" : null), pum.hooks.doAction("popmake.setCookie", e)
    }
    i.extend(i.fn.popmake.methods, {
        addCookie: function(e) {
            return pum.hooks.doAction("popmake.addCookie", arguments), i.fn.popmake.cookies[e] ? i.fn.popmake.cookies[e].apply(this, Array.prototype.slice.call(arguments, 1)) : (window.console && console.warn("Cookie type " + e + " does not exist."), this)
        },
        setCookie: r,
        checkCookies: function(e) {
            var o, t = !1;
            if (e.cookie_name === n || null === e.cookie_name || "" === e.cookie_name) return !1;
            switch (typeof e.cookie_name) {
                case "object":
                case "array":
                    for (o = 0; e.cookie_name.length > o; o += 1) i.pm_cookie(e.cookie_name[o]) !== n && (t = !0);
                    break;
                case "string":
                    i.pm_cookie(e.cookie_name) !== n && (t = !0)
            }
            return pum.hooks.doAction("popmake.checkCookies", e, t), t
        }
    }), i.fn.popmake.cookies = i.fn.popmake.cookies || {}, i.extend(i.fn.popmake.cookies, {
        on_popup_open: function(e) {
            var o = PUM.getPopup(this);
            o.on("pumAfterOpen", function() {
                o.popmake("setCookie", e)
            })
        },
        on_popup_close: function(e) {
            var o = PUM.getPopup(this);
            o.on("pumBeforeClose", function() {
                o.popmake("setCookie", e)
            })
        },
        form_submission: function(t) {
            var n = PUM.getPopup(this);
            t = i.extend({
                form: "",
                formInstanceId: "",
                only_in_popup: !1
            }, t), PUM.hooks.addAction("pum.integration.form.success", function(e, o) {
                t.form.length && PUM.integrations.checkFormKeyMatches(t.form, t.formInstanceId, o) && (t.only_in_popup && o.popup.length && o.popup.is(n) || !t.only_in_popup) && n.popmake("setCookie", t)
            })
        },
        manual: function(e) {
            var o = PUM.getPopup(this);
            o.on("pumSetCookie", function() {
                o.popmake("setCookie", e)
            })
        },
        form_success: function(e) {
            var o = PUM.getPopup(this);
            o.on("pumFormSuccess", function() {
                o.popmake("setCookie", e)
            })
        },
        pum_sub_form_success: function(e) {
            var o = PUM.getPopup(this);
            o.find("form.pum-sub-form").on("success", function() {
                o.popmake("setCookie", e)
            })
        },
        pum_sub_form_already_subscribed: function(e) {
            var o = PUM.getPopup(this);
            o.find("form.pum-sub-form").on("success", function() {
                o.popmake("setCookie", e)
            })
        },
        ninja_form_success: function(e) {
            return i.fn.popmake.cookies.form_success.apply(this, arguments)
        },
        cf7_form_success: function(e) {
            return i.fn.popmake.cookies.form_success.apply(this, arguments)
        },
        gforms_form_success: function(e) {
            return i.fn.popmake.cookies.form_success.apply(this, arguments)
        }
    }), i(e).on("pumInit", ".pum", function() {
        var e, o, t = PUM.getPopup(this),
            n = t.popmake("getSettings").cookies || [];
        if (n.length)
            for (o = 0; o < n.length; o += 1) e = n[o], t.popmake("addCookie", e.event, e.settings)
    }), i(function() {
        var e = i(".pum-cookie");
        e.each(function() {
            var o = i(this),
                t = e.index(o),
                n = o.data("cookie-args");
            !o.data("only-onscreen") || o.isInViewport() && o.is(":visible") ? r(n) : i(window).on("scroll.pum-cookie-" + t, i.fn.popmake.utilities.throttle(function(e) {
                o.isInViewport() && o.is(":visible") && (r(n), i(window).off("scroll.pum-cookie-" + t))
            }, 100))
        })
    })
}(jQuery, document);
var pum_debug, pum_debug_mode = !1;
! function(s, e) {
    var a, o, p;
    e = window.pum_vars || {
        debug_mode: !1
    }, (pum_debug_mode = !(pum_debug_mode = void 0 !== e.debug_mode && e.debug_mode) && -1 !== window.location.href.indexOf("pum_debug") ? !0 : pum_debug_mode) && (o = a = !1, p = window.pum_debug_vars || {
        debug_mode_enabled: "Popup Maker: Debug Mode Enabled",
        debug_started_at: "Debug started at:",
        debug_more_info: "For more information on how to use this information visit https://docs.wppopupmaker.com/?utm_medium=js-debug-info&utm_campaign=contextual-help&utm_source=browser-console&utm_content=more-info",
        global_info: "Global Information",
        localized_vars: "Localized variables",
        popups_initializing: "Popups Initializing",
        popups_initialized: "Popups Initialized",
        single_popup_label: "Popup: #",
        theme_id: "Theme ID: ",
        label_method_call: "Method Call:",
        label_method_args: "Method Arguments:",
        label_popup_settings: "Settings",
        label_triggers: "Triggers",
        label_cookies: "Cookies",
        label_delay: "Delay:",
        label_conditions: "Conditions",
        label_cookie: "Cookie:",
        label_settings: "Settings:",
        label_selector: "Selector:",
        label_mobile_disabled: "Mobile Disabled:",
        label_tablet_disabled: "Tablet Disabled:",
        label_event: "Event: %s",
        triggers: [],
        cookies: []
    }, pum_debug = {
        odump: function(e) {
            return s.extend({}, e)
        },
        logo: function() {
            console.log(" -------------------------------------------------------------\n|  ____                           __  __       _              |\n| |  _ \\ ___  _ __  _   _ _ __   |  \\/  | __ _| | _____ _ __  |\n| | |_) / _ \\| '_ \\| | | | '_ \\  | |\\/| |/ _` | |/ / _ \\ '__| |\n| |  __/ (_) | |_) | |_| | |_) | | |  | | (_| |   <  __/ |    |\n| |_|   \\___/| .__/ \\__,_| .__/  |_|  |_|\\__,_|_|\\_\\___|_|    |\n|            |_|         |_|                                  |\n -------------------------------------------------------------")
        },
        initialize: function() {
            a = !0, pum_debug.logo(), console.debug(p.debug_mode_enabled), console.log(p.debug_started_at, new Date), console.info(p.debug_more_info), pum_debug.divider(p.global_info), console.groupCollapsed(p.localized_vars), console.log("pum_vars:", pum_debug.odump(e)), s(document).trigger("pum_debug_initialize_localized_vars"), console.groupEnd(), s(document).trigger("pum_debug_initialize")
        },
        popup_event_header: function(e) {
            e = e.popmake("getSettings");
            o !== e.id && (o = e.id, pum_debug.divider(p.single_popup_label + e.id + " - " + e.slug))
        },
        divider: function(e) {
            var o, t = 0,
                n = " " + new Array(63).join("-") + " ";
            "string" == typeof e ? (o = 62 - e.length, (t = {
                left: Math.floor(o / 2),
                right: Math.floor(o / 2)
            }).left + t.right === o - 1 && t.right++, t.left = new Array(t.left + 1).join(" "), t.right = new Array(t.right + 1).join(" "), console.log(n + "\n|" + t.left + e + t.right + "|\n" + n)) : console.log(n)
        },
        click_trigger: function(e, o) {
            var t = e.popmake("getSettings"),
                t = [".popmake-" + t.id, ".popmake-" + decodeURIComponent(t.slug), 'a[href$="#popmake-' + t.id + '"]'];
            o.extra_selectors && "" !== o.extra_selectors && t.push(o.extra_selectors), t = (t = pum.hooks.applyFilters("pum.trigger.click_open.selectors", t, o, e)).join(", "), console.log(p.label_selector, t)
        },
        trigger: function(e, o) {
            if ("string" == typeof p.triggers[o.type]) {
                switch (console.groupCollapsed(p.triggers[o.type]), o.type) {
                    case "auto_open":
                        console.log(p.label_delay, o.settings.delay), console.log(p.label_cookie, o.settings.cookie_name);
                        break;
                    case "click_open":
                        pum_debug.click_trigger(e, o.settings), console.log(p.label_cookie, o.settings.cookie_name)
                }
                s(document).trigger("pum_debug_render_trigger", e, o), console.groupEnd()
            }
        },
        cookie: function(e, o) {
            if ("string" == typeof p.cookies[o.event]) {
                switch (console.groupCollapsed(p.cookies[o.event]), o.event) {
                    case "on_popup_open":
                    case "on_popup_close":
                    case "manual":
                    case "ninja_form_success":
                        console.log(p.label_cookie, pum_debug.odump(o.settings))
                }
                s(document).trigger("pum_debug_render_trigger", e, o), console.groupEnd()
            }
        }
    }, s(document).on("pumInit", ".pum", function() {
        var e = PUM.getPopup(s(this)),
            o = e.popmake("getSettings"),
            t = o.triggers || [],
            n = o.cookies || [],
            i = o.conditions || [],
            r = 0;
        if (a || (pum_debug.initialize(), pum_debug.divider(p.popups_initializing)), console.groupCollapsed(p.single_popup_label + o.id + " - " + o.slug), console.log(p.theme_id, o.theme_id), t.length) {
            for (console.groupCollapsed(p.label_triggers), r = 0; r < t.length; r++) pum_debug.trigger(e, t[r]);
            console.groupEnd()
        }
        if (n.length) {
            for (console.groupCollapsed(p.label_cookies), r = 0; r < n.length; r += 1) pum_debug.cookie(e, n[r]);
            console.groupEnd()
        }
        i.length && (console.groupCollapsed(p.label_conditions), console.log(i), console.groupEnd()), console.groupCollapsed(p.label_popup_settings), console.log(p.label_mobile_disabled, !1 !== o.disable_on_mobile), console.log(p.label_tablet_disabled, !1 !== o.disable_on_tablet), console.log(p.label_display_settings, pum_debug.odump(o)), e.trigger("pum_debug_popup_settings"), console.groupEnd(), console.groupEnd()
    }).on("pumBeforeOpen", ".pum", function() {
        var e = PUM.getPopup(s(this)),
            o = s.fn.popmake.last_open_trigger;
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumBeforeOpen"));
        try {
            o = (o = s(s.fn.popmake.last_open_trigger)).length ? o : s.fn.popmake.last_open_trigger.toString()
        } catch (e) {
            o = ""
        } finally {
            console.log(p.label_triggers, [o])
        }
        console.groupEnd()
    }).on("pumOpenPrevented", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumOpenPrevented")), console.groupEnd()
    }).on("pumAfterOpen", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumAfterOpen")), console.groupEnd()
    }).on("pumSetupClose", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumSetupClose")), console.groupEnd()
    }).on("pumClosePrevented", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumClosePrevented")), console.groupEnd()
    }).on("pumBeforeClose", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumBeforeClose")), console.groupEnd()
    }).on("pumAfterClose", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumAfterClose")), console.groupEnd()
    }).on("pumBeforeReposition", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumBeforeReposition")), console.groupEnd()
    }).on("pumAfterReposition", ".pum", function() {
        var e = PUM.getPopup(s(this));
        pum_debug.popup_event_header(e), console.groupCollapsed(p.label_event.replace("%s", "pumAfterReposition")), console.groupEnd()
    }).on("pumCheckingCondition", ".pum", function(e, o, t) {
        var n = PUM.getPopup(s(this));
        pum_debug.popup_event_header(n), console.groupCollapsed(p.label_event.replace("%s", "pumCheckingCondition")), console.log((t.not_operand ? "(!) " : "") + t.target + ": " + o, t), console.groupEnd()
    }))
}(jQuery),
function(e) {
    "use strict";
    e.fn.popmake.defaults = {
        id: null,
        slug: "",
        theme_id: null,
        cookies: [],
        triggers: [],
        conditions: [],
        mobile_disabled: null,
        tablet_disabled: null,
        custom_height_auto: !1,
        scrollable_content: !1,
        position_from_trigger: !1,
        position_fixed: !1,
        overlay_disabled: !1,
        stackable: !1,
        disable_reposition: !1,
        close_on_overlay_click: !1,
        close_on_form_submission: !1,
        close_on_form_submission_delay: 0,
        close_on_esc_press: !1,
        close_on_f4_press: !1,
        disable_on_mobile: !1,
        disable_on_tablet: !1,
        size: "medium",
        responsive_min_width: "0%",
        responsive_max_width: "100%",
        custom_width: "640px",
        custom_height: "380px",
        animation_type: "fade",
        animation_speed: "350",
        animation_origin: "center top",
        location: "center top",
        position_top: "100",
        position_bottom: "0",
        position_left: "0",
        position_right: "0",
        zindex: "1999999999",
        close_button_delay: "0",
        meta: {
            display: {
                stackable: !1,
                overlay_disabled: !1,
                size: "medium",
                responsive_max_width: "100",
                responsive_max_width_unit: "%",
                responsive_min_width: "0",
                responsive_min_width_unit: "%",
                custom_width: "640",
                custom_width_unit: "px",
                custom_height: "380",
                custom_height_unit: "px",
                custom_height_auto: !1,
                location: "center top",
                position_top: 100,
                position_left: 0,
                position_bottom: 0,
                position_right: 0,
                position_fixed: !1,
                animation_type: "fade",
                animation_speed: 350,
                animation_origin: "center top",
                scrollable_content: !1,
                disable_reposition: !1,
                position_from_trigger: !1,
                overlay_zindex: !1,
                zindex: "1999999999"
            },
            close: {
                overlay_click: !1,
                esc_press: !1,
                f4_press: !1,
                text: "",
                button_delay: 0
            },
            click_open: []
        },
        container: {
            active_class: "active",
            attr: {
                class: "popmake"
            }
        },
        title: {
            attr: {
                class: "popmake-title"
            }
        },
        content: {
            attr: {
                class: "popmake-content"
            }
        },
        close: {
            close_speed: 0,
            attr: {
                class: "popmake-close"
            }
        },
        overlay: {
            attr: {
                id: "popmake-overlay",
                class: "popmake-overlay"
            }
        }
    }
}(jQuery, document),
function(r) {
    "use strict";
    var i = {
        openpopup: !1,
        openpopup_id: 0,
        closepopup: !1,
        closedelay: 0,
        redirect_enabled: !1,
        redirect: "",
        cookie: !1
    };
    window.PUM = window.PUM || {}, window.PUM.forms = window.PUM.forms || {}, r.extend(window.PUM.forms, {
        form: {
            validation: {
                errors: []
            },
            responseHandler: function(e, o) {
                var t = o.data;
                o.success ? window.PUM.forms.form.success(e, t) : window.PUM.forms.form.errors(e, t)
            },
            display_errors: function(e, o) {
                window.PUM.forms.messages.add(e, o || this.validation.errors, "error")
            },
            beforeAjax: function(e) {
                var o = e.find('[type="submit"]'),
                    t = o.find(".pum-form__loader");
                window.PUM.forms.messages.clear_all(e), t.length || (t = r('<span class="pum-form__loader"></span>'), "" !== o.attr("value") ? t.insertAfter(o) : o.append(t)), o.prop("disabled", !0), t.show(), e.addClass("pum-form--loading").removeClass("pum-form--errors")
            },
            afterAjax: function(e) {
                var o = e.find('[type="submit"]'),
                    t = o.find(".pum-form__loader");
                o.prop("disabled", !1), t.hide(), e.removeClass("pum-form--loading")
            },
            success: function(e, o) {
                void 0 !== o.message && "" !== o.message && window.PUM.forms.messages.add(e, [{
                    message: o.message
                }]), e.trigger("success", [o]), !e.data("noredirect") && void 0 !== e.data("redirect_enabled") && o.redirect && ("" !== o.redirect ? window.location = o.redirect : window.location.reload(!0))
            },
            errors: function(e, o) {
                void 0 !== o.errors && o.errors.length && (console.log(o.errors), window.PUM.forms.form.display_errors(e, o.errors), window.PUM.forms.messages.scroll_to_first(e), e.addClass("pum-form--errors").trigger("errors", [o]))
            },
            submit: function(e) {
                var o = r(this),
                    t = o.pumSerializeObject();
                e.preventDefault(), e.stopPropagation(), window.PUM.forms.form.beforeAjax(o), r.ajax({
                    type: "POST",
                    dataType: "json",
                    url: pum_vars.ajaxurl,
                    data: {
                        action: "pum_form",
                        values: t
                    }
                }).always(function() {
                    window.PUM.forms.form.afterAjax(o)
                }).done(function(e) {
                    window.PUM.forms.form.responseHandler(o, e)
                }).error(function(e, o, t) {
                    console.log("Error: type of " + o + " with message of " + t)
                })
            }
        },
        messages: {
            add: function(e, o, t) {
                var n = e.find(".pum-form__messages"),
                    i = 0;
                if (t = t || "success", o = o || [], !n.length) switch (n = r('<div class="pum-form__messages">').hide(), pum_vars.message_position) {
                    case "bottom":
                        e.append(n.addClass("pum-form__messages--bottom"));
                        break;
                    case "top":
                        e.prepend(n.addClass("pum-form__messages--top"))
                }
                if (0 <= ["bottom", "top"].indexOf(pum_vars.message_position))
                    for (; o.length > i; i++) this.add_message(n, o[i].message, t);
                else
                    for (; o.length > i; i++) void 0 !== o[i].field ? this.add_field_error(e, o[i]) : this.add_message(n, o[i].message, t);
                n.is(":hidden") && r(".pum-form__message", n).length && n.slideDown()
            },
            add_message: function(e, o, t) {
                o = r('<p class="pum-form__message">').html(o);
                t = t || "success", o.addClass("pum-form__message--" + t), e.append(o), e.is(":visible") && o.hide().slideDown()
            },
            add_field_error: function(e, o) {
                e = r('[name="' + o.field + '"]', e).parents(".pum-form__field").addClass("pum-form__field--error");
                this.add_message(e, o.message, "error")
            },
            clear_all: function(e, o) {
                var t = e.find(".pum-form__messages"),
                    n = t.find(".pum-form__message"),
                    e = e.find(".pum-form__field.pum-form__field--error");
                o = o || !1, t.length && n.slideUp("fast", function() {
                    r(this).remove(), o && t.hide()
                }), e.length && e.removeClass("pum-form__field--error").find("p.pum-form__message").remove()
            },
            scroll_to_first: function(e) {
                window.PUM.utilities.scrollTo(r(".pum-form__field.pum-form__field--error", e).eq(0))
            }
        },
        success: function(e, o) {
            var t, n;
            (o = r.extend({}, i, o)) && (t = PUM.getPopup(e), e = {}, n = function() {
                o.openpopup && PUM.getPopup(o.openpopup_id).length ? PUM.open(o.openpopup_id) : o.redirect_enabled && ("" !== o.redirect ? window.location = o.redirect : window.location.reload(!0))
            }, t.length && (t.trigger("pumFormSuccess"), o.cookie && (e = r.extend({
                name: "pum-" + PUM.getSetting(t, "id"),
                expires: "+1 year"
            }, "object" == typeof o.cookie ? o.cookie : {}), PUM.setCookie(t, e))), t.length && o.closepopup ? setTimeout(function() {
                t.popmake("close", n)
            }, 1e3 * parseInt(o.closedelay)) : n())
        }
    })
}(jQuery),
function(e) {
    "use strict";
    e.pum = e.pum || {}, e.pum.hooks = e.pum.hooks || new function() {
        var t = Array.prototype.slice,
            i = {
                removeFilter: function(e, o) {
                    "string" == typeof e && n("filters", e, o);
                    return i
                },
                applyFilters: function() {
                    var e = t.call(arguments),
                        o = e.shift();
                    return "string" != typeof o ? i : s("filters", o, e)
                },
                addFilter: function(e, o, t, n) {
                    "string" == typeof e && "function" == typeof o && (t = parseInt(t || 10, 10), r("filters", e, o, t, n));
                    return i
                },
                removeAction: function(e, o) {
                    "string" == typeof e && n("actions", e, o);
                    return i
                },
                doAction: function() {
                    var e = t.call(arguments),
                        o = e.shift();
                    "string" == typeof o && s("actions", o, e);
                    return i
                },
                addAction: function(e, o, t, n) {
                    "string" == typeof e && "function" == typeof o && (t = parseInt(t || 10, 10), r("actions", e, o, t, n));
                    return i
                }
            },
            a = {
                actions: {},
                filters: {}
            };

        function n(e, o, t, n) {
            var i, r, s;
            if (a[e][o])
                if (t)
                    if (i = a[e][o], n)
                        for (s = i.length; s--;)(r = i[s]).callback === t && r.context === n && i.splice(s, 1);
                    else
                        for (s = i.length; s--;) i[s].callback === t && i.splice(s, 1);
            else a[e][o] = []
        }

        function r(e, o, t, n, i) {
            n = {
                callback: t,
                priority: n,
                context: i
            }, i = (i = a[e][o]) ? (i.push(n), function(e) {
                for (var o, t, n, i = 1, r = e.length; i < r; i++) {
                    for (o = e[i], t = i;
                        (n = e[t - 1]) && n.priority > o.priority;) e[t] = e[t - 1], --t;
                    e[t] = o
                }
                return e
            }(i)) : [n];
            a[e][o] = i
        }

        function s(e, o, t) {
            var n, i, r = a[e][o];
            if (!r) return "filters" === e && t[0];
            if (i = r.length, "filters" === e)
                for (n = 0; n < i; n++) t[0] = r[n].callback.apply(r[n].context, t);
            else
                for (n = 0; n < i; n++) r[n].callback.apply(r[n].context, t);
            return "filters" !== e || t[0]
        }
        return i
    }, e.PUM = e.PUM || {}, e.PUM.hooks = e.pum.hooks
}(window),
function(t) {
    "use strict";

    function n(e) {
        return e
    }
    window.PUM = window.PUM || {}, window.PUM.integrations = window.PUM.integrations || {}, t.extend(window.PUM.integrations, {
        init: function() {
            var e;
            void 0 !== pum_vars.form_submission && ((e = pum_vars.form_submission).ajax = !1, e.popup = 0 < e.popupId ? PUM.getPopup(e.popupId) : null, PUM.integrations.formSubmission(null, e))
        },
        formSubmission: function(e, o) {
            (o = t.extend({
                popup: PUM.getPopup(e),
                formProvider: null,
                formId: null,
                formInstanceId: null,
                formKey: null,
                ajax: !0,
                tracked: !1
            }, o)).formKey = o.formKey || [o.formProvider, o.formId, o.formInstanceId].filter(n).join("_"), o.popup && o.popup.length && (o.popupId = PUM.getSetting(o.popup, "id")), window.PUM.hooks.doAction("pum.integration.form.success", e, o)
        },
        checkFormKeyMatches: function(e, o, t) {
            o = "" === o && o;
            var n = -1 !== ["any" === e, "pumsubform" === e && "pumsubform" === t.formProvider, e === t.formProvider + "_any", !o && new RegExp("^" + e + "(_[d]*)?").test(t.formKey), !!o && e + "_" + o === t.formKey].indexOf(!0);
            return window.PUM.hooks.applyFilters("pum.integration.checkFormKeyMatches", n, {
                formIdentifier: e,
                formInstanceId: o,
                submittedFormArgs: t
            })
        }
    })
}(window.jQuery),
function(s) {
    "use strict";
    pum_vars && void 0 !== pum_vars.core_sub_forms_enabled && !pum_vars.core_sub_forms_enabled || (window.PUM = window.PUM || {}, window.PUM.newsletter = window.PUM.newsletter || {}, s.extend(window.PUM.newsletter, {
        form: s.extend({}, window.PUM.forms.form, {
            submit: function(e) {
                var o = s(this),
                    t = o.pumSerializeObject();
                e.preventDefault(), e.stopPropagation(), window.PUM.newsletter.form.beforeAjax(o), s.ajax({
                    type: "POST",
                    dataType: "json",
                    url: pum_vars.ajaxurl,
                    data: {
                        action: "pum_sub_form",
                        values: t
                    }
                }).always(function() {
                    window.PUM.newsletter.form.afterAjax(o)
                }).done(function(e) {
                    window.PUM.newsletter.form.responseHandler(o, e)
                }).error(function(e, o, t) {
                    console.log("Error: type of " + o + " with message of " + t)
                })
            }
        })
    }), s(document).on("submit", "form.pum-sub-form", window.PUM.newsletter.form.submit).on("success", "form.pum-sub-form", function(e, o) {
        var t = s(e.target),
            n = t.data("settings") || {},
            i = t.pumSerializeObject(),
            r = PUM.getPopup(t),
            e = PUM.getSetting(r, "id"),
            r = s("form.pum-sub-form", r).index(t) + 1;
        window.PUM.integrations.formSubmission(t, {
            formProvider: "pumsubform",
            formId: e,
            formInstanceId: r,
            extras: {
                data: o,
                values: i,
                settings: n
            }
        }), t.trigger("pumNewsletterSuccess", [o]).addClass("pum-newsletter-success"), t[0].reset(), window.pum.hooks.doAction("pum-sub-form.success", o, t), "string" == typeof n.redirect && "" !== n.redirect && (n.redirect = atob(n.redirect)), window.PUM.forms.success(t, n)
    }).on("error", "form.pum-sub-form", function(e, o) {
        e = s(e.target);
        e.trigger("pumNewsletterError", [o]), window.pum.hooks.doAction("pum-sub-form.errors", o, e)
    }))
}(jQuery),
function(r, o) {
    "use strict";
    r.extend(r.fn.popmake.methods, {
        addTrigger: function(e) {
            return r.fn.popmake.triggers[e] ? r.fn.popmake.triggers[e].apply(this, Array.prototype.slice.call(arguments, 1)) : (window.console && console.warn("Trigger type " + e + " does not exist."), this)
        }
    }), r.fn.popmake.triggers = {
        auto_open: function(e) {
            var o = PUM.getPopup(this);
            setTimeout(function() {
                o.popmake("state", "isOpen") || !o.popmake("checkCookies", e) && o.popmake("checkConditions") && (r.fn.popmake.last_open_trigger = "Auto Open - Delay: " + e.delay, o.popmake("open"))
            }, e.delay)
        },
        click_open: function(n) {
            var i = PUM.getPopup(this),
                e = i.popmake("getSettings"),
                e = [".popmake-" + e.id, ".popmake-" + decodeURIComponent(e.slug), 'a[href$="#popmake-' + e.id + '"]'];
            n.extra_selectors && "" !== n.extra_selectors && e.push(n.extra_selectors), e = (e = pum.hooks.applyFilters("pum.trigger.click_open.selectors", e, n, i)).join(", "), r(e).addClass("pum-trigger").css({
                cursor: "pointer"
            }), r(o).on("click.pumTrigger", e, function(e) {
                var o = r(this),
                    t = n.do_default || !1;
                0 < i.has(o).length || i.popmake("state", "isOpen") || !i.popmake("checkCookies", n) && i.popmake("checkConditions") && (o.data("do-default") ? t = o.data("do-default") : (o.hasClass("do-default") || o.hasClass("popmake-do-default") || o.hasClass("pum-do-default")) && (t = !0), e.ctrlKey || pum.hooks.applyFilters("pum.trigger.click_open.do_default", t, i, o) || (e.preventDefault(), e.stopPropagation()), r.fn.popmake.last_open_trigger = o, i.popmake("open"))
            })
        },
        form_submission: function(t) {
            var n = PUM.getPopup(this);
            t = r.extend({
                form: "",
                formInstanceId: "",
                delay: 0
            }, t);
            PUM.hooks.addAction("pum.integration.form.success", function(e, o) {
                t.form.length && PUM.integrations.checkFormKeyMatches(t.form, t.formInstanceId, o) && setTimeout(function() {
                    n.popmake("state", "isOpen") || !n.popmake("checkCookies", t) && n.popmake("checkConditions") && (r.fn.popmake.last_open_trigger = "Form Submission", n.popmake("open"))
                }, t.delay)
            })
        },
        admin_debug: function() {
            PUM.getPopup(this).popmake("open")
        }
    }, r(o).on("pumInit", ".pum", function() {
        var e, o, t = PUM.getPopup(this),
            n = t.popmake("getSettings").triggers || [];
        if (n.length)
            for (o = 0; o < n.length; o += 1) e = n[o], t.popmake("addTrigger", e.type, e.settings)
    })
}(jQuery, document),
function(a) {
    "use strict";
    var n = "color,date,datetime,datetime-local,email,hidden,month,number,password,range,search,tel,text,time,url,week".split(","),
        i = "select,textarea".split(","),
        r = /\[([^\]]*)\]/g;
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        if (null == this) throw new TypeError;
        var o = Object(this),
            t = o.length >>> 0;
        if (0 == t) return -1;
        var n = 0;
        if (0 < arguments.length && ((n = Number(arguments[1])) != n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -1 / 0 && (n = (0 < n || -1) * Math.floor(Math.abs(n)))), t <= n) return -1;
        for (var i = 0 <= n ? n : Math.max(t - Math.abs(n), 0); i < t; i++)
            if (i in o && o[i] === e) return i;
        return -1
    }), a.fn.popmake.utilities = {
        scrollTo: function(e, o) {
            var t = a(e) || a();
            t.length && a("html, body").animate({
                scrollTop: t.offset().top - 100
            }, 1e3, "swing", function() {
                var e = t.find(':input:not([type="button"]):not([type="hidden"]):not(button)').eq(0);
                e.hasClass("wp-editor-area") ? tinyMCE.execCommand("mceFocus", !1, e.attr("id")) : e.focus(), "function" == typeof o && o()
            })
        },
        inArray: function(e, o) {
            return !!~o.indexOf(e)
        },
        convert_hex: function(e, o) {
            return e = e.replace("#", ""), "rgba(" + parseInt(e.substring(0, 2), 16) + "," + parseInt(e.substring(2, 4), 16) + "," + parseInt(e.substring(4, 6), 16) + "," + o / 100 + ")"
        },
        debounce: function(t, n) {
            var i;
            return function() {
                var e = this,
                    o = arguments;
                window.clearTimeout(i), i = window.setTimeout(function() {
                    t.apply(e, o)
                }, n)
            }
        },
        throttle: function(e, o) {
            function t() {
                n = !1
            }
            var n = !1;
            return function() {
                n || (e.apply(this, arguments), window.setTimeout(t, o), n = !0)
            }
        },
        getXPath: function(e) {
            var t, n, i, r, s = [];
            return a.each(a(e).parents(), function(e, o) {
                return r = a(o), t = r.attr("id") || "", n = r.attr("class") || "", i = r.get(0).tagName.toLowerCase(), r = r.parent().children(i).index(r), "body" !== i && (0 < n.length && (n = (n = n.split(" "))[0]), void s.push(i + (0 < t.length ? "#" + t : 0 < n.length ? "." + n.split(" ").join(".") : ":eq(" + r + ")")))
            }), s.reverse().join(" > ")
        },
        strtotime: function(e, o) {
            var t, n, i, r, s, a, p, u, l;
            if (!e) return !1;
            if ((n = (e = e.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase()).match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/)) && n[2] === n[4])
                if (1901 < n[1]) switch (n[2]) {
                    case "-":
                        return 12 < n[3] || 31 < n[5] ? !1 : new Date(n[1], parseInt(n[3], 10) - 1, n[5], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3;
                    case ".":
                        return !1;
                    case "/":
                        return 12 < n[3] || 31 < n[5] ? !1 : new Date(n[1], parseInt(n[3], 10) - 1, n[5], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3
                } else if (1901 < n[5]) switch (n[2]) {
                    case "-":
                    case ".":
                        return 12 < n[3] || 31 < n[1] ? !1 : new Date(n[5], parseInt(n[3], 10) - 1, n[1], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3;
                    case "/":
                        return 12 < n[1] || 31 < n[3] ? !1 : new Date(n[5], parseInt(n[1], 10) - 1, n[3], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3
                } else switch (n[2]) {
                    case "-":
                        return 12 < n[3] || 31 < n[5] || n[1] < 70 && 38 < n[1] ? !1 : (r = 0 <= n[1] && n[1] <= 38 ? +n[1] + 2e3 : n[1], new Date(r, parseInt(n[3], 10) - 1, n[5], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3);
                    case ".":
                        return 70 <= n[5] ? !(12 < n[3] || 31 < n[1]) && new Date(n[5], parseInt(n[3], 10) - 1, n[1], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3 : n[5] < 60 && !n[6] && (!(23 < n[1] || 59 < n[3]) && (i = new Date, new Date(i.getFullYear(), i.getMonth(), i.getDate(), n[1] || 0, n[3] || 0, n[5] || 0, n[9] || 0) / 1e3));
                    case "/":
                        return 12 < n[1] || 31 < n[3] || n[5] < 70 && 38 < n[5] ? !1 : (r = 0 <= n[5] && n[5] <= 38 ? +n[5] + 2e3 : n[5], new Date(r, parseInt(n[1], 10) - 1, n[3], n[6] || 0, n[7] || 0, n[8] || 0, n[9] || 0) / 1e3);
                    case ":":
                        return 23 < n[1] || 59 < n[3] || 59 < n[5] ? !1 : (i = new Date, new Date(i.getFullYear(), i.getMonth(), i.getDate(), n[1] || 0, n[3] || 0, n[5] || 0) / 1e3)
                }
            if ("now" === e) return null === o || isNaN(o) ? (new Date).getTime() / 1e3 || 0 : o || 0;
            if (t = Date.parse(e), !isNaN(t)) return t / 1e3 || 0;

            function c(e) {
                var o = e.split(" "),
                    t = o[0],
                    n = o[1].substring(0, 3),
                    i = /\d+/.test(t),
                    e = ("last" === t ? -1 : 1) * ("ago" === o[2] ? -1 : 1);
                if (i && (e *= parseInt(t, 10)), p.hasOwnProperty(n) && !o[1].match(/^mon(day|\.)?$/i)) return s["set" + p[n]](s["get" + p[n]]() + e);
                if ("wee" === n) return s.setDate(s.getDate() + 7 * e);
                if ("next" === t || "last" === t) t = t, e = e, void 0 !== (n = a[n = n]) && (0 === (n = n - s.getDay()) ? n = 7 * e : 0 < n && "last" === t ? n -= 7 : n < 0 && "next" === t && (n += 7), s.setDate(s.getDate() + n));
                else if (!i) return;
                return 1
            }
            if (s = o ? new Date(1e3 * o) : new Date, a = {
                    sun: 0,
                    mon: 1,
                    tue: 2,
                    wed: 3,
                    thu: 4,
                    fri: 5,
                    sat: 6
                }, p = {
                    yea: "FullYear",
                    mon: "Month",
                    day: "Date",
                    hou: "Hours",
                    min: "Minutes",
                    sec: "Seconds"
                }, o = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", !(n = e.match(new RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)|(last|next)\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?))(\\sago)?", "gi")))) return !1;
            for (l = 0, u = n.length; l < u; l += 1)
                if (!c(n[l])) return !1;
            return s.getTime() / 1e3
        },
        serializeObject: function(e) {
            a.extend({}, e);
            var o = {},
                t = a.extend(!0, {
                    include: [],
                    exclude: [],
                    includeByClass: ""
                }, e);
            return this.find(":input").each(function() {
                var e;
                !this.name || this.disabled || window.PUM.utilities.inArray(this.name, t.exclude) || t.include.length && !window.PUM.utilities.inArray(this.name, t.include) || -1 === this.className.indexOf(t.includeByClass) || (e = this.name.replace(r, "[$1").split("["))[0] && (this.checked || window.PUM.utilities.inArray(this.type, n) || window.PUM.utilities.inArray(this.nodeName.toLowerCase(), i)) && ("checkbox" === this.type && e.push(""), function e(o, t, n) {
                    var i = t[0];
                    1 < t.length ? (o[i] || (o[i] = t[1] ? {} : []), e(o[i], t.slice(1), n)) : o[i = i || o.length] = n
                }(o, e, a(this).val()))
            }), o
        }
    }, a.fn.popmake.utilies = a.fn.popmake.utilities, window.PUM = window.PUM || {}, window.PUM.utilities = window.PUM.utilities || {}, window.PUM.utilities = a.extend(window.PUM.utilities, a.fn.popmake.utilities)
}(jQuery, document),
function(e) {
    function o(n, o) {
        var t = {},
            i = {};

        function r(e, o, t) {
            return e[o] = t, e
        }

        function s(e, o) {
            var t, n = e.match(p.key);
            try {
                o = JSON.parse(o)
            } catch (e) {}
            for (; void 0 !== (t = n.pop());) p.push.test(t) ? o = r([], function(e) {
                void 0 === i[e] && (i[e] = 0);
                return i[e]++
            }(e.replace(/\[\]$/, "")), o) : p.fixed.test(t) ? o = r([], t, o) : p.named.test(t) && (o = r({}, t, o));
            return o
        }

        function e() {
            return t
        }
        this.addPair = function(e) {
            return p.validate.test(e.name) && (e = s(e.name, "checkbox" === a('[name="' + (e = e).name + '"]', o).attr("type") && "1" === e.value || e.value), t = n.extend(!0, t, e)), this
        }, this.addPairs = function(e) {
            if (!n.isArray(e)) throw new Error("formSerializer.addPairs expects an Array");
            for (var o = 0, t = e.length; o < t; o++) this.addPair(e[o]);
            return this
        }, this.serialize = e, this.serializeJSON = function() {
            return JSON.stringify(t)
        }
    }
    var t, a, p;
    a = (t = e).jQuery || e.Zepto || e.ender || e.$, o.patterns = p = {
        validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
        key: /[a-z0-9_]+|(?=\[\])/gi,
        push: /^$/,
        fixed: /^\d+$/,
        named: /^[a-z0-9_]+$/i
    }, o.serializeObject = function() {
        var e = (this.is("form") ? this : this.find(":input")).serializeArray();
        return new o(a, this).addPairs(e).serialize()
    }, o.serializeJSON = function() {
        var e = (this.is("form") ? this : this.find(":input")).serializeArray();
        return new o(a, this).addPairs(e).serializeJSON()
    }, void 0 !== a.fn && (a.fn.pumSerializeObject = o.serializeObject, a.fn.pumSerializeJSON = o.serializeJSON), t.FormSerializer = o
}(this),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/calderaforms.js")
}({
    "./assets/js/src/integration/calderaforms.js": function(e, o, t) {
        "use strict";
        t.r(o);
        var n, o = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
            i = t.n(o);
        (0, window.jQuery)(document).on("cf.ajax.request", function(e, o) {
            return n = o.$form
        }).on("cf.submission", function(e, o) {
            var t;
            "complete" !== o.data.status && "success" !== o.data.status || (t = n.attr("id").split("_"), t = (o = i()(t, 2))[0], o = void 0 === (o = o[1]) ? null : o, window.PUM.integrations.formSubmission(n, {
                formProvider: "calderaforms",
                formId: t,
                formInstanceId: o,
                extras: {
                    state: window.cfstate.hasOwnProperty(t) ? window.cfstate[t] : null
                }
            }))
        })
    },
    "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(e, o) {
        e.exports = function(e, o) {
            (null == o || o > e.length) && (o = e.length);
            for (var t = 0, n = new Array(o); t < o; t++) n[t] = e[t];
            return n
        }
    },
    "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": function(e, o) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e
        }
    },
    "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": function(e, o) {
        e.exports = function(e, o) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var t = [],
                    n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value), !o || t.length !== o); n = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return t
            }
        }
    },
    "./node_modules/@babel/runtime/helpers/nonIterableRest.js": function(e, o) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    "./node_modules/@babel/runtime/helpers/slicedToArray.js": function(e, o, t) {
        var n = t("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
            i = t("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
            r = t("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
            s = t("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
        e.exports = function(e, o) {
            return n(e) || i(e, o) || r(e, o) || s()
        }
    },
    "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(e, o, t) {
        var n = t("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
        e.exports = function(e, o) {
            if (e) {
                if ("string" == typeof e) return n(e, o);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(e, o) : void 0
            }
        }
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/contactform7.js")
}({
    "./assets/js/src/integration/contactform7.js": function(e, o, t) {
        "use strict";
        t.r(o);
        var o = t("./node_modules/@babel/runtime/helpers/typeof.js"),
            i = t.n(o),
            r = window.jQuery;
        r(document).on("wpcf7mailsent", function(e, o) {
            var t = e.detail.contactFormId,
                n = r(e.target),
                e = (e.detail.id || e.detail.unitTag).split("-").pop().replace("o", "");
            window.PUM.integrations.formSubmission(n, {
                formProvider: "contactform7",
                formId: t,
                formInstanceId: e,
                extras: {
                    details: o
                }
            });
            o = n.find("input.wpcf7-pum"), o = !!o.length && JSON.parse(o.val());
            "object" === i()(o) && void 0 !== o.closedelay && 3 <= o.closedelay.toString().length && (o.closedelay = o.closedelay / 1e3), window.PUM.forms.success(n, o)
        })
    },
    "./node_modules/@babel/runtime/helpers/typeof.js": function(o, e) {
        function t(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? o.exports = t = function(e) {
                return typeof e
            } : o.exports = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t(e)
        }
        o.exports = t
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/formidableforms.js")
}({
    "./assets/js/src/integration/formidableforms.js": function(e, o) {
        var r = window.jQuery;
        r(document).on("frmFormComplete", function(e, o, t) {
            var n = r(o),
                i = n.find('input[name="form_id"]').val(),
                o = PUM.getPopup(n.find('input[name="pum_form_popup_id"]').val());
            window.PUM.integrations.formSubmission(n, {
                popup: o,
                formProvider: "formidableforms",
                formId: i,
                extras: {
                    response: t
                }
            })
        })
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/gravityforms.js")
}({
    "./assets/js/src/integration/gravityforms.js": function(e, o, t) {
        "use strict";
        t.r(o);
        var o = t("./node_modules/@babel/runtime/helpers/typeof.js"),
            n = t.n(o),
            i = window.jQuery,
            r = {};
        i(document).on("gform_confirmation_loaded", function(e, o) {
            var t = i("#gform_confirmation_wrapper_" + o + ",#gforms_confirmation_message_" + o)[0];
            window.PUM.integrations.formSubmission(t, {
                formProvider: "gravityforms",
                formId: o
            }), window.PUM.forms.success(t, r[o] || {})
        }), i(function() {
            i(".gform_wrapper > form").each(function() {
                var e = i(this),
                    o = e.attr("id").replace("gform_", ""),
                    e = e.find("input.gforms-pum"),
                    e = !!e.length && JSON.parse(e.val());
                e && "object" === n()(e) && ("object" === n()(e) && void 0 !== e.closedelay && 3 <= e.closedelay.toString().length && (e.closedelay = e.closedelay / 1e3), r[o] = e)
            })
        })
    },
    "./node_modules/@babel/runtime/helpers/typeof.js": function(o, e) {
        function t(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? o.exports = t = function(e) {
                return typeof e
            } : o.exports = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t(e)
        }
        o.exports = t
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/mc4wp.js")
}({
    "./assets/js/src/integration/mc4wp.js": function(e, o) {
        var r = window.jQuery;
        r(function() {
            "undefined" != typeof mc4wp && mc4wp.forms.on("success", function(e, o) {
                var t = r(e.element),
                    n = e.id,
                    i = r(".mc4wp-form-" + e.id).index(t) + 1;
                window.PUM.integrations.formSubmission(t, {
                    formProvider: "mc4wp",
                    formId: n,
                    formInstanceId: i,
                    extras: {
                        form: e,
                        data: o
                    }
                })
            })
        })
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/ninjaforms.js")
}({
    "./assets/js/src/integration/ninjaforms.js": function(e, o, t) {
        "use strict";
        t.r(o);
        var o = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
            a = t.n(o),
            p = window.jQuery,
            n = !1;
        p(function() {
            "undefined" != typeof Marionette && "undefined" != typeof nfRadio && !1 === n && new(n = Marionette.Object.extend({
                initialize: function() {
                    this.listenTo(nfRadio.channel("forms"), "submit:response", this.popupMaker)
                },
                popupMaker: function(e, o, t, n) {
                    var i = p("#nf-form-" + n + "-cont"),
                        r = n.split("_"),
                        s = a()(r, 2),
                        n = s[0],
                        r = s[1],
                        s = void 0 === r ? null : r,
                        r = {};
                    e.errors && e.errors.length || (window.PUM.integrations.formSubmission(i, {
                        formProvider: "ninjaforms",
                        formId: n,
                        formInstanceId: s,
                        extras: {
                            response: e
                        }
                    }), e.data && e.data.actions && (r.openpopup = void 0 !== e.data.actions.openpopup, r.openpopup_id = r.openpopup ? parseInt(e.data.actions.openpopup) : 0, r.closepopup = void 0 !== e.data.actions.closepopup, r.closedelay = r.closepopup ? parseInt(e.data.actions.closepopup) : 0, r.closepopup && e.data.actions.closedelay && (r.closedelay = parseInt(e.data.actions.closedelay))), window.PUM.forms.success(i, r))
                }
            }))
        })
    },
    "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(e, o) {
        e.exports = function(e, o) {
            (null == o || o > e.length) && (o = e.length);
            for (var t = 0, n = new Array(o); t < o; t++) n[t] = e[t];
            return n
        }
    },
    "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": function(e, o) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e
        }
    },
    "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": function(e, o) {
        e.exports = function(e, o) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var t = [],
                    n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value), !o || t.length !== o); n = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return t
            }
        }
    },
    "./node_modules/@babel/runtime/helpers/nonIterableRest.js": function(e, o) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    "./node_modules/@babel/runtime/helpers/slicedToArray.js": function(e, o, t) {
        var n = t("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
            i = t("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
            r = t("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
            s = t("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
        e.exports = function(e, o) {
            return n(e) || i(e, o) || r(e, o) || s()
        }
    },
    "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(e, o, t) {
        var n = t("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
        e.exports = function(e, o) {
            if (e) {
                if ("string" == typeof e) return n(e, o);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(e, o) : void 0
            }
        }
    }
}),
function(t) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(e, o, t) {
        i.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(o, e) {
        if (1 & e && (o = i(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) i.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, i.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(o, "a", o), o
    }, i.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, i.p = "", i(i.s = "./assets/js/src/integration/wpforms.js")
}({
    "./assets/js/src/integration/wpforms.js": function(e, o) {
        var r = window.jQuery;
        r(document).on("wpformsAjaxSubmitSuccess", ".wpforms-ajax-form", function(e, o) {
            var t = r(this),
                n = t.data("formid"),
                i = r("form#" + t.attr("id")).index(t) + 1;
            window.PUM.integrations.formSubmission(t, {
                formProvider: "wpforms",
                formId: n,
                formInstanceId: i
            })
        })
    }
}),
function(e) {
    ("object" != typeof exports || "undefined" == typeof module) && "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    "use strict";

    function e(o) {
        var t = this.constructor;
        return this.then(function(e) {
            return t.resolve(o()).then(function() {
                return e
            })
        }, function(e) {
            return t.resolve(o()).then(function() {
                return t.reject(e)
            })
        })
    }
    var o = setTimeout;

    function p(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function n() {}

    function r(e) {
        if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
    }

    function i(t, n) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, r._immediateFn(function() {
            var e, o = 1 === t._state ? n.onFulfilled : n.onRejected;
            if (null !== o) {
                try {
                    e = o(t._value)
                } catch (e) {
                    return void a(n.promise, e)
                }
                s(n.promise, e)
            } else(1 === t._state ? s : a)(n.promise, t._value)
        })) : t._deferreds.push(n)
    }

    function s(o, e) {
        try {
            if (e === o) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if (e instanceof r) return o._state = 3, o._value = e, void u(o);
                if ("function" == typeof t) return void c((n = t, i = e, function() {
                    n.apply(i, arguments)
                }), o)
            }
            o._state = 1, o._value = e, u(o)
        } catch (e) {
            a(o, e)
        }
        var n, i
    }

    function a(e, o) {
        e._state = 2, e._value = o, u(e)
    }

    function u(e) {
        2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
            e._handled || r._unhandledRejectionFn(e._value)
        });
        for (var o = 0, t = e._deferreds.length; o < t; o++) i(e, e._deferreds[o]);
        e._deferreds = null
    }

    function l(e, o, t) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof o ? o : null, this.promise = t
    }

    function c(e, o) {
        var t = !1;
        try {
            e(function(e) {
                t || (t = !0, s(o, e))
            }, function(e) {
                t || (t = !0, a(o, e))
            })
        } catch (e) {
            if (t) return;
            t = !0, a(o, e)
        }
    }
    r.prototype.catch = function(e) {
        return this.then(null, e)
    }, r.prototype.then = function(e, o) {
        var t = new this.constructor(n);
        return i(this, new l(e, o, t)), t
    }, r.prototype.finally = e, r.all = function(o) {
        return new r(function(i, r) {
            if (!p(o)) return r(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(o);
            if (0 === s.length) return i([]);
            var a = s.length;
            for (var e = 0; e < s.length; e++) ! function o(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function(e) {
                            o(t, e)
                        }, r)
                    }
                    s[t] = e, 0 == --a && i(s)
                } catch (e) {
                    r(e)
                }
            }(e, s[e])
        })
    }, r.resolve = function(o) {
        return o && "object" == typeof o && o.constructor === r ? o : new r(function(e) {
            e(o)
        })
    }, r.reject = function(t) {
        return new r(function(e, o) {
            o(t)
        })
    }, r.race = function(i) {
        return new r(function(e, o) {
            if (!p(i)) return o(new TypeError("Promise.race accepts an array"));
            for (var t = 0, n = i.length; t < n; t++) r.resolve(i[t]).then(e, o)
        })
    }, r._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        o(e, 0)
    }, r._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var t = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();
    "Promise" in t ? t.Promise.prototype.finally || (t.Promise.prototype.finally = e) : t.Promise = r
});

function vc_js() {
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}

function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript", script.readyState && (script.onreadystatechange = function() {
        "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
    }), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
        var $ = window.jQuery,
            ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
    })
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = ui.newPanel.find(".vc_round-chart"),
            $line_charts = ui.newPanel.find(".vc_line-chart"),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
            jQuery(this).isotope("layout")
        })
    }
}

function initVideoBackgrounds() {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function() {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
        insertYoutubeVideoAsBackground($element, youtubeId, counter++)
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function(event) {
                event.target.mute().setLoop(!0)
            }
        }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
        vcResizeVideoBackground($element)
    })
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}

function vcExtractYoutubeId(url) {
    if (void 0 === url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}

function vc_googleMapsPointer() {
    var $ = window.jQuery,
        $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.click(function() {
        $("iframe", this).css("pointer-events", "auto")
    }), $wpbGmapsWidget.mouseleave(function() {
        $("iframe", this).css("pointer-events", "none")
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}

function vc_setHoverBoxPerspective(hoverBox) {
    hoverBox.each(function() {
        var $this = jQuery(this),
            width = $this.width(),
            perspective = 4 * width + "px";
        $this.css("perspective", perspective)
    })
}

function vc_setHoverBoxHeight(hoverBox) {
    hoverBox.each(function() {
        var $this = jQuery(this),
            hoverBoxInner = $this.find(".vc-hoverbox-inner");
        hoverBoxInner.css("min-height", 0);
        var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
            backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
            hoverBoxHeight = frontHeight > backHeight ? frontHeight : backHeight;
        hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
    })
}

function vc_prepareHoverBox() {
    var hoverBox = jQuery(".vc-hoverbox");
    vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
        ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
            var this_element = jQuery(this),
                sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
                sliderFx = this_element.attr("data-flex_fx"),
                slideshow = !0;
            0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0
            })
        })
    }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
        0 < jQuery(".wpb_googleplus").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
        0 < jQuery(".wpb_pinterest").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
        void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
            jQuery(this).find(".vc_single_bar").each(function(index) {
                var $this = jQuery(this),
                    bar = $this.find(".vc_bar"),
                    val = bar.data("percentage-value");
                setTimeout(function() {
                    bar.css({
                        width: val + "%"
                    })
                }, 200 * index)
            })
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
        void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
            jQuery(this).addClass("wpb_start_animation animated")
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
        function event(e) {
            e && e.preventDefault && e.preventDefault();
            var title = jQuery(this),
                element = title.closest(".vc_toggle"),
                content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300,
                complete: function() {
                    element.removeClass("vc_toggle_active")
                }
            }) : content.slideDown({
                duration: 300,
                complete: function() {
                    element.addClass("vc_toggle_active")
                }
            })
        }
        $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
    }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
        if (jQuery.ui) {
            var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
            $call.each(function(index) {
                var $tabs, interval = jQuery(this).attr("data-interval"),
                    tabs_array = [];
                if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        beforeActivate: function(event, ui) {
                            1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    }), interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (e) {
                    window.console && window.console.log && console.log(e)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
                    return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
                    if (e.preventDefault(), old_version) {
                        var index = $tabs.tabs("option", "selected");
                        jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                    } else {
                        var index = $tabs.tabs("option", "active"),
                            length = $tabs.find(".wpb_tab").length;
                        index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                    }
                })
            })
        }
    }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
        jQuery(".wpb_accordion").each(function(index) {
            var $tabs, $this = jQuery(this),
                active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
                collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
            $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function(event, ui) {
                    void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                }
            }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
        })
    }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
        var layout_modes = {
            fitrows: "fitRows",
            masonry: "masonry"
        };
        jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
            var $container = jQuery(this),
                $thumbs = $container.find(".wpb_thumbnails"),
                layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
            }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data("isotope");
                jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                    filter: jQuery(this).attr("data-filter")
                })
            }), jQuery(window).bind("load resize", function() {
                $thumbs.isotope("layout")
            })
        })
    }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
        ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
            var $this = jQuery(this);
            if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                $this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1");
                var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                carousele_li.css({
                    "margin-right": carousele_li.css("margin-left"),
                    "margin-left": 0
                });
                var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
                })
            }
        })
    }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
        jQuery(".wpb_gallery_slides").each(function(index) {
            var $imagesGrid, this_element = jQuery(this);
            if (this_element.hasClass("wpb_slider_nivo")) {
                var sliderTimeout = 1e3 * this_element.attr("data-interval");
                0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })
            } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                $imagesGrid.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                })
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
        })
    }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
        try {
            jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function() {
                    location.href.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
                },
                social_tools: ""
            })
        } catch (err) {
            window.console && window.console.log && console.log(err)
        }
    }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
        return !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
        function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function(key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var $el_full = $el.next(".vc_row-full-width");
                if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                    var el_margin_left = parseInt($el.css("margin-left"), 10),
                        el_margin_right = parseInt($el.css("margin-right"), 10),
                        offset = 0 - $el_full.offset().left - el_margin_left,
                        width = $(window).width();
                    if ($el.css({
                            position: "relative",
                            left: offset,
                            "box-sizing": "border-box",
                            width: $(window).width()
                        }), !$el.data("vcStretchContent")) {
                        var padding = -1 * offset;
                        0 > padding && (padding = 0);
                        var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                        0 > paddingRight && (paddingRight = 0), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        })
                    }
                    $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    })
                }
            }), $(document).trigger("vc-full-width-row", $elements)
        }

        function fullHeightRow() {
            var $element = $(".vc_row-o-full-height:first");
            if ($element.length) {
                var $window, windowHeight, offsetTop, fullHeight;
                $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
            }
            $(document).trigger("vc-full-height-row", $element)
        }
        var $ = window.jQuery;
        $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(),
            function() {
                (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                    "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
                })
            }(), vc_initVideoBackgrounds(),
            function() {
                var vcSkrollrOptions, callSkrollInit = !1;
                window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                    var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
                    callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
                }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
                    forceHeight: !1,
                    smoothScrolling: !1,
                    mobileCheck: function() {
                        return !1
                    }
                }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
            }()
    }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"),
        $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
        jQuery(this).isotope("layout")
    })
}), window.vc_googleMapsPointer, jQuery(document).ready(vc_prepareHoverBox), jQuery(window).resize(vc_prepareHoverBox), jQuery(document).ready(function($) {
    window.vc_js()
});