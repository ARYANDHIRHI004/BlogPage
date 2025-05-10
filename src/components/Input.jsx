import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
}, ref){
    const id = useId()
    
  return (
    <div className='w-full'>
        {label && <label>{label}</label>}
        <input type={type} ref={ref} {...props} />
    </div>
  )
})

export default Input