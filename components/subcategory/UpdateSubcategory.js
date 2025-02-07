import BackButton from '@/utils/BackButton'
import Heading from '@/utils/Heading'
import React from 'react'

function UpdateSubcategory({setUpdate}) {
  return (
    <div className="flex flex-row items-center">
    <BackButton change={() => setUpdate(prev => !prev)} style={'mt-[-18px]'} />
    <Heading title={"Update Subcategory"} />
    </div>
  )
}

export default UpdateSubcategory