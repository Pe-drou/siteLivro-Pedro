let list = document.querySelectorAll('.imgs')
let count = parseInt(list.length)
let ativo = parseInt(0)

const botao =(val)=>{
    let disable = document.querySelector('.ativo')
    disable.classList.remove('ativo') 
    if(val == `prev`){
        ativo+=1
        if(ativo==count){ativo=0}
        list[ativo].classList.add('ativo')
    }
    if(val == `next`){
        ativo-=1
        if(ativo<0){ativo=count-1}
        list[ativo].classList.add('ativo')
    }
}