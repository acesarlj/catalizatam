import React from "react";
import "./index.css"; // garante que o Tailwind seja aplicado

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8 shadow-md text-center">
        <h1 className="text-4xl font-bold">CatalisaLatam</h1>
        <p className="mt-2 text-xl max-w-2xl mx-auto">
          Transformando impacto em escala com tecnologia e conexão humana.  
          A plataforma que acelera o futuro das ONGs, conecta marcas conscientes  
          e engaja cidadãos catalizadores.
        </p>
      </header>

      <section className="p-8 grid gap-12 lg:grid-cols-3">
        {/* ONGs */}
        <div>
          <h2 className="text-3xl font-semibold text-purple-700">Para ONGs e Projetos</h2>
          <ul className="mt-4 space-y-3">
            <li>🔍 <strong>Radar IA:</strong> escaneia oportunidades de editais em tempo real com match personalizado.</li>
            <li>📄 <strong>SmartDocs:</strong> digitaliza e formata automaticamente documentos como notas fiscais.</li>
            <li>🌐 <strong>Identidade Digital:</strong> página viva com dados dinâmicos e storytelling do projeto.</li>
            <li>🤖 <strong>Mentorias IA + Humanas:</strong> acompanhamento inteligente com especialistas.</li>
            <li>🏅 <strong>Aceleração por Mérito:</strong> badges e benefícios conforme performance e engajamento.</li>
          </ul>
        </div>

        {/* Empresas */}
        <div>
          <h2 className="text-3xl font-semibold text-pink-600">Para Empresas e Marcas</h2>
          <ul className="mt-4 space-y-3">
            <li>📊 <strong>Dashboard ESG:</strong> relatórios em tempo real com dados e vídeos de impacto.</li>
            <li>✅ <strong>Perfil Corporativo:</strong> selo validado via blockchain e página de impacto.</li>
            <li>💬 <strong>Curadoria de Parcerias:</strong> IA sugere projetos alinhados com a identidade da marca.</li>
            <li>🤝 <strong>Clube de Marcas Humanizadas:</strong> rede de networking com outras empresas de impacto.</li>
            <li>🎯 <strong>Hackathons Sociais:</strong> lance desafios e cocrie soluções com ONGs e talentos locais.</li>
          </ul>
        </div>

        {/* Pessoas */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600">Para Todos</h2>
          <ul className="mt-4 space-y-3">
            <li>🎒 <strong>Seja voluntário:</strong> encontre vagas de voluntariado remoto e presencial.</li>
            <li>🎁 <strong>Moedas Catalisa:</strong> troque engajamento por mentorias e experiências.</li>
            <li>📲 <strong>App gamificado:</strong> acompanhe seu impacto e colecione badges de catalisador.</li>
            <li>📚 <strong>Clube Catalisa:</strong> conteúdos exclusivos sobre inovação social e propósito.</li>
            <li>🗺️ <strong>Mapa Vivo:</strong> explore projetos ativos em tempo real pela América Latina.</li>
          </ul>
        </div>
      </section>

      <section className="text-center mt-12 p-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-amber-800">Vamos catalisar o futuro?</h2>
        <p className="mb-4 text-amber-700">
          Cadastre sua ONG, empresa ou interesse em ser voluntário. A transformação começa agora.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="border p-2 rounded max-w-xs w-full lg:w-auto"
          />
          <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">
            Quero fazer parte
          </button>
        </div>
      </section>

      <footer className="bg-gray-100 text-center p-6 mt-8 text-sm text-gray-600">
        <p>© 2025 CatalisaLatam. Plataforma construída com propósito para transformar a América Latina.</p>
      </footer>
    </div>
  );
}
