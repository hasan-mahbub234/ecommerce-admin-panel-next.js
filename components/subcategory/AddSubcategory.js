import BackButton from '@/utils/BackButton'
import Button from '@/utils/Button'
import Heading from '@/utils/Heading'
import ImageInput from '@/utils/ImageInput'
import Input from '@/utils/Input'
import React from 'react'

function AddSubcategory({setAdd,setSubcategory, subcategory, handleAdd}) {
  return (
    <>
    <div className="flex flex-row items-center">
    <BackButton change={() => setAdd(prev => !prev)} style={'mt-[-18px]'} />
    <Heading title={"Add A Subcategory"} />
    </div>
    {/* Form */}
    <div className=''>
        <Input type={'text'} label={'Subcategory name'} placeholder={'Enter subcategory name'} value={subcategory.name}  change={(value) => setSubcategory(prev => ({ ...prev, name: value }))} />
        <ImageInput label={"Subcategory Image"} value={subcategory.image} change={(value) => setSubcategory(prev => ({ ...prev, image: value }))} />
        <Button text={'Add'} change={handleAdd} />
    </div>
    </>
  )
}

export default AddSubcategory