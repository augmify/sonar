/**
 * @fileoverview Options configuration for optionator.
 * @author Anton Molleda (molant)
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const optionator = require('optionator');

// ------------------------------------------------------------------------------
// Typedefs
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Initialization and Public Interface
// ------------------------------------------------------------------------------

// exports "parse(args)", "generateHelp()", and "generateHelpForOption(optionName)"

const opts = optionator({
    defaults: {
        concatRepeatedArrays: true,
        mergeRepeatedObjects: true
    },
    options: [
        {heading: 'Basic configuration'},
        {
            alias: 'c',
            description: 'Use configuration from this file or shareable config',
            option: 'config',
            type: 'path::String'
        },
        // {
        //     option: 'env',
        //     type: '[String]',
        //     description: 'Specify environments'
        // },
        {heading: 'Output'},
        {
            alias: 'o',
            description: 'Specify file to write report to',
            option: 'output-file',
            type: 'path::String'
        },
        {
            alias: 'f',
            default: 'stylish',
            description: 'Use a specific output format',
            option: 'format',
            type: 'String'
        },
        {heading: 'Miscellaneous'},
        {
            default: false,
            description: 'Output debugging information',
            option: 'debug',
            type: 'Boolean'
        },
        {
            alias: 'h',
            description: 'Show help',
            option: 'help',
            type: 'Boolean'
        },
        {
            alias: 'v',
            description: 'Output the version number',
            option: 'version',
            type: 'Boolean'
        }
    ],
    prepend: 'sonar [options] https://url.com [https://url2.com]'
});

module.exports = opts;