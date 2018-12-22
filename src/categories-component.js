import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
import CategoriesModal from './categories-modal'

class CategoryComp extends Component {
	constructor() {
		super();
		this.state = {
      visible: false,
		};
	}
	showModal = () => {
	  this.setState({
	    visible: true,
	  });
	}
	handleCancel = (e) => {
	  this.setState({
	    visible: false,
    });
  }
	render() {
		return (
			<div>
				<header>
					<Button type="primary" onClick={this.showModal}>
        		Category
        	</Button>
        </header>
				<CategoriesModal
					isModalOpen={this.state.visible}
					openModal={this.showModal}
					closeModal={this.handleCancel}
				/>
			</div>
		);
	}
}

export default CategoryComp;
