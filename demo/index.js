'use strict'
import React,{Component} from 'react'
import {render} from 'react-dom'
import Swiper from '../src/swiper'

const styles = {
  container:{},
  wrapper:{},
  slide:{},
}

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Swiper/>
    )
  }
}

window.onload = function(){
	render(<App />,document.getElementById('main'))
}
