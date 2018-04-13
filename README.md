# Nemo Menu

### An [Adobe CEP plugin](https://github.com/Adobe-CEP/CEP-Resources) that serves as a menu for Nemo in Adobe Dreamweaver 2015.1 

## Content
1. [Getting started](#getting-started)
2. [Development](#development)
3. [Installation](#installation)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure to install Node, NPM, bower, and Gulp globally:
 - [Node & NPM](https://docs.npmjs.com/getting-started/installing-node)
 - [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


 
### Installing
For installing plugins in Dreamweaver, use Anastasiy's Extension Manager, hereafter refered to as the extension manager
 
1. Download the extension manager (https://install.anastasiy.com)
2. Unzip the download to a folder of your choice (e.g. `~/downloads/ExtensionManager/`)
3. Get the [latest release](### add url here ###) of Nemo Menu.
4. Install the plugin from its .zxp archive using the extension manager.

## Development
### Build a plugin
To create a build, first check if you update all version tags (see `/package.json`, and `/src/CSXC/manifest.xml`). Then first clean the /dist folder, using the following command:

(note: clean also removes the .zxp archive with package version equal to the version in `/package.json`.)

    gulp clean

Then build the new plugin to a new dist folder using the following command:

	gulp build

The build will be available in `/dist` (locally).

### Testing
To test your plugin in Dreamweaver, either copy the extension folder to  `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions` for Windows users, or compile the plugin to a .zxp archive (more on this later) and install using the extension manager.

note: for the first method you need to bypass the check for extension signatures. (see https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_6.x/CEP_6.1_HTML_Extension_Cookbook.pdf "Debugging Unsigned Extensions")

### Compile to `.zxp`
After a [build](#build-a-plugin) is created, the files can be certified and compiled into an `.zxp`-package with use of the ZXPSignCmd-application. All these steps are automated in the command:

    gulp sign

## Authors

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

