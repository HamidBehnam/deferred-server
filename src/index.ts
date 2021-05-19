#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { server } from './server';
import { config } from './config';

yargs(hideBin(process.argv))
    .usage('Usage: $0 <command> [options]')
    .command('start', 'Starts the deferred server', () => {}, (argv: any) => {
        server.start();
    })
    .demandCommand(1)
    .example('deferred-server start -p 4040 -o http://localhost:4040', 'start the deferred-server to serve the files in the current directory')
    .option('port', {
        alias: 'p',
        type: 'number',
        description: 'port'
    })
    .option('origin', {
        alias: 'o',
        type: 'string',
        description: "Allowed Origin (optional, default: accessible from all origins)"
    })
    .option('credentials', {
        alias: 'c',
        type: 'boolean',
        description: 'Credentials (optional, default: true)'
    })
    .option('replace', {
        alias: 'r',
        type: 'boolean',
        description: 'Replace success status code 204 with 200 (optional, default: true)'
    })
    .check((argv) => {
        return config.validateAndApplyArgs(argv);
    })
    .argv

