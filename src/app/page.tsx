import Image from 'next/image'
import Footer from '@/components/Footer'

// サンプルのゲームデータ
const games = [
  {
    title: 'ヤキトリキャッチ',
    image: '/images/yakitori-character.png',
    description: '美唄の名産で美唄やきとりを全身運動で作ろう！',
    url: '/game/catch',
  },
  {
    title: 'ヤキトリ男15パズル',
    image: '/images/yakitorio-15puzzle.png',
    description: '美唄のご当地キャラでパズル！',
    url: '/game/15puzzle',
  },
  // {
  //   title: '農場シミュレーター',
  //   image: '/images/farm-simulator.jpg',
  //   description: '美唄の特産物を育てよう！',
  // },
]

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='h-screen relative bg-gradient-to-b from-orange-100 to-orange-200'>
        <Image
          src='/images/key-visual.jpg'
          alt='美唄ハッカソンキービジュアル'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/20'>
          <h1 className='text-4xl md:text-6xl font-bold text-white text-center mb-8'>
            こどもたちの力でカントリー5をハックしよう！
          </h1>
        </div>
      </header>

      <main>
        <section id='message-area' className='py-12 text-center bg-orange-50'>
          <h2 className='text-3xl font-bold mb-4 text-orange-800'>
            美唄のこどもたちがScratchでアプリ開発
          </h2>
          <p className='text-xl max-w-2xl mx-auto text-orange-700'>
            美唄の子どもたちが、地域の特色を活かしたゲームを開発しました。
            やきとりや農業など、美唄の魅力が詰まったゲームをお楽しみください。
          </p>
        </section>

        <section id='mini-games' className='py-12 bg-white'>
          <h2 className='text-2xl font-bold text-center mb-8 text-orange-800'>ミニゲーム</h2>
          <div className='flex flex-wrap justify-center gap-8 px-4'>
            {games.map((game, index) => (
              <div
                key={index}
                className='w-full sm:w-80 border rounded-lg overflow-hidden shadow-lg bg-white'
              >
                <Image
                  src={game.image || '/placeholder.svg'}
                  alt={game.title}
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <div className='p-4'>
                  <h3 className='font-bold text-xl mb-2 text-orange-800'>{game.title}</h3>
                  <p className='text-orange-700 mb-4'>{game.description}</p>
                  <a
                    href={game.url}
                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300'
                  >
                    プレイ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='yakitorio' className='py-12 bg-orange-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center text-orange-800'>
              美唄一の肉体美、魅力のプロポーション、ヤキトリ男
            </h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
              <div className='md:w-1/2 flex justify-center'>
                <Image
                  src='/assets/yakitorio/yakitorio-full.png'
                  alt='ヤキトリ男'
                  width={200}
                  height={250}
                  className='rounded-lg'
                />
              </div>
              <div className='md:w-1/2 space-y-4'>
                <p className='text-lg text-orange-700'>
                  美唄のマスコットキャラクター「ヤキトリ男」の素材を提供しています。
                  デジタルコンテンツ開発にご活用ください。
                </p>
                <a
                  href='/assets'
                  className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300'
                >
                  素材ダウンロードページへ
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id='yakitori-shokudo' className='py-12 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='md:w-1/2'>
                <Image
                  src='/images/yakitori-shokudo.jpg'
                  alt='ヤキトリ食堂'
                  width={600}
                  height={400}
                  className='rounded-lg'
                />
              </div>
              <div className='md:w-1/2 space-y-6'>
                <h2 className='text-3xl font-bold text-orange-800'>美唄のヒーロー ヤキトリ食堂</h2>
                <p className='text-lg text-orange-700'>
                  明日のための、美唄の味。みんなのトリ男。
                </p>
                <p className='text-orange-600'>
                  厳選された新鮮な食材と、職人の技が織りなす極上の一串をお届けします。
                </p>
                <a
                  href='/restaurant'
                  className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300'
                >
                  詳しく見る
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
