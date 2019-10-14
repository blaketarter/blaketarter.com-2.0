import React from "react"
import styled from "@emotion/styled"
import { Link } from "../Link"
import { margin } from "../../utils/sizes"
import { bodyCopy, bodyLineHeight } from "../../utils/fonts"

interface Props {
  children: string
}

const linkRe = /\[([\w\s']+)\]\(([\w|:|/|.]+)\)/g

export const HighlightLinks = ({ children }: Props) => {
  if (children.search(linkRe) > -1) {
    const matches: RegExpExecArray[] = []
    let expMatch: RegExpExecArray | null
    while ((expMatch = linkRe.exec(children))) {
      // eslint-disable-line
      matches.push(expMatch)
    }
    return (
      <SummaryWrapper>
        {matches.reduce<any[]>(
          (elements, match) => {
            const index = elements.length - 1
            const split = elements[index].split(match[0])
            return [
              ...elements.slice(0, index),
              split[0],
              <Link key={match[2]} href={match[2]}>
                {match[1]}
              </Link>,
              split[1],
            ]
          },
          [children],
        )}
      </SummaryWrapper>
    )
  } else {
    return <SummaryWrapper>{children}</SummaryWrapper>
  }
}

const SummaryWrapper = styled("p")`
  padding: 0 ${margin}px;
  font-size: ${bodyCopy}px;
  line-height: ${bodyLineHeight}em;
  margin: 0;
  padding: 0;

  :nth-of-type(n + 2) {
    margin-top: ${margin}px;
  }
`
