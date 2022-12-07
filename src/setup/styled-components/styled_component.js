import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
        height: 85vh;
        background-color: var(--color-primary);
        color: var(--color-white);
        text-align: center;
        /* if is it mobile change the height */
        ${({ isBrowser }) =>
                isBrowser &&
                css`
                        height: 45vh;
                `}
        & .firstSection {
                & .orangeBarLogoSection {
                        & .orangeBar {
                                height: 5px;
                                width: 150px;
                                background-color: var(--color-secondary);
                                margin: auto;
                                margin-bottom: 20px;
                        }
                        & .logo {
                                margin: auto;
                                width: 180px;
                        }
                }
                & nav {
                        /* background-color:red; */
                        & ul {
                                margin: 0;
                                padding: 30px 0;
                                & li {
                                        padding: 5px;
                                }
                                letter-spacing: 0.125em;
                                & li:hover,
                                & li:focus {
                                        cursor: pointer;
                                        color: var(--color-secondary);
                                        transition: all 0.3s ease-in-out;
                                }
                        }
                }
        }
        & .secondeSection {
                /* background-color:red; */
                /* height: 100%; */
                & article {
                        color: var(--color-gray-400);
                        & p {
                                padding: 0 30px;
                        }
                        & .copyRight {
                                margin: 30px 0;
                                font-size: 1.2rem;
                        }
                }
                & .logoSection {
                        & svg {
                                margin: 10px;
                                fill: var(--color-white);
                        }
                        & svg:hover,
                        & svg:focus {
                                cursor: pointer;
                                fill: var(--color-secondary);
                                transition: all 0.3s ease-in-out;
                        }
                }
        }
`;
