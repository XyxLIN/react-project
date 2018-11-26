
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width:100%;
    color:#fff;
    height:2.4rem;
    background:#FF7043;
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding:0rem .24rem;
    .left, right{
        margin-left:-.6rem;
        color: #fff;
        font-size: .48rem
    }
    input{
        border-radius:.5rem;
        padding:.3rem;
        width:19rem;
        border:0px;
    }
`