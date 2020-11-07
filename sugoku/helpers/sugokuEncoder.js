const encodeBoard = (board) => {
  return board.reduce(
    (result, row, i) =>
      result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`,
    '',
  );
};

// const numberizeBoard = (board) => {
//   return board.map((row) => {
//     return row.map((col) => {
//       const num = parseInt(col);
//       const val = isNaN(num) ? 0 : num;
//       return val;
//     });
//   });
// };

const encodeParams = (params) => {
  return Object.keys(params)
    .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');
};

export default encodeParams;
