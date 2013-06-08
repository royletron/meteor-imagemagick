Package.describe({
  summary: "Imagemagick future-wrapped API"
});

Npm.depends({
    "imagemagick"
});

Package.on_use(function (api) {
  api.add_files("imagemagick.js", "server");
});
