import { createPortal } from 'react-dom'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null

	return createPortal(
		<div
			className={`modal-overlay open`}
			onClick={onClose}
		>
			<div
				className={`modal-content open`}
				onClick={e => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
			>
				<div className="flex items-center justify-between pb-7">
					<h2 className="font-bold text-2xl text-green-900">Settings</h2>
					<button onClick={onClose} className='p-2'>
						<svg
							width="12"
							height="12"
						>
							<use href="/icons.svg#close" />
						</svg>
					</button>
				</div>
				{children}
			</div>
		</div>,
		document.body
	)
}
