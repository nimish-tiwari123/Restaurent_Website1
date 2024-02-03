function changeBg(){
    var nav1 = document.getElementById('nav1');
    var navM1 = document.getElementById('navM1');
    var navM2 = document.getElementById('navM2');
    var navM3 = document.getElementById('navM3');
    var navM4 = document.getElementById('navM4');
    var navM5 = document.getElementById('navM5');
    var navM6 = document.getElementById('navM6');
    var navM7 = document.getElementById('navM7');
    var brand = document.getElementById('brand');
    var facebook = document.getElementById('facebook');
    var twitter = document.getElementById('twitter');
    var scrollValue = window.scrollY;
    if(scrollValue<150){
      nav1.classList.remove('bgColor');
      navM1.classList.remove('blacknav');
      navM2.classList.remove('blacknav');
      navM3.classList.remove('blacknav');
      navM4.classList.remove('blacknav');
      navM5.classList.remove('blacknav');
      navM6.classList.remove('blacknav');
      navM7.classList.remove('blacknav');
      brand.classList.remove('redbrand');
      facebook.classList.remove('blackicon');
      twitter.classList.remove('blackicon');
      
    }
    else{
      nav1.classList.add('bgColor');
      navM1.classList.add('blacknav');
      navM2.classList.add('blacknav');
      navM3.classList.add('blacknav');
      navM4.classList.add('blacknav');
      navM5.classList.add('blacknav');
      navM6.classList.add('blacknav');
      navM7.classList.add('blacknav');
      brand.classList.add('redbrand');
      facebook.classList.add('blackicon');
      twitter.classList.add('blackicon');
    }
  }
  window.addEventListener('scroll', changeBg);

  
  function myFunction(){
    let message = document.getElementById("signinbtn");
    message.innerHTML ="";
    let x = document.getElementById("inputEmail3").value;
    if(x.trim()==""){
        window.alert("Please Enter Email");
    } else{
      let y = document.getElementById("inputPassword3").value;
      if(y.trim()==""){
          window.alert("Please Enter Password");
      }
    }
    
  }