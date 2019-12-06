import _ from 'lodash';

export function camelCaseConvertor(data) {
  if (!data) { return null; }
  const camelCaseObject = {};

  _.forEach(
    data,
    function(value, key) {
      if (_.isPlainObject(value) || _.isArray(value)) {
        value = camelCaseConvertor(value);
      }
      camelCaseObject[_.camelCase(key)] = value;
    }
  );

  return camelCaseObject;
};
