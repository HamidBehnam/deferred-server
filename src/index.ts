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
    .example('$0 start -p 3030 -o http://localhost:4040', 'start the deferred-server to serve the files in the given directory')
    .option('port', {
        alias: 'p',
        type: 'number',
        description: 'port'
    })
    .option('origin', {
        alias: 'o',
        type: 'string',
        description: 'allowed origin'
    })
    .option('credentials', {
        alias: 'c',
        type: 'boolean',
        description: 'credentials'
    })
    .option('replace', {
        alias: 'r',
        type: 'boolean',
        description: 'replace success status'
    })
    .check((argv) => {
        return config.validateAndApplyArgs(argv);
    })
    .argv

