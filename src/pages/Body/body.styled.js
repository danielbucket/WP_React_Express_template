import styled from 'styled-components'

export const BodyContainer = styled.div`
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: var(--banana-candy-yellow);

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
  }
  
  p {
    font-size: 4rem;
  }
}

`;