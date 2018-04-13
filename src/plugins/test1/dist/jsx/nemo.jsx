/*
Pre-U, University of Twente, august 2016, Tjibbe van der Laan
 */

/**
 * nm lists all Dreamweaver Javascript functions. Find more at
 * http://help.adobe.com/en_US/dreamweaver/cs/extend/WS5b3ccc516d4fbf351e63e3d117f53d6592-7ff8.html
 */
function nm() {}
nm.getFolderPath = nemo_getFolderPath;
nm.browseForFolder = nemo_browseForFolder;
nm.confirm = nemo_confirm;

/**
 * nemo_getFolderPath retrieves the current projectfolder, by
 * executing the Dreamweaver JavaScript function dw.getDocumentPath. 
 * Dreamweaver returns a string, which is 'almost' the absolute url. It 
 * returns something like 'file:\\\D|NM1234\index.html'. With regex, this is
 * translated to D:\NM1234\ and returned
 * @return {String} Folderpath
 */
function nemo_getFolderPath() {
    var REGEX_PATH = /^(.*[\\\/])/;
    var folderPath;
    // get document path
    folderPath = dw.getDocumentPath("document");

    // remove document file from path
    folderPath = folderPath && REGEX_PATH.exec(folderPath);
    folderPath = folderPath.length > 0 && folderPath[0];

    // remove 'file' from path
    folderPath = folderPath.replace(/^file\:[\\|\/]+/i, '');

    // change | to :
    folderPath = folderPath.replace(/\|/, '\:');

    return folderPath;
}

/**
 * nemo_browseFolderPath triggers the 'browseForFolderURL' function of 
 * Dreamweaver to open up a window to select a folder. By default, it tries
 * to open dir directory above the projectfolder, thus /NM_1234/ instead of
 * /NM_1234/_web/
 * @return {String} Absolute folder url
 */
function nemo_browseForFolder() {
    // var documentPath = dw.getDocumentPath("document");
    // documentPath.chDir();

    var documentPath = dw.getDocumentPath("document");
    var headPath = documentPath.replace(/\_web[\s\S]*/i, '');

    // var parentPath = documentPath.replace(documentName, '');
    // new DWUri(uri)
    var folderPath = dreamweaver.browseForFolderURL('Save file to folder', headPath);

    // remove 'file' from path
    folderPath = folderPath.replace(/^file\:[\\|\/]+/i, '');

    // change | to :
    folderPath = folderPath.replace(/\|/, '\:');
    
    return folderPath;
}

/**
 * nemo_confirm utiliazes the onboard Dreamweaver confirm function,
 * which is nicer designed than the 'node' confirm window
 * @param  {String} message Message wich will be asked to the user
 */
function nemo_confirm(message) {
    return confirm(message);
}