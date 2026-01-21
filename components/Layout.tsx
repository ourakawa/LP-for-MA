
import React from 'react';

export const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-black text-xl tracking-tighter">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">Ray-SOC <span className="text-blue-600">WAF</span></span>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">LPレビュー用スタジオ</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-blue-600 transition">特長</a>
          <a href="#" className="hover:text-blue-600 transition">導入事例</a>
          <a href="#" className="hover:text-blue-600 transition">料金プラン</a>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ourakawa/LP-for-MA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
            title="GitHub Repository"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition shadow-lg shadow-slate-200">
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="bg-[#0a192f] text-white py-20 mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">R</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">Ray-SOC <span className="text-blue-600">WAF</span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
            世界最大級のホワイトハッカー集団の知見と、独自開発のAIエンジンを融合。
            企業のWeb資産を24時間365日、プロフェッショナルが守り抜きます。
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
              <div key={social} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                <span className="text-[10px] font-bold tracking-tighter uppercase">{social[0]}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black text-xs uppercase tracking-widest text-white mb-6">製品情報</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-bold">
            <li><a href="#" className="hover:text-blue-400 transition">機能一覧</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">SOC監視体制</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">SSL更新代行</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">導入実績</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-xs uppercase tracking-widest text-white mb-6">運営会社</h4>
          <p className="text-slate-400 text-sm font-bold mb-2">株式会社レイ・イージス・ジャパン</p>
          <p className="text-slate-500 text-xs mb-8">Layer Aegis Japan Inc.</p>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">サポート窓口</p>
            <p className="text-sm font-black">03-XXXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          &copy; 2024 Ray-Aegis Japan Inc. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-white transition">プライバシーポリシー</a>
          <a href="#" className="hover:text-white transition">利用規約</a>
        </div>
      </div>
    </div>
  </footer>
);
