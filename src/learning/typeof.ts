const language = ["JavaScript", "TypeScript", "Python", "Java", "C#"] as const;
type TLanguage = (typeof language)[number];
// TLanguage = "JavaScript" | "TypeScript" | "Python" | "Java" | "C#"

type TMember_v1 = {
  name: string;
  language: TLanguage;
};

const member_v1: TMember_v1 = {
  name: "ゆせ",
  language: "TypeScript", //languageにないものはコンパイルエラー
};

// ==================================================

const member_v2 = {
  name: "ゆせ",
  age: 21,
};

type TMember_v2 = typeof member_v2;
// TMember_v2 = {name: string; age: number;}

interface TMember_v3 extends TMember_v2 {
  grade: number;
}
/*
type定義はextendsを使えない↓↓↓
type TMember_v3 extends TMember_v2 = {
  grade: number;
};
*/

const member_v3: TMember_v3 = {
  name: "ゆせ",
  age: 21,
  grade: 3,
};

/*
JavaScriptのtypeof演算子とは別物 if (typeof n === "string")
宣言済みの「変数」の型を取得できる
「変数」に対して使用できる
型推論と組み合わせた時が有効
「型」で使用できない
*/
