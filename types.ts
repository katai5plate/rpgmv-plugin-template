type PrimitiveTypeNames = "string" | "number" | "boolean";
type ArrayTypeNames = "String" | "Number";

type EditorParameterTypes =
  | "string"
  | "number"
  | "boolean"
  | "struct"
  | "select"
  | "combo"
  | "note"
  | "file";

type DatabaseParameterTypes =
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

type NativeParameterTypes = EditorParameterTypes | DatabaseParameterTypes;

type ParameterTypes = "parent" | "array" | NativeParameterTypes;

/** 親パラメータ */
interface ParentParameter {
  type: Extract<ParameterTypes, "parent">;
  name: string;
  parameters: Parameters;
}
/** 配列パラメータ */
interface ArrayParameter {
  type: Extract<ParameterTypes, "array">;
  name: string;
  of: ArrayTypeNames;
  default: string[];
  text?: string;
}

interface StringParameter {
  type: Extract<ParameterTypes, "string">;
  name: string;
  default: string;
  text?: string;
}
interface NumberParameter {
  type: Extract<ParameterTypes, "number">;
  name: string;
  min?: number;
  max?: number;
  decimals?: number;
  default: number;
  text?: string;
}
interface BooleanParameter {
  type: Extract<ParameterTypes, "boolean">;
  name: string;
  on?: string;
  off?: string;
  default: boolean;
  text?: string;
}
interface StructParameter {
  type: Extract<ParameterTypes, "struct">;
  name: string;
  class: "MyPerson";
  parameters: Parameters;
  text?: string;
}
interface SelectParameter {
  type: Extract<ParameterTypes, "select">;
  name: string;
  cases: { option: string; value: number }[];
  default: number;
  text?: string;
}
interface ComboParameter {
  type: Extract<ParameterTypes, "combo">;
  name: string;
  options: string[];
  default: number;
  text?: string;
}
interface NoteParameter {
  type: Extract<ParameterTypes, "note">;
  name: string;
  default: string;
  text?: string;
}
interface FileParameter {
  type: Extract<ParameterTypes, "file">;
  name: string;
  dir: string;
  default: string;
  text?: string;
}
interface ActorParameter {
  type: Extract<ParameterTypes, "actor">;
  name: string;
  default: number;
  text?: string;
}
interface ClassParameter {
  type: Extract<ParameterTypes, "class">;
  name: string;
  default: number;
  text?: string;
}
interface SkillParameter {
  type: Extract<ParameterTypes, "skill">;
  name: string;
  default: number;
  text?: string;
}
interface ItemParameter {
  type: Extract<ParameterTypes, "item">;
  name: string;
  default: number;
  text?: string;
}
interface WeaponParameter {
  type: Extract<ParameterTypes, "weapon">;
  name: string;
  default: number;
  text?: string;
}
interface ArmorParameter {
  type: Extract<ParameterTypes, "armor">;
  name: string;
  default: number;
  text?: string;
}
interface EnemyParameter {
  type: Extract<ParameterTypes, "enemy">;
  name: string;
  default: number;
  text?: string;
}
interface TroopParameter {
  type: Extract<ParameterTypes, "troop">;
  name: string;
  default: number;
  text?: string;
}
interface StateParameter {
  type: Extract<ParameterTypes, "state">;
  name: string;
  default: number;
  text?: string;
}
interface AnimationParameter {
  type: Extract<ParameterTypes, "animation">;
  name: string;
  default: number;
  text?: string;
}
interface TilesetParameter {
  type: Extract<ParameterTypes, "tileset">;
  name: string;
  default: number;
  text?: string;
}
interface Common_eventParameter {
  type: Extract<ParameterTypes, "common_event">;
  name: string;
  default: number;
  text?: string;
}
interface SwitchParameter {
  type: Extract<ParameterTypes, "switch">;
  name: string;
  default: number;
  text?: string;
}
interface VariableParameter {
  type: Extract<ParameterTypes, "variable">;
  name: string;
  default: number;
  text?: string;
}

type Parameter =
  | ParentParameter
  | ArrayParameter
  | StringParameter
  | NumberParameter
  | BooleanParameter
  | StructParameter
  | SelectParameter
  | ComboParameter
  | NoteParameter
  | FileParameter
  | ActorParameter
  | ClassParameter
  | SkillParameter
  | ItemParameter
  | WeaponParameter
  | ArmorParameter
  | EnemyParameter
  | TroopParameter
  | StateParameter
  | AnimationParameter
  | TilesetParameter
  | Common_eventParameter
  | SwitchParameter
  | VariableParameter;
type Parameters = Parameter[];

type CustomLicence = {
  name: string;
  description: string;
  url: string;
};

type LicenceTypes = "MIT" | "CC0" | "WTFPL" | CustomLicence;

export interface Preferences {
  /** プラグイン名 */
  pluginName: string;
  /** 作者名 */
  author: string;
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
    core: string;
    /** 動作環境に関する説明文 */
    note: string;
    /** 依存プラグイン・モジュール */
    dependencies: {
      /** 名前 */
      name: string;
      /** バージョン */
      version: string | number;
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
  parameters: Parameters;
}
