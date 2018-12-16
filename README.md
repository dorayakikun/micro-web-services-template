# micro-web-services-template

日本語は [こちら](#Japanese)

This repository was created under the inspired by [this site](https://qiita.com/shibukawa/items/fd49f98736045789ffc3).

## How to use

### Data input (first time only)

```sql
INSERT INTO app.foxes (name, scientific_name) VALUES ('アカギツネ', 'Vulpes vulpes');
INSERT INTO app.foxes (name, scientific_name) VALUES ('フェネック', 'Vulpes zerda');
```

### Staging environment

```bash
$ docker-compose up
```

### Production environment

```bash
# Build the image of the production environment
$ docker-compose -f docker-compose.prod.yml build
# Test boot image of production environment
$ docker-compose -f docker-compose.prod.yml up
```

Then open http://localhost:3000/ to see an sample app.

## Requirements

* docker
* docker-compose

***

## Japanese

本リポジトリは [マイクロサービスほどじゃないけどウェブサービスを分割開発したい人向けDocker設定を集めるスレ](https://qiita.com/shibukawa/items/fd49f98736045789ffc3) に影響を受けて作成しました。

## 使い方

### データ投入(初回のみ)

```sql
INSERT INTO app.foxes (name, scientific_name) VALUES ('アカギツネ', 'Vulpes vulpes');
INSERT INTO app.foxes (name, scientific_name) VALUES ('フェネック', 'Vulpes zerda');
```

### 検証環境

```bash
$ docker-compose up
```

### 本番環境

```bash
# 本番環境のイメージをビルド
$ docker-compose -f docker-compose.prod.yml build
# 本番環境のイメージをテスト起動
$ docker-compose -f docker-compose.prod.yml up
```

http://localhost:3000 にアクセスすると、動作を確認できます。

## 必要なもの

* docker
* docker-compose