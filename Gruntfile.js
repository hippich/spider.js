/*
 * Spider.js
 * https://github.com/arschmitz/spider.js
 *
 * Copyright (c) 2015 Alexander Schmitz
 * Licensed under the MIT license.
 */

module.exports = function( grunt ) {
	require( "load-grunt-tasks" )( grunt );

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [ "*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		jscs: {
			all: [ "*.js" ]
		}

	});

	// By default, lint and run all tests.
	grunt.registerTask( "default", [ "jshint", "jscs" ]);

};
