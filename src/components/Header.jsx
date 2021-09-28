import styled from "styled-components"
const Header = () => {
    return (
        <Nav>
            <Logo src="./images/logo.svg" />
            <NavMenu>
                <button>
                    <img src="/images/home-icon.svg"alt="" />
                    <span>HOME</span>
                </button>
                
                <button>
                    <img src="/images/search-icon.svg" alt=""/>
                    <span>SEARCH</span>
                </button>
                
                <button>
                    <img src="/images/original-icon.svg"alt="" />
                    <span>ORIGINALS</span>
                </button>
                
                <button>
                    <img src="/images/movie-icon.svg" alt=""/>
                    <span>MOVIES</span>
                </button>
                
                <button>
                    <img src="/images/series-icon.svg" alt=""/>
                    <span>SERIES</span>
                </button>
                
                <button>
                    <img src="/images/watchList-icon.svg" alt=""/>
                    <span>WATCHLIST</span>
                </button>
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
    

    button{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        background: #090b13;
        border: rgb(249,249,249);
        color: rgb(249, 249,249);
        
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


