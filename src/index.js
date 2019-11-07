import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './src/styles.css'
class ReactTimeInput extends Component {
    render() {
        var myProps = {
            divKey: this.props.divKey !== undefined ? this.props.divKey : 1,
            inputProps: this.props.inputProps != undefined ? this.props.inputProps : {},
            renderHours: this.props.renderHours !== undefined ? this.props.renderHours : true,
            renderMinutes: this.props.renderMinutes !== undefined ? this.props.renderMinutes : true,
            renderSeconds: this.props.renderSeconds !== undefined ? this.props.renderSeconds : true,
            defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '',
            worksInMilliseconds: this.props.worksInMilliseconds !== undefined ? this.props.worksInMilliseconds : true,
            styled: this.props.styled !== undefined ? this.props.styled : false
        }
        const changeInput = (e) => {
            let parent = e.currentTarget.parentNode
            let hours = parent.querySelector('.react-timeinput-hours').value
            let minutes = parent.querySelector('.react-timeinput-minutes').value
            let seconds = parent.querySelector('.react-timeinput-seconds').value
            let input = ''
            if(myProps.worksInMilliseconds){
                input = formatToMilliseconds(hours, minutes, seconds)
            }else{
                input = hours+':'+minutes+':'+seconds
            }
            parent.parentNode.querySelector('input').value = input
        }
        var myhours = 0
        var myminutes = 0
        var myseconds = 0
        if(myProps.defaultValue !== ''){
            let result = myProps.defaultValue
            if(myProps.worksInMilliseconds){
                result = millisecondsToFormat(parseInt(myProps.defaultValue))
            }
            result = result.split(':')
            myhours = result[0] !== undefined ? result[0] : 0
            myminutes = result[1] !== undefined ? result[1] : 0
            myseconds = result[2] !== undefined ? result[2] : 0
        }
        return (
            <div className={'react-timeinput' + (myProps.styled ? ' react-timeinput-styled' : '')} id={'react-timeinput-'+myProps.divKey}>
                <input type='hidden' {...myProps.inputProps} defaultValue={myProps.defaultValue}/>
                <div className='react-timeinput-visible' >
                    <input type={myProps.renderHours ? 'number' : 'hidden'} onChange={changeInput} min='0' className='react-timeinput-hours' defaultValue={myhours}/>{myProps.styled && myProps.renderHours ? <span className='react-timeinput-separator'>:</span> : ''}
                    <input type={myProps.renderMinutes ? 'number' : 'hidden'} onChange={changeInput} className='react-timeinput-minutes' defaultValue={myminutes} max='59' min='0' />{myProps.styled && myProps.renderMinutes ? <span className='react-timeinput-separator'>:</span> : ''}
                    <input type={myProps.renderSeconds ? 'number' : 'hidden'} onChange={changeInput} className='react-timeinput-seconds' defaultValue={myseconds} max='59' min='0' />{myProps.styled && myProps.renderSeconds ? <span className='react-timeinput-separator'>:</span> : ''}
                </div>
            </div>
        )
    }
}
ReactTimeInput.propTypes = {
    divKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    inputProps: PropTypes.object,
    renderHours: PropTypes.bool,
    renderMinutes: PropTypes.bool,
    renderSeconds: PropTypes.bool,
    defaultValue: PropTypes.string, 
    worksInMilliseconds: PropTypes.bool,
    styled: PropTypes.bool
}
export default ReactTimeInput

export const millisecondsToFormat = (it) => {
    var hours = Math.floor(it / 1000 / 60 / 60)
    var minutes = 0
    var seconds = 0
    it -= hours * 1000 * 60 * 60
    if (it > 0) {
        minutes = Math.floor(it / 1000 / 60)
        it -= minutes * 1000 * 60
        if (it > 0) {
            seconds = Math.floor(it / 1000)
        }
    }
    hours = ('0' + hours).slice(-2)
    minutes = ('0' + minutes).slice(-2)
    seconds = ('0' + seconds).slice(-2)
    var calctime = hours + ':' + minutes + ':' + seconds
    return calctime
}
export const formatToMilliseconds = (hours, minutes, seconds) => {
    var date = new Date(0)
    date.setHours(hours+1)
    date.setMinutes(minutes)
    date.setSeconds(seconds)
    date = moment(date)
    var date2 = moment(new Date(0))
    var diff = date.diff(date2)
    return diff
}