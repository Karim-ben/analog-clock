const wrapperEl=document.querySelector('.wrapper')
const hourEl=document.querySelector('.hours')
const minuteEl=document.querySelector('.minutes')
const secondEl=document.querySelector('.seconds')

// array of hours
const hoursClock=Array(12).fill("").map((_,index) =>  index*180/6 )

// create traits and (12,3,6,9 hours)
function createTrait(angle){
    let boxEl=document.createElement('div')
    let spanEl=document.createElement('span')
    let traitEl=document.createElement('div')
  
    boxEl.classList.add('box')
    traitEl.classList.add('trait')
    boxEl.appendChild(traitEl)
    boxEl.appendChild(spanEl)
    boxEl.style.rotate=`${angle}deg`
    switch(angle){
        case 0:
            spanEl.textContent='12'
            traitEl.style.display="none"
            break
        case 90:
            spanEl.textContent='3'
            spanEl.style.rotate='-90deg'
            traitEl.style.display="none"
            break
        case 180:
            spanEl.textContent='6'
            spanEl.style.rotate='180deg'
            traitEl.style.display="none"
            break
        case 270:
            spanEl.textContent='9'
            spanEl.style.rotate='-270deg'
            traitEl.style.display="none"
            break
            
    }
    wrapperEl.appendChild(boxEl)
}

// display traits and (12,3,6,9 hours) 
hoursClock.forEach((angle) => { 
    createTrait(angle)
 })

// display hours 
function displayHours(hr,m){
   
    let angleMinute=m<60?(m/60):0
   
    let angle=hr*30
    hourEl.style.rotate=`${angle+Math.round(angleMinute*30)}deg`
  
}
// display minutes 
function displayMinutes(m){
    let angle=Math.round(m*30/5)
    minuteEl.style.rotate=`${angle}deg`
}
// display seconds 
function displaySeconds(s){
    let angle=Math.round(s*30/5)
    secondEl.style.rotate=`${angle}deg`
}
//  display clock

    setInterval(() => { 
        let  currentTime=new Date()

        let hr=currentTime.getHours()
        let m=currentTime.getMinutes()
        let s=currentTime.getSeconds()
        displayHours(hr+1,m)
        displayMinutes(m)
        displaySeconds(s)
    },1000)
   


