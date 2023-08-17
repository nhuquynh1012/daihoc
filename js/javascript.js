{
    let index = 1;
            changeimge= function(){
                let imgs = ["img/Anhnen1.png" , "img/Anhnen2.png","img/Anhnen3.png","img/Anhnen4.png","img/Anhnen5.png","img/Anhnen6.png"];
                document.getElementById(`imge`).src =imgs[index];
                index++;
                if(index===6){
                    index =0;
                }
            }
            setInterval(changeimge,1000);
}
{
    let imgFeature = document.querySelector('.img-feature')
    let listImg = document.querySelector('.list-image img')
    let prevBtn = document.querySelector('prev')
    let nextBtn = document.querySelector('next')

    listImg.forEeach(imgElement=>{
        imgElement.addEventlistener('click',e=>{
           imgFeature.src= e.target.getAttribute('src')
        })
    })
}

