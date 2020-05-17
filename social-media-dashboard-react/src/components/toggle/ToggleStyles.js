import styled, { css } from 'styled-components';

const roundSlider = css`
  border-radius: 34px;

  &::before {
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 2rem 1rem 3rem;
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    background: linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    transform: translateX(24px);
  }

  &:checked + .slider::before {
    transform: translateX(24px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(230, 22%, 74%);
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: #fff;
    transition: 0.4s;
    ${'' /* transform: translateX(24px); */}
  }
  ${roundSlider}
`;
