// 0 - empty cell
// 1 - wall
// 2 - chest
// 3 - monster

const levels = [
    {
        name: "Warlock's Castle",
        structure: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0], // column 0
            [0, 0, 0, 0, 0, 0, 1, 1, 1], // column 1
            [0, 0, 1, 0, 1, 0, 0, 0, 3], // column 2
            [0, 0, 1, 3, 1, 0, 1, 1, 1], // column 3
            [0, 0, 1, 1, 1, 0, 0, 0, 3], // column 4
            [0, 0, 0, 0, 1, 0, 1, 1, 1], // column 5
            [0, 0, 2, 0, 1, 0, 0, 0, 3], // column 6
            [0, 0, 0, 0, 1, 0, 1, 1, 1], // column 7
            [0, 1, 1, 1, 1, 0, 0, 0, 3], // column 8
        ]
    }
];

export default levels;