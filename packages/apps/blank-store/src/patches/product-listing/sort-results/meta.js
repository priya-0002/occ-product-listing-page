/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import * as resourceBundle from '@oracle-cx-commerce/resources';

import {buildResources, buildConfigResources} from '@oracle-cx-commerce/resources/utils';
import {mergeDefaultConfig} from '@oracle-cx-commerce/react-widgets/config';

const widgetResourceKeys = [
  'textBestMatch',
  'textPriceHighToLow',
  'textPriceLowToHigh',
  'textSortAZ',
  'textSortZA',
  'textSortBy',
  'textBrandAZ',
  'textBrandZA',
  'textNewest'
];

const configResourceKeys = [
  'configSortOptionsHelpText',
  'configSortOptionsLabel',
  'textBestMatch',
  'textPriceLowToHigh',
  'textPriceHighToLow',
  'textSortAZ',
  'textSortZA',
  'textBrandZA',
  'textBrandAZ',
  'textNewest'
];

export const SortResults = {
  packageId: '@oracle-cx-commerce/react-widgets',
  resources: buildResources(resourceBundle, widgetResourceKeys),
  config: mergeDefaultConfig({
    properties: [
      {
        id: 'sortOptions',
        type: 'multiSelectOptionType',
        name: 'sortOptions',
        helpTextResourceId: 'configSortOptionsHelpText',
        labelResourceId: 'configSortOptionsLabel',
        defaultValue: 'bestMatch,sku.activePrice|0,sku.activePrice|1',
        displayAsCheckboxes: true,
        options: [
          {
            id: 'bestMatch',
            value: 'bestMatch',
            labelResourceId: 'textBestMatch'
          },
          {
            id: 'priceLowToHigh',
            value: 'sku.activePrice|0',
            labelResourceId: 'textPriceLowToHigh'
          },
          {
            id: 'priceHighToLow',
            value: 'sku.activePrice|1',
            labelResourceId: 'textPriceHighToLow'
          },
          {
            id: 'sortAZ',
            value: 'product.displayName|0',
            labelResourceId: 'textSortAZ'
          },
          {
            id: 'sortZA',
            value: 'product.displayName|1',
            labelResourceId: 'textSortZA'
          },
          {
            id: 'brandAZ',
            value: 'product.brand|0',
            labelResourceId: 'textBrandAZ'
          },
          {
            id: 'brandZA',
            value: 'product.brand|1',
            labelResourceId: 'textBrandZA'
          },
          {
            id: 'newest',
            value: 'product.dateAvailable',
            labelResourceId: 'textNewest'
          }
        ]
      }
    ],
    locales: buildConfigResources(resourceBundle, configResourceKeys)
  }),
  pageTypes: ['search', 'category']
};
