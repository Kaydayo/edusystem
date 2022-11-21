import React from 'react'
import PortableImageCOmponent from './PortableImageCOmponent'



const PortableTextComponents = {
    types: {
        image: PortableImageCOmponent,
    },
    block: {
        span: ({ children }: any) => <span style={{ fontSize:"32px"}}> {children}</span>

    }
  
}

export default PortableTextComponents