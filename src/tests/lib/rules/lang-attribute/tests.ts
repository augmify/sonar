/* eslint sort-keys: 0, no-undefined: 0 */

import { Rule } from '../../../../lib/types'; // eslint-disable-line no-unused-vars
import { RuleTest } from '../../../helpers/rule-test-type'; // eslint-disable-line no-unused-vars

import * as ruleRunner from '../../../helpers/rule-runner';

const tests: Array<RuleTest> = [
    {
        name: `'lang' attribute is not specified`,
        serverConfig:
`<!doctype html>
<html>
    <head>
        <title>test</title>
    </head>
    <body></body>
</html>`,
        reports: [{ message: `'lang' attribute not specified on the 'html' element` }]
    },
    {
        name: `'lang' attribute is specified with no value`,
        serverConfig:
`<!doctype html>
<html lang>
    <head>
        <title>test</title>
    </head>
    <body></body>
</html>`,
        reports: [{
            message: `empty 'lang' attribute specified on the 'html' element`,
            position: { column: 7, line: 1 }
        }]
    },
    {
        name: `'lang' attribute is specified and its value is an empty string`,
        serverConfig:
`<!doctype html>
<html lang="">
    <head>
        <title>test</title>
    </head>
    <body></body>
</html>`,
        reports: [{
            message: `empty 'lang' attribute specified on the 'html' element`,
            position: { column: 7, line: 1 }
        }]
    },
    {
        name: `'lang' attribute is specified and its value is not an empty string`,
        serverConfig:
`<!doctype html>
<html lang="en">
    <head>
        <title>test</title>
    </head>
    <body></body>
</html>`
    }
];

ruleRunner.testRule('lang-attribute', tests);