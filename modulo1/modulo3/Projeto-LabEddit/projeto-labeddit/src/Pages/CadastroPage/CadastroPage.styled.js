import styled from 'styled-components'

export const DivPrincipalCadastro = styled.div`
	background: #ffffff;
	padding-top: 10px;
	/* border: 1px solid black; */
	width: 428px;
	height: 1080px;
	top: -464px;
	left: 540px;
	margin: 0 auto;
	/* display: flex;
	flex-direction: column; */
	gap: 20px;
`
export const DivH1 = styled.div`
	padding-bottom: 120px;
	h1 {
		margin-left: 30px;
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 33px;
		line-height: 43px;

		color: #373737;
	}
`
export const DivInputs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	input {
		width: 359px;
		background: #ffffff;
		border: 1px solid #d5d8de;
		border-radius: 4px;
		width: 363px;
		height: 60px;
	}
`
export const DivPolitica = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	p {
		margin-left: 28px;
	}
	.Botao {
		margin-left: 30px;
		background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
		border-radius: 27px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 13px 133px;
		gap: 10px;
	}
`
export const DivBotao = styled.div`
	display: flex;
	align-items: center;
	button {
		margin-left: 30px;
	}
`
