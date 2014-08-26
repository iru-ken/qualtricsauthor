//single video block - first page

Qualtrics.SurveyEngine.addOnload(function()
{
  /*enter the path to your video*/
  var videopath="http://player.vimeo.com/video/69015457";
  
  /*DO NOT MODIFY*/
  iruDisplayVideo(videopath);
  
  var prev = document.getElementById('PreviousButton');
  prev.style.visibility = "hidden";
  
  $.firstpage = true;
});?




//single video block

Qualtrics.SurveyEngine.addOnload(function()
{
  /*enter the path to your video*/
  var videopath="http://player.vimeo.com/video/69015457";
  
  /*DO NOT MODIFY*/
  iruDisplayVideo(videopath);
  
  var prev = document.getElementById('PreviousButton');
  prev.style.visibility = "hidden";
});?




//question block - autoadvance

Qualtrics.SurveyEngine.addOnload(function()
{
  /*enter the path to your video*/
  var videopath="http://player.vimeo.com/video/69208056";
  
  /*DO NOT MODIFY*/
  iruDisplayVideo(videopath);
});?

Qualtrics.SurveyEngine.addOnload(function()
{
  var autoAdvance = true;
  /*DO NOT MODIFY*/
  iruQuestionFormat(this, autoAdvance );
});?



//answer block

Qualtrics.SurveyEngine.addOnload(function()
{
  /*DO NOT MODIFY*/
  iruAnswerFormat();
});?


//last block

Qualtrics.SurveyEngine.addOnload(function()
{
  var autoAdvance = false;
  /*DO NOT MODIFY*/
  iruQuestionFormat(this, autoAdvance );
  
  var nxt = document.getElementById('NextButton');
  nxt.style.visibility = "hidden";
});?