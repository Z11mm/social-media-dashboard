import styled from 'styled-components';
import { Count } from '../FollowersCard/FollowersStyles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.text};
`;

export const OverviewCardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const OverviewCardContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  margin: 0.5rem 0;
  line-height: 3.6;
  border: 1px solid black;

  div:nth-child(2n) {
    justify-self: end;
  }
`;
export const OverviewContent = styled.div`
  :first-child {
    color: ${({ theme }) => theme.text};
    font-weight: 700;
    font-size: 14px;
  }

  :nth-child(4) {
    display: flex;
    align-items: center;
  }
`;

export const OverviewCount = styled(Count)`
  font-size: 36px;
  line-height: 1.2;
`