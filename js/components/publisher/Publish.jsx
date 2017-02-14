import React, {Component} from 'react';
import style from './publish.css';


class Publisher extends Component{

	constructor(){
		super();
		this.state = {
			content:''
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleFocus(){
		this.refs.textElDiv.style.borderColor = "#fa7d3c";
		this.refs.hot.style.display = "none";
		this.refs.tips.style.display = "block";
	}

	handleBlur(){
		this.refs.textElDiv.style.borderColor = "#cccccc";
		this.refs.hot.style.display = "block";
		this.refs.tips.style.display = "none";
	}

	handleChange(e){
		this.setState({
			content:e.target.value
		});
	}

	render() {
		return (
			<div className={style.publisher}>
                <div className={style.title}>
                    <div ref="hot">
                        <a href="#">教养,你怎么看(投票)</a>
                    </div>
                    <div className={style.tips} ref="tips">
                        <span>{this.state.content.length > 140 ? '已超出' : '还可以输入' }</span><strong ref="textNumber">{this.state.content.length<140 ? (140 - this.state.content.length) : (this.state.content.length - 140)}</strong>字
                    </div>
                </div>            
                <div className={style.textElDiv} ref="textElDiv">
                    <textarea onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.content}></textarea>
                </div>
                <div className={style.btnWrap}>
                    <a className={style.publishBtn + ((this.state.content.length > 0 && this.state.content.length <= 140) ? '' : ' '+ style.disabled)}>发布</a>
                </div>
            </div>
		);
	}
}

export default Publisher;