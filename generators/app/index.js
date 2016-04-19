'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.directory(
      this.templatePath('.'),
      this.destinationPath('.')
    );
  }
});
