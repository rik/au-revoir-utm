const pageMod = require("page-mod");
const data = require("self").data;

exports.main = function() {
    pageMod.PageMod({
        include: ["*"],
        contentScriptFile: data.url("utm.js"),
        contentScriptWhen: "start"
    })
}