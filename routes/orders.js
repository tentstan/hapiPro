const Joi = require('joi');

const GROUP_NAME = 'orders';

module.exports = [
	{
		method:'POST',
		path:`/${GROUP_NAME}`,
		handler: async (request,reply) => {
			reply();
		},
		config:{
			tags:['api',GROUP_NAME],
			description:'create order',
			validate:{
				payload:{
					goodsList:Joi.array().items(
						Joi.object().keys({
							goods_id:Joi.number().integer(),
							count:Joi.number().integer(),
						})),
				},
				headers:Joi.object({
					authorization:Joi.string().required(),
				}).unknown(),
			},
		},
	},
	{
		method:'POST',
		path:`/${GROUP_NAME}/{orderId}/pay`,
		handler:async (request,reply) => {
			reply();
		},
		config:{
			tags:['api',GROUP_NAME],
			description:'pay for order',
			validate:{
				params:{
					orderId:Joi.string().required(),
				},
			},
		},
	},
];
