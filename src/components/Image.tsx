import React from 'react'

interface ImageProps {
  imageURL: string
}

export const Image: React.FC<ImageProps> = ({ imageURL }) => {
  return (
    <div className="image-content">
      {imageURL ? (
        <img src={imageURL} alt="content" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <div>📷 Image</div>
      )}
    </div>
  )
}
