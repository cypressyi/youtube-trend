import React from 'react'
import { Item, Label, Transition } from 'semantic-ui-react'
import moment from 'moment'
import formatView from '../common/viewFormat'

function VideoItem({
  url,
  title,
  channelTitle,
  description,
  publishedAt,
  thumbnails,
  viewCount,
}) {
  const imageUrl = thumbnails.medium.url
  const timeAgo = moment(publishedAt).fromNow()

  return (
    <Transition transitionOnMount animation="fade" duration={800}>
      <Item.Group>
        <Item as="a" href={url} target="_BLANK">
          <Item.Image size="medium" src={imageUrl} />
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
