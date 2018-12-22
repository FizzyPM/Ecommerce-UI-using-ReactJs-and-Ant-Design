import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import { List, Card } from 'antd';
import {Helmet} from 'react-helmet';
import { Button } from 'antd';

class ItemsListing extends Component {
	constructor(){
		super();
		this.state = {
		}
	}
	handleSave = (item) => {
		console.log('something at backend will happen')
		console.log(document.getElementById('save__' + item))
		document.getElementById('save__' + item).style.color = '#fff'
		document.getElementById('save__' + item).style.backgroundColor = '#f83159'
		document.getElementById('save__' + item).style.fontSize = '14px'
		document.getElementById('save__' + item).innerHTML = 'S A V E D'
	}
  render(){
		let array = ['strips', 'black', 'curly2', 'red', 'grey', 'curly', 'yellow', 'babypink']
    return(
      <div>
				<Helmet>
          <style>{'body { background-color: #ECECEC; }'}</style>
        </Helmet>
				<p>{this.props.match.params.id}</p>
				<List id="itemlist"
  			  grid={{
						gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 6,
					}}
  			  dataSource={array}
  			  renderItem={item => (
  			    <List.Item >
							<Card className="itemcard"
  						  bordered={false}
  						  style={{ width: 260, height: 355 }}
  						  cover={<img alt="" src={`./images/${item}.jpg`}  width="260" height="310" id={`img__${item}`} className="img-responsive" />}
							>
							<Button className="savebtn" type="danger" size="large" id={`save__${item}`} onClick={() => this.handleSave(item)}>S A V E</Button>
							<img alt="send" src="./images/icons/send.png"  width="20" height="20" id={`send__${item}`} className="icon2"/>
							<img alt="repost" src="./images/icons/repost.png"  width="30" height="30" id={`repost__${item}`} className="icon1"/>
							<br/>
							<span className="icondetails icontext2">SEND</span> <span className="icondetails icontext1">REPOST</span>
							{/* <Card bordered={false} style={{ width: 250 , height: 350 }} className="itemcard">
							<p><img src = {`./images/${item}.jpg`} alt="" className="img-responsive" width="200" height="250" id={item} /></p>
							<p><Button className="savebtn" type="danger" size="large" id={item} onClick={() => this.handleSave(item)}>S A V E</Button>
							<Icon className="itemicons" type="like" id={item} />
							<Icon className="itemicons" type="sync" id={item}/> 
							<br/>
							<span className="icondetails liketext">LIKE</span> <span className="icondetails">REPOST</span>
							</p> */}
							</Card>
  			    </List.Item>
  			  )}
  			/>
      </div>
    )
  }
}

export default ItemsListing;