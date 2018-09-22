import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loremIpsum from 'lorem-ipsum';
// import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import { List, AutoSizer, ScrollSync } from 'react-virtualized';

const rowCount = 1000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class App extends Component {
  constructor() {
    super();
    // this.cache = new CellMeasurerCache({
    //   fixedWidth: true,
    //   defaultHeight: 100
    // });
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
          count: 1,
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        })
      }
    });
  }

  renderColumn = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <div>{this.list[index].id}</div>
        </div>
      </div>
    )
  }


  renderRow = ({ index, key, style, parent }) => {
    // return (
    //   <CellMeasurer
    //     key={key}
    //     cache={this.cache}
    //     parent={parent}
    //     columnIndex={0}
    //     rowIndex={index}>
    //       <div style={style} className="row">
    //         <div className="image">
    //           <img src={this.list[index].image} alt="" />
    //         </div>
    //         <div className="content">
    //           <div>{this.list[index].name}</div>
    //           <div>{this.list[index].text}</div>
    //         </div>
    //       </div>
    //   </CellMeasurer>
    // );
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ScrollSync>
          {({ onScroll, scrollTop, scrollLeft }) => (
            <div className="list">
              <span>{scrollTop} - {scrollLeft}</span>
              <AutoSizer disableWidth>
              {
                ({ height }) => {
                  return (
                    <div>
                      <div 
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                        }}>
                          <List 
                            className="leftSide"
                            width={50}
                            height={height}
                            rowHeight={rowHeight}
                            scrollTop={scrollTop}
                            rowRenderer={this.renderColumn}
                            rowCount={this.list.length}
                            overscanRowCount={3} />
                    </div>
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 50,
                      }}>
                        <List
                          width={800}
                          height={height}
                          rowHeight={rowHeight}
                          onScroll={onScroll}
                          rowRenderer={this.renderRow}
                          rowCount={this.list.length}
                          overscanRowCount={3}/>
                      </div>
                    </div>
                  )
                }
              }
              </AutoSizer>
              </div>
          )}
        
          {/* <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight} // needs height of rows to calculate which rows will be visible. 
                                  // takes in either a fixed row height or a function that returns the height of a row given its index.
            rowRenderer={this.renderRow} // function to render the row
            rowCount={this.list.length}  // number of rows
            overscanRowCount={3} 
          /> */}
          {/* <AutoSizer>
          {
            ({ width, height }) => {
              return <List 
                width={width}
                height={height}
                deferredMeasurementCache={this.cache}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length}
                overscanRowCount={3} />
            }
          }
          </AutoSizer> */}
        </ScrollSync>
      </div>
    );
  }
}

export default App;
