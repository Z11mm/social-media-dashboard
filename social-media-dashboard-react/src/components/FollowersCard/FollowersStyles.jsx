import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

export const FollowersCardWrapper = styled.div`
  border-top: 3px solid ${props => props.color};
  text-align: center;
  padding: 1rem 0;
  line-height: 1.6;
  margin: 1rem 0;
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
`;
