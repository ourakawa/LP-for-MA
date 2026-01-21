import React, { useState, useEffect } from 'react';
import { STRATEGIES } from './constants.tsx';
import { Header, Footer } from './components/Layout.tsx';
import { LPData } from './types.ts';

const LPSection: React.FC<{ data: LPData }> = ({ data }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {data.hero.badge}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.15] tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-900/40 transform hover:-translate-y-0.5 active:translate-y-0">
                {data.hero.cta}
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-lg font-bold transition-all backdrop-blur-sm">
                詳しく資料を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Authority */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.authority.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black italic">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              {data.painPoints.title}
            </h2>
          </div>
          <div className="space-y-6">
            {data.painPoints.items.map((item, i) => (
              <div key={i} className="group bg-slate-50 p-8 rounded-3xl border border-slate-200 transition-all hover:bg-white hover:shadow-xl hover:border-blue-100">
                <div className="flex gap-4 mb-6">
                  <span className="shrink-0 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg">Q</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 leading-snug">{item.question}</h3>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-blue-100">A</span>
                  <p className="text-lg text-slate-600 leading-relaxed mt-1">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black text-xs tracking-widest uppercase">Value Propositions</span>
            <h2 className="text-3xl lg:text-4xl font-black mt-4 text-slate-900">Ray-SOCが選ばれる理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 text-4xl flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-[#0a192f] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600"></div>
            <div className="p-10 lg:p-20 text-center relative z-10 text-white">
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">
                {data.pricing.offer}
              </span>
              <h2 className="text-4xl font-black mb-16">シンプルで透明性の高い価格</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 rounded-3xl overflow-hidden mb-16 border border-slate-800">
                <div className="bg-[#112240] p-10">
                  <p className="text-slate-400 font-bold mb-4 uppercase text-xs tracking-widest">初期費用</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-black">{data.pricing.initial}</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-4 italic">※全てのプラン共通</p>
                </div>
                <div className="bg-[#112240] p-10">
                  <p className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">月額運用（SOC込）</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-black text-blue-400">{data.pricing.monthly}</span>
                    <span className="text-slate-400 text-xl font-bold mb-1">〜</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-4 italic">※SSL更新代行費も含まれます</p>
                </div>
              </div>

              <div className="max-w-sm mx-auto space-y-4 mb-12">
                {['24/365 専門家による監視', 'SSL証明書更新代行サービス', '独自AI遮断エンジン搭載', '最短7営業日での迅速導入'].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xl font-black transition-all shadow-xl shadow-blue-900/50">
                無料でトライアルを申し込む
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-slate-900">
            {data.closing.title}
          </h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">
            {data.closing.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-12 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xl font-black transition-all shadow-xl shadow-slate-300">
              {data.closing.cta}
            </button>
            <button className="px-12 py-6 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 rounded-2xl text-xl font-black transition-all">
              見積もりシミュレーション
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return STRATEGIES.find(s => s.id === hash) ? hash : STRATEGIES[0].id;
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isPromptCopied, setIsPromptCopied] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (STRATEGIES.find(s => s.id === hash)) {
        setActiveStrategy(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleStrategyChange = (id: string) => {
    setActiveStrategy(id);
    window.location.hash = id;
  };

  const currentData = STRATEGIES.find(s => s.id === activeStrategy) || STRATEGIES[0];

  const generateCanvaPrompt = () => {
    const visualGuides: Record<string, any> = {
      'pattern-1': { style: '信頼と権威（Corporate Trust）', colors: 'ネイビー、ゴールド、白', img: 'サーバーールームを見守るプロフェッショナル、盾のメタファー' },
      'pattern-2': { style: '明快とスピード（Efficiency）', colors: 'スカイブルー、ライトグレー、ライムグリーン', img: 'デジタル化されたオフィス、時計のアイコン、軽快なネットワークライン' },
      'pattern-3': { style: '先進と警告（Cyber Edge）', colors: 'ブラック、ネオンブルー、警告色', img: '暗闇に浮かぶ光るネットワーク網、ゲートを突破しようとする攻撃を跳ね返す光' },
      'pattern-4': { style: '親しみと解放（Relief/Support）', colors: 'ホワイト、パステルブルー、明るいベージュ', img: '穏やかな表情のエンジニア、空を見上げる女性、鍵の形をしたパズル' },
      'pattern-5': { style: '圧倒的技術（High-Tech/AI）', colors: '深い藍色、サイバーシアン、バイオレット', img: '脳を模した回路図、光り輝くDNA、Deep Learningの視覚化' },
    };
    const guide = visualGuides[currentData.id] || visualGuides['pattern-1'];

    return `
【Canva Magic Media用 デザインプロンプト】
目的: IT B2B サービス (WAF) のランディングページ用
デザインスタイル: ${guide.style}

[画像生成プロンプト (英語)]
Cybersecurity concept art, ${guide.img}, high-tech aesthetics, clean and minimalist composition, photorealistic, 4k, professional lighting, corporate color palette with ${guide.colors}.

[レイアウト構成案]
1. Hero: 左側に強力な見出し（${currentData.hero.title}）、右側に生成した画像を配置。
2. 背景色: ${guide.colors.split('、')[0]}系のグラデーション。
3. Fonts: Noto Sans JP (Bold) をメインで使用。

[配色コード例]
- Base: #f8fafc (Slate 50)
- Brand: #2563eb (Blue 600)
- Dark: #0f172a (Slate 900)
    `.trim();
  };

  const copyToClipboard = (text: string, setFn: (v: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setFn(true);
      setTimeout(() => setFn(false), 2000);
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />
      
      {/* Review Studio Header */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">構成案</span>
                <span className="text-sm font-bold text-slate-900">{currentData.label}</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">戦略</span>
                <span className="text-sm font-bold text-slate-600">{currentData.strategy}</span>
              </div>
            </div>
            
            <nav className="flex items-center p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar">
              {STRATEGIES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleStrategyChange(s.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeStrategy === s.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Action Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-600 text-white p-6 rounded-3xl flex flex-col justify-between shadow-xl shadow-blue-200">
              <p className="text-sm font-medium opacity-90 mb-4">この案の戦略目標：</p>
              <h3 className="text-lg font-black leading-tight mb-4">
                {currentData.id === 'pattern-1' && '技術知識がない層にも「ここなら安心」と直感させる'}
                {currentData.id === 'pattern-2' && 'トータルコストの低さを強調し、比較検討を促す'}
                {currentData.id === 'pattern-3' && 'VPN依存の危うさを突き、最新対策の必要性を説く'}
                {currentData.id === 'pattern-4' && '面倒な運用から「解放される」メリットを強調する'}
                {currentData.id === 'pattern-5' && 'AIの検知力と技術力で競合との格の違いを見せる'}
              </h3>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-center gap-3">
              <button 
                onClick={() => copyToClipboard(currentData.hero.title + '\n' + currentData.hero.subtitle, setIsCopied)}
                className={`w-full py-3 rounded-xl text-xs font-black border transition-all ${
                  isCopied ? 'bg-green-500 border-green-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'
                }`}
              >
                {isCopied ? '原稿をコピーしました' : '構成原稿をコピー'}
              </button>
              <button 
                onClick={() => setShowPromptModal(true)}
                className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <span>🎨</span> Canva用プロンプトを生成
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">フィードバック</span>
              <button 
                onClick={() => window.open('https://github.com/ourakawa/LP-for-MA/issues/new', '_blank')}
                className="text-sm font-bold text-blue-600 hover:underline"
              >
                GitHub Issueでレビューを送る
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-200 ring-offset-4 ring-offset-slate-100">
            <LPSection data={currentData} />
          </div>
        </div>
      </main>

      {/* Canva Prompt Modal */}
      {showPromptModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-slate-900">Canva デザインプロンプト</h3>
                <p className="text-sm text-slate-500 mt-1">{currentData.label} 用のビジュアル構成</p>
              </div>
              <button onClick={() => setShowPromptModal(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">✕</button>
            </div>
            <div className="p-8">
              <pre className="bg-slate-50 p-6 rounded-2xl text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto whitespace-pre-wrap h-80">
                {generateCanvaPrompt()}
              </pre>
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => copyToClipboard(generateCanvaPrompt(), setIsPromptCopied)}
                  className={`flex-grow py-4 rounded-2xl text-sm font-black transition-all ${
                    isPromptCopied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  {isPromptCopied ? 'プロンプトをコピーしました' : 'プロンプトをすべてコピー'}
                </button>
                <button 
                  onClick={() => window.open('https://www.canva.com/', '_blank')}
                  className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl text-sm font-black hover:bg-slate-200 transition-all"
                >
                  Canvaを開く
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;