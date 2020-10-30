var index=1;
var let=0;
var slides= document.getElementsByClassName("slide");
var dots= document.getElementsByClassName("dot");
if(slides.length>0)
  show();
typeLine();



function show()
{
  if(index>=slides.length)
    index=0;
  showDots();
  var i;
  for(i=0; i<slides.length; i++) //hides all slides
    slides[i].style.display="none";



  let currSlide= slides[index];
  currSlide.currentTime=0;
  currSlide.style.display="block";

    if(currSlide.duration!=null) //if it's a video
    {
      setTimeout(show,currSlide.duration*1000);
    }
    else {
      setTimeout(show,10000); //otherwise show for 10 seconds.
    }
    index++;


}

function showDots()
{
  var i;
  for(i=0; i<dots.length; i++)
    dots[i].style.backgroundColor="#555";
  dots[index].style.backgroundColor="white";
}

function typeLine()
{
  var text= "System.out.print(\"I am Brian Sostek\");"
  title= document.getElementById("title");
  title.innerHTML=text.substring(0,let);
  if(let<text.length)
  {
    let++;
    var typeTime= Math.random()*150+25;
    setTimeout(typeLine,typeTime);
  }
  else {
    setTimeout(function ()
    {
      title.innerHTML=text+"\nBrian Sostek";
    }, 1000);

  }

}
