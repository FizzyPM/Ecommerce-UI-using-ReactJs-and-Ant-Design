import React, { Component } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
import CategoryMain from './main-categories'
import CategorySub from './sub-categories'

class CategoriesModal extends Component {
	constructor() {
		super();
		this.state = {
      showsubcategory: false,
      subkey:"",
      subvalue: "",
		};
	}
  subCategory = (bool,key,value) => {
    // console.log(bool + " " + key + " " + value)
    this.setState({showsubcategory: bool, subkey: key, subvalue: value})
	}
	onCancel = () => {
		let that = this;
		that.subCategory(false, "", "")
		that.props.closeModal()
	}
	render() {
		return (
			<div>
				<Modal
      		visible={this.props.isModalOpen}
          onCancel={this.onCancel}
          footer={null}
          centered={true}
      	>
          {this.state.showsubcategory ? 
            <CategorySub
              subkey={this.state.subkey}
              subvalue={this.state.subvalue}
              subCategoryData = {this.subCategory}
            /> : 
            <CategoryMain
              subCategoryData = {this.subCategory}
            />
          }
                   
      	</Modal>
			</div>
		);
	}
}

export default CategoriesModal;
