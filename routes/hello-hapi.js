module.exports = [
{
	method:'GET',
	path:'/',
	handler:(request,reply) => {
		reply('Hello Hapi!');
	},

	config:{
		tags:['api','test'],
		description:'test interface for hello-hapi',
	},	
}]