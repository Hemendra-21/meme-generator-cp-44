import {Component} from 'react'
import {
  MemeGeneratorHeading,
  OuterContainer,
  InnerContainer,
  MemeGeneratorOuterContainer,
  MemeGeneratorContainer,
  InputContainer,
  LabelText,
  Input,
  SelectInput,
  GenerateButton,
  MemeContainer,
  MemeHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
    isSelected: true,
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    generateMeme: false,
    inputImageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
    memeDetails: {},
  }

  onChangeInputImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()

    const {inputImageUrl, topText, bottomText, fontSize} = this.state

    const updatedMemeDetailsObject = {
      inputImageUrl,
      topText,
      bottomText,
      fontSize,
    }

    this.setState({
      generateMeme: true,
      memeDetails: updatedMemeDetailsObject,
    })
  }

  render() {
    const {generateMeme, memeDetails} = this.state

    return (
      <OuterContainer>
        <InnerContainer>
          <MemeGeneratorOuterContainer>
            <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
            <MemeGeneratorContainer onSubmit={this.onFormSubmit}>
              <InputContainer>
                <LabelText htmlFor="imageUrl">Image URL</LabelText>
                <Input
                  type="text"
                  id="imageUrl"
                  onChange={this.onChangeInputImageUrl}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="top-text">Top Text</LabelText>
                <Input
                  type="text"
                  id="top-text"
                  onChange={this.onChangeTopText}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="btm-text">Bottom Text</LabelText>
                <Input
                  type="text"
                  id="btm-text"
                  onChange={this.onChangeBottomText}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="font-size">Font Size</LabelText>
                <SelectInput onChange={this.onChangeFontSize} id="font-size">
                  {fontSizesOptionsList.map(eachOption => (
                    <option
                      selected={eachOption.isSelected}
                      key={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </SelectInput>
                <GenerateButton type="submit">Generate</GenerateButton>
              </InputContainer>
            </MemeGeneratorContainer>
          </MemeGeneratorOuterContainer>

          {generateMeme ? (
            <MemeContainer
              inputImageUrl={memeDetails.inputImageUrl}
              data-testid="meme"
            >
              <MemeHeading fontSize={memeDetails.fontSize}>
                {memeDetails.topText}
              </MemeHeading>
              <MemeHeading fontSize={memeDetails.fontSize}>
                {memeDetails.bottomText}
              </MemeHeading>
            </MemeContainer>
          ) : null}
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default MemeGenerator
