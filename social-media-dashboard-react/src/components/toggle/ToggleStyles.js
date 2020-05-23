import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.span`
  margin: 1rem 0;
  display: flex;

  span {
    font-size: 14px;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
  }

  @media screen and (min-width: 800px) {
    position: absolute;
    top: 40px;
    right: 8rem;
  }
`;

const roundSlider = css`
  border-radius: 34px;

  &::before {
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 48px;
  height: 24px;
  margin-left: auto;

  @media screen and (min-width: 800px) {
    margin-left: 1em;
    top: -4px;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider::before {
    transform: translateX(-24px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.toggleBackground};
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 19px;
    width: 19px;
    right: 3px;
    bottom: 3px;
    background: #fff;
    transition: 0.4s;
  }
  ${roundSlider}
`;
