import React from 'react'
import { StyledExistingBlock } from './styledcss/general'
import wave from '../assets/audiowave.jpg'

const ExistingBlock = () => {
  return (
    <StyledExistingBlock>
        <img src={wave} alt="audio wave" />
    </StyledExistingBlock>
  )
}

export default ExistingBlock