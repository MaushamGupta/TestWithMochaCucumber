/**
 * http://usejsdoc.org/
 */

module.exports=function(grunt)
{
 
	grunt.initConfig({
		
		cucumberjs:
			{
			src:'./TestCucumber/Features/*.feature',
			options:
				{
				steps:'./TestCucumber/step_definitions/setDef.js',
				format:'pretty'
				}
			}
	})
	
	 grunt.loadNpmTasks('grunt-cucumber');

    grunt.registerTask('default', ['cucumberjs']);
}