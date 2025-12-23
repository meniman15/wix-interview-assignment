export type Alignment = 'left' | 'center' | 'right'

export interface TextContent {
  id: string
  type: 'text'
  text: string
  alignment: Alignment
}

export interface ImageContent {
  id: string
  type: 'image'
  imageURL: string
}

export type ContentBlock = TextContent | ImageContent

export interface Component {
  id: string
  children: Component[]
  content?: ContentBlock
}
