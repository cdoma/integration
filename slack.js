const	webhook = 	process.env.hook,
	requestify =	require('requestify');

exports.sendMessage = function(message){
	requestify.post('https://hooks.slack.com/services/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', lemme see);
};
