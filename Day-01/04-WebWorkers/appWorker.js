function doWork(){
		//do something very important and complex here
	for(var i=0; i<10000; i++){
		for(var j=0; j<10000; j++)
			for(var k=0; k<100; k++){
				
			}
		if (i % 100 === 0){
			var message = {
				type : 'progress',
				percentCompleted : (i/100)
			};
			self.postMessage(message);
		}
	}
	var message = {
				type : 'progress',
		percentCompleted : 100
	};
	self.postMessage(message);
}
self.addEventListener("message", function(evtArg){
	var workerMessage = evtArg.data;
	if (workerMessage.type === 'start'){
		doWork();
		self.postMessage({type : 'done'});
	} else {
		console.log("Worker received an unknown message - ", evtArg.data);
	}
});