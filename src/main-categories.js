import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
import data from './data'


class CategoryMain extends Component{
  handleClick = (e,key,value) =>{
    let that = this
    e.preventDefault()
    that.props.subCategoryData(true,key,value)
  }
  render(){
    return(
      <div>
        <Row type="flex" justify="space-around">
          {
          Object.keys(data).map((key,val) => (
            <Col span={8} key={key}>
            <h3 className="centertext heading">{key}</h3>
            </Col>
          ))
          }
          </Row>
          <Row type="flex" justify="space-around" align="middle">
          {
            Object.keys(data).map((key,val) => (
              <Col span={8} className="vl" key={key + val}>
              {
              Object.keys(data[key]).map((value) => (
                <p className="content" key={value}>
                  <a className="modallinks" href="/maincat" onClick={(e) => this.handleClick(e,key,value)}>{value}</a>
                </p>
              ))
              }
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default CategoryMain;