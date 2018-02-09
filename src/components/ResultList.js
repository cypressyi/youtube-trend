import React from 'react'
import VideoItem from './VideoItem'

function ResultList({ videoList }) {
  return (
    <div>
      {
        videoList.map((item) => {
          const { id } = item
          const url = `https://www.youtube.com/watch?v=${id}`
          const { title, channelTitle, description, publishedAt, thumbnails } = item.snippet
          const { viewCount } = item.statistics
          return (
            <VideoItem
              url={url}
              title={title}
              channelTitle={channelTitle}
              description={description}
              publishedAt={publishedAt}
              thumbnails={thumbnails}
              viewCount={viewCount}
            />
          )
        })
      }
    </div>
  )
}

export default ResultList
