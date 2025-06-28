'use client'
import React from 'react'

// Define your YouTube video data
const youtubeVideos = [
  {
    id: 'vMc7euF67lg'
    
  },
  {
    id: 'pj_bVgANAxg'
    
  },
  {
    id: 'VW97dpklud4'
    
  },
  {
    id: 'J6lpzQyEeSA'
    
  },
  {
    id: 'EF7MDeZbS84'
  },
  {
    id: 'hOcppdlW6DM'
  }
]

export default function Videos() {
  return (
    <div className="lg:w-[1200px] lg:mt-40 mt-10 w-[350px] md:w-[500px] mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {youtubeVideos.map((video) => (
          <div key={video.id} className=" rounded shadow overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
            
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
