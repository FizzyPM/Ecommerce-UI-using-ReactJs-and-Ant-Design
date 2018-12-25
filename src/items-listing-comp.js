import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import { List, Card } from 'antd';
import { Helmet } from 'react-helmet';
import { Button, Modal, Avatar } from 'antd';

class ItemsListing extends Component {
	constructor(){
		super();
		this.state = {
			modalVisible: false,
			productId: "",
			setImage: "default",
		}
	}
	showModal = () => {
	  this.setState({
	    modalVisible: true,
	  });
	}
	handleCancel = (e) => {
	  this.setState({
			modalVisible: false,
			productId: "",
			setImage: "default",
    });
  }
	handleSave = (item) => {
		console.log('something at backend will happen')
		console.log(document.getElementById('save__' + item))
		// document.getElementById('save__' + item).style.color = '#fff'
		// document.getElementById('save__' + item).style.backgroundColor = '#f83159'
		// document.getElementById('save__' + item).style.fontSize = '14px'
		// document.getElementById('save__' + item).innerHTML = 'S A V E D'
	}
	showProductDetails = (e, item) => {
		e.preventDefault()
		console.log(item)
		this.setState({ productId: item, });
		this.showModal()
	}
	changeImage = (e, pid, img) => {
		e.preventDefault()
		if(this.state.setImage !== img){
			this.setState({ setImage: img, });
			if(img !== "default")
				document.getElementById("img-product").src = `./images/item-${pid}/${img}.jpg`
			else
				document.getElementById("img-product").src = `./images/${this.state.productId}.jpg`
		}
	}
  render(){
		let array = ['6', '2', '4', '5', '1', '3', 'test2', 'test3']
		let arrfor6 = ['66', '67', '68', '69']
    return(
      <div>
				<Helmet>
          <style>{'body { background-color: #ECECEC; } .ant-card-body { padding:15px }'}</style>
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
  						  style={{ width: 270, height: 365 }}
							>
							<a href="/productdetails" id={item} onClick={(e) => this.showProductDetails(e, item)} >
								<img alt="" src={`./images/${item}.jpg`} height="300px" id={`img__${item}`} className="img-responsive" /> {/* 250 x 300 */}
							</a>
							<Button className="savebtn" type="danger" size="large" id={`save__${item}`} onClick={() => this.handleSave(item)}>S A V E</Button>
							<img alt="send" src="./images/icons/send.png"  width="25" height="25" id={`send__${item}`} className="icon2"/>
							<img alt="repost" src="./images/icons/repost.png"  width="35" height="35" id={`repost__${item}`} className="icon1"/>
							<br/><br/>
							<span className="icondetails icontext2">SEND</span> <span className="icondetails icontext1">REPOST</span> 
							</Card>
  			    </List.Item>
  			  )}
  			/>

				{this.state.modalVisible ?
				<div>
					<Modal
      			visible={this.state.modalVisible}
						onCancel={this.handleCancel}
						width={1100}
						style={{ top: 10, }}
        	  footer={null}
      		>
						<div id="productimg-div">
							<img alt="" src={`./images/${this.state.productId}.jpg`} height="555px" id="img-product" />
						</div>
						<div id="prodetails-div">
							<h1 id="prod-heading">Full Sleeve Women Jacket</h1>
							<h3 id="prod-seller">by <Avatar size="small" icon="user" /> Portland Leather</h3>
							<hr id="prod-line"/>
							{/* <h1 id="prod-heading">INR 2400 <del id="prod-oldinr">INR 3000</del></h1> */}
						</div>
						<div id="otherimgs-div">
							<a href="changepic/" onMouseOver={(e) => this.changeImage(e,this.state.productId,'default')} className="otherimgs-link">
								<img alt="" src={`./images/${this.state.productId}.jpg`} width="48px" height="50px" className="other-imgs" />
							</a>
							{eval('arrfor' + this.state.productId).map((image,i)=>
								<a href="changepic/" key={i} onMouseOver={(e) => this.changeImage(e,this.state.productId,image)} className="otherimgs-link">
									<img alt="" src={`./images/item-${this.state.productId}/${image}.jpg`} width="48px" height="50px" key={i} className="other-imgs"/>
								</a>
							)}
						</div>
					</Modal>
				</div>
				:<div></div>}
      </div>
    )
  }
}

export default ItemsListing;