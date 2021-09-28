import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="" />
            </Background>
            <ImageTitle>
                <img src="/images/back.png" />
            </ImageTitle>
            
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                 </TrailerButton>


                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupButton>

            </Controls>

            <SubTitle>
                2017 - 1h 29m - Family/Comedy
            </SubTitle>
            <Description>
            Gru, Lucy, their adorable daughters, and the Minions are back in the comedy blockbuster where one former super-villain will rediscover just how good it feels to be bad.
            </Description>
        </Container>
    )
}

export default Details


const Container = styled.div `
    min-height: calc(100vh- 73px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    obacity: 0.8;

    img{
        width: 100%;
        height: 130vh;
        object-fit: cover;
    }
`

const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
     
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;


`

const PlayButton = styled.button  `
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px; 
    display: flex;
    align-items:center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198)
    }
`

const TrailerButton = styled(PlayButton) `
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249, 249,249);
`

const AddButton = styled.button `
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    
    span{
        font-size: 30px;
        color: white;
    }
`

const GroupButton = styled(AddButton) `
    background-color: rgb(0,0,0)

`

const SubTitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div  `
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`