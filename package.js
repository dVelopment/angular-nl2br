var options = {
  "version": "1.0.3",
  "where": "client",
  "packageName": "dvelopment:angular-nl2br"
};

// meta data
Package.describe({
  name: options.packageName,
  version: options.version,
  summary: 'An angular filter that turns new lines into line breaks',
  git: 'git@github.com:goodeggs/angular-nl2br.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0', 'METEOR@1.0');
  api.use('angular:angular@1.2.0', options.where);
  api.addFiles('angular-nl2br.js', options.where);
});
