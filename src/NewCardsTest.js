import React from "react";
import { render } from "react-dom";
const Card = (props) => {
  return (<div style={{ margin: '1em' }}>
    <img width="75" src={props.avatar_url}></img>
    <div style={{ display: 'inline-block', marginLeft: 10 }} >
      <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
      <div>{props.company}</div>
    </div>
  </div>)
}

const CardList = (props) => {
  return (<div>
    {props.cards.map(card => <Card {...card} />)}
  </div>
  )
}

let data = [
  {
    name: "Martynas Mickevičius",
    company: "Lightbend",
    avatar_url: "https://avatars3.githubusercontent.com/u/422086?v=4"
  },
  {
    name: "Christopher Batey",
    company: "Lightbend",
    avatar_url: "https://avatars1.githubusercontent.com/u/1866779?v=4"
  },
  {
    name: "Dale Wijnand",
    avatar_url: "https://avatars1.githubusercontent.com/u/344610?v=4",
    company: "Lightbend"
  }
];

render(<CardList cards={data} />, document.getElementById('root'));
