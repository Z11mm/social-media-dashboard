import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`
export const OverviewCardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`

export const OverviewCardContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  margin: 0.5rem 0;
  /* text-align:center; */
  line-height: 3.6;
  border: 1px solid black;
`