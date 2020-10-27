var index=0;
show();



function show()
{
  var i;
  var slides= document.getElementsByClassName("slide");
  for(i=0; i<slides.length; i++) //hides all slides
    slides[i].style.display="none";
  index++;
  if(index>=slides.length)
    index=0;
  slides[index].style.display="block";
  slides[index].currentTime=0;
  setTimeout(show,slides[index].duration*1000);
}
