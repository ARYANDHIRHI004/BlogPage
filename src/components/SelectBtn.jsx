import React, { useId } from 'react'

const SelectBtn = ({
    options,
    label,
    className,
    ...prop
}, ref) => {

    const id = useId()

  return (
    <div>
        {label && <label>{label}</label> }
        <select id={id} ref={ref}>
            {options?.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}


export default React.forwardRef(SelectBtn)