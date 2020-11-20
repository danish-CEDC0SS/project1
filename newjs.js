
    var x= document.getElementById("preload");
    function fun(){
    x.style.display="none";
    }



        var z=[];
        j=0;
      function myfun(val) {
      if(z[0]!=val){
      z[j]=val;
      if(j!=0){
        var p= document.getElementById(z[0]);
        p.style.display='none';
        j=1;
        z[0]=z[1];
      }
      j=1;
    }
  var y = document.getElementById(val);
  if (y.style.display === 'none') {
    y.style.display = 'block';
  } else {
    y.style.display = 'none';
  }
}





 // window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("a3").style.backgroundColor = "white";
//     document.getElementById("a1").style.color = "black";
//     for(i=0;i<4;i++)
//        {
//            document.getElementsByClassName("a500")[i].style.color = "black";
//        }
//   } else {
//     document.getElementById("a3").style.backgroundColor = "rgb(33, 37, 41)";
//     document.getElementById("a1").style.color = "white";
//     for(i=0;i<4;i++) 
//         {
//            document.getElementsByClassName("a500")[i].style.color = "white";
//         }
//   }
//  }








jQuery( document ).ready(function( $ ) {


        if ($('.owl-clients').length) {
            $('.owl-clients').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 3,
                        margin: 20
                    },
                    992: {
                        items: 5,
                        margin: 30
                    }
                }
            });
        }

});



$('.carousel').carousel({
  interval: 3500
})





// function scrollFunction() {
//   if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
//   	document.getElementById("a300").style.position = "fixed";
//   	document.getElementById("a300").style.backgroundColor = "white";
//   	document.getElementById("a1").style.color = "black";
//   	for(i=0;i<5;i++)
//        {
//            document.getElementsByClassName("a500")[i].style.color = "black";
//        }
    

//   }
//  else
//   	{
//         document.getElementById("a300").style.position = "relative";
//         document.getElementById("a300").style.backgroundColor = "rgb(33, 37, 41)";
//         document.getElementById("a1").style.color = "white";
//         for(i=0;i<5;i++) 
//         {
//            document.getElementsByClassName("a500")[i].style.color = "white";
//         }
//   	}
//   }






      window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("a3").style.backgroundColor = "white";
    document.getElementById("a1").style.color = "black";
    for(i=0;i<5;i++)
       {
           document.getElementsByClassName("a500")[i].style.color = "black";
       }
  } else {
    document.getElementById("a3").style.backgroundColor = "rgb(33, 37, 41)";
    document.getElementById("a1").style.color = "white";
    for(i=0;i<5;i++) 
        {
           document.getElementsByClassName("a500")[i].style.color = "white";
        }
  }
 }




	function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
  	document.getElementById("a300").style.position = "fixed";
  	document.getElementById("a300").style.backgroundColor = "white";
  	document.getElementById("a1").style.color = "black";
  	for(i=0;i<5;i++)
       {
           document.getElementsByClassName("a500")[i].style.color = "black";
       }
    

  }
 else
  	{
        document.getElementById("a300").style.position = "relative";
        document.getElementById("a300").style.backgroundColor = "rgb(33, 37, 41)";
        document.getElementById("a1").style.color = "white";
        for(i=0;i<5;i++) 
        {
           document.getElementsByClassName("a500")[i].style.color = "white";
        }
  	}
  }
