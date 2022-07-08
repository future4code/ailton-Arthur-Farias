import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MatchPage = (props) => {
	return (
		<div>
			<p>matchPage</p>
			<button onClick={props.changeProfilePage()}>voltar</button>
		</div>
	)
}
export default MatchPage
