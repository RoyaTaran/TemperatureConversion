let $=document

const amountC=$.querySelector('.c')
const amountF=$.querySelector('.f')
const convertInput=$.querySelector('.convertInput')
const result=$.querySelector('.result')
const convertBtn=$.querySelector('.convertBtn')
const resetBtn=$.querySelector('.resetBtn')
const changeBtn=$.querySelector('.changeBtn')



function convertBtns(){ 
    if(isNaN(convertInput.value)){
        result.innerHTML='لطفا از اعداد استفاده نمایید'
        result.style.color='red'

    }else if(amountC.innerHTML === 'c°'){
        let CtoF=(convertInput.value * 9/5)+32
        result.innerHTML=convertInput.value +' سلسیوس برابر است با '+CtoF+' فارنهایت   '
        result.style.color='#fff200'
    }else{
        let FtoC=(convertInput.value-32)*5/9
        result.innerHTML=convertInput.value + ' فارنهایت برابر است با '+FtoC.toFixed(2)+' سلسیوس  '
        result.style.color='#fff200'
    }
    
}
function resetBtns(){
    if(convertInput.value===''){
        result.innerHTML='ورودی خالی می باشد'
        result.style.color='red'
        
    }else{
        convertInput.value=''
        result.innerHTML=''
    }
    }
function changeBtns(){ 
    // console.log("تغییر")
    if(amountC.innerHTML === 'c°'){
        amountC.innerHTML='f°'
        amountF.innerHTML='c°'
        convertInput.setAttribute('placeholder', 'f°')
        $.title = 'تبدیل f° به c°'
        
    }else{
        amountC.innerHTML='c°'
        amountF.innerHTML='f°'
        convertInput.setAttribute('placeholder', 'c°')
        $.title = 'تبدیل c° به f°'
    }
}


convertBtn.addEventListener('click',convertBtns)
resetBtn.addEventListener('click',resetBtns)
changeBtn.addEventListener('click',changeBtns)