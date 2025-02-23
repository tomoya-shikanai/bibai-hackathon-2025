import Image from 'next/image'

// サンプルのゲームデータ
const games = [
  {
    title: 'ヤキトリキャッチ',
    image: '/images/yakitori-character.png',
    description: '美唄の名産で美唄やきとりを全身運動で作ろう！',
  },
  {
    title: 'ヤキトリパズル',
    image: '/images/yakitori-character.png',
    description: '美唄のご当地キャラでパズル！',
  },
  {
    title: '農場シミュレーター',
    image: '/images/farm-simulator.jpg',
    description: '美唄の特産物を育てよう！',
  },
]

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='h-screen relative bg-gradient-to-b from-orange-100 to-orange-200'>
        <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-orange-800 text-center mb-8'>
            美唄のこどもたちのゲーム
          </h1>
          <div className='relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/yakitori-character.png'
              alt='美唄やきとりキャラクター'
              fill
              style={{ objectFit: 'contain' }}
              priority
              className='animate-bounce-slow'
            />
          </div>
        </div>
      </header>

      <main>
        <section id='message-area' className='py-12 text-center bg-orange-50'>
          <h2 className='text-3xl font-bold mb-4 text-orange-800'>
            美唄のこどもたちがスクラッチ開発
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
                  <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                    プレイ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className='bg-orange-800 text-white text-center py-4 mt-auto'>
        <p>&copy; 2025 美唄のこどもたちのゲーム. All rights reserved.</p>
      </footer>
    </div>
  )
}
