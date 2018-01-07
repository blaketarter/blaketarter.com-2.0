import React from 'react';
import styled from 'preact-emotion';
import { margin } from '../../globals/sizes';
import { bodyCopy } from '../../globals/fonts';

const shuffle = function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

const SkillsWrapper = styled('div')`
  margin: ${ 3 * margin }px 0;
`;

const CopyWrapper = styled('div')`
  font-size: ${ bodyCopy * 1.5 }px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const FrontCopy = styled('span')`
  font-weight: 300;
`;

const SkillsListWrapper = styled('ul')`
  margin: 0;
  padding: 0;
  display: inline-block;
  flex: 1;
  height: 30px;
  overflow: hidden;
`;

const SkillItem = styled('li')`
  list-style: none;
  display: inline-block;
  margin-left: ${ props => (props.length) ? (margin / 2) : 0 }px;
  font-weight: 700;
  opacity: ${ props => 1 - (0.2 * props.index) };
  transition: 0.2s ease opacity;
`;

const keystrokeLength = 50;

const wordLength = 2000;

class SkillsSwapper extends React.Component {
  constructor(props) {
    super(props);
    const skillsShuffled = shuffle(this.props.skills);

    this.state = {
      skillsRandomized: skillsShuffled,
      currentSkill: skillsShuffled[0],
      mode: 'letter',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.requestAnimationFrame(this.deleteLetterOrWord);
    }, wordLength);
  }

  deleteLetterOrWord = () => {
    const mode = this.state.skillsRandomized[0].length ? 'letter' : 'word';

    switch (mode) {
      case 'word':
        setTimeout(() => {
          const firstWord = this.state.skillsRandomized[1];

          this.setState({
            skillsRandomized: [firstWord, ...this.state.skillsRandomized.slice(2), this.state.currentSkill],
            currentSkill: firstWord,
            mode,
          });

          window.requestAnimationFrame(this.deleteLetterOrWord);
        }, wordLength);
        break;
      default:
        setTimeout(() => {
          const firstWord = this.state.skillsRandomized[0].substring(1);

          this.setState({
            skillsRandomized: [firstWord, ...this.state.skillsRandomized.slice(1)],
            mode,
          });

          window.requestAnimationFrame(this.deleteLetterOrWord);
        }, keystrokeLength);
    }
  }

  render() {
    const skillsList = this.state.skillsRandomized.map((skill, index) => (
      <SkillItem index={index} key={index} length={skill.length}>{skill}</SkillItem>
    ));

    return (
      <SkillsWrapper>
        <CopyWrapper>
          <FrontCopy>{this.props.copy}</FrontCopy>
          <SkillsListWrapper>
            {skillsList}
          </SkillsListWrapper>
        </CopyWrapper>
      </SkillsWrapper>
    );
  }
}

export default SkillsSwapper;
