export function ConverData(data) {
  return addType(editData(sortData(data)));
}

function sortData(data) {
  return data.sort((a, b) => {
    return a.order - b.order;
  });
}

function editData(data) {
  let result = [{}, {}, {}];

  result[1] = data.filter((item) => item.order === 1)[0];
  result[0] = data.filter((item) => item.order === 2)[0];
  result[2] = data.filter((item) => item.order === 3)[0];
  return result;
}

function addType(data) {
  let result = data;

  result[0] = { ...result[0], type: 'other-ports' };
  result[1] = { ...result[1], type: 'first-port' };
  result[2] = { ...result[2], type: 'other-ports' };

  return result;
}
