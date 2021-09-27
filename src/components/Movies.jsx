import React from 'react'
import styled from 'styled-components'

const Movies = () => {
    return (
        <Container>
            <h3>Recommended For You</h3>
            <Content>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v" alt="" />
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div `
    padding-bottom: 100px

`


const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(6,minmax(0,1fr));
`

const Wrap = styled.div `
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
                rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 500ms ;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.2);
        border-color: rgba(249, 249, 249 0.8);
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
                    rgb(0 0 0 /73%) 0px 16px 10px -10px;

    }
`