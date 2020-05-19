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
  padding: 0.5rem 0;
`

export const Handle = styled.span`
  font-size: 14px;
`
