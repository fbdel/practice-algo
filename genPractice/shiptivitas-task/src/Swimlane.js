import React from 'react';
import Card from './Card';
import './Swimlane.css';
import Dragula from 'react-dragula';
import ReactDOM from "react-dom";
var dragula = require('react-dragula');

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>);
  }

}
