import styled from 'styled-components'

export const DivPrincipalFeed = styled.div`
	border: 1px solid black;
	width: 428px;
	height: 1080px;
	top: -464px;
	left: 540px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
`
export const DivInterna = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	gap: 12px;
	border-bottom: 1px solid #ff6489;
	transform: rotate(0.32deg);
	padding-bottom: 20px;
	margin-left: 30px;
	margin-right: 30px;
	width: 350px;
	input {
		width: 350px;
		height: 100px;
		background: #ededed;
		border-radius: 12px;
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		color: #6f6f6f;
	}
	button {
		background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
		border-radius: 12px;
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 23px;
		width: 359px;
		height: 38px;
		color: #ffffff;
	}
`
