import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import React from 'react'


const PortableImageCOmponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value)
    return (
        <img src={
            urlBuilder({ projectId: "hc076t78", dataset: "production" })
                .image(value)
                .width(isInline ? 100 : 700)
                .fit('max')
                .auto('format')
                .url()

        } alt={
            value.alt || ''
        }
            loading="lazy"
            style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? 'inline-block' : 'block',

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
            }}
        />
    )
}

export default PortableImageCOmponent