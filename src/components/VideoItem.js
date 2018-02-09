import React from 'react'

function VideoItem({
  url,
  title,
  channelTitle,
  description,
  publishedAt,
  thumbnails,
  viewCount,
}) {
  return (
    <li>{title}</li>
  )
}

export default VideoItem
