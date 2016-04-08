(function() {
  commands.addUserCommand(['root'], 'Open root directory', function(args) {
    root(Math.max(0, args.count));
  },
    {
      argCount: 0,
      count: true,
      literal: 0
    });

  function root(count) {
    let uri = content.document.location;
    let subdir = uri.pathname.split("/").slice(1, count + 1).join("/");
    liberator.assert(!/(about|mailto):/.test(uri.protocol)); // exclude these special protocols for now
    liberator.open(uri.protocol + "//" + (uri.host || "") + "/" + subdir);
  }
})();
