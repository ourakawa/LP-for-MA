
import React, { useState, useEffect } from 'react';
import { STRATEGIES } from './constants';
import { Header, Footer } from './components/Layout';
import { LPData } from './types';

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
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
            {['経済産業省適合', '台湾政府No.1', '2800+実績'].map(badge => (
              <span key={badge} className="text-sm font-black text-slate-900 uppercase tracking-tighter">{badge}</span>
            ))}
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
  const [isLinkCopied, setIsLinkCopied] = useState(false);

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

  const generateReviewText = () => {
    return `
【LP構成パターン: ${currentData.label}】
戦略：${currentData.strategy}

■メインビジュアル
見出し：${currentData.hero.title}
サブタイトル：${currentData.hero.subtitle}

■料金
初期費用：${currentData.pricing.initial}
月額費用：${currentData.pricing.monthly}

---
【レビュー内容を入力してください】
    `.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateReviewText()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const copyLinkToClipboard = () => {
    const url = `${window.location.origin}${window.location.pathname}#${activeStrategy}`;
    navigator.clipboard.writeText(url).then(() => {
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
    });
  };

  const openGitHubIssue = () => {
    const title = encodeURIComponent(`【レビュー】LP案：${currentData.label}`);
    const body = encodeURIComponent(generateReviewText());
    // スクリーンショットに合わせて LP-for-MA に修正
    const githubUrl = `https://github.com/ourakawa/LP-for-MA/issues/new?title=${title}&body=${body}`;
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />
      
      {/* Review Studio Header */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="hidden sm:block text-nowrap">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 leading-none">
                  Review Pattern
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold text-slate-900">{currentData.label}</span>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1 leading-none">
                  Strategic Intent
                </div>
                <div className="text-sm font-bold text-slate-600">{currentData.strategy}</div>
              </div>
            </div>
            
            <nav className="flex items-center p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar scroll-smooth">
              {STRATEGIES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleStrategyChange(s.id)}
                  className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black transition-all duration-200 ${
                    activeStrategy === s.id 
                      ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeStrategy === s.id ? 'bg-blue-600' : 'bg-slate-300'}`}></span>
                  {s.label.split(' ')[0]}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Review Insight Card */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-blue-600 text-white p-6 rounded-[2rem] shadow-xl shadow-blue-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-black mb-1">このパターンの戦略的狙い</h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed font-medium">
                {currentData.id === 'pattern-1' && '競合の安心感を「技術的な信頼」に変換。IT知識がなくても「ここなら大丈夫」と思わせるエモーショナルな訴求。'}
                {currentData.id === 'pattern-2' && '初期コストだけでなく、SOC監視やSSL更新まで含めたトータルコストの優位性をロジカルに示すコスパ訴求。'}
                {currentData.id === 'pattern-3' && 'VPNのリスクが叫ばれる昨今の社会情勢をフックに、経営層や情シスにWAFの必要性を再定義させる課題解決型。'}
                {currentData.id === 'pattern-4' && '多忙な担当者のペインに寄り添い、SSL更新やログ監視を「手放せる」ことの心理的メリットを強調した運用代行訴求。'}
                {currentData.id === 'pattern-5' && '技術者やCTOに向け、AIとホワイトハッカーの知見という強力なUSPを前面に出したハイスペック訴求。'}
              </p>
            </div>
            <div className="flex flex-wrap shrink-0 gap-2 relative z-10">
              <button 
                onClick={copyLinkToClipboard}
                className={`px-5 py-3 rounded-xl text-xs font-black shadow-lg transition-all active:scale-95 flex items-center gap-2 ${
                  isLinkCopied ? 'bg-green-500 text-white' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {isLinkCopied ? 'URLをコピーしました' : 'この案を共有'}
              </button>
              <button 
                onClick={copyToClipboard}
                className={`px-5 py-3 rounded-xl text-xs font-black shadow-lg transition-all active:scale-95 flex items-center gap-2 ${
                  isCopied ? 'bg-green-500 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                {isCopied ? 'コピー完了' : '原稿コピー'}
              </button>
              <button 
                onClick={openGitHubIssue}
                className="px-5 py-3 bg-slate-900 text-white rounded-xl text-xs font-black shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 border border-slate-700"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHubレビュー
              </button>
            </div>
          </div>

          {/* LP Preview Frame */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-200 ring-offset-8 ring-offset-slate-100">
            <LPSection data={currentData} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
