// Create an immediately invoked functional expression to wrap our code
(function ()
{
    var module_prefix = 'MODULE_NAME'
    var instance = [];

    // Define our constructor

    this.Modal = function (DOM)
    {
        var detectRegex = new RegExp(module_prefix);
        var matches = detectRegex.exec(DOM.className);
        if(matches)
        {
            var findUniqueIdentity = DOM.className.substr(matches.index,module_prefix.length+32+2)
            return instance[findUniqueIdentity];
        }
        var unciId = sGetUniqueIdentity();

        this.oDOMElement = DOM;
        this.oDOMElement.className += ' '+ unciId;

        instance[unciId] = this;
        return instance[unciId];
    }

    // Public Methods

    Modal.prototype.open = function ()
    {
        this.oDOMElement.style.color = 'red';
    }

    // Private Methods

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties)
    {
        //...
    }

    function sGetUniqueIdentity(){
        // always start with a letter (for DOM friendlyness)
        var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            var ascicode=Math.floor((Math.random()*42)+48);
            if (ascicode<58 || ascicode>64){
                // exclude all chars between : (58) and @ (64)
                idstr+=String.fromCharCode(ascicode);
            }
        } while (idstr.length<32);

        return (module_prefix+'__'+idstr);
    }

}());
