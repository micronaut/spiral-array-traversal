exports.traverse = matrix => {
    if (!matrix || matrix.length === 0) {
        return "";
    } else {
        let result = [];
        let odd = false;
        while (matrix.length) {
            var row = odd ? matrix[matrix.length - 1] : matrix[0];
            row = odd ? row.reverse() : row;

            row.forEach(function (value) {
                result.push(value)
            });

            if (!odd) {
                matrix.shift();
                matrix.forEach(function(value) {
                    result.push(value[value.length - 1]);
                    value.pop();
                });
            } else {
                matrix.pop();
                matrix.reverse().forEach(function(value) {
                    result.push(value[0]);
                    value.shift();
                });
                matrix = matrix.reverse();
            }
            odd = !odd;
        }
        return result.join(' ')
    }
};


