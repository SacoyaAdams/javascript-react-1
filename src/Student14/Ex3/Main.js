import React from 'react'
import './Main.css'
import {Tweet} from './Tweets'
// import {Message} from './Message'

export const Main = () => {
  return (
    <div className="Tweets">
    <div><Tweet message="Tweet Storm" color="grey" /></div>
    <Tweet message="It's payday!!!" color="green"/>
    <Tweet message="I just bought a new car!" color="yellow" />
    <Tweet message="I just smashed my new car." color="red" />
</div>
  )
}
