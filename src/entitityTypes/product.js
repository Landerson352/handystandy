const product = {
  key: 'product',
  name: 'product',
  namePlural: 'products',
  collectionPath: 'products',
  idField: 'id',
  fields: {
    id: {
      key: 'id',
      label: 'ID',
      readyOnly: true, // cannot be edited
    },
    name: {
      key: 'name',
      label: 'Name',
      required: true,
      // minLength: 1,
      typicalLength: 15,
      maxLength: 60,
    },
    price: {
      key: 'price',
      label: 'Price',
      type: 'number', // restricts input
      formatterKey: 'USD', // $5.99
      required: true,
      // minLength: 3,
      typicalLength: 4,
      maxLength: 7,
    },
    visible: {
      key: 'visible',
      label: 'Visible',
      optionsSourceKey: 'booleanYesNo', // "Yes" or "No" options
      // minLength: 2,
      // maxLength: 3,
    },
  },
  fieldGroups: [
    ['firstName', 'lastName'],
    ['city', 'state', 'zip'],
  ],
};

export default product;
