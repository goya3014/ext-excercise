/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'HelloApp.Application',

    name: 'HelloApp',

    requires: [
        // This will automatically load all classes in the HelloApp namespace
        // so that application classes do not need to require each other.
        'HelloApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'HelloApp.view.main.Main'
});
