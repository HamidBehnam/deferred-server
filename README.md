# Deferred Server
## Install
`npm install deferred-server -g`

## Usage
`cd <directory>`

`deferred-server start`

Deferred server will serve the files in `<directory>`

`http://localhost:3000/<file-name.ext>/<delay in milliseconds>`

For instance if there's a `db.json` file in the current directory, to server this file with 5 seconds delay:

`http://localhost:3000/db.json/5000`

To Serve the file with no delay:

`http://localhost:3000/db.json/0` or simply `http://localhost:3000/db.json`


## Options
### Setting the port `-p`
`deferred-server start -p 4040`

`-p` is optional and if it's missed the default port will be used which is `3000`.

### Setting the allowed origin `-o`
Deferred Server accepts requests from all domains by default, for security reasons it's possible to set the 
specific origin:

`deferred-server start -o http://localhost:4040`

The `origin` option also accepts RegExp values:

`deferred-server start -o https?://([a-z0-9]+[.])*localhost[:][0-9]+`

### Enabling the credentials `-c`
This option is to enable credentials if server needs to process requests which contain credentials.

This option is enabled by default, to disable the credentials:

`deferred-server start -c false`

### Replacing the 204 status code `-r`
Some older browsers and smart TVs have issues in dealing with 204 success status code, 
this option is to replace the 204 status code with 200.

This option is enabled by default to disable the code replacement: 

`deferred-server start -r false`