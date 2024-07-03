import styled from 'styled-components'

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`

export const MemeGeneratorHeading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 40px;
`

export const MemeGeneratorOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
`

export const MemeGeneratorContainer = styled.form``

export const LabelText = styled.label`
  color: #7e858e;
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const Input = styled.input`
  border: 1px solid #5a7184;
  border-radius: 3px;
  font-size: 15px;
  outline: none;
  height: 30px;
  padding: 5px;
`
export const SelectInput = styled.select`
  border: 1px solid #5a7184;
  border-radius: 3px;
  font-size: 15px;
  outline: none;
  height: 30px;
  padding: 5px;
  margin-bottom: 18px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.inputImageUrl});
  background-size: cover;
  width: 350px;
  height: 350px;
  padding: 20px;
`

export const MemeHeading = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-family: 'Roboto';
`
