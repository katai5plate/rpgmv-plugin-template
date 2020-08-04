type PrimitiveTypeNames = "string" | "number" | "boolean";
type ArrayTypeNames = "String" | "Number";

type EditorParamTypes =
  | "string"
  | "number"
  | "boolean"
  | "struct"
  | "select"
  | "combo"
  | "note"
  | "file";

type DatabaseParamTypes =
  | "actor"
  | "class"
  | "skill"
  | "item"
  | "weapon"
  | "armor"
  | "enemy"
  | "troop"
  | "state"
  | "animation"
  | "tileset"
  | "common_event"
  | "switch"
  | "variable";

type NativeParamTypes = EditorParamTypes | DatabaseParamTypes;

type ParamTypes = "parent" | "array" | NativeParamTypes;

/** 親パラメータ */
interface ParentParam {
  type: Extract<ParamTypes, "parent">;
  name: string;
  params: Params;
}
/** 配列パラメータ */
interface ArrayParam {
  type: Extract<ParamTypes, "array">;
  name: string;
  of: ArrayTypeNames;
  default: string[];
  text?: string;
}

interface StringParam {
  type: Extract<ParamTypes, "string">;
  name: string;
  default: string;
  text?: string;
}
interface NumberParam {
  type: Extract<ParamTypes, "number">;
  name: string;
  min?: number;
  max?: number;
  decimals?: number;
  default: number;
  text?: string;
}
interface BooleanParam {
  type: Extract<ParamTypes, "boolean">;
  name: string;
  on?: string;
  off?: string;
  default: boolean;
  text?: string;
}
interface StructParam {
  type: Extract<ParamTypes, "struct">;
  name: string;
  class: "MyPerson";
  params: Params;
  text?: string;
}
interface SelectParam {
  type: Extract<ParamTypes, "select">;
  name: string;
  cases: { option: string; value: number }[];
  default: number;
  text?: string;
}
interface ComboParam {
  type: Extract<ParamTypes, "combo">;
  name: string;
  options: string[];
  default: number;
  text?: string;
}
interface NoteParam {
  type: Extract<ParamTypes, "note">;
  name: string;
  default: string;
  text?: string;
}
interface FileParam {
  type: Extract<ParamTypes, "file">;
  name: string;
  dir: string;
  default: string;
  text?: string;
}
interface ActorParam {
  type: Extract<ParamTypes, "actor">;
  name: string;
  default: number;
  text?: string;
}
interface ClassParam {
  type: Extract<ParamTypes, "class">;
  name: string;
  default: number;
  text?: string;
}
interface SkillParam {
  type: Extract<ParamTypes, "skill">;
  name: string;
  default: number;
  text?: string;
}
interface ItemParam {
  type: Extract<ParamTypes, "item">;
  name: string;
  default: number;
  text?: string;
}
interface WeaponParam {
  type: Extract<ParamTypes, "weapon">;
  name: string;
  default: number;
  text?: string;
}
interface ArmorParam {
  type: Extract<ParamTypes, "armor">;
  name: string;
  default: number;
  text?: string;
}
interface EnemyParam {
  type: Extract<ParamTypes, "enemy">;
  name: string;
  default: number;
  text?: string;
}
interface TroopParam {
  type: Extract<ParamTypes, "troop">;
  name: string;
  default: number;
  text?: string;
}
interface StateParam {
  type: Extract<ParamTypes, "state">;
  name: string;
  default: number;
  text?: string;
}
interface AnimationParam {
  type: Extract<ParamTypes, "animation">;
  name: string;
  default: number;
  text?: string;
}
interface TilesetParam {
  type: Extract<ParamTypes, "tileset">;
  name: string;
  default: number;
  text?: string;
}
interface Common_eventParam {
  type: Extract<ParamTypes, "common_event">;
  name: string;
  default: number;
  text?: string;
}
interface SwitchParam {
  type: Extract<ParamTypes, "switch">;
  name: string;
  default: number;
  text?: string;
}
interface VariableParam {
  type: Extract<ParamTypes, "variable">;
  name: string;
  default: number;
  text?: string;
}

type Param =
  | ParentParam
  | ArrayParam
  | StringParam
  | NumberParam
  | BooleanParam
  | StructParam
  | SelectParam
  | ComboParam
  | NoteParam
  | FileParam
  | ActorParam
  | ClassParam
  | SkillParam
  | ItemParam
  | WeaponParam
  | ArmorParam
  | EnemyParam
  | TroopParam
  | StateParam
  | AnimationParam
  | TilesetParam
  | Common_eventParam
  | SwitchParam
  | VariableParam;
type Params = Param[];

type Version = string | number;

type CustomLicence = {
  name: string;
  description: string;
  url: string;
};

type LicenceTypes = "MIT" | "CC0" | "WTFPL" | CustomLicence;

interface Preferences {
  /** プラグイン名 */
  pluginName: string;
  /** プラグインのバージョン */
  version: Version;
  /** 作者名 */
  authors: string[];
  /**
   * コピーライト
   * $0, $1, $2... で作者名を挿入できる。
   * $$ でエスケープする
   * 省略すると `Copyright (c) ${authors.join(", ")}.` になる
   */
  copyright?: string;
  /** プラグイン名の接頭辞 */
  prefix: string;
  /** プラグインのライセンス */
  licence: LicenceTypes;
  /** 連絡先 */
  contact: string[];
  /** リポジトリ */
  repository: string;
  /** プラグインの概要 */
  description: string;
  /** プラグインの説明書 */
  help: string;
  /** 動作環境 */
  environment: {
    /** 対応 ES バージョン */
    ecma: number;
    /** コアスクリプトバージョン */
    core?: Version;
    /** エディタバージョン */
    editor?: Version;
    /** PIXI.js バージョン */
    pixi?: Version;
    /** NW.js バージョン */
    nw?: Version;
    /** 動作環境に関する説明文 */
    note: string;
    /**
     * 動作環境チェックから外れた時のエラー
     * NULLの場合、診断しない
     */
    throw?: string;
    /** 依存プラグイン・モジュール */
    dependencies: {
      /** 名前 */
      name: string;
      /** バージョン */
      version: Version;
      /** 入手先 */
      url: string;
    }[];
  };
  /** プラグインコマンド */
  commands: {
    /** 名前 */
    method: string;
    /** 引数 */
    arguments: PrimitiveTypeNames[];
  }[];
  /** パラメーター */
  params: Params;
}

interface PluginPreferences {
  main: Preferences;
  [locale: string]: Partial<Preferences>;
}
