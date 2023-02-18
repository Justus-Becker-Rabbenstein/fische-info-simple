import Link from "next/link";
import styled from "styled-components";

const Header = () => {
    return (
        <CssNav>
            <CssLi><Link href="/">Home / GET</Link></CssLi>
            <li><h4>Header</h4></li>
            <CssLi><Link href="/Post">POST</Link></CssLi>
        </CssNav>
    )
}

export default Header

const CssNav = styled.nav`
display: flex;
justify-content: space-evenly;
`

const CssLi = styled.li`
border: 1px solid red;
`