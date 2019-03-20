import styled from "styled-components"

export const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  font-family: Interstate;
  font-weight: 700;
  font-size: 2rem;
  color: ${props => (props.primary ? props.theme.white : props.theme.red)};
  width: fit-content;
  border-radius: 5px;
  background: ${props =>
    props.primary
      ? `linear-gradient(
    270deg,
    #94010f -19.75%,
    #a4000f 125.79%,
    #ac000b 125.8%
  )`
      : props.theme.white};
  /* background: ${props =>
    props.primary
      ? `linear-gradient(
    270deg,
    #94010f -19.75%,
    #a4000f 125.79%,
    #ac000b 125.8%
  )`
      : `linear-gradient(90deg, #0B58A4 -25.11%, #27456B 124.68%)`}; */
  transition: all ${props => props.theme.animationTime} ease;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${props => props.theme.lightGrey};
    transform: translateY(-3px);
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.marginY};
  width: 400px;
  justify-content: space-around;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`
