/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estatico: o build gera `out/` e o Caddy serve os arquivos direto.
  // Nao ha processo Node em producao, entao nada aqui pode depender de
  // servidor (headers(), rewrites, rotas de API, otimizador de imagem).
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Sem servidor nao ha otimizador: o <Image> serve o arquivo como esta.
    // Por isso as fotos em public/ ja ficam no tamanho e formato finais.
    unoptimized: true,
  },
}

export default nextConfig
