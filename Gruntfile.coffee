module.exports = (grunt) ->
require('load-grunt-tasks') grunt
grunt.loadNpmTasks('grunt-bump');
grunt.initConfig({
    bump: {
      options: {
        files: ['package.json', 'package-lock.json'],
        updateConfigs: ['pkg', 'package-lock'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'package-lock.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false
      }
    },
  })