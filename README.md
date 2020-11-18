# grunt-notarize

> Grunt plugin for notarizing macOS binaries using electron-notarize

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-notarize --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-notarize');
```

## The "notarize" task

### Overview
In your project's Gruntfile, add a section named `notarize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    notarize: {
        intel: {
            'appBundleId': "com.html5test.electron",
            'appPath': "build/tmp/HTML5test-darwin-x64/HTML5test.app",
            'appleId': 'info@html5test.com',
            'appleIdPassword': '************',
            'ascProvider': 'JDSEI39D3E'
        },

        arm: {
            'appBundleId': "com.html5test.electron",
            'appPath': "build/tmp/HTML5test-darwin-arm64/HTML5test.app",
            'appleId': 'info@html5test.com',
            'appleIdPassword': '************',
            'ascProvider': 'JDSEI39D3E'
        }
    }
})
```

For each app that you want to notarize you can add a section. Each sections has a couple of options that you need to set, such as your bundle id, apple id, password and your development team shortname. These options are documented in the [electron-notarize](https://github.com/electron/electron-notarize) project. Please read their documentation carefully. 
