var index=0;
var slides= document.getElementsByClassName("slide");
var dots= document.getElementsByClassName("dot");

show();



function show()
{

  showDots();
  var i;
  for(i=0; i<slides.length; i++) //hides all slides
    slides[i].style.display="none";
  index++;
  if(index>=slides.length)
    index=0;
  slides[index].style.display="block";
  slides[index].currentTime=0;
  if(slides[index].duration>0)
    setTimeout(show,slides[index].duration*1000);
  else {
    setTimeout(show,10000);
  }
}

function showDots()
{
  var i;
  for(i=0; i<dots.length; i++)
    dots[i].style.backgroundColor="#555";
  dots[index].style.backgroundColor="white";
}
