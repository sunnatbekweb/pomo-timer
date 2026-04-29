type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: Variant
	size?: Size
}

const VariantStyles = {
	primary: 'bg-green-300',
	secondary: 'bg-green-100',
	ghost: 'bg-transparent'
}

const SizeStyles = {
	sm: 'rounded-lg p-2 w-8.5 h-8.5',
	md: 'rounded-3xl p-6 w-20 h-20',
	lg: 'rounded-4xl py-8 px-12 w-32 h-24'
}

export const Button = ({
	children,
	onClick,
	variant = 'primary',
	size = 'md'
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`${VariantStyles[variant]} ${SizeStyles[size]}`}
		>
			{children}
		</button>
	)
}
