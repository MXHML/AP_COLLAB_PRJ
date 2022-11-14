let language_dd = document.getElementById("language_dd");
let error_dd = document.getElementById("error_dd");
let error_list = document.getElementById("error_list");
let result_container = document.getElementById("result-container");

let error_codes ={
    HTML:[
        {code:100,type:"HTML100: Missing doctype",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;!DOCTYPE html&gt;</code>"},
        {code:101,type:"HTML101: Missing lang attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;html lang='en'&gt;</code>"},
        {code:102,type:"HTML102: Missing charset attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;meta charset='UTF-8'&gt;</code>"},
        {code:"103",type:"HTML103: Missing viewport meta tag",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;</code>"},
        {code:"104",type:"HTML104: Missing title tag",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;title&gt;Your Title Here&lt;/title&gt;</code>"},
        {code:"105",type:"HTML105: Missing alt attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;img src='image.jpg' alt='Your alt text here'&gt;</code>"},
        {code:"106",type:"HTML106: Missing src attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;img src='image.jpg' alt='Your alt text here'&gt;</code>"},
        {code:"107",type:"HTML107: Missing href attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;a href='link.html'&gt;Your link text here&lt;/a&gt;</code>"},
        {code:"108",type:"HTML108: Missing type attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;link rel='stylesheet' href='style.css' type='text/css'&gt;</code>"},
        {code:"109",type:"HTML109: Missing rel attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;link rel='stylesheet' href='style.css' type='text/css'&gt;</code>"},
        {code:"110",type:"HTML110: Missing value attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;input type='text' value='Your value here'&gt;</code>"},
        {code:"111",type:"HTML111: Missing name attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;input type='text' value='Your value here' name='Your name here'&gt;</code>"},
        {code:"112",type:"HTML112: Missing id attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;div id='Your id here'&gt;Your content here&lt;/div&gt;</code>"},
        {code:"113",type:"HTML113: Missing class attribute",solution:"Add the following to the top of your HTML file: <br><br><code>&lt;div class='Your class here'&gt;Your content here&lt;/div&gt;</code>"},
        {code:"114",type:"HTML114: Missing closing tag",solution:""},], 
  
    API:[
        {code:"100",type:"The server has received the request headers, and the client should proceed to send the request body",solution:"Informational Response, this is not an error."},
        {code:"101",type:"The requester has asked the server to switch protocols",solution:"Informational Response, this is not an error."},
        {code:"102",type:"The server has received and is processing the request",solution:"Informational Response, this is not an error."},
        {code:"103",type:"The server is likely to send a final response with the header",solution:"Informational Response, this is not an error."},
        {code:"200",type:"The request has succeeded",solution:"Success Response, this is not an error."},
        {code:"201",type:"The request has succeeded and a new resource has been created as a result",solution:"Success Response, this is not an error."},
        {code:"202",type:"The request has been received but not yet acted upon",solution:"Success Response, this is not an error."},
        {code:"203",type:"The server is delivering only part of the resource due to a range header sent by the client",solution:"Success Response, this is not an error."},
        {code:"204",type:"The server has fulfilled the request but does not need to return an entity-body",solution:"Success Response, this is not an error."},
        {code:"205",type:"The server has fulfilled the request and the user agent should reset the document view",solution:"Success Response, this is not an error."},
        {code:"206",type:"The server has fulfilled the partial GET request for the resource",solution:"Success Response, this is not an error."},
        {code:"300",type:"The requested resource corresponds to any one of a set of representations",solution:"Redirection Response, this is not an error."},
        {code:"301",type:"The requested resource has been assigned a new permanent URI",solution:"Redirection Response, this is not an error."},
        {code:"302",type:"The requested resource resides temporarily under a different URI",solution:"Redirection Response, this is not an error."},
        {code:"303",type:"The response to the request can be found under a different URI",solution:"Redirection Response, this is not an error."},
        {code:"304",type:"The requested resource has not been modified",solution:"Redirection Response, this is not an error."},
        {code:"305",type:"The requested resource must be accessed through the proxy given by the Location field",solution:"Redirection Response, this is not an error."},
        {code:"307",type:"The requested resource resides temporarily under a different URI",solution:"Redirection Response, this is not an error."},
        {code:"400",type:"The request could not be understood by the server due to malformed syntax",solution:"Client Error Response"},
        {code:"401",type:"The request requires user authentication",solution:"Due to manual errors in typing the URL, the 401 unauthorized error may occur. Hence, checking the URL and rectifying the mistakes in it will fix the 401 error status."},
        {code:"402",type:"This code is reserved for future use",solution:"Client Error Response"},
        {code:"403",type:"The server understood the request, but is refusing to fulfill it",solution:"Client Error Response"},
        {code:"404",type:"The server has not found anything matching the Request-URI",solution:"Client Error Response"},
        {code:"405",type:"The method specified in the Request-Line is not allowed for the resource identified by the Request-URI",solution:"Client Error Response"},
        {code:"406",type:"The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request",solution:"Client Error Response"},
        {code:"407",type:"This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy",solution:"Client Error Response"},
        {code:"408",type:"The client did not produce a request within the time that the server was prepared to wait",solution:"Client Error Response"},
        {code:"409",type:"The request could not be completed due to a conflict with the current state of the resource",solution:"Client Error Response"},
        {code:"410",type:"The requested resource is no longer available at the server and no forwarding address is known",solution:"Client Error Response"},
        {code:"411",type:"The server refuses to accept the request without a defined Content- Length",solution:"Client Error Response"},
        {code:"412",type:"The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server",solution:"Client Error Response"},
        {code:"413",type:"The server is refusing to process a request because the request entity is larger than the server is willing or able to process",solution:"Client Error Response"},
        {code:"414",type:"The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret",solution:"Client Error Response"},
        {code:"415",type:"The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method",solution:"Client Error Response"},
        {code:"416",type:"A server SHOULD return a response with this status code if a request included a Range request-header field, and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field",solution:"Client Error Response"},
        {code:"417",type:"The expectation given in an Expect request-header field could not be met by this server",solution:"Client Error Response"},
        {code:"500",type:"The server encountered an unexpected condition which prevented it from fulfilling the request",solution:"Server Error Response"},
        {code:"501",type:"The server does not support the functionality required to fulfill the request",solution:"Server Error Response"},
        {code:"502",type:"The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request",solution:"Server Error Response"},
        {code:"503",type:"The server is currently unable to handle the request due to a temporary overloading or maintenance of the server",solution:"Server Error Response"},
        {code:"504",type:"The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request",solution:"Server Error Response"},
        {code:"505",type:"The server does not support, or refuses to support, the HTTP protocol version that was used in the request message",solution:"Server Error Response"},
        {code:"506",type:"The server has an internal configuration error: transparent content negotiation for the request results in a circular reference",solution:"Server Error Response"},
        {code:"507",type:"The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request",solution:"Server Error Response"},
        {code:"508",type:`The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed`,solution:"Server Error Response"},
        {code:"509",type:"The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers",solution:"Server Error Response"},
        {code:"510",type:"Further extensions to the request are required for the server to fulfill it",solution:"Server Error Response"},
        {code:"511",type:"The client needs to authenticate to gain network access",solution:"Server Error Response"},
        {code:"512",type:"The server could not meet the request's Expect request-header field",solution:"Server Error Response"},
        {code:"513",type:"The server could not meet the request's Range request-header field",solution:"Server Error Response"},
        {code:"514",type:"The server could not meet the request's If-Range request-header field",solution:"Server Error Response"},
        {code:"515",type:"The server could not meet the request's Expect request-header field",solution:"Server Error Response"},],
    
    CSS:[
        {code:"100",type:"CSS100: Missing closing brace",solution:"Add a closing brace to the end of the rule."},
        {code:"101",type:"CSS101: Missing closing parenthesis",solution:"Add a closing parenthesis to the end of the rule."},
        {code:"102",type:"CSS102: Missing closing bracket",solution:"Add a closing bracket to the end of the rule."},
        {code:"103",type:"CSS103: Missing closing quote",solution:"Add a closing quote to the end of the rule."},
        {code:"104",type:"CSS104: Missing semicolon",solution:"Add a semicolon to the end of the rule."},
        {code:"105",type:"CSS105: Missing colon",solution:"Add a colon to the end of the rule."},
        {code:"106",type:"CSS106: Missing comma",solution:"Add a comma to the end of the rule."},
        {code:"107",type:"CSS107: Missing space after comma",solution:"Add a space after the comma."},
        {code:"108",type:"CSS108: Missing space after colon",solution:"Add a space after the colon."},
        {code:"109",type:"CSS109: Missing space after semicolon",solution:"Add a space after the semicolon."},
        {code:"110",type:"CSS110: Missing space after opening brace",solution:"Add a space after the opening brace."},
        {code:"111",type:"CSS111: Missing space after opening parenthesis",solution:"Add a space after the opening parenthesis."},
        {code:"112",type:"CSS112: Missing space after opening bracket",solution:"Add a space after the opening bracket."},
        {code:"113",type:"CSS113: Missing space after opening quote",solution:"Add a space after the opening quote."},
        {code:"114",type:"CSS114: Missing space before closing brace",solution:"Add a space before the closing brace."},
        {code:"115",type:"CSS115: Missing space before closing parenthesis",solution:"Add a space before the closing parenthesis."},
        {code:"116",type:"CSS116: Missing space before closing bracket",solution:"Add a space before the closing bracket."},
        {code:"117",type:"CSS117: Missing space before closing quote",solution:"Add a space before the closing quote."},
        {code:"118",type:"CSS118: Missing space before colon",solution:"Add a space before the colon."},
        {code:"119",type:"CSS119: Missing space before semicolon",solution:"Add a space before the semicolon."},
        {code:"120",type:"CSS120: Missing space before comma",solution:"Add a space before the comma."},
        {code:"121",type:"CSS121: Missing space after exclamation mark",solution:"Add a space after the exclamation mark."},
        {code:"122",type:"CSS122: Missing space before exclamation mark",solution:"Add a space before the exclamation mark."},
        {code:"123",type:"CSS123: Missing space after plus sign",solution:"Add a space after the plus sign."},
        {code:"124",type:"CSS124: Missing space before plus sign",solution:"Add a space before the plus sign."},
        {code:"125",type:"CSS125: Missing space after minus sign",solution:"Add a space after the minus sign."},
        {code:"126",type:"CSS126: Missing space before minus sign",solution:"Add a space before the minus sign."},
        {code:"127",type:"CSS127: Missing space after asterisk",solution:"Add a space after the asterisk."},
        {code:"128",type:"CSS128: Missing space before asterisk",solution:"Add a space before the asterisk."},
        {code:"129",type:"CSS129: Missing space after forward slash",solution:"Add a space after the forward slash."},
        {code:"130",type:"CSS130: Missing space before forward slash",solution:"Add a space before the forward slash."},
        {code:"131",type:"CSS131: Missing space after back slash",solution:"Add a space after the back slash."},
        {code:"132",type:"CSS132: Missing space before back slash",solution:"Add a space before the back slash."},
        {code:"133",type:"CSS133: Missing space after ampersand",solution:"Add a space after the ampersand."},
        {code:"134",type:"CSS134: Missing space before ampersand",solution:"Add a space before the ampersand."},
        {code:"135",type:"CSS135: Missing space after pipe",solution:"Add a space after the pipe."},
        {code:"136",type:"CSS136: Missing space before pipe",  solution:"Add a space before the pipe."},
        {code:"137",type:"CSS137: Missing space after tilde",solution:"Add a space after the tilde."},
        {code:"138",type:"CSS138: Missing space before tilde",solution:"Add a space before the tilde."},
        {code:"139",type:"CSS139: Missing space after caret",solution:"Add a space after the caret."},
        {code:"140",type:"CSS140: Missing space before caret",solution:"Add a space before the caret."},
        {code:"141",type:"CSS141: Missing space after dollar sign",solution:"Add a space after the dollar sign."},
        {code:"142",type:"CSS142: Missing space before dollar sign",solution:"Add a space before the dollar sign."},
        {code:"143",type:"CSS143: Missing space after hash sign",solution:"Add a space after the hash sign."},
        {code:"144",type:"CSS144: Missing space before hash sign",solution:"Add a space before the hash sign."},
        {code:"145",type:"CSS145: Missing space after at sign",solution:"Add a space after the at sign."},
        {code:"146",type:"CSS146: Missing space before at sign",solution:"Add a space before the at sign."},
        {code:"147",type:"CSS147: Missing space after percent sign",solution:"Add a space after the percent sign."},
        {code:"148",type:"CSS148: Missing space before percent sign",solution:"Add a space before the percent sign."},
        {code:"149",type:"CSS149: Missing space after underscore",solution:"Add a space after the underscore."},
        {code:"150",type:"CSS150: Missing space before underscore",solution:"Add a space before the underscore."},
        {code:"151",type:"CSS151: Missing space after equal sign",solution:"Add a space after the equal sign."},
        {code:"152",type:"CSS152: Missing space before equal sign",solution:"Add a space before the equal sign."},
        {code:"153",type:"CSS153: Missing space after greater than sign",solution:"Add a space after the greater than sign."},
        {code:"154",type:"CSS154: Missing space before greater than sign",solution:"Add a space before the greater than sign."},
        {code:"155",type:"CSS155: Missing space after less than sign",solution:"Add a space after the less than sign."},
        {code:"156",type:"CSS156: Missing space before less than sign",solution:"Add a space before the less than sign."},
        {code:"157",type:"CSS157: Missing space after question mark",solution:"Add a space after the question mark."},
        {code:"158",type:"CSS158: Missing space before question mark",solution:"Add a space before the question mark."},
        {code:"159",type:"CSS159: Missing space after dot",solution:"Add a space after the dot."},
        {code:"160",type:"CSS160: Missing space before dot",solution:"Add a space before the dot."},
        {code:"161",type:"CSS161: Missing space after pound sign",solution:"Add a space after the pound sign."},
        {code:"162",type:"CSS162: Missing space before pound sign",solution:"Add a space before the pound sign."},
        {code:"163",type:"CSS163: Missing space after exclamation mark",    solution:"Add a space after the exclamation mark."},
        {code:"164",type:"CSS164: Missing space before exclamation mark",solution:"Add a space before the exclamation mark."},
        {code:"165",type:"CSS165: Missing space after plus sign",solution:"Add a space after the plus sign."},
        {code:"166",type:"CSS166: Missing space before plus sign",solution:"Add a space before the plus sign."},
        {code:"167",type:"CSS167: Missing space after minus sign",solution:"Add a space after the minus sign."},
        {code:"168",type:"CSS168: Missing space before minus sign",solution:"Add a space before the minus sign."},
        {code:"25",type:"general entity X not defined and no default entity",solution:"This is usually a cascading error caused by a an undefined entity reference or use of an unencoded ampersand (&) in an URL or body text."},
        {code:"28",type:"unterminated comment: found end of entity inside comment",solution:"This is usually a cascading error caused by a missing closing comment tag (-->)."},
        {code:"29",type:"unterminated CDATA section: found end of entity inside CDATA section",solution:"This is usually a cascading error caused by a missing closing CDATA tag (]]>)."},
        {code:"30",type:"unterminated DOCTYPE declaration: found end of entity inside DOCTYPE declaration",solution:"This is usually a cascading error caused by a missing closing DOCTYPE tag (>)."},
        {code:"31",type:"unterminated processing instruction: found end of entity inside processing instruction",solution:"This is usually a cascading error caused by a missing closing processing instruction tag (?>)."},
        {code:"32",type:"unterminated attribute value: found end of entity inside attribute value",solution:"This is usually a cascading error caused by a missing closing quote (\")."},
        {code:"42",type:"unterminated entity reference: found end of entity inside entity reference",solution:"This is usually a cascading error caused by a missing semicolon (;)."},
        {code:"43",type:"unterminated element: found end of entity inside element",solution:"This is usually a cascading error caused by a missing closing tag (>)."},
        {code:"47",type:"end of document in prolog",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"48",type:"end of document in epilog",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"49",type:"end of document in element content",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"50",type:"end of document in attribute value",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"51",type:"end of document in entity reference",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"52",type:"end of document in processing instruction",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you is not empty."},
        {code:"53",type:"end of document in comment",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"54",type:"end of document in CDATA section",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"55",type:"end of document in DOCTYPE declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"56",type:"end of document in internal entity declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"57",type:"end of document in external entity declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"58",type:"end of document in parameter entity declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"59",type:"end of document in internal subset",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"60",type:"end of document in external subset",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"61",type:"end of document in conditional section",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"62",type:"end of document in external parameter entity reference",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"63",type:"end of document in internal parameter entity reference",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"64",type:"end of document in external general entity reference",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"65",type:"end of document in internal general entity reference",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"66",type:"end of document in attribute list declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"67",type:"end of document in element declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"68",type:"end of document in entity declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"69",type:"end of document in notation declaration",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},
        {code:"70",type:"end of document in conditional section in external subset",solution:"This error may appear when the validator receives an empty document. Please make sure that the document you are uploading is not empty."},],
        JS: [
        {code:"1",type:"SyntaxError",solution:"This error is usually caused by a syntax error in your JavaScript code."},
        {code:"2",type:"ReferenceError",solution:"This error is usually caused by a reference to an undefined variable."},
        {code:"3",type:"TypeError",solution:"This error is usually caused by a type mismatch in your JavaScript code."},
        {code:"4",type:"RangeError",solution:"This error is usually caused by a number outside of the range of valid numbers."},
        {code:"5",type:"URIError",solution:"This error is usually caused by an invalid URI."},
        {code:"6",type:"EvalError",solution:"This error is usually caused by an error in the eval() function."},
        {code:"7",type:"InternalError",solution:"This error is usually caused by an internal error in the JavaScript engine."},
        {code:"8",type:"Error",solution:"This error is usually caused by an error in the JavaScript engine."},
        {code:"9",type:"unterminated string literal",solution:"This error is usually caused by a missing closing quote (\")."},
        {code:"10",type:"unterminated regular expression literal",solution:"This error is usually caused by a missing closing slash (/)."},
        {code:"11",type:"unterminated comment",solution:"This error is usually caused by a missing closing comment tag (-->)."},
        {code:"12",type:"unterminated XML declaration",solution:"This error is usually caused by a missing closing XML declaration tag (>)."},
        {code:"13",type:"unterminated DOCTYPE declaration",solution:"This error is usually caused by a missing closing DOCTYPE declaration tag (>)."},
        {code:"14",type:"unterminated CDATA section",solution:"This error is usually caused by a missing closing CDATA section tag (])."},
        {code:"15",type:"unterminated entity reference",solution:"This error is usually caused by a missing closing entity reference tag (;)."},
        {code:"16",type:"unterminated processing instruction",solution:"This error is usually caused by a missing closing processing instruction tag (?>)."},
        {code:"17",type:"unterminated attribute value",solution:"This error is usually caused by a missing closing quote (\")."},
        {code:"18",type:"unterminated element",solution:"This error is usually caused by a missing closing tag (>)."},
        {code:"19",type:"unterminated conditional section",solution:"This error is usually caused by a missing closing conditional section tag (]>)."},
        {code:"20",type:"unterminated namespace declaration",solution:"This error is usually caused by a missing closing namespace declaration tag (>)."},
        {code:"21",type:"unterminated namespace prefix",solution:"This error is usually caused by a missing closing namespace prefix tag (>)."},
        {code:"22",type:"unterminated namespace attribute",solution:"This error is usually caused by a missing closing namespace attribute tag (>)."}]
    };

language_dd.addEventListener("change", function () {
    filter(language_dd.value);
});
error_dd.addEventListener("change", function () {
    responseToHTML(language_dd.value)
})

function filter(lang){
    error_dd.value="";
    error_list.innerHTML="";
    result_container.innerHTML="";
    if(lang==""){
        error_dd.value="None";
    }
    if(lang=="CSS"){
        for(let x=0;x<error_codes.CSS.length;x++){
            error_list.innerHTML += `<option value="${error_codes.CSS[x].code}">${error_codes.CSS[x].code}</option>`;
        }
    }
    if(lang=="HTML"){
        for(let x=0;x<error_codes.HTML.length;x++){
            error_list.innerHTML += `<option value="${error_codes.HTML[x].code}">${error_codes.HTML[x].code}</option>`;
        }
    }
    if(lang=="JS"){
        for(let x=0;x<error_codes.JS.length;x++){
            error_list.innerHTML += `<option value="${error_codes.JS[x].type}">${error_codes.JS[x].code}</option>`;
        }
    }
    if(lang=="API"){
        for(let x=0;x<error_codes.API.length;x++){
            error_list.innerHTML += `<option value="${error_codes.API[x].code}">${error_codes.API[x].code}</option>`;
        }
    }
}

function responseToHTML(lang){
    if(lang=="CSS"){
        for(let x=0;x<error_codes.CSS.length;x++){
            if(error_codes.CSS[x].code==error_dd.value){
                result_container.innerHTML = `<h3>${error_codes.CSS[x].type}</h3><p>${error_codes.CSS[x].solution}</p>`;
            }
        }
    }
    if(lang=="HTML"){
        for(let x=0;x<error_codes.HTML.length;x++){
            if(error_codes.HTML[x].code==error_dd.value){
                result_container.innerHTML = `<h3>${error_codes.HTML[x].type}</h3><p>${error_codes.HTML[x].solution}</p>`;
            }
        }
    }
    if(lang=="JS"){
        for(let x=0;x<error_codes.JS.length;x++){
            if(error_codes.JS[x].type==error_dd.value){
                result_container.innerHTML = `<h3>${error_codes.JS[x].type}</h3><p>${error_codes.JS[x].solution}</p>`;
            }
        }
    }
    if(lang=="API"){
        for(let x=0;x<error_codes.API.length;x++){
            if(error_codes.API[x].code==error_dd.value){
                result_container.innerHTML = `<h3>${error_codes.API[x].type}</h3><p>${error_codes.API[x].solution}</p>`;
            }
        }
    }
}