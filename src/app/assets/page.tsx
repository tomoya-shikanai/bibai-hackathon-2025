import Image from 'next/image'
import Footer from '@/components/Footer'

const assets = [
  {
    title: 'ヤキトリ男 立ち絵',
    image: '/assets/yakitorio/yakitorio-full.png',
    description: '全身立ち絵（PNG形式）',
    downloadUrl: '/assets/yakitorio/yakitorio-full.png',
  },
  {
    title: 'ヤキトリ男 パーツ集',
    image: '/assets/yakitorio/yakitorio-parts3-kinkan.png',
    description: '各種パーツ（PNG形式）',
    downloadUrl: '/assets/yakitorio/yakitorio-parts.zip',
  },
]

export default function AssetsPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-12'>
          <h1 className='text-4xl font-bold text-orange-800 mb-8 text-center'>
            ヤキトリ男 素材ダウンロード
          </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {assets.map((asset, index) => (
              <div key={index} className='border rounded-lg p-4 shadow-lg bg-white'>
                <Image
                  src={asset.image}
                  alt={asset.title}
                  width={300}
                  height={300}
                  className='w-full h-48 object-contain mb-4'
                />
                <h2 className='text-xl font-bold text-orange-800 mb-2'>{asset.title}</h2>
                <p className='text-orange-700 mb-4'>{asset.description}</p>
                <a
                  href={asset.downloadUrl}
                  download
                  className='block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 rounded transition duration-300'
                >
                  ダウンロード
                </a>
              </div>
            ))}
          </div>

          <div className='mt-12 p-6 bg-orange-50 rounded-lg'>
            <h2 className='text-2xl font-bold text-orange-800 mb-4'>利用規約</h2>
            <ul className='list-disc list-inside space-y-2 text-orange-700'>
              <li>素材は非営利目的での利用に限ります</li>
              <li>美唄市のPRに関連する用途でご利用ください</li>
              <li>素材の改変は可能ですが、ヤキトリ男のイメージを損なう使用はお控えください</li>
              <li>素材のクレジット表記をお願いします</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
