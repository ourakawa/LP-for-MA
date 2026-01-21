
import { LPData } from './types.ts';

export const STRATEGIES: LPData[] = [
  {
    id: 'pattern-1',
    label: '安心感重視 (A)',
    strategy: 'No.1の安心感訴求型',
    hero: {
      badge: '世界水準のセキュリティ',
      title: '世界が認めたセキュリティを、あなたのWebサイトに。',
      subtitle: 'AI×専門家監視で、もう迷わない。国内企業のインフラを守り抜く「本物」の安心感。',
      cta: 'まずは2ヶ月無料でプロに守ってもらう'
    },
    authority: {
      title: 'プロが選ぶ圧倒的な実績',
      items: ['台湾政府格付けトップクラス', '世界2,800件以上の診断実績', '経済産業省基準適合']
    },
    painPoints: {
      title: '「よくわからない」が一番の不安ではありませんか？',
      items: [
        { question: 'セキュリティ担当がいない', answer: 'SOCの専門家が24時間体制であなたに代わって監視します。' },
        { question: '情報漏洩が怖い', answer: '世界最高レベルのホワイトハッカーの知見をAIに。未知の攻撃も遮断。' }
      ]
    },
    features: [
      { title: 'AI自動検知', description: '最新の攻撃手法を学習し、未知の脅威を瞬時にブロック。', icon: '🤖' },
      { title: '専門家SOC', description: '24時間365日、有人での高度な分析と対応を提供。', icon: '🛡️' },
      { title: '完全お任せ', description: '設定から運用まで、専門チームがワンストップでサポート。', icon: '🤝' }
    ],
    pricing: { initial: '7.2万円', monthly: '3.5万円〜', offer: '最大2ヵ月無償トライアル' },
    closing: {
      title: 'あなたのサイトに、世界トップクラスの守護神を。',
      subtitle: '導入は最短7営業日。設定変更だけで完了します。',
      cta: '無料で2ヶ月体験する'
    }
  },
  {
    id: 'pattern-2',
    label: 'コスパ重視 (B)',
    strategy: '圧倒的コスパ・手軽さ訴求型',
    hero: {
      badge: 'トータルコストで選ぶなら',
      title: 'その「格安WAF」、監視費用は別料金ではありませんか？',
      subtitle: 'Ray-SOCなら、プロの監視込みで月額3.5万円。運用工数もゼロへ。',
      cta: '見積もりを比較して驚きの結果を'
    },
    authority: {
      title: '導入の手軽さとコストパフォーマンス',
      items: ['初期費用一律 7.2万円', '月額3.5万円〜（監視込）', '最短7営業日で稼働']
    },
    painPoints: {
      title: '隠れたコストに悩んでいませんか？',
      items: [
        { question: '監視が別料金', answer: 'Ray-SOCはSOC監視もレポート作成も全てコミコミ価格。' },
        { question: '運用の手間が膨大', answer: 'SSL更新代行も標準搭載。担当者の負担を徹底削減します。' }
      ]
    },
    features: [
      { title: 'SOC監視込み', description: '他社ではオプションの専門家監視が最初からセット。', icon: '💰' },
      { title: 'SSL更新代行', description: '「90日問題」の対応も代行。更新忘れによる事故を防ぎます。', icon: '🔄' },
      { title: '最短導入', description: 'DNS変更のみで設置完了。エンジニア不要の手軽さ。', icon: '⚡' }
    ],
    pricing: { initial: '7.2万円', monthly: '3.5万円〜', offer: '2ヶ月無料トライアル受付中' },
    closing: {
      title: '本当の「安さ」と「安心」を、今すぐ手に入れる。',
      subtitle: 'まずは無料で見積もりを。他社比較で違いを実感してください。',
      cta: '無料トライアルを申し込む'
    }
  },
  {
    id: 'pattern-3',
    label: '脱VPN (C)',
    strategy: 'VPNレス・ゼロトラスト時流対応型',
    hero: {
      badge: '最新のセキュリティトレンド',
      title: 'VPNへの依存は、経営リスクです。',
      subtitle: 'ゼロトラスト時代の「攻め」のWebセキュリティ。ランサムウェアの侵入を入り口で断つ。',
      cta: '入り口の安全性を無料で診断する'
    },
    authority: {
      title: '次世代の防御スタンダード',
      items: ['ランサムウェア侵入防止', 'ゼロデイ攻撃対応', 'ゼロトラスト対応WAF']
    },
    painPoints: {
      title: '境界型防御の限界、感じていませんか？',
      items: [
        { question: 'VPNからの侵入が心配', answer: '侵入の6割はVPNから。アプリ層（WAF）での鉄壁の防御が必須です。' },
        { question: '外部アクセスが増えた', answer: 'AIが全ての通信をリアルタイム解析。どこからでも安全に接続可能に。' }
      ]
    },
    features: [
      { title: 'ゼロデイ対策', description: '未知の脆弱性を狙う攻撃を、AIがシグネチャなしで検知。', icon: '🎯' },
      { title: '高精度分析', description: 'ボディ埋め込み型や難読化攻撃など、巧妙な手口を解読。', icon: '🔍' },
      { title: '世界最強の知見', description: 'ホワイトハッカー集団の攻撃データを元にした鉄壁のロジック。', icon: '🌏' }
    ],
    pricing: { initial: '7.2万円', monthly: '3.5万円〜', offer: '最大2ヵ月無償トライアル' },
    closing: {
      title: '脱VPNの第一歩、WAFから始めませんか？',
      subtitle: 'クラウド型WAFで「入り口」を強化し、安全なIT基盤を構築。',
      cta: '2ヶ月無料体験を開始する'
    }
  },
  {
    id: 'pattern-4',
    label: '運用ゼロ (D)',
    strategy: '運用工数ゼロ・SSL解決型',
    hero: {
      badge: '情シス担当者の救世主',
      title: 'WAFのログ確認、SSL更新... その面倒な作業、私たちが全部引き受けます。',
      subtitle: '「運用丸投げ」でOK。あなたは本来の業務に集中してください。',
      cta: '運用不要のWAFを詳しく見る'
    },
    authority: {
      title: '究極のアウトソーシング',
      items: ['SSL更新代行（90日問題）', '24/365フルマネージド', '誤検知チューニング代行']
    },
    painPoints: {
      title: 'これ以上仕事を増やしたくない情シス様へ',
      items: [
        { question: '深夜のアラート対応が辛い', answer: 'SOCが一次対応を完結。緊急時のみあなたへ連絡します。' },
        { question: 'SSL更新が手間', answer: '自動化ではなく「代行」。専門家が確実に更新を完了させます。' }
      ]
    },
    features: [
      { title: 'SSL更新代行', description: '顧客負担ゼロ。証明書の管理・更新を専門家が代行。', icon: '🔑' },
      { title: '有人の分析レポート', description: '機械的なデータだけでなく、専門家の知見を添えたレポート。', icon: '📊' },
      { title: '電話一本で対応', description: '複雑な管理画面操作は不要。要望を伝えるだけで設定変更。', icon: '📞' }
    ],
    pricing: { initial: '7.2万円', monthly: '3.5万円〜', offer: '2ヶ月間お試し運用無料' },
    closing: {
      title: '業務時間を「守り」から「攻め」へ。',
      subtitle: '運用のストレスから解放される喜びを、ぜひ体験してください。',
      cta: 'まずは無料でプロに任せてみる'
    }
  },
  {
    id: 'pattern-5',
    label: 'AI・高防御 (E)',
    strategy: 'AI技術・高防御一点突破型',
    hero: {
      badge: '圧倒的な技術的優位性',
      title: 'ホワイトハッカーの知脳を、AIに実装した。',
      subtitle: '未知の脅威を予見する、次世代クラウドWAF。従来型では防げない攻撃もAIが遮断。',
      cta: 'AIの防御力をPoCで実証する'
    },
    authority: {
      title: 'エンジニアが選ぶ最高峰の検知力',
      items: ['Deep Learning 独自エンジン', '難読化攻撃の解読', '台湾政府セキュリティ格付けNo.1クラス']
    },
    painPoints: {
      title: '既存WAFの「検知漏れ」に不満はありませんか？',
      items: [
        { question: 'シグネチャの限界', answer: 'AIが攻撃の本質を学習。パターンにない未知の攻撃を防ぎます。' },
        { question: 'SSRF等の高度な攻撃', answer: '前年比13.6倍に増えた高度な攻撃にも、AIがリアルタイム対応。' }
      ]
    },
    features: [
      { title: 'AI Deep Learning', description: '攻撃者の思考をモデル化した独自AI。圧倒的な誤検知の少なさ。', icon: '🧬' },
      { title: 'ハッカーの知見', description: '世界最大級のホワイトハッカー集団が持つ攻撃手法を反映。', icon: '🧠' },
      { title: '即時防御', description: '発見された脆弱性に対し、シグネチャを待たずに防御可能。', icon: '🚀' }
    ],
    pricing: { initial: '7.2万円', monthly: '3.5万円〜', offer: '2ヶ月無償トライアル実施中' },
    closing: {
      title: 'その防御力、本物。',
      subtitle: '既存WAFとの並列検証も可能です。AIの真の実力を体感してください。',
      cta: '2ヶ月無料トライアルを予約する'
    }
  }
];
