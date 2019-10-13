import React from "react"
import styled from "@emotion/styled"
import { WorkItem } from "../WorkItem"
import {
  margin,
  maxWidth,
  smallUpQuery,
  darkModeQuery,
} from "../../globals/sizes"
import {
  primary,
  secondary,
  primaryDark,
  darkLighterBackground,
} from "../../globals/colors"
import { sectionTitle } from "../../globals/fonts"

const workItems = [
  {
    title: "KCMO Bus Stops",
    desc:
      "A React Native application that shows bus stops in the Kansas City area around your current location and hands off navigation to them using the system navigation app.",
    url: "https://play.google.com/store/apps/details?id=com.blaketarter.kcbus",
    img: "kcbus.png",
    alt: "kcbus logo",
    tags: ["React-Native", "App"],
    source: "the Play Store",
  },
  {
    title: "Web Audio Synth",
    desc:
      "Web-based synthesizer using the Web Audio API that also displays its waveform using Canvas that can be played with a computer keyboard.",
    url: "https://codepen.io/blaketarter/full/GgdOXd/",
    img: "audio.png",
    alt: "syntesizer screenshot",
    tags: ["Web-Audio", "Canvas"],
    source: "Codepen",
  },
  {
    title: "Re-Ticky Tacky",
    desc:
      "A game of Tic-Tac-Toe written in ReasonML that can be ran natively on the desktop or on the web.",
    url: "https://github.com/blaketarter/reticky-tacky",
    img: "ticky-tacky.png",
    alt: "tic-tac-toe screenshot",
    tags: ["Game", "ReasonML"],
    source: "Github",
  },
  {
    title: "PaginatedListView",
    desc:
      "Extension of React-Native ListView that takes a fetch function and a page size and automatically handles pagination.",
    url: "https://www.npmjs.com/package/react-native-paginated-listview",
    img: "listview.png",
    alt: "listview screenshot",
    tags: ["React", "ListView"],
    source: "NPM",
  },
  {
    title: "simple-fp",
    desc:
      "A simple, small, no dependency functional programming library used as a tool to explore functional programming concepts.",
    url: "https://www.npmjs.com/package/simple-fp",
    img: "fp.png",
    alt: "simple-fp code screenshot",
    tags: ["Functional Programming", "Library"],
    source: "NPM",
  },
  {
    title: "Dungeon Gen",
    desc:
      "Playing around with procedurally generating ascii based dungeons with rooms and envirnmental hazards.",
    url: "https://github.com/blaketarter/dungeon-gen/blob/master/game.js",
    img: "dung.png",
    alt: "ascii dungeon screenshot",
    tags: ["Procedural Generation", "ASCII"],
    source: "Github",
  },
  {
    title: "Morse Code Generator",
    desc:
      "Javascript code that turns plain text into Morse Code style dots and dashes.",
    url: "https://codepen.io/blaketarter/full/bNROPP/",
    img: "morse.png",
    alt: "Morse code screenshot",
    tags: ["Text Translation"],
    source: "Codepen",
  },
  {
    title: "Random Text Replacer",
    desc:
      "Tool to create similar phrases with interchangable words using a simple syntax to select a random word from a list of possibilities.",
    url: "https://codepen.io/blaketarter/full/QbxKXm/",
    img: "replace.png",
    alt: "replacer screenshot",
    tags: ["Tool", "Phrase Generation"],
    source: "Codepen",
  },
]

export const MyWork = () => (
  <WorksWrapper id="my-work">
    <Polygon1 />
    <Polygon2 />
    <Clip>
      <InnerWrapper>
        <Title>My Work.</Title>
        <WorkItemsWrapper>
          {workItems.slice(0, 5).map((workItem, index) => (
            <WorkItem
              key={workItem.url}
              isFeatured={index === 0}
              {...workItem}
            />
          ))}
        </WorkItemsWrapper>
      </InnerWrapper>
    </Clip>
  </WorksWrapper>
)

const WorksWrapper = styled("section")`
  position: relative;
`

const Clip = styled("div")`
  background: ${secondary};
  clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  -webkit-clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  padding: ${3 * margin}px 0;

  ${smallUpQuery} {
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
    -webkit-clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  }

  ${darkModeQuery} {
    background: ${darkLighterBackground};
  }
`

const Title = styled("h2")`
  font-size: ${sectionTitle}px;
  margin-left: ${margin}px;
`

const Polygon1 = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: top right;

  ${darkModeQuery} {
    opacity: 0.5;
  }
`

const Polygon2 = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to left, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: bottom left;

  ${darkModeQuery} {
    opacity: 0.5;
  }
`

const InnerWrapper = styled("div")`
  margin: 0 auto;
  max-width: ${maxWidth}px;
`

const WorkItemsWrapper = styled("ul")`
  padding: 0;
  margin: ${margin * 3}px auto;

  ${smallUpQuery} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
