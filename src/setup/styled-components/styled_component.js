import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
        height: 88vh;
        background-color: var(--color-primary);
        color: var(--color-white);
        text-align: center;
	display: grid;
	align-content: center;
	padding:40px;
	/* align-items: center; */
        /* if is it mobile change the height */
        ${({ isBrowser }) =>
                isBrowser &&
                css`
                        height: 50vh;
			align-content: space-between;
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
				&:hover{
					cursor: pointer;
				}
                        }
                }
                & nav {
                        /* background-color:red; */
                        & ul {
                                margin: 0;
                                padding: 20px 0;
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
				${({ isBrowser }) =>
                isBrowser &&
                css`
			display: flex;
			gap: 10px;
                `}
                        }
                }
		${({ isBrowser }) =>
                isBrowser &&
                css`
			display: flex;
			justify-content: space-around;
                `}
        }
        & .secondeSection {
                & article {
                        color: var(--color-gray-400);
                        & p {
                                padding: 0 30px;
                        }
                        & .copyRight {
                                font-size: 1.2rem;
				margin: 20px 0;
                        }
			${({ isBrowser }) =>
                isBrowser &&
                css`
			/* background-color:red; */
			width:40%;
                `}
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
		${({ isBrowser }) =>
                isBrowser &&
                css`
			display: flex;
			justify-content: space-around;
			text-align: left;
                `}
        }
`;
