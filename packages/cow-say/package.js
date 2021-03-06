Package.describe({
  'name': 'brucejo:cow-say',
  'version': '0.0.1',
  // Brief, one-line summary of the package.
  'summary': 'Test NPM dependency build fail',
  // URL to the Git repository containing the source code for this package.
  'git': '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  'documentation': 'README.md'
});

Npm.depends({
  'cowsay': '1.4.0'
});

Package.onUse(function onUse(api) {
  api.use('ecmascript');
  api.addFiles(['say.js'], 'server');
});

Package.onTest(function onTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
});

