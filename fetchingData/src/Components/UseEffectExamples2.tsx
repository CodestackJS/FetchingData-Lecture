import { useEffect, useRef } from "react"


const UseEffectExamples2 = () => {
  
    
    const ref = useRef<HTMLInputElement>(null);

        //useEffect 1
        useEffect(() => {
            
            if(ref.current) ref.current.focus()

            
        }, [])
        

        // useEffect 2
        useEffect(() => {
          document.title = 'This is Cool'
        
        
        }, [])
        



  return (
    
    
    <>

    
    <h1 className='text-center'> Effect Example 2</h1>
    <input ref={ref} type="text" className="form-control"/>
    
    
    
    
    
    
    </>
  )
}

export default UseEffectExamples2