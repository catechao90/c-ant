#!/usr/bin/env node

'use strict';


var download = require('download-git-repo')
var program = require('commander');
var ora = require('ora')
var exists = require('fs').existsSync
var rm = require('rimraf').sync

program
    .version('0.0.1');
program
    .command('init')
    .action(function() {
        downloadAndGenerate(program.args[0])
    });

program.parse(process.argv);


function downloadAndGenerate (tmp) {
  var spinner = ora('start init the project')
  spinner.start()
  // Remove if local template exists
  if (exists(tmp)) rm(tmp)
  download("catechao90/ant-demo", tmp, { clone: false }, function (err) {
    spinner.stop()
    if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())    
  })
}