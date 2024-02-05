const sorting = require("../../app");

const config = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
};

module.exports = config;

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("Without param", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  test("Books have not been sorted", () => {
    const input = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ];

    const output = sorting.sortByName(input);

    const expected = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ];

    expect(output).toEqual(expected);
  });
});
