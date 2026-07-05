# クライアントサイトのリポジトリ運用

## 基本方針

実際のお客さん向けサイトは、1クライアントにつき1リポジトリで管理します。

この親リポジトリは、自分の営業サイト、制作メモ、共通ドキュメント、テンプレート候補を管理する場所です。クライアントサイト本体は混ぜません。

## ローカル配置

```text
WEB制作/
  clients/
    michell-site/
    next-client-site/
  docs/
  prototypes/
```

`clients/` は親リポジトリの `.gitignore` に入れて、親側では追跡しません。

## 新しい案件を作る手順

1. `clients/{client-name}-site/` を作る
2. そのフォルダ内で `git init` する
3. `index.html`、`style.css`、`main.js`、`assets/` を配置する
4. 初回コミットを作る
5. GitHubに `{client-name}-site` リポジトリを作ってpushする

## この運用にする理由

- 案件ごとの履歴が分かれる
- 公開設定やデプロイ設定を案件単位で持てる
- 他クライアントのコードや情報が混ざらない
- 納品時に対象リポジトリだけ渡せる
- 保守契約や修正履歴を追いやすい

## 命名ルール

```text
{client-name}-site
```

例:

```text
michell-site
sample-cafe-site
fukui-salon-site
```
