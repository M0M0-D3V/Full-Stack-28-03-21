// copy this as a url inside of a bookmark!
javascript:
var v = document.querySelector('video');
var t = prompt('Set the playback rate');
// v is the video element on the html 
// it is the entire video object including all of it's attributes
v.playbackRate = parseFloat(t)