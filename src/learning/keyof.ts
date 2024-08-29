type TPeachTechMember = {
  name: string;
  grade: number;
};

type TPeachTechSurvey = {
  techSkill: number;
  communicationSkill: number;
  techLanguage: string;
};

type TFormTitle = keyof TPeachTechMember | keyof TPeachTechSurvey;
// TFormTitle = "name" | "grade" | "techSkill" | "communicationSkill" | "techLanguage"

type TFormInput = "text" | "number";

type TForm = {
  title: TFormTitle;
  type: TFormInput;
};

const form_ver1: TForm = {
  title: "name",
  type: "text",
};
// もしくは
const form_ver2: TForm[] = [
  { title: "name", type: "text" },
  { title: "grade", type: "number" },
  { title: "techSkill", type: "number" },
  { title: "communicationSkill", type: "number" },
  { title: "techLanguage", type: "text" },
  // { title: "TFormTitleにないものはコンパイルエラーされる", type: "text" },
];

// keyofの備忘録
// keyofはオブジェクトのプロパティ名を取得する
// Union型で取得
// 「型」で使用できる, 変数では使用できない
