import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogo1 src="/images/cta-logo-one.svg" />
                <SignUp> GET ALL THERE </SignUp>
                 <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam nam facilis molestiae voluptate maxime eligendi voluptatum animi tempora iure?
                 </Description>
                <CTALogo2 src="/images/cta-logo-two.png" />

            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div   `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.8;
        z-index: -1;
    }

`

const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    `
    
    const CTALogo1 = styled.img `
    `
    
    const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: whitesmoke;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 100ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
        transform: scale(1.2);

    }

`
const Description = styled.div `
    font-weight: 12px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height:  1.5;

`

const CTALogo2 = styled.img `
    width: 90%;
    // align-items: center;
`