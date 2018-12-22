import React, { Component } from 'react';
import { Icon, List } from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
import data from './data'
import {Helmet} from 'react-helmet';


class CategorySub extends Component{
  handleClick = (e) =>{
    let that = this
    e.preventDefault()
    that.props.subCategoryData(false,"","")
  }
  render(){
    return(
      <div>
        <Helmet>
          <style>{'.ant-col-12:nth-child(odd){border-right: 2px solid rgb(0, 0, 0);height: auto;}'}</style>
        </Helmet>
        <h3 className="heading"> <a className="modallinks" href="/subcat" onClick={(e) => this.handleClick(e)}> <Icon type="arrow-left" /> </a> &nbsp; {this.props.subkey}'s {this.props.subvalue}</h3><br/>
        <List
          grid={{
            gutter: 16, column: 2,
          }}
          dataSource={data[this.props.subkey][this.props.subvalue]}
          renderItem={item => (
            <List.Item>
              <div className="centertext" ><a className="modallinks" href= {`/${this.props.subkey}-${item}`.toLowerCase()} >{item}</a></div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default CategorySub;
