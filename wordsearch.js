const searchHorizontal = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    output[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      output[i][j] = matrix[j][i];
    }
  }
  return output;
};
const diagonal = (matrix, word) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (searchDiag(matrix, [i, j], word)) {
        return true;
      }
    }
  }
  return false;
};
const searchHelper = function(matrix, coord, word, xDir, yDir) {
  let i = coord[0];
  let j = coord[1];
  for (let k = 0; k < word.length; k++) {
    if (i < 0 || i >= matrix.length) return false;
    else if (j < 0 || j >= matrix[i].length) return false;
    else if (matrix[i][j] !== word.charAt(k)) return false;
    i += xDir;
    j += yDir;
  }
  return true;
};
const searchDiag = function(matrix, coord, word) {
  return (
    searchHelper(matrix, coord, word, 1, 1) ||
      searchHelper(matrix, coord, word, -1, -1) ||
      searchHelper(matrix, coord, word, 1, -1) ||
      searchHelper(matrix, coord, word, -1, 1)
  );
};
const wordSearch = (letters, word) => {
  if (searchHorizontal(letters, word)) {
    return true;
  } else if (searchHorizontal(transpose(letters), word)) {
    return true;
  } else if (
    searchHorizontal(
      letters.map((arr) => arr.reverse()),
      word
    )
  ) {
    return true;
  } else if (
    searchHorizontal(transpose(letters.map((arr) => arr.reverse())), word)
  ) {
    return true;
  } else {
    return diagonal(letters, word);
  }
};
module.exports = wordSearch;