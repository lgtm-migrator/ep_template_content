var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_template_content/templates/editbarButtons.ejs");
  return cb();
}

