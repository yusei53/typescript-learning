const president_v1 = {
  name: "ゆせ",
  age: 21,
  language: "TypeScript",
};

type TPresident = keyof typeof president_v1;
// TPresident = "name" | "age" | "language"

const president_v2 = {
  name: "ゆせ",
  age: 21,
  language: "TypeScript",
} as const;

type TPresident_v2 = (typeof president_v2)[keyof typeof president_v2];
// TPresident_v2 = "ゆせ" | 21 | "TypeScript"

/*
keyofとtypeofの組み合わせの備忘録
パターンは一旦2つ
1. keyof typeofでオブジェクトのプロパティ名を取得
2. (typeof object)[keyof typeof object]でオブジェクトの値をUnion型で取得
*/
