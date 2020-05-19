import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto 3em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
  color: #808080;
`

const ReadingTime = styled.p`
  display: inline-block;
  color: #808080;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date> {props.date}</Date>
      <span style={{color:'#808080'}}>•</span>
      <ReadingTime>{`${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
