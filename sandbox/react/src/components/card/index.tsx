import React, {FC} from 'react'
import Author from '@/components/ava-text'
import Heart from '@/components/heart'
import applyCss from '@stylin/style'
import styles from './styles.scss'
import {AuthorType} from '@/app/fetch-data'

const styled = applyCss(styles)
const Picture = styled.img(`picture`)
const Footer = styled.div(`footer`)
const CardBox = styled.div(`card-box`)

interface CardProps {
  author: AuthorType
  hoverEnabled: boolean
  imageUrl: string
  liked: boolean
  onClick: () => void
}

const Card: FC<CardProps> = ({author, hoverEnabled, imageUrl, liked, onClick}) => (
  <CardBox hoverEnabled={hoverEnabled} onClick={onClick}>
    <Picture src={imageUrl}/>
    <Footer>
      <Author {...author} />
      <Heart isRed={liked}/>
    </Footer>
  </CardBox>
)

export default Card