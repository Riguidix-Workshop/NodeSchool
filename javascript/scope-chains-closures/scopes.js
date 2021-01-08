function foo () {
	quux = 'I am a Global Variable';

	var bar;

	function zip() {
		var quux = 'I am an Inner Variable';
		bar = true;
	}

	return zip;
}