


(function(target, threshold, elem) {
    listener = () => {
        if (target.scrollY > threshold) {
            elem.style.opacity = 1;
        } else {
            elem.style.opacity = 0;
        }
    };
    target.addEventListener(
        'scroll',
        listener,
        false
    );
})(window, 90, document.querySelector('.back-to-top')) 







var btt = document.getElementById( ".back-to-top"),
body = document.body,
docElem = document.documentElement, 

offset = 20,
scrollPos, docHeight; 

// Calculate the document height
docHeight = Math.max( body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if ( docHeight !='underfinded' ) {

	offset = docHeight / 4;

}


// Add scroll event listener
window.addEventListener( "scroll", function(event) {

	scrollPos = body.scrollTop || docElem.scrollTop;

	btt.className (scrollPos > offset ) ? "visible" : "";

	}); 