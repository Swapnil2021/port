import { ScrollBasedVelocityDemo } from '@/components/comp/Scroll'
import { ShinyButton } from "@/components/magicui/shiny-button";
import React from 'react'

function Hero() {
  return (<>
    <div className='p-20 bg-yellow-100 '> 
       <p className='Tan text-9xl '>WELCOME TO</p>
      <p className='Tan text-9xl'>MY😈</p>
      <p className='Tan text-9xl'>PORTFOLIO</p>
      
      <div className="flex justify-center gap-20 py-5">
       <ShinyButton className="Tan text-9xl"  onClick={() => window.location.href = "mailto:swapnilsanjaysurve07@gmail.com"}>
  
    hire me

</ShinyButton>
       
       <ShinyButton
  className="Tan text-9xl"
  onClick={() => {
    window.open('/assets/SwapnilSurve.pdf', '_blank');}}
>
  Resume
</ShinyButton></div>
    </div>
    <ScrollBasedVelocityDemo/>
    </>
  )
}

export default Hero
