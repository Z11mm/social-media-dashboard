import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    margin-top: 2rem;
  }
`;

export const FollowersCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  padding: 1.4rem 0;
  line-height: 1.6;
  margin: 1rem 0;
  background: ${({ theme }) => theme.cardBackground};
  position: relative;
  width: 100%;

  @media screen and (min-width: 800px) {
    ::before {
      border-radius: 13px;
      content: '';
      background: ${props => props.color};
      width: 100%;
      height: 100%;
      top: -4px;
      left: 0px;
      position: absolute;
      z-index: -1;
    }
  }
`;

export const Content = styled.div`
  :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :nth-child(2) {
    line-height: 1.2;
    padding: 1rem 0;
  }

  :nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
  }
`;

export const Handle = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  padding-left: 0.5em;
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.figures};
  font-size: 54px;
  font-weight: 700;
`;

export const Stat = styled.span`
  color: ${props => props.rateColor};
  font-size: 12px;
  font-weight: 700;
  margin-left: 0.3em;
`;
