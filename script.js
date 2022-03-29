const panels = document.querySelectorAll('.panel');
// console.log(panels)

// console.log(panels[1])
panels.forEach(panel=>{
    // console.log(panel)
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        // console.log(123)
        panel.classList.add('active')
    })
})
const removeActiveClasses = ()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
        
    
}
