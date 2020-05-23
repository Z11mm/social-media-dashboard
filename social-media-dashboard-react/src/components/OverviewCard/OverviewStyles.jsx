import styled from 'styled-components';

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
  padding-top: 1rem;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
  }
`;

export const OverviewCardContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem 1.5rem;
  margin: 0.5rem 0;
  line-height: 3;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardBackground};

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

export const OverviewCount = styled.span`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.figures};
`;
