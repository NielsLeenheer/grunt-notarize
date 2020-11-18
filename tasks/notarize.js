module.exports = function(grunt) {
    const {notarize} = require('electron-notarize');

    grunt.registerMultiTask('notarize', async function() {
        let done = this.async();

        await notarize(this.data);

        done(true);
    });
};
