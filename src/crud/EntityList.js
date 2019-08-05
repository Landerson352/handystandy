import React from 'react';
import firebase from 'firebase/app';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {find, map} from 'lodash';
import numeral from 'numeral';

const optionSource = {
  booleanYesNo: [
    {
      label: 'Yes',
      value: true,
    },
    {
      label: 'No',
      value: false,
    },
  ],
};

const formatters = {
  USD: (amount) => numeral(amount).format('$0,0.00'),
};

const renderField = (doc, fieldKey, field) => {
  let value = doc[fieldKey];

  if (field.optionsSourceKey) {
    const option = find(optionSource[field.optionsSourceKey], {value});
    value = option ? option.label : null;
  } else if (field.options) {
    const option = find(field.options, {value});
    value = option ? option.label : null;
  }

  if (field.formatterKey) {
    value = formatters[field.formatterKey](value);
  }

  return value;
};

const EntityList = ({entityType}) => {

  const [docs, loading, error] = useCollectionData(
    firebase.firestore().collection(entityType.collectionPath),
    {
      idField: entityType.idField,
      snapshotListenOptions: {includeMetadataChanges: true},
    }
  );

  return (
    <>
      <h2>{entityType.namePlural}</h2>
      <Show iff={error}>
        <strong>Error: {JSON.stringify(error)}</strong>
      </Show>
      <Show iff={loading}>
        <span>Loading...</span>
      </Show>
      <Show iff={docs}>
        <table>
          <thead>
          <tr>
            {map(entityType.fields, (field, fieldKey) => (
              <th key={fieldKey}>
                {field.label}
              </th>
            ))}
          </tr>
          </thead>
          <tbody>
          {map(docs, (doc) => (
            <tr key={doc.id}>
              {map(entityType.fields, (field, fieldKey) => (
                <td key={fieldKey}>
                  {renderField(doc, fieldKey, field)}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </Show>
    </>
  );
};

const Show = ({children, iff}) => !!iff && children;

export default EntityList;
