(function(){dust.register("index",body_0);var blocks={"main":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layout",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div id=\"tab-hello\"><div class=\"wrapper-vertical\"><div class=\"wrapper-horizontal\"><div id=\"avatar\"></div><div id=\"hello\"><div id=\"title\">").reference(ctx._get(false, ["title"]),ctx,"h").write("</div><p id=\"description\">").reference(ctx._get(false, ["description"]),ctx,"h").write("</p><div id=\"social\"><a href=\"mailto:").reference(ctx._get(false, ["email"]),ctx,"h").write("?Subject=Hi%20Framp\" class=\"icon-envelope-alt\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["github"]),ctx,"h").write("\" class=\"icon-github\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["bitbucket"]),ctx,"h").write("\" class=\"icon-bitbucket\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["facebook"]),ctx,"h").write("\" class=\"icon-facebook-sign\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["plus"]),ctx,"h").write("\" class=\"icon-google-plus\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["twitter"]),ctx,"h").write("\" class=\"icon-twitter\" target=\"_blank\"></a><a href=\"").reference(ctx._get(false, ["linkedin"]),ctx,"h").write("\" class=\"icon-linkedin\" target=\"_blank\"></a></div></div><div class=\"clear\"></div></div></div></div>");}return body_0;})();
(function(){dust.register("layout",body_0);function body_0(chk,ctx){return chk.exists(ctx._get(false, ["skipLayout"]),ctx,{"else":body_1,"block":body_3},null);}function body_1(chk,ctx){return chk.write("<!DOCTYPE html><html class=\"no-js\"><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width\"/><title>").reference(ctx._get(false, ["title"]),ctx,"h").write("</title><link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css'><!--<script src=\"http://code.jquery.com/jquery-1.9.1.min.js\"></script>--><script src=\"/js/main.js\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\"/></head><body>").block(ctx.getBlock("main"),ctx,{"block":body_2},null).write("</body></html>");}function body_2(chk,ctx){return chk;}function body_3(chk,ctx){return chk.block(ctx.getBlock("main"),ctx,{"block":body_4},null);}function body_4(chk,ctx){return chk;}return body_0;})();