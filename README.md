# Fukui Web & AI Support

福井県を中心に、中小企業・飲食店・個人事業主向けのホームページ制作、AI活用支援、業務効率化ツール開発、保守運用サポートを紹介する静的サイトです。

## 構成

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── hero-web-ai.png
├── prototypes/
│   └── kitchen-car/
│       ├── index.html
│       ├── style.css
│       ├── main.js
│       └── assets/
│           └── hero-kitchen-car.png
├── client-sites/
│   └── client-kitchen-car-site/
│       └── 実案件化するときのスターター
├── docs/
│   ├── kitchen-car-proposal.md
│   └── kitchen-car-questionnaire.md
├── README.md
├── AGENTS.md
└── SKILLS.md
```

## ローカルでの確認方法

特別なビルドは不要です。`index.html` をブラウザで開くと確認できます。

VS Codeなどの開発環境を使う場合は、Live Server拡張機能や任意の簡易サーバーでも確認できます。

```powershell
python -m http.server 8000
```

起動後、ブラウザで以下を開きます。

```text
http://localhost:8000
```

## 公開方法

### Cloudflare Pages

1. GitHubにこのフォルダをアップロードします。
2. Cloudflare Pagesで対象リポジトリを選択します。
3. Framework preset は `None` を選びます。
4. Build command は空欄にします。
5. Output directory は `/` または空欄にします。
6. デプロイ後、発行されたURLで表示を確認します。

### GitHub Pages

1. GitHubにこのフォルダをアップロードします。
2. Repository settings の Pages を開きます。
3. Source を `Deploy from a branch` にします。
4. Branch を `main`、folder を `/root` にします。
5. 保存後、公開URLで表示を確認します。

## 問い合わせフォームについて

現在は送信処理なしのデモフォームです。

将来的には `index.html` 内のフォームの `action` と `method` を変更することで、以下に接続できます。

- Formspree
- Googleフォーム
- 独自API

例:

```html
<form class="contact-form" action="https://formspree.io/f/xxxxxxx" method="post">
```

## 文章や画像の差し替え方法

文章を変更する場合は、`index.html` の各セクション内のテキストを編集します。
料金、サービス内容、自己紹介、よくある質問は、見出しごとにまとまっているため、該当セクションを探して修正してください。

ヒーロー画像は `assets/hero-web-ai.png` に配置しています。
差し替える場合は同じファイル名で置き換えるか、`index.html` の画像パスを変更してください。

## キッチンカー案件の準備物

友達へ見せるプロトタイプは `prototypes/kitchen-car/index.html` です。

友達に説明する資料は以下です。

* `docs/kitchen-car-proposal.md`
* `docs/kitchen-car-questionnaire.md`

実際に案件化する場合のスターターは `client-sites/client-kitchen-car-site/` に置いています。
本番制作に入るときは、このフォルダを営業サイトから切り離して、別フォルダ・別GitHubリポジトリとして管理します。

## 設計方針

スマホでの読みやすさを優先し、HTML / CSS / JavaScript のみで構成しています。
外部ライブラリを増やさず、初心者でも修正しやすいように、ページ構成、見た目、動作をファイル単位で分離しています。
