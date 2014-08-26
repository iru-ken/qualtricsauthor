<div id="newhead" style="height:40px;">
	<div id="titlebar" style="float:left;">
		<span id="coursetitle" style="font-size: 19px;"><strong>Introducing Operating Leverage</strong></span></div>
	<div style="position:relative; right:0px; top:4px; z-index:10;">
		<input id="NextButton" name="NextButton" onclick="Qualtrics.SurveyEngine.navClick(event, 'NextButton')" style="float:right; text-align:center; width:62px; height:36px; visibility:hidden;" title="Next" type="submit" value="Next" /> <input id="PreviousButton" name="PreviousButton" onclick="Qualtrics.SurveyEngine.navClick(event, 'PreviousButton')" style="float:right; text-align:center; width:62px; height:36px; visibility:hidden;" title="Previous" type="submit" value="Previous" /></div>
	<!--resizing script--><script>
$.iruscreenheight = 600;

//full size video
$.wf = 638;
$.hf = 360;
//mobile size video
$.ws = 272;
$.hs = 153;

$.ismobile = false;

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
   $.ismobile = true;
}

var coursetitle= document.getElementById('coursetitle');

var newHead= document.getElementById('newhead');

//to center the validation message we have to create a new style including
//the correct width
//var sheet = document.createElement('style');

var pageWidth = $.wf;

//add line space in mobile playback
if ($.ismobile) {
    //sheet.innerHTML = ".ValidationError {width: "+ $.ws +"px;}";

    newHead.style.height = "56px";
    newHead.style.width = $.ws+"px";

    pageWidth = $.ws;

    coursetitle.style.fontSize = "12px";

    $.playinstruct = "<span id='playfont'><font color='#000000' fontSize='8'>Click <font color='#DD0000'><strong>Play</strong></font> to watch video...</font></span>";

} else {
    //sheet.innerHTML = ".ValidationError {width: "+ $.wf +"px;}";

    newHead.style.height = "36px";
    newHead.style.width = $.wf+"px";

    coursetitle.style.fontSize = "19px";
    coursetitle.style.paddingTop = "4px";
    coursetitle.style.paddingLeft = "6px";

    $.playinstruct = "<span id='playfont'>&nbsp;</span>";
} 

//document.body.appendChild(sheet);

$.iconsrc ="https://irco.qualtrics.com/CP/Graphic.php?IM=IM_1BLJoCgozNPZI21";
$.iconsrcw = 104;
$.iconsrch = 300;


if (navigator.userAgent.match(/iPad/i)) {
	$.playinstruct = "<span id='playfont'><font color='#000000' fontSize='12'>Click <font color='#DD0000'><strong>Play</strong></font> to watch video...</font></span>";
}
  
$.videoFontSizeF = 12;
$.videoFontSizeS = 9;

$.questFontSizeF = 18;
$.questFontSizeS = 14;

$.respFontSizeF = 20;
$.respFontSizeS = 14;

$.ansFontSizeF = 14;
$.ansFontSizeS = 11;

Event.observe(window, 'load', function()
{
  var pb = $('ProgressBar');
  var sc = $('titlebar');
  Element.insert(sc, {bottom:pb});

  pb.style.visibility = "visible";

  var pq = $('Questions');
  pq.style.height = $.iruscreenheight + "px";
  pq.style.width= pageWidth + "px";

  var formPage = document.getElementById('Page');
  formPage.style.width= pageWidth + "px";

  var elem = document.getElementsByClassName("END_OF_SURVEY EndOfSurvey BorderColor");

  var prev = document.getElementById('PreviousButton');
  var nxt = document.getElementById('NextButton');

if ($.ismobile) {
    prev.style.fontSize = $.videoFontSizeS + "px";
    nxt.style.fontSize = $.videoFontSizeS + "px";

    prev.style.height = "27px";
    nxt.style.height = "27px";

    prev.style.width = "36px";
    nxt.style.width = "36px";

    prev.style.padding= "0px";
    nxt.style.padding= "0px";

    //prev.name = "Prev";
    prev.value = "Prev";
} else {
    prev.style.fontSize = $.videoFontSizeF + "px";
    nxt.style.fontSize = $.videoFontSizeF + "px";

    prev.style.height = "36px";
    nxt.style.height = "36px";

    prev.style.width = "62px";
    nxt.style.width = "62px";
}

  if(elem.length > 0){
    prev.style.visibility = "hidden";
    nxt.style.visibility = "hidden";
  }else{
    if ($.firstpage) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
    $.firstpage = false;
    nxt.style.visibility = "visible";
  }

});
</script><!--video script--><script>
function iruDisplayVideo(videoSrc){
  /*enter the path to your video*/
  
  var videopath = videoSrc;
  
  /*DO NOT MODIFY*/
  
  var videoframe = document.getElementById('videoiFrame');
  var fs = $.videoFontSizeF;
  
  var w = $.wf;
  var h = $.hf;
  
  if($.ismobile){ 
   w = $.ws;
   h = $.hs;
   fs= $.videoFontSizeS;
  }
   
   var fontL= document.getElementById('playfont');
   fontL.innerHTML = $.playinstruct;
   
  videoframe.width = w+"px"; 
  videoframe.height = h+"px"; 

  var videopath=videopath.replace("http:","https:");
  
  videoframe.src = videopath + "?autoplay=1";
}
</script><!--answer response script--><script>
function iruAnswerFormat(){

  var questiontext = document.getElementsByClassName('QuestionText BorderColor');

  var fs = $.respFontSizeF;
 
  var w = $.wf;
  var h = $.hf;

  if($.ismobile){    
    fs=$.respFontSizeS;
  
    w = $.ws;
    h = $.hs;
   } 

   //change question style based on device
   for(var i=questiontext.length-1;i>=0;i--)
   {
     questiontext[i].style.fontSize = fs+"px";
   }

    var txt = document.getElementById('answerman');
    txt.style.visibility = "hidden";

    var icon = document.getElementById('iconman');
    icon.style.visibility = "hidden"; 

    icon.src= $.iconsrc;
    icon.style.width = $.iconsrcw+"px";
    icon.style.height = $.iconsrch+"px";
    
      
    var uiW = document.getElementById('uiWidth');
    uiW.style.width = w+"px";
  
    
    txt.style.width = w +"px";
    txt.style.position = "relative";
    txt.style.right = "0px";
    txt.style.top = "0px";
    txt.style.paddingLeft = "10px";

    txt.parentNode.insertBefore(document.createElement("HR"),txt.parentNode.childNodes[0]);

    icon.style.visibility = "visible";
    txt.style.visibility = "visible";
}
</script><script>
function iruQuestionFormat(targetObject, autoadvance){

  var elems = document.getElementsByClassName('HeaderValidationError');

  if (elems.length>0){
	  var errorMsg = document.getElementsByClassName('ValidationError');

      if (errorMsg.length>0){
        if ($.ismobile) {
             errorMsg[0].style.width = $.ws +"px";
        } else {
             errorMsg[0].style.width = $.wf +"px";
        }
      }
	  
	var elem=elems[0];

	elem.children[0].innerHTML = "Please answer the question below, then click Next.";
        elem.children[1].children[0].children[1].style.visibility = "hidden";

        elem.children[1].children[0].children[0].innerHTML = "Click to hide this message.";

	elem.children[1].children[0].children[0].onclick = function(){
                QualtricsSETools.scrollToDiv('validationError_1');
		elem.style.visibility = "hidden";
		}
}

  var questiontext = document.getElementsByClassName('QuestionText BorderColor');
  var labeltext= document.getElementsByClassName("LabelWrapper");
  
  var fs = $.questFontSizeF;
  var fq = $.ansFontSizeF;
  
  var w = $.wf;
  var h = $.hf;

  if($.ismobile){    
   var qhtml = questiontext[0].innerHTML; 
   questiontext[0].innerHTML = qhtml;
    
   fs=$.questFontSizeS;
   fq=$.ansFontSizeS;
  }
  
 
  //change question style based on device
   for(var i=questiontext.length-1;i>=0;i--)
  {
    //alert(questiontext[i] + "");
    questiontext[i].style.fontSize = fs+"px";
    questiontext[i].style.color = "#0000DD";
  }
  
 
  //change answer style based on device  
  for(var i=labeltext.length-1;i>=0;i--)
  {
     labeltext[i].style.fontSize = fq+"px";
  }


  
  //auto advance to next question when any radio button answer clicked
  if (autoadvance)
  {
			
  	targetObject.questionclick = function(event,element)
  	{ 
                //alert(element.type);
    
    		if (element.type == 'radio') 
    		{ 
                        var elem = document.getElementsByClassName("ProgressBarContainer");
                        if (elem.length > 0){
                           var progress = elem[0].getAttribute("aria-valuenow");
                           parent.postMessage(progress, '*');
                        }
                        
      		        targetObject.clickNextButton();
  		} 
  	}
  } else {
          
	targetObject.questionclick = function(event,element)
  	{ 
    
    		if (element.type == 'radio') 
    		{ 
                        parent.postMessage('complete', '*');
      			targetObject.clickNextButton();
  		} 
  	}             
  }
}
</script></div>
<br />
