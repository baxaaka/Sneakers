"use strict"




    let index=0 

function slider(){
    if(index>$a(".slide-item").length-1){
        index=0
    }
    if(index<0){
        index=$a('.slide-item').length-1;
    }
    $(".slide-list").style.transform=`translateX(-${index*400}px)`;
    
}





    // $('.next').addEventListener('click' , ()=>{
    //     index++;
    //     slider()
    // })
    // $('.prev').addEventListener('click' , ()=>{
    //     index--;
    //     slider()
        
    // })

   
    



setInterval(()=>{
    index++
    slider()
},5000)            




/// module header

const korz =document.querySelector('.korz')


korz.addEventListener('click',(e)=>{
  $('.module-head').classList.toggle("active")
  $('.module-head').style.transition = "all 9s";
  
})




const rasm = document.querySelectorAll('.rasm')

const moda =document.querySelector(".modal-body")

rasm.forEach((e)=>{
    
    e.addEventListener('click', (item)=>{
        $('.modal-body').classList.add('open')
        moda.style.transition="all 4s easy"
       
    })
})


/// ===============header body=======================



let indexs=0 

function sliderR(){
    if(indexs>$a(".slide-item-2").length-1){
        indexs=0
    }
    if(indexs<0){
        index=$a('.slide-item-2').length-1;
    }
    $(".slide-list-2").style.transform=`translateX(-${indexs*500}px)`;
    
}





    $('.next').addEventListener('click' , ()=>{
        indexs++;
        sliderR()
    })
    $('.prev').addEventListener('click' , ()=>{
        indexs--;
        sliderR()
        
    })

   
    




    const close= document.querySelector('#close')


    close.addEventListener('click',(e)=>{
          $('.modal-body').classList.remove('open')
    })

    


    ///======hisob =======



    const minus =document.querySelector(".btn-1")

    const plus =document.querySelector(".btn-2")

    const hisob1= document.querySelector(".hisob")

    const pul= document.querySelector(".pul")

    minus.addEventListener('click', (e)=>{
      
       
    })
    



    //== add to cart 



    const deleteBtn= document.querySelector(".delete")

    const addBtn =document.querySelector(".btn")
               
    const ss= document.querySelector(".harid-oynasi")    

    deleteBtn.addEventListener("click",
    ()=>{
       
        $(".harid-oynasi").classList.add("yashirin")
        $(".korz-2").classList.add("yashirin")


    })

    addBtn.addEventListener("click",
    ()=>{
       
        $(".harid-oynasi").classList.remove("yashirin")

        $(".korz-2").classList.remove("yashirin")

    })



    //===============================hhis

 