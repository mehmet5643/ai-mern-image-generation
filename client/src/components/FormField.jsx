import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label className='block font-medium text-gray-900 text-sm' htmlFor={name}>{labelName}</label>
        {isSurpriseMe && (
          <button className='font-semibold text-xs bg-[#ecef1] py-1 px-2 rounded-[5px] text-black' onClick={handleSurpriseMe}>Surprise me</button>
        )}


      </div>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange=  {handleChange}
        required
        className='w-full border border-gray-200 bg-gray-50  text-gray-900  py-2 text-sm rounded-lg block p-3  outline-none focus:ring-[#4649ff] focus:border-transparent'

      >
      
      </input>
    </div>
  )
}

export default FormField