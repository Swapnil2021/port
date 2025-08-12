'use client'
import { PopoverGroup} from '@headlessui/react'



export default function Header() {
  

  return (
    <header className="bg-black">
      <nav aria-label="Global" className="mx-auto flex max-w-xl items-center justify-between p-6 ">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="#"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          
           
        </div>
        <PopoverGroup className="flex gap-x-12">
          

          
                <a href="#" className="Tan text-white text-xl">
            HOME
          </a>
          <a href="#" className="Tan text-xl text-white">
            SKILLS
          </a>
          <a href="#" className="Tan text-xl text-white">
            ABOUTUS
          </a>
          <a href="#" className="Tan text-xl text-white">
            CONTACT
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         
        </div>
      </nav>
      
    </header>
  )
}
