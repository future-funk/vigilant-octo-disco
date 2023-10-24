import parseHtmlString, { DOMNode, Element } from 'html-react-parser'

export const parseString = (htmlString: string | undefined | null) => {
  return parseHtmlString(htmlString || '', {
    replace: (domNode: DOMNode) => {
      const node = domNode as unknown as Element
      if (node.type === 'tag' && node.name === 'a' && !node.attribs['target']) {
        node.attribs['target'] = '_blank'
      }
    },
  })
}
