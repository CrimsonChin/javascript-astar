var map = {
    cols: 7,
    rows: 7,
    tSize: 25,
    tiles: [
        0, 0, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    }
};