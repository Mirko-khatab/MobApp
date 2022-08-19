import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

//custom components
import { colors } from '../components/color'
import { Container } from '../components/shared'
import AmountSection from '../components/Balance/AmountSection'
const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
  padding: 25px;
`
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
import BalanceCardSection from '../components/Balance/BalanceCardSection'
import ButtonSection from '../components/Balance/ButtonSection'

type Props = StackScreenProps<RootStackParamList, 'Balance'>

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  )
}

export default Balance
