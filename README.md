# WEB制作 Workspace

Web制作・AI活用支援の作業用ワークスペースです。

## フォルダ構成

```text
WEB制作/
├── tonarino-web/  # 自分のブランドサイト。別リポジトリで管理
├── clients/       # クライアント案件。案件ごとに別リポジトリで管理
├── docs/          # 提案メモ、ヒアリング項目、運用メモ
├── AGENTS.md      # Codex向けの作業方針
└── SKILLS.md      # 作業メモ
```

## 運用方針

- 自分のサイトは `tonarino-web/` に置き、別リポジトリで管理する
- クライアント案件は `clients/案件名/` に置く
- クライアント案件は原則として案件ごとにGitリポジトリを分ける
- `tonarino-web/` は親リポジトリでは追跡しない
- `clients/` は親リポジトリでは追跡しない
- 古い `client-sites/` は使用しない

## ローカル確認

自分のサイトを確認する場合:

```powershell
cd .\tonarino-web
py -m http.server 8000
```

```text
http://localhost:8000
```
