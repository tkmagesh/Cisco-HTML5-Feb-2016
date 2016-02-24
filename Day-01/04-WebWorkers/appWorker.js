function doWork(){
		//do something very important and complex here
	for(var i=0; i<10000; i++)
		for(var j=0; j<10000; j++)
			for(var k=0; k<100; k++){
				
			}
}
self.addEventListener("message", function(evtArg){
	if (evtArg.data === 'start'){
		doWork();
		self.postMessage('done');
	} else {
		console.log("Worker received an unknown message - ", evtArg.data);
	}
});