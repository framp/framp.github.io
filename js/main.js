/*! framp.me 07-02-2014 01:02:03 */
!function() {
    function a(a, b) {
        return b = b.shiftBlocks(c), a.partial("layout", b, null);
    }
    function b(a, b) {
        return b = b.shiftBlocks(c), a.write('<div id="tab-hello"><div class="wrapper-vertical"><div class="wrapper-horizontal"><div id="avatar" class="hexagon"><div class="hexagon-in1"><div class="hexagon-in2"><div class="hexagon-in2"><div class="hexagon-in2"><div class="hexagon-in3"><img src="http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=320" /></div></div></div></div></div></div><div id="hello"><div id="title">').reference(b._get(!1, [ "title" ]), b, "h").write('</div><pre id="description">').reference(b._get(!1, [ "description" ]), b, "h").write('</pre><div id="social"><a href="mailto:').reference(b._get(!1, [ "email" ]), b, "h").write('?Subject=Hi%20Framp" class="icon-envelope-alt" target="_blank"></a><a href="').reference(b._get(!1, [ "github" ]), b, "h").write('" class="icon-github" target="_blank"></a><a href="').reference(b._get(!1, [ "bitbucket" ]), b, "h").write('" class="icon-bitbucket" target="_blank"></a><a href="').reference(b._get(!1, [ "facebook" ]), b, "h").write('" class="icon-facebook-sign" target="_blank"></a><a href="').reference(b._get(!1, [ "plus" ]), b, "h").write('" class="icon-google-plus" target="_blank"></a><a href="').reference(b._get(!1, [ "twitter" ]), b, "h").write('" class="icon-twitter" target="_blank"></a><a href="').reference(b._get(!1, [ "linkedin" ]), b, "h").write('" class="icon-linkedin" target="_blank"></a></div></div><div class="clear"></div></div></div></div>');
    }
    dust.register("index", a);
    var c = {
        main: b
    };
    return a;
}(), function() {
    function a(a, c) {
        return a.exists(c._get(!1, [ "skipLayout" ]), c, {
            "else": b,
            block: d
        }, null);
    }
    function b(a, b) {
        return a.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/><title>').reference(b._get(!1, [ "title" ]), b, "h").write('</title><script src="http://code.jquery.com/jquery-1.9.1.min.js"></script><!--<script src="/js/main.js"></script>--><link rel="stylesheet" type="text/css" href="/css/main.css"/></head><body>').block(b.getBlock("main"), b, {
            block: c
        }, null).write("</body></html>");
    }
    function c(a) {
        return a;
    }
    function d(a, b) {
        return a.block(b.getBlock("main"), b, {
            block: e
        }, null);
    }
    function e(a) {
        return a;
    }
    return dust.register("layout", a), a;
}();