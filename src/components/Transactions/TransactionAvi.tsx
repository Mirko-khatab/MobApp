import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '../color'

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  boarder-radius: 10px;
  justify-content: center;
  align-items: center;
`
import { TransactionAviProps } from './types'

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  )
}
export default TransactionAvi
