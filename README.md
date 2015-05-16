# uikit-starter

A basic starter setup for integrating UIkit in your front-end workflow. This is a suggestion which tools to use and what file-structure to start with. You might want other tools or change the structure according to your project needs.

## Getting started

*Notice:* You need to have [npm](https://www.npmjs.com/), [Bower](http://bower.io/) and [Gulp](http://gulpjs.com/) running on your local system to use the code provided.

1. Download or clone the repository and navigate to the directory on your terminal.

2. Install all JavaScript dependencies required in `package.json` by running:

```sh
npm install
```

3. Use Bower to automatically fetch the required UIkit dependency:

```sh
bower install
```

4. Run Gulp once to compile the LESS to CSS:  

```sh
gulp
```

Done. You can now view `index.html` in your browser and start creating your own project from this foundation.

## Working with the code

To create your own styling for UIkit, start editing `assets/site.less`. If you want to recompile LESS every time you save that file, make sure the following is running in the background:

```sh
gulp watch
```

In the future, you will want to extend what `gulpfile.js` provides. Use `npm` to add any module and make sure to set the `-S` flag to add the dependency to your `package.json`.

```sh
npm install -S <some-module>
```

The same goes for any additional front-end library you want to add, just use Bower instead.

```sh
bower install -S <some-library>
```

## License

The MIT License (MIT)

Copyright (c) 2015 Florian Letsch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.