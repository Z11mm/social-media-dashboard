import styled from 'styled-components';

export const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  border-bottom: 1px solid hsl(228, 12%, 44%);
  line-height: 1.5;
  padding-bottom: 0.5rem;

  h2 {
    color: ${({ theme }) => theme.figures};
  }
`;

export const Total = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: hsl(228, 12%, 44%);
`;
