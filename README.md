# Nyan Cat for VSCode

[![](https://vsmarketplacebadge.apphb.com/version-short/zhengrenzhe.nyan-cat.svg)](https://marketplace.visualstudio.com/items?itemName=zhengrenzhe.nyan-cat)
[![](https://vsmarketplacebadge.apphb.com/installs-short/zhengrenzhe.nyan-cat.svg)](https://marketplace.visualstudio.com/items?itemName=zhengrenzhe.nyan-cat)
[![](https://vsmarketplacebadge.apphb.com/rating-short/zhengrenzhe.nyan-cat.svg)](https://marketplace.visualstudio.com/items?itemName=zhengrenzhe.nyan-cat)

Put Nyan Cat in your VSCode!

Because of the API restrict, Nyan Cat now only show up in your VSCode status bar, but more will be done in the future.

<p align="center">
    <img src="https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/r.gif" alt="VSCode"/>
</p>


## Install

```
ext install nyan-cat
```

**IMPORTANT 1**

After install, press `shift + command + p`, search `Nyan Cat: refresh status bar` and execute it, Nyan Cat will display on your status bar.

安装完成后，按下`shift + command + p`，输入`Nyan Cat: refresh status bar`并执行，Nyan Cat将显示在你的状态栏里。

**IMPORTANT 2**

After install, VSCode maybe display `Your Code installation appears to be corrupt. Please reinstall`, this is because of API restrict, the extension must be inject js file into VSCode to perform related functions, this led to VSCode this prompt, but it's harmless, will not have any effect on VSCode, so just ignore it.

在安装后，VSCode可能会提示`VSCode 安装文件被破坏，请重新安装`，这是由于API限制的原因，扩展必须注入js文件到VSCode里来执行相关功能，这导致了出现这个提示，但它是无害的，这不会对VSCode有任何影响，可以直接忽略。

**IMPORTANT 3**

After upgrade extension, you must be press `shift + command + p`, search `Nyan Cat: reload Nyan Cat` and execute it, this will reload Nyan Cat, it's important.

在更新Nyan Cat后，你必须按下`shift + command + p`，输入`Nyan Cat: reload Nyan Cat`并执行来手动更新注入代码。

**IMPORTANT 4**

For Linux users, you may receive error when run the command, it shows `xxx command not found`, this because of the VSCode extension have no permissions to modify the VSCode source code on Linux, it leds this problem, so you can run VSCode with sudo, for example:
```
sudo code --user-data-dir=~
```
Then rerun the command, and close this VSCode instance, then reopen VSCode by ordinary user, you can see the command came into effect.

对于Linux用户，当运行Nyan Cat的命令时可能会收到 `xxx command not found`的错误，这是因为VSCode扩展在Linux上没有修改VSCode源代码的权限，这导致了这个错误，所以你可以通过sudo运行VSCode，例如
```
sudo code --user-data-dir=~
```
重新运行刚刚出错的命令，然后关闭这个VSCode实例，以普通用户重新打开VSCode，这是就能看到刚刚的命令生效了。

## Uninstall

Before you actually uninstall, you must be press `shift + command + p`, search `Nyan Cat: ready to uninstall Nyan Cat` and execute it,
this will restore the file what you modified during the installation, it's important.

在实际卸载前，按下`shift + command + p`，输入`Nyan Cat: ready to uninstall Nyan Cat`并执行，这将恢复在安装过程中修改的文件，这一步很重要。


## Features

Show Nyan Cat in your status bar.

## Extension Settings

```javascript
{
    "NyanCat.backgroundColor": "transparent", // Nyan Cat area background color, default is transparent, it accepts any css color string.
    "NyanCat.name": "bday" // what you want to show the name, default is bday
}
```

When after you changed the configuration, you should rerun `Nyan Cat: refresh status bar` to apply it.

## Cat Names List

#### random
This will random display Nyan Cat.

#### GB
![GB](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/GB.gif)

#### bday
![bday](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/bday.gif)

#### breakfast
![breakfast](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/breakfast.gif)

#### easter
![easter](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/easter.gif)

#### grumpy
![grumpy](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/grumpy.gif)

#### jacksnyan
![jacksnyan](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/jacksnyan.gif)

#### jazz
![jazz](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/jazz.gif)

#### mexinyan
![mexinyan](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/mexinyan.gif)

#### mummy
![mummy](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/mummy.gif)

#### nyan
![nyan](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/nyan.gif)

#### nyancoin
![nyancoin](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/nyancoin.gif)

#### nyaninja
![nyaninja](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/nyaninja.gif)

#### paddy
![paddy](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/paddy.gif)

#### pikanyan
![pikanyan](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/pikanyan.gif)

#### sadnyan
![sadnyan](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/sadnyan.gif)

#### slomo
![slomo](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/slomo.gif)

#### technyancolor
![technyancolor](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/technyancolor.gif)

#### uhmurica
![uhmurica](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/uhmurica.gif)

#### vday
![vday](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/vday.gif)

#### xmas
![xmas](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/xmas.gif)

#### zombie
![zombie](https://raw.githubusercontent.com/zhengrenzhe/vscode-Nyan-Cat/master/src/imgs/zombie.gif)

**Enjoy!**
