const inert = require('inert');
const vision = require('vision');
const packageModule = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
	inert,
	vision,
	{
		register:hapiSwagger,
		options:{
			info:{
				title:'Interface file',
				version:packageModule.version,
			},
			grouping:'tags',
			tags:[
				{
					name:'test',
					description:'test',
				},
				{
					name:'shops',
					description:'shops api',
				},
				{
					name:'orders',
					description:'orders api',
				},
			],
		},
	},
];