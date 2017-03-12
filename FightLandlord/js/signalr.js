$(function() {
	// Reference the auto-generated proxy for the hub.  
	var myHub = $.connection.fightLandlordHub;
	// Create a function that the hub can call back to display messages.
	myHub.client.showMsg = function(msg) {
		// Add the message to the page. 
		alert(msg);
	};
	$.connection.hub.url = "http://localhost/fightlandlord/signalr"
	$.connection.hub.start().done(function() {
		$('#sendmessage').click(function() {
			myHub.server.send("Message", "xxx");
		});
	});
});