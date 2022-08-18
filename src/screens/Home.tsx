import React, { FunctionComponent } from 'react'

import { StatusBar } from 'expo-status-bar'

import styled from 'styled-components/native'

//custom components
import { colors } from '../components/color'
import logo1 from '../assets/cards/mc.png'
import logo2 from '../assets/cards/visa_white.png'

import { Container } from '../components/shared'
import CardSection from '../components/Cards/CardSection'
import TransactionSection from '../components/Transactions/TransectionSection'
const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '123456789',
      balance: 200,
      alias: 'personal prepaid',
      logo: logo1,
    },

    {
      id: 2,
      accountNo: '123456789',
      balance: 200,
      alias: 'personal prepaid',
      logo: logo2,
    },

    {
      id: 3,
      accountNo: '123456789',
      balance: 200,
      alias: 'personal prepaid',
      logo: logo1,
    },

    {
      id: 4,
      accountNo: '123456789',
      balance: 200,
      alias: 'personal prepaid',
      logo: logo2,
    },

    {
      id: 5,
      accountNo: '123456789',
      balance: 200,
      alias: 'personal prepaid',
      logo: logo1,
    },
  ]

  const transactionsData = [
    {
      id: 1,
      amount: '-$200',
      date: '12 sep 2020',
      title: 'Taxi',
      subtitle: 'Uber car',
      art: {
        icon: 'car',
        background: colors.primary,
      },
    },
  ]

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionsData} />
    </HomeContainer>
  )
}

export default Home
