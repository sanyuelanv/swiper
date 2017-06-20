'use strict'
import React,{Component} from 'react'


const styles = {
  container:{
    width:"100%",
    height:"200px",
    overflow:'hidden',
    position:'relative',
  },
}
const colors = ["#ccc",'#ddd','#999']

class Swiper extends Component{
  constructor(props){
    super(props)
    this.state = {
      current:0,
      touchstart:false,
      startPapeX:0,
      endDist:0,
      moveDist:0,
    }
    // this._transitionend = this._transitionend.bind(this)
    this._touchstart = this._touchstart.bind(this)
    this._touchend = this._touchend.bind(this)
    this._touchmove = this._touchmove.bind(this)
  }
  getSlideStyle(dist,index){
    let {touchstart,moveDist} = this.state
    return {
      width:"100%",
      height:'200px',
      transform:'translateX('+ ((dist * index) + moveDist) +'px)',
      transitionDuration: touchstart ? "0ms":"300ms",
      transformOrigin:"50% 0% 0",
      backgroundColor:colors[index],
      position:'absolute',
      left:0,
      top:0,
    }
  }
  _renderSlide(){
    const number = 3
    let slideArrary = []
    for(let i=0;i<number;i++){
      slideArrary.push(
        <div
          key={i}
          style={this.getSlideStyle(document.body.clientWidth,i)}
        >
        </div>
      )
    }
    return slideArrary
  }
  _touchstart(e){
    let {touchstart,startPapeX} = this.state
    startPapeX = e.nativeEvent.touches[0].pageX
    this.setState({touchstart:!touchstart,startPapeX})
  }
  _touchmove(e){
    let {startPapeX,endDist} = this.state
    let movePapeX = e.nativeEvent.touches[0].pageX
    let moveDist = endDist + (movePapeX - startPapeX)
    this.setState({moveDist})
  }
  _touchend(e){
    let {touchstart,endDist,moveDist} = this.state
    let startPapeX = 0
    endDist = moveDist
    this.setState({touchstart:!touchstart,startPapeX,endDist})
  }
  render(){
    let container = this.props.container || styles.container
    let slide = this.props.slide || styles.slide
    return(
      <div
        style={container}
        onTouchStart={this._touchstart}
        onTouchMove={this._touchmove}
        onTouchEnd={this._touchend}
      >
        {this._renderSlide()}
      </div>
    )
  }
}
export default Swiper
