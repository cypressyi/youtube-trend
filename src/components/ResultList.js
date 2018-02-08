import React from 'react'
import VideoItem from './VideoItem'

function ResultList({ videoList }) {
  return (
    <div>
      {
        videoList.map((item) => {
          return (
            <VideoItem
              text={item.region}
            />
          )
        })
      }
    </div>
  )
}

export default ResultList
