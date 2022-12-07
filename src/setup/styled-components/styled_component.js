import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
        height: 45vh;
        background-color: var(--color-primary);
        color: var(--color-white);
        /* if is it mobile change the height */
        ${({ isMobile }) =>
                isMobile &&
                css`
                        height: 80vh!important;
                `}

        &.firstSection {
                &.orangeBarLogoSection {
                        &.orangeBar {
                        }
                        & .logo {
                        }
                }
                & nav {
                        & ul {
                                & li {
                                }
                        }
                }
        }
        &.secondeSection {
                & article {
                        & p {
                        }
                        & .copyRight {
                        }
                }
                & .logoSection {
                }
        }
`;
