const Joi = require('joi');

const GROUP_NAME = 'shops';

module.exports = [
	{
		method:'GET',
		path:`/${GROUP_NAME}`,
		handler:async (request,reply) => {
			reply();
		},

		config:{
			tags:['api',GROUP_NAME],
			description:'get shops list',
			validate:{
				query:{
					limit:Joi.number().integer().min(1).default(10).description('item count per page'),
					page:Joi.number().integer().min(1).default(1).description('page index'),
				},
			},
		},
	},
	{
		method:'GET',
		path:`/${GROUP_NAME}/{shopId}/goods`,
		handler:async (request,reply) => {
			reply();
		},
		
		config:{
			tags:['api',GROUP_NAME],
			description:'get shop item list',
		},
	},
];