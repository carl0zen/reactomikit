import styled from 'styled-components';

export const Padder = styled.section`
  padding: 2em;
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  > * {
    flex: 1
  }
`;

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;
