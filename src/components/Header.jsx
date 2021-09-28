import styled from "styled-components"
const Header = () => {
    return (
        <Nav>
            <Logo src="./images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
                
                <a>
                    <img src="/images/watchList-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
            </NavMenu>

            <UserImg src="https://avatars.githubusercontent.com/u/76906632?v=4" />
        </Nav>
    )
}

export default Header


// [[[[[[[[[[[[(((((Styled-Components)))))]]]]]]]]]]]]

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items:center;
    padding: 0 36px;
    justify-content: space-between;
    position: sticky;
    overflow-x: hidden;
    `
    
    const Logo = styled.img`
    width: 95px;
    `
    
    const NavMenu = styled.div`
    display: flex;
    // flex: 1;
    margin-left: 25px;
    align-items: center; 
    

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 25px;
        }

        span{
            font-size: 14px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after{
                content:"";
                height: 3px;
                background: whitesmoke;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;

                transform-origin: center ;
                transition:all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                opacity: 0;
                transform: scaleX(0)
            }
        }

        &:hover{
            span:after{
                transform: scale(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`


