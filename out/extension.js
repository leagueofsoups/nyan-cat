'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const f = require("file-url");
const path_1 = require("path");
let nyancat = vscode.window.createOutputChannel("NyanCat");
function activate(context) {
    nyancat.appendLine("activate()");
    const bar_item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    bar_item.text = "       ";
    bar_item.tooltip = "Nyan Cat";
    bar_item.show();
    const htmlDirPath = path_1.normalize(`${path_1.dirname(require.main.filename)}/vs/code/electron-sandbox/workbench`);
    nyancat.appendLine(`htmlDirPath: ${htmlDirPath}`);
    const htmlFilePath = path_1.normalize(`${htmlDirPath}/workbench.html`);
    const htmlBackupPath = path_1.normalize(`${htmlDirPath}/index-nyan-cat-backup.html`);
    // backup index.html
    backup();
    // inject js, add unsafe-inline csp
    injectScript();
    // inject configuration
    injectConfiguration();
    // manual inject configuration command
    let refreshCMD = vscode.commands.registerCommand('extension.NyanCatRefresh', () => {
        injectConfiguration();
        vscode.window.showInformationMessage("Nyan Cat: refresh successful, reload Window to take effect.", 'Reload Window').then(msg => {
            msg === 'Reload Window' && vscode.commands.executeCommand("workbench.action.reloadWindow");
        });
    });
    // uninstall command
    let uninstallCMD = vscode.commands.registerCommand('extension.NyanCatUninstall', () => {
        prepareUninstall();
        vscode.window.showInformationMessage('Ready to uninstall Nyan Cat completed!');
    });
    // reload command
    let reloadCMD = vscode.commands.registerCommand('extension.NyanCatReload', () => {
        try {
            fs.statSync(htmlBackupPath);
        }
        catch (err) {
            if (err)
                return;
        }
        prepareUninstall();
        backup();
        injectScript();
        injectConfiguration();
        vscode.window.showInformationMessage("Nyan Cat: reload successful, reload Window to take effect.", 'Reload Window').then(msg => {
            msg === 'Reload Window' && vscode.commands.executeCommand("workbench.action.reloadWindow");
        });
    });
    context.subscriptions.push(refreshCMD);
    context.subscriptions.push(uninstallCMD);
    context.subscriptions.push(reloadCMD);
    function backup() {
	nyancat.appendLine("backup()");
        try {
            fs.statSync(htmlBackupPath);
        }
        catch (err) {
            if (err) {
                fs.writeFileSync(htmlBackupPath, fs.readFileSync(htmlFilePath));
            }
        }
    }
    function errorInfo() {
      nyancat.appendLine("is it permission problem?");
      nyancat.appendLine("retry under root user:");
      nyancat.appendLine("sudo -E code --user-data-dir=~ --no-sandbox --verbose --extensions-dir ~/.vscode/extensions");
      vscode.window.showInformationMessage("Permission problem! Check NyanCat channel in OUTPUT tab", 'Reload Window');
    }
    function injectScript() {
	nyancat.appendLine(`injectScript() ${htmlFilePath}`);
        let htmlFileContent = fs.readFileSync(htmlFilePath, 'utf-8');
        if (!htmlFileContent.includes('nyan-cat.js')) {
            const inject = `<script src="${__dirname + '/nyan-cat.js'}"></script>`;
            htmlFileContent = htmlFileContent.replace('</html>', `${inject}\n</html>`);
            htmlFileContent = htmlFileContent.replace("script-src", "script-src 'unsafe-inline'");
            htmlFileContent = htmlFileContent.replace("amdLoader", "amdLoader myEscapePolicy");
	    try {
	      fs.writeFileSync(htmlFilePath, htmlFileContent, 'utf-8'); 
            } catch (err) {
              errorInfo();
            }
        }
    }
    function injectConfiguration() {
	nyancat.appendLine("injectConfiguration()");
        const config = vscode.workspace.getConfiguration('NyanCat');
        const inject = `<script id="NyanCatConfiguration">window.NyanCatConfiguration = ${JSON.stringify(config)}</script>`;
        let htmlFileContent = fs.readFileSync(htmlFilePath, 'utf-8');
        htmlFileContent = htmlFileContent.replace(/\t?<script.*NyanCatConfiguration.*script>\n?/g, '');
        htmlFileContent = htmlFileContent.replace('</body>', `${inject}\n</body>`);
        try {
          fs.writeFileSync(htmlFilePath, htmlFileContent, 'utf-8');
        } catch (err) {
	  errorInfo();
        }
    }
    function prepareUninstall() {
	nyancat.appendLine("prepareUninstall()");
        fs.unlinkSync(htmlFilePath);
        fs.renameSync(htmlBackupPath, htmlFilePath);
    }
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
