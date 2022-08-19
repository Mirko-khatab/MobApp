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
import SendMoneySection from '../components/SendMoney/SendMoneySection'

import portrait1 from '../assets/portraits/1.jpg'
import portrait2 from '../assets/portraits/2.jpg'
import portrait3 from '../assets/portraits/3.jpg'

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`

import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props =StackScreenProps<RootStackParamList,"Home">



const Home: FunctionComponent<Props> = () => {
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
    {
      id: 2,
      amount: '-$300',
      date: '17 sep 2020',
      title: 'Shopping',
      subtitle: 'Alle express',
      art: {
        icon: 'cart',
        background: colors.tertiary,
      },
    },

    {
      id: 2,
      amount: '-$500',
      date: '3 sep 2020',
      title: 'Travel',
      subtitle: 'Iraq',
      art: {
        icon: 'airplane',
        background: colors.accent,
      },
    },
  ]

  //this is the data for the send money section
  // const sendMoneyData = [
  //   {
  //     id: 1,
  //     amount: '2485930.43',
  //     name: 'Mirko Kawa',
  //     background: colors.tertiary,
  //     img: portrait1,
  //   },
  //   {
  //     id: 2,
  //     amount: '2485930.43',
  //     name: 'Nour Kawa',
  //     background: colors.primary,
  //     img: portrait2,
  //   },

  //   {
  //     id: 3,
  //     amount: '2485930.43',
  //     name: 'chinga howa',
  //     background: colors.accent,
  //     img: portrait3,
  //   },
  // ]

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionsData} />
      {/* i have issues -----
       <SendMoneySection data={sendMoneyData} /> */}
    </HomeContainer>
  )
}

export default Home
