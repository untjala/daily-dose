import React from 'react';
import styled from 'styled-components';
import { NightsStay, FavoriteBorderOutlined } from '@material-ui/icons';

const Container = styled.div`
 margin-bottom: 20px;
  `

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 200px;
  color: #FEF5ED
`

const Desc = styled.p`
  font-style: italic;
  font-size: 30px;
  text-align: center;
  margin-left: 200px;
  color: #FEF5ED
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  `;
const Li = styled.div`
  font-style: italic;
  font-size: 25px;
  font-weight: bold;
  color: #FEF5ED;
  margin-right: 20px;
  margin-bottom: 85px;
  cursor: pointer;
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Title> daily dose </Title>
          <Desc> a little dose of your day-to-day. </Desc>
        </Center>
        <Right>
          <Li> archive <NightsStay /> </Li>
          <Li> logout <FavoriteBorderOutlined /> </Li>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header