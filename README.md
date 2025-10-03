# SDD - 仕様駆動開発

Node.jsで仕様駆動開発（SDD）の原則を実証する小さなCLIアプリケーションです。

## 仕様駆動開発とは？

仕様駆動開発は以下のような開発アプローチです：
1. 最初に仕様（テスト）を書く
2. その仕様を満たすコードを実装する
3. 機能を完成とみなす前に、すべての仕様が合格することを確認する

このプロジェクトは、最初にJestテストを書き、次にCLI機能を実装することでSDDを実証しています。

## インストール

```bash
npm install
```

## 使い方

CLIを直接実行する：

```bash
node bin/cli.js
```

またはグローバルにインストールして`sdd`コマンドを使用する：

```bash
npm link
sdd
```

### 利用可能なコマンド

- `sdd` - ウェルカムメッセージを表示
- `sdd --help` または `sdd -h` - ヘルプ情報を表示
- `sdd --version` または `sdd -v` - バージョン番号を表示
- `sdd --greet <name>` - 誰かに挨拶する

### 使用例

```bash
# ウェルカムメッセージを表示
node bin/cli.js

# ヘルプを表示
node bin/cli.js --help

# バージョンを表示
node bin/cli.js --version

# 誰かに挨拶する
node bin/cli.js --greet World
# 出力: Hello, World!
```

## 開発

### テストの実行

このプロジェクトはSDDの原則に従います - テストを最初に書き、次に実装します。

```bash
# テストを一度実行
npm test

# ウォッチモードでテストを実行
npm run test:watch
```

### プロジェクト構造

```
sdd/
├── __tests__/        # Jestテスト仕様
│   └── cli.spec.js   # CLI仕様
├── bin/              # 実行可能スクリプト
│   └── cli.js        # CLIエントリーポイント
├── src/              # ソースコード
│   └── cli.js        # CLI実装
└── package.json      # プロジェクト設定
```

## SDDワークフロー

1. **仕様を書く** - `__tests__/cli.spec.js`で期待される動作を定義する
2. **テストを実行** - テストが失敗するのを確認する（Red）
3. **コードを実装** - `src/cli.js`にテストを通すための最小限のコードを書く
4. **テストを実行** - テストが成功するのを確認する（Green）
5. **リファクタリング** - テストをグリーンに保ちながらコードを改善する

## AI支援開発

このプロジェクトは、Claude CodeとGitHub Copilotを使用したAI支援開発向けに設定されています。

### 設定ファイル

- **`AGENTS.md`** - [agents.md](https://agents.md/)標準に従ったメインのAIエージェント仕様
- `.clauderc` - プロジェクトルートのClaude Code設定
- `.github/copilot-instructions.md` - GitHub Copilot向けの指示
- `.github/claude-config.json` - 詳細なClaude Code設定
- `.github/agent-workflow.md` - AIエージェント向けワークフローガイド
- `.github/README.md` - AIエージェント設定の概要

### AIエージェントでの使用

このリポジトリで作業するAIエージェントは、[`AGENTS.md`](AGENTS.md)を参照して以下の包括的なガイドラインを確認してください：
- プロジェクト構造とワークフロー
- 開発方法論（SDD）
- テストパターンとコマンド
- コードスタイルと基準
- 成功基準

### Claude Codeでの使用

エージェントコーディングにClaude Codeを使用する場合：
1. Claude Codeは`.clauderc`と`.github/`設定ファイルを自動的に読み込みます
2. エージェントは設定で定義されたSDD方法論に従います
3. すべてのコード変更はRed-Green-Refactorサイクルに従ってテスト駆動で行われます

### GitHub Copilotでの使用

GitHub Copilotは`.github/copilot-instructions.md`を使用して、SDD方法論に沿ったコンテキスト対応の提案を提供します。

詳細については、[`AGENTS.md`](AGENTS.md)および[`.github/README.md`](.github/README.md)を参照してください。

## ライセンス

ISC
