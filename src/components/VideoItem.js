import React from 'react'
import { Item, Label, Transition } from 'semantic-ui-react'
import formatView from '../common/viewFormat'
import moment from 'moment'

function VideoItem({
  url,
  title,
  channelTitle,
  description,
  publishedAt,
  thumbnails,
  viewCount,
}) {
  let image_url = thumbnails.medium.url
  let timeAgo = moment(publishedAt).fromNow()

  return (
    <Transition transitionOnMount={true} animation='fade' duration={800}>
      <Item.Group>
        <Item as="a" href={url} target="_BLANK">
          <Item.Image size="medium" src={image_url} />
          <Item.Content>
            <Item.Header target="_BLANK">{title}</Item.Header>
            <Item.Description className="video-description">{description}</Item.Description>
            <Item.Extra>
            <Label>{channelTitle}</Label>
            <Label>{formatView(viewCount)} views</Label>
            <Label>{timeAgo}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Transition>
  )
}

export default VideoItem
