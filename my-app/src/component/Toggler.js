import React from 'react'

const Toggler = () => {

    let theme_color = document.querySelectorAll(".toggle_tigger span")
    theme_color.forEach(color=>color.addEventListener("click",()=>{
        let backGround = color.style.background;
        
        document.querySelector(".flex-wrap").style.background=backGround;
     


    }))
  return (
    <div className='toggle_tigger'>
        <span style={{background:"linear-gradient(#80FF00,#8181F7)"}}></span>
        <span style={{background:"linear-gradient(#FE9A2E,#DF01D7)"}}></span>
        <span style={{background:"linear-gradient(#58FAF4,#F781F3)"}}></span>
        <span style={{background:"linear-gradient(#868A08,#610B38)"}}></span>
    </div>
  )
}

export default Toggler