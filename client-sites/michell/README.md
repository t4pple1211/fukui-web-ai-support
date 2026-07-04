# MICHELL Web Site

福井県を中心に活動するハンバーガーキッチンカー「MICHELL」の公式LPです。

このサイトの主目的は、商品の予約や取り置きではなく、学校祭・会社行事・地域イベント・スポーツ大会などのイベント出店相談を増やすことです。

## ファイル構成

```text
client-sites/michell/
  index.html
  style.css
  main.js
  assets/
    logo.png
    photos/
      hero.jpg
      burger-01.jpg
      cooking-01.jpg
      event-01.jpg
      instagram-01.jpg
```

## 写真差し替えルール

正式写真が届いたら、`assets/photos/` に以下の名前で配置します。

```text
hero.jpg          Hero用。横長 16:9 または 4:3
burger-01.jpg     ハンバーガー写真。正方形 1:1
cooking-01.jpg    調理風景。正方形 1:1
event-01.jpg      出店風景。横長 3:2
instagram-01.jpg  Instagram投稿風。縦長 4:5
```

写真は `object-fit: cover` で表示される前提です。比率が少し違っても大きく崩れない設計にしています。

## 公開方法

静的サイトなので、Cloudflare Pages / GitHub Pages / Netlify などで公開できます。

ビルドコマンドは不要です。公開ディレクトリはこの `client-sites/michell/` フォルダを指定します。

## フォームについて

現在のフォームは送信先未接続です。実運用では以下のいずれかに接続します。

- Googleフォーム
- Formspree
- LINE公式
- Instagram DMへの案内
- 独自API
