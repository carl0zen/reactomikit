import styled from 'styled-components';

export const Padder = styled.section`
  padding: 2em;
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    flex: 1
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;
