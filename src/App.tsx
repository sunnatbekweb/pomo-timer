import { useEffect, useState } from 'react'
import { Button } from './components/ui/Button'

function App() {
	const [isStarted, setIsStarted] = useState(false)
	const [timer, setTimer] = useState(25 * 60)

	useEffect(() => {
		if (!isStarted) return

		const intervalId = setInterval(() => {
			setTimer(prev => {
				if (prev <= 1) {
					clearInterval(intervalId)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(intervalId)
	}, [isStarted])

	const minutes = String(Math.floor(timer / 60)).padStart(2, '0')
	const seconds = String(timer % 60).padStart(2, '0')

	return (
		<main className="h-screen flex flex-col gap-y-8 justify-center items-center bg-green-50">
			<div className="h-12 px-4 rounded-full border-2 border-green-900 flex items-center gap-x-2">
				<svg
					width="32"
					height="32"
				>
					<use href="/icons.svg#cup" />
				</svg>
				<span className="font-medium text-2xl text-green-900">Short Break</span>
			</div>
			<h2 className="font-extrabold text-[16rem] leading-[85%] text-green-900 mb-8">
				{minutes} <br /> {seconds}
			</h2>
			<div className="flex items-center gap-x-4">
				<Button variant="secondary">
					<svg
						width="27"
						height="7"
						role="presentation"
						aria-hidden="true"
						className="mx-auto"
					>
						<use href="/icons.svg#three-dots"></use>
					</svg>
				</Button>
				<Button
					size="lg"
					onClick={() => setIsStarted(prev => !prev)}
				>
					{isStarted ? (
						<svg
							width="22"
							height="24"
							className="mx-auto"
						>
							<use href="/icons.svg#pause" />
						</svg>
					) : (
						<svg
							width="22"
							height="26"
							className="mx-auto"
						>
							<use href="/icons.svg#play" />
						</svg>
					)}
				</Button>
				<Button variant="secondary">
					<svg
						width="30"
						height="19"
						role="presentation"
						aria-hidden="true"
						className="mx-auto"
					>
						<use href="/icons.svg#seek" />
					</svg>
				</Button>
			</div>
		</main>
	)
}

export default App
