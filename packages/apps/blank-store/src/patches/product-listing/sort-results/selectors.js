/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {getGlobalContext} from '@oracle-cx-commerce/commerce-utils/selector';

export const getPageData = state => {
  const {baseURI} = getGlobalContext(state);

  return {
    baseURI
  };
};
