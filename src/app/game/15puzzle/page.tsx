'use client'

import { useEffect, useState } from 'react'
import styles from './puzzle.module.css'
import Image from 'next/image'

const PuzzlePage = () => {
  const puzzleSize = 4
  const tileSize = 100
  const [puzzle, setPuzzle] = useState<(number | null)[][]>([])
  const [emptyPosition, setEmptyPosition] = useState<{ row: number; col: number } | null>(null)
  const imgSrc = '/images/yakitori-02.jpg'

  // 目標となるパズルの状態
  const goalPuzzle = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ]

  // パズルの初期化
  const initPuzzle = () => {
    const newPuzzle: number[][] = []
    let count = 0

    for (let row = 0; row < puzzleSize; row++) {
      const rowArray: number[] = []
      for (let col = 0; col < puzzleSize; col++) {
        rowArray.push(count)
        count++
      }
      newPuzzle.push(rowArray)
    }
    setPuzzle(newPuzzle)
    setEmptyPosition(null)
  }

  // パズルのシャッフル
  const shufflePuzzle = () => {
    const audio = new Audio('/sound/plate-break.mp3')
    audio.play()

    const newPuzzle = puzzle.map((row) => [...row])
    newPuzzle[puzzleSize - 1][puzzleSize - 1] = null
    const newEmptyPosition = { row: puzzleSize - 1, col: puzzleSize - 1 }

    for (let i = 0; i < 1000; i++) {
      const directions = [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
      ]
      const randomDirection = directions[Math.floor(Math.random() * 4)]
      const newRow = newEmptyPosition.row + randomDirection.row
      const newCol = newEmptyPosition.col + randomDirection.col

      if (newRow >= 0 && newRow < puzzleSize && newCol >= 0 && newCol < puzzleSize) {
        newPuzzle[newEmptyPosition.row][newEmptyPosition.col] = newPuzzle[newRow][newCol]
        newPuzzle[newRow][newCol] = null
        newEmptyPosition.row = newRow
        newEmptyPosition.col = newCol
      }
    }

    setPuzzle(newPuzzle)
    setEmptyPosition(newEmptyPosition)
  }

  // タイルの移動
  const moveTile = (row: number, col: number) => {
    if (!emptyPosition) return

    const audio = new Audio('/sound/click.mp3')
    if (
      (Math.abs(row - emptyPosition.row) === 1 && col === emptyPosition.col) ||
      (Math.abs(col - emptyPosition.col) === 1 && row === emptyPosition.row)
    ) {
      const newPuzzle = puzzle.map((row) => [...row])
      newPuzzle[emptyPosition.row][emptyPosition.col] = newPuzzle[row][col]
      newPuzzle[row][col] = null
      setPuzzle(newPuzzle)
      setEmptyPosition({ row, col })
      audio.play()

      if (checkCompletion(newPuzzle)) {
        const completeAudio = new Audio('/sound/complete.mp3')
        completeAudio.play()
      }
    }
  }

  // 完成判定
  const checkCompletion = (currentPuzzle: (number | null)[][]) => {
    let count = 0
    for (let row = 0; row < puzzleSize; row++) {
      for (let col = 0; col < puzzleSize; col++) {
        if (currentPuzzle[row][col] === goalPuzzle[row][col]) {
          count += 1
        }
      }
    }
    return count >= 15
  }

  useEffect(() => {
    initPuzzle()
  }, [])

  return (
    <div className={styles.container}>
      <h1>焼き鳥男で15パズル</h1>
      <div className={styles.profilePuzzleWrapper}>
        <div className={styles.puzzle}>
          {puzzle.map((row, rowIndex) =>
            row.map((tile, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`${styles.tile} ${tile === null ? styles.emptyTile : ''}`}
                style={
                  tile !== null
                    ? {
                        backgroundImage: `url(${imgSrc})`,
                        backgroundPosition: `-${(tile % puzzleSize) * tileSize}px -${
                          Math.floor(tile / puzzleSize) * tileSize
                        }px`,
                      }
                    : {}
                }
                onClick={() => moveTile(rowIndex, colIndex)}
              />
            )),
          )}
        </div>
        <button
          className={styles.button}
          onClick={() => checkCompletion(puzzle) && shufflePuzzle()}
        >
          シャッフル
        </button>
      </div>
      <div>
        <h2>正解画像</h2>
        <Image src={imgSrc} alt='完成図' width={400} height={400} className={styles.img} />
      </div>
    </div>
  )
}

export default PuzzlePage
