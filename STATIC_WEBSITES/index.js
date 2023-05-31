currentIndex=0

images=["first.jpg","Second.jpg","Third.jpg","fourth.jpg","fifth.jpg"]

setInterval(
        function()
        {
            currentIndex=Math.round(Math.random()*5)
            document.getElementById("img1").src=images[currentIndex]
        },5000
)

function changeimage(arrowtype)
{
    if (arrowtype=="right"){
        currentIndex=currentIndex==5?0:++currentIndex

    }
    else if(arrowtype=="left"){
        currentIndex=currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}
