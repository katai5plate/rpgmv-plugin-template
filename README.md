# rpgmv-plugin-template

ツクール MV プラグインのテンプレートエディタ

## plan

- demo.json のような JSON からプラグインを生成する
- JSON エディタも作る
- プラグインコマンドの実装も行われる
- `Document.currentScript` による存在確認の実装もする

### json

```ts
interface Preferences {
  /** プラグイン名 */
  pluginName: string;
  /** プラグインのバージョン */
  version: Version;
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
  i18n: {
    [locale: string]: Partial<Preferences>;
  };
}
```

```js
{
  // メイン言語での設定
  "main": { /* ... */ },
  "i18n": {
    // 特定の言語で上書きする値を設定
    "en": { /* ... */ }
  }
}
```

## memo

- `Number[]` は出力時 `["1", "2", "3"]` の値にする
- `parent`, `text` は `parameters` 全 type に使用できる

## 参考

- https://www.5ing-myway.com/rpgmaker-plugin-parameter-type/#parent
