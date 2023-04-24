import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Junior Figueiredo" image="https://avatars.githubusercontent.com/u/109630188?v=4" percentual={99}/>
                <UserInfo nome="Junior Figueiredo" image="https://avatars.githubusercontent.com/u/109630188?v=4" percentual={65}/>
                <UserInfo nome="Junior Figueiredo" image="https://avatars.githubusercontent.com/u/109630188?v=4" percentual={45}/>
                <UserInfo nome="Junior Figueiredo" image="https://avatars.githubusercontent.com/u/109630188?v=4" percentual={35}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
