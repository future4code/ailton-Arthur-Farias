import styled from 'styled-components'
import axios from 'axios'
const DivPrincipal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 30px;
`
const CardPrincipal = styled.div`
	border: 1px solid;
	padding-bottom: 30%;
	padding-left: 14%;
	padding-right: 14%;
	display: flex;
`
const Header = styled.header`
	border-bottom: 1px solid;
	display: flex;
	justify-content: end;
`
const ProfilePage = (props) => {
	return (
		<DivPrincipal>
			<CardPrincipal>
				<Header>
					<h2>astromatch</h2>
					<button onClick={() => props.changeMatchPage()}>Match</button>
				</Header>
			</CardPrincipal>
		</DivPrincipal>
	)
}
export default ProfilePage
