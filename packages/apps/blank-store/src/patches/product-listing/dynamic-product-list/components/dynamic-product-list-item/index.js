/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */
import { ProductContext } from '@oracle-cx-commerce/react-ui/contexts';
import React, { useState } from 'react';
import Region from '@oracle-cx-commerce/react-components/region';
import Styled from '@oracle-cx-commerce/react-components/styled';
import css from '@oracle-cx-commerce/react-widgets/product-listing/dynamic-product-list/components/dynamic-product-list-item/styles.css';
import { useNavigator } from '@oracle-cx-commerce/react-components/link';
// import {Image} from 'react-bootstrap';

/**
 * A component for a product result item.
 *
 * @param {object} props.record The product result data, from the getSearchResults selector
 * @param {array} props.regions The regions to display in the product result, defined in page layout.
 */
const DynamicProductListItem = props => {
  const { record = { attributes: {} }, regions, labelSelect } = props;
  // Used to keep track of color swatch selections. Object with properties:
  // - colorParameters: a url segment with query parameters for pre-selecting the correct color variant
  // - imageUrl: url for the product image in the selected color variant
  const [selection, setSelection] = useState({});

  // Get product route
  let route = record.attributes['product.route'] && record.attributes['product.route'][0];
  let productId = record.attributes['product.repositoryId'];
  // let productDescription = record.attributes['product.description'];
  const productItemCode = record.attributes['W22-RFID.x_itemCode'];
  const navigator = useNavigator();

  if (route && route.charAt(0) === '/') {
    route = route.substring(1);
  }
  if (selection && selection['colorParameters']) {
    // If a color variant has been set by selecting a swatch, append this selection to the url
    route += selection['colorParameters'];
  }
  let configuratorRoute = './configurator/' + productId;

  // const handleOnClick = () => {
  //   localStorage.setItem('currentSelection', 'product');
  //   navigator(route);
  // };

  return (
    // Pass down product context to any children.
    <Styled id="DynamicProductListItem" css={css}>
      <ProductContext.Provider value={{ record, route, selection, setSelection }}>
        <div className="DynamicProductListItem__Product Container__Section">
          {regions.map((regionId, index) => (
            /*
                Using region ids as keys causes unnecessary DOM reconciliation.
                  
                https://reactjs.org/docs/reconciliation.html#keys
              */
            <Region key={index} regionId={regionId} /> // eslint-disable-line react/no-array-index-key
          ))}
          {record.attributes['product.route'] && record.attributes['product.route'][0] && (
            <div className="listing-section">
              
             
               <div class="product">
    <div class="image-box">
      
      <img class="images"src={record.attributes['product.primaryFullImageURL'][0]} alt="" />
    </div>
    <div class="text-box">

      <h1 class="item">{record.attributes['product.displayName'][0]}</h1>
      <h3 class="price">$4.99</h3>
      <h2 class="description">These are demo products!</h2>
      <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/>
      <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
    </div>
  </div>
            </div>
          )}

        </div>
      </ProductContext.Provider>
    </Styled>
  );
};

export default DynamicProductListItem;
