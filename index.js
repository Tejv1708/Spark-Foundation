let myleads = [] 
let nameEl=document.getElementById('Name')
let email = document.getElementById('Email')
let donateNow = document.getElementById("DonateNow")
let submitNowEl = document.getElementById("submitNow")

submitNowEl.addEventListener('click' ,function(){
myleads.push(nameEl.value)
nameEl.value =''
localStorage.setItem("myleads", JSON.stringify(myleads))
})
function render(myleads){
    let listItems = "" 
    for (let i = 0 ; i < myleads.length ; i++){
        listItems += `
        <li>
            <a tareget ='_blank' href='${myleads[i]}' >
                ${myleads[i]}
                </a>
                </li> 
                `
                                        
    }
    ulEl.innerHTML = listItems ;
}