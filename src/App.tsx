import { useState } from 'react'

function App() {
	const [isStarted, setIsStarted] = useState(false)

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
				04 <br /> 59
			</h2>
			<div className="flex items-center gap-x-4">
				<button className="w-20 h-20 bg-green-100 rounded-3xl text-center">
					<svg
						width="27"
						height="7"
						role="presentation"
						aria-hidden="true"
						className="mx-auto"
					>
						<use href="/icons.svg#three-dots"></use>
					</svg>
				</button>
				<button
					onClick={() => setIsStarted(!isStarted)}
					className="w-32 h-24 bg-green-300 rounded-4xl text-center"
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
				</button>
				<button className="w-20 h-20 bg-green-100 rounded-3xl text-center">
					<svg
						width="30"
						height="19"
						role="presentation"
						aria-hidden="true"
						className="mx-auto"
					>
						<use href="/icons.svg#seek" />
					</svg>
				</button>
			</div>
		</main>
	)
}

export default App
