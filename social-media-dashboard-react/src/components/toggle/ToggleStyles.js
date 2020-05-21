import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.div`
  margin: 1rem 0;
  display: flex;

  span {
    font-size: 14px;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
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
  width: 45px;
  height: 20px;
  margin-left: auto;
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  /* &:checked {
    background: linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    transform: translateX(24px);
  } */

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
    height: 15px;
    width: 15px;
    right: 3px;
    bottom: 3px;
    background: #fff;
    transition: 0.4s;
  }
  ${roundSlider}
`;
