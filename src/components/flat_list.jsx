import React, { Component } from 'react';
import Flat from "./flat";

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => {
        return (<Flat
          id={flat.id}
          key={flat.id}
          selectFlat={props.selectFlat}
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          long={flat.long}
        />
        );
      })}
    </div>
  );
};

export default FlatList;
