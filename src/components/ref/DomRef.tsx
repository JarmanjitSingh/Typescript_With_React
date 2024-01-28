import { useEffect, useRef } from "react"


const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!); //non-null assertion when you sure html is not null
 
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef
